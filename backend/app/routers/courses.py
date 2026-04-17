from __future__ import annotations
from fastapi import APIRouter, Query
from app import store, gamification
from app.models import ConceptNode, ConceptEdge, ConceptAlias

router = APIRouter()


def resolve_concept_id(raw_id: str, aliases: list[ConceptAlias]) -> str:
    for a in aliases:
        if raw_id == a.canonical or raw_id in a.aliases:
            return a.canonical
    return raw_id


def _all_ids_for(canonical: str, aliases: list[ConceptAlias]) -> set[str]:
    ids = {canonical}
    for a in aliases:
        if a.canonical == canonical:
            ids.update(a.aliases)
        elif canonical in a.aliases:
            ids.add(a.canonical)
            ids.update(a.aliases)
    return ids


@router.get("/api/courses")
def list_courses():
    courses = store.load_courses()
    progress = store.load_progress()
    out = []
    for c in courses:
        total = sum(len(d.cards) for d in c.days)
        done = sum(
            1
            for d in c.days
            for card in d.cards
            if gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
            in progress.completed_tasks
        )
        out.append(
            {
                "id": c.id,
                "title": c.title,
                "slug": c.slug,
                "day-count": len(c.days),
                "total-cards": total,
                "completed-cards": done,
                "completion-pct": round(done / total * 100, 1) if total else 0,
            }
        )
    return out


@router.get("/api/course")
def get_course(id: int = Query(...)):
    courses = store.load_courses()
    c = next((c for c in courses if c.id == id), None)
    if not c:
        return {"error": "not found"}

    phases = [[p.num, p.title] for p in c.phases]
    days = []
    for d in c.days:
        days.append(
            {
                "id": d.id,
                "phase": d.phase,
                "title": d.title,
                "icon": d.icon,
                "summary": d.summary,
                "key-insight": d.key_insight,
                "cards": [
                    {
                        "card-uid": gamification.card_uid_for(
                            c.id, d.id, card.tier, card.task_index
                        ),
                        "tier": card.tier,
                        "task-index": card.task_index,
                        "text": card.text,
                        "detail": card.detail,
                        "concepts": card.concepts,
                    }
                    for card in d.cards
                ],
            }
        )
    return {
        "id": c.id,
        "title": c.title,
        "slug": c.slug,
        "phases": phases,
        "days": days,
    }


@router.get("/api/concept-map/all")
def concept_map_all():
    return _build_concept_map(None)


@router.get("/api/concept-map")
def concept_map_course(course_id: int = Query(...)):
    return _build_concept_map(course_id)


@router.get("/api/next-up")
def next_up(course_id: int = Query(...)):
    courses = store.load_courses()
    progress = store.load_progress()
    c = next((c for c in courses if c.id == course_id), None)
    if not c:
        return {"next-up": []}

    all_concepts = _all_concepts(courses)
    eligible = []
    for d in sorted(c.days, key=lambda d: d.id):
        for card in sorted(
            d.cards,
            key=lambda cd: (gamification.TIER_RANK.get(cd.tier, 0), cd.task_index),
        ):
            uid = gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
            if uid in progress.completed_tasks:
                continue
            if _card_prereqs_met(card, all_concepts, progress.completed_tasks, courses):
                eligible.append({"card-uid": uid})
            if len(eligible) >= 5:
                return {"next-up": eligible}
    return {"next-up": eligible}


@router.get("/api/concept")
def get_concept(id: str = Query(...)):
    courses = store.load_courses()
    progress = store.load_progress()
    aliases = store.load_aliases()
    canonical = resolve_concept_id(id, aliases)
    all_ids = _all_ids_for(canonical, aliases)
    label = ""
    total_cards = []
    for c in courses:
        for cid, clabel in _course_concept_pairs(c):
            if cid == canonical:
                label = clabel
        for d in c.days:
            for card in d.cards:
                if all_ids.intersection(card.concepts):
                    uid = gamification.card_uid_for(
                        c.id, d.id, card.tier, card.task_index
                    )
                    total_cards.append((c.id, uid, card.text))

    mastered = all(uid in progress.completed_tasks for _, uid, _ in total_cards)
    started = any(uid in progress.completed_tasks for _, uid, _ in total_cards)
    mastery = (
        "mastered"
        if mastered
        else ("learning" if started and total_cards else "not-started")
    )

    by_course = {}
    for cid, uid, text in total_cards:
        by_course.setdefault(cid, []).append({"card-uid": uid, "text": text})

    return {
        "concept-id": canonical,
        "label": label,
        "mastery": mastery,
        "by-course": [
            {"course-id": cid, "cards": cards} for cid, cards in by_course.items()
        ],
    }


def _all_concepts(courses):
    concepts = {}
    for c in courses:
        for con in c.concepts:
            concepts[con.id] = con.label
    return concepts


def _course_concept_pairs(course):
    return [(con.id, con.label) for con in course.concepts]


def _build_concept_map(course_id: int | None):
    courses = store.load_courses()
    progress = store.load_progress()
    aliases = store.load_aliases()

    if course_id is not None:
        target = next((c for c in courses if c.id == course_id), None)
        if not target:
            return {"nodes": [], "edges": []}
        relevant_courses = [target]
        raw_concept_ids = set()
        for d in target.days:
            for card in d.cards:
                raw_concept_ids.update(card.concepts)
        concept_ids = {resolve_concept_id(cid, aliases) for cid in raw_concept_ids}
    else:
        relevant_courses = courses
        concept_ids = None

    all_concepts = _all_concepts(courses)
    raw_node_ids = concept_ids if concept_ids is not None else set(all_concepts.keys())
    node_ids = {resolve_concept_id(cid, aliases) for cid in raw_node_ids}

    nodes = []
    for cid in sorted(node_ids):
        all_ids = _all_ids_for(cid, aliases)
        clabel = cid
        for raw_id in all_ids:
            if raw_id in all_concepts:
                clabel = all_concepts[raw_id]
                break
        all_ids = _all_ids_for(cid, aliases)
        card_count = 0
        done_count = 0
        for c in courses:
            for d in c.days:
                for card in d.cards:
                    if all_ids.intersection(card.concepts):
                        uid = gamification.card_uid_for(
                            c.id, d.id, card.tier, card.task_index
                        )
                        card_count += 1
                        if uid in progress.completed_tasks:
                            done_count += 1
        if card_count == 0:
            mastery = "not-started"
        elif done_count >= card_count:
            mastery = "mastered"
        elif done_count > 0:
            mastery = "learning"
        else:
            mastery = "not-started"
        nodes.append(
            ConceptNode(id=cid, label=clabel, mastery=mastery, card_count=card_count)
        )

    edges = []
    seen_edges = set()
    for c in courses:
        for pair in c.prereqs:
            if len(pair) == 2:
                resolved = (
                    resolve_concept_id(pair[0], aliases),
                    resolve_concept_id(pair[1], aliases),
                )
                edge_key = resolved
                if (
                    edge_key not in seen_edges
                    and resolved[0] in node_ids
                    and resolved[1] in node_ids
                ):
                    seen_edges.add(edge_key)
                    edges.append(ConceptEdge(from_=resolved[0], to=resolved[1]))

    return {
        "nodes": [n.model_dump() for n in nodes],
        "edges": [e.dict_for_api() for e in edges],
    }


@router.delete("/api/course")
def delete_course(body: dict):
    course_id = body.get("course-id")
    if course_id is None:
        return {"error": "missing course-id"}

    courses = store.load_courses()
    idx = next((i for i, c in enumerate(courses) if c.id == course_id), None)
    if idx is None:
        return {"error": "not found"}

    courses.pop(idx)
    store.save_courses(courses)

    progress = store.load_progress()
    prefix = f"c{course_id}-"
    progress.completed_tasks = {
        k: v for k, v in progress.completed_tasks.items() if not k.startswith(prefix)
    }
    progress.day_tiers = {
        k: v for k, v in progress.day_tiers.items() if not k.startswith(f"{course_id}.")
    }
    store.save_progress(progress)

    return {"ok": True, "deleted": course_id}


@router.delete("/api/day")
def delete_day(body: dict):
    course_id = body.get("course-id")
    day_id = body.get("day-id")
    if course_id is None or day_id is None:
        return {"error": "missing course-id or day-id"}

    courses = store.load_courses()
    course = next((c for c in courses if c.id == course_id), None)
    if not course:
        return {"error": "course not found"}

    day_idx = next((i for i, d in enumerate(course.days) if d.id == day_id), None)
    if day_idx is None:
        return {"error": "day not found"}

    course.days.pop(day_idx)
    store.save_courses(courses)

    progress = store.load_progress()
    prefix = f"c{course_id}-d{day_id}-"
    progress.completed_tasks = {
        k: v for k, v in progress.completed_tasks.items() if not k.startswith(prefix)
    }
    day_key = f"{course_id}.{day_id}"
    progress.day_tiers = {
        k: v for k, v in progress.day_tiers.items() if k != day_key
    }
    store.save_progress(progress)

    return {"ok": True, "deleted": day_id}


def _card_prereqs_met(card, all_concepts, completed, courses):
    aliases = store.load_aliases()
    for raw_cid in card.concepts:
        cid = resolve_concept_id(raw_cid, aliases)
        for c in courses:
            for pair in c.prereqs:
                if len(pair) == 2 and resolve_concept_id(pair[1], aliases) == cid:
                    prereq_id = resolve_concept_id(pair[0], aliases)
                    prereq_ids = _all_ids_for(prereq_id, aliases)
                    prereq_done = False
                    for c2 in courses:
                        for d in c2.days:
                            for cd in d.cards:
                                if prereq_ids.intersection(cd.concepts):
                                    uid = gamification.card_uid_for(
                                        c2.id, d.id, cd.tier, cd.task_index
                                    )
                                    if uid in completed:
                                        prereq_done = True
                    if not prereq_done:
                        return False
    return True
