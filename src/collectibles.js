// Floating balloons hidden around the city. Collect them all!
import * as THREE from 'three';
import { CITY } from './config.js';
import { Rng } from './util.js';
import { GeoBuilder, xform, makeInstanced } from './geo.js';
import { makeLitMaterial } from './shaders.js';

const COLORS = [0xff4d6d, 0xffd60a, 0x4cc9f0, 0x80ed99, 0xc77dff, 0xff9f1c];

export class Balloons {
  constructor(scene, city, collected = []) {
    const rng = new Rng(1337);
    this.items = [];
    const add = (x, y, z) => this.items.push({ id: this.items.length, x, y, z, ph: rng.float(0, 6.28), got: false });
    // rooftop corners of tall buildings
    const tall = city.buildings.filter((b) => b.height > 45 && !b.landmark);
    for (let i = 0; i < 22 && tall.length; i++) {
      const b = tall.splice(rng.int(0, tall.length - 1), 1)[0];
      const t = b.top;
      add(rng.chance(0.5) ? t.minX + 1.5 : t.maxX - 1.5, t.maxY + 2.5, rng.chance(0.5) ? t.minZ + 1.5 : t.maxZ - 1.5);
    }
    // in the air above streets
    for (let i = 0; i < 10; i++) {
      const k = rng.int(1, CITY.N - 1);
      const along = rng.float(-CITY.HALF, CITY.HALF);
      const y = rng.float(25, 70);
      if (rng.chance(0.5)) add(-CITY.HALF + k * CITY.PITCH, y, along);
      else add(along, y, -CITY.HALF + k * CITY.PITCH);
    }
    // landmarks
    const tw = city.landmarks.tower;
    add(tw.x, tw.top + 48, tw.z);
    add(tw.x + 27, 246, tw.z);
    const br = city.landmarks.bridge;
    add(br.x0 + 220, 129, br.z);
    add(br.x0 + 760, 129, br.z);
    add(br.x0 + 490, br.deckY + 6, br.z);
    // parks
    const parks = city.blocks.flat().filter((b) => b.type === 1);
    for (let i = 0; i < 3 && parks.length; i++) {
      const blk = parks[rng.int(0, parks.length - 1)];
      add(blk.cx + rng.float(-20, 20), 4, blk.cz + rng.float(-20, 20));
    }
    for (const id of collected) if (this.items[id]) this.items[id].got = true;

    const gb = new GeoBuilder();
    gb.add(new THREE.SphereGeometry(0.9, 12, 10), { color: 0xffffff, emit: 0.25, matrix: xform(0, 0, 0, 0, 0, 0, 1, 1.18, 1) });
    gb.add(new THREE.ConeGeometry(0.18, 0.25, 6), { color: 0xffffff, matrix: xform(0, -1.12, 0, Math.PI, 0, 0) });
    gb.add(new THREE.CylinderGeometry(0.015, 0.015, 2.2, 3), { color: 0xeeeeee, matrix: xform(0, -2.3, 0) });
    this.mesh = makeInstanced(gb.build(), makeLitMaterial({ emitDay: 0.25, emitNight: 0.9 }), this.items.length, { dynamic: true, colors: true });
    const col = new THREE.Color();
    this.items.forEach((it, i) => this.mesh.setColorAt(i, col.setHex(COLORS[i % COLORS.length])));
    scene.add(this.mesh);
    this.t = 0;
    this._m = new THREE.Matrix4();
    this._v = new THREE.Vector3();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
  }

  get total() {
    return this.items.length;
  }
  get count() {
    return this.items.filter((i) => i.got).length;
  }

  // returns the balloon collected this frame (if any)
  update(dt, player) {
    this.t += dt;
    let got = null;
    const p = player.pos;
    this.items.forEach((it, i) => {
      if (it.got) {
        this._m.makeScale(0, 0, 0);
      } else {
        const y = it.y + Math.sin(this.t * 1.4 + it.ph) * 0.4;
        const dx = p.x - it.x, dy = p.y - y, dz = p.z - it.z;
        if (dx * dx + dy * dy + dz * dz < 2.6 * 2.6) {
          it.got = true;
          got = it;
        }
        this._q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, this.t * 0.6 + it.ph);
        this._m.compose(this._v.set(it.x, y, it.z), this._q, this._s.setScalar(1.3));
      }
      this.mesh.setMatrixAt(i, this._m);
    });
    this.mesh.instanceMatrix.needsUpdate = true;
    return got;
  }

  nearest(p) {
    let best = null, bd = Infinity;
    for (const it of this.items) {
      if (it.got) continue;
      const d = Math.hypot(it.x - p.x, it.z - p.z);
      if (d < bd) { bd = d; best = it; }
    }
    return best;
  }
}
