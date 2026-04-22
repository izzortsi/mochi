from __future__ import annotations
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from app import store
from app.services import pet_art, pet_stats

router = APIRouter()

COAL_ART = {
    "idle": [
        "                    ",
        "                    ",
        "                    ",
        "                    ",
        "       .----.       ",
        "      / .  . \\      ",
        "     | . () . |     ",
        "      \\ .  . /      ",
        "       '----'       ",
        "                    ",
        "   click to kindle  ",
        "                    ",
    ],
    "happy": [
        "                    ",
        "                    ",
        "                    ",
        "          .         ",
        "       .----.       ",
        "      / *  * \\      ",
        "     | . () . |     ",
        "      \\ *  * /      ",
        "       '----'       ",
        "                    ",
        "   click to kindle  ",
        "                    ",
    ],
    "eating": [],
    "sleeping": [],
    "dead": [],
}

# === New three-stat economy ===
# health       ← per phase checkmark (staying alive requires only a little
#                daily work); plus a small session-completion bonus.
# happiness    ← full-day completion + petting the pet (right-click).
# knowledge/xp ← per tier-clear on a day; drives stage evolution.

# Per-phase health bump. Tier-scaled so harder sessions reward more per phase.
PHASE_HEALTH_BUMP = {
    "bronze": 3.0,
    "silver": 6.0,
    "gold":   10.0,
}

# Small additional health bonus when all 5 phases of a session are done.
SESSION_HEALTH_BONUS = {
    "bronze": 2.0,
    "silver": 4.0,
    "gold":   6.0,
}

# XP awarded when all sessions of that tier on a day are complete. Drives
# pet stage evolution (spark → emberling → ember → fire).
TIER_XP_BUMP = {
    "bronze": 30,
    "silver": 60,
    "gold":   120,
}

# Joy bump when the day is fully completed (all three tiers cleared).
DAY_COMPLETE_JOY = 25.0

# Right-click-to-pet interaction.
PET_JOY_BUMP = 3.0
PET_COOLDOWN_SECONDS = 30

# Each fresh pet life starts with this many gacha re-rolls. A re-roll keeps
# the pet alive and only changes parts/art/hue/rarity.
REHATCH_TOKENS_PER_LIFE = 2

# New ember stages
STAGE_XP = {"coal": 0, "spark": 0, "emberling": 100, "ember": 500, "fire": 1500}

# Migration map from legacy stages → new ember stages
LEGACY_STAGE_MAP = {
    "egg": "coal",
    "hatchling": "spark",
    "baby": "emberling",
    "teen": "ember",
    "adult": "fire",
}


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _stage_for_xp(xp: int, hatched: bool) -> str:
    if not hatched:
        return "coal"
    if xp >= 1500:
        return "fire"
    if xp >= 500:
        return "ember"
    if xp >= 100:
        return "emberling"
    return "spark"


def _migrate_pet(pet: dict) -> dict:
    """One-time migration for pets saved with the old archetype system.

    Maps legacy stage names to new ember stages. If the pet has no parts bag,
    rolls a new one and re-renders. Also re-renders any pet whose stored art
    is in the old single-frame-per-mood format so the new multi-frame UI
    receives `list[list[str]]` for each mood instead of `list[str]`.
    """
    stage = pet.get("stage", "coal")
    if stage in LEGACY_STAGE_MAP:
        pet["stage"] = LEGACY_STAGE_MAP[stage]
    if not pet.get("parts") and pet.get("stage") != "coal":
        parts = pet_art.roll_parts()
        pet["parts"] = parts
        pet["hue"] = parts["hue"]
        pet["rarity"] = parts["rarity"]
        pet["art"] = pet_art.render(pet["stage"], parts)
    elif pet.get("parts") and _is_legacy_art(pet.get("art")):
        pet["art"] = pet_art.render(pet["stage"], pet["parts"])
    # Backfill the attribute block for pets that predate the stats system.
    if pet.get("stage") != "coal" and not pet.get("stats"):
        pet["stats"] = pet_stats.baseline_stats()
    return pet


def _is_legacy_art(art) -> bool:
    """Return True if `art` is the old single-frame-per-mood shape.
    Old: { mood: ["row0", "row1", ...] }   →  art["idle"][0] is `str`
    New: { mood: [[..rows..], [..rows..]] } →  art["idle"][0] is `list`
    """
    if not isinstance(art, dict):
        return False
    sample = art.get("idle") or next(iter(art.values()), None)
    if not isinstance(sample, list) or not sample:
        return False
    return isinstance(sample[0], str)


# Hours for a fully-fed pet to fully decay without any feeding.
# Roughly 3× gentler than the initial settings so the pet can survive a few
# days off study without dying.
HEALTH_DECAY_HOURS = 504    # 3 weeks → ~4.8% HP / day
HAPPINESS_DECAY_HOURS = 360  # 2 weeks → ~6.7% happiness / day


def _decay_pet(pet: dict) -> dict:
    pet = _migrate_pet(pet)
    if pet.get("died") or pet.get("stage") == "coal":
        return pet
    last_fed = pet.get("lastFed", pet.get("born", _now()))
    try:
        dt = datetime.fromisoformat(last_fed)
    except (ValueError, TypeError):
        dt = datetime.now(timezone.utc)
    hours = (datetime.now(timezone.utc) - dt).total_seconds() / 3600
    pet["health"] = max(0.0, pet.get("health", 100) - (hours / HEALTH_DECAY_HOURS) * 100)
    pet["happiness"] = max(0.0, pet.get("happiness", 100) - (hours / HAPPINESS_DECAY_HOURS) * 100)
    if pet["health"] <= 0 and not pet.get("died"):
        pet["died"] = _now()
        # Dead art is rendered inline by the frame builders (smoke)
        if pet.get("parts"):
            pet["art"] = pet_art.render(pet["stage"], pet["parts"])
    return pet


def _mood_from_state(pet: dict) -> str:
    if pet.get("died"):
        return "dead"
    health = pet.get("health", 100)
    happiness = pet.get("happiness", 100)
    if health > 70 and happiness > 60: return "happy"
    if health > 70 and happiness > 30: return "idle"
    if health > 40: return "hungry"
    if health > 10: return "sad"
    return "desperate"


@router.get("/api/pet")
def get_pet():
    pet = store.load_pet()
    if not pet:
        return {
            "id": None,
            "name": None,
            "stage": "coal",
            "health": 100,
            "happiness": 100,
            "mood": "waiting",
            "art": COAL_ART,
            "hue": None,
            "rarity": None,
        }
    pet = _decay_pet(pet)
    store.save_pet(pet)

    mood = _mood_from_state(pet)

    return {
        "id": pet.get("id"),
        "name": pet.get("name"),
        "stage": pet.get("stage", "coal"),
        "health": round(pet.get("health", 100), 1),
        "happiness": round(min(100, pet.get("happiness", 100)), 1),
        "mood": mood,
        "art": pet.get("art", COAL_ART),
        "hue": pet.get("hue"),
        "rarity": pet.get("rarity"),
        "died": pet.get("died"),
        "born": pet.get("born"),
        "lastFed": pet.get("lastFed"),
        "totalXpEarned": pet.get("totalXpEarned", 0),
        # Gacha re-rolls remaining for this life. Spent by /api/pet/rehatch.
        # Legacy pets default to the full budget.
        "rehatchTokens": int(pet.get("rehatchTokens", REHATCH_TOKENS_PER_LIFE)),
        # 4-stat attribute block; baseline 10 per stat, sum fixed at 40.
        "stats": pet.get("stats") or pet_stats.baseline_stats(),
    }


@router.post("/api/pet/hatch")
async def hatch_pet(body: dict):
    name = (body.get("name") or "").strip() or pet_art.random_name()

    existing = store.load_pet()
    if existing and not existing.get("died"):
        raise HTTPException(400, "pet already alive")

    art, parts = await pet_art.generate_art(stage="spark")
    stats = pet_stats.roll_stats()

    pet = {
        "id": pet_art.random_id(),
        "name": name,
        "born": _now(),
        "died": None,
        "stage": "spark",
        "health": 100.0,
        "happiness": 100.0,
        "lastFed": _now(),
        "totalXpEarned": 0,
        "parts": parts,
        "hue": parts["hue"],
        "rarity": parts["rarity"],
        "art": art,
        "stats": stats,
        # Each fresh life starts with N gacha re-rolls. Spent via /api/pet/rehatch.
        "rehatchTokens": REHATCH_TOKENS_PER_LIFE,
    }
    store.save_pet(pet)
    return {
        "ok": True, "name": name, "id": pet["id"],
        "hue": parts["hue"], "rehatchTokens": REHATCH_TOKENS_PER_LIFE,
    }


@router.post("/api/pet/rehatch")
async def rehatch_pet(body: dict | None = None):
    """Re-roll the pet's parts (gacha re-roll). Keeps name, XP, stats, stage —
    only the parts/art/hue/rarity change. Costs 1 rehatchToken. Pet must be alive."""
    pet = store.load_pet()
    if not pet:
        raise HTTPException(400, "no pet to rehatch")
    if pet.get("died"):
        raise HTTPException(400, "pet is dead; hatch a new one instead")
    tokens = int(pet.get("rehatchTokens", REHATCH_TOKENS_PER_LIFE))
    if tokens <= 0:
        raise HTTPException(400, "no rehatches left for this life")

    parts = pet_art.roll_parts()
    stats = pet_stats.roll_stats()
    pet["parts"] = parts
    pet["hue"] = parts["hue"]
    pet["rarity"] = parts["rarity"]
    pet["art"] = pet_art.render(pet.get("stage", "spark"), parts)
    pet["stats"] = stats
    pet["rehatchTokens"] = tokens - 1
    store.save_pet(pet)
    return {
        "ok": True,
        "rehatchTokens": pet["rehatchTokens"],
        "hue": parts["hue"],
        "rarity": parts["rarity"],
        "stats": stats,
    }


def _apply_feed(
    pet: dict, health_delta: float = 0, happiness_delta: float = 0,
    xp_gained: int = 0, mark_fed: bool = True,
) -> dict:
    """Bump one or more stats. Health/happiness clamp to [0, 100]; XP accrues.
    Stage re-renders when totalXpEarned crosses a threshold."""
    if health_delta:
        pet["health"] = min(100, pet.get("health", 100) + health_delta)
    if happiness_delta:
        pet["happiness"] = min(100, pet.get("happiness", 100) + happiness_delta)
    if mark_fed:
        pet["lastFed"] = _now()
    if xp_gained:
        pet["totalXpEarned"] = pet.get("totalXpEarned", 0) + xp_gained
        old_stage = pet.get("stage", "spark")
        new_stage = _stage_for_xp(pet["totalXpEarned"], True)
        pet["stage"] = new_stage
        if new_stage != old_stage and pet.get("parts"):
            pet["art"] = pet_art.render(new_stage, pet["parts"])
            # Evolution rewards stat growth — distributed toward the
            # lowest-rolled stats so the pet rounds out as it matures.
            pet["stats"] = pet_stats.evolve_stats(
                pet.get("stats") or pet_stats.baseline_stats()
            )
    return pet


def _alive_pet() -> dict | None:
    pet = store.load_pet()
    if not pet or pet.get("died") or pet.get("stage") == "coal":
        return None
    return pet


def feed_pet_phase(session_tier: str):
    """Per-phase health bump. The dominant way to keep the pet alive."""
    pet = _alive_pet()
    if not pet:
        return
    _apply_feed(pet, health_delta=PHASE_HEALTH_BUMP.get(session_tier, 3.0))
    store.save_pet(pet)


def feed_pet_session(session_tier: str):
    """Small extra health bonus when a full session finishes."""
    pet = _alive_pet()
    if not pet:
        return
    _apply_feed(pet, health_delta=SESSION_HEALTH_BONUS.get(session_tier, 2.0))
    store.save_pet(pet)


def feed_pet_tier_complete(day_tier: str):
    """Tier clear = knowledge/XP toward stage evolution. No health or joy."""
    pet = _alive_pet()
    if not pet:
        return
    xp = TIER_XP_BUMP.get(day_tier, 0)
    if xp:
        _apply_feed(pet, xp_gained=xp, mark_fed=False)
        store.save_pet(pet)


def feed_pet_day_complete():
    """Joy bump for clearing all three tiers on a day."""
    pet = _alive_pet()
    if not pet:
        return
    _apply_feed(pet, happiness_delta=DAY_COMPLETE_JOY)
    store.save_pet(pet)


PET_QUOTE_MODEL = "claude-haiku-4-5-20251001"

PET_QUOTE_SYSTEM = (
    "You speak as an ASCII flame creature. Style: one short sentence, "
    "lowercase, terse, oddly poetic. No quotes, no emoji, no second-person "
    "address, no narration. Twelve words max. If a stat is extreme reflect "
    "it; otherwise say something small about being a flame, the moment, "
    "the dark beyond the fire, etc."
)


def _build_pet_quote_user_prompt(pet: dict, mood: str) -> str:
    stats = pet.get("stats") or {}
    return (
        f"name: {pet.get('name', 'spark')}\n"
        f"stage: {pet.get('stage', 'spark')} · {pet.get('rarity', 'common')}\n"
        f"mood: {mood}\n"
        f"health: {round(pet.get('health', 100), 1)}/100\n"
        f"happiness: {round(min(100, pet.get('happiness', 100)), 1)}/100\n"
        f"perseverance: {stats.get('perseverance', 10)}\n"
        f"curiosity: {stats.get('curiosity', 10)}\n"
        f"audacity: {stats.get('audacity', 10)}\n"
        f"knowledge: {stats.get('knowledge', 10)}\n"
        "\nYou were just petted. Say one thing."
    )


def _clean_quote(s: str) -> str:
    s = (s or "").strip()
    # strip wrapping quote chars (LLMs love these)
    while s and s[0] in ("\"", "'", "`", "“", "‘"):
        s = s[1:]
    while s and s[-1] in ("\"", "'", "`", "”", "’"):
        s = s[:-1]
    s = s.strip()
    if len(s) > 200:
        cut = s[:200].rsplit(" ", 1)[0]
        s = (cut or s[:200]) + "…"
    return s


def _generate_pet_quote(pet: dict, mood: str) -> str | None:
    """Ask Haiku for a short in-character reaction. Returns None on any
    failure (no anthropic-oauth tokens, network error, empty result) so the
    caller can fall back to the default heart animation."""
    try:
        from app.services import llm_anthropic
    except Exception:
        return None
    try:
        text = llm_anthropic.call_single_turn(
            model=PET_QUOTE_MODEL,
            system_prompt=PET_QUOTE_SYSTEM,
            user_content=_build_pet_quote_user_prompt(pet, mood),
            max_tokens=80,
        )
    except Exception:
        return None
    cleaned = _clean_quote(text)
    return cleaned or None


def pet_the_pet() -> tuple[bool, dict | str]:
    """Right-click-to-pet interaction. Small joy bump with cooldown.
    Returns (True, {...state}) on success, (False, message) on cooldown / no pet."""
    pet = _alive_pet()
    if not pet:
        return False, "no living pet to pet"

    last_petted = pet.get("lastPetted")
    if last_petted:
        try:
            last_dt = datetime.fromisoformat(last_petted)
        except ValueError:
            last_dt = None
        if last_dt:
            elapsed = (datetime.now(timezone.utc) - last_dt).total_seconds()
            if elapsed < PET_COOLDOWN_SECONDS:
                wait = int(PET_COOLDOWN_SECONDS - elapsed)
                return False, f"cooldown: wait {wait}s"

    _apply_feed(pet, happiness_delta=PET_JOY_BUMP)
    pet["lastPetted"] = _now()
    store.save_pet(pet)

    mood = _mood_from_state(pet)
    quote = _generate_pet_quote(pet, mood)
    return True, {
        "happiness": round(pet["happiness"], 1),
        "health": round(pet.get("health", 100), 1),
        "quote": quote,
    }


@router.post("/api/pet/pet")
def pet_pet():
    ok, payload = pet_the_pet()
    if not ok:
        raise HTTPException(400, payload if isinstance(payload, str) else "unavailable")
    return {"ok": True, **payload}
