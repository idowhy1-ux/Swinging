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
    this.daySpeed = 1 / 40; // game hours per real second (16 min day)
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
        float fbm(vec2 p) { return n2(p) * 0.5 + n2(p * 2.1) * 0.27 + n2(p * 4.3) * 0.15 + n2(p * 8.7) * 0.08; }
        void main() {
          vec3 d = normalize(vDir);
          float y = max(d.y, 0.0);
          vec3 col = mix(uHorizon, uZenith, pow(y, 0.5));
          if (d.y < 0.0) col = uHorizon * (1.0 + d.y * 1.2);
          float sd = max(dot(d, uSunDir), 0.0);
          float day = 1.0 - uNight;
          // Mie halo + horizon haze toward the sun
          col += uSunColor * (pow(sd, 6.0) * 0.45 * (1.0 - y * 0.6) + pow(sd, 64.0) * 0.6) * day;
          // HDR sun disk (blooms in post)
          col += uSunColor * smoothstep(0.99935, 0.99975, sd) * 4.0 * day;
          // moon
          float md = max(dot(d, -uSunDir), 0.0);
          col += vec3(0.9, 0.93, 1.0) * smoothstep(0.9991, 0.9995, md) * 1.6 * uNight;
          col += vec3(0.3, 0.35, 0.5) * pow(md, 40.0) * 0.35 * uNight;
          // stars
          vec3 sp = floor(d * 420.0);
          float s = step(0.9978, h(sp)) * smoothstep(0.05, 0.35, d.y);
          float tw = 0.55 + 0.45 * sin(uTime * 3.0 + h(sp + 1.0) * 30.0);
          col += vec3(s * tw * 1.3) * uNight;
          // clouds with sun-lit edges
          if (d.y > 0.01) {
            vec2 cp = d.xz / (d.y + 0.12) * 1.6 + vec2(uTime * 0.006, uTime * 0.002);
            float c = fbm(cp);
            float cov = smoothstep(0.5, 0.82, c) * smoothstep(0.01, 0.22, d.y);
            float thick = smoothstep(0.62, 0.95, c);
            vec3 lit = mix(uHorizon * 1.05, vec3(1.0), 0.35) + uSunColor * (0.35 + pow(sd, 4.0) * 0.9) * day;
            vec3 shade = mix(uHorizon * 0.75, uZenith * 0.8, 0.4);
            vec3 cc = mix(lit, shade, thick * 0.7);
            cc = mix(cc, vec3(0.12, 0.14, 0.22) + uHorizon * 0.3, uNight);
            col = mix(col, cc, cov * 0.82);
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
    env.uSkyAmb.value.copy(A.amb).lerp(B.amb, t).multiplyScalar(1.5);
    env.uGroundAmb.value.copy(A.gnd).lerp(B.gnd, t).multiplyScalar(1.55);
    env.uFogColor.value.copy(this.horizon).lerp(this.zenith, 0.15);
    env.uZenith.value.copy(this.zenith);
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
