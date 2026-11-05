// Third-person orbit camera with collision + first-person camera with
// viewmodel arms. Smoothly blends when switching modes.
import * as THREE from 'three';
import { clamp, damp, lerpAngle, angleDiff } from './util.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _hit = {};
const FWD = new THREE.Vector3(0, 0, -1);

export class CameraRig {
  constructor(scene) {
    this.camera = new THREE.PerspectiveCamera(70, 16 / 9, 0.08, 6000);
    this.camera.rotation.order = 'YXZ';
    scene.add(this.camera);
    this.position = this.camera.position;
    this.mode = 'third';
    this.yaw = 0;
    this.pitch = -0.12;
    this.dist = 6;
    this.target = new THREE.Vector3();
    this.lookIdle = 10;
    this.shakeAmt = 0;
    this.roll = 0;
    this.fov = 70;
    this.sens = 1;
    this.invertY = false;
    this.blend = 1;
    this.blendFrom = new THREE.Vector3();
    this.blendFromQ = new THREE.Quaternion();
    this.time = 0;
    this.buildViewmodel();
  }

  getForward(out) {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }

  setMode(mode) {
    if (mode === this.mode) return;
    this.blendFrom.copy(this.camera.position);
    this.blendFromQ.copy(this.camera.quaternion);
    this.blend = 0;
    this.mode = mode;
  }

  toggle() {
    this.setMode(this.mode === 'third' ? 'first' : 'third');
    return this.mode;
  }

  shake(a) {
    this.shakeAmt = Math.min(1.5, this.shakeAmt + a);
  }

  buildViewmodel() {
    const vm = new THREE.Group();
    this.camera.add(vm);
    this.vm = vm;
    this.vmMats = {
      main: new THREE.MeshLambertMaterial({ color: 0x23262e }),
      accent: new THREE.MeshLambertMaterial({ color: 0xff7a1a }),
      dark: new THREE.MeshLambertMaterial({ color: 0x15161a }),
    };
    const arm = (side) => {
      const pivot = new THREE.Group();
      pivot.position.set(0.28 * side, -0.34, -0.05);
      vm.add(pivot);
      const fore = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.5, 3, 8), this.vmMats.main);
      fore.rotation.x = Math.PI / 2;
      fore.position.z = -0.3;
      pivot.add(fore);
      const glove = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.06, 0.14, 8), this.vmMats.accent);
      glove.rotation.x = Math.PI / 2;
      glove.position.z = -0.52;
      pivot.add(glove);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.065, 10, 8), this.vmMats.dark);
      hand.position.z = -0.62;
      hand.scale.set(1, 0.8, 1.2);
      pivot.add(hand);
      return { pivot, hand, q: new THREE.Quaternion() };
    };
    this.armL = arm(-1);
    this.armR = arm(1);
    vm.visible = false;
    for (const m of vm.children) m.traverse((o) => { if (o.isMesh) { o.renderOrder = 10; o.material.depthTest = true; } });
  }

  setSuit(suit) {
    this.vmMats.main.color.setHex(suit.main);
    this.vmMats.accent.color.setHex(suit.accent);
  }

  handWorld(side, out) {
    return (side > 0 ? this.armR : this.armL).hand.getWorldPosition(out);
  }

  update(dt, player, input, world) {
    this.time += dt;
    const cam = this.camera;
    // ---- look input
    const k = 0.0042 * this.sens;
    if (input.look.dx || input.look.dy) {
      this.yaw -= input.look.dx * k;
      this.pitch -= input.look.dy * k * (this.invertY ? -1 : 1);
      this.lookIdle = 0;
    } else this.lookIdle += dt;
    this.pitch = clamp(this.pitch, -1.35, 1.2);

    const v = player.vel;
    const speed = v.length();
    const sh = Math.hypot(v.x, v.z);
    const st = player.state;
    // ---- auto-follow the direction of travel when the player is not looking around
    if (this.lookIdle > 1.1 && sh > 5 && st !== 'wall') {
      const targetYaw = Math.atan2(-v.x, -v.z);
      const rate = clamp(sh / 25, 0.2, 1) * (this.mode === 'first' ? 1.1 : 1.8);
      this.yaw = lerpAngle(this.yaw, targetYaw, damp(rate, dt));
      if (st === 'swing' || st === 'air') {
        const tp = this.mode === 'first' ? clamp(-v.y / 60, -0.3, 0.5) * -1 - 0.05 : -0.22 + clamp(v.y / 80, -0.25, 0.1);
        this.pitch += (tp - this.pitch) * damp(0.9, dt);
      }
    }
    // ---- wall-running: look up the wall
    if (st === 'wall' && this.lookIdle > 0.5 && this.mode === 'third') {
      const wy = Math.atan2(player.wall.nx, player.wall.nz);
      this.yaw = lerpAngle(this.yaw, wy, damp(2.5, dt));
      const tp = player.vel.y > 2 ? 0.55 : player.vel.y < -2 ? -0.5 : 0.15;
      this.pitch += (tp - this.pitch) * damp(2.5, dt);
    }
    // ---- shake
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.5);
    const sa = this.shakeAmt * this.shakeAmt * 0.25;
    const sx = (Math.random() - 0.5) * sa, sy = (Math.random() - 0.5) * sa;

    // ---- roll into swings
    let rollT = 0;
    if (st === 'swing') {
      const rx = Math.cos(this.yaw), rz = -Math.sin(this.yaw);
      rollT = clamp(-(v.x * rx + v.z * rz) / 45, -0.22, 0.22);
    }
    this.roll += (rollT - this.roll) * damp(3, dt);

    const fovBase = this.mode === 'first' ? 80 : 68;
    const fovT = fovBase + clamp((speed - 12) / 45, 0, 1) * 20 + (player.diving ? 6 : 0);
    this.fov += (fovT - this.fov) * damp(3, dt);
    if (Math.abs(cam.fov - this.fov) > 0.05) {
      cam.fov = this.fov;
      cam.updateProjectionMatrix();
    }

    if (this.mode === 'third') {
      const want = 5.2 + clamp((speed - 10) / 40, 0, 1) * 3.2 + (st === 'swing' ? 0.8 : 0);
      this.dist += (want - this.dist) * damp(2.5, dt);
      _v.set(player.pos.x, player.pos.y + 1.05, player.pos.z);
      if (this.target.distanceToSquared(_v) > 400) this.target.copy(_v);
      this.target.lerp(_v, damp(22, dt));
      const f = this.getForward(_v2);
      // collision: pull the camera in front of walls
      let d = this.dist;
      const hit = world.raycast(this.target.x, this.target.y, this.target.z, -f.x, -f.y, -f.z, d + 0.4, _hit);
      if (hit) d = Math.max(0.6, hit.t - 0.4);
      cam.position.copy(this.target).addScaledVector(f, -d);
      const g = world.groundAt(cam.position.x, cam.position.z);
      if (g !== null && cam.position.y < g + 0.35) cam.position.y = g + 0.35;
      cam.rotation.set(this.pitch, this.yaw, this.roll);
      cam.position.x += sx; cam.position.y += sy;
      this.vm.visible = false;
    } else {
      let bob = 0;
      if (st === 'ground' && sh > 1) bob = Math.sin(player.runPhase * 2) * 0.045 * clamp(sh / 10, 0, 1);
      cam.position.set(player.pos.x, player.pos.y + 0.62 + bob - (player.landT > 0 ? 0.25 : 0), player.pos.z);
      cam.rotation.set(this.pitch + sy * 0.05, this.yaw + sx * 0.05, this.roll * 1.4);
      this.vm.visible = true;
      this.updateViewmodel(dt, player);
    }

    // ---- blend between modes
    if (this.blend < 1) {
      this.blend = Math.min(1, this.blend + dt / 0.35);
      const t = this.blend * this.blend * (3 - 2 * this.blend);
      cam.position.lerpVectors(this.blendFrom, cam.position, t);
      _q.copy(cam.quaternion);
      cam.quaternion.copy(this.blendFromQ).slerp(_q, t);
    }
    cam.updateMatrixWorld();
  }

  updateViewmodel(dt, p) {
    const cam = this.camera;
    const inv = _q.copy(cam.quaternion).invert();
    const st = p.state;
    const aimAt = (arm, world, rate) => {
      _v.copy(world).sub(cam.position).applyQuaternion(inv).normalize();
      // keep the arm inside a forward cone so it stays on screen
      _v.y = Math.min(_v.y, 0.55);
      _v.x = Math.max(-0.7, Math.min(0.7, _v.x));
      if (_v.z > -0.75) _v.z = -0.75;
      _v.normalize();
      arm.q.setFromUnitVectors(FWD, _v);
      arm.pivot.quaternion.slerp(arm.q, damp(rate, dt));
    };
    const rest = (arm, side, x, y) => {
      _v.set(x * side, y, -1).normalize();
      arm.q.setFromUnitVectors(FWD, _v);
      arm.pivot.quaternion.slerp(arm.q, damp(10, dt));
    };
    const bob = Math.sin(p.runPhase) * 0.12;
    if (st === 'swing') {
      const a = p.rope.side > 0 ? this.armR : this.armL;
      const o = p.rope.side > 0 ? this.armL : this.armR;
      aimAt(a, p.rope.visual, 25);
      rest(o, p.rope.side > 0 ? -1 : 1, 0.5, -0.6);
      a.pivot.position.y = -0.3;
    } else if (st === 'zip') {
      aimAt(this.armL, p.zip.target, 25);
      aimAt(this.armR, p.zip.target, 25);
    } else if (st === 'wall') {
      rest(this.armL, -1, 0.35, 0.5 + bob);
      rest(this.armR, 1, 0.35, 0.5 - bob);
    } else if (p.throwT > 0) {
      rest(this.armR, 1, 0.1, 0.4);
      rest(this.armL, -1, 0.3, -0.5);
    } else if (st === 'ground') {
      rest(this.armL, -1, 0.15, -0.75 + bob * 0.3);
      rest(this.armR, 1, 0.15, -0.75 - bob * 0.3);
    } else {
      rest(this.armL, -1, 0.6, -0.2);
      rest(this.armR, 1, 0.6, -0.2);
    }
    this.armL.pivot.position.y += (-0.36 - this.armL.pivot.position.y) * damp(8, dt);
    this.armR.pivot.position.y += (-0.36 - this.armR.pivot.position.y) * damp(8, dt);
  }
}
