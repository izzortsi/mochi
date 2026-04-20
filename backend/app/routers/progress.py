from __future__ import annotations
from fastapi import APIRouter
from app import store, gamification
from app.models import Progress, PHASE_NAMES

router = APIRouter()


def _progress_dict(p: Progress) -> dict:
    return {
        "xp": p.xp,
        "streak": p.streak,
        "best-streak": p.best_streak,
        "last-completed": p.last_completed,
        "completed-tasks": dict(p.completed_tasks) if p.completed_tasks else None,
        "completed-phases": (
            {k: dict(v) for k, v in p.completed_phases.items()}
            if p.completed_phases
            else None
        ),
        "day-tiers": dict(p.day_tiers) if p.day_tiers else None,
    }


def _tier_of(card_uid: str) -> str:
    parts = card_uid.split("-")
    return parts[2] if len(parts) >= 3 else "bronze"


_TIER_RANK = {"none": 0, "bronze": 1, "silver": 2, "gold": 3}
_TIER_ORDER = ["bronze", "silver", "gold"]


def _tiers_crossed(old: str, new: str) -> list[str]:
    """Tiers newly completed going from old to new (e.g. none→silver yields
    ['bronze', 'silver']; silver→silver yields [])."""
    old_r = _TIER_RANK.get(old or "none", 0)
    new_r = _TIER_RANK.get(new or "none", 0)
    if new_r <= old_r:
        return []
    return _TIER_ORDER[old_r:new_r]


def _feed_and_recompute(
    progress: Progress, card_uid: str, reached_gold_bonus_callback: bool = True
) -> None:
    """After a session changes completion state, recompute the day tier,
    update streaks, and feed the pet. Mutates progress in place.

    Feed routing (new three-stat economy):
      session complete → feed_pet_session (small extra health bonus)
      tier clear       → feed_pet_tier_complete (XP — drives evolution)
      full day (gold)  → feed_pet_day_complete (joy)
    """
    tier = _tier_of(card_uid)
    courses = store.load_courses()
    day_tier = _recompute_day_tier(card_uid, courses, progress.completed_tasks)

    newly_cleared_tiers: list[str] = []
    if day_tier:
        for key, val in day_tier.items():
            old_val = progress.day_tiers.get(key, "none")
            newly_cleared_tiers.extend(_tiers_crossed(old_val, val))
            progress.day_tiers[key] = val
        gamification.update_streak(progress, list(day_tier.values())[-1] == "gold")

    from app.routers.pet import (
        feed_pet_session, feed_pet_tier_complete, feed_pet_day_complete,
    )

    feed_pet_session(tier)
    for cleared_tier in newly_cleared_tiers:
        feed_pet_tier_complete(cleared_tier)
    if reached_gold_bonus_callback and "gold" in newly_cleared_tiers:
        feed_pet_day_complete()


def _all_phases_done(phases_map: dict[str, bool]) -> bool:
    return all(phases_map.get(p, False) for p in PHASE_NAMES)


@router.get("/api/progress")
def get_progress():
    return _progress_dict(store.load_progress())


@router.post("/api/progress/complete-phase")
def complete_phase(body: dict):
    card_uid = body.get("card-uid", "")
    phase = body.get("phase", "")
    if not card_uid or phase not in PHASE_NAMES:
        return {"error": "missing card-uid or invalid phase"}

    progress = store.load_progress()
    phases_map = progress.completed_phases.setdefault(card_uid, {})
    if phases_map.get(phase):
        return _progress_dict(progress)

    tier = _tier_of(card_uid)
    phases_map[phase] = True
    progress.xp += gamification.xp_for_phase(tier, progress.streak)

    # On first retrieval-phase completion, register SRS items for the session.
    if phase == "retrieval":
        from app.routers.srs import ensure_items_for_session

        ensure_items_for_session(card_uid)

    # Auto-complete session when all phases done.
    newly_complete = (
        _all_phases_done(phases_map) and card_uid not in progress.completed_tasks
    )
    if newly_complete:
        progress.completed_tasks[card_uid] = True
        store.save_progress(progress)
        _feed_and_recompute(progress, card_uid)
        store.save_progress(progress)
    else:
        # Per-phase trickle feed. Session-complete path below already feeds via
        # _feed_and_recompute so don't double-feed on the phase that closes it.
        from app.routers.pet import feed_pet_phase

        feed_pet_phase(tier)
        store.save_progress(progress)

    return _progress_dict(progress)


@router.post("/api/progress/uncomplete-phase")
def uncomplete_phase(body: dict):
    card_uid = body.get("card-uid", "")
    phase = body.get("phase", "")
    if not card_uid or phase not in PHASE_NAMES:
        return {"error": "missing card-uid or invalid phase"}

    progress = store.load_progress()
    phases_map = progress.completed_phases.get(card_uid, {})
    if not phases_map.get(phase):
        return _progress_dict(progress)

    tier = _tier_of(card_uid)
    phases_map[phase] = False
    progress.xp = max(0, progress.xp - gamification.xp_for_phase(tier, progress.streak))

    # If session had been auto-completed, undo it.
    if card_uid in progress.completed_tasks:
        del progress.completed_tasks[card_uid]
        courses = store.load_courses()
        day_tier = _recompute_day_tier(card_uid, courses, progress.completed_tasks)
        if day_tier:
            for key, val in day_tier.items():
                progress.day_tiers[key] = val

    store.save_progress(progress)
    return _progress_dict(progress)


@router.post("/api/progress/complete")
def complete_card(body: dict):
    """Mark entire session done (all 5 phases) in one click."""
    card_uid = body.get("card-uid", "")
    if not card_uid:
        return {"error": "missing card-uid"}

    progress = store.load_progress()
    if card_uid in progress.completed_tasks:
        return _progress_dict(progress)

    tier = _tier_of(card_uid)
    phases_map = progress.completed_phases.setdefault(card_uid, {})
    already_done_phases = sum(1 for p in PHASE_NAMES if phases_map.get(p))
    new_phases = len(PHASE_NAMES) - already_done_phases

    for p in PHASE_NAMES:
        phases_map[p] = True
    progress.completed_tasks[card_uid] = True
    progress.xp += gamification.xp_for_phase(tier, progress.streak) * new_phases

    store.save_progress(progress)
    _feed_and_recompute(progress, card_uid)
    store.save_progress(progress)

    return _progress_dict(progress)


@router.post("/api/progress/uncomplete")
def uncomplete_card(body: dict):
    card_uid = body.get("card-uid", "")
    if not card_uid:
        return {"error": "missing card-uid"}

    progress = store.load_progress()
    if card_uid not in progress.completed_tasks and not progress.completed_phases.get(
        card_uid
    ):
        return _progress_dict(progress)

    tier = _tier_of(card_uid)
    phases_map = progress.completed_phases.get(card_uid, {})
    done_phases = sum(1 for p in PHASE_NAMES if phases_map.get(p))

    progress.completed_tasks.pop(card_uid, None)
    progress.completed_phases.pop(card_uid, None)
    progress.xp = max(
        0, progress.xp - gamification.xp_for_phase(tier, progress.streak) * done_phases
    )

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
                    progress = store.load_progress()
                    progress.completed_tasks.pop(card_uid, None)
                    progress.completed_phases.pop(card_uid, None)
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
