// Player physics + movement state machine:
//   ground  - running / sprinting / jumping
//   air     - falling, diving, tricks
//   swing   - pendulum on a web line (inextensible rope constraint)
//   wall    - wall-running / clinging to building faces
//   zip     - point-zip toward a targeted ledge
import * as THREE from 'three';
import { PHYS, CITY } from './config.js';
import { clamp, damp } from './util.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _d = new THREE.Vector3();
const _hit = {};

export class Player {
  constructor(world) {
    this.world = world;
    this.pos = new THREE.Vector3(0, 40, 0);
    this.vel = new THREE.Vector3();
    this.state = 'air';
    this.c = {};
    this.facing = 0;
    // anchor = physics pivot (in the plane of travel), visual = where the web actually sticks
    this.rope = { active: false, anchor: new THREE.Vector3(), visual: new THREE.Vector3(), length: 0, target: 0, side: 1, time: 0, box: null };
    this.nextSide = 1;
    this.zip = { target: new THREE.Vector3(), perch: false, nx: 0, nz: 0, time: 0, launchQueued: false, box: null };
    this.zipCandidate = { valid: false, target: new THREE.Vector3(), perch: false, nx: 0, nz: 0, box: null };
    this.wall = { nx: 0, nz: 0, box: null, time: 0, climbing: false };
    this.diving = false;
    this.flipT = -1; this.flipDur = 0.6; this.flipDir = 1;
    this.twistT = -1;
    this.rollT = -1;
    this.landT = 0;
    this.perchT = 0;
    this.throwT = 0;
    this.runPhase = 0;
    this.stepAcc = 0;
    this.coyote = 0;
    this.swingCooldown = 0;
    this.wallCooldown = 0;
    this.jumpHeldT = 0;
    this.airTime = 0;
    this.groundTime = 0;
    this.respawnT = -1;
    this.lastSafe = new THREE.Vector3(0, 40, 0);
    this.safeTimer = 0;
    this.events = [];
    this.anchorHint = false;
    this.hintTimer = 0;
    this.combo = { count: 0, score: 0, best: 0 };
    this.stats = { range: PHYS.ROPE_MAX, power: PHYS.SWING_ASSIST, zip: PHYS.ZIP_SPEED };
    this.autoChain = true;
    this.moveDir = new THREE.Vector3();
    this.camFwd = new THREE.Vector3(0, 0, -1);
  }

  emit(type, data = {}) {
    this.events.push({ type, ...data });
  }

  teleport(x, y, z) {
    if (this.rope.active) this.emit('release', { side: this.rope.side, anchor: this.rope.anchor.clone(), kind: 'teleport' });
    this.pos.set(x, y, z);
    this.vel.set(0, 0, 0);
    this.state = 'air';
    this.rope.active = false;
    this.lastSafe.copy(this.pos);
  }

  get speed() {
    return this.vel.length();
  }

  addStyle(points, label) {
    this.combo.count++;
    this.combo.score += points * Math.min(1 + this.combo.count * 0.1, 4);
    if (label) this.emit('style', { label, points });
  }

  // ------------------------------------------------------------ main update
  update(dt, input, cam) {
    if (this.respawnT >= 0) {
      this.respawnT -= dt;
      if (this.respawnT < 0) {
        this.teleport(this.lastSafe.x, this.lastSafe.y + 0.5, this.lastSafe.z);
        this.emit('respawn');
      }
      return;
    }
    // camera-relative move direction
    const yaw = cam.yaw;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    const rx = Math.cos(yaw), rz = -Math.sin(yaw);
    this.moveDir.set(fx * input.move.y + rx * input.move.x, 0, fz * input.move.y + rz * input.move.x);
    if (this.moveDir.lengthSq() > 1) this.moveDir.normalize();
    cam.getForward(this.camFwd);

    // timers
    this.swingCooldown -= dt;
    this.wallCooldown -= dt;
    this.coyote -= dt;
    this.landT = Math.max(0, this.landT - dt);
    this.perchT = Math.max(0, this.perchT - dt);
    this.throwT = Math.max(0, this.throwT - dt);
    if (this.flipT >= 0) { this.flipT += dt; if (this.flipT > this.flipDur) this.flipT = -1; }
    if (this.twistT >= 0) { this.twistT += dt; if (this.twistT > 0.6) this.twistT = -1; }
    if (this.rollT >= 0) { this.rollT += dt; if (this.rollT > 0.5) this.rollT = -1; }

    // ---- discrete actions (once per frame)
    if (input.zipPressed) this.tryZip();
    if (input.jumpPressed) this.onJumpPressed();
    if (input.jumpHeld) this.jumpHeldT += dt;
    if (input.jumpReleased) this.onJumpReleased();
    if (this.state === 'air' && input.jumpHeld && this.jumpHeldT > 0.2 && !this.diving && this.airTime > 0.15) {
      this.diving = true;
      this.emit('dive');
    }
    if (!input.jumpHeld || this.state !== 'air') this.diving = this.state === 'air' && this.diving && input.jumpHeld;

    // swing button: a fresh press always fires a web; holding it keeps
    // chaining webs while airborne once we stop rising (hold-to-cruise)
    const fresh = input.swingHeld && !this.prevSwingHeld;
    this.prevSwingHeld = input.swingHeld;
    if (input.swingHeld && !this.rope.active && this.state !== 'zip' && this.swingCooldown <= 0) {
      if (fresh || (this.state === 'air' && this.vel.y < 4)) this.tryAttach();
    }
    if (!input.swingHeld && this.rope.active) this.release('manual');
    if (!input.swingHeld) this._missEmitted = false;

    // ---- physics substeps
    const steps = Math.min(8, Math.ceil(dt / (1 / 120)));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) this.step(h, input);

    // rope wrapping around building edges (checked once per frame)
    if (this.rope.active) this.checkWrap();

    // facing
    const sh = Math.hypot(this.vel.x, this.vel.z);
    if (this.state === 'ground') {
      if (sh > 0.5) this.facing = Math.atan2(this.vel.x, this.vel.z);
    } else if (sh > 2) {
      this.facing = Math.atan2(this.vel.x, this.vel.z);
    }

    // air / ground time + combo banking
    if (this.state === 'ground') {
      this.groundTime += dt;
      this.airTime = 0;
      if (this.groundTime > 0.6 && this.combo.count > 0) this.endCombo();
      this.safeTimer += dt;
      if (this.safeTimer > 1) {
        this.safeTimer = 0;
        this.lastSafe.copy(this.pos);
      }
    } else {
      this.airTime += dt;
      this.groundTime = 0;
    }

    // fell in the bay?
    if (this.pos.y < CITY.WATER_Y + 0.3 && this.world.groundAt(this.pos.x, this.pos.z) === null) {
      this.emit('splash', { x: this.pos.x, z: this.pos.z });
      this.respawnT = 1.2;
      this.rope.active = false;
      this.state = 'air';
      this.vel.set(0, 0, 0);
      this.endCombo();
    }
    // world bounds
    const lim = 2600;
    this.pos.x = clamp(this.pos.x, -lim, lim);
    this.pos.z = clamp(this.pos.z, -lim, lim);

    // UI hints (zip target + whether a swing anchor is in range)
    this.updateZipCandidate(cam);
    this.hintTimer -= dt;
    if (this.hintTimer <= 0) {
      this.hintTimer = 0.2;
      this.anchorHint = this.rope.active || !!this.findAnchor(this.desiredDir(_v2), this.nextSide);
    }
  }

  endCombo() {
    if (this.combo.count >= 3) {
      const pts = Math.round(this.combo.score);
      this.emit('comboEnd', { points: pts, count: this.combo.count });
      this.combo.best = Math.max(this.combo.best, pts);
    }
    this.combo.count = 0;
    this.combo.score = 0;
  }

  // --------------------------------------------------------------- actions
  onJumpPressed() {
    this.jumpHeldT = 0;
    const s = this.state;
    if (s === 'ground' || (s === 'air' && this.coyote > 0)) {
      const sh = Math.hypot(this.vel.x, this.vel.z);
      this.vel.y = PHYS.JUMP + Math.min(sh * 0.12, 3);
      this.state = 'air';
      this.coyote = 0;
      this.emit('jump');
      if (this.perchT > 0) {
        // point launch off a perch
        this.vel.x += this.camFwd.x * 12;
        this.vel.z += this.camFwd.z * 12;
        this.vel.y = 16;
        this.flip(0.7);
        this.addStyle(40, 'POINT LAUNCH');
        this.emit('launch');
      }
    } else if (s === 'wall') {
      this.wallJump();
    } else if (s === 'swing') {
      this.release('jump');
    } else if (s === 'zip') {
      this.zip.launchQueued = true;
    }
  }

  onJumpReleased() {
    if (this.state === 'air' && this.jumpHeldT < 0.2 && this.airTime > 0.25 && this.flipT < 0 && this.twistT < 0 && !this.diving) {
      // quick tap in the air = trick
      if (Math.random() < 0.5) this.flip(0.6); else this.twistT = 0;
      this.addStyle(25, 'TRICK');
      this.emit('trick');
    }
    this.diving = false;
    this.jumpHeldT = 0;
  }

  flip(dur) {
    this.flipT = 0;
    this.flipDur = dur;
    this.flipDir = 1;
  }

  desiredDir(out) {
    const sh = Math.hypot(this.vel.x, this.vel.z);
    out.set(this.camFwd.x, 0, this.camFwd.z);
    if (out.lengthSq() < 1e-4) out.set(Math.sin(this.facing), 0, Math.cos(this.facing));
    out.normalize();
    if (sh > 4) {
      out.multiplyScalar(0.6).add(_d.set(this.vel.x / sh, 0, this.vel.z / sh).multiplyScalar(0.4)).normalize();
    }
    if (this.moveDir.lengthSq() > 0.04) {
      out.multiplyScalar(0.35).addScaledVector(this.moveDir, 0.65).normalize();
    }
    return out;
  }

  // Choose the best web anchor around an "ideal" point ahead/above the hero.
  findAnchor(D, side) {
    const P = this.pos, V = this.vel;
    const maxLen = this.stats.range;
    const sh = Math.hypot(V.x, V.z);
    const ahead = clamp(16 + sh * 0.55, 16, 44);
    const up = clamp(22 + sh * 0.2, 22, 34);
    const rx = -D.z, rz = D.x; // right of D
    const ix = P.x + D.x * ahead + rx * side * 9;
    const iy = P.y + up;
    const iz = P.z + D.z * ahead + rz * side * 9;
    const r = maxLen;
    const list = this.world.queryAABB(P.x - r, P.y - 5, P.z - r, P.x + r, P.y + r, P.z + r).slice();
    let best = null, bestScore = Infinity, second = null, secondScore = Infinity;
    for (const b of list) {
      if (b.maxY < 7) continue;
      let cx = clamp(ix, b.minX, b.maxX);
      let cy = clamp(iy, b.minY, b.maxY);
      let cz = clamp(iz, b.minZ, b.maxZ);
      if (cy >= b.maxY - 1e-3 && cx > b.minX && cx < b.maxX && cz > b.minZ && cz < b.maxZ) {
        // ideal point is above the roof: snap to the roof edge facing the hero
        const ox = P.x < b.minX ? b.minX - P.x : P.x > b.maxX ? P.x - b.maxX : 0;
        const oz = P.z < b.minZ ? b.minZ - P.z : P.z > b.maxZ ? P.z - b.maxZ : 0;
        if (ox === 0 && oz === 0) continue; // building is under us
        if (ox >= oz) cx = P.x < b.minX ? b.minX : b.maxX;
        else cz = P.z < b.minZ ? b.minZ : b.maxZ;
      }
      const dx = cx - P.x, dy = cy - P.y, dz = cz - P.z;
      const L = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (L < 8 || L > maxLen) continue;
      if (dy < 7) continue;
      const hd = Math.hypot(dx, dz) || 1;
      const fwd = (dx * D.x + dz * D.z) / hd;
      let score = Math.hypot(cx - ix, cy - iy, cz - iz);
      if (dy < 16) score += (16 - dy) * 2.5;
      if (fwd < -0.15) score += 70;
      score -= fwd * 10;
      if (L > maxLen * 0.85) score += (L - maxLen * 0.85) * 2;
      if (score < bestScore) {
        second = best; secondScore = bestScore;
        best = { x: cx, y: cy, z: cz, box: b, L }; bestScore = score;
      } else if (score < secondScore) {
        second = { x: cx, y: cy, z: cz, box: b, L }; secondScore = score;
      }
    }
    for (const c of [best, second]) {
      if (!c) continue;
      const ddx = (c.x - P.x) / c.L, ddy = (c.y - P.y) / c.L, ddz = (c.z - P.z) / c.L;
      const hit = this.world.raycast(P.x, P.y + 0.5, P.z, ddx, ddy, ddz, c.L + 1, _hit);
      if (!hit) return c;
      if (hit.t >= c.L - 1.2) return c;
      if (hit.box === c.box || hit.t > 10) {
        // the line hits a building first - attach there instead
        if (hit.y > P.y + 7 && hit.t > 8) return { x: hit.x, y: hit.y, z: hit.z, box: hit.box, L: hit.t };
      }
    }
    return null;
  }

  tryAttach() {
    const D = this.desiredDir(_v2);
    let side = this.nextSide;
    let a = this.findAnchor(D, side);
    if (!a) {
      side = -side;
      a = this.findAnchor(D, side);
    }
    if (!a) {
      if (!this._missEmitted) {
        this.emit('miss');
        this._missEmitted = true;
      }
      return false;
    }
    this._missEmitted = false;
    const r = this.rope;
    r.active = true;
    r.visual.set(a.x, a.y, a.z);
    // Swing-plane pivot: keep the real height and forward distance of the anchor
    // but pull it toward our line of travel, so the pendulum carries us down the
    // street instead of slamming us sideways into the wall the web is stuck to.
    const sh = Math.hypot(this.vel.x, this.vel.z);
    const dx = sh > 3 ? this.vel.x / sh : D.x, dz = sh > 3 ? this.vel.z / sh : D.z;
    const rx = a.x - this.pos.x, rz = a.z - this.pos.z;
    const along = rx * dx + rz * dz;
    const lx = rx - dx * along, lz = rz - dz * along;
    const al = clamp(along, 5, 60);
    r.anchor.set(this.pos.x + dx * al + lx * 0.08, a.y, this.pos.z + dz * al + lz * 0.08);
    r.box = a.box;
    r.length = this.pos.distanceTo(r.anchor);
    // keep the bottom of the arc safely above the street
    r.target = Math.max(PHYS.ROPE_MIN, Math.min(r.length, a.y - 3.4));
    r.side = side;
    r.time = 0;
    this.nextSide = -side;
    if (this.state === 'ground') {
      this.vel.y = Math.max(this.vel.y, 7);
      this.pos.y += 0.05;
    } else if (this.state === 'wall') {
      // kick off the wall into the swing
      this.vel.x += this.wall.nx * 6;
      this.vel.z += this.wall.nz * 6;
      this.wallCooldown = 0.5;
    }
    r.dirX = dx;
    r.dirZ = dz;
    // momentum boost when catching a fall: redirect a little downward speed forward
    if (this.vel.y < -10) {
      const k = Math.min(-this.vel.y - 10, 12) * 0.25;
      this.vel.x += D.x * k;
      this.vel.z += D.z * k;
    }
    this.state = 'swing';
    this.diving = false;
    this.addStyle(10, null);
    this.emit('web', { side, anchor: r.visual.clone() });
    return true;
  }

  release(kind) {
    const r = this.rope;
    if (!r.active) return;
    r.active = false;
    this.state = 'air';
    this.swingCooldown = kind === 'auto' ? 0.06 : 0.12;
    // where are we on the arc?
    _v.copy(this.pos).sub(r.anchor);
    const dist = _v.length() || 1;
    const cosT = -_v.y / dist; // 1 = straight below anchor
    const sh = Math.hypot(this.vel.x, this.vel.z) || 1;
    const ahead = _v.x * r.dirX + _v.z * r.dirZ > 0;
    const theta = Math.acos(clamp(cosT, -1, 1));
    const perfect = this.vel.y > 1 && ahead && theta > 0.45 && theta < 1.05 && r.time > 0.35;
    if (kind === 'jump') {
      this.vel.y += 7.5;
      this.vel.x += (this.vel.x / sh) * 3;
      this.vel.z += (this.vel.z / sh) * 3;
      this.flip(0.65);
      this.addStyle(20, null);
    }
    if (perfect && kind !== 'auto') {
      this.vel.multiplyScalar(1.1);
      this.vel.y += 3;
      this.addStyle(35, 'PERFECT RELEASE');
      this.emit('perfect');
    } else if (kind === 'auto') {
      this.vel.multiplyScalar(1.02);
      this.vel.y += 1.5;
      // hold-to-cruise should carry you along the street, not rocket you skyward
      if (this.vel.y > 16) {
        const extra = this.vel.y - 16;
        this.vel.y = 16 + extra * 0.3;
        const k = (extra * 0.5) / sh;
        this.vel.x += this.vel.x * k;
        this.vel.z += this.vel.z * k;
      }
    }
    this.emit('release', { side: r.side, anchor: r.anchor.clone(), kind });
  }

  checkWrap() {
    const r = this.rope;
    _d.copy(r.visual).sub(this.pos);
    const dist = _d.length();
    if (dist < 4 || r.time < 0.15) return;
    _d.divideScalar(dist);
    const hit = this.world.raycast(this.pos.x, this.pos.y, this.pos.z, _d.x, _d.y, _d.z, dist - 0.8, _hit);
    if (hit && hit.t < dist - 1.5 && hit.t > 2) {
      // the line caught on a building edge: it wraps around that corner
      r.visual.set(hit.x + hit.nx * 0.05, hit.y + hit.ny * 0.05, hit.z + hit.nz * 0.05);
      this.emit('wrap', { anchor: r.visual.clone() });
    }
  }

  updateZipCandidate(cam) {
    const z = this.zipCandidate;
    z.valid = false;
    const o = cam.position;
    const f = this.camFwd;
    // start the ray past the hero so third-person cameras don't target behind
    const skip = Math.max(0, _v.copy(this.pos).sub(o).dot(f)) + 2;
    const maxT = skip + 115;
    const hit = this.world.raycast(o.x + f.x * skip, o.y + f.y * skip, o.z + f.z * skip, f.x, f.y, f.z, maxT - skip, _hit);
    if (!hit) return;
    const b = hit.box;
    const d = Math.hypot(hit.x - this.pos.x, hit.y - this.pos.y, hit.z - this.pos.z);
    if (d < 6 || d > 115) return;
    z.box = b;
    if (hit.ny > 0.5) {
      z.target.set(hit.x, hit.y + PHYS.HALF_H + 0.05, hit.z);
      z.perch = true;
    } else if (Math.abs(hit.ny) < 0.5 && b.maxY - hit.y < 14) {
      z.target.set(hit.x - hit.nx * 0.7, b.maxY + PHYS.HALF_H + 0.05, hit.z - hit.nz * 0.7);
      z.perch = true;
      // make sure the perch spot is clear
      if (this.world.overlaps(z.target.x, z.target.y, z.target.z, PHYS.HALF_W, PHYS.HALF_H)) return;
    } else if (Math.abs(hit.ny) < 0.5) {
      z.target.set(hit.x + hit.nx * 0.45, hit.y, hit.z + hit.nz * 0.45);
      z.perch = false;
    } else return;
    z.nx = hit.nx; z.nz = hit.nz;
    z.valid = true;
  }

  tryZip() {
    const c = this.zipCandidate;
    if (!c.valid || this.state === 'zip') return;
    if (this.rope.active) {
      this.rope.active = false;
      this.emit('release', { side: this.rope.side, anchor: this.rope.anchor.clone(), kind: 'zip' });
    }
    const z = this.zip;
    z.target.copy(c.target);
    z.perch = c.perch; z.nx = c.nx; z.nz = c.nz; z.box = c.box;
    z.time = 0;
    z.launchQueued = false;
    // Perching on a ledge from below: fly to a point just outside the face,
    // above the roof line, then hop over the edge so we never clip the wall.
    z.useVia = false;
    const b = c.box;
    if (c.perch && b && this.pos.y - PHYS.HALF_H < b.maxY) {
      const P = this.pos;
      const ox = P.x < b.minX ? b.minX - P.x : P.x > b.maxX ? P.x - b.maxX : -1;
      const oz = P.z < b.minZ ? b.minZ - P.z : P.z > b.maxZ ? P.z - b.maxZ : -1;
      const m = PHYS.HALF_W + 0.9;
      z.via = z.via || new THREE.Vector3();
      if (ox >= 0 || oz >= 0) {
        z.via.copy(z.target);
        z.via.y = b.maxY + PHYS.HALF_H + 0.4;
        if (ox >= oz) z.via.x = P.x < b.minX ? b.minX - m : b.maxX + m;
        else z.via.z = P.z < b.minZ ? b.minZ - m : b.maxZ + m;
        z.useVia = true;
      }
    }
    this.state = 'zip';
    this.diving = false;
    this.addStyle(15, null);
    this.emit('zip', { target: z.target.clone() });
  }

  wallJump() {
    const w = this.wall;
    this.vel.set(w.nx * 9 + this.camFwd.x * 4, 10, w.nz * 9 + this.camFwd.z * 4);
    this.state = 'air';
    this.wallCooldown = 0.35;
    this.flip(0.55);
    this.addStyle(20, 'WALL JUMP');
    this.emit('jump');
  }

  enterWall(nx, nz, box, impact) {
    if (!box || box.maxY - this.pos.y < 1.2) {
      // tiny obstacle - just hop onto it
      if (box && box.maxY - (this.pos.y - PHYS.HALF_H) < 2.2) {
        this.pos.y = box.maxY + PHYS.HALF_H + 0.02;
        return;
      }
    }
    const w = this.wall;
    const was = this.state;
    w.nx = nx; w.nz = nz; w.box = box; w.time = 0;
    // convert horizontal momentum into vertical run (parkour)
    const inSpeed = impact;
    this.vel.y = Math.max(this.vel.y, Math.min(26, inSpeed * 0.75 + (was === 'ground' ? 4 : 2)));
    if (this.rope.active) {
      this.rope.active = false;
      this.emit('release', { side: this.rope.side, anchor: this.rope.anchor.clone(), kind: 'wall' });
    }
    this.state = 'wall';
    this.diving = false;
    if (impact > 16) this.emit('impact', { amount: impact - 16 });
    this.emit('wallLand', { impact });
    this.addStyle(10, null);
  }

  // ---------------------------------------------------------------- physics
  step(h, input) {
    switch (this.state) {
      case 'ground': return this.stepGround(h, input);
      case 'air': return this.stepAir(h, input);
      case 'swing': return this.stepSwing(h, input);
      case 'wall': return this.stepWall(h, input);
      case 'zip': return this.stepZip(h, input);
    }
  }

  applyDrag(h, k) {
    const v = this.vel;
    const s = v.length();
    if (s > 0) v.multiplyScalar(Math.max(0, 1 - k * s * h));
    if (s > PHYS.MAX_SPEED) v.multiplyScalar(PHYS.MAX_SPEED / s);
  }

  move(h) {
    return this.world.moveBody(this.pos, this.vel, h, PHYS.HALF_W, PHYS.HALF_H, this.c);
  }

  stepGround(h) {
    const v = this.vel;
    const md = this.moveDir;
    const mag = md.length();
    const target = mag > 0.85 ? PHYS.SPRINT : (PHYS.RUN * mag) / 0.85;
    const tx = mag > 0.01 ? (md.x / mag) * target : 0;
    const tz = mag > 0.01 ? (md.z / mag) * target : 0;
    const sh = Math.hypot(v.x, v.z);
    const rate = sh > PHYS.SPRINT + 1 ? 2.2 : this.landT > 0 ? 3 : PHYS.GROUND_ACCEL;
    const k = damp(rate, h);
    v.x += (tx - v.x) * k;
    v.z += (tz - v.z) * k;
    v.y -= PHYS.GRAVITY * h;
    const c = this.move(h);
    const s2 = Math.hypot(v.x, v.z);
    this.runPhase += s2 * h * (Math.PI * 2 / 2.7);
    this.stepAcc += s2 * h;
    if (this.stepAcc > 1.35) {
      this.stepAcc = 0;
      this.emit('step', { speed: s2 });
    }
    if (c.wall && mag > 0.5 && this.wallCooldown <= 0) {
      const into = -(md.x * c.wallNX + md.z * c.wallNZ) / mag;
      if (into > 0.6) {
        this.enterWall(c.wallNX, c.wallNZ, c.wallBox, Math.max(sh, 4));
        return;
      }
    }
    if (!c.ground) {
      this.state = 'air';
      this.coyote = 0.15;
    }
  }

  stepAir(h) {
    const v = this.vel;
    v.y -= PHYS.GRAVITY * h * (this.diving ? 1.35 : 1);
    this.applyDrag(h, this.diving ? PHYS.DIVE_DRAG : PHYS.DRAG);
    // air control: steer without adding much speed
    const md = this.moveDir;
    if (md.lengthSq() > 0.01) {
      const sh0 = Math.hypot(v.x, v.z);
      v.x += md.x * PHYS.AIR_ACCEL * h;
      v.z += md.z * PHYS.AIR_ACCEL * h;
      const sh1 = Math.hypot(v.x, v.z);
      const cap = Math.max(sh0, 10);
      if (sh1 > cap) { v.x *= cap / sh1; v.z *= cap / sh1; }
    }
    const pre = v.clone();
    const c = this.move(h);
    if (c.ground) {
      this.land(c.impactY, pre);
      return;
    }
    if (c.wall && this.wallCooldown <= 0 && this.wantsWall(pre, c)) {
      this.enterWall(c.wallNX, c.wallNZ, c.wallBox, Math.abs(pre.x * c.wallNX + pre.z * c.wallNZ));
    }
  }

  // Stick to a wall we hit head-on (or steer into); just graze past otherwise.
  wantsWall(pre, c) {
    const md = this.moveDir;
    const into = md.lengthSq() > 0.04 ? -(md.x * c.wallNX + md.z * c.wallNZ) / md.length() : 0;
    const vin = Math.abs(pre.x * c.wallNX + pre.z * c.wallNZ);
    const vh = Math.hypot(pre.x, pre.z);
    if (into > 0.75) return true;
    return vin > 3 && vin > vh * 0.6;
  }

  land(impact, pre) {
    this.state = 'ground';
    this.diving = false;
    const sh = Math.hypot(pre.x, pre.z);
    if (impact > 13 && sh > 12) {
      this.rollT = 0;
      this.vel.x = pre.x * 0.85;
      this.vel.z = pre.z * 0.85;
      this.addStyle(15, null);
    } else if (impact > 18) {
      this.landT = 0.35;
      this.vel.x *= 0.4;
      this.vel.z *= 0.4;
    } else if (impact > 8) {
      this.landT = 0.15;
    }
    if (impact > 22) this.emit('impact', { amount: (impact - 22) * (this.rollT >= 0 ? 0.4 : 1) });
    this.emit('land', { impact, x: this.pos.x, y: this.pos.y - 0.9, z: this.pos.z });
  }

  stepSwing(h, input) {
    const r = this.rope;
    const v = this.vel;
    r.time += h;
    v.y -= PHYS.GRAVITY * h;
    this.applyDrag(h, PHYS.DRAG);
    _d.copy(this.pos).sub(r.anchor);
    const dist = _d.length() || 1;
    const n = _d.divideScalar(dist); // anchor -> hero
    // steering (tangential)
    const md = this.moveDir;
    if (md.lengthSq() > 0.01) {
      const dn = md.dot(n);
      v.x += (md.x - n.x * dn) * PHYS.SWING_STEER * h;
      v.y += (-n.y * dn) * PHYS.SWING_STEER * h;
      v.z += (md.z - n.z * dn) * PHYS.SWING_STEER * h;
    }
    // swing assist: keep the momentum flowing through the bottom of the arc
    const sp = v.length();
    if (sp > 1 && sp < 42 && dist >= r.length - 0.5 && v.y < 0) {
      const below = clamp(-n.y, 0, 1);
      const k = this.stats.power * h * (0.4 + 0.6 * below);
      v.multiplyScalar(1 + k / sp);
    }
    // reel in toward the target length (the "yank"), then slowly pump.
    // The hero is pulled along the line without adding radial speed, while
    // tangential speed grows a little (conservation of angular momentum).
    if (r.length > r.target) {
      const dl = Math.min(r.length - r.target, 18 * h);
      r.length -= dl;
      if (dist > r.length) {
        const pull = Math.min(dist - r.length, dl);
        this.pos.addScaledVector(n, -pull);
        v.multiplyScalar(Math.min(1.004, dist / Math.max(1, dist - pull)));
      }
    } else if (-n.y > 0.9) r.length = Math.max(PHYS.ROPE_MIN, r.length - 0.4 * h);
    // inextensible rope: project the predicted position back onto the sphere
    const px = this.pos.x + v.x * h, py = this.pos.y + v.y * h, pz = this.pos.z + v.z * h;
    const ex = px - r.anchor.x, ey = py - r.anchor.y, ez = pz - r.anchor.z;
    const pd = Math.sqrt(ex * ex + ey * ey + ez * ez);
    if (pd > r.length) {
      const outward = (v.x * n.x + v.y * n.y + v.z * n.z);
      const s = r.length / pd;
      const tx = r.anchor.x + ex * s, ty = r.anchor.y + ey * s, tz = r.anchor.z + ez * s;
      v.set((tx - this.pos.x) / h, (ty - this.pos.y) / h, (tz - this.pos.z) / h);
      if (outward > 9 && r.time > 0.05 && !this._tautEmitted) {
        this.emit('taut', { amount: outward });
        this._tautEmitted = true;
      }
    } else if (pd < r.length - 2) {
      this._tautEmitted = false;
    }
    const pre = v.clone();
    const c = this.move(h);
    if (c.ground) {
      r.active = false;
      this.emit('release', { side: r.side, anchor: r.anchor.clone(), kind: 'ground' });
      this.land(c.impactY, pre);
      return;
    }
    if (c.wall && this.wallCooldown <= 0 && r.time > 0.25 && this.wantsWall(pre, c)) {
      this.enterWall(c.wallNX, c.wallNZ, c.wallBox, Math.abs(pre.x * c.wallNX + pre.z * c.wallNZ));
      return;
    }
    // auto-chain: holding swing keeps you cruising from web to web
    if (this.autoChain && input.swingHeld && r.time > 0.55) {
      _v.copy(this.pos).sub(r.anchor);
      const ahead = _v.x * r.dirX + _v.z * r.dirZ;
      const theta = Math.acos(clamp(-_v.y / _v.length(), -1, 1));
      if (ahead > 0 && (theta > 0.82 || (theta > 0.6 && v.y < 3))) this.release('auto');
    }
  }

  stepWall(h) {
    const w = this.wall;
    const v = this.vel;
    w.time += h;
    const md = this.moveDir;
    const mag = md.length();
    const tx = -w.nz, tz = w.nx; // along-wall axis
    const up = mag > 0.05 ? -(md.x * w.nx + md.z * w.nz) : 0;
    const side = mag > 0.05 ? md.x * tx + md.z * tz : 0;
    if (up < -0.55 && w.time > 0.15) {
      // pushing away from the wall: let go
      this.vel.set(w.nx * 4, 1, w.nz * 4);
      this.state = 'air';
      this.wallCooldown = 0.4;
      return;
    }
    let ty = 0;
    if (up > 0.2) ty = PHYS.WALL_RUN * Math.min(1, up * 1.2);
    else if (up < -0.2) ty = -PHYS.WALL_RUN * 0.7;
    const momentum = v.y > ty ? damp(1.6, h) : damp(8, h);
    v.y += (ty - v.y) * momentum;
    const along = v.x * tx + v.z * tz;
    const ta = side * 7;
    const na = along + (ta - along) * damp(6, h);
    v.x = tx * na - w.nx * 2;
    v.z = tz * na - w.nz * 2;
    w.climbing = Math.abs(v.y) > 1.5 || Math.abs(na) > 1.5;
    if (w.climbing) {
      this.runPhase += Math.hypot(v.y, na) * h * (Math.PI * 2 / 2.4);
      this.stepAcc += Math.abs(v.y) * h;
      if (this.stepAcc > 1.3) { this.stepAcc = 0; this.emit('step', { speed: 10 }); }
    }
    const c = this.move(h);
    const b = w.box;
    if (c.ground && v.y <= 0) {
      this.state = 'ground';
      return;
    }
    if (b && this.pos.y - PHYS.HALF_H * 0.3 > b.maxY) {
      // reached the top: vault onto the roof
      this.vel.set(-w.nx * 6, 6.5, -w.nz * 6);
      this.state = 'air';
      this.wallCooldown = 0.3;
      this.addStyle(10, null);
      this.emit('vault');
      return;
    }
    if (!c.wall) {
      // ran past the edge of the wall
      this.state = 'air';
      this.wallCooldown = 0.2;
      return;
    }
    if (c.wallBox && c.wallBox !== b) w.box = c.wallBox;
    if (c.wallNX !== w.nx || c.wallNZ !== w.nz) {
      w.nx = c.wallNX; w.nz = c.wallNZ;
    }
  }

  stepZip(h) {
    const z = this.zip;
    z.time += h;
    const speed = Math.min(this.stats.zip, 18 + z.time * 110);
    if (z.useVia) {
      _d.copy(z.via).sub(this.pos);
      if (_d.length() < Math.max(0.9, speed * h * 1.5)) {
        z.useVia = false;
        this.pos.copy(z.via);
      }
    }
    if (!z.useVia) _d.copy(z.target).sub(this.pos);
    const dist = _d.length();
    if ((!z.useVia && dist < Math.max(0.8, speed * h * 1.2)) || z.time > 4) {
      this.arriveZip();
      return;
    }
    this.vel.copy(_d).multiplyScalar(speed / dist);
    const c = this.move(h);
    if (z.perch && c.wall && dist < 3) {
      this.pos.copy(z.target);
      this.arriveZip();
      return;
    }
    if ((c.wall || c.ground || c.ceil) && (dist > 2.5 || z.useVia)) {
      // blocked on the way
      if (c.ground) { this.state = 'ground'; return; }
      if (c.wall) { this.enterWall(c.wallNX, c.wallNZ, c.wallBox, 0); return; }
      this.state = 'air';
    }
  }

  arriveZip() {
    const z = this.zip;
    if (z.perch) {
      this.pos.copy(z.target);
      if (z.launchQueued) {
        this.vel.set(this.camFwd.x * 13, 16, this.camFwd.z * 13);
        this.state = 'air';
        this.flip(0.7);
        this.addStyle(40, 'POINT LAUNCH');
        this.emit('launch');
      } else {
        this.vel.set(-z.nx * 1.5, 0, -z.nz * 1.5);
        this.state = 'ground';
        this.perchT = 0.45;
        this.emit('perch');
      }
    } else {
      this.vel.set(0, 0, 0);
      this.enterWall(z.nx, z.nz, z.box, 0);
      if (z.launchQueued) this.wallJump();
    }
  }
}
