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
      case 'miss':
        this.tone({ dur: 0.15, type: 'triangle', f0: 300, f1: 200, gain: 0.1 });
        break;
    }
  }

  // continuous layers
  update(dt, speed, altitude, state) {
    if (!this.ctx || this.ctx.state !== 'running') return;
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
