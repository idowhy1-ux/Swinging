// Global tuning values. Units are meters and seconds.
export const CITY = {
  N: 12, // blocks per side
  ROAD: 18, // road width (curb to curb)
  BLOCK: 92, // block size including sidewalks
  SIDEWALK: 5,
  SEED: 20261105,
};
CITY.PITCH = CITY.BLOCK + CITY.ROAD; // distance between road centerlines
CITY.HALF = (CITY.N * CITY.PITCH) / 2; // road centerline of the outer ring road
CITY.EDGE = CITY.HALF + CITY.ROAD / 2; // outer curb of the ring road
CITY.SHORE = CITY.EDGE + 28; // waterfront railing
CITY.WATER_Y = -2.5;

export const PHYS = {
  GRAVITY: 24,
  DRAG: 0.0032, // quadratic air drag coefficient
  DIVE_DRAG: 0.0016,
  MAX_SPEED: 80,
  RUN: 8.5,
  SPRINT: 13,
  GROUND_ACCEL: 12,
  AIR_ACCEL: 7,
  JUMP: 11.5,
  ROPE_MAX: 85,
  ROPE_MIN: 6,
  SWING_ASSIST: 4.5,
  SWING_STEER: 9,
  ZIP_SPEED: 48,
  WALL_RUN: 11,
  HALF_W: 0.32,
  HALF_H: 0.9,
};

// Upgrade tables (index = level).
export const UPGRADES = {
  range: { name: 'Web Range', desc: 'Longer web lines', values: [85, 97, 110, 124], prices: [150, 320, 650] },
  power: { name: 'Swing Power', desc: 'More momentum per swing', values: [4.5, 6, 7.5, 9], prices: [200, 420, 800] },
  zip: { name: 'Zip Speed', desc: 'Faster point-zips', values: [48, 58, 68, 80], prices: [150, 320, 650] },
};

export const SUITS = [
  { id: 'courier', name: 'Courier', price: 0, main: 0x343a4a, accent: 0xff7a1a, visor: 0x38e8ff },
  { id: 'midnight', name: 'Midnight', price: 250, main: 0x101a3a, accent: 0x9fb4ff, visor: 0xfff07a },
  { id: 'lime', name: 'Neon Lime', price: 400, main: 0x1d1f1c, accent: 0xa6ff2e, visor: 0xff3ad0 },
  { id: 'arctic', name: 'Arctic', price: 600, main: 0xe9eef2, accent: 0x2aa7ff, visor: 0x1a1a1a },
  { id: 'gold', name: 'Gold Rush', price: 1200, main: 0x2a1d0c, accent: 0xffc531, visor: 0xffffff },
];
