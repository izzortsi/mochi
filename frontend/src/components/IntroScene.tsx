"use client";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";

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

// Single figure remaining — used in the manByFire phase. Reuses figure 2's
// posture (already leaning toward the fire) so it reads as a quiet vigil.
const FIGURES_ONE = [
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
  "                                                                                                    ",
  "                       ,-.                                                                          ",
  "                      ( o \\__                                                                       ",
  "                      /|   |~~                                                                      ",
  "                     (_|___|_/_)                                                                    ",
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
// METEOR SHOWER. Distant streaks across the upper sky — the meteors
// themselves stay above the mountain line so they read as far away. The
// rocks the player will walk to live on the foreground ground band; this
// layer is just the sky drama.
// ---------------------------------------------------------------------------

const EGG_METEOR_PARAMS = [
  { col: 4,  row0: 0, period: 15, len: 9  },
  { col: 14, row0: 1, period: 14, len: 8  },
  { col: 22, row0: 0, period: 16, len: 10 },
  { col: 31, row0: 2, period: 13, len: 8  },
  { col: 38, row0: 0, period: 15, len: 9  },
  { col: 47, row0: 1, period: 16, len: 10 },
  { col: 55, row0: 0, period: 14, len: 8  },
  { col: 63, row0: 2, period: 15, len: 9  },
  { col: 71, row0: 0, period: 13, len: 7  },
  { col: 79, row0: 1, period: 16, len: 10 },
  { col: 87, row0: 0, period: 15, len: 9  },
  { col: 94, row0: 2, period: 14, len: 8  },
];

// Meteors now paint through the upper sky AND the mid band — heads descend
// past the mountain silhouette (row 7) and into the landed-meteorite mid
// band (rows ~12-14). Bottom row 15 keeps them above the figures/campfire
// so the foreground silhouettes stay readable.
const METEOR_ROWS = 16;

// Glyph ramp from head → tail: bright head, then star/tick, then dotted
// decay. Beyond the ramp length the trail fades to blank.
const METEOR_TRAIL = ["o", "*", "'", "'", ".", ".", "`", "`", " "];

function makeEggMeteorFrame(t: number): string[] {
  const grid = blank(METEOR_ROWS, COLS);
  for (let i = 0; i < EGG_METEOR_PARAMS.length; i++) {
    const m = EGG_METEOR_PARAMS[i];
    const phase = (t + i * 2) % m.period;
    for (let k = 0; k < m.len; k++) {
      const row = m.row0 + phase - k;
      const col = m.col + k; // diagonal lean (trail points up-right)
      if (row < 0 || row >= METEOR_ROWS || col < 0 || col >= COLS) continue;
      const ch = METEOR_TRAIL[Math.min(k, METEOR_TRAIL.length - 1)];
      if (ch !== " ") grid[row][col] = ch;
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
// Hatch timing — stretches the 4 meteorite states across the 15 shared
// animation frames so the hatch reads as a slow progression instead of a
// stutter. Final 4 frames hold on the hatched state.
// ---------------------------------------------------------------------------

function hatchStateForFrame(t: number): number {
  if (t < 4) return 0;
  if (t < 8) return 1;
  if (t < 11) return 2;
  return 3;
}

// Brief glow flash that pulses on the frame the rocks SPLIT — sells the
// moment of birth. Empty grid most of the cycle, sparkles on transition.
function makeHatchSparkleFrame(t: number): string[] {
  const grid = blank(3, COLS);
  if (t >= 8 && t <= 11) {
    // Match FIRE_RING_CENTERS (declared below; inlined here because this
    // runs at module load before that line). Two rocks flank the fire.
    for (const col of [33, 63]) {
      grid[0][col] = "*";
      grid[1][col - 1] = ".";
      grid[1][col + 1] = ".";
    }
  }
  return grid.map((r) => r.join(""));
}

const HATCH_SPARKLES = Array.from({ length: FRAMES }, (_, i) => makeHatchSparkleFrame(i));

// ---------------------------------------------------------------------------
// tripleRow — build a 100-col row with the same small chunk centered at
// each of the given column anchors. Used by every fire-ring layer (placed
// meteorites, hatch states, hatched sparks) so they share x-positions.
// ---------------------------------------------------------------------------

// Two rocks flank the fire — the middle anchor at col 48 was dropped
// because the campfire itself (cols 39-60) occupies that space.
const FIRE_RING_CENTERS = [33, 63] as const;

function tripleRow(chunk: string, cols: readonly number[] = FIRE_RING_CENTERS): string {
  const row: string[] = Array(COLS).fill(" ");
  for (const c of cols) {
    const start = c - Math.floor(chunk.length / 2);
    for (let i = 0; i < chunk.length; i++) {
      const dst = start + i;
      if (dst >= 0 && dst < COLS) row[dst] = chunk[i];
    }
  }
  return row.join("");
}

// ---------------------------------------------------------------------------
// Meteorites at the fire — three rocks placed in the warming ring after the
// player and tribe carry them back, then 4 hatch states (intact → cracked
// → splitting → spark). Final state matches the spark-stage pet form.
// ---------------------------------------------------------------------------

const METEORITES_AT_FIRE = [
  tripleRow(",o,"),
  tripleRow("(***)"),
  tripleRow("'-'"),
];

const METEORITES_CRACKED = [
  tripleRow(",/,"),
  tripleRow("(*-*)"),
  tripleRow("'-'"),
];

const METEORITES_OPENING = [
  tripleRow("\\*/"),
  tripleRow("| |"),
  tripleRow("`-'"),
];

const METEORITES_HATCHED = [
  tripleRow("/\\"),
  tripleRow("( . . )"),
  tripleRow("`,_,'"),
];

const METEORITE_HATCH_STATES = [
  METEORITES_AT_FIRE,
  METEORITES_CRACKED,
  METEORITES_OPENING,
  METEORITES_HATCHED,
];

// ---------------------------------------------------------------------------
// Landed meteorites — three perspective bands fill the landscape with depth
// without blocking the foreground ground band where the player walks.
//
//   FAR  (rows 9-10)  — single `.` glyphs just below the mountain horizon,
//                       a sparse scatter that reads as "way out there."
//   MID  (rows 12-14) — small `o.` two-char glyphs across the middle.
//   INTERMEDIATE (rows 17-23) — `,o,` three-char glyphs filling the gap
//                       between mid and the player's roam zone, so the
//                       distance to the target rock feels traversable.
//
// The TARGET sits inside the intermediate band so the player has to walk
// back into the scene to reach it.
// ---------------------------------------------------------------------------

const LANDED_METEORITE_FAR_POSITIONS: ReadonlyArray<readonly [number, number]> = [
  [9, 6],   [9, 19],  [9, 33],
  [10, 12], [10, 41], [10, 58],
  [9, 67],  [9, 81],  [9, 95],
  [10, 74], [10, 88],
];

const LANDED_METEORITE_MID_POSITIONS: ReadonlyArray<readonly [number, number]> = [
  [12, 8],  [12, 28], [12, 50], [12, 71], [12, 90],
  [14, 16], [14, 38], [14, 62], [14, 84],
];

const LANDED_METEORITE_INTERMEDIATE_POSITIONS: ReadonlyArray<readonly [number, number]> = [
  [17, 22], [17, 56], [17, 82],
  [19, 14], [19, 38], [19, 70], [19, 94],
  [21, 30], [21, 60], [21, 86],
  [23, 18], [23, 46], [23, 76],
];

const TARGET_METEORITE_GLYPH = [
  ",o,",
  "(*)",
];

// The target lives in the intermediate band (rows 19/21/23) — any row that's
// reachable by the player given PLAYER_BOUNDS.rowMin and the 2-row grab
// tolerance. Column is picked across the full walkable width so the target
// can land anywhere in front of the player. See pickTargetPosition().
const TARGET_BAND_ROWS = [19, 21, 23] as const;
const TARGET_COL_MIN = 6;
const TARGET_COL_MAX = 92;

function pickTargetPosition(): readonly [number, number] {
  const row = TARGET_BAND_ROWS[Math.floor(Math.random() * TARGET_BAND_ROWS.length)];
  const col =
    TARGET_COL_MIN + Math.floor(Math.random() * (TARGET_COL_MAX - TARGET_COL_MIN + 1));
  return [row, col];
}

const LANDED_METEORITES_LAYER: string[] = (() => {
  const grid = blank(ROWS, COLS);
  // Far: a single dot per position.
  for (const [r, c] of LANDED_METEORITE_FAR_POSITIONS) {
    if (r >= 0 && r < ROWS && c >= 0 && c < COLS) grid[r][c] = ".";
  }
  // Mid: two-char glyph (head + faint shadow).
  for (const [r, c] of LANDED_METEORITE_MID_POSITIONS) {
    placeBlock(grid, ["o."], r, c);
  }
  // Intermediate: three-char glyph in the gap between mid and the
  // foreground — the band the player walks back into to grab the target.
  for (const [r, c] of LANDED_METEORITE_INTERMEDIATE_POSITIONS) {
    placeBlock(grid, [",o,"], r, c);
  }
  return grid.map((row) => row.join(""));
})();

function buildTargetMeteoriteLayer(row: number, col: number): string[] {
  const grid = blank(ROWS, COLS);
  placeBlock(grid, TARGET_METEORITE_GLYPH, row, col);
  return grid.map((r) => r.join(""));
}

// ---------------------------------------------------------------------------
// Player figure — same drawing language as the FIGURES at the camp (`,-.`
// head, parenthesised face, stick body) so the player reads as one of the
// tribe stepping out into the dark. 4 rows × 5 cols.
// ---------------------------------------------------------------------------

const PLAYER_GLYPH = [
  " ,-.",
  "( o)",
  "/|\\ ",
  "/ \\ ",
];

const PLAYER_GLYPH_ROWS = PLAYER_GLYPH.length;          // 4
const PLAYER_GLYPH_COLS = PLAYER_GLYPH[0].length;       // 5

const PLAYER_START = { row: 28, col: 60 };
const PLAYER_BOUNDS = {
  // rowMin is one above the intermediate band so the player can step into
  // and walk past the target's row, reinforcing the depth of the scene.
  rowMin: 18,
  rowMax: ROWS - PLAYER_GLYPH_ROWS,
  colMin: 0,
  colMax: COLS - PLAYER_GLYPH_COLS,
};

function renderPlayerLayer(row: number, col: number): string[] {
  const grid = blank(ROWS, COLS);
  placeBlock(grid, PLAYER_GLYPH, row, col);
  return grid.map((r) => r.join(""));
}

// True when the player's footprint overlaps the target meteorite so Space
// picks it up. Compares centers with a generous threshold so the grab
// doesn't require pixel-perfect alignment.
function isPlayerAtTarget(
  row: number,
  col: number,
  target: readonly [number, number],
): boolean {
  const [tr, tc] = target;
  const playerCenterCol = col + Math.floor(PLAYER_GLYPH_COLS / 2);
  const playerCenterRow = row + Math.floor(PLAYER_GLYPH_ROWS / 2);
  const targetCenterCol = tc + 1; // 3-wide glyph
  const targetCenterRow = tr + 0; // 2-tall glyph, anchor row
  return (
    Math.abs(playerCenterCol - targetCenterCol) <= 3 &&
    Math.abs(playerCenterRow - targetCenterRow) <= 2
  );
}

// ---------------------------------------------------------------------------
// Sleep cutscene — three z-strings rise above the sleeping figures and drift
// sideways, mirroring the smoke streams' rendering convention.
// ---------------------------------------------------------------------------

const SLEEP_Z_STREAMS = [
  { col: 12, drift: 0.4, period: 8,  chars: "zZ Zz" },
  { col: 76, drift: 0.5, period: 9,  chars: "Zz zZ" },
  { col: 88, drift: 0.3, period: 10, chars: "zZ z " },
];

function makeSleepZFrame(t: number): string[] {
  const zRows = 8;
  const grid = blank(zRows, COLS);
  for (let i = 0; i < SLEEP_Z_STREAMS.length; i++) {
    const s = SLEEP_Z_STREAMS[i];
    const phase = (t + i * 2) % s.period;
    if (phase >= zRows) continue;
    const row = zRows - 1 - phase;
    const col = Math.floor(s.col + phase * s.drift);
    if (col < 0 || col >= COLS) continue;
    const ch = s.chars[phase % s.chars.length];
    if (ch !== " ") grid[row][col] = ch;
  }
  return grid.map((r) => r.join(""));
}

const SLEEP_ZS = Array.from({ length: FRAMES }, (_, i) => makeSleepZFrame(i));

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
  // Egg/meteorite meteors fall through the upper sky band (full canvas).
  meteors: 0,
  // Meteorites placed at the warming ring (same row the eggs sat at).
  meteoritesAtFire: 30,
  // Sleep z-strings drift up above the sleeping figures.
  sleepZs: 16,
  // Tutors hover above the figures and emit glyphs downward (full canvas).
  tutorsHover: 0,
  glyphs: 0,
} as const;

// ---------------------------------------------------------------------------
// Phase machine — a 10-step narrative arc.
//   civilization     tribe at the fire under the night sky
//   msgWarning       text overlay: the sky starts to fall
//   meteorShower     glowing eggs/rocks streak in
//   msgDarkness      text overlay: curiosity prompts you outward
//   findMeteorite    INTERACTIVE — arrow keys move, Enter grabs near target
//   msgTooHot        text overlay: it needs more heat
//   fireOffering     humans place their meteorites by the fire
//   sleep            cutscene — figures sleep, z's drift up
//   hatching         on wakeup the meteorites crack open into sparks
//   teaching         sparks hover, stream glyphs to the tribe (terminal)
// ---------------------------------------------------------------------------

type Phase =
  | "civilization"
  | "msgWarning"
  | "meteorShower"
  | "manByFire"
  | "msgDarkness"
  | "findMeteorite"
  | "msgTooHot"
  | "fireOffering"
  | "sleep"
  | "hatching"
  | "teaching";

const PHASE_ORDER: readonly Phase[] = [
  "civilization",
  "msgWarning",
  "meteorShower",
  "manByFire",
  "msgDarkness",
  "findMeteorite",
  "msgTooHot",
  "fireOffering",
  "sleep",
  "hatching",
  "teaching",
];

// Auto-advance durations (ms). Phases not listed advance via user input:
//   - msgWarning / msgDarkness / msgTooHot — Enter confirms the message
//   - findMeteorite — Enter on the target
//   - teaching — terminal (no advance)
const PHASE_DURATIONS: Partial<Record<Phase, number>> = {
  civilization: 4500,
  meteorShower: 10000,
  manByFire: 5000,
  fireOffering: 4500,
  sleep: 4500,
  hatching: 5500,
};

const MESSAGES: Partial<Record<Phase, string>> = {
  msgWarning: "And all of a sudden... the sky... it seems to start falling...",
  msgDarkness: "Inexorable curiosity prompts you into the darkness...",
  msgTooHot: "It's almost too hot to hold... Something tells you it needs even more heat...",
};

function nextPhase(p: Phase): Phase | null {
  const i = PHASE_ORDER.indexOf(p);
  return i >= 0 && i + 1 < PHASE_ORDER.length ? PHASE_ORDER[i + 1] : null;
}

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
// Pass `figures` to swap in a different cast (e.g. FIGURES_ONE for the
// solitary man-by-fire vigil).
function BaseScene({ f, figures = FIGURES }: { f: number; figures?: string[] }) {
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
        art={figures}
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

// CIVILIZATION — base composition only, the rudimentary tribe at its fire.
function SceneCivilization({ f }: { f: number }) {
  return <BaseScene f={f} />;
}

// METEOR SHOWER — rocks streak through the sky toward the camp; the landed
// scatter is shown beneath them so the landscape visibly fills with the
// fallen objects as the shower unfolds (rather than appearing only later
// in the aftermath).
function SceneMeteorShower({ f }: { f: number }) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={LANDED_METEORITES_LAYER}
        top={0}
        className="text-amber-700/70"
        style={{ filter: "drop-shadow(0 0 3px rgb(217 119 6 / 0.45))" }}
      />
      <Layer
        art={EGG_METEORS[f]}
        top={TOP.meteors}
        className="text-amber-200/75"
        style={{ filter: "drop-shadow(0 0 3px rgb(252 211 77 / 0.55))" }}
      />
    </>
  );
}

// MAN BY FIRE — quiet beat after the shower. Only one figure remains awake
// at the camp, the others having gone to lie down. Landed rocks visible on
// the ground. Target highlight is added during msgDarkness so the curiosity
// the message describes has a literal glowing thing to point at.
function SceneManByFire({
  f,
  targetLayer,
  showTarget = false,
}: {
  f: number;
  targetLayer: string[];
  showTarget?: boolean;
}) {
  return (
    <>
      <BaseScene f={f} figures={FIGURES_ONE} />
      <Layer
        art={LANDED_METEORITES_LAYER}
        top={0}
        className="text-stone-500"
      />
      {showTarget && (
        <Layer
          art={targetLayer}
          top={0}
          className="text-amber-300/80"
          style={{ filter: "drop-shadow(0 0 4px rgb(252 211 77 / 0.5))" }}
        />
      )}
    </>
  );
}

// AFTERMATH — same composition as civilization but with the fallen rocks
// scattered across the ground. Backdrop for msgDarkness (target still
// glowing on the ground, beckoning) and msgTooHot (target removed — the
// player has just picked it up).
function SceneAftermath({
  f,
  targetLayer,
  showTarget,
}: {
  f: number;
  targetLayer: string[];
  showTarget: boolean;
}) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={LANDED_METEORITES_LAYER}
        top={0}
        className="text-stone-500"
      />
      {showTarget && (
        <Layer
          art={targetLayer}
          top={0}
          className="text-amber-300/80"
          style={{ filter: "drop-shadow(0 0 4px rgb(252 211 77 / 0.5))" }}
        />
      )}
    </>
  );
}

// FIND METEORITE — the interactive mini-game. Standalone composition: dark
// landscape with sky/mountains/ground only, no camp visible. Just the player,
// the scattered rocks, and the glowing target somewhere off in the distance.
function SceneFindMeteorite({
  f,
  playerRow,
  playerCol,
  targetLayer,
}: {
  f: number;
  playerRow: number;
  playerCol: number;
  targetLayer: string[];
}) {
  return (
    <>
      <Layer art={SKY_BASE} top={TOP.sky} className="text-slate-700/50" />
      <Layer art={STAR_FIELD} top={TOP.stars} className="text-slate-400/30" />
      <Layer
        art={TWINKLE[f]}
        top={TOP.stars}
        className="text-slate-200/50"
      />
      <Layer art={MOUNTAINS} top={TOP.mountains} className="text-slate-800" />
      <Layer art={GROUND} top={TOP.ground} className="text-stone-700" />
      <Layer
        art={LANDED_METEORITES_LAYER}
        top={0}
        className="text-stone-500/70"
      />
      <Layer
        art={targetLayer}
        top={0}
        className="text-amber-200"
        style={{ filter: "drop-shadow(0 0 8px rgb(252 211 77 / 0.95))" }}
      />
      <Layer
        art={renderPlayerLayer(playerRow, playerCol)}
        top={0}
        className="text-amber-100"
        style={{ filter: "drop-shadow(0 0 4px rgb(254 243 199 / 0.6))" }}
      />
    </>
  );
}

// FIRE OFFERING — the rocks have been carried back and placed in the
// warming ring around the fire (intact, no hatch progression yet).
function SceneFireOffering({ f }: { f: number }) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={METEORITES_AT_FIRE}
        top={TOP.meteoritesAtFire}
        className="text-amber-300"
        style={{ filter: "drop-shadow(0 0 4px rgb(252 211 77 / 0.6))" }}
      />
    </>
  );
}

// SLEEP — figures rest at the fire, z-strings drift up. Existing fire/figures
// layers continue to glow softly so the camp still reads as alive.
function SceneSleep({ f }: { f: number }) {
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={METEORITES_AT_FIRE}
        top={TOP.meteoritesAtFire}
        className="text-stone-400"
      />
      <Layer
        art={SLEEP_ZS[f]}
        top={TOP.sleepZs}
        className="text-slate-300/70"
      />
      {/* Dim the whole scene with a translucent overlay so 'sleep' reads
          visually even though every layer underneath stays animated. */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </>
  );
}

// HATCHING — the meteorites placed in the ring crack across frames and
// finally bloom into three sparks. Reuses the existing hatchStateForFrame
// timing and HATCH_SPARKLES flash so the moment of birth still pops.
function SceneHatching({ f }: { f: number }) {
  const idx = hatchStateForFrame(f);
  const hatched = idx === 3;
  return (
    <>
      <BaseScene f={f} />
      <Layer
        art={METEORITE_HATCH_STATES[idx]}
        top={TOP.meteoritesAtFire}
        className={hatched ? "text-amber-200" : "text-stone-300"}
        style={hatched ? { filter: "drop-shadow(0 0 6px rgb(252 211 77 / 0.75))" } : undefined}
      />
      <Layer
        art={HATCH_SPARKLES[f]}
        top={TOP.meteoritesAtFire}
        className="text-yellow-100"
        style={{ filter: "drop-shadow(0 0 8px rgb(254 240 138 / 0.9))" }}
      />
    </>
  );
}

// TEACHING — three hatchlings hover above the tribe and stream glyphs
// down into the figures. Final scene; lingers as the intro's exit slate.
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
// MessageOverlay — typewritten text card centered over the current scene.
// Resets the typewriter whenever the text changes, so each message starts
// fresh when the phase transitions.
// ---------------------------------------------------------------------------

function MessageOverlay({ text, hint = "[click] continue" }: { text: string; hint?: string }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= text.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 35);
    return () => clearInterval(id);
  }, [text]);
  const done = shown >= text.length;
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="max-w-md text-center font-mono text-sm tracking-wide text-amber-100">
        <div>
          {text.slice(0, shown)}
          {!done && <span className="opacity-70">_</span>}
        </div>
        <div
          className="mt-3 text-[10px] uppercase tracking-[0.3em] transition-opacity duration-500"
          style={{ opacity: done ? 0.5 : 0 }}
        >
          {hint}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

const TEACHING_PROMPT_DELAY_MS = 4500;
const TEACHING_END_MESSAGE = "the fire is yours. we keep it going.";

// Stable fallback for SSR. The client re-randomizes after mount so each
// playthrough in the browser picks a fresh position — but the first paint
// matches what the server rendered, avoiding hydration warnings.
const DEFAULT_TARGET: readonly [number, number] = [21, 46];

export function IntroScene() {
  const router = useRouter();
  const [tick, setTick] = useState(0);
  const [phase, setPhase] = useState<Phase>("civilization");
  const [playerRow, setPlayerRow] = useState(PLAYER_START.row);
  const [playerCol, setPlayerCol] = useState(PLAYER_START.col);
  const [teachingPromptVisible, setTeachingPromptVisible] = useState(false);
  const [target, setTarget] = useState<readonly [number, number]>(DEFAULT_TARGET);

  useEffect(() => {
    setTarget(pickTargetPosition());
  }, []);

  const targetLayer = buildTargetMeteoriteLayer(target[0], target[1]);

  useEffect(() => {
    if (phase !== "teaching") {
      setTeachingPromptVisible(false);
      return;
    }
    const id = setTimeout(() => setTeachingPromptVisible(true), TEACHING_PROMPT_DELAY_MS);
    return () => clearTimeout(id);
  }, [phase]);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % FRAMES), TICK_MS);
    return () => clearInterval(t);
  }, []);

  // Auto-advance for phases that have a duration. Phases without one
  // (findMeteorite, teaching) are advanced from elsewhere — the keyboard
  // handler for the game, never for teaching (it's the final slate).
  useEffect(() => {
    const ms = PHASE_DURATIONS[phase];
    if (ms == null) return;
    const id = setTimeout(() => {
      const n = nextPhase(phase);
      if (n) setPhase(n);
    }, ms);
    return () => clearTimeout(id);
  }, [phase]);

  // Keyboard:
  //   findMeteorite — arrow keys move the player; Enter grabs the rock if
  //                   the player is overlapping it (advances to msgTooHot).
  //   message phase — Enter skips the typewriter and advances early.
  // We keep the player-position read off refs so the Enter handler sees
  // the latest values without re-binding the listener every keystroke.
  const playerRowRef = useRef(playerRow);
  const playerColRef = useRef(playerCol);
  const targetRef = useRef(target);
  useEffect(() => { playerRowRef.current = playerRow; }, [playerRow]);
  useEffect(() => { playerColRef.current = playerCol; }, [playerCol]);
  useEffect(() => { targetRef.current = target; }, [target]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (phase !== "findMeteorite") return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPlayerCol((c) => Math.max(PLAYER_BOUNDS.colMin, c - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPlayerCol((c) => Math.min(PLAYER_BOUNDS.colMax, c + 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setPlayerRow((r) => Math.max(PLAYER_BOUNDS.rowMin, r - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setPlayerRow((r) => Math.min(PLAYER_BOUNDS.rowMax, r + 1));
      } else if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        if (isPlayerAtTarget(playerRowRef.current, playerColRef.current, targetRef.current)) {
          setPhase("msgTooHot");
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase]);

  function advanceOnClick() {
    if (phase === "findMeteorite") return;
    if (phase === "teaching") {
      if (teachingPromptVisible) router.push("/");
      return;
    }
    if (MESSAGES[phase]) {
      const n = nextPhase(phase);
      if (n) setPhase(n);
    }
  }

  const f = tick;
  const sizingFiller = pad(Array(ROWS).fill(""));

  const sceneStyle = (active: boolean): CSSProperties => ({
    opacity: active ? 1 : 0,
    transition: `opacity ${SCENE_FADE_MS}ms ease-in-out`,
    pointerEvents: "none",
  });

  // Each phase decides which background scene plays underneath its overlay.
  // Doing this as a small lookup keeps the JSX below readable: one line
  // per phase, scene + optional message overlay.
  function backgroundFor(p: Phase) {
    switch (p) {
      case "civilization":
      case "msgWarning":
        return <SceneCivilization f={f} />;
      case "meteorShower":
        return <SceneMeteorShower f={f} />;
      case "manByFire":
        return <SceneManByFire f={f} targetLayer={targetLayer} />;
      case "msgDarkness":
        return <SceneManByFire f={f} targetLayer={targetLayer} showTarget={true} />;
      case "msgTooHot":
        return <SceneAftermath f={f} targetLayer={targetLayer} showTarget={false} />;
      case "findMeteorite":
        return (
          <SceneFindMeteorite
            f={f}
            playerRow={playerRow}
            playerCol={playerCol}
            targetLayer={targetLayer}
          />
        );
      case "fireOffering":
        return <SceneFireOffering f={f} />;
      case "sleep":
        return <SceneSleep f={f} />;
      case "hatching":
        return <SceneHatching f={f} />;
      case "teaching":
        return <SceneTeaching f={f} />;
    }
  }

  const message = MESSAGES[phase];
  const showHints = phase === "findMeteorite";

  const showTeachingPrompt = phase === "teaching" && teachingPromptVisible;
  const clickable =
    (phase !== "findMeteorite" && !!message) || showTeachingPrompt;

  return (
    <div
      className="relative inline-block font-mono leading-[12px] text-[11px]"
      onClick={advanceOnClick}
      style={{ cursor: clickable ? "pointer" : "default" }}
    >
      <pre className="m-0 p-0 select-none invisible">{sizingFiller}</pre>

      {PHASE_ORDER.map((p) => (
        <div key={p} className="absolute inset-0" style={sceneStyle(phase === p)}>
          {backgroundFor(p)}
        </div>
      ))}

      {message && (
        <div className="absolute inset-0">
          <MessageOverlay text={message} />
        </div>
      )}

      {showTeachingPrompt && (
        <div className="absolute inset-0">
          <MessageOverlay text={TEACHING_END_MESSAGE} hint="[click] enter" />
        </div>
      )}

      {showHints && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-mono opacity-50 pointer-events-none">
          [arrows] move &nbsp; [space] grab
        </div>
      )}
    </div>
  );
}
