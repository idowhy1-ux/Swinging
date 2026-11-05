// The hero: an original "sky courier" built from primitives and animated
// procedurally (no external assets). Local +Z is the front, local +X is the
// hero's LEFT side.
import * as THREE from 'three';
import { damp, clamp } from './util.js';

const _q = new THREE.Quaternion();
const _q2 = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _m = new THREE.Matrix4();
const DOWN = new THREE.Vector3(0, -1, 0);
const UPV = new THREE.Vector3(0, 1, 0);

function cap(r, len, mat) {
  return new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 3, 8), mat);
}

export class Hero {
  constructor(scene) {
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    scene.add(this.root);
    this.mats = {
      main: new THREE.MeshLambertMaterial({ color: 0x23262e }),
      accent: new THREE.MeshLambertMaterial({ color: 0xff7a1a }),
      visor: new THREE.MeshLambertMaterial({ color: 0x38e8ff, emissive: 0x38e8ff, emissiveIntensity: 0.6 }),
      dark: new THREE.MeshLambertMaterial({ color: 0x15161a }),
      bag: new THREE.MeshLambertMaterial({ color: 0x3a3f4a }),
    };
    const M = this.mats;
    const j = (parent, x, y, z) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      parent.add(g);
      return g;
    };
    this.hips = j(this.body, 0, 0.03, 0);
    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.17, 0.2), M.main);
    this.hips.add(pelvis);
    const belt = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.05, 0.22), M.accent);
    belt.position.y = 0.07;
    this.hips.add(belt);

    this.spine = j(this.hips, 0, 0.08, 0);
    const torso = cap(0.16, 0.26, M.main);
    torso.position.y = 0.24;
    torso.scale.set(1.18, 1, 0.78);
    this.spine.add(torso);
    const chestStripe = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.03), M.accent);
    chestStripe.position.set(0, 0.25, 0.12);
    chestStripe.rotation.z = 0.55;
    this.spine.add(chestStripe);
    // courier backpack (cargo attaches here)
    this.pack = new THREE.Group();
    this.pack.position.set(0, 0.27, -0.17);
    this.spine.add(this.pack);
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.34, 0.14), M.bag);
    this.pack.add(bag);
    const bagFlap = new THREE.Mesh(new THREE.BoxGeometry(0.31, 0.06, 0.15), M.accent);
    bagFlap.position.y = 0.12;
    this.pack.add(bagFlap);
    this.cargo = new THREE.Group();
    this.cargo.position.set(0, 0.05, -0.1);
    this.pack.add(this.cargo);

    this.head = j(this.spine, 0, 0.5, 0);
    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.13, 14, 10), M.main);
    skull.position.y = 0.11;
    skull.scale.set(0.95, 1.08, 1);
    this.head.add(skull);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.055, 0.08), M.visor);
    visor.position.set(0, 0.13, 0.095);
    this.head.add(visor);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.05, 0.22), M.accent);
    fin.position.set(0, 0.24, -0.01);
    this.head.add(fin);
    this.headMeshes = [skull, visor, fin];

    const arm = (side) => {
      const sh = j(this.spine, 0.215 * side, 0.43, 0);
      const up = cap(0.055, 0.17, M.main);
      up.position.y = -0.13;
      sh.add(up);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.2, 0.03), M.accent);
      stripe.position.set(0.05 * side, -0.13, 0);
      sh.add(stripe);
      const el = j(sh, 0, -0.27, 0);
      const fo = cap(0.05, 0.15, M.main);
      fo.position.y = -0.12;
      el.add(fo);
      const glove = new THREE.Mesh(new THREE.CylinderGeometry(0.058, 0.052, 0.1, 8), M.accent);
      glove.position.y = -0.2;
      el.add(glove);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), M.dark);
      hand.position.y = -0.28;
      el.add(hand);
      return { sh, el, hand };
    };
    const L = arm(1), R = arm(-1);
    this.shL = L.sh; this.elL = L.el; this.handL = L.hand;
    this.shR = R.sh; this.elR = R.el; this.handR = R.hand;

    const leg = (side) => {
      const hp = j(this.hips, 0.095 * side, -0.06, 0);
      const th = cap(0.075, 0.25, M.main);
      th.position.y = -0.2;
      hp.add(th);
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.03), M.accent);
      stripe.position.set(0.07 * side, -0.2, 0);
      hp.add(stripe);
      const kn = j(hp, 0, -0.41, 0);
      const sh = cap(0.06, 0.26, M.main);
      sh.position.y = -0.19;
      kn.add(sh);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.075, 0.24), M.accent);
      foot.position.set(0, -0.42, 0.05);
      kn.add(foot);
      return { hp, kn };
    };
    const LL = leg(1), RL = leg(-1);
    this.hipL = LL.hp; this.knL = LL.kn;
    this.hipR = RL.hp; this.knR = RL.kn;

    this.joints = ['spine', 'head', 'shL', 'elL', 'shR', 'elR', 'hipL', 'knL', 'hipR', 'knR'];
    this.targets = {};
    for (const n of this.joints) this.targets[n] = new THREE.Quaternion();
    this.bodyQuat = new THREE.Quaternion();
    this.t = 0;
    this.crouch = 0;
    this.visible = true;

    // blob shadow
    const sc = document.createElement('canvas');
    sc.width = sc.height = 64;
    const g = sc.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    grd.addColorStop(0, 'rgba(0,0,0,0.55)');
    grd.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    this.shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.6, 1.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false, fog: false })
    );
    this.shadow.rotation.x = -Math.PI / 2;
    this.shadow.renderOrder = 2;
    scene.add(this.shadow);
  }

  setSuit(suit) {
    this.mats.main.color.setHex(suit.main);
    this.mats.accent.color.setHex(suit.accent);
    this.mats.visor.color.setHex(suit.visor);
    this.mats.visor.emissive.setHex(suit.visor);
  }

  setVisible(v) {
    this.body.visible = v;
  }

  // helper: set target from euler
  pose(name, x = 0, y = 0, z = 0) {
    _e.set(x, y, z, 'XYZ');
    this.targets[name].setFromEuler(_e);
  }

  // Point a limb (whose rest direction is -Y) toward a world-space target.
  aim(name, joint, worldTarget) {
    const parent = joint.parent;
    parent.updateWorldMatrix(true, false);
    joint.getWorldPosition(_v);
    _v2.copy(worldTarget).sub(_v).normalize();
    parent.getWorldQuaternion(_q2).invert();
    _v2.applyQuaternion(_q2);
    this.targets[name].setFromUnitVectors(DOWN, _v2);
  }

  update(dt, p, world) {
    this.t += dt;
    const t = this.t;
    const v = p.vel;
    const speedH = Math.hypot(v.x, v.z);
    const speed = v.length();
    this.root.position.copy(p.pos);

    // ---------- body orientation
    const up = _v.set(0, 1, 0);
    const fwd = _v2.set(Math.sin(p.facing), 0, Math.cos(p.facing));
    let crouch = 0;
    const st = p.state;
    if (st === 'swing') {
      up.copy(p.rope.anchor).sub(p.pos).normalize();
      fwd.copy(v).addScaledVector(up, -v.dot(up));
      if (fwd.lengthSq() < 0.01) fwd.set(Math.sin(p.facing), 0, Math.cos(p.facing));
    } else if (st === 'wall') {
      if (p.wall.climbing) {
        up.set(p.wall.nx, 0, p.wall.nz);
        fwd.set(0, Math.sign(v.y || 1), 0);
      } else {
        fwd.set(-p.wall.nx, 0, -p.wall.nz);
      }
    } else if (st === 'zip') {
      fwd.copy(p.zip.target).sub(p.pos);
      fwd.y *= 0.4;
      up.set(0, 1, 0).addScaledVector(fwd.normalize(), 0.8);
    } else if (st === 'air') {
      if (speedH > 1) fwd.set(v.x, 0, v.z);
      if (p.diving && speed > 5) {
        up.copy(v).normalize();
        fwd.set(0, -1, 0).addScaledVector(up, up.y);
        if (fwd.lengthSq() < 0.01) fwd.set(Math.sin(p.facing), 0, Math.cos(p.facing));
      } else {
        // lean into the direction of travel
        const lean = clamp(speedH / 40, 0, 0.5);
        up.set(0, 1, 0).addScaledVector(fwd.clone().normalize(), lean);
      }
    } else if (st === 'ground') {
      const lean = clamp((speedH - 3) / 30, 0, 0.25);
      up.set(0, 1, 0).addScaledVector(fwd, lean);
    }
    up.normalize();
    fwd.addScaledVector(up, -fwd.dot(up)).normalize();
    const right = new THREE.Vector3().crossVectors(up, fwd); // = hero's left (+X)
    _m.makeBasis(right, up, fwd);
    _q.setFromRotationMatrix(_m);
    // flips / rolls
    if (p.flipT >= 0) {
      const f = Math.min(p.flipT / p.flipDur, 1);
      const ang = (1 - Math.pow(1 - f, 2)) * Math.PI * 2 * (p.flipDir || 1);
      _q2.setFromAxisAngle(new THREE.Vector3(1, 0, 0), ang);
      _q.multiply(_q2);
    }
    if (p.twistT >= 0) {
      const f = Math.min(p.twistT / 0.6, 1);
      _q2.setFromAxisAngle(UPV, f * Math.PI * 2);
      _q.multiply(_q2);
    }
    const rate = st === 'swing' ? 9 : st === 'wall' ? 14 : 10;
    this.bodyQuat.slerp(_q, damp(p.flipT >= 0 || p.twistT >= 0 ? 30 : rate, dt));
    this.root.quaternion.copy(this.bodyQuat);

    // ---------- limb poses
    const P = (n, x, y, z) => this.pose(n, x, y, z);
    const phase = p.runPhase;
    if (st === 'ground') {
      if (p.landT > 0 || p.perchT > 0) {
        crouch = p.perchT > 0 ? 0.42 : 0.35 * Math.min(1, p.landT / 0.2);
        P('spine', 0.55, 0, 0); P('head', -0.45, 0, 0);
        P('hipL', -1.5, 0, 0.25); P('knL', 2.1, 0, 0);
        P('hipR', -1.2, 0, -0.2); P('knR', 2.0, 0, 0);
        P('shL', -0.7, 0, 0.35); P('elL', -0.4, 0, 0);
        P('shR', -0.2, 0, -0.7); P('elR', -0.3, 0, 0);
      } else if (speedH > 0.6) {
        const k = clamp(speedH / 13, 0.25, 1.15);
        const s = Math.sin(phase), c = Math.cos(phase);
        P('spine', 0.08 + 0.22 * k, 0, 0); P('head', -0.12 - 0.15 * k, 0, 0);
        P('hipL', -s * 0.95 * k, 0, 0.02); P('knL', (0.25 + Math.max(0, c) * 1.5) * k, 0, 0);
        P('hipR', s * 0.95 * k, 0, -0.02); P('knR', (0.25 + Math.max(0, -c) * 1.5) * k, 0, 0);
        P('shL', s * 0.9 * k, 0, 0.12); P('elL', -0.4 - 0.8 * k, 0, 0);
        P('shR', -s * 0.9 * k, 0, -0.12); P('elR', -0.4 - 0.8 * k, 0, 0);
        crouch = 0.03 * Math.abs(Math.sin(phase)) * k;
      } else {
        const b = Math.sin(t * 2.2) * 0.03;
        P('spine', b, 0, 0); P('head', -b, Math.sin(t * 0.5) * 0.3, 0);
        P('hipL', 0, 0, 0.06); P('knL', 0.05, 0, 0);
        P('hipR', 0, 0, -0.06); P('knR', 0.05, 0, 0);
        P('shL', 0.05, 0, 0.16); P('elL', -0.2, 0, 0);
        P('shR', 0.05, 0, -0.16); P('elR', -0.2, 0, 0);
      }
    } else if (st === 'swing') {
      const handName = p.rope.side > 0 ? 'shR' : 'shL';
      const other = p.rope.side > 0 ? 'L' : 'R';
      const os = other === 'L' ? 1 : -1;
      const sw = Math.sin(t * 2.5) * 0.15;
      P('spine', -0.18, 0, 0); P('head', -0.25, 0, 0);
      P('sh' + other, 0.35, 0, os * 1.3); P('el' + other, -0.5, 0, 0);
      P(p.rope.side > 0 ? 'elR' : 'elL', -0.05, 0, 0);
      P('hipL', -0.5 + sw, 0, 0.12); P('knL', 1.1, 0, 0);
      P('hipR', 0.15 - sw, 0, -0.08); P('knR', 0.45, 0, 0);
      this.aim(handName, p.rope.side > 0 ? this.shR : this.shL, p.rope.visual);
    } else if (st === 'zip') {
      P('spine', 0.1, 0, 0); P('head', -0.3, 0, 0);
      P('shL', -2.7, 0, 0.2); P('elL', -0.1, 0, 0);
      P('shR', -2.7, 0, -0.2); P('elR', -0.1, 0, 0);
      P('hipL', 0.35, 0, 0.05); P('knL', 0.6, 0, 0);
      P('hipR', 0.15, 0, -0.05); P('knR', 0.3, 0, 0);
    } else if (st === 'wall') {
      if (p.wall.climbing) {
        const k = 1.1;
        const s = Math.sin(phase), c = Math.cos(phase);
        P('spine', 0.35, 0, 0); P('head', -0.5, 0, 0);
        P('hipL', -s * 1.1 * k, 0, 0); P('knL', (0.3 + Math.max(0, c) * 1.6) * k, 0, 0);
        P('hipR', s * 1.1 * k, 0, 0); P('knR', (0.3 + Math.max(0, -c) * 1.6) * k, 0, 0);
        P('shL', s * 1.0, 0, 0.2); P('elL', -1.2, 0, 0);
        P('shR', -s * 1.0, 0, -0.2); P('elR', -1.2, 0, 0);
      } else {
        const s = Math.sin(phase) * 0.4;
        crouch = 0.1;
        P('spine', 0.35, 0, 0); P('head', -0.6, 0, 0);
        P('shL', -2.4 + s, 0, 0.6); P('elL', -0.6, 0, 0);
        P('shR', -2.0 - s, 0, -0.6); P('elR', -0.7, 0, 0);
        P('hipL', -1.3 - s, 0, 0.7); P('knL', 1.9, 0, 0);
        P('hipR', -0.9 + s, 0, -0.7); P('knR', 1.7, 0, 0);
      }
    } else {
      // airborne
      if (p.diving) {
        P('spine', -0.1, 0, 0); P('head', -0.9, 0, 0);
        P('shL', 0.35, 0, 0.22); P('elL', 0, 0, 0);
        P('shR', 0.35, 0, -0.22); P('elR', 0, 0, 0);
        P('hipL', 0.05, 0, 0.05); P('knL', 0.15, 0, 0);
        P('hipR', 0.12, 0, -0.05); P('knR', 0.3, 0, 0);
      } else if (v.y > 2 || p.flipT >= 0) {
        P('spine', 0.25, 0, 0); P('head', -0.2, 0, 0);
        P('hipL', -1.1, 0, 0.1); P('knL', 1.7, 0, 0);
        P('hipR', -0.5, 0, -0.1); P('knR', 1.3, 0, 0);
        P('shL', -0.4, 0, 0.9); P('elL', -0.7, 0, 0);
        P('shR', -0.4, 0, -0.9); P('elR', -0.7, 0, 0);
      } else {
        const f = Math.sin(t * 7) * 0.12;
        P('spine', 0.1, 0, 0); P('head', -0.3, 0, 0);
        P('shL', -0.2 + f, 0, 1.5); P('elL', -0.4, 0, 0);
        P('shR', -0.2 - f, 0, -1.5); P('elR', -0.4, 0, 0);
        P('hipL', -0.5 - f, 0, 0.2); P('knL', 0.8, 0, 0);
        P('hipR', 0.15 + f, 0, -0.15); P('knR', 0.5, 0, 0);
      }
      if (p.rollT >= 0) {
        P('hipL', -1.8, 0, 0); P('knL', 2.2, 0, 0);
        P('hipR', -1.8, 0, 0); P('knR', 2.2, 0, 0);
        P('spine', 0.8, 0, 0);
      }
    }
    if (p.throwT > 0) {
      // throwing arm
      const k = p.throwT / 0.35;
      P('shR', -2.2 * k - 0.4, 0, -0.3); P('elR', -0.3, 0, 0);
    }

    const jr = damp(st === 'ground' && speedH > 0.6 ? 22 : 13, dt);
    for (const n of this.joints) this[n].quaternion.slerp(this.targets[n], jr);
    this.crouch += (crouch - this.crouch) * damp(14, dt);
    this.body.position.y = -this.crouch;

    // ---------- blob shadow
    const hit = world.raycast(p.pos.x, p.pos.y, p.pos.z, 0, -1, 0, 80, this._shadowHit || (this._shadowHit = {}));
    let gy = 0, dist;
    if (hit) gy = hit.y;
    else if (world.groundAt(p.pos.x, p.pos.z) === null) gy = -100;
    dist = p.pos.y - 0.9 - gy;
    this.shadow.visible = gy > -50 && dist < 60;
    this.shadow.position.set(p.pos.x, gy + 0.05, p.pos.z);
    const sc = 1 + dist * 0.04;
    this.shadow.scale.set(sc, sc, sc);
    this.shadow.material.opacity = clamp(1 - dist / 60, 0, 1);
  }

  handWorld(side, out) {
    // side > 0 = right hand
    return (side > 0 ? this.handR : this.handL).getWorldPosition(out);
  }
}
