// Shared lighting environment + custom materials.
// Every custom shader reads the same uniform objects, so the day/night
// system updates the whole city by touching these values once per frame.
import * as THREE from 'three';

export const env = {
  uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.3).normalize() },
  uSunColor: { value: new THREE.Color(1, 0.95, 0.85) },
  uSkyAmb: { value: new THREE.Color(0.45, 0.5, 0.6) },
  uGroundAmb: { value: new THREE.Color(0.28, 0.26, 0.24) },
  uFogColor: { value: new THREE.Color(0.7, 0.8, 0.9) },
  uFogDensity: { value: 0.0011 },
  uNight: { value: 0 },
  uTime: { value: 0 },
};

export const LIGHT_CHUNK = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uNight;
uniform float uTime;
vec3 applyLight(vec3 albedo, vec3 n) {
  float ndl = max(dot(n, uSunDir), 0.0);
  vec3 amb = mix(uGroundAmb, uSkyAmb, n.y * 0.5 + 0.5);
  return albedo * (amb + uSunColor * ndl);
}
vec3 applyFog(vec3 col, vec3 wp) {
  float d = length(wp - cameraPosition);
  float f = 1.0 - exp(-uFogDensity * uFogDensity * d * d);
  return mix(col, uFogColor, clamp(f, 0.0, 1.0));
}
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise2(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
`;

// Generic instanced (or plain) lit material using per-vertex colour (aColor)
// and per-vertex emissive strength (aEmit).
export function makeLitMaterial({ emitDay = 0.35, emitNight = 1.4, side = THREE.FrontSide, transparent = false, opacity = 1, tintMask = false } = {}) {
  return new THREE.ShaderMaterial({
    defines: tintMask ? { TINT_MASK: 1 } : {},
    uniforms: {
      ...env,
      uEmitDay: { value: emitDay },
      uEmitNight: { value: emitNight },
      uOpacity: { value: opacity },
    },
    side,
    transparent,
    vertexShader: /* glsl */ `
      attribute vec3 aColor;
      attribute float aEmit;
      #ifdef TINT_MASK
        attribute float aTint;
      #endif
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      varying float vEmit;
      void main() {
        vec4 p = vec4(position, 1.0);
        vec3 n = normal;
        #ifdef USE_INSTANCING
          p = instanceMatrix * p;
          n = mat3(instanceMatrix) * n;
        #endif
        vec4 wp = modelMatrix * p;
        vWorld = wp.xyz;
        vNormal = normalize(mat3(modelMatrix) * n);
        vColor = aColor;
        #ifdef USE_INSTANCING_COLOR
          #ifdef TINT_MASK
            vColor *= mix(vec3(1.0), instanceColor, aTint);
          #else
            vColor *= instanceColor;
          #endif
        #endif
        vEmit = aEmit;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,
    fragmentShader: /* glsl */ `
      ${LIGHT_CHUNK}
      uniform float uEmitDay;
      uniform float uEmitNight;
      uniform float uOpacity;
      varying vec3 vColor;
      varying vec3 vNormal;
      varying vec3 vWorld;
      varying float vEmit;
      void main() {
        vec3 n = normalize(vNormal);
        if (!gl_FrontFacing) n = -n;
        vec3 col = applyLight(vColor, n);
        col += vColor * vEmit * mix(uEmitDay, uEmitNight, uNight);
        col = applyFog(col, vWorld);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,
  });
}
