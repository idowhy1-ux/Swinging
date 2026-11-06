// Smooth vehicle models: side profiles extruded with bevelled edges, wheel
// arches, glass cabins, rims, bumpers, grilles and emissive lights.
// Body panels use aTint=1 so each instance gets its own paint colour.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GeoBuilder, xform } from './geo.js';

const T = { aTint: 1 }, N = { aTint: 0 };

// Extrude a side profile (points in z=forward, y=up) across the car width.
function extrudeProfile(points, width, bevel = 0.1) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p.length === 4) s.quadraticCurveTo(p[0], p[1], p[2], p[3]);
    else s.lineTo(p[0], p[1]);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: width - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel * 0.8, bevelSegments: 3, curveSegments: 6 });
  // ExtrudeGeometry builds the shape in XY and extrudes along +Z:
  // remap shape X -> world Z (forward), extrusion Z -> world X (width)
  g.translate(0, 0, -(width - bevel * 2) / 2);
  g.rotateY(-Math.PI / 2);
  g.computeVertexNormals();
  return g;
}

// lower body outline with wheel arches cut into the sills
function lowerProfile(len, belt, wb, r, noseH = 0.62) {
  const h = len / 2, a = r + 0.06;
  const pts = [[-h, 0.3], [-h + 0.02, belt - 0.1], [-h + 0.12, belt, -h + 0.4, belt + 0.02], [h - 0.55, belt], [h - 0.05, belt - 0.06, h, noseH], [h, 0.36], [wb / 2 + a, 0.3]];
  // front arch
  for (let i = 0; i <= 6; i++) { const t = (i / 6) * Math.PI; pts.push([wb / 2 + Math.cos(t) * a, 0.3 + Math.sin(t) * a]); }
  pts.push([-wb / 2 + a, 0.3]);
  for (let i = 0; i <= 6; i++) { const t = (i / 6) * Math.PI; pts.push([-wb / 2 + Math.cos(t) * a, 0.3 + Math.sin(t) * a]); }
  return pts;
}

function addWheels(gb, wb, track, r, w = 0.24) {
  const tire = new THREE.CylinderGeometry(r, r, w, 14);
  const rim = new THREE.CylinderGeometry(r * 0.6, r * 0.6, w + 0.02, 10);
  const hub = new THREE.CylinderGeometry(r * 0.18, r * 0.18, w + 0.04, 6);
  for (const z of [-wb / 2, wb / 2]) for (const x of [-track / 2, track / 2]) {
    gb.add(tire, { color: 0x151515, matrix: xform(x, r, z, 0, 0, Math.PI / 2), extra: N });
    gb.add(rim, { color: 0xb8bdc4, matrix: xform(x, r, z, 0, 0, Math.PI / 2), extra: N });
    gb.add(hub, { color: 0x555a60, matrix: xform(x, r, z, 0, 0, Math.PI / 2), extra: N });
  }
}

function addLights(gb, len, y, x, w = 0.38, h = 0.14) {
  const box = new THREE.BoxGeometry(1, 1, 1);
  for (const s of [-1, 1]) {
    gb.add(box, { color: 0xfff4d6, emit: 1, matrix: xform(s * x, y, len / 2 + 0.01, 0, 0, 0, w, h, 0.06), extra: N });
    gb.add(box, { color: 0xff1a1a, emit: 1, matrix: xform(s * x, y + 0.04, -len / 2 - 0.01, 0, 0, 0, w * 0.9, h * 0.9, 0.06), extra: N });
  }
}

function car({ len = 4.5, width = 1.82, belt = 1.0, roof = 1.42, wb = 2.7, r = 0.34, rear = 'sedan', taxi = false, police = false }) {
  const gb = new GeoBuilder({ aTint: 1 });
  gb.add(extrudeProfile(lowerProfile(len, belt, wb, r), width, 0.12), { color: 0xffffff, extra: T });
  // glass cabin (slightly narrower) + roof panel + pillars
  const h = len / 2;
  const cab = rear === 'hatch'
    ? [[-h + 0.15, belt - 0.02], [-h + 0.35, roof - 0.02], [0.45, roof], [1.05 * (len / 4.5), belt + 0.02]]
    : rear === 'suv'
      ? [[-h + 0.1, belt - 0.02], [-h + 0.2, roof - 0.04], [0.65, roof], [1.2 * (len / 4.5), belt + 0.02]]
      : [[-h + 0.75, belt - 0.02], [-0.85, roof - 0.02], [0.4, roof], [1.15, belt + 0.02]];
  gb.add(extrudeProfile(cab, width - 0.18, 0.06), { color: 0x1a2430, extra: N });
  const roofPts = [[cab[1][0] + 0.06, roof - 0.04], [cab[1][0] + 0.06, roof + 0.03], [cab[2][0] - 0.04, roof + 0.03], [cab[2][0] - 0.04, roof - 0.04]];
  gb.add(extrudeProfile(roofPts, width - 0.12, 0.05), { color: 0xffffff, extra: T });
  const box = new THREE.BoxGeometry(1, 1, 1);
  const midZ = (cab[1][0] + cab[2][0]) / 2;
  for (const s of [-1, 1]) {
    gb.add(box, { color: 0xffffff, matrix: xform(s * (width / 2 - 0.1), (belt + roof) / 2, midZ, 0, 0, 0, 0.05, roof - belt, 0.12), extra: T });
    gb.add(box, { color: 0x202326, matrix: xform(s * (width / 2 + 0.06), belt + 0.08, cab[3][0] - 0.25, 0, 0, 0, 0.12, 0.1, 0.16), extra: N }); // mirror
  }
  // bumpers + grille + plates
  gb.add(new RoundedBoxGeometry(width - 0.05, 0.22, 0.18, 2, 0.06), { color: 0x2a2d31, matrix: xform(0, 0.42, h - 0.02), extra: N });
  gb.add(new RoundedBoxGeometry(width - 0.05, 0.22, 0.18, 2, 0.06), { color: 0x2a2d31, matrix: xform(0, 0.44, -h + 0.02), extra: N });
  gb.add(box, { color: 0x111316, matrix: xform(0, 0.62, h + 0.005, 0, 0, 0, 0.7, 0.16, 0.04), extra: N });
  gb.add(box, { color: 0xe9e9e2, matrix: xform(0, 0.5, -h - 0.08, 0, 0, 0, 0.42, 0.11, 0.02), extra: N });
  addLights(gb, len, 0.72, width / 2 - 0.3);
  addWheels(gb, wb, width - 0.12, r);
  if (taxi) {
    gb.add(new RoundedBoxGeometry(0.75, 0.2, 0.28, 2, 0.05), { color: 0xfff6c8, emit: 0.9, matrix: xform(0, roof + 0.13, midZ), extra: N });
  }
  if (police) {
    gb.add(box, { color: 0xff2020, emit: 1.2, matrix: xform(-0.3, roof + 0.1, midZ, 0, 0, 0, 0.5, 0.12, 0.25), extra: N });
    gb.add(box, { color: 0x2050ff, emit: 1.2, matrix: xform(0.3, roof + 0.1, midZ, 0, 0, 0, 0.5, 0.12, 0.25), extra: N });
  }
  return gb.build();
}

function van() {
  const gb = new GeoBuilder({ aTint: 1 });
  const len = 5.3, width = 2.0, h = len / 2;
  gb.add(extrudeProfile(lowerProfile(len, 1.05, 3.3, 0.36, 0.75), width, 0.12), { color: 0xffffff, extra: T });
  gb.add(new RoundedBoxGeometry(width, 1.25, len - 1.1, 3, 0.12), { color: 0xffffff, matrix: xform(0, 1.62, -0.45), extra: T });
  gb.add(extrudeProfile([[h - 1.15, 1.02], [h - 1.15, 2.2], [h - 0.75, 2.2], [h - 0.2, 1.08]], width - 0.12, 0.05), { color: 0x1a2430, extra: N });
  const box = new THREE.BoxGeometry(1, 1, 1);
  gb.add(new RoundedBoxGeometry(width - 0.05, 0.24, 0.18, 2, 0.06), { color: 0x2a2d31, matrix: xform(0, 0.44, h - 0.02), extra: N });
  gb.add(new RoundedBoxGeometry(width - 0.05, 0.24, 0.18, 2, 0.06), { color: 0x2a2d31, matrix: xform(0, 0.46, -h + 0.02), extra: N });
  gb.add(box, { color: 0x111316, matrix: xform(0, 0.7, h + 0.005, 0, 0, 0, 0.9, 0.2, 0.04), extra: N });
  addLights(gb, len, 0.82, width / 2 - 0.3);
  addWheels(gb, 3.3, width - 0.14, 0.36);
  return gb.build();
}

function bus() {
  const gb = new GeoBuilder({ aTint: 1 });
  const len = 11.5, width = 2.55, h = len / 2;
  gb.add(new RoundedBoxGeometry(width, 2.75, len, 4, 0.22), { color: 0xffffff, matrix: xform(0, 1.78, 0), extra: T });
  // window band + windshield + destination sign
  gb.add(new RoundedBoxGeometry(width + 0.02, 0.95, len - 1.2, 2, 0.08), { color: 0x16202b, matrix: xform(0, 2.25, -0.3), extra: N });
  gb.add(new RoundedBoxGeometry(width - 0.25, 1.35, 0.1, 2, 0.04), { color: 0x16202b, matrix: xform(0, 2.0, h + 0.01), extra: N });
  gb.add(new THREE.BoxGeometry(1.6, 0.26, 0.06), { color: 0xffb000, emit: 1, matrix: xform(0, 2.95, h + 0.03), extra: N });
  gb.add(new THREE.BoxGeometry(width + 0.03, 0.12, len - 0.6), { color: 0xf2f2f2, matrix: xform(0, 1.35, 0), extra: N });
  addLights(gb, len, 0.75, width / 2 - 0.35, 0.34, 0.22);
  const tire = new THREE.CylinderGeometry(0.5, 0.5, 0.32, 14), rim = new THREE.CylinderGeometry(0.3, 0.3, 0.34, 10);
  for (const z of [-3.8, 3.6]) for (const x of [-1.12, 1.12]) {
    gb.add(tire, { color: 0x151515, matrix: xform(x, 0.5, z, 0, 0, Math.PI / 2), extra: N });
    gb.add(rim, { color: 0xb8bdc4, matrix: xform(x, 0.5, z, 0, 0, Math.PI / 2), extra: N });
  }
  return gb.build();
}

// type: geometry, count, length, paint options
export const VEHICLE_TYPES = {
  sedan: { geo: () => car({}), count: 40, len: 4.5, top: 1.45 },
  hatch: { geo: () => car({ len: 4.0, wb: 2.5, rear: 'hatch', roof: 1.48 }), count: 30, len: 4.0, top: 1.5 },
  suv: { geo: () => car({ len: 4.75, width: 1.92, belt: 1.15, roof: 1.78, wb: 2.85, r: 0.38, rear: 'suv' }), count: 26, len: 4.75, top: 1.8 },
  taxi: { geo: () => car({ taxi: true }), count: 16, len: 4.5, top: 1.6, paint: [0xf7c600] },
  van: { geo: van, count: 10, len: 5.3, top: 2.3, paint: [0xf2f2f2, 0xd0d4d8, 0x2e5aa8, 0xb0302a] },
  bus: { geo: bus, count: 12, len: 11.5, top: 3.1, paint: [0x1f6fd1, 0xe8a317, 0x2a9d5c], bus: true },
};
