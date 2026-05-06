from __future__ import annotations
from datetime import datetime
from fastapi import APIRouter, HTTPException, Query
from app import store
from app.models import Artifact

router = APIRouter()


def _to_dict(a: Artifact) -> dict:
    return {
        "id": a.id,
        "type": a.type,
        "title": a.title,
        "body": a.body,
        "course-id": a.course_id,
        "created-at": a.created_at,
    }


@router.get("/api/artifacts")
def list_artifacts(course_id: int | None = Query(None, alias="course-id")):
    items = store.load_artifacts()
    if course_id is not None:
        items = [a for a in items if a.course_id == course_id]
    # Newest first — the artifacts tab is most useful as a recency stream.
    items_sorted = sorted(items, key=lambda a: a.created_at or "", reverse=True)
    return {"artifacts": [_to_dict(a) for a in items_sorted]}


@router.post("/api/artifacts")
def create_artifact(body: dict):
    """Upsert an artifact by id. Repeated emissions of the same artifact
    (e.g. on chat replay) overwrite the existing entry instead of
    duplicating — the id is stable across re-renders."""
    artifact_id = body.get("id")
    if not artifact_id:
        raise HTTPException(400, "id required")
    payload = body.get("body")
    if payload is None:
        raise HTTPException(400, "body required")
    course_id = body.get("course-id")
    if course_id is None:
        course_id = body.get("courseId", 0)
    created_at = body.get("created-at") or body.get("createdAt") or datetime.now().isoformat()

    new_artifact = Artifact(
        id=str(artifact_id),
        type=str(body.get("type") or "html"),
        title=str(body.get("title") or ""),
        body=str(payload),
        course_id=int(course_id),
        created_at=created_at,
    )
    items = store.load_artifacts()
    replaced = False
    for i, existing in enumerate(items):
        if existing.id == new_artifact.id:
            items[i] = new_artifact
            replaced = True
            break
    if not replaced:
        items.append(new_artifact)
    store.save_artifacts(items)
    return {"ok": True, "artifact": _to_dict(new_artifact), "replaced": replaced}


@router.delete("/api/artifacts/{artifact_id}")
def delete_artifact(artifact_id: str):
    items = store.load_artifacts()
    filtered = [a for a in items if a.id != artifact_id]
    if len(filtered) == len(items):
        raise HTTPException(404, "artifact not found")
    store.save_artifacts(filtered)
    return {"ok": True}
