// Helpers for building merged, vertex-coloured geometry from primitives.
import * as THREE from 'three';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();

export function xform(x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  _e.set(rx, ry, rz);
  _q.setFromEuler(_e);
  _p.set(x, y, z);
  _s.set(sx, sy, sz);
  return new THREE.Matrix4().compose(_p, _q, _s);
}

export class GeoBuilder {
  constructor(extraAttrs = {}) {
    this.pos = [];
    this.nor = [];
    this.col = [];
    this.emit = [];
    // extra per-vertex float attributes, name -> itemSize
    this.extraDefs = extraAttrs;
    this.extra = {};
    for (const k of Object.keys(extraAttrs)) this.extra[k] = [];
  }

  add(geometry, { color = 0xffffff, emit = 0, matrix = null, extra = {} } = {}) {
    let g = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    if (matrix) g.applyMatrix4(matrix);
    const c = new THREE.Color(color);
    const p = g.attributes.position.array;
    const n = g.attributes.normal.array;
    const count = p.length / 3;
    for (let i = 0; i < count; i++) {
      this.pos.push(p[i * 3], p[i * 3 + 1], p[i * 3 + 2]);
      this.nor.push(n[i * 3], n[i * 3 + 1], n[i * 3 + 2]);
      this.col.push(c.r, c.g, c.b);
      this.emit.push(emit);
      for (const k of Object.keys(this.extraDefs)) {
        const size = this.extraDefs[k];
        const v = extra[k] !== undefined ? extra[k] : 0;
        if (size === 1) this.extra[k].push(typeof v === 'number' ? v : v[0]);
        else for (let s = 0; s < size; s++) this.extra[k].push(v[s] || 0);
      }
    }
    g.dispose();
    return this;
  }

  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nor, 3));
    g.setAttribute('aColor', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('aEmit', new THREE.Float32BufferAttribute(this.emit, 1));
    for (const k of Object.keys(this.extraDefs)) {
      g.setAttribute(k, new THREE.Float32BufferAttribute(this.extra[k], this.extraDefs[k]));
    }
    g.computeBoundingSphere();
    return g;
  }
}

// Convenience: an InstancedMesh with a large bounding sphere so it is never culled
// incorrectly as instances move around the city.
export function makeInstanced(geometry, material, count, { dynamic = false, colors = false } = {}) {
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  if (dynamic) mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  if (colors) {
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(count * 3).fill(1), 3);
    if (dynamic) mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
  }
  mesh.frustumCulled = false;
  return mesh;
}
