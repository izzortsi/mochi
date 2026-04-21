"use client";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

/*
 * Intro scene — a hushed post-apocalyptic vigil.
 *
 * Animated layers (stars, galaxy, smoke, embers, campfire) are generated
 * procedurally at module load — 15 deterministic frames each — so we get
 * organic motion without hand-typing hundreds of art arrays.
 *
 * Per-layer techniques:
 *   - stars:    seeded random subset of fixed candidate positions twinkle
 *   - galaxy:   parametric spiral, base angle advances one full turn per cycle
 *   - smoke:    particle streams that rise + drift sideways, cycling char glyphs
 *   - embers:   same as smoke but with brighter chars and outward drift
 *   - campfire: Doom-fire heat propagation up a 22×11 grid, glyphs
 *               (` ` `.` `'` `*` `(` `@`) chosen by heat value. Static logs
 *               + ember row anchored beneath. Then sliced into 8 vertical
 *               color zones (sparks → yellow → amber → orange → red →
 *               embers → glowing logs → log shadow) so the heat gradient
 *               also reads as a color gradient.
 *
 *   z-order (back → front):
 *     sky · stars · galaxy · mountains · smoke · figures · fire (8 zones) ·
 *     embers · ground
 */

const COLS = 100;
const ROWS = 36;
const ROW_PX = 12;
const TICK_MS = 180;
const FRAMES = 15;

// ---------------------------------------------------------------------------
// PRNG (mulberry32) — deterministic, fast, good-enough distribution
// ---------------------------------------------------------------------------

function rng(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function blank(rows: number, cols: number): string[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(" "));
}

function joinPad(grid: string[][], leftPad = 0): string[] {
  return grid.map((r) => {
    const s = " ".repeat(leftPad) + r.join("");
    return s.length >= COLS ? s.slice(0, COLS) : s + " ".repeat(COLS - s.length);
  });
}

// ---------------------------------------------------------------------------
// Sky (static)
// ---------------------------------------------------------------------------

const SKY_BASE = [
  "   .         '       .            '       .            '       .            '       .            ' ",
  "       '       .         '       .       '       .       .       '       .       '       .       .",
  "   .       '       .       '       .       '       .       '       .       '       .       '      ",
  "       .       '       .       '       .       '       .       '       .       '       .       '  ",
  "   '       .       '       .       '       .       '       .       '       .       '       .      ",
  "       .       '       .       '       .       '       .       '       .       '       .       '  ",
  "   .       '       .       '       .       '       .       '       .       '       .       '      ",
  "       '       .       '       .       '       .       '       .       '       .       '       .  ",
  "   .       '       .       '       .       '       .       '       .       '       .       '      ",
  "       .       '       .       '       .       '       .       '       .       '       .       '  ",
  "   '       .       '       .       '       .       '       .       '       .       '       .      ",
];

// ---------------------------------------------------------------------------
// Stars — a small, FIXED constellation, plus a sparse twinkle.
//   STAR_FIELD is rendered once (every star always present) at low brightness
//   so the sky reads as still. TWINKLE picks ONE star per frame to flare
//   warm-bright; the other 14 frames the picked star fades back into the
//   field, so at most one pinpoint pulses at any moment.
// ---------------------------------------------------------------------------

const STAR_POSITIONS: ReadonlyArray<readonly [number, number]> = [
  [0, 18], [0, 64],
  [1, 36], [1, 88],
  [2, 11], [2, 52],
  [3, 27], [3, 75],
  [5, 8],  [5, 60], [5, 92],
  [7, 31], [7, 78],
  [9, 22], [9, 56],
];

const STAR_FIELD: string[] = (() => {
  const grid = blank(11, COLS);
  for (const [row, col] of STAR_POSITIONS) grid[row][col] = "*";
  return grid.map((row) => row.join(""));
})();

function makeTwinkleFrame(t: number): string[] {
  const grid = blank(11, COLS);
  // Cycle through positions deterministically; one bright star per frame.
  const pick = STAR_POSITIONS[t % STAR_POSITIONS.length];
  grid[pick[0]][pick[1]] = "*";
  return grid.map((row) => row.join(""));
}

const TWINKLE = Array.from({ length: FRAMES }, (_, i) => makeTwinkleFrame(i));

// ---------------------------------------------------------------------------
// Galaxy — parametric spiral; base angle advances over the cycle
// ---------------------------------------------------------------------------

function makeGalaxyFrame(t: number): string[] {
  const grows = 8;
  const gcols = 32;
  const grid = blank(grows, gcols);
  const cx = gcols / 2;
  const cy = grows / 2 - 0.5;

  // Bright nucleus (small @ cluster)
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -3; dx <= 3; dx++) {
      const e = (dx * dx) / 9 + (dy * dy) / 1; // ellipse
      if (e <= 1) {
        const gr = Math.round(cy + dy);
        const gc = Math.round(cx + dx);
        if (gr >= 0 && gr < grows && gc >= 0 && gc < gcols) grid[gr][gc] = "@";
      }
    }
  }

  // Two spiral arms, full rotation per cycle
  const baseAngle = (t / FRAMES) * Math.PI * 2;
  for (let arm = 0; arm < 2; arm++) {
    const offset = arm * Math.PI;
    for (let r = 1.5; r < 18; r += 0.35) {
      const θ = baseAngle + offset + r * 0.34;
      const x = cx + r * 0.85 * Math.cos(θ);
      const y = cy + r * 0.42 * Math.sin(θ); // squashed disc
      const gr = Math.round(y);
      const gc = Math.round(x);
      if (gr < 0 || gr >= grows || gc < 0 || gc >= gcols) continue;
      if (grid[gr][gc] !== " ") continue;
      grid[gr][gc] = r < 5 ? "*" : r < 10 ? "'" : ".";
    }
  }

  return joinPad(grid, 64);
}

const GALAXY = Array.from({ length: FRAMES }, (_, i) => makeGalaxyFrame(i));

// ---------------------------------------------------------------------------
// Distant mountains (static)
// ---------------------------------------------------------------------------

const MOUNTAINS = [
  "                            ___                                              _____                  ",
  "                       ___/   \\____                            ___          /     \\__               ",
  "          ____________/             \\___        ______________/   \\________/         \\______       ",
  "____.----'                              `------'                                            `------.",
];

// ---------------------------------------------------------------------------
// Smoke — drifting particle streams above the fire
// ---------------------------------------------------------------------------

const SMOKE_STREAMS = [
  { col: 50, drift: 0.30, period: 7,  chars: "'~'`" },
  { col: 48, drift: 0.40, period: 9,  chars: "~'`'" },
  { col: 52, drift: 0.50, period: 8,  chars: "'`~"  },
  { col: 49, drift: 0.20, period: 6,  chars: "~'"   },
  { col: 51, drift: 0.55, period: 10, chars: "'~"   },
  { col: 53, drift: 0.45, period: 11, chars: "~ '"  },
];

function makeSmokeFrame(t: number): string[] {
  const sRows = 8;
  const grid = blank(sRows, COLS);
  for (let i = 0; i < SMOKE_STREAMS.length; i++) {
    const s = SMOKE_STREAMS[i];
    const phase = (t + i * 3) % s.period;
    if (phase >= sRows) continue;
    const row = sRows - 1 - phase;
    const col = Math.floor(s.col + phase * s.drift);
    if (col < 0 || col >= COLS) continue;
    const ch = s.chars[phase % s.chars.length];
    if (ch !== " ") grid[row][col] = ch;
  }
  return grid.map((r) => r.join(""));
}

const SMOKE = Array.from({ length: FRAMES }, (_, i) => makeSmokeFrame(i));

// ---------------------------------------------------------------------------
// Embers — bright sparks rising above the fire (similar to smoke, brighter)
// ---------------------------------------------------------------------------

const EMBER_SPARKS = [
  { col: 50, drift: -0.20, period: 8,  chars: "*'. " },
  { col: 48, drift:  0.30, period: 10, chars: "*'."  },
  { col: 52, drift:  0.40, period: 7,  chars: "*'."  },
  { col: 51, drift: -0.40, period: 9,  chars: "*. "  },
  { col: 49, drift:  0.50, period: 11, chars: "*'."  },
  { col: 53, drift: -0.30, period: 8,  chars: "*."   },
  { col: 47, drift:  0.20, period: 12, chars: "*'."  },
  { col: 54, drift: -0.55, period: 13, chars: "*."   },
];

function makeEmberFrame(t: number): string[] {
  const eRows = 8;
  const grid = blank(eRows, COLS);
  for (let i = 0; i < EMBER_SPARKS.length; i++) {
    const s = EMBER_SPARKS[i];
    const phase = (t + i * 2) % s.period;
    if (phase >= eRows) continue;
    const row = eRows - 1 - phase;
    const col = Math.floor(s.col + phase * s.drift);
    if (col < 0 || col >= COLS) continue;
    const ch = s.chars[Math.min(phase, s.chars.length - 1)];
    if (ch !== " ") grid[row][col] = ch;
  }
  return grid.map((r) => r.join(""));
}

const EMBERS = Array.from({ length: FRAMES }, (_, i) => makeEmberFrame(i));

// ---------------------------------------------------------------------------
// Campfire — Doom-fire propagation, then sliced into 8 row-zones for color
// ---------------------------------------------------------------------------

const FIRE_ROWS = 11;     // animated flame rows
const FIRE_COLS = 22;     // flame width
const FIRE_LEFT_PAD = 39; // left pad to center on col ~50

// Char ramp: heat 0 → blank, ramps up to bright/dense at high heat.
// Sparse dots/ticks at the cool tip, asterisks in the middle, dense `o`/`@`
// at the densest base — gives a flame silhouette before any color is applied.
const HEAT_GLYPHS = " ..,''**ooo@";

function makeCampfireFrame(t: number): string[] {
  const r = rng(t * 17 + 31);
  const heat = Array.from({ length: FRAME_HEAT_ROWS }, () => Array(FIRE_COLS).fill(0));

  // Seed bottom rows (the coal bed) with steady high heat + slight noise
  for (let row = FRAME_HEAT_ROWS - 2; row < FRAME_HEAT_ROWS; row++) {
    for (let c = 0; c < FIRE_COLS; c++) {
      heat[row][c] = HEAT_GLYPHS.length - 1 - Math.floor(r() * 2);
    }
  }

  // Doom-fire propagation upward with strong lateral drift → turbulent feel.
  // Each cell cools by 0..3 from a column-shifted neighbor below.
  for (let row = FRAME_HEAT_ROWS - 3; row >= 0; row--) {
    for (let c = 0; c < FIRE_COLS; c++) {
      const shift = Math.floor((r() - 0.5) * 4);
      const srcCol = Math.max(0, Math.min(FIRE_COLS - 1, c + shift));
      const cool = Math.floor(r() * 4);
      heat[row][c] = Math.max(0, heat[row + 1][srcCol] - cool);
    }
  }

  // Smooth silhouette + per-row sway:
  //   - width follows a power curve (broad at base, point at tip)
  //   - center oscillates with a sine wave whose phase walks per row,
  //     giving the flame a rippling "lick" rather than a static triangle
  //   - heat is multiplied by a quadratic falloff from the row's center
  //     instead of being hard-masked, so edges fade smoothly
  const cycle = (t * Math.PI * 2) / FRAMES;
  for (let row = 0; row < FIRE_ROWS; row++) {
    const rowFromBottom = (FIRE_ROWS - 1 - row) / (FIRE_ROWS - 1); // 0 base → 1 tip
    const halfWidth = (FIRE_COLS / 2) * Math.pow(1 - rowFromBottom, 0.6);
    const sway = Math.sin(cycle + rowFromBottom * 4.0) * (0.4 + rowFromBottom * 1.6);
    const center = FIRE_COLS / 2 + sway;
    const denom = Math.max(halfWidth, 0.5);
    for (let c = 0; c < FIRE_COLS; c++) {
      const d = Math.abs(c + 0.5 - center) / denom;
      const falloff = Math.max(0, 1 - d * d);
      heat[row][c] = Math.floor(heat[row][c] * falloff);
    }
  }

  const flameRows = heat.slice(0, FIRE_ROWS).map((row) =>
    row.map((h) => HEAT_GLYPHS[Math.min(h, HEAT_GLYPHS.length - 1)]).join(""),
  );

  // Static base — coals + lit logs + log shadow
  const base = [
    "                                        @@@@@@@@@@@@@@@@@@",
    "                                      _-=#|#|#|#|#|#|#|#|=-_",
    "                                    [#######|######|#######]",
  ];

  return joinPad(
    flameRows.map((s) => s.split("")),
    FIRE_LEFT_PAD,
  ).concat(base.map((s) => (s.length >= COLS ? s.slice(0, COLS) : s + " ".repeat(COLS - s.length))));
}

const FRAME_HEAT_ROWS = FIRE_ROWS + 2; // propagate 2 extra rows so seed bleeds in nicely

const CAMPFIRES = Array.from({ length: FRAMES }, (_, i) => makeCampfireFrame(i));

// Slice each frame to a row range; outside the range = blank, so multiple
// colored layers can stack without overdrawing each other.
function zoneRows(art: string[], from: number, toExclusive: number): string[] {
  return art.map((row, i) =>
    i >= from && i < toExclusive ? row : " ".repeat(row.length),
  );
}

const FIRE_ZONES = {
  sparks:   CAMPFIRES.map((f) => zoneRows(f, 0,  3)),
  yellow:   CAMPFIRES.map((f) => zoneRows(f, 3,  5)),
  amber:    CAMPFIRES.map((f) => zoneRows(f, 5,  7)),
  orange:   CAMPFIRES.map((f) => zoneRows(f, 7,  9)),
  red:      CAMPFIRES.map((f) => zoneRows(f, 9,  11)),
  embers:   CAMPFIRES.map((f) => zoneRows(f, 11, 12)),
  logsLit:  CAMPFIRES.map((f) => zoneRows(f, 12, 13)),
  logsBase: CAMPFIRES.map((f) => zoneRows(f, 13, 14)),
} as const;

// ---------------------------------------------------------------------------
// Figures — four diversified survivors (static)
// ---------------------------------------------------------------------------

const FIGURES = [
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "                                                                                                    ",
  "         /'-.                                                                       .-'\\            ",
  "        ( o  \\        ,-.                                            .-,           / o)             ",
  "        |    |)      ( o \\__                                      _-/ o )         (|   |            ",
  "       /|    |\\___  /|    |~~                                    ~~|    |\\        /|   |\\__        ",
  "      (_|____|__/_)(_|____|_/_)                                   (_\\____|_)     (_|___|__/_)       ",
];

// ---------------------------------------------------------------------------
// Ground (static)
// ---------------------------------------------------------------------------

const GROUND = [
  "    .    *    .     .    *    .        .    *    .    .    *    .    .    *    .    .    *    .   ",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
];

// ---------------------------------------------------------------------------
// Place a small block of art onto a grid, ignoring source spaces (so the
// block composites cleanly over existing pixels).
// ---------------------------------------------------------------------------

function placeBlock(grid: string[][], block: string[], row: number, col: number) {
  for (let r = 0; r < block.length; r++) {
    const dest = row + r;
    if (dest < 0 || dest >= grid.length) continue;
    for (let c = 0; c < block[r].length; c++) {
      const dc = col + c;
      if (dc < 0 || dc >= grid[0].length) continue;
      const ch = block[r][c];
      if (ch !== " ") grid[dest][dc] = ch;
    }
  }
}

// ---------------------------------------------------------------------------
// Scene 1 — EGG METEOR SHOWER. Several glowing eggs streak in from the sky
// at staggered phases. Each is an oval head (`O`/`o`) with a fading dust
// trail. The civilization at the fire watches them come.
// ---------------------------------------------------------------------------

const EGG_METEOR_PARAMS = [
  { col: 8,  row0: 0, period: 11, len: 4 },
  { col: 22, row0: 3, period: 9,  len: 4 },
  { col: 38, row0: 1, period: 10, len: 5 },
  { col: 56, row0: 0, period: 12, len: 5 },
  { col: 70, row0: 2, period: 8,  len: 4 },
  { col: 86, row0: 4, period: 11, len: 4 },
];

function makeEggMeteorFrame(t: number): string[] {
  const rowsTall = 14; // covers from sky down past the horizon
  const grid = blank(rowsTall, COLS);
  for (let i = 0; i < EGG_METEOR_PARAMS.length; i++) {
    const m = EGG_METEOR_PARAMS[i];
    const phase = (t + i * 2) % m.period;
    for (let k = 0; k < m.len; k++) {
      const row = m.row0 + phase - k;
      const col = m.col + k; // diagonal lean
      if (row < 0 || row >= rowsTall || col < 0 || col >= COLS) continue;
      // k=0 is the head (oval), k=1 a smaller oval, then dust trail.
      grid[row][col] = k === 0 ? "O" : k === 1 ? "o" : k < 4 ? "." : "'";
    }
  }
  return grid.map((r) => r.join(""));
}

const EGG_METEORS = Array.from({ length: FRAMES }, (_, i) => makeEggMeteorFrame(i));

// ---------------------------------------------------------------------------
// Scene 3 — TEACHING. After hatching, the hatchlings (now small floating
// flame creatures) hover near three of the figures and stream glyphs down
// to them — knowledge transfer made visible.
// ---------------------------------------------------------------------------

// Hovering tutor — a SPARK, the same form a freshly-hatched pet takes:
// a tiny flame tip over a face over a wisp base. 3 rows × 7 cols.
// Two variants alternate per frame for the breath/twinkle cycle (mirrors
// the pet's idle animation in pet_art.py).
const TUTOR_SPARK_VARIANTS: string[][] = [
  [
    "   /\\  ",
    " ( . . )",
    "  `,_,' ",
  ],
  [
    "   /\\  ",
    " ( ' ' )",
    "  `,_,' ",
  ],
];

// One spark hovers above each of three figures (skipping figure-2 nearest
// the fire). Rows are chosen so each spark sits a few rows above its
// figure's head (figures occupy canvas rows 21–26 in FIGURES).
const TUTOR_HOVER_PARAMS = [
  { col: 7,  row: 16 }, // above far-left figure
  { col: 70, row: 16 }, // above right figure
  { col: 84, row: 16 }, // above far-right figure
];

function makeTutorHoverFrame(t: number): string[] {
  const grid = blank(28, COLS);
  // Vertical bob — 1px float up/down per cycle to suggest hovering.
  const bob = Math.sin((t / FRAMES) * Math.PI * 2) > 0 ? 0 : -1;
  const body = TUTOR_SPARK_VARIANTS[t % TUTOR_SPARK_VARIANTS.length];
  for (const p of TUTOR_HOVER_PARAMS) {
    placeBlock(grid, body, p.row + bob, p.col);
  }
  return grid.map((r) => r.join(""));
}

const TUTORS_HOVER = Array.from({ length: FRAMES }, (_, i) => makeTutorHoverFrame(i));

// Glyph stream — small symbols flow from each tutor *down* to its figure
// (knowledge transfer). Glyphs cycle through a vocabulary; each frame
// they advance one row downward.
const GLYPH_VOCAB = [".", "*", ":", "'", "·", "+", "*"];

function makeGlyphStreamFrame(t: number): string[] {
  const grid = blank(28, COLS);
  for (let i = 0; i < TUTOR_HOVER_PARAMS.length; i++) {
    const p = TUTOR_HOVER_PARAMS[i];
    // Stream sits between the spark's bottom (row + 3) and the figure's
    // top (~row 21). Glyphs drift downward across frames.
    const colCenter = p.col + 3;
    for (let k = 0; k < 4; k++) {
      const offset = (t + k * 2 + i) % 8;
      const row = p.row + 3 + offset;
      if (row < 0 || row >= 28) continue;
      const ch = GLYPH_VOCAB[(t + k + i) % GLYPH_VOCAB.length];
      // Slight lateral wobble.
      const lateral = ((t + k) % 3) - 1;
      const col = colCenter + lateral;
      if (col >= 0 && col < COLS) grid[row][col] = ch;
    }
  }
  return grid.map((r) => r.join(""));
}

const GLYPH_STREAMS = Array.from({ length: FRAMES }, (_, i) => makeGlyphStreamFrame(i));

// ---------------------------------------------------------------------------
// Scene 3 — HATCHING. Three eggs were placed in the warming ring around the
// fire. Across the scene's frame budget they crack, split, and emit a small
// spark — the pets the player will care for.
// ---------------------------------------------------------------------------

// Three eggs aligned on the foreground ring around the fire — left, center,
// right of the campfire base. Each art frame is 3 rows; we stack them at
// TOP.eggs so they sit just in front of the logs.
const EGGS_INTACT = [
  "                                .-.            .-.            .-.                                   ",
  "                               ( o )          ( o )          ( o )                                  ",
  "                                `-'            `-'            `-'                                   ",
];

const EGGS_CRACKED = [
  "                                .,-.           .-,.           .,-.                                  ",
  "                               ( o\\)          (/o )          ( o\\)                                  ",
  "                                `-'            `-'            `-'                                   ",
];

const EGGS_OPENING = [
  "                               \\ . /          \\ . /          \\ . /                                  ",
  "                                v v            v v            v v                                   ",
  "                                `-'            `-'            `-'                                   ",
];

const EGGS_HATCHED = [
  "                                ( . )          ( . )          ( . )                                 ",
  "                                 \\v/            \\v/            \\v/                                  ",
  "                               \\___/          \\___/          \\___/                                  ",
];

const EGG_STATES = [EGGS_INTACT, EGGS_CRACKED, EGGS_OPENING, EGGS_HATCHED];

// Frame → which hatch state to render. Stretches the 4 states across the 15
// shared animation frames so the hatch reads as a slow progression instead
// of a stutter. Final 4 frames hold on the hatched state.
function eggStateForFrame(t: number): number {
  if (t < 4) return 0;
  if (t < 8) return 1;
  if (t < 11) return 2;
  return 3;
}

// Brief glow flash that pulses on the frame the eggs OPEN — sells the
// moment of birth. Empty grid most of the cycle, sparkles on transition.
function makeHatchSparkleFrame(t: number): string[] {
  const grid = blank(3, COLS);
  if (t >= 8 && t <= 11) {
    // Cols 33, 48, 63 — over the centers of the three eggs.
    for (const col of [33, 48, 63]) {
      grid[0][col] = "*";
      grid[1][col - 1] = ".";
      grid[1][col + 1] = ".";
    }
  }
  return grid.map((r) => r.join(""));
}

const HATCH_SPARKLES = Array.from({ length: FRAMES }, (_, i) => makeHatchSparkleFrame(i));

// ---------------------------------------------------------------------------
// Layout offsets
// ---------------------------------------------------------------------------

const TOP = {
  sky: 0,
  stars: 0,
  galaxy: 1,
  mountains: 7,
  smoke: 5,
  figures: 0,
  fire: 20,
  embers: 13,
  ground: ROWS - GROUND.length,
  // Scene 1 — egg meteors fall through the upper sky band.
  eggMeteors: 0,
  // Scene 2 — eggs landed in the warming ring around the fire.
  eggs: 30,
  // Scene 3 — tutors hover above the figures and emit glyphs downward.
  tutorsHover: 0,
  glyphs: 0,
} as const;

// ---------------------------------------------------------------------------
// Scene timing
// ---------------------------------------------------------------------------

// Per-scene durations for phases 0..2; phase 3 is the final settling scene.
const SCENE_DURATIONS = [4500, 5500, 5500] as const;
const SCENE_FADE_MS = 700;

// ---------------------------------------------------------------------------
// Render helpers
// ---------------------------------------------------------------------------

function pad(rows: string[]): string {
  return rows
    .map((r) => (r.length >= COLS ? r.slice(0, COLS) : r + " ".repeat(COLS - r.length)))
    .join("\n");
}

function Layer({
  art,
  top,
  className,
  style,
}: {
  art: string[];
  top: number;
  className: string;
  style?: CSSProperties;
}) {
  return (
    <pre
      className={`m-0 p-0 select-none absolute left-0 pointer-events-none ${className}`}
      style={{ top: `${top * ROW_PX}px`, ...style }}
    >
      {pad(art)}
    </pre>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Scene compositions
// ---------------------------------------------------------------------------

// Persistent setting — the civilization at the fire. Present in every scene
// so the camera doesn't move; only the dramatic element on top changes.
function BaseScene({ f }: { f: number }) {
  return (
    <>
      <Layer art={SKY_BASE} top={TOP.sky} className="text-slate-500/70" />
      <Layer art={STAR_FIELD} top={TOP.stars} className="text-slate-300/40" />
      <Layer
        art={TWINKLE[f]}
        top={TOP.stars}
        className="text-amber-100/70"
        style={{ filter: "drop-shadow(0 0 2px rgb(254 243 199 / 0.35))" }}
      />
      <Layer
        art={GALAXY[f]}
        top={TOP.galaxy}
        className="text-amber-50"
        style={{ filter: "drop-shadow(0 0 6px rgb(254 243 199 / 0.45))" }}
      />
      <Layer art={MOUNTAINS} top={TOP.mountains} className="text-slate-700/80" />
      <Layer art={SMOKE[f]} top={TOP.smoke} className="text-stone-500/40" />
      <Layer
        art={FIGURES}
        top={TOP.figures}
        className="text-stone-300"
        style={{ filter: "drop-shadow(0 0 6px rgb(251 146 60 / 0.35))" }}
      />
      <Layer
        art={FIRE_ZONES.sparks[f]}
        top={TOP.fire}
        className="text-yellow-100"
        style={{ filter: "drop-shadow(0 0 6px rgb(254 240 138 / 0.6))" }}
      />
      <Layer art={FIRE_ZONES.yellow[f]} top={TOP.fire} className="text-yellow-300" />
      <Layer
        art={FIRE_ZONES.amber[f]}
        top={TOP.fire}
        className="text-amber-400"
        style={{ filter: "drop-shadow(0 0 6px rgb(251 191 36 / 0.5))" }}
      />
      <Layer
        art={FIRE_ZONES.orange[f]}
        top={TOP.fire}
        className="text-orange-500"
        style={{ filter: "drop-shadow(0 0 8px rgb(249 115 22 / 0.55))" }}
      />
      <Layer
        art={FIRE_ZONES.red[f]}
        top={TOP.fire}
        className="text-red-600"
        style={{ filter: "drop-shadow(0 0 8px rgb(220 38 38 / 0.55))" }}
      />
      <Layer
        art={FIRE_ZONES.embers[f]}
        top={TOP.fire}
        className="text-amber-300"
        style={{ filter: "drop-shadow(0 0 6px rgb(252 211 77 / 0.7))" }}
      />
      <Layer art={FIRE_ZONES.logsLit[f]} top={TOP.fire} className="text-amber-700" />
      <Layer art={FIRE_ZONES.logsBase[f]} top={TOP.fire} className="text-stone-600" />
      <Layer
        art={EMBERS[f]}
        top={TOP.embers}
        className="text-amber-300"
        style={{ filter: "drop-shadow(0 0 4px rgb(252 211 77 / 0.6))" }}
      />
      <Layer art={GROUND} top={TOP.ground} className="text-stone-600" />
    </>
  );
}

// 0. CIVILIZATION — base composition only, the rudimentary tribe at its fire.
function SceneCivilization({ f }: { f: number }) {
  return <BaseScene f={f} />;
}

// 1. EGG METEOR SHOWER — eggs streak through the sky toward the camp.
function SceneEggMeteors({ f }: { f: number }) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={EGG_METEORS[f]}
        top={TOP.eggMeteors}
        className="text-amber-200"
        style={{ filter: "drop-shadow(0 0 6px rgb(252 211 77 / 0.8))" }}
      />
    </>
  );
}

// 2. HATCHING — eggs landed in the warming ring crack open across frames.
function SceneHatching({ f }: { f: number }) {
  const eggIdx = eggStateForFrame(f);
  const hatched = eggIdx === 3;
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={EGG_STATES[eggIdx]}
        top={TOP.eggs}
        className={hatched ? "text-amber-200" : "text-stone-300"}
        style={hatched ? { filter: "drop-shadow(0 0 6px rgb(252 211 77 / 0.7))" } : undefined}
      />
      <Layer
        art={HATCH_SPARKLES[f]}
        top={TOP.eggs}
        className="text-yellow-100"
        style={{ filter: "drop-shadow(0 0 8px rgb(254 240 138 / 0.9))" }}
      />
    </>
  );
}

// 3. TEACHING — three hatchlings hover above the tribe and stream glyphs
// down into the figures. Knowledge transfer made visible.
function SceneTeaching({ f }: { f: number }) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={TUTORS_HOVER[f]}
        top={TOP.tutorsHover}
        className="text-amber-100"
        style={{ filter: "drop-shadow(0 0 8px rgb(252 211 77 / 0.7))" }}
      />
      <Layer
        art={GLYPH_STREAMS[f]}
        top={TOP.glyphs}
        className="text-yellow-200/85"
        style={{ filter: "drop-shadow(0 0 4px rgb(252 211 77 / 0.6))" }}
      />
    </>
  );
}

// ---------------------------------------------------------------------------
// Component — four-scene narrative arc
//   0. Civilization        — tribe gathered at its fire under the night sky
//   1. Egg meteor shower   — glowing eggs streak in from the sky
//   2. Hatching            — landed eggs crack open at the fire
//   3. Teaching (final)    — hatchlings hover and stream glyphs to the tribe
// ---------------------------------------------------------------------------

type Phase = 0 | 1 | 2 | 3;

export function IntroScene() {
  const [tick, setTick] = useState(0);
  const [phase, setPhase] = useState<Phase>(0);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % FRAMES), TICK_MS);
    return () => clearInterval(t);
  }, []);

  // Auto-advance through scenes 0..2; phase 3 (hatch) stays — that's where
  // the player's pet life begins.
  useEffect(() => {
    if (phase >= 3) return;
    const ms = SCENE_DURATIONS[phase as 0 | 1 | 2];
    const id = setTimeout(() => setPhase((p) => (p + 1) as Phase), ms);
    return () => clearTimeout(id);
  }, [phase]);

  const f = tick;
  const sizingFiller = pad(Array(ROWS).fill(""));

  const sceneStyle = (active: boolean): CSSProperties => ({
    opacity: active ? 1 : 0,
    transition: `opacity ${SCENE_FADE_MS}ms ease-in-out`,
    pointerEvents: "none",
  });

  return (
    <div className="relative inline-block font-mono leading-[12px] text-[11px]">
      <pre className="m-0 p-0 select-none invisible">{sizingFiller}</pre>

      <div className="absolute inset-0" style={sceneStyle(phase === 0)}>
        <SceneCivilization f={f} />
      </div>
      <div className="absolute inset-0" style={sceneStyle(phase === 1)}>
        <SceneEggMeteors f={f} />
      </div>
      <div className="absolute inset-0" style={sceneStyle(phase === 2)}>
        <SceneHatching f={f} />
      </div>
      <div className="absolute inset-0" style={sceneStyle(phase === 3)}>
        <SceneTeaching f={f} />
      </div>
    </div>
  );
}
