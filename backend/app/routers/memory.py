from __future__ import annotations
from fastapi import APIRouter, HTTPException, Query
from app import store
from app.models import ChatMessage, TutorNote

router = APIRouter()


def _chat_dict(m: ChatMessage) -> dict:
    return {
        "role": m.role,
        "content": m.content,
        "tool-name": m.tool_name,
        "timestamp": m.timestamp,
    }


def _note_dict(n: TutorNote) -> dict:
    return {
        "id": n.id,
        "card-uid": n.card_uid,
        "body": n.body,
        "source": n.source,
        "created-at": n.created_at,
    }


@router.get("/api/memory/chat")
def list_chat_threads(course_id: int | None = Query(None)):
    """All chat threads (grouped by course) or a single course's thread."""
    chat = store.load_chat()
    if course_id is not None:
        msgs = chat.get(course_id, [])
        return {"course-id": course_id, "messages": [_chat_dict(m) for m in msgs]}
    return {
        "threads": [
            {"course-id": cid, "messages": [_chat_dict(m) for m in msgs]}
            for cid, msgs in sorted(chat.items())
        ]
    }


@router.delete("/api/memory/chat/turn")
def delete_chat_turn(course_id: int = Query(...), index: int = Query(...)):
    """Drop a single turn by its 0-based index."""
    chat = store.load_chat()
    msgs = chat.get(course_id, [])
    if index < 0 or index >= len(msgs):
        raise HTTPException(404, "turn index out of range")
    msgs.pop(index)
    chat[course_id] = msgs
    store.save_chat(chat)
    return {"ok": True}


@router.delete("/api/memory/chat")
def wipe_chat(course_id: int = Query(...)):
    """Wipe the whole chat thread for a course."""
    chat = store.load_chat()
    if course_id in chat:
        chat[course_id] = []
        store.save_chat(chat)
    return {"ok": True}


@router.get("/api/memory/tutor-notes")
def list_tutor_notes(card_uid: str | None = Query(None)):
    notes = store.load_tutor_notes()
    if card_uid:
        notes = [n for n in notes if n.card_uid == card_uid]
    return {"notes": [_note_dict(n) for n in notes]}


@router.delete("/api/memory/tutor-notes/{note_id}")
def delete_tutor_note(note_id: str):
    notes = store.load_tutor_notes()
    filtered = [n for n in notes if n.id != note_id]
    if len(filtered) == len(notes):
        raise HTTPException(404, "note not found")
    store.save_tutor_notes(filtered)
    return {"ok": True}
