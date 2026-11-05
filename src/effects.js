// Particles (dust, confetti, splashes, fireworks) and a speed-lines overlay.
import * as THREE from 'three';

const MAX = 700;

export class Effects {
  constructor(scene, camera) {
    this.pos = new Float32Array(MAX * 3);
    this.col = new Float32Array(MAX * 4);
    this.size = new Float32Array(MAX);
    this.vel = new Float32Array(MAX * 3);
    this.life = new Float32Array(MAX);
    this.maxLife = new Float32Array(MAX);
    this.drag = new Float32Array(MAX);
    this.grav = new Float32Array(MAX);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aColor', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    this.geo = g;
    this.points = new THREE.Points(
      g,
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: { uScale: { value: 400 } },
        vertexShader: /* glsl */ `
          attribute vec4 aColor;
          attribute float aSize;
          uniform float uScale;
          varying vec4 vColor;
          void main() {
            vColor = aColor;
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = aSize * uScale / max(0.1, -mv.z);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: /* glsl */ `
          varying vec4 vColor;
          void main() {
            vec2 c = gl_PointCoord - 0.5;
            float d = length(c);
            if (d > 0.5) discard;
            gl_FragColor = vec4(vColor.rgb, vColor.a * smoothstep(0.5, 0.2, d));
          }
        `,
      })
    );
    this.points.frustumCulled = false;
    scene.add(this.points);

    // speed lines: full-screen triangle drawn in clip space
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    this.speedMat = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uAmt: { value: 0 }, uTime: { value: 0 }, uAspect: { value: 1.7 } },
      vertexShader: /* glsl */ `
        varying vec2 vP;
        void main() { vP = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }
      `,
      fragmentShader: /* glsl */ `
        uniform float uAmt, uTime, uAspect;
        varying vec2 vP;
        float h(float n) { return fract(sin(n * 91.345) * 47453.21); }
        void main() {
          vec2 p = vP; p.x *= uAspect;
          float r = length(p);
          float a = atan(p.y, p.x);
          float id = floor(a * 38.0);
          float rnd = h(id);
          float streak = step(0.72, rnd);
          float f = fract(r * 0.35 - uTime * (1.4 + rnd * 2.2) + rnd * 7.0);
          float line = streak * smoothstep(0.0, 0.25, f) * smoothstep(1.0, 0.6, f);
          float edge = smoothstep(0.65, 1.35, r);
          gl_FragColor = vec4(vec3(1.0), line * edge * uAmt * 0.28);
        }
      `,
    });
    this.speedLines = new THREE.Mesh(tri, this.speedMat);
    this.speedLines.frustumCulled = false;
    this.speedLines.renderOrder = 999;
    scene.add(this.speedLines);
    this.fireworkTimer = 8;
  }

  spawn(x, y, z, vx, vy, vz, r, g, b, a, size, life, drag = 1.5, grav = 9.8) {
    const i = this.next;
    this.next = (this.next + 1) % MAX;
    this.pos.set([x, y, z], i * 3);
    this.vel.set([vx, vy, vz], i * 3);
    this.col.set([r, g, b, a], i * 4);
    this.size[i] = size;
    this.life[i] = life;
    this.maxLife[i] = life;
    this.drag[i] = drag;
    this.grav[i] = grav;
  }

  dust(x, y, z, amount = 1) {
    const n = Math.floor(14 * amount);
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2, s = 2 + Math.random() * 5 * amount;
      this.spawn(x, y + 0.2, z, Math.cos(a) * s, 0.5 + Math.random() * 2, Math.sin(a) * s, 0.75, 0.72, 0.68, 0.55, 0.9 + Math.random() * 0.8, 0.6 + Math.random() * 0.5, 3, -0.5);
    }
  }

  confetti(x, y, z) {
    const cols = [[1, 0.3, 0.4], [1, 0.85, 0.1], [0.3, 0.8, 1], [0.5, 1, 0.5], [0.8, 0.5, 1]];
    for (let k = 0; k < 60; k++) {
      const c = cols[k % cols.length];
      this.spawn(x, y + 1, z, (Math.random() - 0.5) * 9, 4 + Math.random() * 7, (Math.random() - 0.5) * 9, c[0], c[1], c[2], 1, 0.22, 1.6 + Math.random(), 1.2, 6);
    }
  }

  pop(x, y, z, color = [1, 0.4, 0.6]) {
    for (let k = 0; k < 24; k++) {
      const a = Math.random() * 6.28, e = (Math.random() - 0.5) * 3, s = 4 + Math.random() * 4;
      this.spawn(x, y, z, Math.cos(a) * s, e * 2, Math.sin(a) * s, color[0], color[1], color[2], 1, 0.3, 0.6, 2, 3);
    }
  }

  splash(x, y, z) {
    for (let k = 0; k < 50; k++) {
      const a = Math.random() * 6.28, s = Math.random() * 4;
      this.spawn(x, y, z, Math.cos(a) * s, 6 + Math.random() * 8, Math.sin(a) * s, 0.8, 0.9, 1, 0.8, 0.6, 1.2, 0.5, 18);
    }
  }

  sparks(x, y, z) {
    for (let k = 0; k < 10; k++) {
      this.spawn(x, y, z, (Math.random() - 0.5) * 6, Math.random() * 4, (Math.random() - 0.5) * 6, 1, 1, 1, 0.9, 0.18, 0.35, 2, 5);
    }
  }

  firework(x, y, z) {
    const hue = Math.random();
    const c = new THREE.Color().setHSL(hue, 0.9, 0.6);
    for (let k = 0; k < 90; k++) {
      const u = Math.random() * 2 - 1, th = Math.random() * 6.28, s = 22 + Math.random() * 6;
      const r = Math.sqrt(1 - u * u);
      this.spawn(x, y, z, r * Math.cos(th) * s, u * s, r * Math.sin(th) * s, c.r, c.g, c.b, 1, 3.5, 2.2, 1.6, 6);
    }
  }

  update(dt, speedAmt, aspect, night) {
    const P = this.pos, V = this.vel, C = this.col;
    for (let i = 0; i < MAX; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt;
      const k = Math.max(0, 1 - this.drag[i] * dt);
      V[i * 3] *= k; V[i * 3 + 1] = V[i * 3 + 1] * k - this.grav[i] * dt; V[i * 3 + 2] *= k;
      P[i * 3] += V[i * 3] * dt; P[i * 3 + 1] += V[i * 3 + 1] * dt; P[i * 3 + 2] += V[i * 3 + 2] * dt;
      if (this.life[i] <= 0) C[i * 4 + 3] = 0;
      else C[i * 4 + 3] = Math.min(C[i * 4 + 3], this.life[i] / this.maxLife[i] + 0.1);
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aSize.needsUpdate = true;
    this.speedMat.uniforms.uAmt.value += (speedAmt - this.speedMat.uniforms.uAmt.value) * Math.min(1, dt * 4);
    this.speedMat.uniforms.uTime.value += dt;
    this.speedMat.uniforms.uAspect.value = aspect;
    this.speedLines.visible = this.speedMat.uniforms.uAmt.value > 0.01;
    // fireworks over the bay at night
    if (night > 0.7) {
      this.fireworkTimer -= dt;
      if (this.fireworkTimer < 0) {
        this.fireworkTimer = Math.random() < 0.3 ? 0.4 : 4 + Math.random() * 10;
        this.firework(1100 + Math.random() * 300, 180 + Math.random() * 120, -300 + Math.random() * 600);
        return true;
      }
    }
    return false;
  }
}
