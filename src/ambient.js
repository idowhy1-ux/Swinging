// Ambient life: bird flocks that scatter, a news helicopter, a blimp and boats.
import * as THREE from 'three';
import { CITY } from './config.js';
import { blockC } from './city.js';
import { Rng, damp } from './util.js';
import { GeoBuilder, xform, makeInstanced } from './geo.js';
import { makeLitMaterial, env } from './shaders.js';

export class Ambient {
  constructor(scene, city) {
    this.rng = new Rng(4242);
    this.t = 0;
    this.scene = scene;
    // ---------------- birds
    const bg = new GeoBuilder();
    const wing = new THREE.BufferGeometry();
    wing.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0.15, 0.55, 0.12, -0.05, 0, 0, -0.15, 0, 0, 0.15, 0, 0, -0.15, -0.55, 0.12, -0.05], 3));
    wing.computeVertexNormals();
    bg.add(wing, { color: 0x55585e });
    bg.add(new THREE.BoxGeometry(0.12, 0.1, 0.4), { color: 0x6a6e75 });
    const birdMat = makeLitMaterial({ emitDay: 0, emitNight: 0, side: THREE.DoubleSide });
    this.flocks = [];
    const nF = 7, perF = 9;
    this.birdMesh = makeInstanced(bg.build(), birdMat, nF * perF, { dynamic: true });
    for (let f = 0; f < nF; f++) {
      const home = new THREE.Vector3(this.rng.float(-550, 550), this.rng.float(30, 120), this.rng.float(-550, 550));
      const birds = [];
      for (let b = 0; b < perF; b++) birds.push({ a: this.rng.float(0, 6.28), r: this.rng.float(4, 14), h: this.rng.float(-3, 3), sp: this.rng.float(0.5, 0.9), ph: this.rng.float(0, 6.28) });
      this.flocks.push({ home, center: home.clone(), scatter: 0, R: this.rng.float(18, 40), a: this.rng.float(0, 6), birds });
    }
    scene.add(this.birdMesh);

    // ---------------- helicopter
    const hg = new GeoBuilder();
    hg.add(new THREE.SphereGeometry(1.6, 12, 8), { color: 0x1e5aa8, matrix: xform(0, 0, 0, 0, 0, 0, 1, 0.9, 1.5) });
    hg.add(new THREE.SphereGeometry(1.2, 10, 6), { color: 0x9ad0ff, emit: 0.3, matrix: xform(0, 0.25, 1.1, 0, 0, 0, 1, 0.75, 0.8) });
    hg.add(new THREE.BoxGeometry(0.4, 0.4, 5), { color: 0x1e5aa8, matrix: xform(0, 0.3, -4) });
    hg.add(new THREE.BoxGeometry(0.15, 1.4, 0.8), { color: 0xffffff, matrix: xform(0, 0.9, -6.3) });
    hg.add(new THREE.BoxGeometry(0.12, 0.12, 2.6), { color: 0x333333, matrix: xform(0.9, -1.4, 0) });
    hg.add(new THREE.BoxGeometry(0.12, 0.12, 2.6), { color: 0x333333, matrix: xform(-0.9, -1.4, 0) });
    hg.add(new THREE.BoxGeometry(2.2, 0.06, 0.4), { color: 0xffffff, matrix: xform(0, -0.3, 0.5) });
    hg.add(new THREE.SphereGeometry(0.15, 6, 4), { color: 0xff2020, emit: 1, matrix: xform(0, 1.6, -6.6) });
    this.heli = new THREE.Mesh(hg.build(), makeLitMaterial({ emitDay: 0.3, emitNight: 2 }));
    const rotor = new THREE.Mesh(new THREE.BoxGeometry(11, 0.06, 0.35), new THREE.MeshLambertMaterial({ color: 0x222222 }));
    rotor.position.y = 1.6;
    this.heli.add(rotor);
    const rotor2 = rotor.clone();
    rotor2.rotation.y = Math.PI / 2;
    this.heli.add(rotor2);
    this.rotors = [rotor, rotor2];
    // night spotlight cone
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(14, 120, 16, 1, true),
      new THREE.MeshBasicMaterial({ color: 0xfff6d0, transparent: true, opacity: 0.08, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, fog: false })
    );
    cone.position.y = -60;
    cone.rotation.x = 0;
    this.spot = new THREE.Group();
    this.spot.add(cone);
    this.spot.rotation.x = 0.35;
    this.heli.add(this.spot);
    scene.add(this.heli);

    // ---------------- blimp
    const bl = new GeoBuilder();
    bl.add(new THREE.SphereGeometry(1, 20, 12), { color: 0xeeeeee, matrix: xform(0, 0, 0, 0, 0, 0, 9, 9, 32) });
    bl.add(new THREE.BoxGeometry(3, 2, 7), { color: 0x333a44, matrix: xform(0, -9.5, 2) });
    for (const r of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) bl.add(new THREE.BoxGeometry(0.4, 7, 6), { color: 0xff7a1a, matrix: xform(Math.sin(r) * 5, Math.cos(r) * 5, -27, 0, 0, r) });
    bl.add(new THREE.CylinderGeometry(9.08, 9.08, 6, 20, 1, true), { color: 0xff7a1a, emit: 0.4, matrix: xform(0, 0, 4, Math.PI / 2, 0, 0) });
    this.blimp = new THREE.Mesh(bl.build(), makeLitMaterial({ emitDay: 0.1, emitNight: 1.2 }));
    scene.add(this.blimp);

    // ---------------- boats
    const bo = new GeoBuilder();
    bo.add(new THREE.BoxGeometry(4, 1.4, 12), { color: 0xffffff, matrix: xform(0, 0.4, 0) });
    bo.add(new THREE.BoxGeometry(3, 1.6, 4), { color: 0xdfe6e9, matrix: xform(0, 1.8, -1) });
    bo.add(new THREE.BoxGeometry(3.05, 0.5, 3.8), { color: 0x2d3436, matrix: xform(0, 2.2, -1) });
    bo.add(new THREE.ConeGeometry(2, 3, 4), { color: 0xffffff, matrix: xform(0, 0.4, 7.2, Math.PI / 2, Math.PI / 4, 0, 1, 1, 0.7) });
    bo.add(new THREE.SphereGeometry(0.2, 6, 4), { color: 0x30ff60, emit: 1, matrix: xform(1.9, 1.4, 4) });
    bo.add(new THREE.SphereGeometry(0.2, 6, 4), { color: 0xff3030, emit: 1, matrix: xform(-1.9, 1.4, 4) });
    this.boats = [];
    for (let i = 0; i < 6; i++) this.boats.push({ r: CITY.SHORE + this.rng.float(90, 600), a: this.rng.float(0, 6.28), sp: this.rng.float(0.006, 0.012) * (this.rng.chance(0.5) ? 1 : -1), s: this.rng.float(0.8, 1.6) });
    this.boatMesh = makeInstanced(bo.build(), makeLitMaterial({ emitDay: 0.2, emitNight: 2 }), this.boats.length, { dynamic: true });
    scene.add(this.boatMesh);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this.events = [];
    this.heliCenter = new THREE.Vector3(blockC(5), 0, blockC(5));
  }

  update(dt, player) {
    this.t += dt;
    const t = this.t;
    const M = this._m, Q = this._q, E = this._e, V = this._v, S = this._s;
    // birds
    let k = 0;
    for (const f of this.flocks) {
      f.a += dt * 0.25;
      const d = f.center.distanceTo(player.pos);
      if (d < 18 && f.scatter <= 0) {
        f.scatter = 7;
        f.flee = new THREE.Vector3().subVectors(f.center, player.pos).setY(0).normalize();
        this.events.push({ type: 'birds', x: f.center.x, y: f.center.y, z: f.center.z });
      }
      if (f.scatter > 0) {
        f.scatter -= dt;
        f.center.addScaledVector(f.flee, dt * 16);
        f.center.y += dt * 7;
      } else {
        f.center.lerp(f.home, damp(0.15, dt));
      }
      const spread = f.scatter > 0 ? 1.8 : 1;
      for (const b of f.birds) {
        const a = f.a * b.sp * 3 + b.a;
        const x = f.center.x + Math.cos(a) * (f.R * 0.4 + b.r) * spread;
        const z = f.center.z + Math.sin(a) * (f.R * 0.4 + b.r) * spread;
        const y = f.center.y + b.h + Math.sin(t * 1.3 + b.ph) * 1.2;
        const flap = Math.sin(t * (f.scatter > 0 ? 22 : 13) + b.ph);
        E.set(0, -a, 0);
        Q.setFromEuler(E);
        M.compose(V.set(x, y, z), Q, S.set(1.2, 1.2 * flap, 1.2));
        this.birdMesh.setMatrixAt(k++, M);
      }
    }
    this.birdMesh.instanceMatrix.needsUpdate = true;

    // helicopter: lazy figure-eight over downtown, peeks at the hero sometimes
    const ha = t * 0.07;
    const hx = this.heliCenter.x + Math.sin(ha) * 380;
    const hz = this.heliCenter.z + Math.sin(ha * 2) * 200;
    const hy = 175 + Math.sin(t * 0.3) * 10;
    const nx = this.heliCenter.x + Math.sin(ha + 0.01) * 380, nz = this.heliCenter.z + Math.sin((ha + 0.01) * 2) * 200;
    this.heli.position.set(hx, hy, hz);
    this.heli.rotation.set(0.12, Math.atan2(nx - hx, nz - hz), Math.sin(ha * 2) * 0.15);
    for (const r of this.rotors) r.rotation.y += dt * 25;
    this.spot.visible = env.uNight.value > 0.4;
    this.spot.rotation.z = Math.sin(t * 0.5) * 0.3;

    // blimp: slow loop around the island
    const ba = t * 0.012 + 1;
    const br = CITY.HALF * 0.9;
    this.blimp.position.set(Math.cos(ba) * br, 240, Math.sin(ba) * br);
    this.blimp.rotation.y = -ba;

    // boats
    this.boats.forEach((b, i) => {
      b.a += b.sp * dt * 6;
      const x = Math.cos(b.a) * b.r, z = Math.sin(b.a) * b.r;
      const yaw = Math.atan2(-Math.sin(b.a) * Math.sign(b.sp), Math.cos(b.a) * Math.sign(b.sp));
      E.set(Math.sin(t + i) * 0.03, yaw, Math.sin(t * 1.3 + i) * 0.04);
      Q.setFromEuler(E);
      M.compose(V.set(x, CITY.WATER_Y + Math.sin(t * 1.5 + i) * 0.15, z), Q, S.setScalar(b.s));
      this.boatMesh.setMatrixAt(i, M);
    });
    this.boatMesh.instanceMatrix.needsUpdate = true;
  }
}
