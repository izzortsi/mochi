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

# Mood is stage-independent; feeding amounts unchanged
FEED_AMOUNTS = {
    "bronze": {"health": 3, "happiness": 2},
    "silver": {"health": 6, "happiness": 4},
    "gold": {"health": 10, "happiness": 8},
    "gold_bonus": {"health": 15, "happiness": 10},
}

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
    pet["health"] = max(0.0, pet.get("health", 100) - (hours / 168) * 100)
    pet["happiness"] = max(0.0, pet.get("happiness", 100) - (hours / 120) * 100)
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


def feed_pet(tier: str, xp_gained: int = 0):
    pet = store.load_pet()
    if not pet or pet.get("died") or pet.get("stage") == "coal":
        return

    amounts = FEED_AMOUNTS.get(tier, FEED_AMOUNTS["bronze"])
    pet["health"] = min(100, pet.get("health", 100) + amounts["health"])
    pet["happiness"] = min(100, pet.get("happiness", 100) + amounts["happiness"])
    pet["lastFed"] = _now()
    pet["totalXpEarned"] = pet.get("totalXpEarned", 0) + xp_gained

    old_stage = pet.get("stage", "spark")
    new_stage = _stage_for_xp(pet["totalXpEarned"], True)
    pet["stage"] = new_stage

    # Re-render on stage transition so the flame visibly grows.
    if new_stage != old_stage and pet.get("parts"):
        pet["art"] = pet_art.render(new_stage, pet["parts"])

    store.save_pet(pet)
