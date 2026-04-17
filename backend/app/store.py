from __future__ import annotations
import json
import threading
from pathlib import Path
from app.models import CourseDef, Progress, ChatMessage, Note, ConceptAlias
from app.config import settings


_lock = threading.Lock()


def _read_json(path: Path, default):
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return default


def _write_json(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")


def _courses_path() -> Path:
    return settings.data_dir / "courses.json"


def _progress_path() -> Path:
    return settings.data_dir / "progress.json"


def _chat_path() -> Path:
    return settings.data_dir / "chat.json"


def load_courses() -> list[CourseDef]:
    with _lock:
        raw = _read_json(_courses_path(), [])
    return [CourseDef(**c) for c in raw]


def save_courses(courses: list[CourseDef]):
    with _lock:
        _write_json(_courses_path(), [c.model_dump() for c in courses])


def load_progress() -> Progress:
    with _lock:
        raw = _read_json(_progress_path(), {})
    return Progress(**raw)


def save_progress(progress: Progress):
    with _lock:
        _write_json(_progress_path(), progress.model_dump())


def load_chat() -> dict[int, list[ChatMessage]]:
    with _lock:
        raw = _read_json(_chat_path(), {})
    return {int(k): [ChatMessage(**m) for m in v] for k, v in raw.items()}


def save_chat(chat: dict[int, list[ChatMessage]]):
    with _lock:
        _write_json(
            _chat_path(),
            {str(k): [m.model_dump() for m in v] for k, v in chat.items()},
        )


def _aliases_path() -> Path:
    return settings.data_dir / "aliases.json"


def load_aliases() -> list[ConceptAlias]:
    with _lock:
        raw = _read_json(_aliases_path(), [])
    return [ConceptAlias(**a) for a in raw]


def save_aliases(aliases: list[ConceptAlias]):
    with _lock:
        _write_json(_aliases_path(), [a.model_dump() for a in aliases])


def next_course_id(courses: list[CourseDef]) -> int:
    if not courses:
        return 1
    return max(c.id for c in courses) + 1


def _pet_path() -> Path:
    return settings.data_dir / "pet.json"


def load_pet() -> dict | None:
    with _lock:
        return _read_json(_pet_path(), None)


def save_pet(pet: dict):
    with _lock:
        _write_json(_pet_path(), pet)


def _notes_path() -> Path:
    return settings.data_dir / "notes.json"


def load_notes() -> list[Note]:
    with _lock:
        raw = _read_json(_notes_path(), [])
    return [Note(**n) for n in raw]


def save_notes(notes: list[Note]):
    with _lock:
        _write_json(_notes_path(), [n.model_dump() for n in notes])
