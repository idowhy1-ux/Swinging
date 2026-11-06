// Fully procedural sound (WebAudio) - no audio files needed.
export class Sound {
  constructor() {
    this.ctx = null;
    this.volume = 0.8;
    this.listener = { x: 0, y: 0, z: 0, rx: 1, rz: 0 };
    this.sirenTimer = 20;
    this.hornTimer = 6;
  }

  init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = (this.ctx = new AC());
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);
    this.comp = comp;
    // white noise buffer
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // brown noise buffer
    this.brown = ctx.createBuffer(1, len, ctx.sampleRate);
    const b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
      b[i] = last * 3.5;
    }
    // wind loop
    const wn = this.loop(this.noise);
    this.windFilter = ctx.createBiquadFilter();
    this.windFilter.type = 'bandpass';
    this.windFilter.Q.value = 0.7;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    wn.connect(this.windFilter).connect(this.windGain).connect(this.master);
    const wn2 = this.loop(this.noise);
    this.whistle = ctx.createBiquadFilter();
    this.whistle.type = 'bandpass';
    this.whistle.Q.value = 9;
    this.whistleGain = ctx.createGain();
    this.whistleGain.gain.value = 0;
    wn2.connect(this.whistle).connect(this.whistleGain).connect(this.master);
    // city hum
    const hum = this.loop(this.brown);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 420;
    this.humGain = ctx.createGain();
    this.humGain.gain.value = 0.08;
    hum.connect(lp).connect(this.humGain).connect(this.master);
    this.initMusic();
  }

  // ------------------------------------------------------------ music
  // A small step sequencer (A minor: Am - F - C - G) whose layers fade in
  // with the action: pads when calm, beat + bass when moving, full drums and
  // an echoing arpeggio when swinging fast.
  initMusic() {
    const ctx = this.ctx;
    const M = (this.music = { step: 0, next: ctx.currentTime + 0.3, intensity: 0.15, target: 0.15, night: 0 });
    M.bus = ctx.createGain();
    M.bus.gain.value = this.musicVolume ?? 0.6;
    M.bus.connect(this.comp); // independent of the sound-effects volume
    const layer = (g = 0) => { const n = ctx.createGain(); n.gain.value = g; n.connect(M.bus); return n; };
    M.pad = layer(0.0);
    M.padFilter = ctx.createBiquadFilter();
    M.padFilter.type = 'lowpass';
    M.padFilter.frequency.value = 1100;
    M.padFilter.connect(M.pad);
    M.light = layer(0);
    M.full = layer(0);
    M.bass = layer(0);
    M.arp = layer(0);
    // echo for the arpeggio
    M.delay = ctx.createDelay(1);
    M.delay.delayTime.value = (60 / 108) * 0.75;
    const fb = ctx.createGain();
    fb.gain.value = 0.32;
    const dw = ctx.createGain();
    dw.gain.value = 0.35;
    M.arpIn = ctx.createGain();
    M.arpIn.connect(M.arp);
    M.arpIn.connect(M.delay);
    M.delay.connect(fb).connect(M.delay);
    M.delay.connect(dw).connect(M.arp);
    M.chords = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]];
    M.roots = [45, 41, 36, 43];
  }

  setMusicVolume(v) {
    this.musicVolume = v;
    if (this.music) this.music.bus.gain.setTargetAtTime(v * 0.7, this.ctx.currentTime, 0.1);
  }

  setMusicIntensity(target, night = 0) {
    if (!this.music) return;
    this.music.target = target;
    this.music.night = night;
  }

  noteHz(m) { return 440 * Math.pow(2, (m - 69) / 12); }

  musicVoice(dest, type, freq, t, dur, gain, attack = 0.005, filter = 0) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    let node = o;
    if (filter) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = filter;
      f.Q.value = 4;
      node = o.connect(f);
    }
    node.connect(g).connect(dest);
    o.start(t);
    o.stop(t + dur + 0.05);
    return o;
  }

  musicNoise(dest, t, dur, gain, hp) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = 'highpass';
    f.frequency.value = hp;
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(dest);
    src.start(t, Math.random());
    src.stop(t + dur + 0.02);
  }

  scheduleMusic(dt) {
    const M = this.music;
    const ctx = this.ctx;
    if (!M || ctx.state !== 'running') return;
    // smooth intensity: rises quickly, falls slowly
    const k = M.target > M.intensity ? 1.2 : 0.3;
    M.intensity += (M.target - M.intensity) * Math.min(1, dt * k);
    const I = M.intensity;
    const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
    const now = ctx.currentTime;
    const gl = { pad: 0.3, light: sm(0.12, 0.3, I) * (1 - sm(0.55, 0.85, I)) * 0.9, full: sm(0.5, 0.82, I), bass: sm(0.25, 0.5, I) * 0.9, arp: sm(0.62, 0.92, I) * 0.8 };
    for (const n in gl) M[n].gain.setTargetAtTime(gl[n], now, 0.6);
    M.padFilter.frequency.setTargetAtTime(700 + (1 - M.night) * 600 + I * 500, now, 0.5);
    const stepDur = 60 / 108 / 4;
    if (M.next < now - 0.5) M.next = now + 0.05; // resumed after a pause
    while (M.next < now + 0.15) {
      const t = M.next, s = M.step % 16, bar = Math.floor(M.step / 16) % 4;
      const chord = M.chords[bar], root = M.roots[bar];
      if (s === 0) {
        for (const n of chord) for (const det of [-7, 7]) {
          const o = this.musicVoice(M.padFilter, 'sawtooth', this.noteHz(n) * Math.pow(2, det / 1200), t, stepDur * 16 + 0.4, 0.028, 0.35);
          void o;
        }
      }
      if (gl.light > 0.02) {
        if (s === 0 || s === 8) this.kick(M.light, t, 0.55);
        if (s % 4 === 2) this.musicNoise(M.light, t, 0.05, 0.07, 7000);
      }
      if (gl.full > 0.02) {
        if (s % 4 === 0) this.kick(M.full, t, 0.85);
        if (s === 4 || s === 12) { this.musicNoise(M.full, t, 0.16, 0.32, 1200); this.musicVoice(M.full, 'triangle', 185, t, 0.09, 0.12); }
        if (s === 15 && bar === 3) this.musicNoise(M.full, t, 0.12, 0.2, 1500);
        this.musicNoise(M.full, t, s % 2 ? 0.03 : 0.05, s % 4 === 2 ? 0.1 : 0.05, 8000);
      }
      if (gl.bass > 0.02 && [0, 3, 6, 8, 10, 14].includes(s)) {
        const n = s === 10 ? root + 7 : s === 14 ? root + 12 : root;
        this.musicVoice(M.bass, 'sawtooth', this.noteHz(n), t, stepDur * (s === 0 ? 2.5 : 1.6), 0.22, 0.008, 260 + I * 380);
      }
      if (gl.arp > 0.02) {
        const seq = [0, 1, 2, 1, 0, 1, 2, 3];
        const tones = [chord[0] + 12, chord[1] + 12, chord[2] + 12, chord[0] + 24];
        this.musicVoice(M.arpIn, 'square', this.noteHz(tones[seq[s % 8]]), t, 0.13, 0.045, 0.004, 2600);
      }
      M.step++;
      M.next += stepDur;
    }
  }

  kick(dest, t, gain) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.13);
    const g = ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + 0.35);
  }

  loop(buf) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf;
    s.loop = true;
    s.start(0, Math.random() * 1.5);
    return s;
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  suspend() {
    this.ctx?.suspend();
  }
  resume() {
    this.ctx?.resume();
  }

  // pan + distance gain for a world position
  spatial(x, z, ref = 60) {
    const L = this.listener;
    const dx = x - L.x, dz = z - L.z;
    const d = Math.hypot(dx, dz) || 1;
    const pan = Math.max(-1, Math.min(1, (dx * L.rx + dz * L.rz) / d));
    const gain = Math.min(1, ref / (ref + d));
    return { pan, gain };
  }

  out(gain = 1, pan = 0) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    g.gain.value = gain;
    if (pan && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      g.connect(p).connect(this.master);
    } else g.connect(this.master);
    return g;
  }

  noiseBurst({ dur = 0.2, type = 'bandpass', f0 = 1000, f1 = f0, q = 1, gain = 0.5, attack = 0.005, pan = 0, delay = 0 }) {
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.Q.value = q;
    f.frequency.setValueAtTime(f0, t);
    f.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.out(1, pan));
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.05);
  }

  tone({ dur = 0.2, type = 'sine', f0 = 440, f1 = f0, gain = 0.3, attack = 0.005, pan = 0, delay = 0 }) {
    const ctx = this.ctx;
    const t = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.out(1, pan));
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  play(name, o = {}) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    switch (name) {
      case 'web':
        this.noiseBurst({ dur: 0.16, type: 'bandpass', f0: 4200, f1: 1400, q: 2.5, gain: 0.45, pan: o.pan || 0 });
        this.tone({ dur: 0.12, type: 'triangle', f0: 1900, f1: 700, gain: 0.08, pan: o.pan || 0 });
        break;
      case 'zip':
        this.noiseBurst({ dur: 0.14, type: 'bandpass', f0: 4500, f1: 1600, q: 2.5, gain: 0.4 });
        this.tone({ dur: 0.35, type: 'sawtooth', f0: 180, f1: 900, gain: 0.05 });
        break;
      case 'taut':
        this.tone({ dur: 0.22, type: 'sine', f0: 95, f1: 55, gain: Math.min(0.5, 0.12 + o.amount * 0.012) });
        this.noiseBurst({ dur: 0.1, type: 'lowpass', f0: 900, f1: 200, gain: 0.15 });
        break;
      case 'land': {
        const a = Math.min(1, o.impact / 30);
        this.noiseBurst({ dur: 0.18 + a * 0.2, type: 'lowpass', f0: 600 + a * 400, f1: 80, gain: 0.15 + a * 0.5 });
        if (a > 0.6) this.tone({ dur: 0.3, f0: 70, f1: 40, gain: 0.4 });
        break;
      }
      case 'step':
        this.noiseBurst({ dur: 0.05, type: 'bandpass', f0: 1600, f1: 900, q: 1.5, gain: 0.07 + Math.random() * 0.03 });
        break;
      case 'whoosh':
        this.noiseBurst({ dur: 0.4, type: 'bandpass', f0: 350, f1: 1600, q: 1.2, gain: 0.25, attack: 0.12 });
        break;
      case 'jump':
        this.noiseBurst({ dur: 0.12, type: 'lowpass', f0: 900, f1: 300, gain: 0.12 });
        break;
      case 'perfect':
        this.tone({ dur: 0.18, type: 'triangle', f0: 880, gain: 0.12 });
        this.tone({ dur: 0.25, type: 'triangle', f0: 1320, gain: 0.12, delay: 0.07 });
        break;
      case 'chime':
        [523, 659, 784, 1047].forEach((f, i) => this.tone({ dur: 0.35, type: 'triangle', f0: f, gain: 0.16, delay: i * 0.09 }));
        break;
      case 'cash':
        this.tone({ dur: 0.08, type: 'square', f0: 1568, gain: 0.06 });
        this.tone({ dur: 0.25, type: 'square', f0: 2093, gain: 0.06, delay: 0.08 });
        break;
      case 'fail':
        [392, 330, 262].forEach((f, i) => this.tone({ dur: 0.3, type: 'triangle', f0: f, gain: 0.15, delay: i * 0.12 }));
        break;
      case 'pickup':
        this.tone({ dur: 0.15, type: 'sine', f0: 660, f1: 990, gain: 0.2 });
        break;
      case 'pop':
        this.noiseBurst({ dur: 0.08, type: 'highpass', f0: 2500, gain: 0.5 });
        this.tone({ dur: 0.3, type: 'sine', f0: 900, f1: 1800, gain: 0.1, delay: 0.03 });
        break;
      case 'splash':
        this.noiseBurst({ dur: 0.9, type: 'lowpass', f0: 2500, f1: 200, gain: 0.5, attack: 0.02 });
        break;
      case 'throw':
        this.noiseBurst({ dur: 0.22, type: 'bandpass', f0: 800, f1: 2400, q: 1.5, gain: 0.2, attack: 0.04 });
        break;
      case 'thud': {
        const s = this.spatial(o.x, o.z, 30);
        this.noiseBurst({ dur: 0.12, type: 'lowpass', f0: 1200, f1: 300, gain: 0.35 * s.gain, pan: s.pan });
        break;
      }
      case 'honk': {
        const s = this.spatial(o.x, o.z, 40);
        const f = 330 + Math.random() * 120;
        this.tone({ dur: 0.35, type: 'square', f0: f, gain: 0.07 * s.gain, pan: s.pan, attack: 0.02 });
        this.tone({ dur: 0.35, type: 'square', f0: f * 1.26, gain: 0.05 * s.gain, pan: s.pan, attack: 0.02 });
        break;
      }
      case 'birds':
        for (let i = 0; i < 8; i++) this.noiseBurst({ dur: 0.06, type: 'bandpass', f0: 1200, q: 2, gain: 0.12, delay: i * 0.05 + Math.random() * 0.03 });
        break;
      case 'boom': {
        const s = this.spatial(o.x, o.z, 400);
        this.noiseBurst({ dur: 1.4, type: 'lowpass', f0: 500, f1: 60, gain: 0.5 * s.gain, pan: s.pan, delay: 0.6 });
        break;
      }
      case 'click':
        this.tone({ dur: 0.05, type: 'triangle', f0: 1200, gain: 0.08 });
        break;
      case 'beep':
        this.tone({ dur: o.high ? 0.5 : 0.18, type: 'square', f0: o.high ? 1046 : 523, gain: 0.08 });
        break;
      case 'ring': {
        const f = 660 * Math.pow(2, Math.min(o.n || 0, 12) / 24);
        this.tone({ dur: 0.14, type: 'triangle', f0: f, gain: 0.14 });
        this.tone({ dur: 0.22, type: 'triangle', f0: f * 1.5, gain: 0.1, delay: 0.06 });
        break;
      }
      case 'miss':
        this.tone({ dur: 0.15, type: 'triangle', f0: 300, f1: 200, gain: 0.1 });
        break;
    }
  }

  // continuous layers
  update(dt, speed, altitude, state) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    this.scheduleMusic(dt);
    const t = this.ctx.currentTime;
    const s = Math.min(1, speed / 55);
    this.windGain.gain.setTargetAtTime(0.02 + s * s * 0.55, t, 0.15);
    this.windFilter.frequency.setTargetAtTime(250 + s * 1500, t, 0.15);
    this.whistleGain.gain.setTargetAtTime(Math.max(0, s - 0.55) * 0.25, t, 0.2);
    this.whistle.frequency.setTargetAtTime(1200 + s * 1400, t, 0.2);
    this.humGain.gain.setTargetAtTime(0.09 * Math.max(0.15, 1 - altitude / 160), t, 0.5);
    // distant city events
    this.hornTimer -= dt;
    if (this.hornTimer < 0) {
      this.hornTimer = 4 + Math.random() * 10;
      const a = Math.random() * 6.28;
      this.play('honk', { x: this.listener.x + Math.cos(a) * 120, z: this.listener.z + Math.sin(a) * 120 });
    }
    this.sirenTimer -= dt;
    if (this.sirenTimer < 0) {
      this.sirenTimer = 35 + Math.random() * 50;
      const pan = Math.random() * 2 - 1;
      for (let i = 0; i < 6; i++) {
        this.tone({ dur: 0.7, type: 'sine', f0: 650, f1: 1050, gain: 0.025, pan, delay: i * 0.75 });
      }
    }
  }
}
