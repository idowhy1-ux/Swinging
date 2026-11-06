// Skyline Courier - open-world web-swinging delivery game.
import * as THREE from 'three';
import { CITY, UPGRADES, SUITS } from './config.js';
import { CollisionWorld } from './world.js';
import { City } from './city.js';
import { Sky } from './sky.js';
import { CameraRig } from './camera.js';
import { Hero } from './character.js';
import { Player } from './player.js';
import { WebSystem } from './web.js';
import { Traffic } from './traffic.js';
import { Pedestrians } from './pedestrians.js';
import { Ambient } from './ambient.js';
import { Balloons } from './collectibles.js';
import { Effects } from './effects.js';
import { Sound } from './audio.js';
import { Input } from './input.js';
import { Hud } from './hud.js';
import { Jobs } from './jobs.js';
import { env } from './shaders.js';
import { Shadows } from './shadows.js';
import { PostFX, VIEWMODEL_LAYER } from './post.js';
import { HeroBody, POSES } from './body.js';
import { loadSave, writeSave } from './save.js';
import { clamp } from './util.js';

THREE.ColorManagement.enabled = false;

const QUALITY = {
  low: { ratio: 0.75, far: 1100, fog: 1.3, post: false, samples: 0, shadows: 0, interior: false },
  med: { ratio: 1.0, far: 1900, fog: 1.0, post: true, samples: 0, shadows: 1536, interior: true },
  high: { ratio: 1.6, far: 4200, fog: 0.9, post: true, samples: 4, shadows: 2048, interior: true },
};
const TIPS = [
  'Hold SWING near buildings to web-swing. Release to let go!',
  'Let go near the top of a swing for a PERFECT RELEASE speed boost.',
  'Run into a wall to run up it. Look where you want to go: up, sideways, around corners.',
  'JUMP on a wall kicks off toward where you look. JUMP as you clear a ledge to launch!',
  'Aim at a ledge and press ZIP to zip there. ZIP in mid-air for a web-zip speed boost.',
  'In the air, hit TRICK: push forward = front flip, back = backflip, sideways = barrel roll, no stick = spins & poses. Chain them!',
  'Orange 🍕 and blue 📰 markers on the minimap are delivery jobs.',
];

const $ = (id) => document.getElementById(id);
const IDLE_INPUT = { move: { x: 0, y: 0 }, look: { dx: 0, dy: 0 }, swingHeld: false, jumpHeld: false, jumpPressed: false, jumpReleased: false, zipPressed: false, trickPressed: false };

// A soft outdoor environment for the hero's physically based suit materials.
function makeEnvMap(renderer) {
  const pm = new THREE.PMREMGenerator(renderer);
  const sc = new THREE.Scene();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: 'varying vec3 vD; void main() { vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `varying vec3 vD;
      void main() {
        float y = vD.y;
        vec3 sky = mix(vec3(0.78, 0.74, 0.68), vec3(0.32, 0.52, 0.86), smoothstep(0.0, 0.6, y));
        vec3 ground = mix(vec3(0.34, 0.32, 0.3), vec3(0.16, 0.16, 0.18), smoothstep(0.0, -0.5, y));
        vec3 c = y > 0.0 ? sky : ground;
        // city skyline band on the horizon
        c *= 1.0 - 0.35 * smoothstep(0.12, 0.0, abs(y - 0.04)) * step(0.5, fract(atan(vD.z, vD.x) * 6.0));
        c += vec3(1.0, 0.9, 0.75) * pow(max(dot(vD, normalize(vec3(-0.6, 0.5, 0.3))), 0.0), 80.0) * 8.0;
        gl_FragColor = vec4(c, 1.0);
      }`,
  });
  sc.add(new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), mat));
  const rt = pm.fromScene(sc, 0);
  pm.dispose();
  return rt.texture;
}

class Game {
  constructor() {
    this.save = loadSave();
    const S = this.save.settings;
    const q = QUALITY[S.quality] || QUALITY.med;
    this.canvas = $('game');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.setClearColor(0x0e1424);
    this.scene = new THREE.Scene();
    this.world = new CollisionWorld();
    this.city = new City(this.scene, this.world);
    this.sky = new Sky(this.scene);
    this.sky.sun.layers.enable(VIEWMODEL_LAYER);
    this.sky.hemi.layers.enable(VIEWMODEL_LAYER);
    // a touch of fill light just for the first-person arms
    this.armFill = new THREE.AmbientLight(0xffffff, 0.35);
    this.armFill.layers.set(VIEWMODEL_LAYER);
    this.scene.add(this.armFill);
    this.post = new PostFX(this.renderer);
    this.shadows = new Shadows(this.renderer, q.shadows || 1536);
    this.cam = new CameraRig(this.scene, SUITS.find((s) => s.id === this.save.suit) || SUITS[0]);
    if (this.post.hdr) {
      try { this.scene.environment = makeEnvMap(this.renderer); } catch (e) { this.scene.environment = null; }
    }
    this.hero = new Hero(this.scene);
    this.player = new Player(this.world);
    this.webs = new WebSystem(this.scene);
    this.traffic = new Traffic(this.scene, this.city);
    this.peds = new Pedestrians(this.scene, this.city);
    this.ambient = new Ambient(this.scene, this.city);
    this.balloons = new Balloons(this.scene, this.city, this.save.balloons);
    this.fx = new Effects(this.scene, this.cam.camera);
    this.sound = new Sound();
    this.input = new Input();
    this.stats = this.save.stats;
    this.money = this.save.money;
    this.hud = new Hud(this);
    this.jobs = new Jobs(this.scene, this.city, this);
    this.state = 'title';
    this.menuStack = [];
    this.time = 0;
    this.saveTimer = 0;
    this.tipTimer = 6;
    this.dynScale = 1;
    this.frameAcc = 0;
    this.frameN = 0;
    this.fpsAcc = 0;
    this.fpsN = 0;
    this.lastStyleToast = 0;
    this.lastMissToast = -10;
    this.ropeLine = null;
    this.zipLines = [];
    this.prevState = 'air';
    this.handTmp = new THREE.Vector3();

    this.findSpawn();
    this.player.teleport(this.spawn.x, this.spawn.y, this.spawn.z);
    this.player.facing = Math.PI * 0.75;
    this.cam.yaw = this.player.facing + Math.PI;
    this.applySettings();
    this.applyUpgrades();
    // the hero stands on the spawn roof edge; we start looking out from there
    if (this.spawnBuilding) {
      const t = this.spawnBuilding.top;
      this.player.teleport(t.minX + 1.6, t.maxY + 1, (t.minZ + t.maxZ) / 2);
      this.cam.yaw = Math.PI / 2;
      this.cam.pitch = -0.08;
    }
    this.applySuit();
    this.bindUI();
    this.onResize();
    window.addEventListener('resize', () => this.onResize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.state === 'play') this.openMenu('pause');
        this.sound.suspend();
        this.persist();
      } else if (this.state !== 'title') this.sound.resume();
    });
    window.__onAndroidBack = () => this.onBack();
    window.__onAndroidPause = () => {
      if (this.state === 'play') this.openMenu('pause');
      this.sound.suspend();
      this.persist();
    };
    $('loading').remove();
    this.last = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  }

  showcaseHero() {
    if (this.showcase) return this.showcase;
    const suit = SUITS.find((s) => s.id === this.save.suit) || SUITS[0];
    this.showcaseMats = this.cam.M; // share the suit materials
    const body = new HeroBody(this.showcaseMats);
    // stand near the roof edge facing out over the street
    const b = this.spawnBuilding;
    const t = b ? b.top : null;
    let x = this.spawn.x, z = this.spawn.z, facing = 0;
    if (t) {
      x = t.minX + 1.3;
      z = (t.minZ + t.maxZ) / 2;
      facing = -Math.PI / 2;
    }
    body.root.position.set(x, (t ? t.maxY : this.spawn.y - 1) + 0.9, z);
    body.root.rotation.y = facing;
    body.pose(POSES.stand);
    body.apply(1, 100);
    this.scene.add(body.root);
    this.showcase = { body, facing };
    void suit;
    return this.showcase;
  }

  findSpawn() {
    let best = null, bd = Infinity;
    for (const b of this.city.buildings) {
      if (b.height < 45 || b.height > 95 || b.landmark) continue;
      const t = b.top;
      const cx = (t.minX + t.maxX) / 2, cz = (t.minZ + t.maxZ) / 2;
      const d = Math.hypot(cx + 170, cz - 160);
      if (d < bd && !this.world.overlaps(cx, t.maxY + 1, cz, 0.5, 0.9)) { bd = d; best = { x: cx, y: t.maxY + 1, z: cz }; this.spawnBuilding = b; }
    }
    this.spawn = best || { x: 0, y: 40, z: 0 };
  }

  // ------------------------------------------------------------- settings
  applySettings() {
    const S = this.save.settings;
    const q = QUALITY[S.quality] || QUALITY.med;
    this.quality = q;
    this.post.configure({ enabled: q.post, samples: q.samples });
    if (q.shadows && q.shadows !== this.shadows.size) {
      this.shadows.rt.dispose();
      this.shadows = new Shadows(this.renderer, q.shadows);
    }
    this.shadows.setEnabled(!!q.shadows);
    env.uInterior.value = q.interior ? 1 : 0;
    this.cam.camera.far = q.far;
    this.cam.camera.updateProjectionMatrix();
    this.sky.fogScale = q.fog;
    this.cam.sens = S.sens;
    this.cam.invertY = S.invert;
    this.cam.swingTilt = [0, 0.5, 0.85][S.swingCam ?? 1] ?? 0.5;
    this.player.autoChain = S.chain;
    this.sound.setVolume(S.vol);
    $('fps').classList.toggle('hidden', !S.fps);
    this.dynScale = 1;
    this.onResize();
    const segs = { 'set-quality': S.quality, 'set-invert': S.invert ? '1' : '0', 'set-chain': S.chain ? '1' : '0', 'set-vib': S.vib ? '1' : '0', 'set-fps': S.fps ? '1' : '0', 'set-swingcam': String(S.swingCam ?? 1) };
    for (const [id, v] of Object.entries(segs)) {
      for (const b of $(id).querySelectorAll('button')) b.classList.toggle('on', b.dataset.v === v);
    }
    $('set-sens').value = S.sens;
    $('set-vol').value = S.vol;
  }

  applyUpgrades() {
    const U = this.save.upgrades;
    this.player.stats.range = UPGRADES.range.values[U.range];
    this.player.stats.power = UPGRADES.power.values[U.power];
    this.player.stats.zip = UPGRADES.zip.values[U.zip];
  }

  applySuit() {
    const suit = SUITS.find((s) => s.id === this.save.suit) || SUITS[0];
    this.hero.setSuit(suit);
    this.cam.setSuit(suit);
    if (this.showcase) this.showcaseMats.setSuit(suit);
  }

  onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    const ratio = Math.min(dpr, this.quality ? this.quality.ratio : 1.2) * this.dynScale;
    this.renderer.setPixelRatio(Math.max(0.5, ratio));
    this.renderer.setSize(w, h, false);
    this.cam.camera.aspect = w / h;
    this.cam.camera.updateProjectionMatrix();
    this.fx.points.material.uniforms.uScale.value = (h * this.renderer.getPixelRatio()) / (2 * Math.tan((this.cam.camera.fov * Math.PI) / 360));
  }

  persist() {
    this.save.money = this.money;
    this.save.balloons = this.balloons.items.filter((i) => i.got).map((i) => i.id);
    this.save.stats = this.stats;
    this.save.settings.cam = this.cam.mode;
    writeSave(this.save);
  }

  addMoney(n) {
    this.money += n;
    this.sound.play('cash');
    this.persist();
  }

  vibrate(ms) {
    if (!this.save.settings.vib) return;
    try {
      if (window.AndroidBridge) window.AndroidBridge.vibrate(ms);
      else navigator.vibrate?.(ms);
    } catch (e) { /* ignore */ }
  }

  // ------------------------------------------------------------------- UI
  bindUI() {
    const click = (el, fn) => el.addEventListener('click', (e) => { e.stopPropagation(); this.sound.play('click'); fn(e); });
    click($('play'), () => this.startPlaying());
    click($('resume'), () => this.closeAllMenus());
    click($('respawn'), () => { this.player.teleport(this.spawn.x, this.spawn.y, this.spawn.z); this.closeAllMenus(); });
    click($('quit-job'), () => { this.jobs.cancel(); });
    click($('sum-ok'), () => this.closeAllMenus());
    document.querySelectorAll('[data-open]').forEach((b) => click(b, () => this.openMenu(b.dataset.open)));
    document.querySelectorAll('[data-back]').forEach((b) => click(b, () => this.back()));
    const seg = (id, fn) => $(id).querySelectorAll('button').forEach((b) => click(b, () => { fn(b.dataset.v); this.applySettings(); this.persist(); }));
    const S = this.save.settings;
    seg('set-quality', (v) => (S.quality = v));
    seg('set-invert', (v) => (S.invert = v === '1'));
    seg('set-chain', (v) => (S.chain = v === '1'));
    seg('set-vib', (v) => (S.vib = v === '1'));
    seg('set-fps', (v) => (S.fps = v === '1'));
    seg('set-swingcam', (v) => (S.swingCam = +v));
    $('set-sens').addEventListener('input', (e) => { S.sens = parseFloat(e.target.value); this.applySettings(); this.persist(); });
    $('set-vol').addEventListener('input', (e) => { S.vol = parseFloat(e.target.value); this.applySettings(); this.persist(); });
    // stop menu touches from reaching the game controls
    document.querySelectorAll('.menu').forEach((m) => m.addEventListener('pointerdown', (e) => e.stopPropagation()));
  }

  startPlaying() {
    this.sound.init();
    this.sound.resume();
    $('title').classList.add('hidden');
    document.body.classList.remove('on-title');
    if (this.showcase) this.showcase.body.root.visible = false;
    this.state = 'play';
    this.cam.smoothY = null;
    this.input.reset();
    this.last = performance.now();
    setTimeout(() => $('kb-hint').classList.add('fade'), 30000);
    try {
      if (!window.AndroidBridge && document.documentElement.requestFullscreen && matchMedia('(pointer: coarse)').matches) {
        document.documentElement.requestFullscreen().then(() => screen.orientation?.lock?.('landscape').catch(() => {})).catch(() => {});
      }
    } catch (e) { /* optional */ }
    if (this.save.tips < TIPS.length) this.tipTimer = 1.5;
  }

  openMenu(id) {
    const cur = this.menuStack[this.menuStack.length - 1];
    if (cur === id) return;
    if (cur) $(cur).classList.add('hidden');
    this.menuStack.push(id);
    $(id).classList.remove('hidden');
    if (this.state === 'play') this.state = 'menu';
    this.input.reset();
    if (id === 'pause') this.updatePauseMenu();
    if (id === 'shop') this.renderShop();
    if (id === 'map') this.hud.drawMinimap(this.player, this.cam, this.jobs, true, $('mapcanvas').getContext('2d'), 900);
  }

  back() {
    const cur = this.menuStack.pop();
    if (cur) $(cur).classList.add('hidden');
    const prev = this.menuStack[this.menuStack.length - 1];
    if (prev) {
      $(prev).classList.remove('hidden');
      if (prev === 'pause') this.updatePauseMenu();
    } else if (this.state === 'menu') {
      this.state = 'play';
      this.input.reset();
      this.last = performance.now();
    }
  }

  closeAllMenus() {
    while (this.menuStack.length) $(this.menuStack.pop()).classList.add('hidden');
    if (this.state === 'menu') this.state = 'play';
    this.input.reset();
    this.last = performance.now();
  }

  onBack() {
    if (this.state === 'title') {
      if (this.menuStack.length) this.back();
      else window.AndroidBridge?.exitApp();
      return;
    }
    if (this.menuStack.length) this.back();
    else this.openMenu('pause');
  }

  updatePauseMenu() {
    $('quit-job').style.display = this.jobs.active ? '' : 'none';
    const s = this.stats;
    $('stats-line').innerHTML = `🍕 Pizzas: <b>${s.pizzas}</b> · 📰 Papers: <b>${s.papers}</b> · 🎈 ${this.balloons.count}/${this.balloons.total} · Best combo: <b>${s.bestCombo}</b>`;
  }

  renderShop() {
    $('shop-money').textContent = `$${this.money}`;
    const U = this.save.upgrades;
    const up = $('upgrades');
    up.innerHTML = '';
    for (const [key, def] of Object.entries(UPGRADES)) {
      const lvl = U[key];
      const max = lvl >= def.prices.length;
      const price = max ? 0 : def.prices[lvl];
      const row = document.createElement('div');
      row.className = 'upg';
      row.innerHTML = `<div class="info"><b>${def.name}</b><small>${def.desc}</small><div class="pips">${[0, 1, 2]
        .map((i) => `<i class="${i < lvl ? 'on' : ''}"></i>`)
        .join('')}</div></div>`;
      const btn = document.createElement('button');
      btn.className = 'mbtn' + (max ? '' : ' primary');
      btn.textContent = max ? 'MAX' : `$${price}`;
      btn.disabled = max || this.money < price;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.money < price || max) return;
        this.money -= price;
        U[key]++;
        this.applyUpgrades();
        this.sound.play('chime');
        this.persist();
        this.renderShop();
      });
      row.appendChild(btn);
      up.appendChild(row);
    }
    const sw = $('suits');
    sw.innerHTML = '';
    for (const s of SUITS) {
      const owned = this.save.suits.includes(s.id);
      const on = this.save.suit === s.id;
      const d = document.createElement('div');
      d.className = 'suit' + (on ? ' on' : '');
      const hex = (n) => '#' + n.toString(16).padStart(6, '0');
      d.innerHTML = `<div class="swatch" style="background:linear-gradient(135deg, ${hex(s.main)} 55%, ${hex(s.accent)} 55%)"></div>${s.name}<br><small>${on ? 'Equipped' : owned ? 'Owned' : '$' + s.price}</small>`;
      d.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!owned) {
          if (this.money < s.price) { this.sound.play('miss'); return; }
          this.money -= s.price;
          this.save.suits.push(s.id);
        }
        this.save.suit = s.id;
        this.applySuit();
        this.sound.play('pickup');
        this.persist();
        this.renderShop();
      });
      sw.appendChild(d);
    }
  }

  onJobFinished(summary, cancelled) {
    if (this.menuStack.length) this.closeAllMenus();
    $('sum-title').textContent = summary.title;
    $('sum-earned').textContent = summary.earned ? `+$${summary.earned}` : '';
    $('sum-lines').innerHTML = summary.lines.map((l) => `<div>${l}</div>`).join('');
    this.sound.play(cancelled ? 'miss' : 'chime');
    this.openMenu('summary');
    this.persist();
  }

  // ---------------------------------------------------------- game events
  handleEvents() {
    const p = this.player;
    const hand = (side) => this.cam.handWorld(side, this.handTmp);
    for (const e of p.events) {
      switch (e.type) {
        case 'web':
          if (this.ropeLine) this.webs.release(this.ropeLine, p.vel);
          this.ropeLine = this.webs.shoot(e.anchor, hand(e.side), p.rope.length);
          this.ropeLine.side = e.side;
          this.sound.play('web', { pan: e.side * 0.4 });
          this.cam.kickFov(2.5);
          this.vibrate(12);
          break;
        case 'release':
          if (this.ropeLine) this.webs.release(this.ropeLine, p.vel);
          this.ropeLine = null;
          break;
        case 'wrap':
          if (this.ropeLine) this.ropeLine.anchor.copy(e.anchor);
          break;
        case 'zip':
          for (const l of this.zipLines) this.webs.release(l, p.vel);
          this.zipLines = [this.webs.shoot(e.target, hand(1)), this.webs.shoot(e.target, hand(-1))];
          this.zipLines[0].side = 1;
          this.zipLines[1].side = -1;
          this.sound.play('zip');
          this.vibrate(15);
          break;
        case 'taut':
          this.sound.play('taut', { amount: e.amount });
          this.cam.shake(Math.min(0.4, e.amount / 60));
          this.vibrate(10);
          break;
        case 'land':
          this.sound.play('land', { impact: e.impact });
          this.cam.land(e.impact);
          if (e.impact > 12) this.fx.dust(e.x, e.y, e.z, Math.min(2, e.impact / 18));
          if (e.impact > 17) { this.cam.shake(Math.min(1, e.impact / 40)); this.vibrate(30); }
          if (e.impact > 14 && e.y < 1) this.peds.cheer(e.x, e.z, 16);
          break;
        case 'impact':
          this.jobs.onImpact(e.amount);
          this.cam.shake(Math.min(1, e.amount / 15));
          this.vibrate(45);
          break;
        case 'perfect':
          this.sound.play('perfect');
          break;
        case 'style':
          if (this.time - this.lastStyleToast > 0.8) {
            this.lastStyleToast = this.time;
            this.hud.toast(`✨ ${e.label}`, 'style');
          }
          break;
        case 'comboEnd': {
          const tips = Math.floor(e.points / 40);
          this.stats.bestCombo = Math.max(this.stats.bestCombo, e.points);
          if (tips > 0) {
            this.money += tips;
            this.stats.styleTips += tips;
            this.hud.toast(`Combo x${e.count} · ${e.points} style · +$${tips} tips`, 'style');
            this.sound.play('cash');
            this.persist();
          }
          break;
        }
        case 'miss':
          this.sound.play('miss');
          if (this.time - this.lastMissToast > 6) {
            this.lastMissToast = this.time;
            this.hud.toast('Nothing to web onto here - get closer to tall buildings!', 'warn');
          }
          break;
        case 'splash':
          this.fx.splash(e.x, CITY.WATER_Y, e.z);
          this.sound.play('splash');
          this.hud.toast('Splash! Back to dry land…', 'warn');
          if (this.ropeLine) { this.webs.release(this.ropeLine, p.vel); this.ropeLine = null; }
          break;
        case 'step':
          this.sound.play('step');
          if (e.wall) this.sound.play('jump');
          break;
        case 'airzip':
          for (const l of this.zipLines) this.webs.release(l, p.vel);
          this.zipLines = [this.webs.shoot(e.target, hand(1)), this.webs.shoot(e.target, hand(-1))];
          this.zipLines[0].side = 1;
          this.zipLines[1].side = -1;
          this.airZipLines = this.zipLines;
          this.sound.play('zip');
          this.cam.kickFov(9);
          this.cam.shake(0.25);
          this.vibrate(18);
          break;
        case 'corner':
          this.cam.turn(e.delta);
          this.sound.play('whoosh');
          break;
        case 'vault':
          this.cam.land(8);
          this.sound.play('land', { impact: 8 });
          break;
        case 'jump': case 'vault':
          this.sound.play('jump');
          break;
        case 'launch':
          this.cam.kickFov(10);
          this.sound.play('whoosh');
          break;
        case 'dive':
          this.sound.play('whoosh');
          break;
        case 'trickStart':
          this.sound.play('whoosh');
          this.vibrate(8);
          break;
        case 'trickDone':
          this.hud.trickText(e.name, `+${e.pts}${e.chain > 1 ? `   x${e.chain} CHAIN` : ''}`);
          this.sound.play('perfect');
          break;
        case 'bail':
          this.hud.trickText('BAIL!', 'landed mid-trick', true);
          this.cam.shake(0.6);
          this.sound.play('miss');
          this.vibrate(40);
          break;
        case 'wallLand':
          this.sound.play('land', { impact: Math.min(e.impact, 12) });
          break;
        case 'perch':
          this.sound.play('land', { impact: 6 });
          break;
      }
    }
    p.events.length = 0;
    // zip lines end when the zip does
    if (this.airZipLines && p.airZipT <= 0) {
      for (const l of this.airZipLines) this.webs.release(l, p.vel);
      this.airZipLines = null;
      this.zipLines = [];
    }
    if (this.prevState === 'zip' && p.state !== 'zip') {
      for (const l of this.zipLines) this.webs.release(l, p.vel);
      this.zipLines = [];
    }
    this.prevState = p.state;
    for (const ev of this.traffic.events) if (ev.type === 'honk') this.sound.play('honk', ev);
    this.traffic.events.length = 0;
    for (const ev of this.ambient.events) if (ev.type === 'birds') this.sound.play('birds');
    this.ambient.events.length = 0;
  }

  updateWebStarts() {
    const p = this.player;
    const hw = (side, out) => this.cam.handWorld(side, out);
    if (this.ropeLine && !p.rope.active) {
      this.webs.release(this.ropeLine, p.vel);
      this.ropeLine = null;
    }
    if (this.ropeLine && p.rope.active) {
      hw(this.ropeLine.side, this.ropeLine.start);
      this.ropeLine.anchor.copy(p.rope.visual);
      const slack = Math.max(0, p.rope.length - p.pos.distanceTo(p.rope.anchor));
      this.ropeLine.restLen = this.ropeLine.start.distanceTo(p.rope.visual) + slack;
    }
    for (const l of this.zipLines) {
      if (l.state === 'shoot' || l.state === 'taut') {
        hw(l.side, l.start);
        l.restLen = 0;
      }
    }
  }

  // ------------------------------------------------------------- main loop
  loop(now) {
    requestAnimationFrame((t) => this.loop(t));
    const raw = (now - this.last) / 1000;
    this.last = now;
    const dt = clamp(raw, 0.001, 0.05);
    this.input.poll();
    const I = this.input;
    const playing = this.state === 'play';
    if (playing) {
      this.time += dt;
      if (I.pausePressed) this.openMenu('pause');
      if (I.mapPressed) this.openMenu('map');
      if (I.actionPressed && this.jobs.canStart()) this.jobs.start();
      if (I.throwPressed) this.jobs.throwPaper();
      this.player.update(dt, I, this.cam);
      this.handleEvents();
      this.traffic.update(dt, this.player);
      this.peds.update(dt, this.player);
      this.ambient.update(dt, this.player);
      const got = this.balloons.update(dt, this.player);
      if (got) {
        this.fx.pop(got.x, got.y, got.z);
        this.sound.play('pop');
        this.money += 10;
        const n = this.balloons.count;
        this.hud.toast(`🎈 Balloon ${n}/${this.balloons.total}! +$10`, 'good');
        if (n === this.balloons.total) {
          this.money += 500;
          this.hud.toast('🏆 ALL BALLOONS FOUND! +$500', 'good');
        }
        this.persist();
      }
      this.jobs.update(dt, this.player);
      this.sky.update(dt, this.cam.camera.position);
      this.cam.update(dt, this.player, I, this.world);
      // tips for new players
      if (this.save.tips < TIPS.length) {
        this.tipTimer -= dt;
        if (this.tipTimer < 0) {
          this.hud.toast('💡 ' + TIPS[this.save.tips], 'job');
          this.save.tips++;
          this.tipTimer = 11;
          this.persist();
        }
      }
      this.saveTimer += dt;
      if (this.saveTimer > 15) { this.saveTimer = 0; this.persist(); }
    } else if (this.state === 'title') {
      // slow showcase orbit around the hero on the spawn rooftop
      this.time += dt;
      this.sky.update(dt * 0.5, this.cam.camera.position);
      this.traffic.update(dt, this.player);
      this.peds.update(dt, this.player);
      this.ambient.update(dt, this.player);
      this.player.update(dt, IDLE_INPUT, this.cam);
      this.player.events.length = 0;
      // cinematic orbit around the hero standing on the rooftop edge
      const h = this.showcaseHero();
      const t = this.time;
      const c = this.cam.camera;
      const base = h.facing;
      const a = base + Math.sin(t * 0.16) * 1.0;
      const r = 2.35 + Math.sin(t * 0.11) * 0.45;
      const hp = h.body.root.position;
      c.position.set(hp.x + Math.sin(a) * r, hp.y + 0.15 + Math.sin(t * 0.13) * 0.25, hp.z + Math.cos(a) * r);
      // frame the hero on the left third; the menu sits on the right
      const dx = hp.x - c.position.x, dz = hp.z - c.position.z, dl = Math.hypot(dx, dz) || 1;
      const off = Math.min(1.0, 0.45 * c.aspect);
      c.lookAt(hp.x - (dz / dl) * off, hp.y + 0.42, hp.z + (dx / dl) * off);
      if (c.fov !== 48) { c.fov = 48; c.updateProjectionMatrix(); }
      this.cam.vm.visible = false;
      this.cam.legs.root.visible = false;
      c.updateMatrixWorld();
      // idle: breathing + looking around the city
      const B = h.body;
      B.pose(POSES.stand);
      B.pose({ spine: [0.03 + Math.sin(t * 1.6) * 0.015], neck: [0.05, Math.sin(t * 0.35) * 0.5, 0], head: [Math.sin(t * 0.5) * 0.08, Math.sin(t * 0.35) * 0.25, 0], shL: [0.05, 0, 0.1 + Math.sin(t * 1.6) * 0.015], shR: [-0.25, 0, -0.18] , elR: [-0.9], wrR: [0, 0, 0.3] });
      B.curl = 0.55;
      B.apply(dt, 4);
    }
    env.uTime.value = this.time;
    this.hero.setVisible(false);
    this.shadows.update(this.scene, this.state === 'title' ? this.cam.camera.position : this.player.pos, env.uSunDir.value, env.uNight.value);
    // the arms use the built-in sun light: dim it when the hero stands in a building's shadow
    if (this.state !== 'title') {
      const sd = env.uSunDir.value, cp = this.cam.camera.position;
      const blocked = env.uNight.value < 0.9 && this.world.raycast(cp.x, cp.y, cp.z, sd.x, sd.y, sd.z, 400, this.sunHit || (this.sunHit = {}));
      const target = blocked ? 0.12 : 1.0;
      this.armSun = (this.armSun ?? 1) + (target - (this.armSun ?? 1)) * Math.min(1, dt * 6);
    }
    const night = env.uNight.value;
    this.sky.sun.intensity = (this.state === 'title' ? 1 : this.armSun ?? 1) * 3.0 * (1 - night * 0.55);
    this.sky.hemi.intensity = 1.1;
    this.scene.environmentIntensity = 1 - night * 0.75;
    this.armFill.intensity = 0.25 + night * 0.35;
    // suit stripes and visor glow softly at night
    this.hero.mats.accent.emissive.copy(this.hero.mats.accent.color);
    this.hero.mats.accent.emissiveIntensity = 0.08 + env.uNight.value * 0.55;
    this.hero.update(dt, this.player, this.world);
    this.updateWebStarts();
    this.webs.update(dt, this.cam.camera.position);
    const sp = this.player.speed;
    const speedAmt = playing ? clamp((sp - 26) / 34, 0, 1) : 0;
    const fw = this.fx.update(dt, speedAmt * (this.quality.post ? 0.45 : 1), this.cam.camera.aspect, env.uNight.value);
    if (fw && playing) this.sound.play('boom', { x: 1200, z: 0 });
    if (playing) {
      const c = this.cam.camera.position;
      this.sound.listener.x = c.x;
      this.sound.listener.z = c.z;
      this.sound.listener.rx = Math.cos(this.cam.yaw);
      this.sound.listener.rz = -Math.sin(this.cam.yaw);
      this.sound.update(dt, sp, this.player.pos.y, this.player.state);
      this.hud.update(dt, this);
    }
    this.post.render(this.scene, this.cam.camera, { speed: speedAmt, time: this.time, night: env.uNight.value });
    this.trackPerf(raw);
  }

  trackPerf(raw) {
    this.frameAcc += raw;
    this.frameN++;
    if (this.frameAcc > 2) {
      const avg = this.frameAcc / this.frameN;
      if (this.save.settings.fps) $('fps').textContent = `${Math.round(1 / avg)} fps · ${(this.renderer.getPixelRatio()).toFixed(2)}x`;
      // dynamic resolution keeps the game smooth on slower phones
      if (avg > 0.026 && this.dynScale > 0.55) { this.dynScale = Math.max(0.55, this.dynScale - 0.1); this.onResize(); }
      else if (avg > 0.04 && this.dynScale <= 0.55 && this.state === 'play' && this.save.settings.quality !== 'low' && !this.autoLowered) {
        // still struggling at minimum resolution: switch to the fast renderer once
        this.autoLowered = true;
        this.save.settings.quality = 'low';
        this.applySettings();
        this.persist();
        this.hud.toast('Graphics set to Low for smoother play (change in Settings)', 'warn');
      }
      else if (avg < 0.0165 && this.dynScale < 1) { this.dynScale = Math.min(1, this.dynScale + 0.05); this.onResize(); }
      this.frameAcc = 0;
      this.frameN = 0;
    }
  }
}

function boot() {
  try {
    window.game = new Game();
  } catch (e) {
    console.error(e);
    const l = document.getElementById('loading');
    if (l) l.textContent = 'Could not start: ' + e.message + ' (WebGL required)';
  }
}
// give the loading text a frame to paint before the city is generated
requestAnimationFrame(() => setTimeout(boot, 30));
