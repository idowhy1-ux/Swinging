// Procedural city: block layout, buildings, roads, parks, waterfront, props.
import * as THREE from 'three';
import { CITY } from './config.js';
import { Rng, vnoise, clamp } from './util.js';
import { env, LIGHT_CHUNK, makeLitMaterial } from './shaders.js';
import { GeoBuilder, xform, makeInstanced } from './geo.js';

export const roadC = (k) => -CITY.HALF + k * CITY.PITCH;
export const blockC = (i) => roadC(i) + CITY.PITCH / 2;
export const blockIndex = (x) => Math.floor((x + CITY.HALF) / CITY.PITCH);

const STYLE = { GLASS: 0, OFFICE: 1, BRICK: 2, DECO: 3 };
const PALETTE = {
  [STYLE.GLASS]: [[0.33, 0.45, 0.56], [0.28, 0.48, 0.5], [0.42, 0.44, 0.5], [0.24, 0.33, 0.48], [0.5, 0.55, 0.58]],
  [STYLE.OFFICE]: [[0.64, 0.63, 0.6], [0.72, 0.69, 0.63], [0.52, 0.54, 0.57], [0.6, 0.58, 0.55]],
  [STYLE.BRICK]: [[0.56, 0.29, 0.21], [0.63, 0.37, 0.26], [0.47, 0.27, 0.22], [0.7, 0.52, 0.37], [0.5, 0.4, 0.34]],
  [STYLE.DECO]: [[0.83, 0.75, 0.6], [0.76, 0.7, 0.62], [0.69, 0.61, 0.5], [0.8, 0.66, 0.55]],
};

const BLOCK_BUILT = 0, BLOCK_PARK = 1, BLOCK_PLAZA = 2;

export class City {
  constructor(scene, world) {
    this.scene = scene;
    this.world = world;
    this.rng = new Rng(CITY.SEED);
    this.blocks = [];
    this.tiers = []; // every building box (rendered + collided)
    this.buildings = []; // logical buildings
    this.doors = []; // street-facing door spots {x,z,nx,nz,building}
    this.lamps = [];
    this.trees = [];
    this.roofProps = { boxes: [], towers: [], antennas: [], billboards: [] };
    this.landmarks = {};
    this.layoutBlocks();
    this.generateBuildings();
    this.addLandmarks();
    this.buildBuildingMesh();
    this.buildGround();
    this.buildWater();
    this.buildStreetProps();
    this.buildRoofProps();
    this.buildBridge();
  }

  // ---------------------------------------------------------------- layout
  heightAt(x, z) {
    const d1 = Math.hypot(x + 55, z + 55);
    const d2 = Math.hypot(x - 340, z - 290);
    const d3 = Math.hypot(x + 380, z - 380);
    const h1 = 210 * Math.exp(-(d1 * d1) / (2 * 210 * 210));
    const h2 = 120 * Math.exp(-(d2 * d2) / (2 * 140 * 140));
    const h3 = 70 * Math.exp(-(d3 * d3) / (2 * 120 * 120));
    const base = 12 + vnoise(x * 0.012 + 3.1, z * 0.012 - 1.7) * 18;
    return Math.max(h1, h2, h3) + base;
  }

  layoutBlocks() {
    const N = CITY.N, rng = this.rng;
    for (let i = 0; i < N; i++) {
      this.blocks[i] = [];
      for (let j = 0; j < N; j++) {
        const cx = blockC(i), cz = blockC(j);
        let type = BLOCK_BUILT;
        // Big park (2x2) in the north-east quadrant, a few small ones elsewhere.
        if ((i === 8 || i === 9) && (j === 2 || j === 3)) type = BLOCK_PARK;
        else if (Math.hypot(cx, cz) > 260 && rng.chance(0.07)) type = BLOCK_PARK;
        else if (Math.hypot(cx + 55, cz + 55) < 260 && rng.chance(0.06)) type = BLOCK_PLAZA;
        this.blocks[i][j] = { i, j, cx, cz, type, height: this.heightAt(cx, cz), buildings: [] };
      }
    }
    // Plaza in front of the landmark tower.
    this.blocks[4][5].type = BLOCK_PLAZA;
    this.blocks[5][5].type = BLOCK_BUILT;
  }

  splitLots(r, minSize, rng, out, depth = 0) {
    const w = r.x1 - r.x0, d = r.z1 - r.z0;
    if ((w <= minSize * 1.5 && d <= minSize * 1.5) || depth > 6) {
      out.push(r);
      return;
    }
    const alongX = w > d * 1.15 ? true : d > w * 1.15 ? false : rng.chance(0.5);
    const gap = rng.chance(0.45) ? rng.float(2.5, 6) : 0;
    const t = rng.float(0.36, 0.64);
    if (alongX) {
      const cut = r.x0 + w * t;
      this.splitLots({ x0: r.x0, x1: cut - gap / 2, z0: r.z0, z1: r.z1 }, minSize, rng, out, depth + 1);
      this.splitLots({ x0: cut + gap / 2, x1: r.x1, z0: r.z0, z1: r.z1 }, minSize, rng, out, depth + 1);
    } else {
      const cut = r.z0 + d * t;
      this.splitLots({ x0: r.x0, x1: r.x1, z0: r.z0, z1: cut - gap / 2 }, minSize, rng, out, depth + 1);
      this.splitLots({ x0: r.x0, x1: r.x1, z0: cut + gap / 2, z1: r.z1 }, minSize, rng, out, depth + 1);
    }
  }

  generateBuildings() {
    const rng = this.rng;
    const inner = CITY.BLOCK / 2 - CITY.SIDEWALK;
    for (let i = 0; i < CITY.N; i++) {
      for (let j = 0; j < CITY.N; j++) {
        const blk = this.blocks[i][j];
        if (blk.type !== BLOCK_BUILT) continue;
        if (i === 5 && j === 5) continue; // landmark tower block
        const rect = { x0: blk.cx - inner, x1: blk.cx + inner, z0: blk.cz - inner, z1: blk.cz + inner };
        const h = blk.height;
        const minSize = h > 130 ? 44 : h > 60 ? 30 : 21;
        const lots = [];
        this.splitLots(rect, minSize, rng, lots);
        for (const lot of lots) this.makeBuilding(blk, lot, rect);
      }
    }
  }

  makeBuilding(blk, lot, blockRect) {
    const rng = this.rng;
    const edge = 0.6;
    const onEdge = {
      x0: Math.abs(lot.x0 - blockRect.x0) < edge,
      x1: Math.abs(lot.x1 - blockRect.x1) < edge,
      z0: Math.abs(lot.z0 - blockRect.z0) < edge,
      z1: Math.abs(lot.z1 - blockRect.z1) < edge,
    };
    const shrink = (flag) => (flag ? (rng.chance(0.25) ? rng.float(0.5, 2) : 0) : rng.float(0.5, 2.5));
    const fp = {
      x0: lot.x0 + shrink(onEdge.x0),
      x1: lot.x1 - shrink(onEdge.x1),
      z0: lot.z0 + shrink(onEdge.z0),
      z1: lot.z1 - shrink(onEdge.z1),
    };
    const w = fp.x1 - fp.x0, d = fp.z1 - fp.z0;
    if (w < 7 || d < 7) return;
    const cx = (fp.x0 + fp.x1) / 2, cz = (fp.z0 + fp.z1) / 2;
    let h = this.heightAt(cx, cz) * rng.float(0.55, 1.25);
    h = Math.max(9, Math.round(h / 3.5) * 3.5);
    const footprintCap = Math.min(w, d) * 7; // avoid silly needle towers
    h = Math.min(h, footprintCap);

    let style;
    if (h > 110) style = rng.chance(0.6) ? STYLE.GLASS : rng.chance(0.5) ? STYLE.DECO : STYLE.OFFICE;
    else if (h > 45) style = rng.pick([STYLE.GLASS, STYLE.OFFICE, STYLE.OFFICE, STYLE.DECO, STYLE.BRICK]);
    else style = rng.pick([STYLE.BRICK, STYLE.BRICK, STYLE.OFFICE, STYLE.DECO]);
    const base = rng.pick(PALETTE[style]);
    const v = rng.float(0.9, 1.1);
    const color = [base[0] * v, base[1] * v, base[2] * v];
    const floorH = style === STYLE.GLASS ? rng.float(3.4, 4.0) : rng.float(3.2, 3.8);
    const winW = style === STYLE.BRICK ? rng.float(2.6, 3.4) : style === STYLE.GLASS ? rng.float(1.6, 2.4) : rng.float(2.2, 3.0);
    const seed = rng.float(0, 100);
    const lit = rng.float(0.25, 0.65);

    const building = { tiers: [], fp, height: h, style, i: blk.i, j: blk.j, id: this.buildings.length };
    let tierRect = { ...fp };
    let y0 = 0;
    let nTiers = 1;
    if (h > 70) nTiers = rng.chance(0.75) ? (h > 150 && rng.chance(0.6) ? 3 : 2) : 1;
    else if (h > 35 && rng.chance(0.25)) nTiers = 2;
    const fracs = nTiers === 1 ? [1] : nTiers === 2 ? [rng.float(0.5, 0.75), 1] : [rng.float(0.4, 0.55), rng.float(0.7, 0.85), 1];
    for (let t = 0; t < nTiers; t++) {
      const y1 = t === nTiers - 1 ? h : Math.round((h * fracs[t]) / 3.5) * 3.5;
      if (y1 - y0 < 4) continue;
      const tier = {
        minX: tierRect.x0, maxX: tierRect.x1, minZ: tierRect.z0, maxZ: tierRect.z1,
        minY: y0, maxY: y1, color, style, floorH, winW, seed: seed + t * 7.1, lit,
        top: t === nTiers - 1, building,
      };
      this.tiers.push(tier);
      building.tiers.push(tier);
      tier.box = this.world.addBox(tier.minX, tier.minY, tier.minZ, tier.maxX, tier.maxY, tier.maxZ, tier);
      y0 = y1;
      // inset for next tier
      const tw = tierRect.x1 - tierRect.x0, td = tierRect.z1 - tierRect.z0;
      const ix = clamp(rng.float(2.5, tw * 0.18), 2, tw * 0.3);
      const iz = clamp(rng.float(2.5, td * 0.18), 2, td * 0.3);
      tierRect = { x0: tierRect.x0 + ix, x1: tierRect.x1 - ix, z0: tierRect.z0 + iz, z1: tierRect.z1 - iz };
      if (tierRect.x1 - tierRect.x0 < 8 || tierRect.z1 - tierRect.z0 < 8) break;
    }
    building.top = building.tiers[building.tiers.length - 1];
    building.height = building.top.maxY;
    this.buildings.push(building);
    blk.buildings.push(building);

    // Street facing doors (used by deliveries + newspaper route)
    const sides = [];
    if (onEdge.x0 && fp.x0 - blockRect.x0 < 2.5) sides.push({ x: fp.x0 - 2.2, z: cz, nx: -1, nz: 0 });
    if (onEdge.x1 && blockRect.x1 - fp.x1 < 2.5) sides.push({ x: fp.x1 + 2.2, z: cz, nx: 1, nz: 0 });
    if (onEdge.z0 && fp.z0 - blockRect.z0 < 2.5) sides.push({ x: cx, z: fp.z0 - 2.2, nx: 0, nz: -1 });
    if (onEdge.z1 && blockRect.z1 - fp.z1 < 2.5) sides.push({ x: cx, z: fp.z1 + 2.2, nx: 0, nz: 1 });
    building.doors = sides.map((s) => ({ ...s, building }));
    this.doors.push(...building.doors);

    // Rooftop clutter
    this.planRoof(building);
  }

  planRoof(b) {
    const rng = this.rng;
    const t = b.top;
    const w = t.maxX - t.minX, d = t.maxZ - t.minZ;
    const y = t.maxY;
    const P = this.roofProps;
    // Parapet ledge collider is implicit (roof edge). Stair bulkhead:
    if (w > 10 && d > 10 && rng.chance(0.7)) {
      const bw = rng.float(3, 5), bd = rng.float(3, 4.5), bh = 3;
      const x = rng.float(t.minX + bw / 2 + 2, t.maxX - bw / 2 - 2);
      const z = rng.float(t.minZ + bd / 2 + 2, t.maxZ - bd / 2 - 2);
      P.boxes.push({ x, y: y + bh / 2, z, w: bw, h: bh, d: bd, c: [0.55, 0.53, 0.5], collide: true });
    }
    const nAC = Math.floor(rng.float(0, Math.min(5, (w * d) / 150)));
    for (let k = 0; k < nAC; k++) {
      const s = rng.float(1.6, 3);
      const x = rng.float(t.minX + 2, t.maxX - 2), z = rng.float(t.minZ + 2, t.maxZ - 2);
      P.boxes.push({ x, y: y + 0.6, z, w: s, h: 1.2, d: s * rng.float(0.7, 1.3), c: [0.72, 0.73, 0.74], collide: true });
    }
    if (b.height < 75 && w > 9 && d > 9 && rng.chance(0.38)) {
      const x = rng.float(t.minX + 3.5, t.maxX - 3.5), z = rng.float(t.minZ + 3.5, t.maxZ - 3.5);
      P.towers.push({ x, y, z, s: rng.float(0.85, 1.2) });
    }
    if (b.height > 60 && rng.chance(0.35)) {
      const n = rng.int(1, 3);
      for (let k = 0; k < n; k++) {
        P.antennas.push({ x: rng.float(t.minX + 1, t.maxX - 1), y, z: rng.float(t.minZ + 1, t.maxZ - 1), h: rng.float(6, 16 + b.height * 0.06) });
      }
    }
    if (b.height > 25 && b.height < 110 && w > 14 && rng.chance(0.13)) {
      // billboard along the longer roof edge
      const alongX = w >= d;
      const len = Math.min(alongX ? w : d, 18) * 0.85;
      P.billboards.push({
        x: alongX ? (t.minX + t.maxX) / 2 : rng.chance(0.5) ? t.minX + 1.2 : t.maxX - 1.2,
        z: alongX ? (rng.chance(0.5) ? t.minZ + 1.2 : t.maxZ - 1.2) : (t.minZ + t.maxZ) / 2,
        y,
        len,
        rotY: alongX ? 0 : Math.PI / 2,
        ad: rng.int(0, 4),
      });
    }
  }

  addLandmarks() {
    // "Skyline Tower" - the tallest building in town, with an observation deck.
    const cx = blockC(5), cz = blockC(5);
    const building = { tiers: [], height: 0, style: STYLE.GLASS, i: 5, j: 5, id: this.buildings.length, landmark: true };
    const specs = [
      [34, 0, 70, [0.5, 0.52, 0.56]],
      [28, 70, 150, [0.36, 0.48, 0.6]],
      [22, 150, 235, [0.36, 0.48, 0.6]],
      [26, 235, 243, [0.85, 0.85, 0.82]], // observation deck ring
      [15, 243, 300, [0.36, 0.48, 0.6]],
    ];
    for (const [half, y0, y1, color] of specs) {
      const tier = {
        minX: cx - half, maxX: cx + half, minZ: cz - half, maxZ: cz + half, minY: y0, maxY: y1,
        color, style: y1 === 243 ? STYLE.OFFICE : STYLE.GLASS, floorH: 3.8, winW: 2, seed: y0 * 0.37, lit: 0.6,
        top: y1 === 300, building,
      };
      tier.box = this.world.addBox(tier.minX, tier.minY, tier.minZ, tier.maxX, tier.maxY, tier.maxZ, tier);
      this.tiers.push(tier);
      building.tiers.push(tier);
    }
    building.top = building.tiers[building.tiers.length - 1];
    building.height = 300;
    building.fp = { x0: cx - 34, x1: cx + 34, z0: cz - 34, z1: cz + 34 };
    building.doors = [{ x: cx - 34 - 2.2, z: cz, nx: -1, nz: 0, building }];
    this.doors.push(...building.doors);
    this.buildings.push(building);
    this.blocks[5][5].buildings.push(building);
    this.roofProps.antennas.push({ x: cx, y: 300, z: cz, h: 45, landmark: true });
    this.landmarks.tower = { x: cx, z: cz, top: 300, building };
  }

  // ------------------------------------------------------------- buildings
  buildBuildingMesh() {
    const n = this.tiers.length;
    const geo = new THREE.BoxGeometry(1, 1, 1);
    const color = new Float32Array(n * 3);
    const params = new Float32Array(n * 4);
    const extra = new Float32Array(n * 4);
    const mesh = new THREE.InstancedMesh(geo, this.makeBuildingMaterial(), n);
    const m = new THREE.Matrix4();
    for (let k = 0; k < n; k++) {
      const t = this.tiers[k];
      m.makeScale(t.maxX - t.minX, t.maxY - t.minY, t.maxZ - t.minZ);
      m.setPosition((t.minX + t.maxX) / 2, (t.minY + t.maxY) / 2, (t.minZ + t.maxZ) / 2);
      mesh.setMatrixAt(k, m);
      color.set(t.color, k * 3);
      params.set([t.style, t.seed, t.floorH, t.winW], k * 4);
      extra.set([t.lit, t.top ? 1 : 0, t.minY < 0.5 ? 1 : 0, 0], k * 4);
    }
    geo.setAttribute('aBColor', new THREE.InstancedBufferAttribute(color, 3));
    geo.setAttribute('aBParams', new THREE.InstancedBufferAttribute(params, 4));
    geo.setAttribute('aBExtra', new THREE.InstancedBufferAttribute(extra, 4));
    mesh.frustumCulled = false;
    this.scene.add(mesh);
    this.buildingMesh = mesh;
  }

  makeBuildingMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: { ...env },
      vertexShader: /* glsl */ `
        attribute vec3 aBColor;
        attribute vec4 aBParams;
        attribute vec4 aBExtra;
        varying vec3 vW;
        varying vec3 vN;
        varying vec3 vLocal;
        varying vec3 vSize;
        varying vec3 vCol;
        varying vec4 vP;
        varying vec4 vE;
        void main() {
          vec3 s = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          vN = normal;
          vLocal = position * s;
          vSize = s;
          vCol = aBColor;
          vP = aBParams;
          vE = aBExtra;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        ${LIGHT_CHUNK}
        varying vec3 vW;
        varying vec3 vN;
        varying vec3 vLocal;
        varying vec3 vSize;
        varying vec3 vCol;
        varying vec4 vP;
        varying vec4 vE;
        void main() {
          vec3 n = normalize(vN);
          vec3 base = vCol;
          vec3 col;
          vec3 emit = vec3(0.0);
          if (n.y > 0.5) {
            // Roof: tar/gravel with a lighter parapet rim.
            float g = hash12(floor(vW.xz * 1.5));
            vec2 e = vSize.xz * 0.5 - abs(vLocal.xz);
            float rim = 1.0 - step(0.7, min(e.x, e.y));
            col = mix(vec3(0.33, 0.33, 0.34) + g * 0.05, base * 1.05, rim);
            col = applyLight(col, n);
          } else if (n.y < -0.5) {
            col = applyLight(base * 0.4, n);
          } else {
            float style = vP.x;
            float floorH = vP.z;
            float winW = vP.w;
            bool xFace = abs(n.x) > 0.5;
            float h = xFace ? vLocal.z : vLocal.x;
            float width = xFace ? vSize.z : vSize.x;
            float yLocal = vLocal.y + vSize.y * 0.5;
            float cols = max(1.0, floor(width / winW));
            float spacing = width / cols;
            vec2 cell = vec2(floor((h + width * 0.5) / spacing), floor(yLocal / floorH));
            vec2 f = vec2(fract((h + width * 0.5) / spacing), fract(yLocal / floorH));
            vec4 wr; // window rect x0,x1,y0,y1
            if (style < 0.5) wr = vec4(0.05, 0.95, 0.1, 0.96);
            else if (style < 1.5) wr = vec4(0.14, 0.86, 0.28, 0.86);
            else if (style < 2.5) wr = vec4(0.26, 0.74, 0.25, 0.8);
            else wr = vec4(0.22, 0.78, 0.16, 0.9);
            float win = step(wr.x, f.x) * step(f.x, wr.y) * step(wr.z, f.y) * step(f.y, wr.w);
            float topGap = vSize.y - yLocal;
            float isGroundTier = vE.z;
            bool groundFloor = isGroundTier > 0.5 && yLocal < floorH * 1.2;
            if (topGap < 1.2) win = 0.0; // parapet band
            // corner pilasters for masonry buildings
            float edgeDist = width * 0.5 - abs(h);
            if (style > 0.5 && edgeDist < 0.6) win = 0.0;
            float rnd = hash12(cell + vP.y);
            vec3 wall = base * (0.92 + 0.08 * hash12(vec2(cell.y, vP.y)));
            if (style > 2.5 && fract((h + width * 0.5) / spacing) < 0.1) wall *= 1.12;
            if (topGap < 1.2) wall *= 1.12;
            vec3 V = normalize(vW - cameraPosition);
            float fres = pow(1.0 - abs(dot(V, n)), 2.0);
            vec3 sky = mix(uFogColor, uSkyAmb * 1.4, 0.4);
            vec3 glassBase = style < 0.5 ? base * 0.55 : vec3(0.12, 0.15, 0.2);
            vec3 glass = mix(glassBase, sky, 0.25 + 0.55 * fres);
            glass *= 0.85 + 0.3 * rnd * (1.0 - uNight);
            if (groundFloor) {
              // storefront: big windows, lit signage at night
              float sf = step(0.06, f.x) * step(f.x, 0.94) * step(0.06, yLocal / floorH) * step(yLocal / floorH, 0.72);
              win = sf;
              glass = mix(vec3(0.1, 0.12, 0.14), sky, 0.3 * fres + 0.1);
              float hue = hash12(vec2(cell.x, vP.y * 3.1));
              vec3 shop = 0.5 + 0.5 * cos(6.2831 * (hue + vec3(0.0, 0.33, 0.67)));
              emit = win * mix(vec3(1.0, 0.85, 0.6), shop, 0.35) * (0.25 + 0.95 * uNight);
              if (yLocal / floorH > 0.78 && yLocal / floorH < 0.98) {
                wall = mix(wall, shop * 0.8, 0.85);
                emit += shop * 0.5 * uNight;
              }
            } else {
              float litW = step(1.0 - vE.x, rnd) * uNight;
              vec3 warm = mix(vec3(1.0, 0.78, 0.45), vec3(0.75, 0.85, 1.0), step(0.82, hash12(cell * 1.7 + vP.y)));
              emit = win * litW * warm * (0.7 + 0.5 * hash12(cell + 3.0));
            }
            vec3 albedo = mix(wall, glass, win);
            col = applyLight(albedo, n);
            // sun glint on glass
            vec3 R = reflect(V, n);
            float spec = pow(max(dot(R, uSunDir), 0.0), 40.0) * win * (1.0 - uNight);
            col += uSunColor * spec * 0.6;
            // ambient occlusion near the street
            col *= mix(0.55, 1.0, smoothstep(0.0, 14.0, vW.y));
            col += emit;
          }
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
  }

  // ---------------------------------------------------------------- ground
  buildGround() {
    const N = CITY.N;
    const data = new Uint8Array(N * N * 4);
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const k = (j * N + i) * 4;
        data[k] = this.blocks[i][j].type * 80;
        data[k + 3] = 255;
      }
    }
    const tex = new THREE.DataTexture(data, N, N, THREE.RGBAFormat);
    tex.magFilter = THREE.NearestFilter;
    tex.minFilter = THREE.NearestFilter;
    tex.needsUpdate = true;
    const size = CITY.SHORE * 2;
    const geo = new THREE.PlaneGeometry(size, size, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        ...env,
        uBlocks: { value: tex },
        uHalf: { value: CITY.HALF },
        uPitch: { value: CITY.PITCH },
        uRoad: { value: CITY.ROAD },
        uSide: { value: CITY.SIDEWALK },
        uN: { value: CITY.N },
        uEdge: { value: CITY.EDGE },
      },
      vertexShader: /* glsl */ `
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        ${LIGHT_CHUNK}
        uniform sampler2D uBlocks;
        uniform float uHalf, uPitch, uRoad, uSide, uN, uEdge;
        varying vec3 vW;
        float lampPool(float along, float perp) {
          float local = mod(along + uHalf, uPitch) - uPitch * 0.5;
          float lp = clamp(floor(local / 30.0 + 0.5) * 30.0, -30.0, 30.0);
          float da = local - lp;
          float dp = perp - (uRoad * 0.5 + 0.8);
          return exp(-(da * da + dp * dp) / 45.0);
        }
        void main() {
          vec2 p = vW.xz;
          vec3 col;
          float rough = vnoise2(p * 0.7) * 0.06 + vnoise2(p * 0.08) * 0.05;
          vec2 g = mod(p + uHalf, uPitch);       // position within road-to-road cell
          vec2 du = min(g, uPitch - g);            // distance to nearest road centreline
          vec2 sgn = sign(uPitch * 0.5 - g);       // +: just after a road line
          bool outside = abs(p.x) > uEdge || abs(p.y) > uEdge;
          bool roadX = du.x < uRoad * 0.5;         // road running along z
          bool roadZ = du.y < uRoad * 0.5;         // road running along x
          if (outside) {
            // waterfront promenade
            vec2 t = fract(p / 3.0);
            float seam = step(0.96, max(t.x, t.y));
            col = vec3(0.62, 0.6, 0.56) - seam * 0.08 + rough;
            float r = max(abs(p.x), abs(p.y)) - uEdge;
            if (r > 8.0 && r < 20.0) col = mix(col, vec3(0.33, 0.48, 0.24) + rough, 0.9);
          } else if (roadX || roadZ) {
            col = vec3(0.19, 0.195, 0.2) + rough;
            if (roadX && !roadZ) {
              float off = (g.x < uPitch * 0.5 ? g.x : g.x - uPitch);
              float a = abs(off);
              if (abs(a - 0.25) < 0.12) col = vec3(0.85, 0.7, 0.2);
              if (abs(a - uRoad * 0.25) < 0.1 && fract(p.y / 6.0) < 0.5) col = vec3(0.8);
              float dz = du.y - uRoad * 0.5;
              if (dz > 0.0 && dz < 3.5 && fract(p.x * 1.0) < 0.5 && a < uRoad * 0.5 - 0.5) col = vec3(0.82);
              if (dz > 3.8 && dz < 4.3 && a > 0.4) col = vec3(0.8);
            } else if (roadZ && !roadX) {
              float off = (g.y < uPitch * 0.5 ? g.y : g.y - uPitch);
              float a = abs(off);
              if (abs(a - 0.25) < 0.12) col = vec3(0.85, 0.7, 0.2);
              if (abs(a - uRoad * 0.25) < 0.1 && fract(p.x / 6.0) < 0.5) col = vec3(0.8);
              float dx = du.x - uRoad * 0.5;
              if (dx > 0.0 && dx < 3.5 && fract(p.y * 1.0) < 0.5 && a < uRoad * 0.5 - 0.5) col = vec3(0.82);
              if (dx > 3.8 && dx < 4.3 && a > 0.4) col = vec3(0.8);
            }
          } else if (du.x < uRoad * 0.5 + uSide || du.y < uRoad * 0.5 + uSide) {
            // sidewalk tiles + curb
            vec2 t = fract(p / 2.0);
            float seam = step(0.94, max(t.x, t.y));
            col = vec3(0.6, 0.59, 0.57) - seam * 0.07 + rough;
            float curb = min(du.x, du.y) - uRoad * 0.5;
            if (curb < 0.35) col = vec3(0.7, 0.7, 0.68);
          } else {
            vec2 bi = clamp(floor((p + uHalf) / uPitch), 0.0, uN - 1.0);
            float type = texture2D(uBlocks, (bi + 0.5) / uN).r * 255.0 / 80.0;
            if (type > 0.5 && type < 1.5) {
              // park: grass with paths
              col = vec3(0.3, 0.47, 0.22) + vnoise2(p * 0.3) * 0.08 + rough;
              vec2 c = g - uPitch * 0.5;
              float path = min(abs(c.x), abs(c.y));
              float ring = abs(length(c) - 26.0);
              if (path < 1.6 || ring < 1.4) col = vec3(0.68, 0.62, 0.5) + rough;
              if (length(c) < 9.0) col = mix(vec3(0.2, 0.42, 0.55), vec3(0.4, 0.6, 0.7), vnoise2(p * 0.5 + uTime * 0.3));
            } else if (type > 1.5) {
              vec2 t = fract(p / 4.0);
              float seam = step(0.95, max(t.x, t.y));
              col = vec3(0.72, 0.68, 0.62) - seam * 0.1 + rough;
              vec2 c = g - uPitch * 0.5;
              if (length(c) < 7.0) col = mix(vec3(0.25, 0.45, 0.6), vec3(0.5, 0.7, 0.8), vnoise2(p * 0.6 + uTime * 0.4));
            } else {
              col = vec3(0.42, 0.41, 0.4) + rough;
            }
          }
          col = applyLight(col, vec3(0.0, 1.0, 0.0));
          // street lamp pools at night
          float pool = 0.0;
          if (!outside) {
            pool = lampPool(p.y, du.x) + lampPool(p.x, du.y);
          }
          col += vec3(1.0, 0.75, 0.42) * pool * uNight * 0.55;
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(geo, mat);
    this.scene.add(mesh);
    this.groundMesh = mesh;

    // Sea wall around the island
    const wallMat = makeLitMaterial({ emitDay: 0, emitNight: 0 });
    const gb = new GeoBuilder();
    const s = CITY.SHORE, wy = CITY.WATER_Y;
    const wallH = -wy + 0.01 + 3;
    const box = new THREE.BoxGeometry(1, 1, 1);
    for (const [x, z, w, d] of [[0, s, 2 * s, 1.2], [0, -s, 2 * s, 1.2], [s, 0, 1.2, 2 * s], [-s, 0, 1.2, 2 * s]]) {
      gb.add(box, { color: 0x6f6a62, matrix: xform(x, wy - 3 + wallH / 2, z, 0, 0, 0, w + 1.2, wallH, d) });
      // railing
      gb.add(box, { color: 0x30343a, matrix: xform(x, 1.05, z, 0, 0, 0, w === 1.2 ? 0.12 : w, 0.08, d === 1.2 ? 0.12 : d) });
    }
    // railing posts
    const post = new THREE.BoxGeometry(0.1, 1.05, 0.1);
    for (let a = -s; a <= s; a += 4) {
      for (const [x, z] of [[a, s], [a, -s], [s, a], [-s, a]]) gb.add(post, { color: 0x30343a, matrix: xform(x, 0.52, z) });
    }
    const wall = new THREE.Mesh(gb.build(), wallMat);
    this.scene.add(wall);
  }

  buildWater() {
    const geo = new THREE.PlaneGeometry(9000, 9000, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.ShaderMaterial({
      uniforms: { ...env },
      vertexShader: /* glsl */ `
        varying vec3 vW;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vW = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        ${LIGHT_CHUNK}
        varying vec3 vW;
        void main() {
          vec2 p = vW.xz;
          float t = uTime;
          float w1 = vnoise2(p * 0.05 + vec2(t * 0.05, t * 0.03));
          float w2 = vnoise2(p * 0.21 - vec2(t * 0.11, -t * 0.07));
          vec3 n = normalize(vec3((w1 - 0.5) * 0.35 + (w2 - 0.5) * 0.25, 1.0, (w2 - 0.5) * 0.35 - (w1 - 0.5) * 0.2));
          vec3 V = normalize(vW - cameraPosition);
          float fres = 0.15 + 0.85 * pow(1.0 - max(dot(-V, n), 0.0), 4.0);
          vec3 deep = mix(vec3(0.05, 0.2, 0.27), vec3(0.02, 0.04, 0.08), uNight);
          vec3 col = mix(deep, uFogColor * 0.95, fres);
          vec3 R = reflect(V, n);
          float spec = pow(max(dot(R, uSunDir), 0.0), 120.0);
          col += uSunColor * spec * 1.2;
          // city light shimmer at night
          float city = smoothstep(2200.0, 600.0, length(p)) * uNight;
          col += vec3(1.0, 0.7, 0.4) * city * 0.25 * smoothstep(0.55, 0.9, w2);
          col = applyFog(col, vW);
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = CITY.WATER_Y;
    this.scene.add(mesh);
  }

  // ---------------------------------------------------------- street props
  buildStreetProps() {
    const rng = this.rng;
    const N = CITY.N;
    const off = CITY.BLOCK / 2 - 0.8;
    // Lamps: three per block side, matching the analytic light pools in the ground shader.
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const { cx, cz } = this.blocks[i][j];
        for (const a of [-30, 0, 30]) {
          this.lamps.push({ x: cx + a, z: cz - off, rot: 0 });
          this.lamps.push({ x: cx + a, z: cz + off, rot: Math.PI });
          this.lamps.push({ x: cx - off, z: cz + a, rot: -Math.PI / 2 });
          this.lamps.push({ x: cx + off, z: cz + a, rot: Math.PI / 2 });
        }
      }
    }
    const lampGB = new GeoBuilder();
    lampGB.add(new THREE.CylinderGeometry(0.09, 0.13, 7, 4), { color: 0x2c3036, matrix: xform(0, 3.5, 0) });
    lampGB.add(new THREE.BoxGeometry(0.1, 0.1, 1.6), { color: 0x2c3036, matrix: xform(0, 6.9, -0.75) });
    lampGB.add(new THREE.BoxGeometry(0.45, 0.16, 0.7), { color: 0xfff1c9, emit: 1, matrix: xform(0, 6.82, -1.45) });
    const lampMesh = makeInstanced(lampGB.build(), makeLitMaterial({ emitDay: 0.05, emitNight: 2.2 }), this.lamps.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const one = new THREE.Vector3(1, 1, 1);
    this.lamps.forEach((l, k) => {
      // arm points toward the road (local -z)
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), l.rot);
      m.compose(new THREE.Vector3(l.x, 0, l.z), q, one);
      lampMesh.setMatrixAt(k, m);
    });
    this.scene.add(lampMesh);

    // Trees: parks, sidewalks of low-rise blocks, promenade.
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const b = this.blocks[i][j];
        if (b.type === BLOCK_PARK) {
          const inner = CITY.BLOCK / 2 - CITY.SIDEWALK - 2;
          for (let k = 0; k < 34; k++) {
            const x = b.cx + rng.float(-inner, inner), z = b.cz + rng.float(-inner, inner);
            const lx = x - b.cx, lz = z - b.cz;
            if (Math.min(Math.abs(lx), Math.abs(lz)) < 3.5 || Math.abs(Math.hypot(lx, lz) - 26) < 3.5 || Math.hypot(lx, lz) < 11) continue;
            this.trees.push({ x, z, s: rng.float(0.8, 1.5) });
          }
        } else if (b.height < 60 || b.type === BLOCK_PLAZA) {
          const o = CITY.BLOCK / 2 - 2.2;
          for (const a of [-45, -15, 15, 45]) {
            if (Math.abs(a) > 44) continue;
            if (rng.chance(0.6)) this.trees.push({ x: b.cx + a, z: b.cz - o, s: rng.float(0.7, 1) });
            if (rng.chance(0.6)) this.trees.push({ x: b.cx + a, z: b.cz + o, s: rng.float(0.7, 1) });
            if (rng.chance(0.6)) this.trees.push({ x: b.cx - o, z: b.cz + a, s: rng.float(0.7, 1) });
            if (rng.chance(0.6)) this.trees.push({ x: b.cx + o, z: b.cz + a, s: rng.float(0.7, 1) });
          }
        }
      }
    }
    const promR = CITY.EDGE + 14;
    for (let a = -promR; a <= promR; a += 16) {
      for (const [x, z] of [[a, promR], [a, -promR], [promR, a], [-promR, a]]) this.trees.push({ x, z, s: rng.float(0.9, 1.3) });
    }
    const treeGB = new GeoBuilder();
    treeGB.add(new THREE.CylinderGeometry(0.18, 0.28, 3.2, 6), { color: 0x5a4030, matrix: xform(0, 1.6, 0) });
    treeGB.add(new THREE.IcosahedronGeometry(2.3, 0), { color: 0x3f7a34, matrix: xform(0, 4.6, 0, 0, 0, 0, 1, 1.15, 1) });
    treeGB.add(new THREE.IcosahedronGeometry(1.6, 0), { color: 0x4b8a3c, matrix: xform(0.5, 5.9, 0.3, 0.5, 0.3, 0) });
    const treeMesh = makeInstanced(treeGB.build(), makeLitMaterial({ emitDay: 0, emitNight: 0 }), this.trees.length, { colors: true });
    const col = new THREE.Color();
    this.trees.forEach((t, k) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rng.float(0, 6.28));
      m.compose(new THREE.Vector3(t.x, 0, t.z), q, new THREE.Vector3(t.s, t.s, t.s));
      treeMesh.setMatrixAt(k, m);
      col.setRGB(rng.float(0.8, 1.1), rng.float(0.85, 1.15), rng.float(0.7, 1.0));
      treeMesh.setColorAt(k, col);
    });
    this.scene.add(treeMesh);

    // Traffic light poles at every intersection corner (heads coloured by traffic.js)
    this.signals = [];
    const o2 = CITY.ROAD / 2 + 0.7;
    for (let a = 0; a <= N; a++) {
      for (let b = 0; b <= N; b++) {
        const x = roadC(a), z = roadC(b);
        // each pole controls traffic arriving along one axis
        this.signals.push({ x: x + o2, z: z + o2, axis: 1, rot: 0 });
        this.signals.push({ x: x - o2, z: z - o2, axis: 1, rot: Math.PI });
        this.signals.push({ x: x - o2, z: z + o2, axis: 0, rot: -Math.PI / 2 });
        this.signals.push({ x: x + o2, z: z - o2, axis: 0, rot: Math.PI / 2 });
      }
    }
  }

  buildRoofProps() {
    const P = this.roofProps;
    const mat = makeLitMaterial({ emitDay: 0.2, emitNight: 1.6 });
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const v = new THREE.Vector3();
    const s = new THREE.Vector3();
    const col = new THREE.Color();
    // Boxes (AC units, stair bulkheads)
    const boxGB = new GeoBuilder();
    boxGB.add(new THREE.BoxGeometry(1, 1, 1), { color: 0xffffff });
    const boxMesh = makeInstanced(boxGB.build(), mat, P.boxes.length, { colors: true });
    P.boxes.forEach((b, k) => {
      m.compose(v.set(b.x, b.y, b.z), q.identity(), s.set(b.w, b.h, b.d));
      boxMesh.setMatrixAt(k, m);
      boxMesh.setColorAt(k, col.setRGB(b.c[0], b.c[1], b.c[2]));
      if (b.collide) this.world.addBox(b.x - b.w / 2, b.y - b.h / 2, b.z - b.d / 2, b.x + b.w / 2, b.y + b.h / 2, b.z + b.d / 2, null);
    });
    this.scene.add(boxMesh);

    // Water towers
    const tw = new GeoBuilder();
    for (const [lx, lz] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4]]) {
      tw.add(new THREE.CylinderGeometry(0.12, 0.12, 4, 5), { color: 0x3b3430, matrix: xform(lx, 2, lz) });
    }
    tw.add(new THREE.CylinderGeometry(2.3, 2.3, 4.2, 12), { color: 0x8a6a4c, matrix: xform(0, 6.1, 0) });
    tw.add(new THREE.ConeGeometry(2.55, 1.8, 12), { color: 0x4b3d33, matrix: xform(0, 9.1, 0) });
    const towerMesh = makeInstanced(tw.build(), mat, P.towers.length);
    P.towers.forEach((t, k) => {
      m.compose(v.set(t.x, t.y, t.z), q.identity(), s.set(t.s, t.s, t.s));
      towerMesh.setMatrixAt(k, m);
      const r = 2.3 * t.s;
      this.world.addBox(t.x - r, t.y + 4 * t.s, t.z - r, t.x + r, t.y + 10 * t.s, t.z + r, null);
    });
    this.scene.add(towerMesh);

    // Antennas with aircraft warning lights
    const an = new GeoBuilder();
    an.add(new THREE.CylinderGeometry(0.08, 0.16, 1, 5), { color: 0x9aa0a8, matrix: xform(0, 0.5, 0) });
    const anMesh = makeInstanced(an.build(), makeLitMaterial({ emitDay: 0, emitNight: 0 }), P.antennas.length);
    const lt = new GeoBuilder();
    lt.add(new THREE.SphereGeometry(0.4, 6, 4), { color: 0xff2a2a, emit: 1 });
    const ltMesh = makeInstanced(lt.build(), makeLitMaterial({ emitDay: 0.6, emitNight: 3 }), P.antennas.length);
    P.antennas.forEach((a, k) => {
      const w = a.landmark ? 3 : 1;
      m.compose(v.set(a.x, a.y, a.z), q.identity(), s.set(w, a.h, w));
      anMesh.setMatrixAt(k, m);
      m.compose(v.set(a.x, a.y + a.h, a.z), q.identity(), s.set(w, w, w));
      ltMesh.setMatrixAt(k, m);
    });
    this.scene.add(anMesh, ltMesh);

    // Billboards with fictional ads
    const ads = makeAdTextures();
    const frameGB = new GeoBuilder();
    frameGB.add(new THREE.BoxGeometry(0.25, 7, 0.25), { color: 0x33363b, matrix: xform(-0.4, 3.5, 0) });
    frameGB.add(new THREE.BoxGeometry(0.25, 7, 0.25), { color: 0x33363b, matrix: xform(0.4, 3.5, 0) });
    frameGB.add(new THREE.BoxGeometry(1, 4.6, 0.3), { color: 0x24262a, matrix: xform(0, 6.2, 0) });
    const frameMesh = makeInstanced(frameGB.build(), makeLitMaterial({ emitDay: 0, emitNight: 0 }), P.billboards.length);
    const panelGeo = new THREE.PlaneGeometry(1, 1);
    const panels = ads.map((tex) => new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide, fog: true }));
    this.billboardPanels = panels;
    P.billboards.forEach((b, k) => {
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), b.rotY);
      m.compose(v.set(b.x, b.y, b.z), q, s.set(b.len, 1, 1));
      frameMesh.setMatrixAt(k, m);
      const panel = new THREE.Mesh(panelGeo, panels[b.ad % panels.length]);
      panel.position.set(b.x, b.y + 6.2, b.z);
      panel.rotation.y = b.rotY;
      panel.scale.set(b.len * 0.96, 4.3, 1);
      this.scene.add(panel);
      const hw = b.rotY === 0 ? b.len / 2 : 0.3, hd = b.rotY === 0 ? 0.3 : b.len / 2;
      this.world.addBox(b.x - hw, b.y + 3.9, b.z - hd, b.x + hw, b.y + 8.5, b.z + hd, null);
    });
    this.scene.add(frameMesh);
  }

  buildBridge() {
    // A suspension bridge stretching east over the bay - great for long swings.
    const x0 = CITY.SHORE + 15, len = 980, deckY = 16, z = blockC(7);
    const gb = new GeoBuilder();
    const box = new THREE.BoxGeometry(1, 1, 1);
    const deckW = 26;
    gb.add(box, { color: 0x4c5056, matrix: xform(x0 + len / 2, deckY - 1, z, 0, 0, 0, len, 2, deckW) });
    gb.add(box, { color: 0x2a2c30, matrix: xform(x0 + len / 2, deckY + 0.01, z, 0, 0, 0, len, 0.05, deckW - 4) });
    this.world.addBox(x0, deckY - 2, z - deckW / 2, x0 + len, deckY, z + deckW / 2, null);
    const towers = [x0 + 220, x0 + 760];
    const towerH = 125;
    for (const tx of towers) {
      for (const side of [-1, 1]) {
        const tz = z + side * (deckW / 2 + 1.5);
        gb.add(box, { color: 0xb5452c, matrix: xform(tx, (towerH + CITY.WATER_Y) / 2, tz, 0, 0, 0, 5, towerH - CITY.WATER_Y, 5) });
        this.world.addBox(tx - 2.5, CITY.WATER_Y, tz - 2.5, tx + 2.5, towerH, tz + 2.5, null);
        gb.add(box, { color: 0xffffff, emit: 0, matrix: xform(tx, towerH + 0.6, tz, 0, 0, 0, 1, 1.2, 1) });
      }
      for (const by of [deckY + 30, towerH - 8]) {
        gb.add(box, { color: 0xb5452c, matrix: xform(tx, by, z, 0, 0, 0, 4, 4, deckW + 6) });
        this.world.addBox(tx - 2, by - 2, z - deckW / 2 - 3, tx + 2, by + 2, z + deckW / 2 + 3, null);
      }
    }
    // Main cables (parabolic) + suspenders
    const cable = (xa, xb, ya, yb, sag) => {
      const segs = 24;
      for (const side of [-1, 1]) {
        const cz = z + side * (deckW / 2 + 1.5);
        let px = xa, py = ya;
        for (let s = 1; s <= segs; s++) {
          const t = s / segs;
          const x = xa + (xb - xa) * t;
          const y = ya + (yb - ya) * t - sag * 4 * t * (1 - t);
          const dx = x - px, dy = y - py, l = Math.hypot(dx, dy);
          gb.add(new THREE.CylinderGeometry(0.35, 0.35, 1, 5), {
            color: 0xb5452c,
            matrix: xform((x + px) / 2, (y + py) / 2, cz, 0, 0, -Math.atan2(dx, dy), 1, l, 1),
          });
          if (s < segs && y - deckY > 2) {
            gb.add(new THREE.CylinderGeometry(0.06, 0.06, 1, 4), { color: 0x7a3a2a, matrix: xform(x, (y + deckY) / 2, cz, 0, 0, 0, 1, y - deckY, 1) });
          }
          px = x; py = y;
        }
      }
    };
    cable(x0, towers[0], deckY + 4, towerH, 30);
    cable(towers[0], towers[1], towerH, towerH, 95);
    cable(towers[1], x0 + len, towerH, deckY + 4, 30);
    const mesh = new THREE.Mesh(gb.build(), makeLitMaterial({ emitDay: 0, emitNight: 0 }));
    this.scene.add(mesh);
    this.landmarks.bridge = { x0, len, z, deckY };
  }

  // Random point on a sidewalk loop of block (i,j) — used by pedestrians.
  sidewalkPoint(i, j, t, lateral = 0) {
    const b = this.blocks[i][j];
    const h = CITY.BLOCK / 2 - CITY.SIDEWALK / 2 + lateral;
    const side = 2 * h;
    let s = ((t % (4 * side)) + 4 * side) % (4 * side);
    if (s < side) return { x: b.cx - h + s, z: b.cz - h, dir: 0 };
    s -= side;
    if (s < side) return { x: b.cx + h, z: b.cz - h + s, dir: 1 };
    s -= side;
    if (s < side) return { x: b.cx + h - s, z: b.cz + h, dir: 2 };
    s -= side;
    return { x: b.cx - h, z: b.cz + h - s, dir: 3 };
  }

  buildingsNear(x, z, r) {
    return this.buildings.filter((b) => {
      const cx = (b.fp.x0 + b.fp.x1) / 2, cz = (b.fp.z0 + b.fp.z1) / 2;
      return Math.hypot(cx - x, cz - z) < r;
    });
  }
}

function makeAdTextures() {
  const ads = [
    { bg: ['#ff5a1f', '#ffb21f'], title: 'SLICE EXPRESS', sub: 'Hot pizza. Delivered by air.', fg: '#fff' },
    { bg: ['#14213d', '#2b4c8c'], title: 'THE DAILY SWING', sub: 'News that hangs around.', fg: '#ffd166' },
    { bg: ['#06d6a0', '#118ab2'], title: 'FIZZ COLA', sub: 'Pop to the top!', fg: '#fff' },
    { bg: ['#ef476f', '#7b2cbf'], title: 'ZOOM SNEAKERS', sub: 'Run up walls in style', fg: '#fff' },
    { bg: ['#f1faee', '#a8dadc'], title: 'SKYLINE BANK', sub: 'Your money, higher.', fg: '#1d3557' },
  ];
  return ads.map((a) => {
    const c = document.createElement('canvas');
    c.width = 512;
    c.height = 160;
    const g = c.getContext('2d');
    const grd = g.createLinearGradient(0, 0, 512, 160);
    grd.addColorStop(0, a.bg[0]);
    grd.addColorStop(1, a.bg[1]);
    g.fillStyle = grd;
    g.fillRect(0, 0, 512, 160);
    g.fillStyle = a.fg;
    g.font = 'bold 64px sans-serif';
    g.textAlign = 'center';
    g.fillText(a.title, 256, 82);
    g.font = '28px sans-serif';
    g.fillText(a.sub, 256, 128);
    const tex = new THREE.CanvasTexture(c);
    tex.anisotropy = 4;
    return tex;
  });
}
