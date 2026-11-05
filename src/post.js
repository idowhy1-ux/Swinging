// Mobile-friendly post-processing: HDR scene target, dual-filter bloom,
// speed radial blur, filmic tone curve + grading, vignette and grain.
// The first-person arms are drawn in their own depth pass so they never
// clip into walls you are running on.
import * as THREE from 'three';

export const VIEWMODEL_LAYER = 2;

const VERT = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

function pass(frag, uniforms) {
  return new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: frag, uniforms, depthTest: false, depthWrite: false });
}

export class PostFX {
  constructor(renderer) {
    this.renderer = renderer;
    const ext = renderer.extensions;
    this.hdr = ext.has('EXT_color_buffer_half_float') || ext.has('EXT_color_buffer_float');
    this.type = this.hdr ? THREE.HalfFloatType : THREE.UnsignedByteType;
    this.enabled = true;
    this.samples = 0;
    this.main = null;
    this.levels = [];
    const tri = new THREE.BufferGeometry();
    tri.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
    this.quad = new THREE.Mesh(tri);
    this.quad.frustumCulled = false;
    this.qScene = new THREE.Scene();
    this.qScene.add(this.quad);
    this.qCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    this.bright = pass(/* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tSrc, vUv + uTexel * vec2(-0.5, -0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, -0.5)).rgb
               + texture2D(tSrc, vUv + uTexel * vec2(-0.5, 0.5)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.5, 0.5)).rgb;
        c *= 0.25;
        float l = max(c.r, max(c.g, c.b));
        float k = max(l - uThreshold, 0.0);
        k = k * k / (k + 0.5);
        gl_FragColor = vec4(c * (k / max(l, 1e-4)), 1.0);
      }`, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() }, uThreshold: { value: 0.9 } });
    this.down = pass(/* glsl */ `
      uniform sampler2D tSrc; uniform vec2 uTexel;
      varying vec2 vUv;
      void main() {
        vec3 c = texture2D(tSrc, vUv).rgb * 4.0;
        c += texture2D(tSrc, vUv - uTexel).rgb;
        c += texture2D(tSrc, vUv + uTexel).rgb;
        c += texture2D(tSrc, vUv + vec2(uTexel.x, -uTexel.y)).rgb;
        c += texture2D(tSrc, vUv - vec2(uTexel.x, -uTexel.y)).rgb;
        gl_FragColor = vec4(c / 8.0, 1.0);
      }`, { tSrc: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.up = pass(/* glsl */ `
      uniform sampler2D tSrc; uniform sampler2D tAdd; uniform vec2 uTexel;
      varying vec2 vUv;
      void main() {
        vec2 h = uTexel;
        vec3 c = texture2D(tSrc, vUv + vec2(-h.x * 2.0, 0.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(0.0, h.y * 2.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(h.x * 2.0, 0.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb * 2.0;
        c += texture2D(tSrc, vUv + vec2(0.0, -h.y * 2.0)).rgb;
        c += texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb * 2.0;
        gl_FragColor = vec4(c / 12.0 + texture2D(tAdd, vUv).rgb * 0.6, 1.0);
      }`, { tSrc: { value: null }, tAdd: { value: null }, uTexel: { value: new THREE.Vector2() } });
    this.composite = pass(/* glsl */ `
      uniform sampler2D tMain; uniform sampler2D tBloom;
      uniform float uBloom, uSpeed, uTime, uExposure, uVignette, uNight, uFlash, uDamage;
      uniform vec2 uRes;
      varying vec2 vUv;
      vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
      float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      void main() {
        vec2 uv = vUv;
        vec2 dir = uv - 0.5;
        float r = length(dir);
        vec3 col;
        if (uSpeed > 0.02) {
          // radial motion blur toward the edges at speed
          float amt = uSpeed * smoothstep(0.12, 0.75, r) * 0.075;
          col = vec3(0.0);
          for (int i = 0; i < 6; i++) col += texture2D(tMain, uv - dir * amt * (float(i) / 5.0)).rgb;
          col /= 6.0;
          // subtle chromatic fringe
          float ca = amt * 0.25;
          col.r = mix(col.r, texture2D(tMain, uv - dir * ca).r, 0.5);
          col.b = mix(col.b, texture2D(tMain, uv + dir * ca).b, 0.5);
        } else {
          col = texture2D(tMain, uv).rgb;
        }
        col += texture2D(tBloom, uv).rgb * uBloom;
        // display-referred -> linear -> filmic curve -> display
        vec3 lin = pow(max(col, 0.0), vec3(2.2));
        lin = aces(lin * uExposure);
        col = pow(lin, vec3(1.0 / 2.2));
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(vec3(l), col, 1.1);
        // split toning: warm highlights, cool shadows (more blue at night)
        col *= mix(mix(vec3(0.95, 0.99, 1.06), vec3(0.9, 0.97, 1.12), uNight), vec3(1.0), smoothstep(0.0, 0.45, l));
        col *= mix(vec3(1.0), vec3(1.04, 1.0, 0.95), smoothstep(0.5, 1.0, l) * (1.0 - uNight));
        col *= 1.0 - dot(dir, dir) * uVignette;
        col = mix(col, vec3(1.0), uFlash);
        col = mix(col, vec3(0.6, 0.05, 0.02), uDamage * smoothstep(0.25, 0.75, r));
        col += (h(uv * uRes + fract(uTime) * 61.0) - 0.5) * 0.018;
        gl_FragColor = vec4(col, 1.0);
      }`, {
      tMain: { value: null }, tBloom: { value: null }, uBloom: { value: 0.75 }, uSpeed: { value: 0 }, uTime: { value: 0 },
      uExposure: { value: 0.92 }, uVignette: { value: 0.55 }, uNight: { value: 0 }, uFlash: { value: 0 }, uDamage: { value: 0 },
      uRes: { value: new THREE.Vector2(1, 1) },
    });
    this.width = 1;
    this.height = 1;
  }

  configure({ enabled, samples }) {
    this.enabled = enabled;
    if (samples !== this.samples) {
      this.samples = samples;
      this.dispose();
    }
  }

  dispose() {
    this.main?.dispose();
    for (const l of this.levels) { l.down.dispose(); l.up?.dispose(); }
    this.main = null;
    this.levels = [];
  }

  setSize(w, h) {
    w = Math.max(2, Math.floor(w));
    h = Math.max(2, Math.floor(h));
    if (w === this.width && h === this.height && this.main) return;
    this.width = w;
    this.height = h;
    this.dispose();
    const opts = { type: this.type, depthBuffer: true, stencilBuffer: false };
    this.main = new THREE.WebGLRenderTarget(w, h, { ...opts, samples: this.samples });
    const lo = { type: this.type, depthBuffer: false, stencilBuffer: false };
    let lw = w, lh = h;
    for (let i = 0; i < 5; i++) {
      lw = Math.max(2, Math.floor(lw / 2));
      lh = Math.max(2, Math.floor(lh / 2));
      this.levels.push({ w: lw, h: lh, down: new THREE.WebGLRenderTarget(lw, lh, lo), up: i < 4 ? new THREE.WebGLRenderTarget(lw, lh, lo) : null });
    }
    this.composite.uniforms.uRes.value.set(w, h);
  }

  blit(mat, target) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.qScene, this.qCam);
  }

  // Draws the world, then the viewmodel (arms) on top with a cleared depth buffer.
  drawScene(scene, camera, target) {
    const r = this.renderer;
    r.setRenderTarget(target);
    camera.layers.set(0);
    r.autoClear = true;
    r.render(scene, camera);
    camera.layers.set(VIEWMODEL_LAYER);
    r.autoClear = false;
    r.clearDepth();
    r.render(scene, camera);
    r.autoClear = true;
    camera.layers.set(0);
  }

  render(scene, camera, p) {
    const r = this.renderer;
    if (!this.enabled) {
      this.drawScene(scene, camera, null);
      return;
    }
    const size = r.getDrawingBufferSize(this._size || (this._size = new THREE.Vector2()));
    this.setSize(size.x, size.y);
    this.drawScene(scene, camera, this.main);
    // bloom chain
    const L = this.levels;
    this.bright.uniforms.tSrc.value = this.main.texture;
    this.bright.uniforms.uTexel.value.set(1 / this.width, 1 / this.height);
    this.bright.uniforms.uThreshold.value = this.hdr ? 0.92 : 0.8;
    this.blit(this.bright, L[0].down);
    for (let i = 1; i < L.length; i++) {
      this.down.uniforms.tSrc.value = L[i - 1].down.texture;
      this.down.uniforms.uTexel.value.set(1 / L[i - 1].w, 1 / L[i - 1].h);
      this.blit(this.down, L[i].down);
    }
    let src = L[L.length - 1].down;
    for (let i = L.length - 2; i >= 0; i--) {
      this.up.uniforms.tSrc.value = src.texture;
      this.up.uniforms.tAdd.value = L[i].down.texture;
      this.up.uniforms.uTexel.value.set(0.5 / L[i].w, 0.5 / L[i].h);
      this.blit(this.up, L[i].up);
      src = L[i].up;
    }
    const u = this.composite.uniforms;
    u.tMain.value = this.main.texture;
    u.tBloom.value = src.texture;
    u.uSpeed.value = p.speed;
    u.uTime.value = p.time;
    u.uNight.value = p.night;
    u.uBloom.value = 0.55 + p.night * 0.45;
    u.uExposure.value = 1.02 + p.night * 0.35;
    u.uFlash.value = p.flash || 0;
    u.uDamage.value = p.damage || 0;
    this.blit(this.composite, null);
  }
}
