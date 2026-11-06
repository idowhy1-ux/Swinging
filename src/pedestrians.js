// Pedestrians walking the sidewalks around the hero. Limbs are animated in
// the vertex shader so hundreds of people cost one draw call.
import * as THREE from 'three';
import { CITY } from './config.js';
import { blockIndex } from './city.js';
import { Rng, clamp, lerpAngle, damp } from './util.js';
import { env, LIGHT_CHUNK } from './shaders.js';
import { GeoBuilder, xform } from './geo.js';

const SHIRTS = [0xe74c3c, 0x3498db, 0xf1c40f, 0x2ecc71, 0xecf0f1, 0x9b59b6, 0x34495e, 0xe67e22, 0x1abc9c, 0xff6b81, 0x5f27cd, 0x222222];
const PANTS = [0x2c3e50, 0x34495e, 0x1e272e, 0x7f8c8d, 0x3d5a80, 0x5d4037, 0xd2b48c];

function personGeometry() {
  const gb = new GeoBuilder({ aPart: 1, aLimb: 1, aPivot: 3 });
  const A = (geo, part, limb, pivot, m, color = 0xffffff) => gb.add(geo, { color, matrix: m, extra: { aPart: part, aLimb: limb, aPivot: pivot } });
  for (const s of [1, -1]) {
    const hip = [0.095 * s, 0.9, 0];
    // tapered legs with a knee, shoes
    A(new THREE.CylinderGeometry(0.075, 0.058, 0.47, 7), 2, s, hip, xform(0.095 * s, 0.68, 0));
    A(new THREE.CylinderGeometry(0.057, 0.045, 0.44, 7), 2, s, hip, xform(0.095 * s, 0.25, 0));
    A(new THREE.SphereGeometry(0.06, 7, 5), 2, s, hip, xform(0.095 * s, 0.46, 0.005));
    A(new THREE.SphereGeometry(0.07, 7, 5), 3, s, hip, xform(0.095 * s, 0.045, 0.05, 0, 0, 0, 0.75, 0.5, 1.6), 0x1f1f22);
    // arms: upper + forearm in the shirt colour, hands in skin
    const sh = [0.24 * s, 1.43, 0];
    A(new THREE.CylinderGeometry(0.052, 0.046, 0.3, 6), 1, 2 * s, sh, xform(0.25 * s, 1.27, 0, 0, 0, -0.06 * s));
    A(new THREE.CylinderGeometry(0.044, 0.036, 0.28, 6), 1, 2 * s, sh, xform(0.265 * s, 0.98, 0.01, 0, 0, -0.04 * s));
    A(new THREE.SphereGeometry(0.048, 6, 5), 0, 2 * s, sh, xform(0.27 * s, 0.81, 0.012, 0, 0, 0, 0.8, 1.2, 0.9));
  }
  // hips + torso (elliptical, chest wider than waist) + shoulders
  A(new THREE.CylinderGeometry(0.16, 0.17, 0.16, 10), 2, 0, [0, 0, 0], xform(0, 0.93, 0, 0, 0, 0, 1, 1, 0.68));
  A(new THREE.CylinderGeometry(0.2, 0.155, 0.5, 10), 1, 0, [0, 0, 0], xform(0, 1.22, 0, 0, 0, 0, 1, 1, 0.62));
  A(new THREE.SphereGeometry(0.2, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), 1, 0, [0, 0, 0], xform(0, 1.46, 0, 0, 0, 0, 1, 0.42, 0.62));
  // neck, head, hair
  A(new THREE.CylinderGeometry(0.048, 0.055, 0.1, 6), 0, 0, [0, 0, 0], xform(0, 1.55, 0));
  A(new THREE.SphereGeometry(0.11, 9, 7), 0, 0, [0, 0, 0], xform(0, 1.68, 0.01, 0, 0, 0, 0.9, 1.08, 1.0));
  A(new THREE.SphereGeometry(0.118, 9, 5, 0, Math.PI * 2, 0, Math.PI * 0.55), 3, 0, [0, 0, 0], xform(0, 1.695, -0.008, -0.25, 0, 0, 0.93, 1.05, 1.05), 0x2a1d14);
  A(new THREE.SphereGeometry(0.02, 5, 4), 0, 0, [0, 0, 0], xform(0, 1.665, 0.115), 0xffffff); // nose
  return gb.build();
}

export class Pedestrians {
  constructor(scene, city) {
    this.city = city;
    this.rng = new Rng(99);
    this.count = 240;
    this.special = 12; // reserved for delivery customers
    const total = this.count + this.special;
    const geo = personGeometry();
    this.anim = new Float32Array(total * 4);
    this.pants = new Float32Array(total * 3);
    const animAttr = new THREE.InstancedBufferAttribute(this.anim, 4);
    animAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aAnim', animAttr);
    geo.setAttribute('aPants', new THREE.InstancedBufferAttribute(this.pants, 3));
    this.animAttr = animAttr;
    const mat = new THREE.ShaderMaterial({
      uniforms: { ...env },
      vertexShader: /* glsl */ `
        attribute vec3 aColor;
        attribute float aPart;
        attribute float aLimb;
        attribute vec3 aPivot;
        attribute vec4 aAnim; // walk phase, stride, arms up, skin tone
        attribute vec3 aPants;
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vWorld;
        vec3 rotX(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c); }
        vec3 rotZ(vec3 v, float a) { float c = cos(a), s = sin(a); return vec3(v.x * c - v.y * s, v.x * s + v.y * c, v.z); }
        void main() {
          vec3 p = position;
          vec3 n = normal;
          float side = sign(aLimb);
          float limb = abs(aLimb);
          float swing = sin(aAnim.x) * aAnim.y;
          if (limb > 0.5 && limb < 1.5) {
            float a = -swing * side;
            p = aPivot + rotX(p - aPivot, a); n = rotX(n, a);
          } else if (limb > 1.5) {
            float a = swing * side * 0.8;
            p = aPivot + rotX(p - aPivot, a); n = rotX(n, a);
            float r = aAnim.z * 2.7 * side;
            p = aPivot + rotZ(p - aPivot, r); n = rotZ(n, r);
          }
          // little hop while cheering
          p.y += aAnim.z * max(0.0, sin(aAnim.x * 1.7)) * 0.25;
          vec4 wp = modelMatrix * instanceMatrix * vec4(p, 1.0);
          vWorld = wp.xyz;
          vNormal = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * n);
          vec3 skin = mix(vec3(0.96, 0.8, 0.66), vec3(0.36, 0.23, 0.15), aAnim.w);
          vec3 shirt = vec3(1.0);
          #ifdef USE_INSTANCING_COLOR
            shirt = instanceColor;
          #endif
          vColor = aPart < 0.5 ? skin : aPart < 1.5 ? shirt : aPart < 2.5 ? aPants : aColor;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        ${LIGHT_CHUNK}
        varying vec3 vColor;
        varying vec3 vNormal;
        varying vec3 vWorld;
        void main() {
          vec3 col = applyLight(vColor, normalize(vNormal));
          col = applyFog(col, vWorld);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.mesh = new THREE.InstancedMesh(geo, mat, total);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    const col = new THREE.Color();
    this.peds = [];
    for (let k = 0; k < total; k++) {
      col.setHex(this.rng.pick(SHIRTS));
      this.mesh.setColorAt(k, col);
      col.setHex(this.rng.pick(PANTS));
      this.pants.set([col.r, col.g, col.b], k * 3);
      this.anim[k * 4 + 3] = this.rng.float(0, 1);
      if (k < this.count) {
        const p = { k, i: 0, j: 0, t: 0, dir: 1, lat: 0, speed: 1.3, phase: this.rng.float(0, 6.28), mode: 'walk', timer: 0, x: 0, z: 0, y: 0, yaw: 0, cheer: 0, scale: this.rng.float(0.92, 1.08) };
        this.peds.push(p);
      }
    }
    this.specials = Array.from({ length: this.special }, (_, s) => ({ k: this.count + s, active: false, x: 0, y: 0, z: 0, yaw: 0, cheer: 0, phase: 0 }));
    this.initialized = false;
    scene.add(this.mesh);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3();
    this.cheerCooldown = 0;
  }

  respawn(p, ci, cj, near) {
    const N = CITY.N, rng = this.rng;
    const r = near ? 3 : 2;
    p.i = clamp(ci + rng.int(-r, r), 0, N - 1);
    p.j = clamp(cj + rng.int(-r, r), 0, N - 1);
    p.t = rng.float(0, 400);
    p.dir = rng.chance(0.5) ? 1 : -1;
    p.lat = rng.float(-1.4, 1.4);
    p.speed = rng.float(1.0, 1.7);
    p.mode = 'walk';
    p.timer = rng.float(5, 25);
    p.cheer = 0;
    const s = this.city.sidewalkPoint(p.i, p.j, p.t, p.lat);
    p.x = s.x; p.z = s.z;
  }

  // Make people near a point react to the hero.
  cheer(x, z, radius = 14) {
    for (const p of this.peds) {
      const dx = p.x - x, dz = p.z - z;
      if (dx * dx + dz * dz < radius * radius && Math.random() < 0.85) {
        p.mode = 'cheer';
        p.timer = 1.8 + Math.random() * 1.8;
        p.lookX = x; p.lookZ = z;
      }
    }
  }

  setSpecial(slot, on, x = 0, y = 0, z = 0, yaw = 0, cheer = 0) {
    const s = this.specials[slot];
    s.active = on; s.x = x; s.y = y; s.z = z; s.yaw = yaw; s.cheer = cheer;
  }

  update(dt, player) {
    const ci = clamp(blockIndex(player.pos.x), 0, CITY.N - 1);
    const cj = clamp(blockIndex(player.pos.z), 0, CITY.N - 1);
    if (!this.initialized) {
      this.initialized = true;
      for (const p of this.peds) this.respawn(p, ci, cj, true);
    }
    const M = this._m, Q = this._q, V = this._v, S = this._s;
    const A = this.anim;
    const UP = THREE.Object3D.DEFAULT_UP;
    const pp = player.pos;
    const fast = player.state === 'ground' && Math.hypot(player.vel.x, player.vel.z) > 7;
    for (const p of this.peds) {
      if (Math.abs(p.i - ci) > 3 || Math.abs(p.j - cj) > 3) this.respawn(p, ci, cj, false);
      let stride = 0, arms = 0;
      if (p.mode === 'walk') {
        p.t += p.dir * p.speed * dt;
        p.phase += p.speed * dt * 4.2;
        stride = 0.45;
        p.timer -= dt;
        if (p.timer < 0) {
          p.mode = 'idle';
          p.timer = 1.5 + Math.random() * 4;
        }
        const s = this.city.sidewalkPoint(p.i, p.j, p.t, p.lat);
        const ty = [Math.PI / 2, 0, -Math.PI / 2, Math.PI][s.dir] + (p.dir < 0 ? Math.PI : 0);
        p.yaw = lerpAngle(p.yaw, ty, damp(8, dt));
        p.x = s.x; p.z = s.z;
      } else if (p.mode === 'idle') {
        p.timer -= dt;
        if (p.timer < 0) {
          p.mode = 'walk';
          p.timer = 6 + Math.random() * 20;
          if (Math.random() < 0.3) p.dir *= -1;
        }
      } else if (p.mode === 'cheer') {
        p.timer -= dt;
        p.phase += dt * 9;
        arms = 1;
        p.yaw = lerpAngle(p.yaw, Math.atan2(p.lookX - p.x, p.lookZ - p.z), damp(10, dt));
        if (p.timer < 0) { p.mode = 'walk'; p.timer = 5 + Math.random() * 10; }
      }
      // dodge a sprinting hero
      if (fast) {
        const dx = p.x - pp.x, dz = p.z - pp.z;
        if (dx * dx + dz * dz < 4 && Math.abs(pp.y - 0.9) < 1.2) {
          p.lat = clamp(p.lat + (p.lat > 0 ? 1 : -1) * 1.2, -2, 2);
          if (p.mode !== 'cheer') { p.mode = 'cheer'; p.timer = 1.2; p.lookX = pp.x; p.lookZ = pp.z; }
        }
      }
      Q.setFromAxisAngle(UP, p.yaw);
      M.compose(V.set(p.x, 0, p.z), Q, S.setScalar(p.scale));
      this.mesh.setMatrixAt(p.k, M);
      A[p.k * 4] = p.phase;
      A[p.k * 4 + 1] = stride;
      A[p.k * 4 + 2] = arms;
    }
    for (const s of this.specials) {
      if (!s.active) {
        M.makeScale(0, 0, 0);
        this.mesh.setMatrixAt(s.k, M);
        continue;
      }
      s.phase += dt * (s.cheer ? 8 : 2);
      Q.setFromAxisAngle(UP, s.yaw);
      M.compose(V.set(s.x, s.y, s.z), Q, S.setScalar(1));
      this.mesh.setMatrixAt(s.k, M);
      A[s.k * 4] = s.phase;
      A[s.k * 4 + 1] = 0;
      A[s.k * 4 + 2] = s.cheer ? 1 : 0.55 + Math.sin(s.phase * 2) * 0.35; // waving
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    this.animAttr.needsUpdate = true;
  }
}
