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


def _smoke_frame() -> list[str]:
    """Shared 'dead' frame — a curl of smoke."""
    return _pad([
        "",
        "",
        _row("~ ~"),
        _row(". ~ ."),
        _row(" . . "),
        _row("  ~  "),
        "",
        "",
        "",
        _row(". . ."),
        "",
        "",
    ])


def _sleep_zzz(rows_prefix: int) -> str:
    """Zzz marker inserted at the given row count from top."""
    return _row("Zzz")


def _spark_frame(mood: str, core: str, flame: str,
                 sparks: str, aura: str) -> list[str]:
    """Tiny ember — barely a flicker near the bottom."""
    if mood == "dead":
        return _smoke_frame()

    c = core[:1]
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[6] = _row("zz")
        rows[8] = _row(_tip(flame, 1))
        rows[9] = _row(f"(-  -)")
        rows[10] = _row("'-'")
        return _pad(rows)

    # Sparks float above (only visible when happy or rare sparks)
    if sparks and mood == "happy":
        rows[6] = _row(sparks)
    elif sparks and mood == "idle":
        rows[7] = _row(sparks[:3])

    tip = _tip(flame, 1)
    rows[8] = _row(tip)
    if mood == "eating":
        rows[9] = _row(f"({c}w{c})")
    elif mood == "happy":
        rows[9] = _row(f"({c}^{c})")
    else:
        rows[9] = _row(f"({c} {c})")
    rows[10] = _row("'-'")
    if aura:
        rows[11] = _row(aura[:9])
    return _pad(rows)


def _emberling_frame(mood: str, core: str, flame: str,
                     sparks: str, aura: str) -> list[str]:
    """Small flame with a visible body."""
    if mood == "dead":
        return _smoke_frame()

    c = core[:1]
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[4] = _row("Zzz")
        rows[5] = _row(_tip(flame, 1))
        rows[6] = _row(_tip(flame, 2))
        rows[7] = _row(f"(-  -)")
        rows[8] = _row(" \\_/ ")
        rows[9] = _row("  |  ")
        rows[10] = _row("vvvvv")
        return _pad(rows)

    if sparks:
        rows[3] = _row(sparks)

    rows[4] = _row(_tip(flame, 1))
    rows[5] = _row(_tip(flame, 2))

    if mood == "eating":
        rows[6] = _row(f"({c} w {c})")
        rows[7] = _row(" \\O/ ")
    elif mood == "happy":
        rows[6] = _row(f"({c} ^ {c})")
        rows[7] = _row(" \\*/ ")
    else:
        rows[6] = _row(f"({c}   {c})")
        rows[7] = _row(" \\_/ ")

    rows[8] = _row("  |  ")
    rows[9] = _row(" /|\\ ")
    rows[10] = _row("vvvvv")
    if aura:
        rows[11] = _row(aura[:13])
    return _pad(rows)


def _ember_frame(mood: str, core: str, flame: str,
                 sparks: str, aura: str) -> list[str]:
    """Medium ember — distinct body with base."""
    if mood == "dead":
        return _smoke_frame()

    paired_core = _core_chars(core, paired=True)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[1] = _row("Zzz")
        rows[3] = _row(_tip(flame, 1))
        rows[4] = _row(_tip(flame, 2))
        rows[5] = _row(_tip(flame, 3))
        rows[6] = _row("(-   -)")
        rows[7] = _row(" \\___/ ")
        rows[8] = _row("   |   ")
        rows[9] = _row("  /|\\  ")
        rows[10] = _row(" /_|_\\ ")
        rows[11] = _row("vvvvvvv")
        return _pad(rows)

    if sparks:
        rows[0] = _row(sparks)

    rows[1] = _row(_tip(flame, 1))
    rows[2] = _row(_tip(flame, 2))
    rows[3] = _row(_tip(flame, 3))

    if mood == "eating":
        rows[4] = _row(f" .{paired_core}. ")
        rows[5] = _row(f"( {paired_core} )")
        rows[6] = _row(" \\ W / ")
    elif mood == "happy":
        rows[4] = _row(f" *{paired_core}* ")
        rows[5] = _row(f"( {paired_core} )")
        rows[6] = _row(" \\ v / ")
    else:
        rows[4] = _row(f"  {paired_core}  ")
        rows[5] = _row(f"( {paired_core} )")
        rows[6] = _row(" \\ _ / ")

    rows[7] = _row("  \\_/  ")
    rows[8] = _row("   |   ")
    rows[9] = _row("  /|\\  ")
    rows[10] = _row(" /_|_\\ ")
    rows[11] = _row("vvvvvvv")
    if aura:
        # Overlay aura on the last row if it fits, otherwise skip
        pass
    return _pad(rows)


def _fire_frame(mood: str, core: str, flame: str,
                sparks: str, aura: str) -> list[str]:
    """Full bonfire — tall, with logs and aura."""
    if mood == "dead":
        return _smoke_frame()

    paired_core = _core_chars(core, paired=True)
    rows: list[str] = ["" for _ in range(12)]

    if mood == "sleeping":
        rows[0] = _row("Zzz")
        rows[1] = _row(_tip(flame, 1))
        rows[2] = _row(_tip(flame, 2))
        rows[3] = _row(_tip(flame, 3))
        rows[4] = _row(" .   . ")
        rows[5] = _row(" (- -) ")
        rows[6] = _row("  \\-/  ")
        rows[7] = _row(" /   \\ ")
        rows[8] = _row(" \\___/ ")
        rows[9] = _row("|--|--| ")
        rows[10] = _row("[======]")
        rows[11] = _row("'------'")
        return _pad(rows)

    if sparks:
        rows[0] = _row(sparks)

    rows[1] = _row(_tip(flame, 2))
    rows[2] = _row(_tip(flame, 3))

    # Crown of small flames around the main body
    if mood == "happy":
        rows[3] = _row("*. .*. .*")
    elif mood == "eating":
        rows[3] = _row(". .*. .")
    else:
        rows[3] = _row(" . * . ")

    if mood == "eating":
        rows[4] = _row(f"* {paired_core} *")
        rows[5] = _row(f" ( {paired_core} ) ")
        rows[6] = _row("  \\ W /  ")
    elif mood == "happy":
        rows[4] = _row(f"* {paired_core} *")
        rows[5] = _row(f" ( {paired_core} ) ")
        rows[6] = _row("  \\^v^/  ")
    else:
        rows[4] = _row(f"  {paired_core}  ")
        rows[5] = _row(f" ( {paired_core} ) ")
        rows[6] = _row("  \\ v /  ")

    rows[7] = _row("   \\_/   ")
    rows[8] = _row("  /|||\\  ")
    rows[9] = _row("|--|-|--|")
    rows[10] = _row("[========]")
    if aura:
        rows[11] = _row(aura[:17])
    else:
        rows[11] = _row("'--------'")
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


def render(stage: str, parts: dict) -> dict[str, list[str]]:
    """Render all 5 mood frames for a given stage + parts bag."""
    builder = STAGE_FRAME_BUILDERS.get(stage, _spark_frame)
    return {
        mood: builder(
            mood,
            parts.get("core", "o"),
            parts.get("flame", "plain"),
            parts.get("sparks", ""),
            parts.get("aura", ""),
        )
        for mood in ("idle", "happy", "eating", "sleeping", "dead")
    }


async def generate_art(stage: str = "spark") -> tuple[dict[str, list[str]], dict]:
    """Roll fresh parts and render for the given stage.

    Returns (art, parts). Caller persists parts so later stage transitions
    re-render the same flame identity at a larger size.
    """
    parts = roll_parts()
    return render(stage, parts), parts


def rerender(stage: str, parts: dict) -> dict[str, list[str]]:
    """Re-render existing parts at a new stage (identity-preserving growth)."""
    return render(stage, parts)
