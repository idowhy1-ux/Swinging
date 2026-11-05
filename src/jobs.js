// Delivery jobs: pizza runs (timed, fragile cargo) and newspaper routes
// (throw papers at doorsteps while swinging past).
import * as THREE from 'three';
import { CITY } from './config.js';
import { Rng, clamp } from './util.js';
import { blockC } from './city.js';

const PIZZA_COLOR = 0xff8a1f;
const PAPER_COLOR = 0x3fd0ff;
const SHOPS = [
  { name: 'Slice Express', near: [-300, 330] },
  { name: "Rocco's Pizza", near: [330, -260] },
  { name: 'Mamma Pie', near: [420, 470] },
];
const STANDS = [
  { name: 'Daily Swing Stand', near: [-420, -380] },
  { name: 'Uptown News', near: [150, 520] },
];
const STREETS = ['Maple', 'Harbor', 'Ash', 'Cedar', 'Union', 'Bay', 'Elm', 'Market', 'Pine', 'Grand', 'Hill', 'River', 'Oak'];
const CUSTOMERS = ['Alex', 'Sam', 'Priya', 'Jordan', 'Mei', 'Diego', 'Noor', 'Kai', 'Lena', 'Omar', 'Rosa', 'Theo', 'Ivy', 'Ben'];

function iconTexture(kind) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = kind === 'pizza' ? '#ff8a1f' : '#3fd0ff';
  g.beginPath();
  g.arc(64, 64, 58, 0, Math.PI * 2);
  g.fill();
  g.lineWidth = 6;
  g.strokeStyle = '#fff';
  g.stroke();
  if (kind === 'pizza') {
    g.fillStyle = '#ffd36b';
    g.beginPath();
    g.moveTo(64, 104); g.lineTo(30, 36); g.quadraticCurveTo(64, 18, 98, 36); g.closePath();
    g.fill();
    g.fillStyle = '#c8742f';
    g.beginPath();
    g.moveTo(30, 36); g.quadraticCurveTo(64, 18, 98, 36); g.lineTo(94, 44); g.quadraticCurveTo(64, 28, 34, 44); g.closePath();
    g.fill();
    g.fillStyle = '#d6332a';
    for (const [x, y] of [[62, 52], [50, 66], [74, 70], [64, 86]]) { g.beginPath(); g.arc(x, y, 6, 0, 6.3); g.fill(); }
  } else {
    g.fillStyle = '#f4f4f4';
    g.fillRect(30, 32, 68, 64);
    g.fillStyle = '#333';
    g.fillRect(36, 38, 56, 10);
    for (let i = 0; i < 5; i++) g.fillRect(36, 54 + i * 8, i % 2 ? 26 : 56, 4);
    g.fillRect(66, 54, 26, 20);
  }
  const t = new THREE.CanvasTexture(c);
  return t;
}

function signTexture(text, bg, fg) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, 512, 128);
  g.strokeStyle = fg;
  g.lineWidth = 8;
  g.strokeRect(8, 8, 496, 112);
  g.fillStyle = fg;
  g.font = 'bold 60px sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 256, 68);
  return new THREE.CanvasTexture(c);
}

class Beacon {
  constructor(scene, color, height = 260, radius = 1.4) {
    this.group = new THREE.Group();
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(radius, radius, height, 12, 1, true),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.28, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false })
    );
    pillar.position.y = height / 2;
    this.ring = new THREE.Mesh(
      new THREE.RingGeometry(2.2, 3.0, 32),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false, fog: false })
    );
    this.ring.rotation.x = -Math.PI / 2;
    this.ring.position.y = 0.12;
    this.group.add(pillar, this.ring);
    this.group.visible = false;
    scene.add(this.group);
    this.t = Math.random() * 6;
  }
  show(x, y, z) {
    this.group.position.set(x, y, z);
    this.group.visible = true;
  }
  hide() {
    this.group.visible = false;
  }
  update(dt, player) {
    this.t += dt;
    const s = 1 + Math.sin(this.t * 4) * 0.12;
    this.ring.scale.set(s, s, s);
    if (player) {
      const d = Math.hypot(player.pos.x - this.group.position.x, player.pos.z - this.group.position.z);
      this.group.children[0].material.opacity = 0.28 * Math.min(1, Math.max(0, (d - 6) / 30));
    }
  }
}

export class Jobs {
  constructor(scene, city, game) {
    this.scene = scene;
    this.city = city;
    this.game = game;
    this.rng = new Rng(Date.now() & 0xffff);
    this.spots = [];
    this.active = null;
    this.icons = { pizza: iconTexture('pizza'), paper: iconTexture('paper') };
    this.placeSpots();
    this.beacons = Array.from({ length: 12 }, () => new Beacon(scene, 0xffffff));
    this.papers = [];
    const paperGeo = new THREE.CylinderGeometry(0.11, 0.11, 0.42, 8);
    paperGeo.rotateZ(Math.PI / 2);
    const paperMat = new THREE.MeshLambertMaterial({ color: 0xe8e4d8 });
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(paperGeo, paperMat);
      m.visible = false;
      scene.add(m);
      this.papers.push({ mesh: m, active: false, vel: new THREE.Vector3(), life: 0, landed: false });
    }
    this.nearSpot = null;
    this.streak = 0;
    this._v = new THREE.Vector3();
    this._hit = {};
    this.buildCargo();
  }

  // ------------------------------------------------------------- job spots
  placeSpots() {
    const city = this.city;
    const used = new Set();
    const pickDoor = (near) => {
      let best = null, bd = Infinity;
      for (const d of city.doors) {
        if (used.has(d.building) || d.building.landmark || d.building.height > 90) continue;
        const dist = Math.hypot(d.x - near[0], d.z - near[1]);
        if (dist < bd) { bd = dist; best = d; }
      }
      used.add(best.building);
      return best;
    };
    for (const s of SHOPS) {
      const d = pickDoor(s.near);
      const spot = { type: 'pizza', name: s.name, x: d.x, y: 0, z: d.z, nx: d.nx, nz: d.nz };
      this.spots.push(spot);
      this.buildShop(spot);
    }
    for (const s of STANDS) {
      const i = clamp(Math.floor((s.near[0] + CITY.HALF) / CITY.PITCH), 0, CITY.N - 1);
      const j = clamp(Math.floor((s.near[1] + CITY.HALF) / CITY.PITCH), 0, CITY.N - 1);
      const o = CITY.BLOCK / 2 - 3.2;
      const spot = { type: 'paper', name: s.name, x: blockC(i) + o, y: 0, z: blockC(j) + o, nx: 1, nz: 0 };
      // kiosk sits on the corner; the pickup spot is beside it
      this.buildKiosk(spot);
      spot.x -= 4.5;
      this.spots.push(spot);
    }
    for (const s of this.spots) {
      const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.icons[s.type], depthWrite: false, fog: false }));
      spr.position.set(s.x, 4.2, s.z);
      spr.scale.set(2.2, 2.2, 1);
      this.scene.add(spr);
      s.sprite = spr;
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(2.6, 3.2, 32),
        new THREE.MeshBasicMaterial({ color: s.type === 'pizza' ? PIZZA_COLOR : PAPER_COLOR, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(s.x, 0.08, s.z);
      this.scene.add(ring);
      s.ring = ring;
      const pillar = new Beacon(this.scene, s.type === 'pizza' ? PIZZA_COLOR : PAPER_COLOR, 70, 0.6);
      pillar.ring.visible = false;
      pillar.show(s.x, 0, s.z);
      s.pillar = pillar;
    }
  }

  buildShop(spot) {
    const fx = spot.x - spot.nx * 2.2, fz = spot.z - spot.nz * 2.2;
    const yaw = Math.atan2(spot.nx, spot.nz);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), new THREE.MeshBasicMaterial({ map: signTexture(spot.name.toUpperCase(), '#d6332a', '#fff3c4') }));
    sign.position.set(fx + spot.nx * 0.08, 4.4, fz + spot.nz * 0.08);
    sign.rotation.y = yaw;
    const awning = new THREE.Mesh(new THREE.BoxGeometry(7, 0.25, 1.6), new THREE.MeshLambertMaterial({ color: 0xff8a1f }));
    awning.position.set(fx + spot.nx * 0.8, 3.4, fz + spot.nz * 0.8);
    awning.rotation.y = yaw;
    awning.rotation.x = 0;
    this.scene.add(sign, awning);
  }

  buildKiosk(spot) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.6, 2.0), new THREE.MeshLambertMaterial({ color: 0x1f7a4d }));
    body.position.y = 1.3;
    const roof = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.25, 2.6), new THREE.MeshLambertMaterial({ color: 0x14593a }));
    roof.position.y = 2.75;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 0.65), new THREE.MeshBasicMaterial({ map: signTexture('NEWS', '#fff', '#14213d'), side: THREE.DoubleSide }));
    sign.position.set(0, 3.25, 0);
    sign.rotation.y = Math.PI / 2;
    const stack = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.6), new THREE.MeshLambertMaterial({ color: 0xeeeeee }));
    stack.position.set(0, 0.25, -1.35);
    g.add(body, roof, sign, stack);
    g.position.set(spot.x, 0, spot.z);
    this.scene.add(g);
    this.game.world.addBox(spot.x - 1.3, 0, spot.z - 1.0, spot.x + 1.3, 2.9, spot.z + 1.0, null);
  }

  buildCargo() {
    const hero = this.game.hero;
    this.pizzaBoxes = [];
    const lid = new THREE.MeshLambertMaterial({ color: 0xf2e3c6 });
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.07, 0.42), lid);
      b.position.set(0, 0.22 + i * 0.075, -0.12);
      b.visible = false;
      hero.cargo.add(b);
      this.pizzaBoxes.push(b);
    }
    this.paperBundle = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.34, 8), new THREE.MeshLambertMaterial({ color: 0xe8e4d8 }));
    this.paperBundle.rotation.z = Math.PI / 2;
    this.paperBundle.position.set(0, 0.25, -0.05);
    this.paperBundle.visible = false;
    hero.cargo.add(this.paperBundle);
  }

  updateCargo() {
    const a = this.active;
    const nPizza = a && a.type === 'pizza' ? a.orders.filter((o) => !o.done).length : 0;
    this.pizzaBoxes.forEach((b, i) => (b.visible = i < nPizza));
    this.paperBundle.visible = !!(a && a.type === 'paper' && a.papers > 0);
    if (this.paperBundle.visible) this.paperBundle.scale.set(1, 1, 0.5 + Math.min(1, a.papers / 12) * 1.2);
  }

  // ------------------------------------------------------------ job start
  canStart() {
    return !this.active && this.nearSpot;
  }

  start() {
    const s = this.nearSpot;
    if (!s || this.active) return;
    if (s.type === 'pizza') this.startPizza(s);
    else this.startPaper(s);
    this.updateCargo();
    this.game.sound.play('pickup');
  }

  randomDestination(from, minD, maxD) {
    const city = this.city;
    for (let tries = 0; tries < 60; tries++) {
      const b = city.buildings[this.rng.int(0, city.buildings.length - 1)];
      const t = b.top;
      const cx = (t.minX + t.maxX) / 2, cz = (t.minZ + t.maxZ) / 2;
      const d = Math.hypot(cx - from.x, cz - from.z);
      if (d < minD || d > maxD) continue;
      const roof = this.rng.chance(0.55) || !b.doors.length;
      if (roof) {
        for (let k = 0; k < 6; k++) {
          const x = this.rng.float(t.minX + 2, t.maxX - 2), z = this.rng.float(t.minZ + 2, t.maxZ - 2);
          if (!this.game.world.overlaps(x, t.maxY + 1, z, 0.6, 0.9)) {
            return { x, y: t.maxY, z, roof: true, building: b };
          }
        }
        continue;
      }
      const door = this.rng.pick(b.doors);
      return { x: door.x, y: 0, z: door.z, roof: false, building: b, nx: door.nx, nz: door.nz };
    }
    return null;
  }

  startPizza(spot) {
    const nOrders = 1 + (this.rng.chance(0.55) ? 1 : 0) + (this.rng.chance(0.25) ? 1 : 0);
    const orders = [];
    for (let i = 0; i < nOrders; i++) {
      const dest = this.randomDestination(spot, 200, 700);
      if (!dest) continue;
      const dist = Math.hypot(dest.x - spot.x, dest.z - spot.z);
      const limit = Math.round(28 + dist / 11 + i * 18 + (dest.roof ? 8 : 0));
      orders.push({
        ...dest,
        dist,
        limit,
        left: limit,
        done: false,
        failed: false,
        who: this.rng.pick(CUSTOMERS),
        street: `${this.rng.int(10, 990)} ${this.rng.pick(STREETS)} St`,
        slot: i,
      });
    }
    this.active = { type: 'pizza', spot, orders, condition: 100, earned: 0, stars: [], time: 0 };
    orders.forEach((o, i) => {
      const yaw = Math.atan2(spot.x - o.x, spot.z - o.z);
      this.game.peds.setSpecial(i, true, o.x, o.y, o.z, yaw, 0);
      const bc = this.beacons[i];
      bc.group.children[0].material.color.setHex(PIZZA_COLOR);
      bc.ring.material.color.setHex(PIZZA_COLOR);
      bc.show(o.x, o.y, o.z);
      o.beacon = bc;
    });
    this.game.hud.toast(`🍕 ${orders.length} order${orders.length > 1 ? 's' : ''} from ${spot.name}! Deliver while they're hot.`, 'job');
  }

  startPaper(spot) {
    const city = this.city;
    const cands = city.doors.filter((d) => d.building.height < 60 && Math.hypot(d.x - spot.x, d.z - spot.z) < 300 && Math.hypot(d.x - spot.x, d.z - spot.z) > 25);
    const roofs = city.buildings.filter((b) => b.height < 28 && !b.landmark && Math.hypot((b.fp.x0 + b.fp.x1) / 2 - spot.x, (b.fp.z0 + b.fp.z1) / 2 - spot.z) < 280);
    const targets = [];
    const far = (x, z) => targets.every((t) => Math.hypot(t.x - x, t.z - z) > 28);
    let guard = 0;
    while (targets.length < 6 && cands.length && guard++ < 200) {
      const d = cands[this.rng.int(0, cands.length - 1)];
      if (far(d.x, d.z)) targets.push({ x: d.x, y: 0.05, z: d.z, roof: false, hit: false });
    }
    guard = 0;
    while (targets.length < 8 && roofs.length && guard++ < 100) {
      const b = roofs[this.rng.int(0, roofs.length - 1)];
      const t = b.top;
      const x = (t.minX + t.maxX) / 2, z = (t.minZ + t.maxZ) / 2;
      if (far(x, z) && !this.game.world.overlaps(x, t.maxY + 0.5, z, 0.5, 0.4)) targets.push({ x, y: t.maxY + 0.05, z, roof: true, hit: false });
    }
    const papers = targets.length + 5;
    const limit = 50 + targets.length * 9;
    this.active = { type: 'paper', spot, targets, papers, thrown: 0, hits: 0, bulls: 0, limit, left: limit, earned: 0, streak: 0 };
    targets.forEach((t, i) => {
      const bc = this.beacons[i];
      bc.group.children[0].material.color.setHex(PAPER_COLOR);
      bc.ring.material.color.setHex(PAPER_COLOR);
      bc.show(t.x, t.y, t.z);
      t.beacon = bc;
    });
    this.game.hud.toast(`📰 Paper route: ${targets.length} subscribers, ${papers} papers. Throw with the 📰 button!`, 'job');
  }

  cancel() {
    if (!this.active) return;
    this.finish(true);
  }

  // ---------------------------------------------------------------- update
  onImpact(amount) {
    const a = this.active;
    if (!a || a.type !== 'pizza') return;
    const loss = Math.min(40, amount * 2.2);
    a.condition = Math.max(0, a.condition - loss);
    if (loss > 2) this.game.hud.toast(`Careful! Pizza condition ${Math.round(a.condition)}%`, 'warn');
  }

  update(dt, player) {
    for (const b of this.beacons) if (b.group.visible) b.update(dt, player);
    // job givers
    this.nearSpot = null;
    for (const s of this.spots) {
      s.sprite.position.y = 4.2 + Math.sin(performance.now() * 0.003) * 0.2;
      const d = Math.hypot(player.pos.x - s.x, player.pos.z - s.z);
      if (!this.active && d < 6 && player.pos.y < 4) this.nearSpot = s;
      s.ring.visible = !this.active;
      s.pillar.group.visible = !this.active && d > 12;
    }
    this.updatePapers(dt);
    const a = this.active;
    if (!a) return;
    if (a.type === 'pizza') {
      a.time += dt;
      for (const o of a.orders) {
        if (o.done) continue;
        o.left -= dt;
        const dx = player.pos.x - o.x, dz = player.pos.z - o.z, dy = player.pos.y - 0.9 - o.y;
        if (dx * dx + dz * dz < 4.5 * 4.5 && Math.abs(dy) < 3.5) this.deliver(o);
        else if (o.left <= 0) {
          o.done = true;
          o.failed = true;
          o.beacon.hide();
          this.game.peds.setSpecial(o.slot, false);
          this.game.hud.toast(`⌛ ${o.who}'s order was too late and got cancelled.`, 'bad');
          this.game.sound.play('fail');
          this.updateCargo();
        }
      }
      if (a.orders.every((o) => o.done)) this.finish(false);
    } else {
      a.left -= dt;
      const inFlight = this.papers.some((p) => p.active && !p.landed);
      if (a.targets.every((t) => t.hit) || a.left <= 0 || (a.papers <= 0 && !inFlight)) this.finish(false);
    }
  }

  deliver(o) {
    const a = this.active;
    o.done = true;
    o.beacon.hide();
    const timeFrac = clamp(o.left / o.limit, 0, 1);
    const cond = a.condition;
    const base = 10 + Math.round(o.dist / 25);
    const timeBonus = Math.round(timeFrac * 12);
    const tip = Math.round((cond / 100) * 10 * (timeFrac > 0.2 ? 1 : 0.4));
    const pay = base + timeBonus + tip;
    const stars = timeFrac > 0.45 && cond > 85 ? 5 : timeFrac > 0.25 && cond > 65 ? 4 : cond > 45 ? 3 : cond > 20 ? 2 : 1;
    a.earned += pay;
    a.stars.push(stars);
    this.game.addMoney(pay);
    this.game.stats.pizzas++;
    this.game.peds.setSpecial(o.slot, true, o.x, o.y, o.z, Math.atan2(this.game.player.pos.x - o.x, this.game.player.pos.z - o.z), 1);
    setTimeout(() => this.game.peds.setSpecial(o.slot, false), 2500);
    this.game.fx.confetti(o.x, o.y + 1, o.z);
    this.game.sound.play('chime');
    this.game.hud.toast(`🍕 Delivered to ${o.who}! +$${pay} ${'★'.repeat(stars)}${'☆'.repeat(5 - stars)}`, 'good');
    this.game.peds.cheer(o.x, o.z, 12);
    this.updateCargo();
  }

  throwPaper() {
    const a = this.active;
    if (!a || a.type !== 'paper' || a.papers <= 0) return false;
    const p = this.papers.find((q) => !q.active) || this.papers[0];
    const player = this.game.player;
    const start = this._v.copy(player.pos);
    start.y += 0.5;
    const camF = player.camFwd;
    // auto-aim: best target in front of the camera within range
    let best = null, bs = Infinity;
    for (const t of a.targets) {
      if (t.hit) continue;
      const dx = t.x - start.x, dy = t.y - start.y, dz = t.z - start.z;
      const d = Math.hypot(dx, dy, dz);
      if (d > 55) continue;
      const dot = (dx * camF.x + dy * camF.y + dz * camF.z) / d;
      if (dot < 0.25 && d > 12) continue;
      const score = d * (1.6 - dot);
      if (score < bs) { bs = score; best = t; }
    }
    p.active = true;
    p.landed = false;
    p.life = 5;
    p.mesh.visible = true;
    p.mesh.position.copy(start);
    const G = 18;
    if (best) {
      const d = Math.hypot(best.x - start.x, best.z - start.z);
      const T = clamp(d / 26, 0.3, 1.3);
      const err = 0.35;
      p.vel.set(
        (best.x + (Math.random() - 0.5) * err - start.x) / T,
        (best.y + 0.15 - start.y) / T + 0.5 * G * T,
        (best.z + (Math.random() - 0.5) * err - start.z) / T
      );
    } else {
      p.vel.set(camF.x * 28, camF.y * 28 + 5, camF.z * 28).addScaledVector(player.vel, 0.5);
    }
    a.papers--;
    a.thrown++;
    player.throwT = 0.35;
    this.game.sound.play('throw');
    this.updateCargo();
    return true;
  }

  updatePapers(dt) {
    const a = this.active;
    const world = this.game.world;
    for (const p of this.papers) {
      if (!p.active) continue;
      p.life -= dt;
      if (p.life <= 0) { p.active = false; p.mesh.visible = false; continue; }
      if (p.landed) continue;
      p.vel.y -= 18 * dt;
      const step = p.vel.length() * dt;
      const dir = this._v.copy(p.vel).normalize();
      const hit = world.raycast(p.mesh.position.x, p.mesh.position.y, p.mesh.position.z, dir.x, dir.y, dir.z, step, this._hit);
      if (hit) {
        p.mesh.position.set(hit.x + hit.nx * 0.1, hit.y + hit.ny * 0.1, hit.z + hit.nz * 0.1);
        p.landed = hit.ny > 0.5;
        if (!p.landed) p.vel.set(hit.nx * 2, -2, hit.nz * 2);
        this.game.sound.play('thud', { x: hit.x, z: hit.z });
      } else {
        p.mesh.position.addScaledVector(p.vel, dt);
        if (p.mesh.position.y < 0.12 && world.groundAt(p.mesh.position.x, p.mesh.position.z) !== null) {
          p.mesh.position.y = 0.12;
          p.landed = true;
          this.game.sound.play('thud', { x: p.mesh.position.x, z: p.mesh.position.z });
        }
      }
      p.mesh.rotation.y += dt * 9;
      p.mesh.rotation.x += dt * 4;
      if (p.landed) p.mesh.rotation.set(0, p.mesh.rotation.y, 0);
      // hit test against route targets
      if (a && a.type === 'paper') {
        for (const t of a.targets) {
          if (t.hit) continue;
          const d = Math.hypot(p.mesh.position.x - t.x, p.mesh.position.y - t.y, p.mesh.position.z - t.z);
          if (d < 2.0) {
            t.hit = true;
            t.beacon.hide();
            a.hits++;
            a.streak++;
            const bull = d < 0.9;
            if (bull) a.bulls++;
            const pay = 6 + (bull ? 3 : 0) + Math.min(a.streak - 1, 5);
            a.earned += pay;
            this.game.addMoney(pay);
            this.game.stats.papers++;
            this.game.fx.sparks(t.x, t.y + 0.4, t.z);
            this.game.sound.play('cash');
            this.game.hud.toast(`${bull ? '🎯 Bullseye!' : '📰 Delivered!'} +$${pay}${a.streak > 1 ? `  streak x${a.streak}` : ''}`, 'good');
            this.game.peds.cheer(t.x, t.z, 10);
            p.landed = true;
            break;
          }
        }
      }
      if (p.landed && a && a.type === 'paper') {
        const hitAny = a.targets.some((t) => t.hit && Math.hypot(p.mesh.position.x - t.x, p.mesh.position.z - t.z) < 2.2);
        if (!hitAny) a.streak = 0;
      }
    }
  }

  finish(cancelled) {
    const a = this.active;
    if (!a) return;
    this.active = null;
    for (const b of this.beacons) b.hide();
    for (let i = 0; i < 12; i++) this.game.peds.setSpecial(i, false);
    this.updateCargo();
    let summary;
    if (cancelled) {
      summary = { title: 'Job cancelled', lines: ['No worries - the city will always need couriers.'], earned: a.earned };
    } else if (a.type === 'pizza') {
      const ok = a.orders.filter((o) => !o.failed).length;
      const avg = a.stars.length ? a.stars.reduce((x, y) => x + y, 0) / a.stars.length : 0;
      let bonus = 0;
      if (ok === a.orders.length && a.orders.length > 1) bonus = 10 * a.orders.length;
      if (bonus) this.game.addMoney(bonus);
      if (ok === a.orders.length) this.streak++;
      else this.streak = 0;
      summary = {
        title: ok === a.orders.length ? 'Pizza run complete!' : 'Pizza run finished',
        lines: [
          `Delivered ${ok} / ${a.orders.length} orders`,
          `Pizza condition: ${Math.round(a.condition)}%`,
          `Rating: ${'★'.repeat(Math.round(avg))}${'☆'.repeat(5 - Math.round(avg))}`,
          bonus ? `Multi-order bonus: +$${bonus}` : '',
          this.streak > 1 ? `Perfect-run streak: ${this.streak}` : '',
        ].filter(Boolean),
        earned: a.earned + bonus,
      };
    } else {
      const total = a.targets.length;
      let bonus = a.hits === total ? 20 + Math.max(0, Math.round(a.left / 3)) : 0;
      const acc = a.thrown ? Math.round((a.hits / a.thrown) * 100) : 0;
      if (acc >= 80 && a.hits > 3) bonus += 10;
      if (bonus) this.game.addMoney(bonus);
      summary = {
        title: a.hits === total ? 'Route complete!' : 'Route finished',
        lines: [`Papers delivered: ${a.hits} / ${total}`, `Bullseyes: ${a.bulls}`, `Accuracy: ${acc}%`, bonus ? `Route bonus: +$${bonus}` : ''].filter(Boolean),
        earned: a.earned + bonus,
      };
    }
    this.game.stats.jobs += cancelled ? 0 : 1;
    this.game.onJobFinished(summary, cancelled);
  }

  // what the HUD should point at
  objective(player) {
    const a = this.active;
    if (!a) return null;
    let best = null, bd = Infinity;
    const list = a.type === 'pizza' ? a.orders.filter((o) => !o.done) : a.targets.filter((t) => !t.hit);
    for (const o of list) {
      const d = Math.hypot(o.x - player.pos.x, o.z - player.pos.z);
      if (d < bd) { bd = d; best = o; }
    }
    return best ? { x: best.x, y: best.y, z: best.z, dist: bd, type: a.type } : null;
  }
}
