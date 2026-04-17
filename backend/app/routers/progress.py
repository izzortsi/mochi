from __future__ import annotations
from fastapi import APIRouter
from app import store, gamification
from app.models import Progress

router = APIRouter()


def _progress_dict(p: Progress) -> dict:
    return {
        "xp": p.xp,
        "streak": p.streak,
        "best-streak": p.best_streak,
        "last-completed": p.last_completed,
        "completed-tasks": dict(p.completed_tasks) if p.completed_tasks else None,
        "day-tiers": dict(p.day_tiers) if p.day_tiers else None,
    }


@router.get("/api/progress")
def get_progress():
    return _progress_dict(store.load_progress())


@router.post("/api/progress/complete")
def complete_card(body: dict):
    card_uid = body.get("card-uid", "")
    if not card_uid:
        return {"error": "missing card-uid"}

    progress = store.load_progress()
    if card_uid in progress.completed_tasks:
        return _progress_dict(progress)

    parts = card_uid.split("-")
    tier = parts[2] if len(parts) >= 3 else "bronze"

    progress.completed_tasks[card_uid] = True
    progress.xp += gamification.xp_for_card(tier, progress.streak)

    courses = store.load_courses()
    day_tier = _recompute_day_tier(card_uid, courses, progress.completed_tasks)
    if day_tier:
        for key, val in day_tier.items():
            progress.day_tiers[key] = val
        gamification.update_streak(progress, list(day_tier.values())[-1] == "gold")

    store.save_progress(progress)

    from app.routers.pet import feed_pet

    xp_gained = gamification.xp_for_card(tier, progress.streak)
    feed_pet(tier, xp_gained)
    if day_tier and list(day_tier.values())[-1] == "gold":
        feed_pet("gold_bonus", 0)

    return _progress_dict(progress)


@router.post("/api/progress/uncomplete")
def uncomplete_card(body: dict):
    card_uid = body.get("card-uid", "")
    if not card_uid:
        return {"error": "missing card-uid"}

    progress = store.load_progress()
    if card_uid not in progress.completed_tasks:
        return _progress_dict(progress)

    parts = card_uid.split("-")
    tier = parts[2] if len(parts) >= 3 else "bronze"

    del progress.completed_tasks[card_uid]
    progress.xp = max(0, progress.xp - gamification.xp_for_card(tier, progress.streak))

    courses = store.load_courses()
    day_tier = _recompute_day_tier(card_uid, courses, progress.completed_tasks)
    if day_tier:
        for key, val in day_tier.items():
            progress.day_tiers[key] = val

    store.save_progress(progress)
    return _progress_dict(progress)


@router.post("/api/progress/reset")
def reset_progress():
    store.save_progress(Progress())
    return _progress_dict(Progress())


@router.delete("/api/card")
def delete_card(body: dict):
    card_uid = body.get("card-uid", "")
    if not card_uid:
        return {"error": "missing card-uid"}

    courses = store.load_courses()
    for c in courses:
        for d in c.days:
            for i, card in enumerate(d.cards):
                uid = gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
                if uid == card_uid:
                    d.cards.pop(i)
                    # Also remove from progress
                    progress = store.load_progress()
                    if card_uid in progress.completed_tasks:
                        del progress.completed_tasks[card_uid]
                    store.save_progress(progress)
                    store.save_courses(courses)
                    return {"ok": True, "deleted": card_uid}
    return {"error": "card not found"}


def _recompute_day_tier(card_uid: str, courses, completed) -> dict[str, str] | None:
    parts = card_uid.split("-")
    if len(parts) < 4:
        return None
    course_id = int(parts[0][1:])
    day_id = int(parts[1][1:])

    course = next((c for c in courses if c.id == course_id), None)
    if not course:
        return None
    day = next((d for d in course.days if d.id == day_id), None)
    if not day:
        return None

    by_tier: dict[str, list[bool]] = {}
    for card in day.cards:
        by_tier.setdefault(card.tier, []).append(
            f"c{course_id}-d{day_id}-{card.tier}-{card.task_index}" in completed
        )
    key = f"{course_id}.{day_id}"
    return {key: gamification.compute_day_tier(by_tier)}
