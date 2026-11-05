// Static sun shadow map. The city doesn't move, so the depth map is only
// re-rendered when the hero travels far or the sun has moved noticeably.
// This gives real building shadows on phones for almost no per-frame cost.
import * as THREE from 'three';
import { env } from './shaders.js';

export const SHADOW_LAYER = 1;

export class Shadows {
  constructor(renderer, size = 1536, radius = 210) {
    this.renderer = renderer;
    this.radius = radius;
    this.size = size;
    this.rt = new THREE.WebGLRenderTarget(size, size, { depthBuffer: true, stencilBuffer: false });
    this.rt.depthTexture = new THREE.DepthTexture(size, size);
    this.rt.depthTexture.type = THREE.UnsignedIntType;
    this.rt.depthTexture.minFilter = THREE.NearestFilter;
    this.rt.depthTexture.magFilter = THREE.NearestFilter;
    this.cam = new THREE.OrthographicCamera(-radius, radius, radius, -radius, 1, 2600);
    this.cam.layers.set(SHADOW_LAYER);
    // back faces only: the classic cure for shadow acne on closed meshes
    this.mat = new THREE.MeshBasicMaterial({ colorWrite: false, side: THREE.BackSide });
    this.center = new THREE.Vector3(1e9, 0, 0);
    this.sun = new THREE.Vector3();
    this.bias = new THREE.Matrix4().set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
    this.enabled = true;
    env.uShadowMap.value = this.rt.depthTexture;
    env.uShadowTexel.value.set(1 / size, 1 / size);
    env.uShadowRadius.value = radius;
  }

  setEnabled(on) {
    this.enabled = on;
    env.uShadowOn.value = on ? 1 : 0;
    if (on) this.center.set(1e9, 0, 0); // force refresh
  }

  update(scene, focus, sunDir, night) {
    if (!this.enabled) return;
    const moved = Math.hypot(focus.x - this.center.x, focus.z - this.center.z) > 45;
    const turned = this.sun.angleTo(sunDir) > 0.0035;
    if (!moved && !turned) return;
    const snap = 8;
    this.center.set(Math.round(focus.x / snap) * snap, 0, Math.round(focus.z / snap) * snap);
    this.sun.copy(sunDir);
    const c = this.cam;
    c.position.copy(this.center).addScaledVector(sunDir, 1300);
    c.up.set(0, 1, 0);
    if (Math.abs(sunDir.y) > 0.99) c.up.set(0, 0, 1);
    c.lookAt(this.center);
    c.updateMatrixWorld();
    c.updateProjectionMatrix();
    const r = this.renderer;
    const prevRT = r.getRenderTarget();
    const prevOverride = scene.overrideMaterial;
    const prevAuto = r.autoClear;
    scene.overrideMaterial = this.mat;
    r.autoClear = true;
    r.setRenderTarget(this.rt);
    r.render(scene, c);
    r.setRenderTarget(prevRT);
    scene.overrideMaterial = prevOverride;
    r.autoClear = prevAuto;
    env.uShadowMatrix.value.copy(this.bias).multiply(c.projectionMatrix).multiply(c.matrixWorldInverse);
    env.uShadowCenter.value.copy(this.center);
    env.uShadowOn.value = 1;
  }
}

// Mark an object (and children) as a shadow caster.
export function castShadow(obj) {
  obj.traverse((o) => o.layers.enable(SHADOW_LAYER));
  return obj;
}
