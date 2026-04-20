from __future__ import annotations
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from app import store
from app.services import pet_art

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
    rolls a new one and re-renders so existing pets don't crash the renderer.
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
    return pet


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

    health = pet.get("health", 100)
    happiness = pet.get("happiness", 100)
    if pet.get("died"):
        mood = "dead"
    elif health > 70 and happiness > 60:
        mood = "happy"
    elif health > 70 and happiness > 30:
        mood = "idle"
    elif health > 40:
        mood = "hungry"
    elif health > 10:
        mood = "sad"
    else:
        mood = "desperate"

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
    }


@router.post("/api/pet/hatch")
async def hatch_pet(body: dict):
    name = (body.get("name") or "").strip() or pet_art.random_name()

    existing = store.load_pet()
    if existing and not existing.get("died"):
        raise HTTPException(400, "pet already alive")

    art, parts = await pet_art.generate_art(stage="spark")

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
    }
    store.save_pet(pet)
    return {"ok": True, "name": name, "id": pet["id"], "hue": parts["hue"]}


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
    return True, {
        "happiness": round(pet["happiness"], 1),
        "health": round(pet.get("health", 100), 1),
    }


@router.post("/api/pet/pet")
def pet_pet():
    ok, payload = pet_the_pet()
    if not ok:
        raise HTTPException(400, payload if isinstance(payload, str) else "unavailable")
    return {"ok": True, **payload}
