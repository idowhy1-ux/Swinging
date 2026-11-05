// Road traffic: cars follow lanes, obey traffic lights, keep distance,
// turn at intersections and stop (and honk!) for the hero.
import * as THREE from 'three';
import { CITY } from './config.js';
import { roadC } from './city.js';
import { Rng, clamp, damp } from './util.js';
import { GeoBuilder, xform, makeInstanced } from './geo.js';
import { makeLitMaterial } from './shaders.js';

const LANES = [2.4, 6.0];
const CYCLE = 22;
const R2 = CITY.ROAD / 2;

function lanePos(axis, k, dir, lane, s, out) {
  if (axis === 0) { out.x = s; out.z = roadC(k) + (dir > 0 ? 1 : -1) * LANES[lane]; }
  else { out.z = s; out.x = roadC(k) + (dir > 0 ? -1 : 1) * LANES[lane]; }
  return out;
}
const yawFor = (axis, dir) => (axis === 0 ? (dir > 0 ? Math.PI / 2 : -Math.PI / 2) : dir > 0 ? 0 : Math.PI);

function carGeometry(kind) {
  const gb = new GeoBuilder({ aTint: 1 });
  const box = new THREE.BoxGeometry(1, 1, 1);
  const wheel = new THREE.CylinderGeometry(0.36, 0.36, 0.28, 8);
  const T = { extra: { aTint: 1 } }, N = { extra: { aTint: 0 } };
  if (kind === 'bus') {
    gb.add(box, { color: 0xffffff, matrix: xform(0, 1.7, 0, 0, 0, 0, 2.5, 2.6, 11), ...T });
    gb.add(box, { color: 0x1d2430, matrix: xform(0, 2.1, 0.3, 0, 0, 0, 2.54, 0.9, 9.6), ...N });
    gb.add(box, { color: 0x1d2430, matrix: xform(0, 2.0, 5.48, 0, 0, 0, 2.2, 1.4, 0.1), ...N });
    for (const z of [-3.8, 3.8]) for (const x of [-1.15, 1.15]) gb.add(wheel, { color: 0x111111, matrix: xform(x, 0.4, z, 0, 0, Math.PI / 2), ...N });
    gb.add(box, { color: 0xfff2c0, emit: 1, matrix: xform(-0.9, 0.8, 5.51, 0, 0, 0, 0.4, 0.25, 0.05), ...N });
    gb.add(box, { color: 0xfff2c0, emit: 1, matrix: xform(0.9, 0.8, 5.51, 0, 0, 0, 0.4, 0.25, 0.05), ...N });
    gb.add(box, { color: 0xff2020, emit: 1, matrix: xform(-1.0, 0.9, -5.51, 0, 0, 0, 0.3, 0.3, 0.05), ...N });
    gb.add(box, { color: 0xff2020, emit: 1, matrix: xform(1.0, 0.9, -5.51, 0, 0, 0, 0.3, 0.3, 0.05), ...N });
    gb.add(box, { color: 0xffb000, emit: 0.8, matrix: xform(0, 3.05, 5.4, 0, 0, 0, 1.6, 0.3, 0.1), ...N });
  } else {
    gb.add(box, { color: 0xffffff, matrix: xform(0, 0.62, 0, 0, 0, 0, 1.86, 0.62, 4.3), ...T });
    gb.add(box, { color: 0xffffff, matrix: xform(0, 1.15, -0.25, 0, 0, 0, 1.6, 0.5, 2.1), ...T });
    gb.add(box, { color: 0x1b222c, matrix: xform(0, 1.15, -0.25, 0, 0, 0, 1.64, 0.4, 1.9), ...N });
    for (const z of [-1.35, 1.35]) for (const x of [-0.9, 0.9]) gb.add(wheel, { color: 0x111111, matrix: xform(x, 0.36, z, 0, 0, Math.PI / 2), ...N });
    gb.add(box, { color: 0xfff2c0, emit: 1, matrix: xform(-0.62, 0.68, 2.16, 0, 0, 0, 0.36, 0.18, 0.04), ...N });
    gb.add(box, { color: 0xfff2c0, emit: 1, matrix: xform(0.62, 0.68, 2.16, 0, 0, 0, 0.36, 0.18, 0.04), ...N });
    gb.add(box, { color: 0xff2020, emit: 1, matrix: xform(-0.66, 0.72, -2.16, 0, 0, 0, 0.34, 0.16, 0.04), ...N });
    gb.add(box, { color: 0xff2020, emit: 1, matrix: xform(0.66, 0.72, -2.16, 0, 0, 0, 0.34, 0.16, 0.04), ...N });
  }
  return gb.build();
}

const CAR_COLORS = [0xc0392b, 0x2e86de, 0xf1f2f6, 0x222831, 0x7f8c8d, 0x27ae60, 0xf39c12, 0x8e44ad, 0xdfe4ea, 0x1e3799, 0xb33939];

export class Traffic {
  constructor(scene, city) {
    this.city = city;
    this.rng = new Rng(77);
    this.time = 0;
    this.cars = [];
    this.nCars = 120;
    this.nBus = 14;
    const mat = makeLitMaterial({ emitDay: 0.25, emitNight: 2.2, tintMask: true });
    this.carMesh = makeInstanced(carGeometry('car'), mat, this.nCars, { dynamic: true, colors: true });
    this.busMesh = makeInstanced(carGeometry('bus'), mat, this.nBus, { dynamic: true, colors: true });
    scene.add(this.carMesh, this.busMesh);
    const col = new THREE.Color();
    for (let i = 0; i < this.nCars + this.nBus; i++) {
      const bus = i >= this.nCars;
      const c = {
        bus,
        idx: bus ? i - this.nCars : i,
        axis: 0, k: 0, dir: 1, lane: 0, s: 0,
        speed: 0,
        cruise: bus ? 10 : this.rng.float(11, 16),
        len: bus ? 11 : 4.3,
        turn: null,
        decided: -999,
        pos: new THREE.Vector3(),
        yaw: 0,
        honk: 0,
      };
      if (bus) col.setHex(this.rng.chance(0.5) ? 0x1f6fd1 : 0xe8a317);
      else if (this.rng.chance(0.18)) col.setHex(0xf7c600); // taxi
      else col.setHex(this.rng.pick(CAR_COLORS));
      (bus ? this.busMesh : this.carMesh).setColorAt(c.idx, col);
      this.cars.push(c);
      this.spawn(c, null);
    }
    this.buildSignals(scene);
    this.lastPhase = -1;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._p = new THREE.Vector3();
    this._s = new THREE.Vector3(1, 1, 1);
    this.events = [];
  }

  buildSignals(scene) {
    const S = this.city.signals;
    const gb = new GeoBuilder();
    gb.add(new THREE.CylinderGeometry(0.1, 0.12, 5, 4), { color: 0x2b2f35, matrix: xform(0, 2.5, 0) });
    gb.add(new THREE.BoxGeometry(0.5, 1.4, 0.5), { color: 0x1b1d20, matrix: xform(0, 5.2, 0) });
    const poles = makeInstanced(gb.build(), makeLitMaterial({ emitDay: 0, emitNight: 0 }), S.length);
    const lgb = new GeoBuilder();
    lgb.add(new THREE.OctahedronGeometry(0.34, 0), { color: 0xffffff, emit: 1 });
    this.signalLamps = makeInstanced(lgb.build(), makeLitMaterial({ emitDay: 0.9, emitNight: 2 }), S.length, { colors: true });
    const m = new THREE.Matrix4();
    S.forEach((s, i) => {
      m.makeTranslation(s.x, 0, s.z);
      poles.setMatrixAt(i, m);
      m.makeTranslation(s.x, 5.4, s.z);
      this.signalLamps.setMatrixAt(i, m);
    });
    scene.add(poles, this.signalLamps);
  }

  light(axis) {
    const t = this.time % CYCLE;
    if (axis === 0) return t < 9 ? 2 : t < 11 ? 1 : 0; // 2 green 1 yellow 0 red
    return t >= 11 && t < 20 ? 2 : t >= 20 ? 1 : 0;
  }

  // Place a car on a random straight road segment (near `around` if given).
  spawn(c, around) {
    const rng = this.rng;
    const N = CITY.N;
    for (let tries = 0; tries < 20; tries++) {
      c.axis = rng.chance(0.5) ? 0 : 1;
      c.dir = rng.chance(0.5) ? 1 : -1;
      c.lane = c.bus ? 1 : rng.int(0, 1);
      if (around) {
        const ang = rng.float(0, Math.PI * 2), r = rng.float(140, 380);
        const ax = around.x + Math.cos(ang) * r, az = around.z + Math.sin(ang) * r;
        const along = c.axis === 0 ? ax : az, perp = c.axis === 0 ? az : ax;
        c.k = clamp(Math.round((perp + CITY.HALF) / CITY.PITCH), 0, N);
        const m = clamp(Math.floor((along + CITY.HALF) / CITY.PITCH), 0, N - 1);
        c.s = roadC(m) + R2 + 3 + rng.float(0, CITY.BLOCK - 6);
      } else {
        c.k = rng.int(0, N);
        const m = rng.int(0, N - 1);
        c.s = roadC(m) + R2 + 3 + rng.float(0, CITY.BLOCK - 6);
      }
      lanePos(c.axis, c.k, c.dir, c.lane, c.s, c.pos);
      // avoid spawning on top of another car
      let ok = true;
      for (const o of this.cars) {
        if (o !== c && o.pos && Math.abs(o.pos.x - c.pos.x) < 8 && Math.abs(o.pos.z - c.pos.z) < 8) { ok = false; break; }
      }
      if (ok) break;
    }
    c.turn = null;
    c.speed = c.cruise * 0.6;
    c.decided = -999;
    c.yaw = yawFor(c.axis, c.dir);
  }

  nextIntersection(c) {
    const f = (c.s + CITY.HALF) / CITY.PITCH;
    return c.dir > 0 ? Math.floor(f + 1e-6) + 1 : Math.ceil(f - 1e-6) - 1;
  }

  chooseTurn(c, m) {
    const N = CITY.N;
    const opts = [];
    if (m + c.dir >= 0 && m + c.dir <= N) opts.push(0, 0, 0);
    for (const nd of [-1, 1]) if (c.k + nd >= 0 && c.k + nd <= N) opts.push(nd);
    return opts.length ? this.rng.pick(opts) : 0;
  }

  startTurn(c, m, choice) {
    const newAxis = 1 - c.axis;
    const E = lanePos(c.axis, c.k, c.dir, c.lane, roadC(m) - c.dir * R2, new THREE.Vector3());
    const X = lanePos(newAxis, m, choice, c.lane, roadC(c.k) + choice * R2, new THREE.Vector3());
    const C = c.axis === 0 ? new THREE.Vector3(X.x, 0, E.z) : new THREE.Vector3(E.x, 0, X.z);
    let len = 0, px = E.x, pz = E.z;
    for (let i = 1; i <= 8; i++) {
      const t = i / 8, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, d = t * t;
      const x = a * E.x + b * C.x + d * X.x, z = a * E.z + b * C.z + d * X.z;
      len += Math.hypot(x - px, z - pz);
      px = x; pz = z;
    }
    c.turn = { E, C, X, t: 0, len, axis: newAxis, k: m, dir: choice, s: roadC(c.k) + choice * R2 };
  }

  update(dt, player) {
    this.time += dt;
    const phase = this.light(0) * 3 + this.light(1);
    if (phase !== this.lastPhase) {
      this.lastPhase = phase;
      const col = new THREE.Color();
      this.city.signals.forEach((s, i) => {
        const l = this.light(s.axis);
        col.setHex(l === 2 ? 0x30ff60 : l === 1 ? 0xffc020 : 0xff2a20);
        this.signalLamps.setColorAt(i, col);
      });
      this.signalLamps.instanceColor.needsUpdate = true;
    }
    // bucket cars per lane for car-following
    const buckets = new Map();
    for (const c of this.cars) {
      if (c.turn) continue;
      const key = c.axis * 100000 + c.k * 100 + (c.dir > 0 ? 10 : 0) + c.lane;
      let b = buckets.get(key);
      if (!b) buckets.set(key, (b = []));
      b.push(c);
    }
    for (const b of buckets.values()) {
      b.sort((a, c) => (a.s - c.s) * a.dir);
      for (let i = 0; i < b.length; i++) b[i].ahead = b[i + 1] || null;
    }
    const pp = player.pos;
    const playerOnStreet = pp.y < 2.5;
    for (const c of this.cars) {
      if (Math.abs(c.pos.x - pp.x) > 520 || Math.abs(c.pos.z - pp.z) > 520) {
        this.spawn(c, pp);
        continue;
      }
      if (c.turn) {
        const T = c.turn;
        c.speed += (c.cruise * 0.6 - c.speed) * damp(2, dt);
        T.t += (c.speed * dt) / T.len;
        if (T.t >= 1) {
          c.axis = T.axis; c.k = T.k; c.dir = T.dir; c.s = T.s;
          c.turn = null;
          lanePos(c.axis, c.k, c.dir, c.lane, c.s, c.pos);
          c.yaw = yawFor(c.axis, c.dir);
        } else {
          const t = T.t, a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, d = t * t;
          c.pos.set(a * T.E.x + b * T.C.x + d * T.X.x, 0, a * T.E.z + b * T.C.z + d * T.X.z);
          const tx = 2 * (1 - t) * (T.C.x - T.E.x) + 2 * t * (T.X.x - T.C.x);
          const tz = 2 * (1 - t) * (T.C.z - T.E.z) + 2 * t * (T.X.z - T.C.z);
          c.yaw = Math.atan2(tx, tz);
        }
        continue;
      }
      const m = this.nextIntersection(c);
      let desired = c.cruise;
      if (m >= 0 && m <= CITY.N) {
        const entryS = roadC(m) - c.dir * R2;
        const stopS = entryS - c.dir * (1.2 + c.len / 2);
        const distStop = (stopS - c.s) * c.dir;
        const l = this.light(c.axis);
        if (c.decided !== m) {
          if (l !== 2 && distStop > -0.5 && distStop < 45 && !(l === 1 && distStop < 4)) {
            desired = Math.min(desired, Math.max(0, distStop * 0.7));
          }
          if ((distStop <= 0.3 && (l === 2 || (l === 1 && distStop > -2))) || distStop < -0.5) {
            c.decided = m;
            c.plan = this.chooseTurn(c, m);
          }
        } else if (c.plan) {
          desired = Math.min(desired, c.cruise * 0.6);
          if ((entryS - c.s) * c.dir <= 0) {
            this.startTurn(c, m, c.plan);
            c.plan = 0;
            continue;
          }
        }
      }
      if (c.ahead) {
        const gap = (c.ahead.s - c.s) * c.dir - (c.len + c.ahead.len) / 2;
        desired = Math.min(desired, Math.max(0, (gap - 3) * 0.9));
      }
      // stop for the hero standing in the lane
      if (playerOnStreet) {
        const dx = pp.x - c.pos.x, dz = pp.z - c.pos.z;
        const fwd = c.axis === 0 ? dx * c.dir : dz * c.dir;
        const lat = c.axis === 0 ? dz : dx;
        if (fwd > 0 && fwd < 16 && Math.abs(lat) < 1.8) {
          desired = Math.min(desired, Math.max(0, (fwd - 4) * 0.8));
          c.honk -= dt;
          if (c.honk <= 0 && fwd < 12) {
            c.honk = 3 + Math.random() * 3;
            this.events.push({ type: 'honk', x: c.pos.x, z: c.pos.z });
          }
        }
      }
      const acc = desired > c.speed ? 4 : 11;
      c.speed += clamp(desired - c.speed, -acc * dt, acc * dt);
      c.s += c.dir * c.speed * dt;
      lanePos(c.axis, c.k, c.dir, c.lane, c.s, c.pos);
      c.yaw = yawFor(c.axis, c.dir);
      // leaving the grid at an edge (should not happen, but be safe)
      if (c.s < -CITY.HALF - 30 || c.s > CITY.HALF + 30) this.spawn(c, pp);
    }
    // upload matrices
    const M = this._m, Q = this._q, P = this._p, S = this._s;
    for (const c of this.cars) {
      Q.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, c.yaw);
      M.compose(P.set(c.pos.x, 0, c.pos.z), Q, S);
      (c.bus ? this.busMesh : this.carMesh).setMatrixAt(c.idx, M);
    }
    this.carMesh.instanceMatrix.needsUpdate = true;
    this.busMesh.instanceMatrix.needsUpdate = true;
  }

  // Simple car-roof platforms: returns the car under a point, if any.
  carAt(x, y, z) {
    for (const c of this.cars) {
      const h = c.bus ? 3.0 : 1.45;
      if (y < h - 0.6 || y > h + 1.2) continue;
      const dx = x - c.pos.x, dz = z - c.pos.z;
      const s = Math.sin(c.yaw), co = Math.cos(c.yaw);
      const lz = dx * s + dz * co, lx = dx * co - dz * s;
      if (Math.abs(lx) < (c.bus ? 1.3 : 0.95) && Math.abs(lz) < c.len / 2) return { car: c, top: h };
    }
    return null;
  }
}
