// First-person camera: head bob, landing dips, swing/wall-run lean, FOV
// kicks, plus full IK arms with articulated fingers (drawn in their own
// depth pass so they never clip into walls).
import * as THREE from 'three';
import { clamp, damp, lerpAngle } from './util.js';
import { VIEWMODEL_LAYER } from './post.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const Y = new THREE.Vector3(0, 1, 0);
const UPPER = 0.3, FORE = 0.29;

function fabricNormalMap() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  const hgt = (x, y) => {
    // woven fabric: two crossing thread directions
    const a = Math.sin(((x + y) / S) * Math.PI * 2 * 18), b = Math.sin(((x - y) / S) * Math.PI * 2 * 18);
    return (a > 0 ? a : 0) * 0.6 + (b > 0 ? b : 0) * 0.6 + Math.sin((y / S) * Math.PI * 2 * 4) * 0.15;
  };
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1);
      const n = new THREE.Vector3(-dx, -dy, 1.4).normalize();
      const i = (y * S + x) * 4;
      img.data[i] = (n.x * 0.5 + 0.5) * 255;
      img.data[i + 1] = (n.y * 0.5 + 0.5) * 255;
      img.data[i + 2] = (n.z * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(2, 3);
  return t;
}

export class CameraRig {
  constructor(scene) {
    this.camera = new THREE.PerspectiveCamera(82, 16 / 9, 0.06, 6000);
    this.camera.rotation.order = 'YXZ';
    scene.add(this.camera);
    this.position = this.camera.position;
    this.mode = 'first';
    this.yaw = 0;
    this.pitch = -0.05;
    this.roll = 0;
    this.lookIdle = 10;
    this.shakeAmt = 0;
    this.fov = 82;
    this.fovKick = 0;
    this.sens = 1;
    this.invertY = false;
    this.yawKick = 0;
    this.dip = 0; this.dipV = 0;
    this.nod = 0; this.nodV = 0;
    this.smoothY = null;
    this.time = 0;
    this.buildArms();
  }

  getForward(out) {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }

  setMode() {}
  toggle() { return 'first'; }
  shake(a) { this.shakeAmt = Math.min(1.5, this.shakeAmt + a); }
  land(impact) {
    this.dipV -= Math.min(3.2, impact * 0.09);
    this.nodV -= Math.min(2.2, impact * 0.05);
  }
  kickFov(a) { this.fovKick = Math.min(14, this.fovKick + a); }
  turn(delta) { this.yawKick += delta; }

  // ------------------------------------------------------------------ arms
  buildArms() {
    const vm = new THREE.Group();
    this.camera.add(vm);
    this.vm = vm;
    const fabric = fabricNormalMap();
    this.vmMats = {
      main: new THREE.MeshStandardMaterial({ color: 0x343a4a, roughness: 0.78, metalness: 0.05, normalMap: fabric, normalScale: new THREE.Vector2(0.7, 0.7) }),
      accent: new THREE.MeshStandardMaterial({ color: 0xff7a1a, roughness: 0.45, metalness: 0.1 }),
      glove: new THREE.MeshStandardMaterial({ color: 0x2c3038, roughness: 0.5, metalness: 0.05 }),
      gadget: new THREE.MeshStandardMaterial({ color: 0x4a505c, roughness: 0.3, metalness: 0.7 }),
      light: new THREE.MeshBasicMaterial({ color: 0x38e8ff }),
    };
    const M = this.vmMats;
    const mk = (geo, mat, parent) => {
      const m = new THREE.Mesh(geo, mat);
      parent.add(m);
      return m;
    };
    this.arms = [-1, 1].map((side) => {
      const upper = new THREE.Group(), fore = new THREE.Group(), hand = new THREE.Group();
      vm.add(upper, fore, hand);
      const um = mk(new THREE.CapsuleGeometry(0.066, UPPER - 0.06, 4, 10), M.main, upper);
      um.scale.set(1.05, 1, 0.95);
      const fm = mk(new THREE.CapsuleGeometry(0.056, FORE - 0.05, 4, 10), M.main, fore);
      fm.scale.set(1, 1, 0.9);
      const stripe = mk(new THREE.BoxGeometry(0.018, FORE * 0.8, 0.02), M.accent, fore);
      stripe.position.set(0.05 * side, 0, 0.012);
      const cuff = mk(new THREE.CylinderGeometry(0.062, 0.058, 0.07, 12), M.accent, fore);
      cuff.position.y = FORE / 2 - 0.035;
      // wrist gadget (line launcher)
      const gadget = mk(new THREE.BoxGeometry(0.055, 0.03, 0.08), M.gadget, fore);
      gadget.position.set(0, FORE / 2 - 0.07, 0.055);
      const led = mk(new THREE.BoxGeometry(0.02, 0.012, 0.03), M.light, fore);
      led.position.set(0, FORE / 2 - 0.07, 0.072);
      // hand: palm + 4 fingers (2 segments) + thumb
      const palm = mk(new THREE.BoxGeometry(0.085, 0.032, 0.09), M.glove, hand);
      palm.position.z = 0.045;
      const fingers = [];
      for (let k = 0; k < 4; k++) {
        const base = new THREE.Group();
        base.position.set((-0.03 + k * 0.02) * side, 0, 0.09);
        hand.add(base);
        const len = [0.04, 0.046, 0.044, 0.034][k];
        const p1 = mk(new THREE.BoxGeometry(0.018, 0.019, len), M.glove, base);
        p1.position.z = len / 2;
        const tip = new THREE.Group();
        tip.position.z = len;
        base.add(tip);
        const p2 = mk(new THREE.BoxGeometry(0.016, 0.017, len * 0.85), M.glove, tip);
        p2.position.z = len * 0.42;
        fingers.push({ base, tip });
      }
      const thumb = new THREE.Group();
      thumb.position.set(0.045 * -side, -0.005, 0.03);
      thumb.rotation.set(0, -0.7 * side, 0.4 * side);
      hand.add(thumb);
      const t1 = mk(new THREE.BoxGeometry(0.02, 0.02, 0.05), M.glove, thumb);
      t1.position.z = 0.025;
      const knuck = mk(new THREE.BoxGeometry(0.09, 0.012, 0.02), M.accent, hand);
      knuck.position.set(0, 0.018, 0.085);
      for (const o of [upper, fore, hand]) o.traverse((x) => x.layers.set(VIEWMODEL_LAYER));
      return {
        side, upper, fore, hand, fingers, thumb,
        shoulder: new THREE.Vector3(0.23 * side, -0.34, 0.1),
        cur: new THREE.Vector3(0.2 * side, -0.38, -0.36),
        target: new THREE.Vector3(),
        curl: 0.5, curlT: 0.5,
        palm,
      };
    });
  }

  setSuit(suit) {
    this.vmMats.main.color.setHex(suit.main);
    this.vmMats.accent.color.setHex(suit.accent);
    this.vmMats.light.color.setHex(suit.visor);
  }

  handWorld(side, out) {
    const a = this.arms[side > 0 ? 1 : 0];
    return a.palm.getWorldPosition(out);
  }

  // world direction -> camera space, clamped so the arm stays on screen
  aimLocal(world, arm, out) {
    _q.copy(this.camera.quaternion).invert();
    out.copy(world).sub(this.camera.position).applyQuaternion(_q).normalize();
    // keep the reaching hand on screen: pull the direction into a forward cone
    out.x = clamp(out.x, -0.5, 0.5);
    out.y = clamp(out.y, -0.35, 0.42);
    if (out.z > -0.75) out.z = -0.75;
    out.normalize();
    return out.multiplyScalar(0.62).add(_v3.set(arm.side * 0.07, -0.08, 0));
  }

  solve(arm) {
    const S = arm.shoulder, T = arm.cur;
    const d = _v.subVectors(T, S);
    let len = d.length();
    const u = d.divideScalar(len || 1);
    len = clamp(len, 0.12, UPPER + FORE - 0.004);
    const cosA = clamp((UPPER * UPPER + len * len - FORE * FORE) / (2 * UPPER * len), -1, 1);
    const sinA = Math.sqrt(1 - cosA * cosA);
    const pole = _v2.set(arm.side * 0.9, -1, 0.35).normalize();
    pole.addScaledVector(u, -pole.dot(u)).normalize();
    const elbow = _v3.copy(S).addScaledVector(u, UPPER * cosA).addScaledVector(pole, UPPER * sinA);
    const wrist = new THREE.Vector3().copy(S).addScaledVector(u, len);
    // upper arm
    const du = new THREE.Vector3().subVectors(elbow, S).normalize();
    arm.upper.position.copy(S).add(elbow).multiplyScalar(0.5);
    arm.upper.quaternion.setFromUnitVectors(Y, du);
    // forearm
    const df = new THREE.Vector3().subVectors(wrist, elbow).normalize();
    arm.fore.position.copy(elbow).add(wrist).multiplyScalar(0.5);
    arm.fore.quaternion.setFromUnitVectors(Y, df);
    // hand: fingers along the forearm, back of the hand up (slightly rolled outward)
    const z = df;
    const upHint = new THREE.Vector3(arm.side * 0.35, 1, 0.2).normalize();
    const x = new THREE.Vector3().crossVectors(upHint, z).normalize();
    const y = new THREE.Vector3().crossVectors(z, x);
    _m.makeBasis(x, y, z);
    arm.hand.quaternion.setFromRotationMatrix(_m);
    arm.hand.position.copy(wrist);
    const c = arm.curl;
    for (let k = 0; k < 4; k++) {
      const f = arm.fingers[k];
      f.base.rotation.x = c * (1.3 + k * 0.05);
      f.tip.rotation.x = c * 1.5;
    }
    arm.thumb.rotation.x = c * 0.7;
  }

  updateArms(dt, p) {
    const st = p.state;
    const t = this.time;
    const [L, R] = this.arms;
    const sh = Math.hypot(p.vel.x, p.vel.z);
    const set = (arm, x, y, z, curl) => { arm.target.set(x, y, z); arm.curlT = curl; };
    for (const arm of this.arms) {
      const s = arm.side;
      const ph = p.runPhase + (s > 0 ? 0 : Math.PI);
      if (st === 'swing') {
        const ropeArm = (p.rope.side > 0) === (s > 0);
        if (ropeArm) { this.aimLocal(p.rope.visual, arm, arm.target); arm.curlT = 1; }
        else set(arm, s * 0.42, -0.27 + Math.sin(t * 2) * 0.01, -0.3, 0.25);
      } else if (st === 'zip' || p.airZipT > 0) {
        this.aimLocal(st === 'zip' ? p.zip.target : p.airZipTarget, arm, arm.target);
        arm.curlT = 1;
      } else if (st === 'wall') {
        if (p.wall.climbing && p.wall.vertical) {
          const k = Math.sin(ph);
          set(arm, s * 0.2, -0.1 + k * 0.17, -0.42 + Math.max(0, -k) * 0.06, 0.12);
        } else if (p.wall.climbing) {
          // running along the wall: wall-side hand brushes the surface
          _v.set(-p.wall.nx, 0, -p.wall.nz);
          _q.copy(this.camera.quaternion).invert();
          _v.applyQuaternion(_q);
          const wallSide = Math.sign(_v.x) === s;
          if (wallSide) set(arm, s * 0.42, -0.2 + Math.sin(ph) * 0.04, -0.33, 0.15);
          else set(arm, s * 0.2, -0.36 + Math.abs(Math.cos(ph)) * 0.04, -0.33 + Math.sin(ph) * 0.11, 0.6);
        } else {
          set(arm, s * 0.22, -0.08, -0.44, 0.1);
        }
      } else if (p.vaultT > 0) {
        set(arm, s * 0.2, -0.52, -0.4, 0.15);
      } else if (st === 'ground') {
        if (p.perchT > 0 || p.landT > 0) set(arm, s * 0.3, -0.5, -0.32, 0.4);
        else if (sh > 0.8) {
          const k = clamp(sh / 12, 0.3, 1.15);
          set(arm, s * 0.21, -0.33 + Math.abs(Math.cos(ph)) * 0.035 * k, -0.36 + Math.sin(ph) * 0.12 * k, 0.75);
        } else {
          const b = Math.sin(t * 1.8 + s) * 0.006;
          set(arm, s * 0.2, -0.34 + b, -0.38, 0.45);
        }
      } else {
        // airborne
        if (p.diving) set(arm, s * 0.3, -0.62, 0.0, 0.2);
        else if (p.vel.y > 2) set(arm, s * 0.3, -0.26, -0.38, 0.5);
        else set(arm, s * 0.48, -0.13 + Math.sin(t * 11 + s) * 0.012, -0.28, 0.15);
      }
      if (s > 0 && p.throwT > 0) {
        const k = p.throwT / 0.35;
        if (k > 0.55) set(arm, 0.3, -0.05, 0.02, 0.9);
        else set(arm, 0.12, -0.1, -0.58, 0.1);
      }
      const rate = st === 'ground' && sh > 0.8 ? 30 : st === 'swing' || st === 'zip' ? 26 : 16;
      arm.cur.lerp(arm.target, damp(rate, dt));
      arm.curl += (arm.curlT - arm.curl) * damp(14, dt);
      this.solve(arm);
    }
  }

  // ---------------------------------------------------------------- update
  update(dt, player, input, world) {
    this.time += dt;
    const cam = this.camera;
    const k = 0.0042 * this.sens;
    if (input.look.dx || input.look.dy) {
      this.yaw -= input.look.dx * k;
      this.pitch -= input.look.dy * k * (this.invertY ? -1 : 1);
      this.lookIdle = 0;
    } else this.lookIdle += dt;
    // smooth turns (corner wrap on walls)
    const yk = this.yawKick * damp(9, dt);
    this.yaw += yk;
    this.yawKick -= yk;

    const v = player.vel;
    const speed = v.length();
    const sh = Math.hypot(v.x, v.z);
    const st = player.state;
    // gentle auto-follow of travel direction while swinging hands-free
    if (this.lookIdle > 1.3 && sh > 8 && (st === 'swing' || st === 'air')) {
      this.yaw = lerpAngle(this.yaw, Math.atan2(-v.x, -v.z), damp(clamp(sh / 30, 0.25, 1) * 0.9, dt));
      const tp = clamp(v.y / 90, -0.3, 0.12) - 0.06;
      this.pitch += (tp - this.pitch) * damp(0.6, dt);
    }
    // wall-running: look up the wall when climbing, along it when running sideways
    if (st === 'wall' && this.lookIdle > 0.35) {
      const w = player.wall;
      if (w.vertical && v.y > 2) {
        this.yaw = lerpAngle(this.yaw, Math.atan2(w.nx, w.nz), damp(2.2, dt));
        this.pitch += (0.78 - this.pitch) * damp(2.8, dt);
      } else if (w.climbing && sh > 3) {
        this.yaw = lerpAngle(this.yaw, Math.atan2(-v.x, -v.z), damp(3, dt));
        this.pitch += (0.02 - this.pitch) * damp(2, dt);
      }
    }
    this.pitch = clamp(this.pitch, -1.45, 1.45);

    // lean
    let rollT = 0;
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    if (st === 'swing') {
      _v.copy(player.rope.anchor).sub(player.pos).normalize();
      rollT = clamp(-(_v.x * rx + _v.z * rz) * 0.32, -0.28, 0.28) * clamp(speed / 20, 0, 1);
    } else if (st === 'wall' && player.wall.climbing && !player.wall.vertical) {
      rollT = -(player.wall.nx * rx + player.wall.nz * rz) * 0.2;
    } else if (st === 'air' && sh > 10) {
      rollT = clamp(-(v.x * rx + v.z * rz) / 120, -0.08, 0.08);
    }
    this.roll += (rollT - this.roll) * damp(4, dt);
    let rollExtra = 0;
    if (player.twistT >= 0) {
      const f = Math.min(player.twistT / 0.6, 1);
      rollExtra = (f * f * (3 - 2 * f)) * Math.PI * 2;
    }

    // springs: landing dip + nod
    this.dipV += (-this.dip * 140 - this.dipV * 17) * dt;
    this.dip += this.dipV * dt;
    this.nodV += (-this.nod * 120 - this.nodV * 15) * dt;
    this.nod += this.nodV * dt;
    if (player.flipT >= 0) {
      const f = Math.min(player.flipT / player.flipDur, 1);
      this.nod = -Math.sin(f * Math.PI) * 0.22;
    }

    // head bob
    let bobY = 0, bobX = 0, bobR = 0;
    if (st === 'ground' && sh > 0.8) {
      const kk = clamp(sh / 12, 0.3, 1.25);
      bobY = (Math.abs(Math.sin(player.runPhase)) - 0.5) * 0.075 * kk;
      bobX = Math.sin(player.runPhase) * 0.035 * kk;
      bobR = Math.sin(player.runPhase) * 0.006 * kk;
    } else if (st === 'wall' && player.wall.climbing) {
      bobY = Math.sin(player.runPhase * 2) * 0.03;
      bobX = Math.sin(player.runPhase) * 0.02;
    }
    const vault = player.vaultT > 0 ? -Math.sin((1 - player.vaultT / 0.4) * Math.PI) * 0.28 : 0;

    // shake
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.5);
    const sa = this.shakeAmt * this.shakeAmt * 0.02;
    const sx = (Math.random() - 0.5) * sa, sy = (Math.random() - 0.5) * sa;

    // head position (smoothed for step-ups / vaults)
    const headY = player.pos.y + 0.62;
    if (this.smoothY === null || Math.abs(this.smoothY - headY) > 2.5 || st !== 'ground') this.smoothY = headY;
    else this.smoothY += (headY - this.smoothY) * damp(16, dt);
    cam.position.set(player.pos.x + rx * bobX, this.smoothY + bobY + this.dip + vault - (player.perchT > 0 ? 0.35 : 0), player.pos.z + rz * bobX);
    cam.rotation.set(this.pitch + this.nod + sy, this.yaw + sx, this.roll + rollExtra + bobR);

    // field of view
    this.fovKick = Math.max(0, this.fovKick - dt * 18);
    const fovT = 82 + clamp((speed - 10) / 45, 0, 1) * 22 + (player.diving ? 7 : 0) + (st === 'zip' ? 8 : 0) + this.fovKick;
    this.fov += (fovT - this.fov) * damp(3.5, dt);
    if (Math.abs(cam.fov - this.fov) > 0.05) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }
    cam.updateMatrixWorld();
    this.vm.visible = true;
    this.updateArms(dt, player);
  }
}
