// Realistic procedural hero: anatomically shaped limbs lofted from
// cross-sections, articulated hands, fabric suit textures, a glossy helmet
// with a reflective visor, gloves, pads, shoes and a courier bag.
// Used for the first-person arms/legs and the full body on the title screen.
// Model space: +Z = front, +X = the hero's LEFT, +Y = up.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ------------------------------------------------------------- geometry
// rings: [y, rx, rz, cx, cz]. angleOffset rotates where u=0 lands.
export function loft(rings, seg = 18, angleOffset = 0) {
  const n = rings.length;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i < n; i++) {
    const [y, rx, rz, cx = 0, cz = 0] = rings[i];
    for (let j = 0; j <= seg; j++) {
      const a = (j / seg) * Math.PI * 2 + angleOffset;
      pos.push(cx + Math.sin(a) * rx, y, cz + Math.cos(a) * rz);
      uv.push(j / seg, i / (n - 1));
    }
  }
  const down = rings[n - 1][0] < rings[0][0];
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * (seg + 1) + j, b = a + 1, c = a + seg + 1, d = c + 1;
      if (down) idx.push(a, c, b, b, c, d);
      else idx.push(a, b, c, b, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  // weld the seam normals so there is no visible crease
  const nm = g.attributes.normal;
  for (let i = 0; i < n; i++) {
    const a = i * (seg + 1), b = a + seg;
    const x = nm.getX(a) + nm.getX(b), y = nm.getY(a) + nm.getY(b), z = nm.getZ(a) + nm.getZ(b);
    const l = Math.hypot(x, y, z) || 1;
    nm.setXYZ(a, x / l, y / l, z / l);
    nm.setXYZ(b, x / l, y / l, z / l);
  }
  return g;
}

// Limb profiles (from the joint downward). Values in meters.
const PROFILES = {
  thigh: [[0.1, 0.002, 0.002], [0.085, 0.07, 0.07], [0.05, 0.094, 0.097], [0.0, 0.093, 0.096], [-0.06, 0.092, 0.096, 0, 0.008], [-0.13, 0.087, 0.09, 0, 0.012], [-0.21, 0.077, 0.08, 0, 0.01], [-0.29, 0.066, 0.068, 0, 0.006], [-0.36, 0.056, 0.058], [-0.42, 0.051, 0.054], [-0.45, 0.04, 0.042], [-0.465, 0.002, 0.002]],
  shin: [[0.025, 0.002, 0.002], [0.012, 0.042, 0.044], [-0.02, 0.052, 0.056, 0, 0.006], [-0.07, 0.054, 0.058, 0, -0.01], [-0.13, 0.056, 0.063, 0, -0.018], [-0.2, 0.049, 0.054, 0, -0.012], [-0.28, 0.04, 0.042, 0, -0.004], [-0.36, 0.032, 0.034], [-0.42, 0.033, 0.035], [-0.44, 0.024, 0.026], [-0.45, 0.002, 0.002]],
  upperArm: [[0.06, 0.002, 0.002], [0.045, 0.05, 0.05], [0.02, 0.068, 0.063], [-0.03, 0.069, 0.064, 0, 0.004], [-0.09, 0.061, 0.06, 0, 0.01], [-0.15, 0.056, 0.057, 0, 0.012], [-0.21, 0.05, 0.051, 0, 0.006], [-0.26, 0.045, 0.046], [-0.29, 0.04, 0.041], [-0.305, 0.002, 0.002]],
  foreArm: [[0.025, 0.002, 0.002], [0.012, 0.038, 0.04], [-0.02, 0.046, 0.046], [-0.06, 0.048, 0.044, 0, 0.004], [-0.11, 0.045, 0.039], [-0.17, 0.038, 0.032], [-0.22, 0.032, 0.026], [-0.26, 0.031, 0.024], [-0.275, 0.002, 0.002]],
  palm: [[0.008, 0.002, 0.002], [0.0, 0.028, 0.017], [-0.025, 0.038, 0.018, 0, -0.002], [-0.055, 0.043, 0.016, 0, -0.001], [-0.082, 0.044, 0.014], [-0.094, 0.036, 0.012], [-0.1, 0.002, 0.002]],
};

function limb(name, side = 1, seg = 18) {
  // right-side limbs start their u-coordinate on the other side so the
  // accent stripe always ends up on the outside of the limb
  return loft(PROFILES[name], seg, side > 0 ? 0 : Math.PI);
}

function shoeGeometry() {
  // lofted along +Y then rotated so it points forward (+Z); cz is -height
  const rings = [[-0.07, 0.002, 0.002, 0, -0.05], [-0.065, 0.034, 0.038, 0, -0.045], [-0.04, 0.045, 0.05, 0, -0.05], [0.0, 0.049, 0.05, 0, -0.045], [0.06, 0.052, 0.04, 0, -0.035], [0.12, 0.05, 0.03, 0, -0.028], [0.165, 0.042, 0.024, 0, -0.024], [0.19, 0.026, 0.018, 0, -0.02], [0.2, 0.002, 0.002, 0, -0.02]];
  const g = loft(rings, 16);
  g.rotateX(Math.PI / 2);
  return g;
}

function torsoGeometry(part) {
  // y from the waist joint up; depth (rz) with chest pushed forward
  const lower = [[-0.2, 0.002, 0.002], [-0.185, 0.1, 0.08], [-0.16, 0.135, 0.098, 0, -0.005], [-0.1, 0.162, 0.108, 0, -0.012], [-0.04, 0.158, 0.104, 0, -0.006], [0.02, 0.142, 0.094], [0.09, 0.136, 0.09, 0, 0.004], [0.16, 0.146, 0.096, 0, 0.006], [0.2, 0.15, 0.1, 0, 0.006], [0.205, 0.002, 0.002, 0, 0.006]];
  const upper = [[0.18, 0.002, 0.002, 0, 0.006], [0.185, 0.15, 0.1, 0, 0.006], [0.25, 0.168, 0.11, 0, 0.012], [0.32, 0.185, 0.12, 0, 0.02], [0.39, 0.196, 0.118, 0, 0.016], [0.45, 0.19, 0.104, 0, 0.004], [0.5, 0.16, 0.088], [0.535, 0.095, 0.072], [0.555, 0.062, 0.06], [0.6, 0.056, 0.056, 0, 0.008], [0.62, 0.002, 0.002, 0, 0.008]];
  return loft(part === 'lower' ? lower : upper, 22);
}

// ------------------------------------------------------------- textures
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  return t;
}
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
function shade(n, k) {
  const c = new THREE.Color(n);
  c.multiplyScalar(k);
  return '#' + c.getHexString();
}
function fabricNoise(g, w, h, a = 0.06) {
  const img = g.getImageData(0, 0, w, h);
  for (let i = 0; i < img.data.length; i += 4) {
    const n = (Math.random() - 0.5) * 255 * a;
    img.data[i] += n; img.data[i + 1] += n; img.data[i + 2] += n;
  }
  g.putImageData(img, 0, 0);
}

export function suitTextures(suit) {
  const limbTex = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = hex(suit.main);
    g.fillRect(0, 0, w, h);
    // darker side panels for shape definition
    g.fillStyle = shade(suit.main, 0.8);
    g.fillRect(w * 0.4, 0, w * 0.2, h);
    // seams
    g.fillStyle = shade(suit.main, 0.55);
    for (const u of [0.0, 0.4, 0.6, 0.995]) g.fillRect(u * w - 1, 0, 2, h);
    // accent stripe down the outside of each limb
    g.fillStyle = hex(suit.accent);
    g.fillRect(w * 0.215, 0, w * 0.07, h);
    g.fillStyle = shade(suit.accent, 0.6);
    g.fillRect(w * 0.212, 0, 2, h);
    g.fillRect(w * 0.285, 0, 2, h);
    fabricNoise(g, w, h);
  });
  const torsoTex = canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = hex(suit.main);
    g.fillRect(0, 0, w, h);
    g.fillStyle = shade(suit.main, 0.82);
    g.fillRect(w * 0.3, 0, w * 0.4, h); // back panel
    g.fillStyle = shade(suit.main, 0.55);
    for (const u of [0.3, 0.7]) g.fillRect(u * w - 1, 0, 2, h);
    // accent racing lines over the chest, and a waist band
    g.fillStyle = hex(suit.accent);
    for (const u of [0.1, 0.9]) {
      g.save();
      g.translate(u * w, 0);
      g.fillRect(-7, h * 0.15, 14, h * 0.85);
      g.restore();
    }
    g.fillRect(0, h * 0.0, w, h * 0.035);
    // chest emblem (wraps the u seam)
    const ey = h * 0.3;
    for (const cx of [0, w]) {
      g.beginPath();
      g.arc(cx, ey, 18, 0, Math.PI * 2);
      g.fillStyle = hex(suit.accent);
      g.fill();
      g.beginPath();
      g.moveTo(cx - 8, ey - 6); g.lineTo(cx + 9, ey); g.lineTo(cx - 8, ey + 6);
      g.fillStyle = hex(suit.main);
      g.fill();
    }
    fabricNoise(g, w, h);
  });
  limbTex.wrapS = torsoTex.wrapS = THREE.RepeatWrapping;
  return { limbTex, torsoTex };
}

let _fabricNormal = null;
export function fabricNormal() {
  if (_fabricNormal) return _fabricNormal;
  const S = 128;
  _fabricNormal = canvasTex(S, S, (g) => {
    const img = g.createImageData(S, S);
    const hgt = (x, y) => {
      const a = Math.sin(((x + y) / S) * Math.PI * 2 * 24), b = Math.sin(((x - y) / S) * Math.PI * 2 * 24);
      return Math.max(a, 0) * 0.5 + Math.max(b, 0) * 0.5;
    };
    for (let y = 0; y < S; y++) {
      for (let x = 0; x < S; x++) {
        const dx = hgt(x + 1, y) - hgt(x - 1, y), dy = hgt(x, y + 1) - hgt(x, y - 1);
        const l = Math.hypot(dx, dy, 1.6);
        const i = (y * S + x) * 4;
        img.data[i] = (-dx / l * 0.5 + 0.5) * 255;
        img.data[i + 1] = (-dy / l * 0.5 + 0.5) * 255;
        img.data[i + 2] = (1.6 / l * 0.5 + 0.5) * 255;
        img.data[i + 3] = 255;
      }
    }
    g.putImageData(img, 0, 0);
  });
  _fabricNormal.wrapS = _fabricNormal.wrapT = THREE.RepeatWrapping;
  _fabricNormal.repeat.set(3, 3);
  return _fabricNormal;
}

// Shared material set (re-tinted when the suit changes).
export function makeMaterials(suit) {
  const nm = fabricNormal();
  const { limbTex, torsoTex } = suitTextures(suit);
  const m = {
    limb: new THREE.MeshStandardMaterial({ map: limbTex, normalMap: nm, normalScale: new THREE.Vector2(0.55, 0.55), roughness: 0.82, metalness: 0.02 }),
    torso: new THREE.MeshStandardMaterial({ map: torsoTex, normalMap: nm, normalScale: new THREE.Vector2(0.55, 0.55), roughness: 0.82, metalness: 0.02 }),
    glove: new THREE.MeshStandardMaterial({ color: 0x24272d, roughness: 0.42, metalness: 0.05 }),
    accent: new THREE.MeshStandardMaterial({ color: suit.accent, roughness: 0.4, metalness: 0.1 }),
    pad: new THREE.MeshStandardMaterial({ color: 0x2e323a, roughness: 0.35, metalness: 0.25 }),
    helmet: new THREE.MeshStandardMaterial({ color: suit.main, roughness: 0.25, metalness: 0.25 }),
    visor: new THREE.MeshStandardMaterial({ color: 0x0b0d10, roughness: 0.04, metalness: 0.95 }),
    glow: new THREE.MeshBasicMaterial({ color: suit.visor }),
    metal: new THREE.MeshStandardMaterial({ color: 0x9aa1ab, roughness: 0.25, metalness: 0.85 }),
    sole: new THREE.MeshStandardMaterial({ color: 0xd9d6cf, roughness: 0.7 }),
    shoe: new THREE.MeshStandardMaterial({ color: 0x1f2227, roughness: 0.55, normalMap: nm, normalScale: new THREE.Vector2(0.3, 0.3) }),
    bag: new THREE.MeshStandardMaterial({ color: 0x3b4150, roughness: 0.75, normalMap: nm, normalScale: new THREE.Vector2(0.8, 0.8) }),
    strap: new THREE.MeshStandardMaterial({ color: 0x1b1d22, roughness: 0.6 }),
  };
  m.setSuit = (s) => {
    const t = suitTextures(s);
    m.limb.map.dispose(); m.torso.map.dispose();
    m.limb.map = t.limbTex; m.torso.map = t.torsoTex;
    m.limb.needsUpdate = m.torso.needsUpdate = true;
    m.accent.color.setHex(s.accent);
    m.helmet.color.setHex(s.main).multiplyScalar(1.15);
    m.glow.color.setHex(s.visor);
  };
  m.setSuit(suit);
  return m;
}

// ------------------------------------------------------------- hands
// Canonical hand: fingers along -Y, back of the hand +Z, palm -Z.
// side +1 = left hand (thumb toward -X), -1 = right hand.
export function buildHand(side, M) {
  const hand = new THREE.Group();
  const palm = new THREE.Mesh(loft(PROFILES.palm, 14), M.glove);
  hand.add(palm);
  const guard = new THREE.Mesh(new RoundedBoxGeometry(0.082, 0.022, 0.014, 2, 0.006), M.accent);
  guard.position.set(0, -0.075, 0.016);
  hand.add(guard);
  const fingers = [];
  const specs = [[0.028, 0.046, 0.03, 0.0085], [0.009, 0.05, 0.033, 0.0088], [-0.01, 0.047, 0.031, 0.0084], [-0.028, 0.037, 0.025, 0.0075]];
  for (const [x, l1, l2, r] of specs) {
    const base = new THREE.Group();
    base.position.set(-x * side, -0.094, 0); // index finger next to the thumb
    hand.add(base);
    const s1 = new THREE.Mesh(new THREE.CapsuleGeometry(r, l1 - r * 2, 3, 8), M.glove);
    s1.position.y = -l1 / 2;
    base.add(s1);
    const tip = new THREE.Group();
    tip.position.y = -l1 + r * 0.5;
    base.add(tip);
    const s2 = new THREE.Mesh(new THREE.CapsuleGeometry(r * 0.92, l2 - r * 2, 3, 8), M.glove);
    s2.position.y = -l2 / 2;
    tip.add(s2);
    fingers.push({ base, tip });
  }
  const thumb = new THREE.Group();
  thumb.position.set(-0.036 * side, -0.022, -0.008);
  thumb.rotation.set(0.5, 0, 0.55 * side);
  hand.add(thumb);
  const t1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.011, 0.026, 3, 8), M.glove);
  t1.position.y = -0.02;
  thumb.add(t1);
  const ttip = new THREE.Group();
  ttip.position.y = -0.04;
  thumb.add(ttip);
  const t2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.0095, 0.02, 3, 8), M.glove);
  t2.position.y = -0.016;
  ttip.add(t2);
  return { hand, fingers, thumb, ttip, palm, side };
}

export function curlHand(h, c, spread = 0) {
  for (let k = 0; k < 4; k++) {
    const f = h.fingers[k];
    f.base.rotation.x = c * (1.35 + k * 0.06);
    f.base.rotation.z = (k - 1.5) * spread * 0.12 * h.side;
    f.tip.rotation.x = c * 1.55;
  }
  h.thumb.rotation.x = 0.5 + c * 0.6;
  h.ttip.rotation.x = c * 0.7;
}

// Arm pieces (upper arm, forearm with glove cuff + gadget, hand)
export function buildArm(side, M, { gadget = true } = {}) {
  const upper = new THREE.Group(), fore = new THREE.Group();
  upper.add(new THREE.Mesh(limb('upperArm', side), M.limb));
  const elbowPad = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.pad);
  elbowPad.rotation.x = Math.PI / 2;
  elbowPad.position.set(0, -0.28, -0.03);
  elbowPad.scale.set(1, 1, 0.5);
  upper.add(elbowPad);
  fore.add(new THREE.Mesh(limb('foreArm', side), M.limb));
  const cuff = new THREE.Mesh(loft([[-0.2, 0.036, 0.031], [-0.215, 0.038, 0.033], [-0.27, 0.035, 0.029], [-0.278, 0.03, 0.025]], 16), M.glove);
  fore.add(cuff);
  const band = new THREE.Mesh(loft([[-0.198, 0.0365, 0.0315], [-0.208, 0.0375, 0.0325]], 16), M.accent);
  fore.add(band);
  if (gadget) {
    const g = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.075, 0.024, 2, 0.006), M.metal);
    g.position.set(0, -0.215, 0.034);
    fore.add(g);
    const led = new THREE.Mesh(new THREE.BoxGeometry(0.016, 0.05, 0.004), M.glow);
    led.position.set(0, -0.215, 0.047);
    fore.add(led);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.009, 0.02, 8), M.pad);
    nozzle.position.set(0, -0.262, 0.036);
    fore.add(nozzle);
  }
  const h = buildHand(side, M);
  return { upper, fore, ...h };
}

// ------------------------------------------------------------- full body
export class HeroBody {
  constructor(M) {
    this.M = M;
    this.root = new THREE.Group();
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.body.position.y = 0.14;
    const j = (parent, x, y, z) => {
      const g = new THREE.Group();
      g.position.set(x, y, z);
      parent.add(g);
      return g;
    };
    const add = (parent, geo, mat, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      parent.add(m);
      return m;
    };
    this.hips = j(this.body, 0, 0, 0);
    const lowerGeo = torsoGeometry('lower');
    const uvs = lowerGeo.attributes.uv;
    for (let i = 0; i < uvs.count; i++) uvs.setY(i, 0.05 + uvs.getY(i) * 0.25); // only the racing lines on the hips
    this.lowerTorso = add(this.hips, lowerGeo, M.torso);
    // belt + buckle
    add(this.hips, loft([[0.015, 0.146, 0.098, 0, 0.002], [0.05, 0.142, 0.096, 0, 0.003]], 22), M.strap);
    add(this.hips, new RoundedBoxGeometry(0.05, 0.034, 0.012, 2, 0.004), M.metal, 0, 0.032, 0.1);
    this.spine = j(this.hips, 0, 0.0, 0);
    this.upperTorso = add(this.spine, torsoGeometry('upper'), M.torso);
    // courier bag + straps
    const bag = add(this.spine, new RoundedBoxGeometry(0.3, 0.34, 0.13, 3, 0.035), M.bag, 0, 0.33, -0.17);
    add(bag, new RoundedBoxGeometry(0.31, 0.09, 0.14, 2, 0.02), M.accent, 0, 0.13, 0.005);
    for (const s of [-1, 1]) {
      const st = add(this.spine, new RoundedBoxGeometry(0.035, 0.36, 0.012, 1, 0.004), M.strap, 0.09 * s, 0.38, 0.115);
      st.rotation.x = -0.12;
      const top = add(this.spine, new RoundedBoxGeometry(0.035, 0.012, 0.22, 1, 0.004), M.strap, 0.09 * s, 0.53, -0.02);
      top.rotation.x = 0.1;
    }
    this.cargo = j(bag, 0, 0.0, -0.08);
    this.neck = j(this.spine, 0, 0.565, 0.01);
    this.head = j(this.neck, 0, 0.035, 0);
    // full-face courier helmet: glossy shell, wrap-around mirrored visor, chin guard
    const skull = add(this.head, new THREE.SphereGeometry(0.128, 30, 22), M.helmet, 0, 0.12, 0.004);
    skull.scale.set(0.93, 1.06, 1.06);
    const visor = add(this.head, new THREE.SphereGeometry(0.131, 30, 12, Math.PI / 2 - 1.0, 2.0, 1.1, 0.5), M.visor, 0, 0.12, 0.004);
    visor.scale.set(0.94, 1.07, 1.08);
    const chin = add(this.head, new THREE.SphereGeometry(0.1, 20, 10, Math.PI / 2 - 0.9, 1.8, 1.75, 0.75), M.pad, 0, 0.1, 0.03);
    chin.scale.set(0.95, 1.0, 1.1);
    const glowLine = add(this.head, new THREE.TorusGeometry(0.129, 0.003, 6, 32, 2.0), M.glow, 0, 0.065, 0.004);
    glowLine.rotation.set(Math.PI / 2, 0, Math.PI / 2 - 1.0);
    glowLine.scale.set(0.95, 1.1, 1);
    const crest = add(this.head, new RoundedBoxGeometry(0.03, 0.026, 0.22, 2, 0.01), M.accent, 0, 0.255, -0.01);
    crest.rotation.x = 0.12;
    const seal = add(this.head, loft([[-0.01, 0.07, 0.07], [0.03, 0.078, 0.078]], 18), M.pad);
    this.headMeshes = [skull, visor, chin, glowLine, crest, seal];

    const arm = (side) => {
      const sh = j(this.spine, 0.212 * side, 0.465, -0.005);
      add(sh, new THREE.SphereGeometry(0.074, 18, 12), M.limb, 0, 0.005, 0).scale.set(1.0, 0.85, 1.0); // deltoid
      const a = buildArm(side, M, { gadget: true });
      sh.add(a.upper);
      const el = j(sh, 0, -0.29, 0);
      el.add(a.fore);
      const wr = j(el, 0, -0.27, 0);
      wr.add(a.hand);
      a.hand.rotation.y = (side * Math.PI) / 2; // palms face the thighs
      return { sh, el, wr, h: a };
    };
    this.armL = arm(1);
    this.armR = arm(-1);

    const leg = (side) => {
      const hp = j(this.hips, 0.095 * side, -0.075, 0);
      add(hp, limb('thigh', side), M.limb);
      const kn = j(hp, 0, -0.44, 0);
      add(kn, limb('shin', side), M.limb);
      const pad = add(kn, new THREE.SphereGeometry(0.046, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.pad, 0, -0.025, 0.045);
      pad.rotation.x = Math.PI / 2;
      pad.scale.set(1, 1.2, 0.36);
      const an = j(kn, 0, -0.43, 0);
      add(an, shoeGeometry(), M.shoe, 0, 0, 0.03);
      const sole = add(an, new RoundedBoxGeometry(0.1, 0.022, 0.27, 2, 0.008), M.sole, 0, -0.085, 0.048);
      sole.scale.set(1, 1, 1);
      add(an, new RoundedBoxGeometry(0.03, 0.05, 0.02, 1, 0.006), M.accent, 0, -0.04, -0.035);
      return { hp, kn, an };
    };
    this.legL = leg(1);
    this.legR = leg(-1);

    this.joints = {
      spine: this.spine, neck: this.neck, head: this.head,
      shL: this.armL.sh, elL: this.armL.el, wrL: this.armL.wr,
      shR: this.armR.sh, elR: this.armR.el, wrR: this.armR.wr,
      hipL: this.legL.hp, knL: this.legL.kn, anL: this.legL.an,
      hipR: this.legR.hp, knR: this.legR.kn, anR: this.legR.an,
    };
    this.targets = {};
    for (const k in this.joints) this.targets[k] = new THREE.Quaternion();
    this.curl = 0.4;
    this._e = new THREE.Euler();
  }

  setLayer(layer) {
    this.root.traverse((o) => o.layers.set(layer));
  }

  // First person: hide what would sit inside/around the camera.
  firstPerson() {
    // a rounded pelvis stands in for the torso so looking down shows hips + legs
    this.lowerTorso.visible = false;
    const pelvis = new THREE.Mesh(loft([[-0.2, 0.002, 0.002], [-0.185, 0.1, 0.08], [-0.16, 0.135, 0.098, 0, -0.005], [-0.1, 0.16, 0.107, 0, -0.012], [-0.04, 0.155, 0.103, 0, -0.006], [0.01, 0.142, 0.094], [0.045, 0.118, 0.08], [0.07, 0.07, 0.05], [0.08, 0.002, 0.002]], 22), this.M.torso);
    this.hips.add(pelvis);
    this.upperTorso.visible = false;
    for (const m of this.headMeshes) m.visible = false;
    this.armL.sh.visible = false;
    this.armR.sh.visible = false;
    this.spine.children.forEach((c) => { if (c !== this.neck) c.visible = false; });
  }

  pose(p) {
    // p: { joint: [x, y, z] }
    for (const k in p) {
      const v = p[k];
      this._e.set(v[0], v[1] || 0, v[2] || 0, 'XYZ');
      this.targets[k].setFromEuler(this._e);
    }
  }

  apply(dt, rate = 14) {
    const k = 1 - Math.exp(-rate * dt);
    for (const n in this.joints) this.joints[n].quaternion.slerp(this.targets[n], k);
    curlHand(this.armL.h, this.curl);
    curlHand(this.armR.h, this.curl);
  }
}

// Standard poses ([x, y, z] euler per joint).
export const POSES = {
  stand: { spine: [0.02], neck: [0], head: [0], shL: [0.05, 0, 0.12], elL: [-0.18], wrL: [0], shR: [0.05, 0, -0.12], elR: [-0.18], wrR: [0], hipL: [0, 0, 0.05], knL: [0.05], anL: [-0.04], hipR: [0, 0, -0.05], knR: [0.05], anR: [-0.04] },
  perch: { spine: [0.55], neck: [-0.2], head: [-0.25], shL: [-0.6, 0, 0.3], elL: [-0.7], wrL: [0.2], shR: [-0.2, 0, -0.6], elR: [-0.5], wrR: [0], hipL: [-1.75, 0, 0.32], knL: [2.25], anL: [0.4], hipR: [-1.3, 0, -0.25], knR: [2.1], anR: [0.35] },
};
