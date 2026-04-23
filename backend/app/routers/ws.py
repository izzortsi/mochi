from __future__ import annotations
import json
from datetime import datetime
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app import store, gamification
from app.models import Card, ConceptAlias
from app.routers.courses import resolve_concept_id

router = APIRouter()


async def _handle(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            raw = await ws.receive_text()
            try:
                msg = json.loads(raw)
            except json.JSONDecodeError:
                await ws.send_json(
                    {"ok": False, "error": "invalid json", "requestId": None}
                )
                continue

            request_id = msg.get("requestId", "")
            tool = msg.get("call", "")
            args = msg.get("args", {})

            try:
                result = dispatch(tool, args)
                await ws.send_json(
                    {"ok": True, "result": result, "requestId": request_id}
                )
            except Exception as e:
                await ws.send_json(
                    {"ok": False, "error": str(e), "requestId": request_id}
                )
    except WebSocketDisconnect:
        pass


def dispatch(tool: str, args: dict):
    handlers = {
        "list-courses": _list_courses,
        "list-concepts": _list_concepts,
        "create-course": _create_course,
        "create-phase": _create_phase,
        "create-day": _create_day,
        "create-card": _create_card,
        "delete-card": _delete_card,
        "delete-course": _delete_course,
        "delete-day": _delete_day,
        "create-concept": _create_concept,
        "tag-card": _tag_card,
        "add-prereq": _add_prereq,
        "query-concept-cards": _query_concept_cards,
        "concept-mastery": _concept_mastery,
        "next-up": _next_up,
        "fetch-card": _fetch_card,
        "mark-task-complete": _mark_task_complete,
        "grade-attempt": _grade_attempt,
        "append-generated-task": _append_generated_task,
        "append-chat": _append_chat,
        "get-chat": _get_chat,
        "get-progress": _get_progress,
        "record-tutor-note": _record_tutor_note,
        "get-tutor-notes": _get_tutor_notes,
        "add-note": _add_note,
        "list-notes": _list_notes,
        "fetch-note": _fetch_note,
        "update-note": _update_note,
        "delete-note": _delete_note,
    }
    handler = handlers.get(tool)
    if not handler:
        raise ValueError(f"unknown tool: {tool}")
    return handler(args)


def _list_courses(_args):
    courses = store.load_courses()
    return {"courses": [[c.id, c.title, c.slug] for c in courses]}


def _list_concepts(_args):
    courses = store.load_courses()
    aliases = store.load_aliases()
    seen = {}
    for c in courses:
        for con in c.concepts:
            canonical = resolve_concept_id(con.id, aliases)
            if canonical not in seen:
                seen[canonical] = con.label
    return {"concepts": [[cid, label] for cid, label in seen.items()]}


def _create_course(args):
    title = args.get("title", "")
    slug = args.get("slug", "")
    courses = store.load_courses()
    new_id = store.next_course_id(courses)
    from app.models import CourseDef

    courses.append(CourseDef(id=new_id, title=title, slug=slug))
    store.save_courses(courses)
    return {"course": new_id}


def _create_phase(args):
    course_id = args.get("courseId") or args.get("course-id")
    phase_num = args.get("phaseNum") or args.get("phase-num", 0)
    title = args.get("title", "")
    courses = store.load_courses()
    c = _find_course(courses, course_id)
    from app.models import Phase

    c.phases.append(Phase(num=phase_num, title=title))
    store.save_courses(courses)
    return "ok"


def _create_day(args):
    course_id = args.get("courseId") or args.get("course-id")
    day_id = args.get("dayId") or args.get("day-id", 0)
    phase_num = args.get("phaseNum") or args.get("phase-num", 1)
    title = args.get("title", "")
    icon = args.get("icon", "*")
    summary = args.get("summary", "")
    key_insight = args.get("keyInsight") or args.get("key-insight", "")
    courses = store.load_courses()
    c = _find_course(courses, course_id)
    from app.models import Day

    c.days.append(
        Day(
            id=day_id,
            phase=phase_num,
            title=title,
            icon=icon,
            summary=summary,
            key_insight=key_insight,
        )
    )
    store.save_courses(courses)
    return "ok"


def _create_card(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    course_id = args.get("courseId") or args.get("course-id")
    day_id = args.get("dayId") or args.get("day-id", 0)
    tier = args.get("tier", "bronze")
    task_index = args.get("taskIndex") or args.get("task-index", 0)
    text = args.get("text", "")
    detail = args.get("detail", "")
    courses = store.load_courses()
    c = _find_course(courses, course_id)
    day = next((d for d in c.days if d.id == day_id), None)
    if not day:
        raise ValueError(f"day {day_id} not found")
    day.cards.append(Card(tier=tier, task_index=task_index, text=text, detail=detail))
    store.save_courses(courses)
    return "ok"


def _delete_card(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    courses = store.load_courses()
    for c in courses:
        for d in c.days:
            for i, card in enumerate(d.cards):
                uid = gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
                if uid == card_uid:
                    d.cards.pop(i)
                    store.save_courses(courses)
                    return "ok"
    raise ValueError(f"card {card_uid} not found")


def _create_concept(args):
    concept_id = args.get("conceptId") or args.get("concept-id", "")
    label = args.get("label", "")
    course_id = args.get("courseId") or args.get("course-id")
    courses = store.load_courses()
    aliases = store.load_aliases()
    canonical = resolve_concept_id(concept_id, aliases)
    for c in courses:
        if any(resolve_concept_id(con.id, aliases) == canonical for con in c.concepts):
            return "ok"
    if course_id is not None:
        target = _find_course(courses, course_id)
    elif courses:
        target = courses[0]
    else:
        return "ok"
    __import__("app.models", fromlist=["ConceptDef"])
    from app.models import ConceptDef
    target.concepts.append(ConceptDef(id=concept_id, label=label))
    store.save_courses(courses)
    return "ok"


def _tag_card(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    concept_id = args.get("conceptId") or args.get("concept-id", "")
    courses = store.load_courses()
    aliases = store.load_aliases()
    canonical = resolve_concept_id(concept_id, aliases)
    all_ids = _all_ids_for(canonical, aliases)
    for c in courses:
        for d in c.days:
            for card in d.cards:
                uid = gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
                if uid == card_uid and not all_ids.intersection(card.concepts):
                    card.concepts.append(canonical)
                    store.save_courses(courses)
                    return "ok"
    raise ValueError(f"card {card_uid} not found")


def _add_prereq(args):
    concept_id = args.get("conceptId") or args.get("concept-id", "")
    prereq = args.get("prereq", "")
    course_id = args.get("courseId") or args.get("course-id")
    courses = store.load_courses()
    if course_id is not None:
        target = _find_course(courses, course_id)
    elif courses:
        target = courses[0]
    else:
        return "ok"
    target.prereqs.append([concept_id, prereq])
    store.save_courses(courses)
    return "ok"


def _query_concept_cards(args):
    concept_id = args.get("conceptId") or args.get("concept-id", "")
    courses = store.load_courses()
    aliases = store.load_aliases()
    canonical = resolve_concept_id(concept_id, aliases)
    from app.routers.courses import _all_ids_for
    all_ids = _all_ids_for(canonical, aliases)
    uids = []
    for c in courses:
        for d in c.days:
            for card in d.cards:
                if all_ids.intersection(card.concepts):
                    uids.append(
                        gamification.card_uid_for(
                            c.id, d.id, card.tier, card.task_index
                        )
                    )
    return {"cards": uids}


def _concept_mastery(args):
    concept_id = args.get("conceptId") or args.get("concept-id", "")
    from app.routers.courses import _build_concept_map, resolve_concept_id

    aliases = store.load_aliases()
    canonical = resolve_concept_id(concept_id, aliases)
    data = _build_concept_map(None)
    for node in data["nodes"]:
        if node.get("id") == canonical:
            return {"mastery": node.get("mastery", "not-started")}
    return {"mastery": "not-started"}


def _next_up(args):
    course_id = args.get("courseId") or args.get("course-id")
    from app.routers.courses import next_up as _nu

    return _nu(course_id)


def _fetch_card(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    courses = store.load_courses()
    for c in courses:
        for d in c.days:
            for card in d.cards:
                uid = gamification.card_uid_for(c.id, d.id, card.tier, card.task_index)
                if uid == card_uid:
                    return {
                        "card": [uid, c.id, d.id, card.tier, card.task_index, card.text]
                    }
    return {"not-found": True}


def _mark_task_complete(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    progress = store.load_progress()
    if card_uid not in progress.completed_tasks:
        parts = card_uid.split("-")
        tier = parts[2] if len(parts) >= 3 else "bronze"
        progress.completed_tasks[card_uid] = True
        progress.xp += gamification.xp_for_card(tier, progress.streak)

        courses = store.load_courses()
        from app.routers.progress import _recompute_day_tier

        day_tier = _recompute_day_tier(card_uid, courses, progress.completed_tasks)
        if day_tier:
            for key, val in day_tier.items():
                progress.day_tiers[key] = val
            gamification.update_streak(progress, list(day_tier.values())[-1] == "gold")

        store.save_progress(progress)
    return {"xp": progress.xp}


def _grade_attempt(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    verdict = args.get("verdict", "")
    comment = args.get("comment", "")
    progress = store.load_progress()
    progress.attempts.append(
        {
            "card-uid": card_uid,
            "verdict": verdict,
            "comment": comment,
            "timestamp": datetime.now().isoformat(),
        }
    )
    store.save_progress(progress)
    return "ok"


def _append_generated_task(args):
    progress = store.load_progress()
    progress.generated_tasks.append(
        {
            "id": args.get("id", ""),
            "source-card-uid": args.get("sourceCardUid")
            or args.get("source-card-uid", ""),
            "tier": args.get("tier", "bronze"),
            "text": args.get("text", ""),
            "detail": args.get("detail", ""),
            "created-at": datetime.now().isoformat(),
        }
    )
    store.save_progress(progress)
    return "ok"


def _append_chat(args):
    course_id = args.get("courseId") or args.get("course-id", 0)
    from app.models import ChatMessage

    chat = store.load_chat()
    msgs = chat.setdefault(course_id, [])
    msgs.append(
        ChatMessage(
            role=args.get("role", "user"),
            content=args.get("content", ""),
            tool_name=args.get("toolName") or args.get("tool-name"),
            timestamp=datetime.now().isoformat(),
        )
    )
    store.save_chat(chat)
    return "ok"


def _get_chat(args):
    course_id = args.get("courseId") or args.get("course-id", 0)
    chat = store.load_chat()
    msgs = chat.get(course_id, [])
    return {
        "messages": [
            {
                "role": m.role,
                "content": m.content,
                "tool-name": m.tool_name,
                "timestamp": m.timestamp,
            }
            for m in msgs
        ]
    }


def _record_tutor_note(args):
    from app.services import pet_art  # reuse random_id
    from app.models import TutorNote

    card_uid = args.get("cardUid") or args.get("card-uid", "")
    body = (args.get("body") or "").strip()
    if not card_uid or not body:
        raise ValueError("card-uid and body required")
    notes = store.load_tutor_notes()
    note = TutorNote(
        id=pet_art.random_id(),
        card_uid=card_uid,
        body=body,
        source="tutor",
        created_at=datetime.now().isoformat(),
    )
    notes.append(note)
    store.save_tutor_notes(notes)
    return {"ok": True, "id": note.id}


def _get_tutor_notes(args):
    card_uid = args.get("cardUid") or args.get("card-uid", "")
    notes = store.load_tutor_notes()
    if card_uid:
        notes = [n for n in notes if n.card_uid == card_uid]
    return {
        "notes": [
            {
                "id": n.id,
                "card-uid": n.card_uid,
                "body": n.body,
                "source": n.source,
                "created-at": n.created_at,
            }
            for n in notes
        ]
    }


def _get_progress(_args):
    progress = store.load_progress()
    return {
        "xp": progress.xp,
        "streak": progress.streak,
        "best-streak": progress.best_streak,
    }


def _add_note(args):
    """Create a permanent zettelkasten note (shows up in /notes graph + list).
    Distinct from record-tutor-note, which jots a transient one-liner against
    a specific card. Use this when an insight is worth keeping across cards
    and surfacing in the knowledge base."""
    from app.models import Note

    note_id = (args.get("noteId") or args.get("note-id", "")).strip()
    title = (args.get("title") or "").strip()
    content = (args.get("content") or "").strip()
    if not note_id or not title:
        raise ValueError("note-id and title required")

    from app.services.note_normalize import normalize_domain, normalize_note_id
    note_id = normalize_note_id(note_id)
    if not note_id:
        raise ValueError("note-id required")
    domain = normalize_domain(args.get("domain") or "")
    tags_raw = args.get("tags") or []
    tags = [t.strip() for t in tags_raw if isinstance(t, str) and t.strip()]
    related_raw = args.get("related") or []
    related = [r.strip() for r in related_raw if isinstance(r, str) and r.strip()]
    source = (args.get("source") or "tutor").strip()

    notes = store.load_notes()
    if any(n.id == note_id for n in notes):
        raise ValueError(f"note id already exists: {note_id}")

    note = Note(
        id=note_id, title=title, content=content,
        domain=domain, tags=tags, related=related, source=source,
    )
    notes.append(note)

    # Mirror reverse links so the new note appears in each related note's bag.
    if related:
        by_id = {n.id: n for n in notes}
        for rid in related:
            r = by_id.get(rid)
            if r and note_id not in r.related:
                r.related.append(note_id)

    store.save_notes(notes)
    return {"ok": True, "id": note_id}


def _list_notes(args):
    """Summaries of every zettelkasten note. Optional `domain` filters."""
    domain = (args.get("domain") or "").strip()
    notes = store.load_notes()
    if domain:
        notes = [n for n in notes if n.domain == domain]
    return {
        "notes": [
            {
                "id": n.id,
                "title": n.title,
                "domain": n.domain,
                "tags": n.tags,
                "related": n.related,
            }
            for n in notes
        ],
    }


def _fetch_note(args):
    """Full body of one note, plus metadata for each related note."""
    note_id = (args.get("noteId") or args.get("note-id", "")).strip()
    if not note_id:
        raise ValueError("note-id required")
    notes = store.load_notes()
    n = next((x for x in notes if x.id == note_id), None)
    if not n:
        raise ValueError(f"note {note_id} not found")
    by_id = {x.id: x for x in notes}
    related_meta = []
    for rid in n.related:
        r = by_id.get(rid)
        if r:
            related_meta.append({"id": r.id, "title": r.title, "domain": r.domain})
    return {
        "id": n.id,
        "title": n.title,
        "content": n.content,
        "domain": n.domain,
        "tags": n.tags,
        "source": n.source,
        "related": related_meta,
    }


def _update_note(args):
    """Patch an existing note. Only fields actually present in args are
    touched; everything else stays as-is. Updating `related` re-mirrors the
    reverse links: ids added get this note appended to their list, ids
    removed get this note pulled from theirs."""
    note_id = (args.get("noteId") or args.get("note-id", "")).strip()
    if not note_id:
        raise ValueError("note-id required")
    notes = store.load_notes()
    n = next((x for x in notes if x.id == note_id), None)
    if not n:
        raise ValueError(f"note {note_id} not found")

    if "title" in args and args["title"] is not None:
        n.title = str(args["title"]).strip()
    if "content" in args and args["content"] is not None:
        n.content = str(args["content"])
    if "domain" in args and args["domain"] is not None:
        from app.services.note_normalize import normalize_domain
        n.domain = normalize_domain(str(args["domain"]))
    if "tags" in args and args["tags"] is not None:
        n.tags = [
            t.strip() for t in args["tags"]
            if isinstance(t, str) and t.strip()
        ]
    if "related" in args and args["related"] is not None:
        new_related = [
            r.strip() for r in args["related"]
            if isinstance(r, str) and r.strip()
        ]
        old_set = set(n.related)
        new_set = set(new_related)
        n.related = new_related
        by_id = {x.id: x for x in notes}
        for rid in new_set - old_set:
            r = by_id.get(rid)
            if r and note_id not in r.related:
                r.related.append(note_id)
        for rid in old_set - new_set:
            r = by_id.get(rid)
            if r and note_id in r.related:
                r.related.remove(note_id)

    store.save_notes(notes)
    return {"ok": True, "id": note_id}


def _delete_note(args):
    """Remove a note and clean up the reverse `related` references in any
    other note that pointed at it."""
    note_id = (args.get("noteId") or args.get("note-id", "")).strip()
    if not note_id:
        raise ValueError("note-id required")
    notes = store.load_notes()
    idx = next((i for i, x in enumerate(notes) if x.id == note_id), None)
    if idx is None:
        raise ValueError(f"note {note_id} not found")
    notes.pop(idx)
    for r in notes:
        if note_id in r.related:
            r.related.remove(note_id)
    store.save_notes(notes)
    return {"ok": True, "id": note_id}


def _find_course(courses, course_id):
    c = next((c for c in courses if c.id == course_id), None)
    if not c:
        raise ValueError(f"course {course_id} not found")
    return c


def _delete_course(args):
    course_id = args.get("courseId") or args.get("course-id")
    if course_id is None:
        raise ValueError("missing course-id")
    courses = store.load_courses()
    idx = next((i for i, c in enumerate(courses) if c.id == course_id), None)
    if idx is None:
        raise ValueError(f"course {course_id} not found")
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
    return "ok"


def _delete_day(args):
    course_id = args.get("courseId") or args.get("course-id")
    day_id = args.get("dayId") or args.get("day-id")
    if course_id is None or day_id is None:
        raise ValueError("missing course-id or day-id")
    courses = store.load_courses()
    course = next((c for c in courses if c.id == course_id), None)
    if not course:
        raise ValueError(f"course {course_id} not found")
    day_idx = next((i for i, d in enumerate(course.days) if d.id == day_id), None)
    if day_idx is None:
        raise ValueError(f"day {day_id} not found")
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
    return "ok"
