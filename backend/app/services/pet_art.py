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
# Parts libraries
# ---------------------------------------------------------------------------

# Eyes are (left_char, right_char) pairs
EYES = {
    RARITY_COMMON: [
        ("o", "o"), ("O", "O"), ("u", "u"), ("0", "0"),
        (".", "."), ("-", "-"), ("v", "v"),
    ],
    RARITY_UNCOMMON: [
        ("@", "@"), ("*", "*"), ("^", "^"), ("T", "T"),
        ("e", "e"), (">", "<"), ("c", "c"),
    ],
    RARITY_RARE: [
        ("@@", "@@"), ("**", "**"), ("><", "<>"),
        ("oo", "oo"), ("^^", "^^"),
    ],
    RARITY_LEGENDARY: [
        ("<>", "<>"), ("*.", ".*"), ("-.", ".-"),
        (";;", ";;"), ("{}", "{}"),
    ],
}

# Mouths per mood
MOUTHS = {
    "idle": {
        RARITY_COMMON: ["w", "u", "-", "~", "3", "o"],
        RARITY_UNCOMMON: ["..", "ww", "uu", "~~"],
        RARITY_RARE: ["<>", "VV", "ww", " OO "],
        RARITY_LEGENDARY: ["<3", "{*}", "OwO"],
    },
    "happy": {
        RARITY_COMMON: ["D", "P", "3", "w", "O"],
        RARITY_UNCOMMON: ["DD", "PP", "wD", "w3"],
        RARITY_RARE: ["><", "VV", "*w*"],
        RARITY_LEGENDARY: ["<3", "*D*", "OwO"],
    },
    "eating": {
        RARITY_COMMON: ["O", "o", "C", "U", "A"],
        RARITY_UNCOMMON: ["Om", "oM", "CA", "UU"],
        RARITY_RARE: ["Ono", "CAO", "OOO"],
        RARITY_LEGENDARY: ["*O*", "<O>"],
    },
    "sleeping": {
        RARITY_COMMON: ["-", "..", "~", "zz"],
        RARITY_UNCOMMON: ["--", "zz", "..", "~~"],
        RARITY_RARE: ["zzz", "---"],
        RARITY_LEGENDARY: ["*zz*", "{zz}"],
    },
    "dead": {
        RARITY_COMMON: ["X", "x", "#"],
        RARITY_UNCOMMON: ["XX", "xx"],
        RARITY_RARE: ["###", "xxx"],
        RARITY_LEGENDARY: ["X_X", "-X-"],
    },
}

# Top-of-head decorations (ears, horns, antennae, crown)
HEAD_TOPS = {
    RARITY_COMMON: [
        " /\\___/\\ ",
        "  /\\_/\\  ",
        "  .--.   ",
        "  _||_   ",
        "  (   )  ",
    ],
    RARITY_UNCOMMON: [
        " /\\*_/\\ ",
        " /^^   ^^\\",
        "  _||_   ",
        " /v\\_/v\\ ",
        " /\\_/\\_/\\",
    ],
    RARITY_RARE: [
        " /\\*/\\*\\",
        "  @||@   ",
        " /*\\_/^*\\",
        " \\^/^^\\^/",
        "  |^^^|  ",
    ],
    RARITY_LEGENDARY: [
        " *{_}*_  ",
        "  \\{o}/  ",
        "  |***|  ",
        " *\\_/\\_/*",
        "  (*** ) ",
    ],
}

# Tails / bottom decorations
TAILS = {
    RARITY_COMMON: ["~", "S", "=", "s", "~", "c"],
    RARITY_UNCOMMON: ["~~", "SS", "==", "~~>", "sS"],
    RARITY_RARE: ["~~~>", "*~*", "=O=", "<S>"],
    RARITY_LEGENDARY: ["<~~~>", "*===*", "{~~}", "*~O~*"],
}

# Accessories (applied as extra rows or modifications)
ACCESSORIES = {
    RARITY_COMMON: [None, None, None, None, None],  # mostly nothing
    RARITY_UNCOMMON: [
        "bow",    # bow tie
        "collar", # collar
        "scarf",  # scarf
    ],
    RARITY_RARE: [
        "tophat",  # top hat
        "halo",    # halo above head
        "wings_s", # small wings
        "mask",    # eye mask
    ],
    RARITY_LEGENDARY: [
        "crown",   # crown
        "wings_l", # large wings
        "aura",    # glowing aura
        "dual",    # two accessories
    ],
}

# ---------------------------------------------------------------------------
# Archetype templates
# Each archetype function takes parts and returns all 5 mood frames.
# ---------------------------------------------------------------------------


def _normalize_row(row: str) -> str:
    return str(row)[:20].ljust(20)


def _blank() -> list[str]:
    return [" " * 20]


def _pad(rows: list[str]) -> list[str]:
    """Pad rows to exactly 12 lines."""
    while len(rows) < 12:
        rows.append(" " * 20)
    return [_normalize_row(r) for r in rows[:12]]


# -- Helpers for building frames -------------------------------------------

def _row(content: str, center: int = 10) -> str:
    """Center content around a column in a 20-char wide row."""
    content = content[:20]
    if not content.strip():
        return " " * 20
    start = center - len(content) // 2
    if start < 0:
        start = 0
    if start + len(content) > 20:
        start = max(0, 20 - len(content))
    return _normalize_row(" " * start + content)


def _face(eye_l: str, eye_r: str, mouth: str) -> str:
    """Build face ( eye mouth eye ), truncating parts to fit in ~12 chars."""
    el, er, m = eye_l[:2], eye_r[:2], mouth[:3]
    inner = f"{el} {m} {er}"
    # Truncate progressively if too wide (max ~12 chars inside parens)
    while len(inner) > 12:
        if len(m) > 1:
            m = m[:-1]
        elif len(el) > 1:
            el = el[:-1]
            er = er[:-1]
        else:
            break
        inner = f"{el} {m} {er}"
    return f"( {inner} )"


def _tail_str(tail: str, max_len: int = 4) -> str:
    return tail[:max_len]


# -- Archetype: Cat ---------------------------------------------------------
# Tapered body: ears -> face -> whiskers -> chin -> body -> legs

def _gen_cat(el: str, er: str, mouths: dict, head_top: str,
             tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail)
        rows: list[str] = []

        # Row 0-1: accessory / zzz
        if accessory == "tophat":
            rows.append(_row("[_]"))
            rows.append(_row(" | "))
        elif accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
            rows.append("")
        else:
            rows.append("")
            rows.append("")
        if zzz:
            rows[1] = _row("Zzz")

        # Body - centered on col 10
        rows.append(_row("/\\___/\\"))
        rows.append(_row(_face(eye_l, eye_r, m)))
        rows.append(_row("=( \\___/ )="))
        rows.append(_row("\\_____/"))

        acc_ch = ""
        if accessory in ("bow", "collar", "scarf"):
            acc_ch = ">" if accessory == "bow" else "=" if accessory == "collar" else "~"
        body_top = f"/{acc_ch}   {acc_ch}\\" if acc_ch else "/|   |\\"
        rows.append(_row(body_top))
        rows.append(_row("/ |   | \\"))

        rows.append(_row(f'"  "  {tail_s}'))
        rows.append(_row('"" ""'))

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy"),
        "eating": make("eating"),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Blob --------------------------------------------------------
# Round body: head -> eyes -> mouth -> chin -> taper -> bottom

def _gen_blob(el: str, er: str, mouths: dict, head_top: str,
              tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail)
        el_s, er_s, m_s = eye_l[:2], eye_r[:2], m[:3]
        rows: list[str] = []

        if accessory == "tophat":
            rows.append(_row("[_]"))
            rows.append(_row(" | "))
        elif accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
            rows.append("")
        else:
            rows.append("")
            rows.append("")
        if zzz:
            rows[1] = _row("Zzz")

        # All rows centered at col 10
        rows.append(_row(".----."))
        rows.append(_row(f"/ {el_s}  {er_s} \\"))
        rows.append(_row(f"|  {m_s}  |"))
        rows.append(_row("\\ ___ /"))
        rows.append(_row("\\   /"))
        rows.append(_row("\\_/"))
        rows.append(_row(tail_s) if tail_s else "")

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy"),
        "eating": make("eating"),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Bird --------------------------------------------------------
# Compact: crest -> head -> beak -> wings -> body -> feet

def _gen_bird(el: str, er: str, mouths: dict, head_top: str,
              tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             wings_out: bool = False, zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail)
        el_s, er_s = eye_l[:1], eye_r[:1]
        m_s = m[:3]
        rows: list[str] = []

        if accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
        else:
            rows.append("")
        if zzz:
            rows.append(_row("Zzz"))
        else:
            rows.append("")

        # Head and body all centered
        ht_s = head_top[:7]
        rows.append(_row(ht_s))
        rows.append(_row(f"({el_s}>{er_s})"))
        rows.append(_row(m_s))

        if wings_out or accessory in ("wings_s", "wings_l", "dual"):
            if accessory in ("wings_l", "dual"):
                rows.append(_row("/~~\\___/~~\\"))
                rows.append(_row("/    \\_/    \\"))
            else:
                rows.append(_row("/\\_/\\_/\\"))
                rows.append(_row("/  \\_/ \\  \\"))
        else:
            rows.append(_row("\\_/"))
            rows.append(_row("/   \\"))

        rows.append(_row("| |"))
        rows.append(_row(f"/ \\ {tail_s}"))
        rows.append(_row("/   \\"))

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy", wings_out=True),
        "eating": make("eating", wings_out=True),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Tall --------------------------------------------------------
# Upright biped: head -> face -> neck -> arms -> body -> legs

def _gen_tall(el: str, er: str, mouths: dict, head_top: str,
              tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             arms_up: bool = False, zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail)
        rows: list[str] = []

        if accessory == "tophat":
            rows.append(_row("[_]"))
            rows.append(_row(" | "))
        elif accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
            rows.append("")
        else:
            rows.append("")
            rows.append("")
        if zzz:
            rows[1] = _row("Zzz")

        ht_s = head_top[:7]
        rows.append(_row(ht_s))
        rows.append(_row(_face(eye_l, eye_r, m)))
        rows.append(_row("\\_/"))

        if arms_up:
            rows.append(_row("\\| |/"))
        else:
            rows.append(_row("/| |\\"))
        rows.append(_row("| |"))

        if accessory in ("bow", "collar", "scarf"):
            ch = ">" if accessory == "bow" else "=" if accessory == "collar" else "~"
            rows.append(_row(f"[{ch*3}]"))
        else:
            rows.append(_row("[|||]"))
        rows.append(_row("| |"))

        rows.append(_row(f"/ \\ {tail_s}"))
        rows.append(_row("/   \\"))

        if accessory == "aura":
            rows.append(_row("* ~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy", arms_up=True),
        "eating": make("eating", arms_up=True),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Bug ---------------------------------------------------------
# Segmented: antennae -> head -> thorax -> abdomen -> legs

def _gen_bug(el: str, er: str, mouths: dict, head_top: str,
             tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail, 3)
        el_s, er_s = eye_l[:1], eye_r[:1]
        m_s = m[:3]
        rows: list[str] = []

        if accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
        else:
            rows.append("")
        if zzz:
            rows.append(_row("Zzz"))
        else:
            rows.append("")

        ht_s = head_top[:7]
        rows.append(_row(ht_s))
        rows.append(_row(f"\\{el_s}   {er_s}/"))
        rows.append(_row(f"\\ {m_s} /"))
        rows.append(_row("/|O O|\\"))
        rows.append(_row("/ |o o| \\"))
        rows.append(_row("/  |===|  \\"))
        rows.append(_row("\\  |===|  /"))
        rows.append(_row(f"wW |   | Ww {tail_s}"))

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy"),
        "eating": make("eating"),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Ghost -------------------------------------------------------
# Wispy: dome -> face -> body -> wisps

def _gen_ghost(el: str, er: str, mouths: dict, head_top: str,
               tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             zzz: bool = False, float_up: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail, 3)
        el_s, er_s = eye_l[:2], eye_r[:2]
        m_s = m[:3]
        rows: list[str] = []

        if accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
        else:
            rows.append("")
        if zzz:
            rows.append(_row("Zzz"))
        else:
            rows.append("")

        rows.append(_row(".----."))
        rows.append(_row(f"/ {el_s}  {er_s} \\"))
        rows.append(_row(f"|  {m_s}  |"))
        rows.append(_row("| \\__/ |"))
        rows.append(_row("|      |"))
        rows.append(_row("|      |"))
        rows.append(_row("\\~  ~/"))
        rows.append(_row(f"~ \\{tail_s}/ ~"))

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy", float_up=True),
        "eating": make("eating"),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# -- Archetype: Dragon ------------------------------------------------------
# Horned: head -> face -> body -> legs, fire for happy

def _gen_dragon(el: str, er: str, mouths: dict, head_top: str,
                tail: str, accessory: str | None) -> dict[str, list[str]]:
    def make(mood: str, eye_l: str = el, eye_r: str = er,
             fire: bool = False, zzz: bool = False) -> list[str]:
        m = mouths.get(mood, "w")
        tail_s = _tail_str(tail)
        el_s, er_s = eye_l[:2], eye_r[:2]
        m_s = m[:3]
        rows: list[str] = []

        if accessory == "tophat":
            rows.append(_row("[_]"))
            rows.append(_row(" | "))
        elif accessory in ("halo", "crown"):
            rows.append(_row("oooo" if accessory == "halo" else "/\\*/\\"))
            rows.append("")
        else:
            rows.append("")
            rows.append("")

        if zzz:
            rows.append(_row("Zzz"))
        elif fire:
            rows.append(_row("*~*"))
            rows.append(_row("*~~~*"))
        else:
            rows.append("")

        ht_s = head_top[:7]
        rows.append(_row(ht_s))
        rows.append(_row(f"/ {el_s} {er_s} \\"))
        rows.append(_row(f"/ {m_s}  \\"))
        rows.append(_row("\\ \\___/ /"))

        if accessory in ("wings_s", "wings_l", "dual"):
            if accessory in ("wings_l", "dual"):
                rows.append(_row("/~~\\|   |~~\\"))
                rows.append(_row("\\~~/ \\_/ \\~~/"))
            else:
                rows.append(_row("/\\ \\_|_/ /\\"))
                rows.append(_row("\\/       \\/"))
        else:
            rows.append(_row("|   |"))
            rows.append(_row("\\|___|/"))

        rows.append(_row(f"/ \\ {tail_s}"))
        rows.append(_row("/   \\"))

        if accessory == "aura":
            rows.append(_row("* ~~~~ *"))
        else:
            rows.append("")

        return _pad(rows)

    return {
        "idle": make("idle"),
        "happy": make("happy", fire=True),
        "eating": make("eating"),
        "sleeping": make("sleeping", eye_l="-", eye_r="-", zzz=True),
        "dead": make("dead", eye_l="X", eye_r="X"),
    }


# ---------------------------------------------------------------------------
# Main composition
# ---------------------------------------------------------------------------

ARCHETYPES = [
    ("cat", _gen_cat),
    ("blob", _gen_blob),
    ("bird", _gen_bird),
    ("tall", _gen_tall),
    ("bug", _gen_bug),
    ("ghost", _gen_ghost),
    ("dragon", _gen_dragon),
]

NAMES = [
    "Mochi", "Kumo", "Pippin", "Ziggy", "Nori", "Tofu", "Boba", "Pixel",
    "Nimbus", "Sprout", "Waffle", "Gizmo", "Pudding", "Biscuit", "Noodle",
    "Truffle", "Pepper", "Mango", "Kiwi", "Peach", "Plum", "Olive",
    "Hazel", "Clover", "Ember", "Maple", "Cosmo", "Fern", "Pebble", "Quartz",
]


def random_name() -> str:
    return random.choice(NAMES)


def random_id() -> str:
    return "".join(random.choices(string.ascii_lowercase + string.digits, k=8))


def _pick_parts() -> dict:
    """Roll gacha for all parts and return them."""
    eyes, eye_rarity = _pick(EYES)
    head_top, head_rarity = _pick(HEAD_TOPS)
    tail, tail_rarity = _pick(TAILS)
    acc, acc_rarity = _pick(ACCESSORIES)

    # If dual legendary, roll a second accessory
    if acc == "dual":
        acc2, _ = _pick(ACCESSORIES)
        if acc2 and acc2 != "dual":
            acc = acc2  # use the second one as the actual accessory

    mouths = {}
    for mood in ("idle", "happy", "eating", "sleeping", "dead"):
        mouths[mood], _ = _pick(MOUTHS[mood])

    # Find highest rarity for display
    best = max(
        [eye_rarity, head_rarity, tail_rarity, acc_rarity],
        key=lambda r: [RARITY_COMMON, RARITY_UNCOMMON, RARITY_RARE, RARITY_LEGENDARY].index(r),
    )

    return {
        "eyes": eyes,
        "head_top": head_top,
        "tail": tail,
        "accessory": acc,
        "mouths": mouths,
        "best_rarity": best,
    }


def _compose_creature() -> dict[str, list[str]]:
    """Create a creature with gacha parts on a random archetype."""
    name, gen = random.choice(ARCHETYPES)
    parts = _pick_parts()
    el, er = parts["eyes"]

    return gen(
        el=el, er=er,
        mouths=parts["mouths"],
        head_top=parts["head_top"],
        tail=parts["tail"],
        accessory=parts["accessory"],
    )


# Public API - no longer needs LLM
async def generate_art(api_key: str = "", model: str = "") -> dict[str, list[str]]:
    """Generate procedural creature art. API key/model ignored (kept for compat)."""
    return _compose_creature()


def _fallback_frame(mood: str) -> list[str]:
    return [
        "                    ",
        "                    ",
        "     /\\_____/\\      ",
        "    /  o   o  \\     ",
        f"   (    {mood[0].upper()}    )    ",
        "    \\  \\___/  /     ",
        "     \\_______/      ",
        "      |     |       ",
        "      |     |       ",
        "     /       \\      ",
        "    /         \\     ",
        "                    ",
    ]
