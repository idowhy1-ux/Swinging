// Touch (Android) + keyboard/mouse input.
// Left side of the screen: floating joystick. Right side: drag to look.
// Buttons on the right: SWING (hold, drag to steer camera), JUMP, ZIP, THROW.
export class Input {
  constructor(root) {
    this.move = { x: 0, y: 0 };
    this.look = { dx: 0, dy: 0 };
    this._look = { dx: 0, dy: 0 };
    this.swingHeld = false;
    this.jumpHeld = false;
    this.jumpPressed = false;
    this.jumpReleased = false;
    this.zipPressed = false;
    this.throwPressed = false;
    this.camPressed = false;
    this.pausePressed = false;
    this.mapPressed = false;
    this.actionPressed = false;
    this._edges = {};
    this.keys = new Set();
    this.joy = { id: null, ox: 0, oy: 0, x: 0, y: 0 };
    this.lookId = null;
    this.lookLast = { x: 0, y: 0 };
    this.touchMode = false;
    this.enabled = true;
    this.root = root;
    this.joyBase = document.getElementById('joy');
    this.joyKnob = document.getElementById('joy-knob');
    this.bindTouch();
    this.bindKeys();
    this.bindButtons();
    // phones/tablets (and the Android app) start with on-screen controls
    const coarse = window.matchMedia && matchMedia('(pointer: coarse)').matches;
    if (window.AndroidBridge || (coarse && (navigator.maxTouchPoints > 0 || 'ontouchstart' in window))) this.setTouchMode(true);
  }

  bindTouch() {
    const area = document.getElementById('touch');
    area.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      if (e.pointerType === 'touch') this.setTouchMode(true);
      if (e.pointerType === 'mouse') {
        if (e.button === 0) { this._edges.swingDown = true; this.mouseSwing = true; }
        if (document.pointerLockElement !== area && this.wantPointerLock) area.requestPointerLock?.();
        this.lookId = e.pointerId;
        this.lookLast.x = e.clientX; this.lookLast.y = e.clientY;
        return;
      }
      const w = window.innerWidth;
      if (e.clientX < w * 0.42 && this.joy.id === null) {
        this.joy.id = e.pointerId;
        this.joy.ox = e.clientX; this.joy.oy = e.clientY;
        this.joy.x = 0; this.joy.y = 0;
        this.joyBase.style.display = 'block';
        this.joyBase.style.left = e.clientX + 'px';
        this.joyBase.style.top = e.clientY + 'px';
        this.joyKnob.style.transform = 'translate(-50%,-50%)';
      } else if (this.lookId === null) {
        this.lookId = e.pointerId;
        this.lookLast.x = e.clientX; this.lookLast.y = e.clientY;
      }
      area.setPointerCapture?.(e.pointerId);
    });
    area.addEventListener('pointermove', (e) => {
      if (e.pointerId === this.joy.id) {
        const R = 58;
        let dx = e.clientX - this.joy.ox, dy = e.clientY - this.joy.oy;
        const l = Math.hypot(dx, dy);
        if (l > R) {
          // drag the base along so the stick never "runs out"
          this.joy.ox += (dx / l) * (l - R);
          this.joy.oy += (dy / l) * (l - R);
          this.joyBase.style.left = this.joy.ox + 'px';
          this.joyBase.style.top = this.joy.oy + 'px';
          dx = (dx / l) * R; dy = (dy / l) * R;
        }
        this.joy.x = dx / R; this.joy.y = -dy / R;
        this.joyKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      } else if (e.pointerId === this.lookId) {
        if (document.pointerLockElement) {
          this._look.dx += e.movementX;
          this._look.dy += e.movementY;
        } else if (e.pointerType !== 'mouse' || e.buttons) {
          const scale = e.pointerType === 'touch' ? 1.25 : 1;
          this._look.dx += (e.clientX - this.lookLast.x) * scale;
          this._look.dy += (e.clientY - this.lookLast.y) * scale;
        }
        this.lookLast.x = e.clientX; this.lookLast.y = e.clientY;
      } else if (e.pointerType === 'mouse' && document.pointerLockElement) {
        this._look.dx += e.movementX;
        this._look.dy += e.movementY;
      }
    });
    const end = (e) => {
      if (e.pointerId === this.joy.id) {
        this.joy.id = null; this.joy.x = 0; this.joy.y = 0;
        this.joyBase.style.display = 'none';
      }
      if (e.pointerId === this.lookId) this.lookId = null;
      if (e.pointerType === 'mouse' && e.button === 0) this.mouseSwing = false;
    };
    area.addEventListener('pointerup', end);
    area.addEventListener('pointercancel', end);
    window.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  setTouchMode(on) {
    if (this.touchMode === on) return;
    this.touchMode = on;
    document.body.classList.toggle('touch', on);
  }

  bindButtons() {
    const btn = (id, onDown, onUp, steer = false) => {
      const el = document.getElementById(id);
      if (!el) return;
      let pid = null, lx = 0, ly = 0;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.pointerType === 'touch') this.setTouchMode(true);
        pid = e.pointerId; lx = e.clientX; ly = e.clientY;
        el.setPointerCapture?.(e.pointerId);
        el.classList.add('down');
        onDown();
      });
      el.addEventListener('pointermove', (e) => {
        if (steer && e.pointerId === pid) {
          // sliding a finger on the swing button also steers the camera
          this._look.dx += (e.clientX - lx) * 1.4;
          this._look.dy += (e.clientY - ly) * 1.0;
          lx = e.clientX; ly = e.clientY;
        }
      });
      const up = (e) => {
        if (e.pointerId !== pid) return;
        pid = null;
        el.classList.remove('down');
        onUp && onUp();
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('lostpointercapture', up);
    };
    btn('btn-swing', () => (this.touchSwing = true), () => (this.touchSwing = false), true);
    btn('btn-jump', () => { this._edges.jumpDown = true; this.touchJump = true; }, () => { this._edges.jumpUp = true; this.touchJump = false; });
    btn('btn-zip', () => (this._edges.zip = true));
    btn('btn-throw', () => (this._edges.throw = true));
    btn('btn-cam', () => (this._edges.cam = true));
    btn('btn-pause', () => (this._edges.pause = true));
    btn('btn-action', () => (this._edges.action = true));
    const mm = document.getElementById('minimap');
    mm?.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      this._edges.map = true;
    });
  }

  bindKeys() {
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      this.setTouchMode(false);
      const k = e.code;
      this.keys.add(k);
      if (k === 'Space') { this._edges.jumpDown = true; e.preventDefault(); }
      if (k === 'KeyE' || k === 'KeyQ') this._edges.zip = true;
      if (k === 'KeyF') this._edges.throw = true;
      if (k === 'KeyV' || k === 'KeyC') this._edges.cam = true;
      if (k === 'Escape' || k === 'KeyP') this._edges.pause = true;
      if (k === 'KeyM') this._edges.map = true;
      if (k === 'Enter' || k === 'KeyR') this._edges.action = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
      if (e.code === 'Space') this._edges.jumpUp = true;
    });
    window.addEventListener('blur', () => this.keys.clear());
  }

  // Called once per frame before the game update.
  poll() {
    const K = this.keys;
    let mx = this.joy.x, my = this.joy.y;
    if (K.has('KeyW') || K.has('ArrowUp')) my += 1;
    if (K.has('KeyS') || K.has('ArrowDown')) my -= 1;
    if (K.has('KeyD') || K.has('ArrowRight')) mx += 1;
    if (K.has('KeyA') || K.has('ArrowLeft')) mx -= 1;
    const l = Math.hypot(mx, my);
    if (l > 1) { mx /= l; my /= l; }
    this.move.x = mx; this.move.y = my;
    this.look.dx = this._look.dx; this.look.dy = this._look.dy;
    this._look.dx = 0; this._look.dy = 0;
    const kbSwing = K.has('ShiftLeft') || K.has('ShiftRight');
    this.swingHeld = this.enabled && (this.touchSwing || this.mouseSwing || kbSwing);
    const E = this._edges;
    this.jumpPressed = !!E.jumpDown;
    this.jumpReleased = !!E.jumpUp;
    this.jumpHeld = !!this.touchJump || K.has('Space');
    this.zipPressed = !!E.zip;
    this.throwPressed = !!E.throw;
    this.camPressed = !!E.cam;
    this.pausePressed = !!E.pause;
    this.mapPressed = !!E.map;
    this.actionPressed = !!E.action;
    this._edges = {};
    if (!this.enabled) {
      this.move.x = this.move.y = 0;
      this.look.dx = this.look.dy = 0;
      this.jumpPressed = this.zipPressed = this.throwPressed = false;
    }
  }

  reset() {
    this.touchSwing = false;
    this.touchJump = false;
    this.mouseSwing = false;
    this.keys.clear();
    this.joy.id = null; this.joy.x = 0; this.joy.y = 0;
    if (this.joyBase) this.joyBase.style.display = 'none';
    this.lookId = null;
    this._edges = {};
  }
}
