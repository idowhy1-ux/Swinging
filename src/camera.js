// First-person camera: swing tilt (the view rotates with the pendulum),
// trick camera moves, head bob, landing dips, FOV kicks; realistic IK arms
// and the hero's legs (visible when you look down), all drawn in their own
// depth pass so they never clip into walls.
import * as THREE from 'three';
import { clamp, damp, lerpAngle } from './util.js';
import { VIEWMODEL_LAYER } from './post.js';
import { HeroBody, buildArm, curlHand, makeMaterials } from './body.js';
import { TRICKS, LEG_POSES, trickHands, bump } from './tricks.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _v3 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const _e = new THREE.Euler(0, 0, 0, 'YXZ');
const Y = new THREE.Vector3(0, 1, 0);
const IDENT = new THREE.Quaternion();
const UPPER = 0.29, FORE = 0.27;
const EYE = 0.78; // eye height above the body centre (1.68 m above the feet)

export class CameraRig {
  constructor(scene, suit) {
    this.camera = new THREE.PerspectiveCamera(82, 16 / 9, 0.05, 6000);
    this.camera.rotation.order = 'YXZ';
    scene.add(this.camera);
    this.scene = scene;
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
    this.swingTilt = 0.5;
    this.yawKick = 0;
    this.dip = 0; this.dipV = 0;
    this.nod = 0; this.nodV = 0;
    this.smoothY = null;
    this.time = 0;
    this.tilt = new THREE.Quaternion();
    this.tiltTarget = new THREE.Quaternion();
    this.trickRot = { pitch: 0, yaw: 0, roll: 0, fov: 0 };
    this.M = makeMaterials(suit);
    this.buildArms();
    this.buildLegs(scene);
  }

  // gameplay forward (stable: ignores swing tilt and trick spins)
  getForward(out) {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }
  // what is actually under the crosshair
  getAimForward(out) {
    return out.set(0, 0, -1).applyQuaternion(this.camera.quaternion);
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

  // ------------------------------------------------------------ arms + legs
  buildArms() {
    const vm = new THREE.Group();
    this.camera.add(vm);
    this.vm = vm;
    this.arms = [-1, 1].map((side) => {
      // camera side +1 = right arm = the hero's right hand (model side -1)
      const a = buildArm(-side, this.M);
      vm.add(a.upper, a.fore, a.hand);
      for (const o of [a.upper, a.fore, a.hand]) o.traverse((x) => x.layers.set(VIEWMODEL_LAYER));
      return {
        ...a, side,
        shoulder: new THREE.Vector3(0.22 * side, -0.33, 0.1),
        cur: new THREE.Vector3(0.2 * side, -0.38, -0.36),
        target: new THREE.Vector3(),
        curl: 0.5, curlT: 0.5, spread: 0,
      };
    });
  }

  buildLegs(scene) {
    this.legs = new HeroBody(this.M);
    this.legs.firstPerson();
    this.legs.setLayer(VIEWMODEL_LAYER);
    scene.add(this.legs.root);
  }

  setSuit(suit) {
    this.M.setSuit(suit);
  }

  handWorld(side, out) {
    const a = this.arms[side > 0 ? 1 : 0];
    return a.palm.localToWorld(out.set(0, -0.06, 0));
  }

  aimLocal(world, arm, out) {
    _q.copy(this.camera.quaternion).invert();
    out.copy(world).sub(this.camera.position).applyQuaternion(_q).normalize();
    out.x = clamp(out.x, -0.5, 0.5);
    out.y = clamp(out.y, -0.35, 0.42);
    if (out.z > -0.75) out.z = -0.75;
    out.normalize();
    return out.multiplyScalar(0.6).add(_v3.set(arm.side * 0.07, -0.08, 0));
  }

  orientLimb(obj, dir, hint) {
    // local -Y along dir, local +Z toward hint (keeps the limb's twist stable)
    const y = _v.copy(dir).negate();
    const z = _v2.copy(hint).addScaledVector(y, -hint.dot(y));
    if (z.lengthSq() < 1e-6) z.set(0, 0, 1).addScaledVector(y, -y.z);
    z.normalize();
    const x = new THREE.Vector3().crossVectors(y, z);
    _m.makeBasis(x, y, z);
    obj.quaternion.setFromRotationMatrix(_m);
  }

  solve(arm) {
    const S = arm.shoulder, T = arm.cur;
    const d = new THREE.Vector3().subVectors(T, S);
    let len = d.length();
    const u = d.divideScalar(len || 1);
    len = clamp(len, 0.12, UPPER + FORE - 0.004);
    const cosA = clamp((UPPER * UPPER + len * len - FORE * FORE) / (2 * UPPER * len), -1, 1);
    const sinA = Math.sqrt(1 - cosA * cosA);
    const pole = new THREE.Vector3(arm.side * 0.9, -1, 0.35).normalize();
    pole.addScaledVector(u, -pole.dot(u)).normalize();
    const elbow = new THREE.Vector3().copy(S).addScaledVector(u, UPPER * cosA).addScaledVector(pole, UPPER * sinA);
    const wrist = new THREE.Vector3().copy(S).addScaledVector(u, len);
    const du = new THREE.Vector3().subVectors(elbow, S).normalize();
    const df = new THREE.Vector3().subVectors(wrist, elbow).normalize();
    // the biceps/front of the arm faces up-inward, the back of the hand faces up
    const up = new THREE.Vector3(-arm.side * 0.3, 1, 0.1).normalize();
    arm.upper.position.copy(S);
    this.orientLimb(arm.upper, du, up);
    arm.fore.position.copy(elbow);
    this.orientLimb(arm.fore, df, up);
    arm.hand.position.copy(wrist);
    this.orientLimb(arm.hand, df, up);
    curlHand(arm, arm.curl, arm.spread);
  }

  updateArms(dt, p) {
    const st = p.state;
    const t = this.time;
    const sh = Math.hypot(p.vel.x, p.vel.z);
    const trick = p.trick ? TRICKS[p.trick.id] : null;
    const set = (arm, x, y, z, curl, spread = 0) => { arm.target.set(x, y, z); arm.curlT = curl; arm.spread = spread; };
    for (const arm of this.arms) {
      const s = arm.side;
      const ph = p.runPhase + (s > 0 ? 0 : Math.PI);
      if (trick) {
        const h = trickHands(trick.pose, p.trick.t / trick.dur, s);
        set(arm, h[0], h[1], h[2], h[3], h[3] < 0.3 ? 1 : 0);
      } else if (st === 'swing') {
        const ropeArm = (p.rope.side > 0) === (s > 0);
        if (ropeArm) { this.aimLocal(p.rope.visual, arm, arm.target); arm.curlT = 1; }
        else set(arm, s * 0.42, -0.25 + Math.sin(t * 2) * 0.01, -0.3, 0.2, 1);
      } else if (st === 'zip' || p.airZipT > 0) {
        this.aimLocal(st === 'zip' ? p.zip.target : p.airZipTarget, arm, arm.target);
        arm.curlT = 1;
      } else if (st === 'wall') {
        if (p.wall.climbing && p.wall.vertical) {
          const k = Math.sin(ph);
          set(arm, s * 0.2, -0.1 + k * 0.17, -0.42 + Math.max(0, -k) * 0.06, 0.1, 1);
        } else if (p.wall.climbing) {
          _v.set(-p.wall.nx, 0, -p.wall.nz);
          _q.copy(this.camera.quaternion).invert();
          _v.applyQuaternion(_q);
          if (Math.sign(_v.x) === s) set(arm, s * 0.42, -0.2 + Math.sin(ph) * 0.04, -0.33, 0.1, 1);
          else set(arm, s * 0.2, -0.36 + Math.abs(Math.cos(ph)) * 0.04, -0.33 + Math.sin(ph) * 0.11, 0.7);
        } else {
          set(arm, s * 0.22, -0.08, -0.44, 0.05, 1);
        }
      } else if (p.vaultT > 0) {
        set(arm, s * 0.2, -0.52, -0.4, 0.1, 1);
      } else if (st === 'ground') {
        if (p.perchT > 0 || p.landT > 0) set(arm, s * 0.3, -0.5, -0.32, 0.35);
        else if (sh > 0.8) {
          const k = clamp(sh / 12, 0.3, 1.15);
          set(arm, s * 0.21, -0.33 + Math.abs(Math.cos(ph)) * 0.035 * k, -0.36 + Math.sin(ph) * 0.12 * k, 0.8);
        } else {
          const b = Math.sin(t * 1.8 + s) * 0.006;
          set(arm, s * 0.2, -0.35 + b, -0.38, 0.45);
        }
      } else {
        if (p.diving) set(arm, s * 0.3, -0.62, 0.0, 0.2);
        else if (p.vel.y > 2) set(arm, s * 0.3, -0.26, -0.38, 0.5);
        else set(arm, s * 0.48, -0.13 + Math.sin(t * 11 + s) * 0.012, -0.28, 0.1, 1);
      }
      if (s > 0 && p.throwT > 0) {
        const k = p.throwT / 0.35;
        if (k > 0.55) set(arm, 0.3, -0.05, 0.02, 0.9);
        else set(arm, 0.12, -0.1, -0.58, 0.1, 1);
      }
      const rate = trick ? 22 : st === 'ground' && sh > 0.8 ? 30 : st === 'swing' || st === 'zip' ? 26 : 16;
      arm.cur.lerp(arm.target, damp(rate, dt));
      arm.curl += (arm.curlT - arm.curl) * damp(14, dt);
      this.solve(arm);
    }
    this.vm.updateMatrixWorld(true);
  }

  // The hero's own body below the camera (legs you see when looking down).
  updateLegs(dt, p, eye) {
    const B = this.legs;
    const st = p.state;
    const sh = Math.hypot(p.vel.x, p.vel.z);
    const ph = p.runPhase;
    const P = (pose) => B.pose(pose);
    const trick = p.trick ? TRICKS[p.trick.id] : null;
    let crouch = 0;
    if (trick && LEG_POSES[trick.pose]) {
      P(LEG_POSES[trick.pose]);
    } else if (st === 'ground') {
      if (p.landT > 0 || p.perchT > 0) {
        P({ spine: [0.4], hipL: [-1.3, 0, 0.2], knL: [1.9], anL: [0.4], hipR: [-1.1, 0, -0.2], knR: [1.8], anR: [0.4] });
        crouch = p.perchT > 0 ? 0.42 : 0.3;
      } else if (sh > 0.6) {
        const k = clamp(sh / 13, 0.25, 1.15);
        const s = Math.sin(ph), c = Math.cos(ph);
        P({ spine: [0.12 * k], hipL: [-s * 0.95 * k, 0, 0.03], knL: [(0.2 + Math.max(0, c) * 1.5) * k], anL: [0.2 * k], hipR: [s * 0.95 * k, 0, -0.03], knR: [(0.2 + Math.max(0, -c) * 1.5) * k], anR: [0.2 * k] });
        crouch = 0.03 * Math.abs(s) * k;
      } else {
        P({ spine: [0.02], hipL: [0, 0, 0.06], knL: [0.04], anL: [-0.04], hipR: [0, 0, -0.06], knR: [0.04], anR: [-0.04] });
      }
    } else if (st === 'swing') {
      const sw = Math.sin(this.time * 2.4) * 0.12;
      P({ spine: [-0.1], hipL: [-0.55 + sw, 0, 0.08], knL: [1.0], anL: [0.4], hipR: [-0.15 - sw, 0, -0.06], knR: [0.5], anR: [0.4] });
    } else if (st === 'wall') {
      const s = Math.sin(ph), c = Math.cos(ph);
      P({ spine: [0.3], hipL: [-1.0 - s * 0.6, 0, 0.1], knL: [1.2 + Math.max(0, c)], anL: [0.3], hipR: [-1.0 + s * 0.6, 0, -0.1], knR: [1.2 + Math.max(0, -c)], anR: [0.3] });
    } else if (st === 'zip') {
      P({ spine: [0.1], hipL: [0.3, 0, 0.05], knL: [0.6], anL: [0.5], hipR: [0.15, 0, -0.05], knR: [0.4], anR: [0.5] });
    } else if (p.diving) {
      P({ spine: [0], hipL: [0.1, 0, 0.04], knL: [0.1], anL: [0.6], hipR: [0.1, 0, -0.04], knR: [0.15], anR: [0.6] });
    } else if (p.vel.y > 2) {
      P({ spine: [0.25], hipL: [-1.1, 0, 0.1], knL: [1.6], anL: [0.3], hipR: [-0.5, 0, -0.1], knR: [1.2], anR: [0.3] });
    } else {
      const f = Math.sin(this.time * 7) * 0.15;
      P({ spine: [0.05], hipL: [-0.45 - f, 0, 0.18], knL: [0.8], anL: [0.3], hipR: [0.1 + f, 0, -0.15], knR: [0.55], anR: [0.3] });
    }
    B.apply(dt, trick ? 18 : st === 'ground' && sh > 0.6 ? 24 : 12);
    B.body.position.y += ((0.14 - crouch) - B.body.position.y) * damp(14, dt);
    // place the body rigidly relative to the eye so flips/rolls move it with the view
    // the model faces +Z, the camera looks down -Z: turn it around, and mirror
    // pitch/roll so flips rotate the body exactly like the view
    _e.set(0, this.yaw + Math.PI, 0, 'YXZ');
    _q.setFromEuler(_e);
    const tr = this.trickRot;
    _e.set(-tr.pitch, tr.yaw, -tr.roll, 'YXZ');
    _q2.setFromEuler(_e);
    _q.multiply(_q2);
    _q.premultiply(this.tilt);
    B.root.quaternion.copy(_q);
    // eye sits forward of the neck; body origin is below and behind it
    _v.set(0, -EYE, -0.35).applyQuaternion(_q);
    B.root.position.copy(eye).add(_v);
    B.root.updateMatrixWorld(true);
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
    const yk = this.yawKick * damp(9, dt);
    this.yaw += yk;
    this.yawKick -= yk;

    const v = player.vel;
    const speed = v.length();
    const sh = Math.hypot(v.x, v.z);
    const st = player.state;
    // follow the direction of travel: quickly while swinging, gently otherwise
    const swingFollow = st === 'swing' && this.swingTilt > 0;
    if (sh > 8 && (st === 'swing' || st === 'air') && this.lookIdle > (swingFollow ? 0.6 : 1.3) && !player.trick) {
      const rate = clamp(sh / 30, 0.25, 1) * (swingFollow ? 1.8 : 0.9);
      this.yaw = lerpAngle(this.yaw, Math.atan2(-v.x, -v.z), damp(rate, dt));
      const tp = clamp(v.y / 90, -0.3, 0.12) - 0.06;
      this.pitch += (tp - this.pitch) * damp(0.6, dt);
    }
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

    // ---- swing tilt: the whole view frame rotates toward the web, so you
    // look up on the upswing, down on the backswing and lean into turns
    if (st === 'swing' && this.swingTilt > 0) {
      _v.copy(player.rope.anchor).sub(player.pos).normalize();
      _q.setFromUnitVectors(Y, _v);
      this.tiltTarget.copy(IDENT).slerp(_q, this.swingTilt * clamp(speed / 12, 0.3, 1));
    } else this.tiltTarget.copy(IDENT);
    this.tilt.slerp(this.tiltTarget, damp(st === 'swing' ? 4.5 : 2.6, dt));

    // ---- trick camera move
    const tr = this.trickRot;
    if (player.trick) {
      const def = TRICKS[player.trick.id];
      const c = def.cam(Math.min(1, player.trick.t / def.dur));
      tr.pitch = c.pitch || 0; tr.yaw = c.yaw || 0; tr.roll = c.roll || 0; tr.fov = c.fov || 0;
    } else {
      // unwind quickly (e.g. after a bail)
      const kk = damp(10, dt);
      const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
      tr.pitch = wrap(tr.pitch) * (1 - kk); tr.yaw = wrap(tr.yaw) * (1 - kk); tr.roll = wrap(tr.roll) * (1 - kk); tr.fov *= 1 - kk;
    }

    // ---- lean (wall-runs and airborne drift; swings use the tilt above)
    let rollT = 0;
    const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
    if (st === 'swing' && this.swingTilt === 0) {
      _v.copy(player.rope.anchor).sub(player.pos).normalize();
      rollT = clamp(-(_v.x * rx + _v.z * rz) * 0.32, -0.28, 0.28) * clamp(speed / 20, 0, 1);
    } else if (st === 'wall' && player.wall.climbing && !player.wall.vertical) {
      rollT = -(player.wall.nx * rx + player.wall.nz * rz) * 0.2;
    } else if (st === 'air' && sh > 10) {
      rollT = clamp(-(v.x * rx + v.z * rz) / 120, -0.08, 0.08);
    }
    this.roll += (rollT - this.roll) * damp(4, dt);

    // springs: landing dip + nod
    this.dipV += (-this.dip * 140 - this.dipV * 17) * dt;
    this.dip += this.dipV * dt;
    this.nodV += (-this.nod * 120 - this.nodV * 15) * dt;
    this.nod += this.nodV * dt;

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
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.5);
    const sa = this.shakeAmt * this.shakeAmt * 0.02;
    const sx = (Math.random() - 0.5) * sa, sy = (Math.random() - 0.5) * sa;

    const headY = player.pos.y + EYE;
    if (this.smoothY === null || Math.abs(this.smoothY - headY) > 2.5 || st !== 'ground') this.smoothY = headY;
    else this.smoothY += (headY - this.smoothY) * damp(16, dt);
    cam.position.set(player.pos.x + rx * bobX, this.smoothY + bobY + this.dip + vault - (player.perchT > 0 ? 0.4 : 0), player.pos.z + rz * bobX);
    _e.set(this.pitch + this.nod + sy, this.yaw + tr.yaw + sx, this.roll + bobR, 'YXZ');
    cam.quaternion.setFromEuler(_e);
    // trick pitch/roll happen around the camera's own axes
    _e.set(tr.pitch, 0, tr.roll, 'YXZ');
    cam.quaternion.multiply(_q2.setFromEuler(_e));
    cam.quaternion.premultiply(this.tilt);

    this.fovKick = Math.max(0, this.fovKick - dt * 18);
    const fovT = 82 + clamp((speed - 10) / 45, 0, 1) * 22 + (player.diving ? 7 : 0) + (st === 'zip' ? 8 : 0) + this.fovKick + tr.fov;
    this.fov += (fovT - this.fov) * damp(3.5, dt);
    if (Math.abs(cam.fov - this.fov) > 0.05) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }
    cam.updateMatrixWorld();
    this.vm.visible = true;
    this.legs.root.visible = true;
    this.updateArms(dt, player);
    this.updateLegs(dt, player, cam.position);
  }
}
