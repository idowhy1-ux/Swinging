// Sky dome + day/night cycle. Drives the shared lighting uniforms.
import * as THREE from 'three';
import { env } from './shaders.js';
import { clamp, smoothstep, lerp } from './util.js';

const C = (hex) => new THREE.Color(hex);
// Keyframes indexed by sun elevation (radians-ish, -0.35..1.2)
const KEYS = [
  { e: -0.35, zen: C(0x050a1c), hor: C(0x16213f), sun: C(0x4a5a85), amb: C(0x34416a), gnd: C(0x1a1d2a), fog: 0.0013 },
  { e: -0.1, zen: C(0x0e1838), hor: C(0x34345a), sun: C(0x50507a), amb: C(0x3a4068), gnd: C(0x1c1c24), fog: 0.00125 },
  { e: 0.0, zen: C(0x2b3a6b), hor: C(0xf07b4f), sun: C(0xff7a40), amb: C(0x5a4a60), gnd: C(0x2a2224), fog: 0.0012 },
  { e: 0.14, zen: C(0x3f6aa8), hor: C(0xf8b878), sun: C(0xffc080), amb: C(0x6a7088), gnd: C(0x3a3430), fog: 0.00105 },
  { e: 0.45, zen: C(0x3a78c8), hor: C(0xb0d4ee), sun: C(0xfff0d8), amb: C(0x7c8aa4), gnd: C(0x4a4640), fog: 0.00095 },
  { e: 1.3, zen: C(0x2f6fd0), hor: C(0xa8d2f2), sun: C(0xfffaf0), amb: C(0x8494b0), gnd: C(0x4e4a44), fog: 0.0009 },
];

export class Sky {
  constructor(scene) {
    this.scene = scene;
    this.hour = 16.5; // start late afternoon
    this.daySpeed = 1 / 30; // game hours per real second (12 min day)
    this.zenith = new THREE.Color();
    this.horizon = new THREE.Color();
    const geo = new THREE.SphereGeometry(4000, 32, 16);
    this.mat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        uZenith: { value: this.zenith },
        uHorizon: { value: this.horizon },
        uSunDir: env.uSunDir,
        uSunColor: env.uSunColor,
        uNight: env.uNight,
        uTime: env.uTime,
      },
      vertexShader: /* glsl */ `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uZenith, uHorizon, uSunDir, uSunColor;
        uniform float uNight, uTime;
        varying vec3 vDir;
        float h(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
        float n2(vec2 p) {
          vec2 i = floor(p), f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          float a = h(vec3(i, 0.0)), b = h(vec3(i + vec2(1, 0), 0.0)), c = h(vec3(i + vec2(0, 1), 0.0)), d = h(vec3(i + vec2(1, 1), 0.0));
          return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
        }
        void main() {
          vec3 d = normalize(vDir);
          float y = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(y, 0.55));
          if (d.y < 0.0) col = uHorizon * (1.0 + d.y * 1.5);
          float sd = max(dot(d, uSunDir), 0.0);
          col += uSunColor * pow(sd, 8.0) * 0.35 * (1.0 - uNight);
          col += uSunColor * smoothstep(0.9993, 0.9997, sd) * (1.0 - uNight);
          // moon opposite to the sun
          float md = max(dot(d, -uSunDir), 0.0);
          col += vec3(0.85, 0.9, 1.0) * smoothstep(0.9990, 0.9994, md) * uNight;
          col += vec3(0.3, 0.35, 0.5) * pow(md, 30.0) * 0.3 * uNight;
          // stars
          vec3 sp = floor(d * 380.0);
          float s = step(0.9975, h(sp)) * smoothstep(0.05, 0.3, d.y);
          float tw = 0.6 + 0.4 * sin(uTime * 3.0 + h(sp + 1.0) * 30.0);
          col += vec3(s * tw) * uNight;
          // soft clouds
          if (d.y > 0.02) {
            vec2 cp = d.xz / (d.y + 0.15) * 2.0 + vec2(uTime * 0.01, 0.0);
            float c = n2(cp) * 0.6 + n2(cp * 2.3) * 0.3 + n2(cp * 5.1) * 0.1;
            c = smoothstep(0.55, 0.85, c) * smoothstep(0.02, 0.25, d.y);
            vec3 cc = mix(uHorizon * 1.1 + uSunColor * 0.15, vec3(0.15, 0.17, 0.24), uNight);
            col = mix(col, cc, c * 0.75);
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = -1;
    scene.add(this.mesh);

    // Lights for the built-in materials (hero, pickups)
    this.sun = new THREE.DirectionalLight(0xffffff, 1);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    scene.add(this.sun, this.hemi, this.sun.target);
    this.fog = new THREE.FogExp2(0x888888, 0.001);
    scene.fog = this.fog;
    this.update(0, new THREE.Vector3());
  }

  get isNight() {
    return env.uNight.value > 0.5;
  }

  update(dt, camPos) {
    this.hour = (this.hour + dt * this.daySpeed) % 24;
    const a = ((this.hour - 6) / 12) * Math.PI; // 0 at 6:00, PI at 18:00
    const elev = Math.sin(a) * 1.15;
    const sd = env.uSunDir.value;
    sd.set(Math.cos(a) * 0.8, Math.sin(a), 0.35 + Math.cos(a) * 0.1).normalize();
    const e = clamp(elev, KEYS[0].e, KEYS[KEYS.length - 1].e);
    let k = 0;
    while (k < KEYS.length - 2 && e > KEYS[k + 1].e) k++;
    const A = KEYS[k], B = KEYS[k + 1];
    const t = clamp((e - A.e) / (B.e - A.e), 0, 1);
    this.zenith.copy(A.zen).lerp(B.zen, t);
    this.horizon.copy(A.hor).lerp(B.hor, t);
    env.uSunColor.value.copy(A.sun).lerp(B.sun, t);
    env.uSkyAmb.value.copy(A.amb).lerp(B.amb, t).multiplyScalar(1.3);
    env.uGroundAmb.value.copy(A.gnd).lerp(B.gnd, t).multiplyScalar(1.3);
    env.uFogColor.value.copy(this.horizon).lerp(this.zenith, 0.15);
    env.uFogDensity.value = lerp(A.fog, B.fog, t) * this.fogScale;
    env.uNight.value = 1 - smoothstep(-0.12, 0.08, elev);
    if (elev < 0) {
      // moonlight comes from the opposite direction
      sd.negate();
      sd.y = Math.max(sd.y, 0.25);
      sd.normalize();
    }
    // three.js lights for standard materials
    this.sun.color.copy(env.uSunColor.value);
    this.sun.intensity = 1.0;
    this.sun.position.copy(camPos).addScaledVector(sd, 100);
    this.sun.target.position.copy(camPos);
    this.hemi.color.copy(env.uSkyAmb.value).multiplyScalar(1.5);
    this.hemi.groundColor.copy(env.uGroundAmb.value).multiplyScalar(1.4);
    this.fog.color.copy(env.uFogColor.value);
    this.fog.density = env.uFogDensity.value;
    this.mesh.position.copy(camPos);
  }

  fogScale = 1;

  clockString() {
    const h = Math.floor(this.hour), m = Math.floor((this.hour - h) * 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const hh = ((h + 11) % 12) + 1;
    return `${hh}:${m < 10 ? '0' : ''}${m} ${ampm}`;
  }
}
