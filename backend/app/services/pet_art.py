from __future__ import annotations
import random
import string


# ---------------------------------------------------------------------------
# Rarity system
# ---------------------------------------------------------------------------

RARITY_COMMON = "common"
RARITY_UNCOMMON = "uncommon"
RARITY_RARE = "rare"
RARITY_LEGENDARY = "legendary"

RARITY_ORDER = [RARITY_COMMON, RARITY_UNCOMMON, RARITY_RARE, RARITY_LEGENDARY]

RARITY_WEIGHTS = {
    RARITY_COMMON: 60,
    RARITY_UNCOMMON: 25,
    RARITY_RARE: 12,
    RARITY_LEGENDARY: 3,
}


def _roll_rarity() -> str:
    pool = list(RARITY_WEIGHTS.keys())
    weights = list(RARITY_WEIGHTS.values())
    return random.choices(pool, weights=weights, k=1)[0]


def _pick(parts: dict) -> tuple:
    """Pick a part using gacha rarity. Returns (value, rarity)."""
    rarity = _roll_rarity()
    options = parts.get(rarity, parts.get(RARITY_COMMON, []))
    if not options:
        options = parts.get(RARITY_COMMON, [])
    return random.choice(options), rarity


# ---------------------------------------------------------------------------
# Ember parts libraries
# ---------------------------------------------------------------------------

# Core: the glowing heart of the flame — single char by rarity
CORES = {
    RARITY_COMMON: [".", "o", "O", "0", "u", "*"],
    RARITY_UNCOMMON: ["@", "8", "#", "%", "&"],
    RARITY_RARE: ["$", "Q", "8", "*"],
    RARITY_LEGENDARY: ["<>", "{}", "><", "()"],
}

# Flame tip silhouette style — affects the top of the flame
FLAMES = {
    RARITY_COMMON: ["plain", "plain", "plain", "tall", "wide"],
    RARITY_UNCOMMON: ["curl", "split", "tall", "wide"],
    RARITY_RARE: ["curl", "split", "double"],
    RARITY_LEGENDARY: ["crown", "triple", "halo"],
}

# Sparks: floating particles around/above the flame
SPARKS = {
    RARITY_COMMON: ["", "", "", ".", "'"],
    RARITY_UNCOMMON: [".", "..", "' '", "* "],
    RARITY_RARE: [". *", "* .", ".' '.", "* * *"],
    RARITY_LEGENDARY: ["*.' '.*", "*.* *.*", "'*. .*'", ". * . * ."],
}

# Aura: outer glow ring (empty for common/uncommon, decorates rare+)
AURAS = {
    RARITY_COMMON: ["", "", "", ""],
    RARITY_UNCOMMON: ["", "", "~"],
    RARITY_RARE: ["~~~", "* ~ *", "~ * ~"],
    RARITY_LEGENDARY: ["*~*~*~*~*", "}}}~~{{{", "((~~~~))"],
}

# Hue: color tag (frontend styles; stored on pet, not rendered as chars)
HUES = {
    RARITY_COMMON: ["orange", "red", "yellow"],
    RARITY_UNCOMMON: ["ember", "amber", "crimson"],
    RARITY_RARE: ["blue", "teal", "violet"],
    RARITY_LEGENDARY: ["white", "rainbow", "void"],
}


# ---------------------------------------------------------------------------
# Frame building
# ---------------------------------------------------------------------------


def _normalize_row(row: str) -> str:
    return str(row)[:20].ljust(20)


def _row(content: str) -> str:
    """Center content in a 20-char row."""
    content = content[:20]
    if not content.strip():
        return " " * 20
    start = 10 - len(content) // 2
    if start < 0:
        start = 0
    if start + len(content) > 20:
        start = max(0, 20 - len(content))
    return _normalize_row(" " * start + content)


def _pad(rows: list[str]) -> list[str]:
    """Pad rows to exactly 12 lines."""
    while len(rows) < 12:
        rows.append(" " * 20)
    return [_normalize_row(r) for r in rows[:12]]


# Core presentation — one char wide for small stages, paired for larger
def _core_chars(core: str, paired: bool) -> str:
    c = core[:1]
    if len(core) >= 2 and paired:
        return f"{core[0]} {core[-1]}"
    return f"{c} {c}" if paired else c


# Flame tip row given style + width level (1..3)
def _tip(style: str, level: int) -> str:
    if style == "crown":
        return ["/\\", "/\\/\\", "/\\*/\\"][level - 1]
    if style == "triple":
        return ["^", "^^^", "^^^^^"][level - 1]
    if style == "halo":
        return ["o", "(o)", "(o o)"][level - 1]
    if style == "double":
        return ["/\\", "/\\/\\", "/\\_/\\"][level - 1]
    if style == "split":
        return ["\\/", "\\_/", "\\_|_/"][level - 1]
    if style == "curl":
        return [")", "~)", "~)~"][level - 1]
    if style == "tall":
        return ["|", "/|\\", "/|||\\"][level - 1]
    if style == "wide":
        return ["~", "~~~", "~~~~~"][level - 1]
    return ["*", "***", "*****"][level - 1]


# ---------------------------------------------------------------------------
# Per-stage frame builders
# ---------------------------------------------------------------------------


def _smoke_frame(variant: int = 0) -> list[str]:
    """Shared 'dead' frame — drifting smoke trail above charred remains.
    Three variants animate the smoke rising upward (each frame, the wisp
    pattern shifts up one row and a new wisp appears at the bottom)."""
    smoke_rows = [
        # Variants 0..2 — same wisp shapes, different vertical phase.
        ["'  .  '", " ` . ` ", "  ~ ~  ", " ~ . ~ ", "'  ~  '", " .   . "],
        [" ` . ` ", "  ~ ~  ", " ~ . ~ ", "'  ~  '", " .   . ", "       "],
        ["  ~ ~  ", " ~ . ~ ", "'  ~  '", " .   . ", "       ", "       "],
    ]
    rows = ["" for _ in range(12)]
    for i, content in enumerate(smoke_rows[variant % 3]):
        rows[i] = _row(content) if content.strip() else ""
    rows[7] = _row(". + . + .")
    rows[8] = _row(" +  +  + ")
    rows[9] = _row("  =====  ")
    rows[10] = _row(" /     \\ ")
    rows[11] = _row("==========")
    return _pad(rows)


# Per-mood face glyphs. The pet's unique `core` shows through as the eye
# only on idle (so identity is visible at rest); other moods override.
# `variant` index alternates eye/mouth glyphs across animation frames so the
# pet appears to blink, chew, twinkle, or drift instead of staying frozen.
def _eyes(mood: str, core: str, variant: int = 0) -> str:
    if mood == "happy":    return ["^", "*"][variant % 2]    # twinkle
    if mood == "eating":   return ["O", "o"][variant % 2]    # blink mid-chew
    if mood == "sleeping": return ["-", "_"][variant % 2]    # eye lids droop
    if mood == "dead":     return "+"
    # Idle: subtle blink — show core glyph mostly, half-closed every other frame
    return [core[:1], "."][variant % 2]


def _mouth(mood: str, variant: int = 0) -> str:
    if mood == "happy":    return ["v", "U"][variant % 2]    # smile widens
    if mood == "eating":   return ["w", "u"][variant % 2]    # chew open/close
    if mood == "sleeping": return "_"
    return "_"


def _spark_phase(sparks: str, variant: int) -> str:
    """Shift / mirror sparks per-variant so the floating particles drift."""
    if not sparks:
        return ""
    if variant % 2 == 0:
        return sparks
    return sparks[::-1]


def _spark_frame(mood: str, core: str, flame: str,
                 sparks: str, aura: str, variant: int = 0) -> list[str]:
    """Tiny ember — a 4-row flicker. Just a face peeking out of a wisp."""
    if mood == "dead":
        return _smoke_frame(variant)

    eye = _eyes(mood, core, variant)
    mou = _mouth(mood, variant)
    sps = _spark_phase(sparks, variant)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[6] = _row(["z Z z", "Z z Z"][variant % 2])
        rows[7] = _row(",'`,")
        rows[8] = _row(f"({eye}_{eye})")
        rows[9] = _row(" `-' ")
        return _pad(rows)

    # Top decoration
    if mood == "happy" and sps:
        rows[5] = _row(sps[:7])
    elif mood == "eating":
        rows[6] = _row([". + .", " + . +"][variant % 2])

    # Tiny flame tip — alternate width for breathing effect
    rows[7] = _row(_tip(flame, 1 if variant % 2 == 0 else 1))
    # Face — eyes around the mouth
    rows[8] = _row(f"({eye} {mou} {eye})")
    # Wisp base
    rows[9] = _row(" `,_,' ")

    if aura:
        rows[10] = _row(aura[:9])
    return _pad(rows)


def _emberling_frame(mood: str, core: str, flame: str,
                     sparks: str, aura: str, variant: int = 0) -> list[str]:
    """Small flame creature — flame body curving around a face."""
    if mood == "dead":
        return _smoke_frame(variant)

    eye = _eyes(mood, core, variant)
    mou = _mouth(mood, variant)
    sps = _spark_phase(sparks, variant)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[3] = _row(["z Z z", "Z z Z"][variant % 2])
        rows[4] = _row(_tip(flame, 1))
        rows[5] = _row(",'.`,")
        rows[6] = _row(f",( {eye}_{eye} ),")
        rows[7] = _row(" `,_,' ")
        rows[8] = _row("   |   ")
        rows[9] = _row(" .===. ")
        return _pad(rows)

    # Top sparks (alternate row by variant for drift)
    if sps and mood == "happy":
        rows[2 if variant % 2 == 0 else 1] = _row(sps[:9])
    elif sps and mood == "idle":
        rows[3 if variant % 2 == 0 else 2] = _row(sps[:5])
    elif mood == "eating":
        rows[3] = _row([". + .", " + . +"][variant % 2])

    rows[4] = _row(_tip(flame, 1))
    rows[5] = _row(",'.`,")               # narrowing flame collar
    rows[6] = _row(f",( {eye} {mou} {eye} ),")  # face inside flame
    rows[7] = _row(" `,___,' ")           # bottom of flame body
    rows[8] = _row("   |   ")             # neck
    # Feet glow alternates on variant
    rows[9] = _row([" .===. ", " *===* "][variant % 2])

    if aura:
        rows[10] = _row(aura[:13])
    return _pad(rows)


def _ember_frame(mood: str, core: str, flame: str,
                 sparks: str, aura: str, variant: int = 0) -> list[str]:
    """Medium ember — bigger face inside a layered flame, with legs."""
    if mood == "dead":
        return _smoke_frame(variant)

    eye = _eyes(mood, core, variant)
    mou = _mouth(mood, variant)
    sps = _spark_phase(sparks, variant)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[1] = _row(["z Z z", "Z z Z"][variant % 2])
        rows[2] = _row(_tip(flame, 1))
        rows[3] = _row(_tip(flame, 2))
        rows[4] = _row(",-'`'-,")
        rows[5] = _row(f"( {eye} _ {eye} )")
        rows[6] = _row(" \\ ___ / ")
        rows[7] = _row("  `,_,'  ")
        rows[8] = _row("    |    ")
        rows[9] = _row("   /|\\   ")
        rows[10] = _row("  /_|_\\  ")
        rows[11] = _row("  =====  ")
        return _pad(rows)

    # Top sparks (drift between two rows per variant)
    if sps and mood == "happy":
        rows[0 if variant % 2 == 0 else 1] = _row(sps[:11])
    elif sps and mood == "idle":
        rows[1 if variant % 2 == 0 else 0] = _row(sps[:7])
    elif mood == "eating":
        rows[1] = _row([". + . + .", " + . + . "][variant % 2])

    rows[2] = _row(_tip(flame, 1))
    rows[3] = _row(_tip(flame, 2))
    rows[4] = _row(",-'`'-,")  # flame shoulders curving in
    # Face row + flame outline that hugs it
    rows[5] = _row(f"( {eye} {mou} {eye} )")
    rows[6] = _row(" \\.___./ ")           # rounded chin / flame fold
    rows[7] = _row("  `,_,'  ")           # base of flame body
    # Body
    rows[8] = _row("    |    ")           # waist
    rows[9] = _row("   /|\\   ")           # arms / inner flames
    rows[10] = _row("  /_|_\\  ")          # legs
    # Feet alternate
    rows[11] = _row(["  =====  ", "  ~===~  "][variant % 2])

    if aura:
        # Overlay aura over the feet line if it fits
        a = aura[:11]
        rows[11] = _row(a if len(a) >= 5 else rows[11])
    return _pad(rows)


def _fire_frame(mood: str, core: str, flame: str,
                sparks: str, aura: str, variant: int = 0) -> list[str]:
    """Full bonfire — tall body, crown of flames, broad logs at the base."""
    if mood == "dead":
        return _smoke_frame(variant)

    eye = _eyes(mood, core, variant)
    mou = _mouth(mood, variant)
    sps = _spark_phase(sparks, variant)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[0] = _row(["z Z z", "Z z Z"][variant % 2])
        rows[1] = _row(_tip(flame, 2))
        rows[2] = _row(_tip(flame, 3))
        rows[3] = _row(" .  ,  . ")
        rows[4] = _row(",-'```'-,")
        rows[5] = _row(f"( {eye}  _  {eye} )")
        rows[6] = _row(" \\.___./ ")
        rows[7] = _row("  `\\_/'  ")
        rows[8] = _row(" __|||__ ")
        rows[9] = _row("[==|||==]")
        rows[10] = _row("[========]")
        rows[11] = _row("'.________.'")
        return _pad(rows)

    # Top sparks (alternate row)
    if sps and mood == "happy":
        rows[0 if variant % 2 == 0 else 1] = _row(sps[:13])
    elif sps:
        rows[0] = _row(sps[:9])

    rows[1] = _row(_tip(flame, 2))
    rows[2] = _row(_tip(flame, 3))

    # Crown alternates between two patterns per variant
    if mood == "happy":
        rows[3] = _row(["*'. * .'*", "'.* * *.'"][variant % 2])
    elif mood == "eating":
        rows[3] = _row([". * + * .", " * . + . *"][variant % 2])
    else:
        rows[3] = _row([" .  ,  . ", " ,  .  , "][variant % 2])

    rows[4] = _row(",-'```'-,")              # flame shoulders
    rows[5] = _row(f"( {eye}  {mou}  {eye} )") # roomier face for the big stage
    rows[6] = _row(" \\.___./ ")              # chin / flame fold
    rows[7] = _row("  `\\_/'  ")              # neck
    rows[8] = _row(" __|||__ ")              # smoldering core base
    # Logs flicker on variant — middle gap shifts
    rows[9] = _row(["[==|||==]", "[=|||||=]"][variant % 2])
    rows[10] = _row("[========]")            # lower logs
    if aura:
        rows[11] = _row(aura[:17])
    else:
        rows[11] = _row("'.________.'")
    return _pad(rows)


STAGE_FRAME_BUILDERS = {
    "spark": _spark_frame,
    "emberling": _emberling_frame,
    "ember": _ember_frame,
    "fire": _fire_frame,
}


# ---------------------------------------------------------------------------
# Composition
# ---------------------------------------------------------------------------


NAMES = [
    "Mochi", "Kumo", "Pippin", "Ziggy", "Nori", "Tofu", "Boba", "Pixel",
    "Nimbus", "Sprout", "Waffle", "Gizmo", "Pudding", "Biscuit", "Noodle",
    "Truffle", "Pepper", "Mango", "Kiwi", "Peach", "Plum", "Olive",
    "Hazel", "Clover", "Ember", "Maple", "Cosmo", "Fern", "Pebble", "Quartz",
    "Cinder", "Blaze", "Kindle", "Pyre", "Wick", "Flint", "Ash", "Scorch",
]


def random_name() -> str:
    return random.choice(NAMES)


def random_id() -> str:
    return "".join(random.choices(string.ascii_lowercase + string.digits, k=8))


def roll_parts() -> dict:
    """Roll all gacha parts and return the parts bag (+ best rarity + hue)."""
    core, core_r = _pick(CORES)
    flame, flame_r = _pick(FLAMES)
    sparks, sparks_r = _pick(SPARKS)
    aura, aura_r = _pick(AURAS)
    hue, hue_r = _pick(HUES)

    best = max(
        [core_r, flame_r, sparks_r, aura_r, hue_r],
        key=lambda r: RARITY_ORDER.index(r),
    )

    return {
        "core": core,
        "flame": flame,
        "sparks": sparks,
        "aura": aura,
        "hue": hue,
        "rarity": best,
    }


# How many animation frames each mood loops through. Dead drifts longest
# (3-frame smoke rise); other moods alternate two variants for breath/blink.
MOOD_FRAME_COUNT = {
    "idle":     2,
    "happy":    2,
    "eating":   2,
    "sleeping": 2,
    "dead":     3,
}


def render(stage: str, parts: dict) -> dict[str, list[list[str]]]:
    """Render every mood's animation as a list of frame variants.

    Return shape: { mood -> [frame0, frame1, ...] } where each frame is a
    12-row list of 20-char strings. The frontend cycles through frames on a
    fixed tick to give the pet visible motion (blink, chew, drift, breath).
    """
    builder = STAGE_FRAME_BUILDERS.get(stage, _spark_frame)
    out: dict[str, list[list[str]]] = {}
    for mood in ("idle", "happy", "eating", "sleeping", "dead"):
        n = MOOD_FRAME_COUNT.get(mood, 1)
        out[mood] = [
            builder(
                mood,
                parts.get("core", "o"),
                parts.get("flame", "plain"),
                parts.get("sparks", ""),
                parts.get("aura", ""),
                v,
            )
            for v in range(n)
        ]
    return out


async def generate_art(stage: str = "spark") -> tuple[dict[str, list[list[str]]], dict]:
    """Roll fresh parts and render for the given stage.

    Returns (art, parts). Caller persists parts so later stage transitions
    re-render the same flame identity at a larger size.
    """
    parts = roll_parts()
    return render(stage, parts), parts


def rerender(stage: str, parts: dict) -> dict[str, list[list[str]]]:
    """Re-render existing parts at a new stage (identity-preserving growth)."""
    return render(stage, parts)
