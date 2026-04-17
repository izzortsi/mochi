from __future__ import annotations
from fastapi import APIRouter, Query, HTTPException
from app import store
from app.models import Note

router = APIRouter()


@router.get("/api/notes")
def list_notes(domain: str | None = None, tag: str | None = None):
    notes = store.load_notes()
    if domain:
        notes = [n for n in notes if n.domain == domain]
    if tag:
        notes = [n for n in notes if tag in n.tags]
    return [
        {
            "id": n.id,
            "title": n.title,
            "domain": n.domain,
            "tags": n.tags,
            "related": n.related,
            "source": n.source,
        }
        for n in notes
    ]


@router.get("/api/notes/graph")
def notes_graph():
    notes = store.load_notes()
    note_ids = {n.id for n in notes}
    nodes = []
    edges = []
    seen_edges = set()
    for n in notes:
        nodes.append({"id": n.id, "label": n.title, "domain": n.domain, "tags": n.tags})
        for r in n.related:
            if r not in note_ids:
                continue
            key = tuple(sorted([n.id, r]))
            if key not in seen_edges:
                seen_edges.add(key)
                edges.append({"from": n.id, "to": r})
    return {"nodes": nodes, "edges": edges}


@router.get("/api/note")
def get_note(id: str = Query(...)):
    notes = store.load_notes()
    n = next((n for n in notes if n.id == id), None)
    if not n:
        raise HTTPException(404, "note not found")
    related_notes = []
    for rid in n.related:
        rn = next((x for x in notes if x.id == rid), None)
        if rn:
            related_notes.append({"id": rn.id, "title": rn.title, "domain": rn.domain})
    return {
        "id": n.id,
        "title": n.title,
        "domain": n.domain,
        "tags": n.tags,
        "content": n.content,
        "related": related_notes,
        "source": n.source,
    }


@router.post("/api/notes")
def create_note(body: dict):
    notes = store.load_notes()
    nid = body.get("id", "")
    if any(n.id == nid for n in notes):
        raise HTTPException(400, "note id already exists")
    note = Note(
        id=nid,
        title=body.get("title", ""),
        domain=body.get("domain", ""),
        tags=body.get("tags", []),
        content=body.get("content", ""),
        related=body.get("related", []),
        source=body.get("source", ""),
    )
    notes.append(note)
    store.save_notes(notes)
    return {"ok": True, "id": nid}


@router.post("/api/notes/link")
def link_note(body: dict):
    note_id = body.get("noteId") or body.get("note-id", "")
    related_id = body.get("relatedId") or body.get("related-id", "")
    notes = store.load_notes()
    n = next((n for n in notes if n.id == note_id), None)
    if not n:
        raise HTTPException(404, f"note {note_id} not found")
    if related_id not in n.related:
        n.related.append(related_id)
    r = next((r for r in notes if r.id == related_id), None)
    if r and note_id not in r.related:
        r.related.append(note_id)
    store.save_notes(notes)
    return {"ok": True}


@router.get("/api/notes/domains")
def list_domains():
    notes = store.load_notes()
    domains = sorted(set(n.domain for n in notes if n.domain))
    return {"domains": domains}
