"use client";
import { useEffect, useState } from "react";

/*
 * Intro scene: post-apocalyptic night. A bright starfield and a crescent
 * moon over a ruined skyline; a bonfire burns in the foreground with a
 * circle of hunched survivors around it. The sky, ruins, and figures are
 * static layers. The bonfire cycles three frames to flicker.
 *
 * Layers share a 100-col × 36-row canvas, stacked via absolute positioning
 * so each gets its own color. Empty glyphs in a layer are spaces so the
 * layer below shows through.
 */

const COLS = 100;
const ROWS = 36;

// ---------------------------------------------------------------------------
// Sky: stars + crescent moon
// ---------------------------------------------------------------------------

const SKY = [
  "   .      *    .       '  .     *  .   '       *      .    '   *      .      '    .       *       '",
  "      *      .   '    *       .      '     *    .        *     .   '     *       .      '      *    ",
  "  .     '     .      *    .       *   .   '       .    *    '   .    *    .     '    .    *         ",
  "       .    *    .   '  *    .      '     *   .    '    .   *   '    .       *     .   '     *      ",
  "   '     *      .     '     .   *    .    '     *    .   '       *    .   '   .     *     .     '   ",
  "      .     '    .   *    '    .     *    .       '     *     .   '   *    '    .       *    .      ",
  "  *     .   '      *   .     '   *    .   '    .    *    '    .     '    *   .   '    '       *     ",
  "    .       '    .     *   .    '    .     '    *    '      .    *    '      .    '    *    .   '   ",
  "  '    .      *    '    .      '    .   *    '    .     '    .    *    '    .    '    .    *    '   ",
  "    .    '    .    *    .    '    .    '    .    *    '    .    '    .    '    .    '    .    '    ",
  "  '    .    '    .    '    .    '    .    '    .    '    .    '    .    '    .    '    .    '    .  ",
];

const MOON = [
  "                                                                              .-'--.                ",
  "                                                                             /  .   \\               ",
  "                                                                            |    *  |               ",
  "                                                                            |   .   |               ",
  "                                                                             \\  *  /                ",
  "                                                                              `---'                 ",
];

// Positions: SKY fills rows 0..10 across all 100 cols.
// MOON is overlaid at row 2..7, cols already in the strings.

// ---------------------------------------------------------------------------
// Ruined skyline (rows 11..17)
// ---------------------------------------------------------------------------

const RUINS = [
  "                                                                                                    ",
  "                  /\\                                                                                ",
  "           ##    /##\\                           ##                /\\                                ",
  "     ##    ##   /####\\        ##        /|   ######             /####\\            ##               ",
  "    ####   ##  /######\\___    ####    /##|___########        __/######\\__    ####  #####           ",
  "   _####___##_/________\\___  _####___/####|__##########__   _##########___\\__ ####  ##########____ ",
  "   |########|########|####|__|########|#####|_##########|___|############|__|####|__##########|____|",
];

// ---------------------------------------------------------------------------
// Bonfire — 3 frames for flicker (rows 19..29 center)
// ---------------------------------------------------------------------------

// Each frame is exactly 11 rows tall, centered at col ~49.
const FIRE_A = [
  "                                                 .  *  .                                            ",
  "                                                *     *                                             ",
  "                                                 *****                                              ",
  "                                                * (*) *                                             ",
  "                                               *( @@@ )*                                            ",
  "                                                \\ v /                                               ",
  "                                                 \\_/                                                ",
  "                                                  |                                                 ",
  "                                             [==||||==]                                             ",
  "                                            [==|||||||==]                                           ",
  "                                            '-.________.-'                                          ",
];

const FIRE_B = [
  "                                                    *                                               ",
  "                                                 *  .  *                                            ",
  "                                                . *** .                                             ",
  "                                                *(* *)*                                             ",
  "                                               ((  @  ))                                            ",
  "                                                \\  v  /                                             ",
  "                                                 \\___/                                              ",
  "                                                 /|||\\                                              ",
  "                                             [=|||||=]                                              ",
  "                                            [==|||||||==]                                           ",
  "                                            '-.________.-'                                          ",
];

const FIRE_C = [
  "                                                  .                                                 ",
  "                                                 * *                                                ",
  "                                                **.**                                               ",
  "                                               .(* *).                                              ",
  "                                                (@@ @)                                              ",
  "                                                \\ ^v^ /                                             ",
  "                                                 \\ | /                                              ",
  "                                                  |||                                               ",
  "                                             [=|||||=]                                              ",
  "                                            [==|||||||==]                                           ",
  "                                            '-.________.-'                                          ",
];

const FIRE_FRAMES = [FIRE_A, FIRE_B, FIRE_C];
const FIRE_ROW_OFFSET = 19; // top of fire at row 19

// ---------------------------------------------------------------------------
// Figures around the fire
// Five hunched silhouettes at varying angles: far-left, left, back, right,
// far-right. Each is 4 rows tall, rendered at row 24..27.
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
  "                                                                                                    ",
  "         .-.            .-.                                       .-.            .-.                ",
  "        ( o \\         ( o \\                                     / o )          / o )               ",
  "        |   |)        |   |)                                    (|   |          (|   |              ",
  "       /|   |\\___    /|   |\\___                             ___/|   |\\       ___/|   |\\            ",
  "      (_|___|__/_)  (_|___|__/_)                            (_\\__|___|_)      (_\\__|___|_)          ",
];

const FIGURES_ROW_OFFSET = 0; // already positioned within its own canvas

// ---------------------------------------------------------------------------
// Ground + foreground embers (last two rows)
// ---------------------------------------------------------------------------

const GROUND = [
  "    .    *    .     .    *    .        .    *    .    .    *    .    .    *    .    .    *    .   ",
  "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
];

// ---------------------------------------------------------------------------
// Composition helpers
// ---------------------------------------------------------------------------

function pad(rows: string[], totalRows: number, rowOffset: number): string[] {
  const out: string[] = Array(totalRows).fill(" ".repeat(COLS));
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const padded = row.length >= COLS ? row.slice(0, COLS) : row + " ".repeat(COLS - row.length);
    out[rowOffset + i] = padded;
  }
  return out;
}

function composeBackground(): string[] {
  // Stack sky, moon overlay, ruins, figures, ground into one canvas so one
  // <pre> renders everything except the cycling fire.
  const canvas: string[] = Array(ROWS).fill(" ".repeat(COLS));
  const layers = [
    pad(SKY, ROWS, 0),
    pad(MOON, ROWS, 2),
    pad(RUINS, ROWS, 11),
    pad(FIGURES, ROWS, FIGURES_ROW_OFFSET),
    pad(GROUND, ROWS, ROWS - GROUND.length),
  ];
  for (let r = 0; r < ROWS; r++) {
    const chars = canvas[r].split("");
    for (const layer of layers) {
      const lrow = layer[r];
      for (let c = 0; c < COLS; c++) {
        const ch = lrow[c];
        if (ch && ch !== " ") chars[c] = ch;
      }
    }
    canvas[r] = chars.join("");
  }
  return canvas;
}

export function IntroScene() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), 350);
    return () => clearInterval(t);
  }, []);

  const bg = composeBackground();
  const fire = FIRE_FRAMES[tick % FIRE_FRAMES.length];

  return (
    <div className="relative inline-block font-mono leading-[12px] text-[11px]">
      {/* Background: sky + moon + ruins + figures + ground */}
      <pre className="m-0 p-0 text-neutral-300 opacity-80 select-none">
        {bg.join("\n")}
      </pre>
      {/* Fire layer, absolutely positioned atop the background */}
      <pre
        className="m-0 p-0 text-orange-400 select-none absolute left-0 pointer-events-none"
        style={{
          top: `${FIRE_ROW_OFFSET * 12}px`,
          filter: "drop-shadow(0 0 6px rgb(251 146 60 / 0.5))",
        }}
      >
        {fire.join("\n")}
      </pre>
    </div>
  );
}
