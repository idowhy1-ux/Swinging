// Persistent progress (localStorage; works in the Android WebView too).
const KEY = 'skylineCourier.save.v1';

export const DEFAULT_SAVE = {
  money: 0,
  upgrades: { range: 0, power: 0, zip: 0 },
  suits: ['courier'],
  suit: 'courier',
  balloons: [],
  stats: { pizzas: 0, papers: 0, jobs: 0, bestCombo: 0, styleTips: 0 },
  tips: 0,
  settings: { quality: 'med', sens: 1, invert: false, chain: true, vol: 0.8, vib: true, fps: false, cam: 'third' },
};

export function loadSave() {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch (e) {
    data = {};
  }
  const d = JSON.parse(JSON.stringify(DEFAULT_SAVE));
  return {
    ...d,
    ...data,
    upgrades: { ...d.upgrades, ...(data.upgrades || {}) },
    stats: { ...d.stats, ...(data.stats || {}) },
    settings: { ...d.settings, ...(data.settings || {}) },
  };
}

export function writeSave(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch (e) {
    /* storage may be unavailable (private mode); progress just won't persist */
  }
}
