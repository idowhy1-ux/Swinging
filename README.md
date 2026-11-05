# Skyline Courier 🕸️🍕📰

An open-world **web-swinging** game for Android. Swing through a living city as a
masked sky courier, run up skyscrapers, zip to ledges, and earn cash doing
**pizza deliveries** and **newspaper routes**. Switch between **first-person and
third-person** at any time.

The game is written in JavaScript with [three.js](https://threejs.org) and is
packaged as a native Android app, a full-screen hardware-accelerated WebView
wrapper. It runs offline with no internet permission and no downloaded assets.
Every model, texture and sound is generated in code.

## Install on your phone

1. Download **[`release/SkylineCourier.apk`](release/SkylineCourier.apk)** on your Android phone (Android 8.0+).
2. Open it. If asked, allow *Install unknown apps* for your browser or file manager.
3. Launch **Skyline Courier** and tap **PLAY**. Landscape is best.

## Features

**Swinging that feels physical**
- Web lines are real pendulum constraints with gravity, air drag and momentum. Webs stick to actual building surfaces, and wrap around corners they catch on.
- Swing speed depends on where you anchor and when you let go. Release near the top of the arc for a **PERFECT RELEASE** boost.
- **Hold-to-cruise**: keep holding SWING and webs chain automatically. You can turn this off in Settings for fully manual swinging.
- **Wall-running**: run or swing into a building to sprint straight up it, then vault over the roof edge or wall-jump off.
- **Point-zip** to the ledge under your crosshair. Press JUMP as you land for a **point launch**.
- **Dive** (hold JUMP in the air) to build speed, then catch yourself with a web to turn the fall into forward speed.
- Air tricks, flips, landing rolls, and a style/combo system that pays out tips.

**First- and third-person**
- Third-person: a collision-aware orbit camera that follows your swings, with speed-based FOV, camera roll and speed lines.
- First-person: your arms aim at the web anchor, the view bobs as you run, and the camera rolls with the swing. Switch with the 👁 button (or **V**), with a smooth transition.

**A city that's alive**
- A 1.3 km procedural island city with a downtown skyline, a landmark 300 m tower, parks, plazas, a waterfront and a suspension bridge.
- Traffic with buses and taxis that obeys traffic lights, turns at intersections, keeps its distance, and stops and honks if you stand in the road.
- Pedestrians walk the sidewalks, cheer and jump when you land near them, and dodge you when you sprint past.
- Pigeon flocks scatter as you swing through, a news helicopter circles (with a spotlight at night), plus an advertising blimp and boats in the bay.
- A full day/night cycle with sunsets, stars, lit windows, street lights, glowing storefronts, and fireworks over the bay at night.
- 40 hidden 🎈 balloons to collect.

**Delivery jobs**
- 🍕 **Pizza delivery** (3 pizza shops): pick up 1–3 orders and deliver to rooftops or front doors before the timer runs out. Hard crashes ruin the pizza, and customers tip for speed and condition.
- 📰 **Newspaper routes** (2 newsstands): throw papers at subscribers' doorsteps and rooftops while you swing past. THROW auto-aims, with bonuses for bullseyes and streaks.
- Spend earnings on upgrades (web range, swing power, zip speed) and new suits.
- Progress saves automatically.

## Controls

| Touch (Android) | Keyboard / mouse | Action |
|---|---|---|
| Drag on left side | WASD | Move / steer swings |
| Drag on right side | Mouse | Look around |
| Hold **SWING** (slide finger to steer camera) | Hold Left-click / Shift | Shoot web & swing (release to let go) |
| **JUMP** | Space | Jump, wall-jump, leap off a swing |
| Hold **JUMP** in the air | Hold Space | Dive |
| Tap **JUMP** in the air | Tap Space | Trick |
| **ZIP** | E | Zip to the targeted ledge |
| **THROW** | F | Throw a newspaper (on a route) |
| 👁 | V | First / third person |
| Minimap | M | City map |
| Start-job button | Enter | Start a delivery in a 🍕/📰 ring |
| ⏸ / Back button | Esc | Pause, shop, settings |

## Build from source

Requirements: Node.js 18+, and the Android SDK (or Android Studio) for the APK.

```bash
npm install
npm run build          # bundles src/ -> www/game.js

# play in a desktop browser while developing
npm run dev            # http://localhost:8080 (rebuilds on save)

# build the Android APK
cd android
./gradlew assembleRelease   # -> app/build/outputs/apk/release/app-release.apk
```

You can also open the `android/` folder in Android Studio and press **Run**. The
APK uses the game files in `www/` as its assets, so run `npm run build` after
changing anything in `src/`.

> The release build is signed with the local debug key so it installs directly.
> Add your own signing config in `android/app/build.gradle` before publishing to
> Google Play.

## Project layout

```
src/
  main.js          game loop, menus, saving, wiring
  player.js        movement state machine + swing/wall-run/zip physics
  world.js         collision world (AABB grid, raycasts, body movement)
  city.js          procedural city, building/road/water shaders, props, bridge
  camera.js        third-person + first-person cameras, viewmodel arms
  character.js     procedural hero model and animation
  web.js           web line rendering (shoot, taut/slack, dangling strands)
  traffic.js       cars, buses, traffic lights
  pedestrians.js   crowds (GPU-animated limbs)
  ambient.js       birds, helicopter, blimp, boats
  jobs.js          pizza deliveries + newspaper routes
  collectibles.js  balloons
  effects.js       particles, fireworks, speed lines
  audio.js         procedural WebAudio sound effects
  hud.js           HUD, minimap, objective markers
  sky.js           sky dome + day/night lighting
www/               index.html (UI) + built game.js — shipped inside the APK
android/           native Android wrapper (WebView, immersive full-screen)
release/           prebuilt APK
```
