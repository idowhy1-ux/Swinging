// Air tricks. Each trick drives the first-person camera (flips, rolls,
// spins) plus arm and leg poses. Direction + TRICK picks the trick.
const TAU = Math.PI * 2;
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const bump = (t) => Math.sin(Math.min(1, Math.max(0, t)) * Math.PI);

export const TRICKS = {
  frontflip: { name: 'FRONT FLIP', dur: 0.72, pts: 60, cam: (t) => ({ pitch: -TAU * ease(t) }), pose: 'tuck' },
  backflip: { name: 'BACKFLIP', dur: 0.78, pts: 70, cam: (t) => ({ pitch: TAU * ease(t) }), pose: 'arch' },
  rollL: { name: 'BARREL ROLL', dur: 0.62, pts: 50, cam: (t) => ({ roll: TAU * ease(t) }), pose: 'spread' },
  rollR: { name: 'BARREL ROLL', dur: 0.62, pts: 50, cam: (t) => ({ roll: -TAU * ease(t) }), pose: 'spread' },
  spin: { name: '360 SPIN', dur: 0.62, pts: 45, cam: (t) => ({ yaw: TAU * ease(t) }), pose: 'spin' },
  superman: { name: 'SUPERMAN', dur: 0.95, pts: 55, cam: (t) => ({ pitch: -0.22 * bump(t), fov: 9 * bump(t) }), pose: 'superman' },
  starfish: { name: 'STARFISH', dur: 0.85, pts: 40, cam: (t) => ({ roll: Math.sin(t * TAU * 2) * 0.16 * bump(t), pitch: 0.12 * bump(t) }), pose: 'starfish' },
  cannonball: { name: 'CANNONBALL', dur: 0.8, pts: 45, cam: (t) => ({ pitch: -0.5 * bump(t), roll: Math.sin(t * TAU) * 0.1 }), pose: 'cannonball' },
  corkscrew: { name: 'CORKSCREW', dur: 0.9, pts: 90, cam: (t) => ({ roll: -TAU * ease(t), yaw: TAU * ease(t), pitch: -0.3 * bump(t) }), pose: 'tuck' },
  twister: { name: 'TWISTER', dur: 0.8, pts: 75, cam: (t) => ({ yaw: -TAU * 2 * ease(t) }), pose: 'spin' },
};
export const NEUTRAL = ['spin', 'superman', 'starfish', 'cannonball', 'corkscrew', 'twister'];

// Leg poses for the first-person body (joint eulers), blended by trick envelope.
export const LEG_POSES = {
  tuck: { spine: [0.6], hipL: [-2.0, 0, 0.15], knL: [2.4], anL: [0.4], hipR: [-2.0, 0, -0.15], knR: [2.4], anR: [0.4] },
  arch: { spine: [-0.35], hipL: [0.5, 0, 0.1], knL: [1.3], anL: [0.5], hipR: [0.45, 0, -0.1], knR: [1.2], anR: [0.5] },
  spread: { spine: [0], hipL: [-0.2, 0, 0.35], knL: [0.4], anL: [0.2], hipR: [-0.2, 0, -0.35], knR: [0.4], anR: [0.2] },
  spin: { spine: [0.1], hipL: [-0.1, 0, 0.08], knL: [0.25], anL: [0.3], hipR: [-0.1, 0, -0.08], knR: [0.25], anR: [0.3] },
  superman: { spine: [-0.1], hipL: [0.35, 0, 0.05], knL: [0.1], anL: [0.6], hipR: [0.35, 0, -0.05], knR: [0.1], anR: [0.6] },
  starfish: { spine: [-0.1], hipL: [-0.2, 0, 0.75], knL: [0.15], anL: [0.2], hipR: [-0.2, 0, -0.75], knR: [0.15], anR: [0.2] },
  cannonball: { spine: [0.7], hipL: [-2.2, 0, 0.05], knL: [2.5], anL: [0.5], hipR: [-2.2, 0, -0.05], knR: [2.5], anR: [0.5] },
};

// First-person hand targets (camera space) per trick pose: [x, y, z, curl] for side +1 (right)
export function trickHands(pose, t, side) {
  const b = bump(t);
  switch (pose) {
    case 'tuck': return [side * 0.16, -0.36 - b * 0.12, -0.36, 0.95];
    case 'cannonball': return [side * 0.13, -0.42 - b * 0.08, -0.3, 1];
    case 'arch': return [side * 0.3, -0.15 + b * 0.42, -0.4, 0.2];
    case 'spread': return [side * 0.56, -0.06, -0.24, 0.1];
    case 'spin': return [side * 0.58, -0.12 + Math.sin(t * 12) * 0.02, -0.2, 0.1];
    case 'superman': return [side * 0.1, -0.08 + b * 0.04, -0.6, 1];
    case 'starfish': return [side * 0.55, 0.12 * b, -0.3, 0.0];
    default: return [side * 0.3, -0.3, -0.35, 0.5];
  }
}
export { bump, ease };
