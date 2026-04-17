from __future__ import annotations
from datetime import datetime, timezone
from fastapi import APIRouter, HTTPException
from app import store
from app.services import pet_art

router = APIRouter()

EGG_ART = {
    "idle": [
        "                    ",
        "                    ",
        "        ___         ",
        "      /     \\       ",
        "     |  ? ?  |      ",
        "     |   o   |      ",
        "      \\  v  /       ",
        "       \\   /        ",
        "        \\_/         ",
        "                    ",
        "    click to hatch  ",
        "                    ",
    ],
    "happy": [
        "                    ",
        "                    ",
        "        ___         ",
        "      /     \\       ",
        "     |  ! !  |      ",
        "     |   ~   |      ",
        "      \\  v  /       ",
        "       \\   /        ",
        "        \\_/         ",
        "                    ",
        "    click to hatch  ",
        "                    ",
    ],
    "eating": [],
    "sleeping": [],
    "dead": [],
}

DEAD_ART = {
    "idle": [
        "                    ",
        "                    ",
        "                    ",
        "       .--.         ",
        "      | o o|         ",
        "      |  ~ |         ",
        "      | ~~ |         ",
        "       \\  /          ",
        "        \\/           ",
        "      R.I.P.        ",
        "                    ",
        "  [ hatch new egg ] ",
    ],
    "happy": [],
    "eating": [],
    "sleeping": [],
    "dead": [],
}

FEED_AMOUNTS = {
    "bronze": {"health": 3, "happiness": 2},
    "silver": {"health": 6, "happiness": 4},
    "gold": {"health": 10, "happiness": 8},
    "gold_bonus": {"health": 15, "happiness": 10},
}

STAGE_XP = {"egg": 0, "hatchling": 0, "baby": 100, "teen": 500, "adult": 1500}


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


def _decay_pet(pet: dict) -> dict:
    if pet.get("died") or pet.get("stage") == "egg":
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
        pet["art"] = DEAD_ART
    return pet


def _stage_for_xp(xp: int, hatched: bool) -> str:
    if not hatched:
        return "egg"
    if xp >= 1500:
        return "adult"
    if xp >= 500:
        return "teen"
    if xp >= 100:
        return "baby"
    return "hatchling"


@router.get("/api/pet")
def get_pet():
    pet = store.load_pet()
    if not pet:
        return {
            "id": None,
            "name": None,
            "stage": "egg",
            "health": 100,
            "happiness": 100,
            "mood": "waiting",
            "art": EGG_ART,
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
        "stage": pet.get("stage", "egg"),
        "health": round(pet.get("health", 100), 1),
        "happiness": round(min(100, pet.get("happiness", 100)), 1),
        "mood": mood,
        "art": pet.get("art", EGG_ART),
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

    art = await pet_art.generate_art()

    pet = {
        "id": pet_art.random_id(),
        "name": name,
        "born": _now(),
        "died": None,
        "stage": "hatchling",
        "health": 100.0,
        "happiness": 100.0,
        "lastFed": _now(),
        "totalXpEarned": 0,
        "art": art,
    }
    store.save_pet(pet)
    return {"ok": True, "name": name, "id": pet["id"]}


@router.post("/api/pet/regenerate")
async def regenerate_pet(body: dict):
    pet = store.load_pet()
    if not pet or pet.get("died") or pet.get("stage") == "egg":
        raise HTTPException(400, "no living pet to regenerate")

    art = await pet_art.generate_art()

    pet["art"] = art
    store.save_pet(pet)
    return {"ok": True, "name": pet["name"]}


def feed_pet(tier: str, xp_gained: int = 0):
    pet = store.load_pet()
    if not pet or pet.get("died") or pet.get("stage") == "egg":
        return

    amounts = FEED_AMOUNTS.get(tier, FEED_AMOUNTS["bronze"])
    pet["health"] = min(100, pet.get("health", 100) + amounts["health"])
    pet["happiness"] = min(100, pet.get("happiness", 100) + amounts["happiness"])
    pet["lastFed"] = _now()
    pet["totalXpEarned"] = pet.get("totalXpEarned", 0) + xp_gained

    new_stage = _stage_for_xp(pet["totalXpEarned"], True)
    pet["stage"] = new_stage

    store.save_pet(pet)
