// Collision world: axis-aligned boxes in a uniform XZ grid.
// Buildings in the city are axis aligned, which keeps raycasts and
// character collision fast and robust on phones.
import { CITY } from './config.js';

export class CollisionWorld {
  constructor(cellSize = 32) {
    this.cs = cellSize;
    this.boxes = [];
    this.cells = new Map();
    this.stamp = 1;
    this._q = [];
  }

  key(ix, iz) {
    return (ix + 2048) * 8192 + (iz + 2048);
  }

  addBox(minX, minY, minZ, maxX, maxY, maxZ, tag = null) {
    const b = { minX, minY, minZ, maxX, maxY, maxZ, tag, id: this.boxes.length, s: 0 };
    this.boxes.push(b);
    const cs = this.cs;
    const x0 = Math.floor(minX / cs), x1 = Math.floor(maxX / cs);
    const z0 = Math.floor(minZ / cs), z1 = Math.floor(maxZ / cs);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const k = this.key(ix, iz);
        let c = this.cells.get(k);
        if (!c) this.cells.set(k, (c = []));
        c.push(b);
      }
    }
    return b;
  }

  // Ground height at a horizontal position (null = over water).
  groundAt(x, z) {
    const s = CITY.SHORE;
    if (Math.abs(x) <= s && Math.abs(z) <= s) return 0;
    return null;
  }

  queryAABB(minX, minY, minZ, maxX, maxY, maxZ, out = this._q) {
    out.length = 0;
    const st = ++this.stamp;
    const cs = this.cs;
    const x0 = Math.floor(minX / cs), x1 = Math.floor(maxX / cs);
    const z0 = Math.floor(minZ / cs), z1 = Math.floor(maxZ / cs);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const c = this.cells.get(this.key(ix, iz));
        if (!c) continue;
        for (let i = 0; i < c.length; i++) {
          const b = c[i];
          if (b.s === st) continue;
          b.s = st;
          if (b.maxX > minX && b.minX < maxX && b.maxY > minY && b.minY < maxY && b.maxZ > minZ && b.minZ < maxZ) out.push(b);
        }
      }
    }
    return out;
  }

  // Ray vs boxes using a 2D DDA walk over grid cells.
  // Returns {t, x,y,z, nx,ny,nz, box} or null. dir must be normalised.
  raycast(ox, oy, oz, dx, dy, dz, maxT, hit = {}) {
    const cs = this.cs;
    let ix = Math.floor(ox / cs), iz = Math.floor(oz / cs);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tDeltaX = dx !== 0 ? Math.abs(cs / dx) : Infinity;
    const tDeltaZ = dz !== 0 ? Math.abs(cs / dz) : Infinity;
    let tMaxX = dx !== 0 ? ((dx > 0 ? (ix + 1) * cs - ox : ox - ix * cs) / Math.abs(dx)) : Infinity;
    let tMaxZ = dz !== 0 ? ((dz > 0 ? (iz + 1) * cs - oz : oz - iz * cs) / Math.abs(dz)) : Infinity;
    const st = ++this.stamp;
    let best = maxT, bestBox = null, bnx = 0, bny = 0, bnz = 0;
    const idx = dx !== 0 ? 1 / dx : Infinity, idy = dy !== 0 ? 1 / dy : Infinity, idz = dz !== 0 ? 1 / dz : Infinity;
    let tCell = 0;
    for (let guard = 0; guard < 256; guard++) {
      const c = this.cells.get(this.key(ix, iz));
      if (c) {
        for (let i = 0; i < c.length; i++) {
          const b = c[i];
          if (b.s === st) continue;
          b.s = st;
          // slab test
          let t1 = (b.minX - ox) * idx, t2 = (b.maxX - ox) * idx;
          let tmin = Math.min(t1, t2), tmax = Math.max(t1, t2);
          let nx = t1 < t2 ? -1 : 1, ny = 0, nz = 0;
          if (dx === 0) {
            if (ox < b.minX || ox > b.maxX) continue;
            tmin = -Infinity; tmax = Infinity; nx = 0;
          }
          let ty1 = (b.minY - oy) * idy, ty2 = (b.maxY - oy) * idy;
          if (dy === 0) {
            if (oy < b.minY || oy > b.maxY) continue;
            ty1 = -Infinity; ty2 = Infinity;
          }
          const tymin = Math.min(ty1, ty2), tymax = Math.max(ty1, ty2);
          if (tymin > tmin) { tmin = tymin; nx = 0; ny = ty1 < ty2 ? -1 : 1; nz = 0; }
          if (tymax < tmax) tmax = tymax;
          let tz1 = (b.minZ - oz) * idz, tz2 = (b.maxZ - oz) * idz;
          if (dz === 0) {
            if (oz < b.minZ || oz > b.maxZ) continue;
            tz1 = -Infinity; tz2 = Infinity;
          }
          const tzmin = Math.min(tz1, tz2), tzmax = Math.max(tz1, tz2);
          if (tzmin > tmin) { tmin = tzmin; nx = 0; ny = 0; nz = tz1 < tz2 ? -1 : 1; }
          if (tzmax < tmax) tmax = tzmax;
          if (tmax < tmin || tmin < 0 || tmin >= best) continue;
          best = tmin; bestBox = b; bnx = nx; bny = ny; bnz = nz;
        }
      }
      const tNext = Math.min(tMaxX, tMaxZ);
      if (bestBox && best <= tNext) break;
      tCell = tNext;
      if (tCell > maxT) break;
      if (tMaxX < tMaxZ) { ix += stepX; tMaxX += tDeltaX; } else { iz += stepZ; tMaxZ += tDeltaZ; }
    }
    if (!bestBox) return null;
    hit.t = best;
    hit.x = ox + dx * best; hit.y = oy + dy * best; hit.z = oz + dz * best;
    hit.nx = bnx; hit.ny = bny; hit.nz = bnz;
    hit.box = bestBox;
    return hit;
  }

  // Move an axis aligned body (centre pos, half extents hw/hh) by vel*dt,
  // resolving collisions axis by axis. Fills `c` with contact info.
  moveBody(pos, vel, dt, hw, hh, c) {
    c.ground = false; c.ceil = false; c.wall = false;
    c.wallNX = 0; c.wallNZ = 0; c.wallBox = null; c.groundBox = null;
    c.impactX = 0; c.impactY = 0; c.impactZ = 0;
    // X
    pos.x += vel.x * dt;
    this._resolve(pos, vel, hw, hh, 0, c);
    // Z
    pos.z += vel.z * dt;
    this._resolve(pos, vel, hw, hh, 2, c);
    // Y
    pos.y += vel.y * dt;
    this._resolve(pos, vel, hw, hh, 1, c);
    const g = this.groundAt(pos.x, pos.z);
    if (g !== null && pos.y - hh < g && pos.y - hh > g - 3) {
      if (vel.y < 0) c.impactY = Math.max(c.impactY, -vel.y);
      pos.y = g + hh;
      if (vel.y < 0) vel.y = 0;
      c.ground = true;
    }
    return c;
  }

  _resolve(pos, vel, hw, hh, axis, c) {
    const list = this.queryAABB(pos.x - hw, pos.y - hh, pos.z - hw, pos.x + hw, pos.y + hh, pos.z + hw);
    if (!list.length) return;
    for (let i = 0; i < list.length; i++) {
      const b = list[i];
      // re-check overlap since pos may have changed during this loop
      if (!(b.maxX > pos.x - hw && b.minX < pos.x + hw && b.maxY > pos.y - hh && b.minY < pos.y + hh && b.maxZ > pos.z - hw && b.minZ < pos.z + hw)) continue;
      if (axis === 0) {
        const pushNeg = b.minX - hw - pos.x; // move to -x side
        const pushPos = b.maxX + hw - pos.x; // move to +x side
        const goNeg = vel.x > 0 ? true : vel.x < 0 ? false : -pushNeg < pushPos;
        if (goNeg) { pos.x += pushNeg - 1e-4; c.wallNX = -1; } else { pos.x += pushPos + 1e-4; c.wallNX = 1; }
        c.impactX = Math.max(c.impactX, Math.abs(vel.x));
        vel.x = 0; c.wall = true; c.wallNZ = 0; c.wallBox = b;
      } else if (axis === 2) {
        const pushNeg = b.minZ - hw - pos.z;
        const pushPos = b.maxZ + hw - pos.z;
        const goNeg = vel.z > 0 ? true : vel.z < 0 ? false : -pushNeg < pushPos;
        if (goNeg) { pos.z += pushNeg - 1e-4; c.wallNZ = -1; } else { pos.z += pushPos + 1e-4; c.wallNZ = 1; }
        c.impactZ = Math.max(c.impactZ, Math.abs(vel.z));
        vel.z = 0; c.wall = true; c.wallNX = 0; c.wallBox = b;
      } else {
        const pushDown = b.minY - hh - pos.y;
        const pushUp = b.maxY + hh - pos.y;
        const goDown = vel.y > 0 ? true : vel.y < 0 ? false : -pushDown < pushUp;
        if (goDown) { pos.y += pushDown - 1e-4; c.ceil = true; }
        else { pos.y += pushUp + 1e-4; c.ground = true; c.groundBox = b; c.impactY = Math.max(c.impactY, Math.abs(vel.y)); }
        vel.y = 0;
      }
    }
  }

  // True if the AABB overlaps anything.
  overlaps(x, y, z, hw, hh) {
    return this.queryAABB(x - hw, y - hh, z - hw, x + hw, y + hh, z + hw).length > 0;
  }
}
