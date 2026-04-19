from __future__ import annotations
from datetime import date, timedelta
from fastapi import APIRouter
from app import store
from app.models import SrsItem

router = APIRouter()

# Leitner box intervals in days. Box 1 = 1 day, box 5 = 30 days.
BOX_INTERVALS = [1, 3, 7, 14, 30]
MAX_BOX = len(BOX_INTERVALS)


def _today() -> str:
    return date.today().isoformat()


def _advance_due(box: int) -> str:
    days = BOX_INTERVALS[min(max(box, 1), MAX_BOX) - 1]
    return (date.today() + timedelta(days=days)).isoformat()


def _item_id(card_uid: str, prompt_id: str) -> str:
    return f"{card_uid}::{prompt_id}"


def ensure_items_for_session(card_uid: str) -> int:
    """Spawn SRS items for all retrieval prompts on the given session, if
    not already tracked. Called when the retrieval phase is first completed.
    Returns the count of new items created."""
    from app.routers.courses import resolve_concept_id  # lazy to avoid cycle

    courses = store.load_courses()
    aliases = store.load_aliases()
    items = store.load_srs()
    created = 0

    parts = card_uid.split("-")
    if len(parts) < 4:
        return 0
    course_id = int(parts[0][1:])
    day_id = int(parts[1][1:])

    course = next((c for c in courses if c.id == course_id), None)
    if not course:
        return 0
    day = next((d for d in course.days if d.id == day_id), None)
    if not day:
        return 0
    import app.gamification as gam
    card = next(
        (
            c
            for c in day.cards
            if gam.card_uid_for(course.id, day.id, c.tier, c.task_index) == card_uid
        ),
        None,
    )
    if not card:
        return 0

    today = _today()
    for rp in card.phases.retrieval.prompts:
        key = _item_id(card_uid, rp.id)
        if key in items:
            continue
        concept = resolve_concept_id(rp.concept, aliases) if rp.concept else None
        items[key] = SrsItem(
            id=key,
            card_uid=card_uid,
            prompt_id=rp.id,
            prompt=rp.prompt,
            answer=rp.answer,
            concept=concept,
            box=1,
            due=today,
        ).model_dump()
        created += 1

    if created:
        store.save_srs(items)
    return created


def _item_dict(raw: dict) -> dict:
    return {
        "id": raw["id"],
        "card-uid": raw["card_uid"],
        "prompt-id": raw["prompt_id"],
        "prompt": raw["prompt"],
        "answer": raw["answer"],
        "concept": raw.get("concept"),
        "box": raw["box"],
        "due": raw["due"],
        "last-reviewed": raw.get("last_reviewed"),
        "lapses": raw.get("lapses", 0),
    }


@router.get("/api/srs/due")
def get_due(limit: int = 50):
    """Return items due today or earlier, oldest due first."""
    items = store.load_srs()
    today = _today()
    due = [v for v in items.values() if v.get("due", today) <= today]
    due.sort(key=lambda v: (v.get("due", ""), v.get("box", 1)))
    return {"items": [_item_dict(v) for v in due[:limit]], "total-due": len(due)}


@router.get("/api/srs/stats")
def get_stats():
    items = store.load_srs()
    today = _today()
    by_box: dict[int, int] = {}
    due_count = 0
    for v in items.values():
        by_box[v.get("box", 1)] = by_box.get(v.get("box", 1), 0) + 1
        if v.get("due", today) <= today:
            due_count += 1
    return {
        "total": len(items),
        "due": due_count,
        "by-box": {str(k): by_box[k] for k in sorted(by_box.keys())},
    }


@router.post("/api/srs/review")
def review(body: dict):
    """Grade a review. verdict: 'correct' (advance box) or 'wrong' (reset to box 1)."""
    item_id = body.get("id") or body.get("item-id", "")
    verdict = body.get("verdict", "")
    if not item_id or verdict not in ("correct", "wrong"):
        return {"error": "missing id or invalid verdict"}

    items = store.load_srs()
    item = items.get(item_id)
    if not item:
        return {"error": "item not found"}

    if verdict == "correct":
        item["box"] = min(item.get("box", 1) + 1, MAX_BOX)
    else:
        item["box"] = 1
        item["lapses"] = item.get("lapses", 0) + 1

    item["due"] = _advance_due(item["box"])
    item["last_reviewed"] = _today()
    items[item_id] = item
    store.save_srs(items)

    return {"ok": True, "item": _item_dict(item)}
