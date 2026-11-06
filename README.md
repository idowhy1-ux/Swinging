# Skyline Courier 🕸️🍕📰

An open-world **web-swinging** game for Android. Swing through a living city in
**first person** as a masked sky courier, run up and along skyscrapers, zip to
ledges, and earn cash doing **pizza deliveries** and **newspaper routes**.

The game is written in JavaScript with [three.js](https://threejs.org) and is
packaged as a native Android app, a full-screen hardware-accelerated WebView
wrapper. It runs offline with no internet permission and no downloaded assets.
Every model, texture and sound is generated in code.

## Install on your phone

1. Download **[`release/SkylineCourier.apk`](release/SkylineCourier.apk)** on your Android phone (Android 8.0+).
2. Open it. If asked, allow *Install unknown apps* for your browser or file manager.
3. Launch **Skyline Courier** and tap **PLAY**. Landscape is best.

## Features

**First-person web-swinging**
- Web lines are real pendulum constraints with gravity, air drag and momentum. They stick to actual building surfaces and wrap around corners they catch on.
- **Look to steer**: the swing curves toward where you look, so you can carve around corners. Hold SWING to cruise from web to web, or time your release at the top of the arc for a **PERFECT RELEASE** boost.
- **Web-zip**: press ZIP in mid-air to yank yourself forward for a burst of speed. On a ledge under your crosshair, ZIP pulls you there instead; JUMP as you land for a **point launch**.
- **Dive** (hold JUMP in the air) to build speed, then catch a web to turn the fall into forward speed.
- **The camera swings with you**: the whole view rotates with the pendulum (looking up on the upswing, down on the backswing, banking into turns) and follows your direction of travel. Adjustable in Settings (Off / Normal / Strong).
- Full-body first-person feel: IK arms with articulated fingers grab the web, plant on walls and pump as you run; look down to see your legs running, dangling on a swing or tucking into flips. Plus head bob, landing dips, FOV kicks and speed blur.

**Air tricks**
- A **TRICK** button that lights up only in the air (pressing it mid-swing lets go of the web first).
- The stick picks the trick: forward = **front flip**, back = **backflip**, sideways = **barrel roll**, no stick = **360 spin, Superman, Starfish, Cannonball, Corkscrew, Twister**.
- Every trick has its own camera move plus arm and leg animation. Chain tricks in one jump for multipliers (DOUBLE / TRIPLE …), but land mid-trick and you **bail**.

**Realistic hero**
- Anatomically shaped limbs lofted from cross-sections, hands with jointed fingers and knuckle guards, a fabric suit with seams and accent stripes, a glossy full-face helmet with a mirrored visor, pads, sneakers and a courier bag, all with physically based materials and reflections.
- Shown in full on the title screen; in first person you see the arms, hands and legs.

**Wall-running**
- Run or swing into a building to stick to it. Look where you want to go: up the wall, sideways along it, or down. Entry speed carries over.
- Run around **outside corners** and turn at **inside corners** without falling off.
- **JUMP** kicks off toward where you look (wall-to-wall jumps). Sprint up a wall and you fly off the top; JUMP right as you clear a ledge for a **ledge launch**.

**Realistic city rendering**
- Real-time sun shadows from every building, tree and rooftop prop.
- Interior-mapped windows, so you see actual rooms with furniture behind the glass, lit up at night. Fresnel sky reflections and sun glints on glass towers.
- Brick, concrete and glass facades with ledges, cornices, window frames, sills and rain streaks.
- Height fog with sun-scattered golden haze, a sky with lit clouds, HDR bloom on lights, filmic tone mapping and color grading.
- Graphics presets (Low / Medium / High) plus automatic resolution scaling, so it stays smooth on slower phones.

**A city that's alive**
- A 1.3 km procedural island city with a downtown skyline, a landmark 300 m tower, parks, plazas, a waterfront and a suspension bridge.
- Traffic with buses and taxis that obeys lights, turns at intersections, and stops and honks if you stand in the road.
- Pedestrians walk the sidewalks and cheer when you land near them. Pigeons scatter, a news helicopter circles (with a spotlight at night), and there's a blimp and boats in the bay.
- Smooth vehicle models (sedans, hatchbacks, SUVs, taxis, vans, buses) with wheel arches, glass cabins, rims and lights. Pedestrians with natural proportions, hair and shoes.
- Iron fire escapes on brick walk-ups, rooftop solar arrays, gardens, helipads and satellite dishes, layered tree canopies, plus web splats left on walls where your lines stick.
- Street furniture: hydrants, trash cans, mailboxes, news boxes, benches.
- A full day/night cycle with lit windows, street lights, glowing storefronts, and fireworks over the bay at night.
- 40 hidden 🎈 balloons to collect.

**Swing races**
- Four checkpoint courses: **Avenue Sprint** (easy), **Downtown Slalom**, **Park Loop** and the **Tower Dive**, which starts on the 300 m tower's observation deck and spirals down around it.
- 3-2-1 countdown, live timer, gold/silver/bronze medal times, saved best times and a Retry button. Looking at the next ring and pressing ZIP web-zips you straight through it.

**Adaptive music**
- A procedural soundtrack that follows the action: pads when you walk, then bass, beats and finally full drums with an echoing arpeggio when you swing at speed. It has its own volume slider.

**Delivery jobs**
- 🍕 **Pizza delivery** (3 pizza shops): deliver 1–3 orders to rooftops or front doors before time runs out. Hard crashes ruin the pizza.
- 📰 **Newspaper routes** (2 newsstands): throw papers at doorsteps and rooftops as you swing past. Throws auto-aim, with bonuses for bullseyes and streaks.
- Earnings buy upgrades (web range, swing power, zip speed) and suits. Progress saves automatically.

## Controls

| Touch (Android) | Keyboard / mouse | Action |
|---|---|---|
| Drag on left side | WASD | Move / steer swings |
| Drag on right side | Mouse | Look around |
| Hold **SWING** (slide finger to look/steer) | Hold Left-click / Shift | Shoot web & swing (release to let go) |
| **JUMP** | Space | Jump, wall-jump (toward where you look), leap off a swing, ledge launch |
| Hold **JUMP** in the air | Hold Space | Dive |
| Tap **JUMP** in the air | Tap Space | Trick |
| **ZIP** | E | Zip to the targeted ledge, or web-zip boost in mid-air |
| **TRICK** (in the air) + stick direction | T (+ WASD) | Flips, rolls, spins and poses |
| **THROW** | F | Throw a newspaper (on a route) |
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
  camera.js        first-person camera, swing tilt, trick moves, IK arms + legs
  body.js          realistic procedural hero model, suit materials
  tricks.js        air trick definitions
  character.js     hero blob shadow (legacy body model)
  web.js           web line rendering (shoot, taut/slack, dangling strands)
  traffic.js       cars, buses, traffic lights
  pedestrians.js   crowds (GPU-animated limbs)
  ambient.js       birds, helicopter, blimp, boats
  jobs.js          pizza deliveries + newspaper routes
  races.js         swing race courses, rings, medals
  vehicles.js      smooth car / van / bus models
  collectibles.js  balloons
  effects.js       particles, fireworks, speed lines
  audio.js         procedural WebAudio sound effects
  hud.js           HUD, minimap, objective markers
  sky.js           sky dome + day/night lighting
  shadows.js       static sun shadow map
  post.js          bloom, tone mapping, speed blur, arm depth pass
www/               index.html (UI) + built game.js — shipped inside the APK
android/           native Android wrapper (WebView, immersive full-screen)
release/           prebuilt APK
```
