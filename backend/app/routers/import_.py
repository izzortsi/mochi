from __future__ import annotations
from pathlib import Path
from fastapi import APIRouter, Query, HTTPException, Request
from fastapi.responses import Response
from app import store, gamification
from app.models import CourseDef, Phase, Day, Card, ConceptDef
from app.config import settings
from app.services import ollama_ocr, llm
from app.routers.courses import resolve_concept_id

router = APIRouter()


@router.get("/api/pdfs")
def list_pdfs():
    pdfs_dir = settings.pdfs_dir
    if not pdfs_dir.exists():
        return {"files": []}
    return {"files": [f.name for f in sorted(pdfs_dir.iterdir()) if f.is_file()]}


@router.post("/api/pdfs/upload")
async def upload_pdf(request: Request, name: str = Query(...)):
    clean = _sanitize(name)
    if not clean:
        raise HTTPException(400, "invalid filename")
    body = await request.body()
    if not body or len(body) == 0:
        raise HTTPException(400, "empty body")
    if len(body) > settings.max_upload_bytes:
        raise HTTPException(413, "file too large")
    settings.pdfs_dir.mkdir(parents=True, exist_ok=True)
    (settings.pdfs_dir / clean).write_bytes(body)
    return {"files": clean}


@router.get("/api/pdfs/{filename:path}")
def serve_pdf(filename: str):
    path = settings.pdfs_dir / filename
    if not path.exists():
        raise HTTPException(404)
    return Response(content=path.read_bytes(), media_type="application/octet-stream")


@router.post("/api/import/auto")
async def auto_import(body: dict):
    provider = body.get("provider") or "zai"
    api_key = (body.get("api-key") or body.get("apiKey") or "").strip()
    filename = body.get("filename")
    model = body.get("model") or "GLM-5.1"
    mode = body.get("mode") or "new"
    title = body.get("title", "")
    max_pages = body.get("max-pages") or body.get("maxPages") or 30
    target_raw = body.get("target-course-id") or body.get("targetCourseId")

    if not filename:
        raise HTTPException(400, "missing filename")

    if provider == "zai":
        if not api_key:
            raise HTTPException(400, "missing api-key")
        if len(api_key) < 10:
            raise HTTPException(
                400, f"api-key looks too short ({len(api_key)} chars). Check Settings."
            )
        print(f"[import] provider=zai api-key length={len(api_key)} prefix={api_key[:8]}...")
    elif provider == "anthropic-oauth":
        print(f"[import] provider=anthropic-oauth model={model}")
    else:
        raise HTTPException(400, f"unknown provider: {provider}")

    target_id = int(target_raw) if target_raw else None
    if mode == "extend" and target_id is None:
        raise HTTPException(400, "extend mode requires target-course-id")

    pdf_path = settings.pdfs_dir / filename
    if not pdf_path.exists():
        raise HTTPException(404, f"file not found: {filename}")

    try:
        text = await ollama_ocr.extract_text(pdf_path, max_pages=int(max_pages))
    except Exception as e:
        raise HTTPException(502, f"OCR failed: {e}")

    if not text.strip():
        raise HTTPException(502, "OCR returned empty text")

    courses = store.load_courses()
    if mode == "extend":
        course = next((c for c in courses if c.id == target_id), None)
        if not course:
            raise HTTPException(404, f"course {target_id} not found")
        context = llm.build_extend_context(course, all_courses=courses)
        user_content = f"{context}\n\nContent:\n{text}"
        system_prompt = llm.SYSTEM_PROMPT_EXTEND.replace(
            "{existing_concepts}", llm.build_existing_concepts_block(courses)
        )
    else:
        course = None
        user_content = f"Title: {title or filename}\n\nContent:\n{text}"
        system_prompt = llm.SYSTEM_PROMPT_NEW.replace(
            "{existing_concepts}", llm.build_existing_concepts_block(courses)
        )

    try:
        raw = await llm.call_llm(provider, api_key, model, system_prompt, user_content)
        parsed = llm.parse_json_response(raw)
    except RuntimeError as e:
        raise HTTPException(503, str(e))
    except Exception as e:
        raise HTTPException(502, f"LLM failed: {type(e).__name__}: {e}")

    if mode == "extend":
        _commit_extend(courses, course, parsed)
    else:
        _commit_new(parsed)

    return {
        "ok": True,
        "course-id": target_id if mode == "extend" else parsed.get("_course_id", 1),
    }


def _commit_new(data: dict):
    courses = store.load_courses()
    aliases = store.load_aliases()
    new_id = store.next_course_id(courses)

    raw_days = _build_days(data.get("days", []))
    for day in raw_days:
        for card in day.cards:
            card.concepts = [resolve_concept_id(c, aliases) for c in card.concepts]

    seen_ids = set()
    raw_concepts = []
    for c in data.get("concepts", []):
        cid = resolve_concept_id(c.get("id", ""), aliases)
        if cid not in seen_ids:
            seen_ids.add(cid)
            raw_concepts.append(ConceptDef(id=cid, label=c.get("label", cid)))

    raw_prereqs = []
    seen_prereqs = set()
    for pair in data.get("prereqs", []):
        if len(pair) == 2:
            resolved = (resolve_concept_id(pair[0], aliases), resolve_concept_id(pair[1], aliases))
            if resolved not in seen_prereqs:
                seen_prereqs.add(resolved)
                raw_prereqs.append(list(resolved))

    course = CourseDef(
        id=new_id,
        title=data.get("title", "Untitled"),
        slug=data.get("slug", "untitled"),
        phases=[Phase(**p) for p in data.get("phases", [])],
        days=raw_days,
        concepts=raw_concepts,
        prereqs=raw_prereqs,
    )
    courses.append(course)
    store.save_courses(courses)
    _commit_notes(data.get("notes", []))
    data["_course_id"] = new_id


def _commit_extend(courses, course, data: dict):
    aliases = store.load_aliases()

    for p in data.get("newPhases", []):
        course.phases.append(Phase(**p))

    existing_ids = {resolve_concept_id(c.id, aliases) for c in course.concepts}
    for c in data.get("newConcepts", []):
        raw_cid = c.get("id", c.get("concept-id", ""))
        cid = resolve_concept_id(raw_cid, aliases)
        if cid and cid not in existing_ids:
            course.concepts.append(ConceptDef(id=cid, label=c.get("label", cid)))
            existing_ids.add(cid)

    for pair in data.get("newPrereqs", []):
        if len(pair) == 2:
            resolved = [resolve_concept_id(pair[0], aliases), resolve_concept_id(pair[1], aliases)]
            course.prereqs.append(resolved)

    for d in data.get("newDays", []):
        day = _build_day(d)
        for card in day.cards:
            card.concepts = [resolve_concept_id(c, aliases) for c in card.concepts]
        course.days.append(day)

    for ic in data.get("insertedCards", []):
        day = next(
            (
                d
                for d in course.days
                if d.id == ic.get("dayId") or d.id == ic.get("day-id")
            ),
            None,
        )
        if day:
            tier = ic.get("tier", "bronze")
            idx = sum(1 for cd in day.cards if cd.tier == tier)
            resolved_concepts = [resolve_concept_id(c, aliases) for c in ic.get("concepts", [])]
            day.cards.append(
                Card(
                    tier=tier,
                    task_index=idx,
                    text=ic.get("text", ""),
                    detail=ic.get("detail", ""),
                    concepts=resolved_concepts,
                    notes=ic.get("notes", []),
                )
            )

    store.save_courses(courses)
    _commit_notes(data.get("newNotes", []))


def _build_days(raw_days: list[dict]) -> list[Day]:
    return [_build_day(d) for d in raw_days]


def _build_day(d: dict) -> Day:
    cards = []
    for c in d.get("cards", []):
        cards.append(
            Card(
                tier=c.get("tier", "bronze"),
                task_index=len(cards),
                text=c.get("text", ""),
                detail=c.get("detail", ""),
                concepts=c.get("concepts", []),
                notes=c.get("notes", []),
            )
        )
    return Day(
        id=d.get("id", 0),
        phase=d.get("phase", 1),
        title=d.get("title", ""),
        icon=d.get("icon", "*"),
        summary=d.get("summary", ""),
        key_insight=d.get("keyInsight") or d.get("key-insight", ""),
        cards=cards,
    )


def _commit_notes(raw_notes: list[dict]):
    if not raw_notes:
        return
    from app.models import Note

    notes = store.load_notes()
    existing_ids = {n.id for n in notes}
    for rn in raw_notes:
        nid = rn.get("id", "")
        if nid and nid not in existing_ids:
            notes.append(
                Note(
                    id=nid,
                    title=rn.get("title", nid),
                    domain=rn.get("domain", ""),
                    tags=rn.get("tags", []),
                    content=rn.get("content", ""),
                    related=rn.get("related", []),
                    source=rn.get("source", ""),
                )
            )
            existing_ids.add(nid)
    store.save_notes(notes)


def _sanitize(raw: str) -> str | None:
    if not raw:
        return None
    s = raw.strip()
    if "/" in s or "\\" in s or ".." in s or "\0" in s:
        return None
    if len(s) < 5 or not s.lower().endswith(".pdf"):
        return None
    return s.replace(" ", "_")
