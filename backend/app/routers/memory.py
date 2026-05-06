from __future__ import annotations
import uuid
from datetime import datetime
from fastapi import APIRouter, HTTPException, Query
from app import store
from app.models import ChatMessage, ChatChannel, TutorNote

router = APIRouter()


def _chat_dict(m: ChatMessage) -> dict:
    return {
        "role": m.role,
        "content": m.content,
        "tool-name": m.tool_name,
        "timestamp": m.timestamp,
        "images": list(m.images or []),
    }


def _channel_dict(c: ChatChannel, *, include_messages: bool = True) -> dict:
    out: dict = {
        "id": c.id,
        "name": c.name,
        "created-at": c.created_at,
        "message-count": len(c.messages),
    }
    if include_messages:
        out["messages"] = [_chat_dict(m) for m in c.messages]
    return out


def _note_dict(n: TutorNote) -> dict:
    return {
        "id": n.id,
        "card-uid": n.card_uid,
        "body": n.body,
        "source": n.source,
        "created-at": n.created_at,
    }


def _new_channel_id() -> str:
    return f"ch-{uuid.uuid4().hex[:10]}"


def _ensure_channel(
    chat: dict[int, list[ChatChannel]],
    course_id: int,
    channel_id: str | None,
) -> ChatChannel:
    """Return an existing channel by id, or fall back to the most recent
    channel in this course, or create a brand-new "default" channel if
    the course has no channels yet. Mutates `chat` in place when it
    creates a channel — caller is responsible for save_chat afterwards.
    """
    channels = chat.setdefault(course_id, [])
    if channel_id:
        for ch in channels:
            if ch.id == channel_id:
                return ch
        # Channel id was specified but doesn't exist — create with that id.
        new = ChatChannel(
            id=channel_id,
            name="",
            created_at=datetime.now().isoformat(),
            messages=[],
        )
        channels.append(new)
        return new
    if channels:
        # Most-recent-or-only channel. Used by SessionCard pipes and the
        # WS append-chat tool — neither of which can sensibly target a
        # specific channel from outside the tutor pane.
        return channels[-1]
    new = ChatChannel(
        id=_new_channel_id(),
        name="Default",
        created_at=datetime.now().isoformat(),
        messages=[],
    )
    channels.append(new)
    return new


@router.get("/api/memory/chat")
def list_chat_threads(
    course_id: int | None = Query(None, alias="course-id"),
    channel_id: str | None = Query(None, alias="channel-id"),
):
    """Three modes:
      - no args: every thread, every channel (with messages)
      - course-id only: that course's channels (with messages)
      - course-id + channel-id: a single channel's messages
    """
    chat = store.load_chat()
    if course_id is not None and channel_id is not None:
        channels = chat.get(course_id, [])
        for c in channels:
            if c.id == channel_id:
                return {
                    "course-id": course_id,
                    "channel": _channel_dict(c),
                }
        raise HTTPException(404, "channel not found")
    if course_id is not None:
        channels = chat.get(course_id, [])
        return {
            "course-id": course_id,
            "channels": [_channel_dict(c) for c in channels],
        }
    return {
        "threads": [
            {
                "course-id": cid,
                "channels": [_channel_dict(c) for c in channels],
            }
            for cid, channels in sorted(chat.items())
        ]
    }


@router.post("/api/memory/chat/append")
def append_chat(body: dict):
    """Append a single turn to a course's channel.

    `channel-id` is optional — when missing, the message lands in the
    course's most-recent channel (creating "Default" if none exist).
    The response always echoes the resolved channel-id so the caller
    can wire up live updates without needing a second round-trip.
    """
    course_id = body.get("course-id")
    if course_id is None:
        course_id = body.get("courseId")
    if course_id is None:
        raise HTTPException(400, "course-id required")
    course_id = int(course_id)
    channel_id = body.get("channel-id") or body.get("channelId")
    role = body.get("role", "user")
    content = body.get("content", "")
    tool_name = body.get("tool-name") or body.get("toolName")
    timestamp = body.get("timestamp") or datetime.now().isoformat()
    images = body.get("images") or []
    if not isinstance(images, list):
        images = []

    chat = store.load_chat()
    channel = _ensure_channel(chat, course_id, channel_id)
    channel.messages.append(
        ChatMessage(
            role=role,
            content=content,
            tool_name=tool_name,
            timestamp=timestamp,
            images=[str(x) for x in images],
        )
    )
    store.save_chat(chat)
    return {
        "ok": True,
        "course-id": course_id,
        "channel-id": channel.id,
        "count": len(channel.messages),
    }


@router.post("/api/memory/channel")
def create_channel(body: dict):
    course_id = body.get("course-id")
    if course_id is None:
        course_id = body.get("courseId")
    if course_id is None:
        raise HTTPException(400, "course-id required")
    course_id = int(course_id)
    name = (body.get("name") or "").strip()

    chat = store.load_chat()
    new = ChatChannel(
        id=_new_channel_id(),
        name=name,
        created_at=datetime.now().isoformat(),
        messages=[],
    )
    chat.setdefault(course_id, []).append(new)
    store.save_chat(chat)
    return {"ok": True, "course-id": course_id, "channel": _channel_dict(new)}


@router.patch("/api/memory/channel")
def rename_channel(body: dict):
    course_id = body.get("course-id")
    if course_id is None:
        course_id = body.get("courseId")
    channel_id = body.get("channel-id") or body.get("channelId")
    name = body.get("name")
    if course_id is None or not channel_id or name is None:
        raise HTTPException(400, "course-id, channel-id, name required")
    course_id = int(course_id)

    chat = store.load_chat()
    for c in chat.get(course_id, []):
        if c.id == channel_id:
            c.name = str(name).strip()
            store.save_chat(chat)
            return {"ok": True, "channel": _channel_dict(c, include_messages=False)}
    raise HTTPException(404, "channel not found")


@router.delete("/api/memory/channel")
def delete_channel(
    course_id: int = Query(..., alias="course-id"),
    channel_id: str = Query(..., alias="channel-id"),
):
    chat = store.load_chat()
    channels = chat.get(course_id, [])
    new_channels = [c for c in channels if c.id != channel_id]
    if len(new_channels) == len(channels):
        raise HTTPException(404, "channel not found")
    chat[course_id] = new_channels
    store.save_chat(chat)
    return {"ok": True}


@router.delete("/api/memory/chat/turn")
def delete_chat_turn(
    course_id: int = Query(..., alias="course-id"),
    index: int = Query(...),
    channel_id: str | None = Query(None, alias="channel-id"),
):
    """Drop a single turn by its 0-based index inside the named channel.
    When channel-id is omitted, the most-recent channel for the course
    is used (matches the legacy semantic of single-thread-per-course)."""
    chat = store.load_chat()
    channels = chat.get(course_id, [])
    target: ChatChannel | None = None
    if channel_id:
        for c in channels:
            if c.id == channel_id:
                target = c
                break
    elif channels:
        target = channels[-1]
    if target is None:
        raise HTTPException(404, "channel not found")
    if index < 0 or index >= len(target.messages):
        raise HTTPException(404, "turn index out of range")
    target.messages.pop(index)
    store.save_chat(chat)
    return {"ok": True, "channel-id": target.id}


@router.delete("/api/memory/chat")
def wipe_chat(
    course_id: int = Query(..., alias="course-id"),
    channel_id: str | None = Query(None, alias="channel-id"),
):
    """Wipe a single channel's messages (when channel-id given) or the
    entire course's channels (when not). Channel-level wipe leaves the
    channel record so the picker still shows it."""
    chat = store.load_chat()
    channels = chat.get(course_id, [])
    if channel_id:
        for c in channels:
            if c.id == channel_id:
                c.messages = []
                store.save_chat(chat)
                return {"ok": True, "channel-id": channel_id}
        raise HTTPException(404, "channel not found")
    if course_id in chat:
        chat[course_id] = []
        store.save_chat(chat)
    return {"ok": True}


@router.get("/api/memory/tutor-notes")
def list_tutor_notes(card_uid: str | None = Query(None, alias="card-uid")):
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
