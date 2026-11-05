// HTML overlay: stats, job panel, toasts, minimap, objective markers.
import * as THREE from 'three';
import { CITY } from './config.js';
import { formatTime, clamp } from './util.js';

const $ = (id) => document.getElementById(id);
const _v = new THREE.Vector3();

export class Hud {
  constructor(game) {
    this.game = game;
    this.el = {
      money: $('money'), balloons: $('balloons'), clock: $('clock'), speed: $('speed'),
      job: $('job'), jobTitle: $('job-title'), jobBody: $('job-body'), toasts: $('toasts'),
      combo: $('combo'), reticle: $('reticle'), zipMark: $('zip-mark'), objArrow: $('obj-arrow'),
      objMark: $('obj-mark'), objDist: $('obj-dist'), action: $('btn-action'), actionLabel: $('action-label'),
      swing: $('btn-swing'), zip: $('btn-zip'), throwBtn: $('btn-throw'), papers: $('papers-left'),
      camLabel: $('cam-label'), hint: $('hint'),
    };
    this.cache = {};
    this.mm = $('minimap');
    this.mmCtx = this.mm.getContext('2d');
    this.mapTimer = 0;
    this.buildMapImage();
  }

  set(key, el, text) {
    if (this.cache[key] === text) return;
    this.cache[key] = text;
    el.textContent = text;
  }
  setHTML(key, el, html) {
    if (this.cache[key] === html) return;
    this.cache[key] = html;
    el.innerHTML = html;
  }
  show(key, el, on) {
    const k = 'vis_' + key;
    if (this.cache[k] === on) return;
    this.cache[k] = on;
    el.style.display = on ? '' : 'none';
  }

  toast(text, kind = '') {
    const d = document.createElement('div');
    d.className = 'toast ' + kind;
    d.textContent = text;
    this.el.toasts.appendChild(d);
    while (this.el.toasts.children.length > 4) this.el.toasts.firstChild.remove();
    setTimeout(() => d.classList.add('out'), 2600);
    setTimeout(() => d.remove(), 3200);
  }

  buildMapImage() {
    const city = this.game.city;
    const S = 1024;
    const ext = CITY.SHORE + 80;
    this.mapExt = ext;
    this.mapScale = S / (ext * 2);
    const c = document.createElement('canvas');
    c.width = c.height = S;
    const g = c.getContext('2d');
    const w2p = (v) => (v + ext) * this.mapScale;
    g.fillStyle = '#1d4e66';
    g.fillRect(0, 0, S, S);
    g.fillStyle = '#5d6168';
    const s0 = w2p(-CITY.SHORE), s1 = w2p(CITY.SHORE);
    g.fillRect(s0, s0, s1 - s0, s1 - s0);
    // blocks
    for (const col of city.blocks) {
      for (const b of col) {
        const h = CITY.BLOCK / 2;
        g.fillStyle = b.type === 1 ? '#4f8a3c' : b.type === 2 ? '#a19a8e' : '#8a8a86';
        g.fillRect(w2p(b.cx - h), w2p(b.cz - h), CITY.BLOCK * this.mapScale, CITY.BLOCK * this.mapScale);
      }
    }
    // buildings shaded by height
    for (const b of city.buildings) {
      const t = b.tiers[0];
      const k = clamp(b.height / 220, 0, 1);
      const v = Math.round(200 - k * 120);
      g.fillStyle = `rgb(${v},${v + 4},${v + 12})`;
      g.fillRect(w2p(t.minX), w2p(t.minZ), (t.maxX - t.minX) * this.mapScale, (t.maxZ - t.minZ) * this.mapScale);
    }
    // bridge
    const br = city.landmarks.bridge;
    g.fillStyle = '#b5452c';
    g.fillRect(w2p(br.x0), w2p(br.z - 13), br.len * this.mapScale, 26 * this.mapScale);
    this.mapImg = c;
  }

  drawMinimap(player, cam, jobs, full = false, ctx = this.mmCtx, size = this.mm.width) {
    const g = ctx;
    const sc = this.mapScale;
    const ext = this.mapExt;
    const R = size / 2;
    g.save();
    g.clearRect(0, 0, size, size);
    if (!full) {
      g.beginPath();
      g.arc(R, R, R - 2, 0, Math.PI * 2);
      g.clip();
    }
    const zoom = full ? size / (this.mapImg.width) : 1.6 * (size / 300);
    g.fillStyle = '#1d4e66';
    g.fillRect(0, 0, size, size);
    g.translate(R, R);
    if (!full) g.rotate(cam.yaw);
    g.scale(zoom, zoom);
    const px = (full ? 0 : player.pos.x + ext) * sc;
    const pz = (full ? 0 : player.pos.z + ext) * sc;
    if (full) g.drawImage(this.mapImg, -this.mapImg.width / 2, -this.mapImg.height / 2);
    else g.drawImage(this.mapImg, -px, -pz);
    const toMap = (x, z) => (full ? [x * sc, z * sc] : [(x + ext) * sc - px, (z + ext) * sc - pz]);
    const maxR = full ? Infinity : (R - 10) / zoom;
    const ls = full ? 2.6 : 1;
    const dot = (x, z, color, r, clampEdge = false, label) => {
      r *= ls;
      let [u, v] = toMap(x, z);
      const l = Math.hypot(u, v);
      if (l > maxR) {
        if (!clampEdge) return;
        u = (u / l) * maxR; v = (v / l) * maxR;
      }
      g.fillStyle = color;
      g.beginPath();
      g.arc(u, v, r / zoom, 0, Math.PI * 2);
      g.fill();
      g.lineWidth = 2 / zoom;
      g.strokeStyle = '#fff';
      g.stroke();
      if (label) {
        g.save();
        g.translate(u, v);
        if (!full) g.rotate(-cam.yaw);
        g.fillStyle = '#fff';
        g.font = `bold ${(11 * ls) / zoom}px sans-serif`;
        g.lineWidth = (3 * ls) / zoom;
        g.strokeStyle = 'rgba(0,0,0,0.8)';
        g.strokeText(label, 0, -r / zoom - 3 / zoom);
        g.textAlign = 'center';
        g.fillText(label, 0, -r / zoom - 3 / zoom);
        g.restore();
      }
    };
    const a = jobs.active;
    if (!a) for (const s of jobs.spots) dot(s.x, s.z, s.type === 'pizza' ? '#ff8a1f' : '#3fd0ff', full ? 7 : 6, true, full ? s.name : null);
    if (a && a.type === 'pizza') for (const o of a.orders) if (!o.done) dot(o.x, o.z, '#ff8a1f', 6, true, full ? o.who : null);
    if (a && a.type === 'paper') for (const t of a.targets) if (!t.hit) dot(t.x, t.z, '#3fd0ff', 5, true);
    // hero arrow
    const [hx, hz] = toMap(player.pos.x, player.pos.z);
    g.translate(hx, hz);
    g.rotate(-player.facing + Math.PI);
    g.fillStyle = '#ffe14d';
    g.strokeStyle = '#000';
    g.lineWidth = 1.5 / zoom;
    const s = (full ? 22 : 8) / zoom;
    g.beginPath();
    g.moveTo(0, -s * 1.2);
    g.lineTo(s * 0.8, s);
    g.lineTo(0, s * 0.5);
    g.lineTo(-s * 0.8, s);
    g.closePath();
    g.fill();
    g.stroke();
    g.restore();
    if (!full) {
      // north marker
      const ang = cam.yaw;
      const nx = R + Math.sin(-ang) * (R - 11) * -1, ny = R - Math.cos(-ang) * (R - 11);
      g.fillStyle = '#ff5050';
      g.font = 'bold 13px sans-serif';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('N', nx, ny);
      g.strokeStyle = 'rgba(255,255,255,0.8)';
      g.lineWidth = 3;
      g.beginPath();
      g.arc(R, R, R - 2, 0, Math.PI * 2);
      g.stroke();
    }
  }

  // Project a world point to screen. Returns {x, y, behind}.
  project(x, y, z, camera) {
    _v.set(x, y, z).project(camera);
    const behind = _v.z > 1;
    const w = window.innerWidth, h = window.innerHeight;
    let sx = (_v.x * 0.5 + 0.5) * w, sy = (-_v.y * 0.5 + 0.5) * h;
    if (behind) { sx = w - sx; sy = h - sy; }
    return { x: sx, y: sy, behind };
  }

  update(dt, game) {
    const { player, jobs, cam, sky } = game;
    const E = this.el;
    this.set('money', E.money, `$${game.money}`);
    this.set('balloons', E.balloons, `${game.balloons.count}/${game.balloons.total}`);
    this.set('clock', E.clock, sky.clockString());
    const kmh = Math.round(player.speed * 3.6);
    this.set('speed', E.speed, `${kmh}`);
    // combo
    const cb = player.combo;
    if (cb.count >= 3) {
      this.show('combo', E.combo, true);
      this.setHTML('combo', E.combo, `<b>x${cb.count}</b> COMBO <span>${Math.round(cb.score)}</span>`);
    } else this.show('combo', E.combo, false);

    // job panel
    const a = jobs.active;
    if (a) {
      this.show('job', E.job, true);
      if (a.type === 'pizza') {
        this.set('jobTitle', E.jobTitle, `🍕 ${a.spot.name}`);
        const rows = a.orders.map((o) => {
          const cls = o.done ? (o.failed ? 'failed' : 'done') : o.left < 15 ? 'urgent' : '';
          const where = o.roof ? 'rooftop' : 'front door';
          return `<div class="order ${cls}"><span>${o.who} · ${where}</span><b>${o.done ? (o.failed ? '✗' : '✓') : formatTime(o.left)}</b></div>`;
        });
        const c = Math.round(a.condition);
        const cc = c > 70 ? '#5be37a' : c > 40 ? '#ffd166' : '#ff5a5a';
        rows.push(`<div class="bar"><i style="width:${c}%;background:${cc}"></i><label>Pizza condition ${c}%</label></div>`);
        this.setHTML('jobBody', E.jobBody, rows.join(''));
      } else {
        this.set('jobTitle', E.jobTitle, `📰 ${a.spot.name} route`);
        const left = a.targets.filter((t) => !t.hit).length;
        this.setHTML(
          'jobBody',
          E.jobBody,
          `<div class="order ${a.left < 15 ? 'urgent' : ''}"><span>Subscribers left: ${left}</span><b>${formatTime(a.left)}</b></div><div class="order"><span>Papers: ${a.papers}</span><b>${a.hits} hit</b></div>`
        );
      }
    } else this.show('job', E.job, false);

    // throw button
    const paper = a && a.type === 'paper';
    this.show('throw', E.throwBtn, !!paper);
    if (paper) this.set('papers', E.papers, `${a.papers}`);

    // contextual action button
    const near = jobs.canStart();
    this.show('action', E.action, !!near);
    if (near) this.set('actionLabel', E.actionLabel, near.type === 'pizza' ? `Start pizza delivery` : `Start paper route`);

    // swing + zip availability
    E.swing.classList.toggle('ready', player.anchorHint);
    E.zip.classList.toggle('ready', player.zipCandidate.valid);
    E.reticle.classList.toggle('ready', player.zipCandidate.valid);
    if (player.zipCandidate.valid && player.state !== 'zip') {
      const z = player.zipCandidate.target;
      const p = this.project(z.x, z.y - (player.zipCandidate.perch ? 0.9 : 0), z.z, cam.camera);
      if (!p.behind) {
        this.show('zipm', E.zipMark, true);
        E.zipMark.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%,-50%)`;
        E.zipMark.classList.toggle('perch', player.zipCandidate.perch);
      } else this.show('zipm', E.zipMark, false);
    } else this.show('zipm', E.zipMark, false);

    // objective marker / edge arrow
    const obj = jobs.objective(player);
    if (obj) {
      const p = this.project(obj.x, obj.y + 2, obj.z, cam.camera);
      const w = window.innerWidth, h = window.innerHeight;
      const m = 46, mb = 86;
      const onScreen = !p.behind && p.x > m && p.x < w - m && p.y > m && p.y < h - mb;
      this.set('objd', E.objDist, `${Math.round(Math.hypot(obj.dist, obj.y - player.pos.y))} m`);
      E.objMark.className = obj.type;
      E.objArrow.className = obj.type;
      if (onScreen) {
        this.show('objm', E.objMark, true);
        this.show('obja', E.objArrow, false);
        E.objMark.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%,-100%)`;
        E.objMark.appendChild(E.objDist);
      } else {
        this.show('objm', E.objMark, false);
        this.show('obja', E.objArrow, true);
        const cx = w / 2, cy = h / 2;
        let dx = p.x - cx, dy = p.y - cy;
        if (p.behind && Math.abs(dy) < 1) dy = 1;
        const s = Math.min((cx - m - 20) / Math.abs(dx || 1e-3), (dy > 0 ? cy - mb : cy - m - 30) / Math.abs(dy || 1e-3));
        const ax = cx + dx * s, ay = cy + dy * s;
        const ang = Math.atan2(dy, dx);
        E.objArrow.style.transform = `translate(${ax}px, ${ay}px) translate(-50%,-50%)`;
        E.objArrow.firstElementChild.style.transform = `rotate(${ang}rad)`;
        E.objArrow.appendChild(E.objDist);
      }
    } else {
      this.show('objm', E.objMark, false);
      this.show('obja', E.objArrow, false);
    }

    this.mapTimer -= dt;
    if (this.mapTimer <= 0) {
      this.mapTimer = 1 / 15;
      this.drawMinimap(player, cam.camera ? cam : cam, jobs);
    }
  }
}
