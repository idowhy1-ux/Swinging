// Swing races: checkpoint rings strung through the streets, a countdown,
// a timer, medals and saved best times.
import * as THREE from 'three';
import { roadC, blockC } from './city.js';

const R = 8.0; // ring radius (swing arcs are big: keep it forgiving)

function along(pts, spacing, heights) {
  // sample points every `spacing` metres along a polyline (x,z), skipping the start
  const out = [];
  let carry = spacing;
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
    const L = Math.hypot(bx - ax, bz - az);
    let d = carry;
    while (d <= L) {
      const t = d / L;
      out.push([ax + (bx - ax) * t, az + (bz - az) * t]);
      d += spacing;
    }
    carry = d - L;
  }
  return out.map(([x, z], i) => new THREE.Vector3(x, heights(i, out.length), z));
}

function flagTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#29c46a';
  g.beginPath(); g.arc(64, 64, 58, 0, Math.PI * 2); g.fill();
  g.lineWidth = 6; g.strokeStyle = '#fff'; g.stroke();
  for (let y = 0; y < 4; y++) for (let x = 0; x < 5; x++) {
    g.fillStyle = (x + y) % 2 ? '#111' : '#fff';
    g.fillRect(34 + x * 13, 34 + y * 12, 13, 12);
  }
  g.fillStyle = '#fff';
  g.fillRect(30, 30, 5, 70);
  return new THREE.CanvasTexture(c);
}

export class Races {
  constructor(scene, city, game) {
    this.scene = scene;
    this.game = game;
    this.courses = this.buildCourses(city);
    this.active = null;
    this.nearSpot = null;
    this._v = new THREE.Vector3();
    // ring visuals: current (bright), next two (dim)
    const geo = new THREE.TorusGeometry(R, 0.45, 10, 56);
    this.rings = [0x6dffb0, 0x3fd0ff, 0x3fd0ff].map((c, i) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: i ? 0.35 : 0.95, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
      m.visible = false;
      scene.add(m);
      return m;
    });
    // inner glow disc on the current ring
    this.disc = new THREE.Mesh(new THREE.CircleGeometry(R - 0.3, 40), new THREE.MeshBasicMaterial({ color: 0x6dffb0, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
    this.disc.visible = false;
    scene.add(this.disc);
    // start markers
    const tex = flagTexture();
    for (const c of this.courses) {
      const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthWrite: false, fog: false }));
      spr.position.set(c.spot.x, 4.4, c.spot.z);
      spr.scale.set(2.3, 2.3, 1);
      const ring = new THREE.Mesh(new THREE.RingGeometry(2.6, 3.2, 32), new THREE.MeshBasicMaterial({ color: 0x29c46a, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(c.spot.x, 0.09, c.spot.z);
      const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 70, 12, 1, true), new THREE.MeshBasicMaterial({ color: 0x29c46a, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false }));
      pillar.position.set(c.spot.x, 35, c.spot.z);
      scene.add(spr, ring, pillar);
      c.marker = { spr, ring, pillar };
    }
  }

  buildCourses(city) {
    const wave = (lo, hi, f = 1.7) => (i) => lo + (hi - lo) * (0.5 + 0.5 * Math.sin(i * f));
    const courses = [];
    const add = (id, name, level, start, rings, spot) => {
      let L = 0, p = new THREE.Vector3(start.x, start.y, start.z);
      for (const r of rings) { L += p.distanceTo(r); p = r; }
      courses.push({
        id, name, level, start, rings, length: L,
        medals: { gold: Math.round(L / 26 + 5), silver: Math.round(L / 20 + 10), bronze: Math.round(L / 14 + 20) },
        spot: spot || { x: start.x, z: start.z },
      });
    };
    const x4 = roadC(4);
    add('avenue', 'Avenue Sprint', 'Easy', { x: x4, y: 0.9, z: 470, yaw: 0 }, along([[x4, 470], [x4, -440]], 72, wave(16, 34)));
    add('downtown', 'Downtown Slalom', 'Medium', { x: -485, y: 0.9, z: roadC(4), yaw: -Math.PI / 2 },
      along([[-485, roadC(4)], [roadC(6), roadC(4)], [roadC(6), roadC(7)], [roadC(9), roadC(7)], [roadC(9), roadC(3)]], 64, wave(16, 38, 1.3)));
    const px0 = roadC(8), px1 = roadC(10), pz0 = roadC(2), pz1 = roadC(4);
    add('park', 'Park Loop', 'Medium', { x: px0, y: 0.9, z: pz1 + 70, yaw: 0 },
      along([[px0, pz1 + 70], [px0, pz0], [px1, pz0], [px1, pz1], [px0, pz1], [px0, pz0 + 40]], 58, wave(13, 28, 1.1)));
    const cx = blockC(5), cz = blockC(5), w = roadC(5), e = roadC(6), n = roadC(5), s = roadC(6);
    const spiral = along([[w, cz], [w, s], [e, s], [e, n], [w, n], [w, s], [e, s]], 58, (i, N) => 22 + 180 * Math.pow(1 - i / Math.max(1, N - 1), 1.6));
    add('tower', 'Tower Dive', 'Hard', { x: cx - 21, y: 243.95, z: cz, yaw: Math.PI / 2 }, spiral, { x: cx - 38, z: cz + 8 });
    return courses;
  }

  canStart() {
    if (this.active || this.game.jobs.active) return null;
    return this.nearSpot;
  }

  best(id) {
    return (this.game.save.races || {})[id] || null;
  }

  begin(course = this.nearSpot) {
    if (!course || this.active) return;
    const g = this.game, P = g.player;
    P.teleport(course.start.x, course.start.y, course.start.z);
    P.state = 'ground';
    P.frozen = true;
    g.cam.yaw = course.start.yaw;
    g.cam.pitch = course.id === 'tower' ? -0.35 : -0.02;
    g.cam.lookIdle = 0;
    this.active = { course, idx: 0, time: 0, countdown: 3.0, lastBeep: 4, prev: P.pos.clone(), splits: [] };
    this.showRings();
    g.sound.play('pickup');
  }

  cancel() {
    if (!this.active) return;
    this.game.player.frozen = false;
    this.game.player.preferAirZip = false;
    this.active = null;
    this.hideRings();
    this.game.hud.toast('Race cancelled');
  }

  hideRings() {
    for (const r of this.rings) r.visible = false;
    this.disc.visible = false;
  }

  showRings() {
    const a = this.active;
    const rs = a.course.rings;
    this.rings.forEach((m, k) => {
      const i = a.idx + k;
      if (i >= rs.length) { m.visible = false; return; }
      m.visible = true;
      m.position.copy(rs[i]);
      const next = rs[i + 1] || rs[i].clone().add(this._v.copy(rs[i]).sub(rs[i - 1] || a.course.start).normalize());
      m.lookAt(next);
      // the final ring is gold
      m.material.color.setHex(i === rs.length - 1 ? 0xffd84d : k === 0 ? 0x6dffb0 : 0x3fd0ff);
    });
    const cur = this.rings[0];
    this.disc.visible = cur.visible;
    this.disc.position.copy(cur.position);
    this.disc.quaternion.copy(cur.quaternion);
  }

  update(dt, player) {
    // start markers + proximity
    this.nearSpot = null;
    for (const c of this.courses) {
      const show = !this.active && !this.game.jobs.active;
      c.marker.spr.visible = c.marker.ring.visible = show;
      const d = Math.hypot(player.pos.x - c.spot.x, player.pos.z - c.spot.z);
      c.marker.pillar.visible = show && d > 12;
      c.marker.spr.position.y = 4.4 + Math.sin(performance.now() * 0.003) * 0.2;
      if (show && d < 6 && player.pos.y < 4) this.nearSpot = c;
    }
    const a = this.active;
    if (!a) return;
    const g = this.game;
    if (a.countdown > 0) {
      a.countdown -= dt;
      const n = Math.ceil(a.countdown);
      if (n !== a.lastBeep && n > 0) {
        a.lastBeep = n;
        g.hud.trickText(String(n), a.course.name);
        g.sound.play('beep', { high: false });
      }
      if (a.countdown <= 0) {
        player.frozen = false;
        g.hud.trickText('GO!', '');
        g.sound.play('beep', { high: true });
        a.prev.copy(player.pos);
      }
      return;
    }
    a.time += dt;
    const rs = a.course.rings;
    const ring = rs[a.idx];
    // swept test: closest point of this frame's path to the ring centre
    const p0 = a.prev, p1 = player.pos;
    const seg = this._v.subVectors(p1, p0);
    const l2 = seg.lengthSq();
    let t = l2 > 0 ? ((ring.x - p0.x) * seg.x + (ring.y - p0.y) * seg.y + (ring.z - p0.z) * seg.z) / l2 : 0;
    t = Math.max(0, Math.min(1, t));
    const cx = p0.x + seg.x * t, cy = p0.y + seg.y * t, cz = p0.z + seg.z * t;
    if (Math.hypot(cx - ring.x, cy - ring.y, cz - ring.z) < R + 1.5) {
      a.idx++;
      a.splits.push(a.time);
      g.fx.sparks(ring.x, ring.y, ring.z);
      if (a.idx >= rs.length) {
        this.finish();
        return;
      }
      g.sound.play('ring', { n: a.idx });
      this.showRings();
    }
    a.prev.copy(player.pos);
    // looking at the next ring: ZIP web-zips through it instead of grabbing a ledge
    const nr = rs[a.idx];
    const dx = nr.x - player.pos.x, dy = nr.y - player.pos.y, dz = nr.z - player.pos.z, dl = Math.hypot(dx, dy, dz);
    const f = player.aimFwd;
    player.preferAirZip = dl < 70 && (dx * f.x + dy * f.y + dz * f.z) / dl > Math.cos(Math.atan2(R * 1.2, dl) + 0.08);
    const s = 1 + Math.sin(performance.now() * 0.008) * 0.04;
    this.rings[0].scale.setScalar(s);
  }

  finish() {
    const a = this.active;
    const g = this.game;
    this.active = null;
    g.player.preferAirZip = false;
    this.hideRings();
    const c = a.course, t = a.time;
    const medal = t <= c.medals.gold ? 'gold' : t <= c.medals.silver ? 'silver' : t <= c.medals.bronze ? 'bronze' : null;
    const rank = { gold: 3, silver: 2, bronze: 1 };
    g.save.races = g.save.races || {};
    const prev = g.save.races[c.id] || { best: null, medal: null };
    const prevRank = prev.medal ? rank[prev.medal] : 0;
    const newRank = medal ? rank[medal] : 0;
    // pay out for medal upgrades (bronze 40, silver +60, gold +100), plus a small finish bonus
    const value = [0, 40, 100, 200];
    const reward = Math.max(0, value[newRank] - value[prevRank]) + 10;
    const best = prev.best === null || t < prev.best;
    g.save.races[c.id] = { best: best ? t : prev.best, medal: newRank > prevRank ? medal : prev.medal };
    g.money += reward;
    const fmt = (x) => `${Math.floor(x / 60)}:${(x % 60).toFixed(1).padStart(4, '0')}`;
    const icon = { gold: '🥇', silver: '🥈', bronze: '🥉' };
    g.onJobFinished({
      title: medal ? `${icon[medal]} ${medal.toUpperCase()} medal!` : 'Finished!',
      earned: reward,
      lines: [
        `${c.name}: ${fmt(t)}${best ? '  (new best!)' : `  (best ${fmt(prev.best)})`}`,
        `🥇 ${fmt(c.medals.gold)} · 🥈 ${fmt(c.medals.silver)} · 🥉 ${fmt(c.medals.bronze)}`,
      ],
      retry: () => this.begin(c),
    }, false);
  }

  objective(player) {
    const a = this.active;
    if (!a || a.countdown > 0) return null;
    const r = a.course.rings[a.idx];
    return { x: r.x, y: r.y - 2, z: r.z, dist: Math.hypot(r.x - player.pos.x, r.z - player.pos.z), type: 'race' };
  }
}
