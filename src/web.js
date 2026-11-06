// Web lines: shoot animation, taut/slack line while swinging and a dangling
// verlet strand left behind after release.
import * as THREE from 'three';
import { makeInstanced } from './geo.js';

const N = 14;
const UPV = new THREE.Vector3(0, 1, 0);
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const _d = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();

class Line {
  constructor() {
    this.pts = Array.from({ length: N }, () => new THREE.Vector3());
    this.prev = Array.from({ length: N }, () => new THREE.Vector3());
    this.state = 'off';
    this.anchor = new THREE.Vector3();
    this.start = new THREE.Vector3();
    this.t = 0;
    this.life = 0;
    this.restLen = 1;
    this.radius = 0.032;
  }
}

function splatTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.strokeStyle = '#ffffff';
  g.lineCap = 'round';
  const spokes = [];
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
    const r = 44 + Math.random() * 18;
    spokes.push([a, r]);
    g.lineWidth = 2.2;
    g.beginPath(); g.moveTo(64, 64); g.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r); g.stroke();
  }
  for (const k of [0.3, 0.55, 0.8]) {
    g.lineWidth = 1.5;
    g.beginPath();
    spokes.forEach(([a, r], i) => {
      const rr = r * k * (0.9 + Math.random() * 0.2);
      const x = 64 + Math.cos(a) * rr, y = 64 + Math.sin(a) * rr;
      if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
    });
    g.closePath();
    g.stroke();
  }
  g.fillStyle = '#ffffff';
  g.beginPath(); g.arc(64, 64, 9, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  return t;
}

export class WebSystem {
  constructor(scene) {
    const stex = splatTexture();
    const sgeo = new THREE.PlaneGeometry(1.5, 1.5);
    this.splats = Array.from({ length: 12 }, () => {
      const m = new THREE.Mesh(sgeo, new THREE.MeshBasicMaterial({ map: stex, transparent: true, depthWrite: false, opacity: 0, fog: true, polygonOffset: true, polygonOffsetFactor: -2 }));
      m.visible = false;
      scene.add(m);
      return { mesh: m, life: 0 };
    });
    this.nextSplat = 0;
    this.lines = Array.from({ length: 8 }, () => new Line());
    const geo = new THREE.CylinderGeometry(1, 1, 1, 5, 1, true);
    const mat = new THREE.MeshBasicMaterial({ color: 0xeef3ff, fog: true });
    this.mesh = makeInstanced(geo, mat, this.lines.length * (N - 1), { dynamic: true });
    scene.add(this.mesh);
  }

  // Start a new line from `start` to `anchor`.
  shoot(anchor, start, ropeLength) {
    let line = this.lines.find((l) => l.state === 'off') || this.lines.reduce((a, b) => (a.life < b.life ? a : b));
    line.state = 'shoot';
    line.anchor.copy(anchor);
    line.start.copy(start);
    line.t = 0;
    line.life = 1;
    line.restLen = ropeLength || start.distanceTo(anchor);
    for (let i = 0; i < N; i++) {
      line.pts[i].copy(start);
      line.prev[i].copy(start);
    }
    return line;
  }

  // Detach from the hero: the strand stays stuck to the wall and falls.
  release(line, vel) {
    if (!line || line.state === 'off' || line.state === 'free') return;
    line.state = 'free';
    line.life = 1.6;
    // initialise verlet from the current straight line
    for (let i = 0; i < N; i++) {
      const t = i / (N - 1);
      line.pts[i].lerpVectors(line.start, line.anchor, t);
      line.prev[i].copy(line.pts[i]).addScaledVector(vel, -(1 - t) * 0.016);
    }
    line.restLen = line.start.distanceTo(line.anchor) * 1.05;
  }

  // leave a web splat on the surface the line stuck to
  splat(point, normal) {
    const s = this.splats[this.nextSplat];
    this.nextSplat = (this.nextSplat + 1) % this.splats.length;
    s.life = 6;
    s.mesh.visible = true;
    s.mesh.position.copy(point).addScaledVector(normal, 0.04);
    s.mesh.lookAt(_a.copy(s.mesh.position).add(normal));
    s.mesh.rotateZ(Math.random() * Math.PI * 2);
    s.mesh.scale.setScalar(0.6);
  }

  update(dt, camPos) {
    for (const s of this.splats) {
      if (s.life <= 0) continue;
      s.life -= dt;
      const grow = Math.min(1, (6 - s.life) / 0.12);
      s.mesh.scale.setScalar(0.6 + grow * 0.4);
      s.mesh.material.opacity = Math.min(0.95, s.life / 1.5) * grow;
      if (s.life <= 0) s.mesh.visible = false;
    }
    const g = -20 * dt * dt;
    let k = 0;
    for (const line of this.lines) {
      if (line.state === 'off') {
        for (let i = 0; i < N - 1; i++) this.hide(k++);
        continue;
      }
      if (line.state === 'shoot' || line.state === 'taut') {
        line.t += dt;
        const len = line.start.distanceTo(line.anchor);
        const reach = Math.min(1, (line.t * 320) / Math.max(1, len));
        if (reach >= 1 && line.state === 'shoot') line.state = 'taut';
        const slack = Math.max(0, line.restLen - len);
        _d.subVectors(line.anchor, line.start);
        const perp = _a.set(-_d.z, 0, _d.x).normalize();
        for (let i = 0; i < N; i++) {
          const t = (i / (N - 1)) * reach;
          line.pts[i].copy(line.start).addScaledVector(_d, t);
          if (line.state === 'shoot') {
            const w = Math.sin(t * 18 - line.t * 40) * 0.25 * (1 - reach) * Math.sin(Math.PI * (i / (N - 1)));
            line.pts[i].addScaledVector(perp, w);
          }
          // slack line sags under gravity
          if (slack > 0.05) line.pts[i].y -= Math.sin(Math.PI * t) * Math.min(slack * 0.5, 6);
        }
      } else if (line.state === 'free') {
        line.life -= dt;
        if (line.life <= 0) {
          line.state = 'off';
          for (let i = 0; i < N - 1; i++) this.hide(k++);
          continue;
        }
        const pts = line.pts, prev = line.prev;
        for (let i = 0; i < N - 1; i++) {
          const p = pts[i];
          const vx = (p.x - prev[i].x) * 0.985, vy = (p.y - prev[i].y) * 0.985, vz = (p.z - prev[i].z) * 0.985;
          prev[i].copy(p);
          p.x += vx; p.y += vy + g; p.z += vz;
          if (p.y < 0.05) p.y = 0.05;
        }
        pts[N - 1].copy(line.anchor);
        const seg = line.restLen / (N - 1);
        for (let it = 0; it < 4; it++) {
          for (let i = 0; i < N - 1; i++) {
            const a = pts[i], b = pts[i + 1];
            _d.subVectors(b, a);
            const l = _d.length() || 1e-6;
            const diff = (l - seg) / l;
            if (i + 1 === N - 1) a.addScaledVector(_d, diff);
            else {
              a.addScaledVector(_d, diff * 0.5);
              b.addScaledVector(_d, -diff * 0.5);
            }
          }
        }
      }
      const r = line.state === 'free' ? line.radius * Math.min(1, line.life / 0.8) : line.radius;
      for (let i = 0; i < N - 1; i++) {
        _a.copy(line.pts[i]);
        _b.copy(line.pts[i + 1]);
        _d.subVectors(_b, _a);
        const l = _d.length();
        if (l < 1e-4) { this.hide(k++); continue; }
        _q.setFromUnitVectors(UPV, _d.divideScalar(l));
        _a.add(_b).multiplyScalar(0.5);
        // keep distant lines at least ~2px wide so they don't break into dashes
        // constant on-screen thickness: thin near your hand, still visible far away
        const rr = camPos ? (r / 0.032) * (0.004 + _a.distanceTo(camPos) * 0.0024) : r;
        _m.compose(_a, _q, _s.set(rr, l, rr));
        this.mesh.setMatrixAt(k++, _m);
      }
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  hide(k) {
    _m.makeScale(0, 0, 0);
    this.mesh.setMatrixAt(k, _m);
  }
}
