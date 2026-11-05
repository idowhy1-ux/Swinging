// Shared lighting environment + custom materials.
// Every custom shader reads the same uniform objects, so the day/night
// system (and the shadow map) update the whole city by touching these once.
import * as THREE from 'three';

export const env = {
  uSunDir: { value: new THREE.Vector3(0.4, 0.8, 0.3).normalize() },
  uSunColor: { value: new THREE.Color(1, 0.95, 0.85) },
  uSkyAmb: { value: new THREE.Color(0.45, 0.5, 0.6) },
  uGroundAmb: { value: new THREE.Color(0.28, 0.26, 0.24) },
  uFogColor: { value: new THREE.Color(0.7, 0.8, 0.9) },
  uZenith: { value: new THREE.Color(0.3, 0.5, 0.8) },
  uFogDensity: { value: 0.0011 },
  uNight: { value: 0 },
  uTime: { value: 0 },
  // static sun shadow map (see shadows.js)
  uShadowMap: { value: null },
  uShadowMatrix: { value: new THREE.Matrix4() },
  uShadowOn: { value: 0 },
  uShadowCenter: { value: new THREE.Vector3() },
  uShadowRadius: { value: 200 },
  uShadowTexel: { value: new THREE.Vector2(1 / 1024, 1 / 1024) },
  uInterior: { value: 1 },
};

export const LIGHT_CHUNK = /* glsl */ `
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform vec3 uFogColor;
uniform vec3 uZenith;
uniform float uFogDensity;
uniform float uNight;
uniform float uTime;
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform float uShadowOn;
uniform vec3 uShadowCenter;
uniform float uShadowRadius;
uniform vec2 uShadowTexel;
uniform float uInterior;

// 1 = lit by the sun, 0 = in shadow. 2x2 PCF with a normal offset.
float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  float d = length(wp.xz - uShadowCenter.xz);
  if (d > uShadowRadius) return 1.0;
  vec4 sc = uShadowMatrix * vec4(wp + n * 0.3, 1.0);
  vec3 c = sc.xyz;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float z = c.z - 0.00012;
  float s = step(z, texture2D(uShadowMap, c.xy + vec2(-0.7, -0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(0.7, -0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(-0.7, 0.7) * uShadowTexel).r)
          + step(z, texture2D(uShadowMap, c.xy + vec2(0.7, 0.7) * uShadowTexel).r);
  s *= 0.25;
  return mix(s, 1.0, smoothstep(uShadowRadius * 0.78, uShadowRadius, d));
}
vec3 applyLightS(vec3 albedo, vec3 n, float sh) {
  float ndl = max(dot(n, uSunDir), 0.0) * sh;
  vec3 amb = mix(uGroundAmb, uSkyAmb, n.y * 0.5 + 0.5);
  // a little sky bounce is blocked in shadowed areas too (cheap AO feel)
  amb *= mix(0.82, 1.0, sh);
  return albedo * (amb + uSunColor * ndl * 1.12);
}
vec3 applyLight(vec3 albedo, vec3 n) { return applyLightS(albedo, n, 1.0); }

// Colour of the sky in a direction (used for glass / water reflections).
vec3 skyColor(vec3 d) {
  float y = max(d.y, 0.0);
  vec3 c = mix(uFogColor, uZenith, pow(y, 0.55));
  float s = max(dot(d, uSunDir), 0.0);
  c += uSunColor * pow(s, 8.0) * 0.35 * (1.0 - uNight);
  return c;
}

// Exponential height fog with sun scattering (golden haze toward the sun).
vec3 applyFog(vec3 col, vec3 wp) {
  vec3 dv = wp - cameraPosition;
  float dist = length(dv);
  float k = 0.011;
  float h0 = max(cameraPosition.y, 0.0);
  float dh = dv.y;
  float hf = exp(-k * h0) * (abs(dh) > 0.5 ? (1.0 - exp(-k * dh)) / (k * dh) : 1.0);
  float b = uFogDensity * dist;
  float f = 1.0 - exp(-b * b * 0.5 - b * 1.15 * clamp(hf, 0.0, 1.5));
  vec3 V = dv / max(dist, 1e-3);
  float sun = pow(max(dot(V, uSunDir), 0.0), 7.0);
  vec3 fc = uFogColor + uSunColor * sun * 0.5 * (1.0 - uNight);
  return mix(col, fc, clamp(f, 0.0, 1.0));
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
// and per-vertex emissive strength (aEmit). Receives sun shadows.
export function makeLitMaterial({ emitDay = 0.35, emitNight = 1.4, side = THREE.FrontSide, transparent = false, opacity = 1, tintMask = false, shadows = true } = {}) {
  return new THREE.ShaderMaterial({
    defines: { ...(tintMask ? { TINT_MASK: 1 } : {}), ...(shadows ? { RECEIVE_SHADOW: 1 } : {}) },
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
        float sh = 1.0;
        #ifdef RECEIVE_SHADOW
          sh = shadowAt(vWorld, n);
        #endif
        vec3 col = applyLightS(vColor, n, sh);
        col += vColor * vEmit * mix(uEmitDay, uEmitNight, uNight);
        col = applyFog(col, vWorld);
        gl_FragColor = vec4(col, uOpacity);
      }
    `,
  });
}
