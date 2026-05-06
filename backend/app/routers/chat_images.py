"""Image attachments for tutor chat.

Pasted images are uploaded once via POST /api/chat-image, written to
``$SP_DATA_DIR/chat-images/{uuid}.{ext}``, and referenced by their
public URL on the message (``ChatMessage.images``). The LLM router
fetches them from disk when forwarding to Anthropic so chat.json stays
text-only.
"""
from __future__ import annotations
import mimetypes
import uuid
from pathlib import Path

from fastapi import APIRouter, File, HTTPException, UploadFile
from fastapi.responses import FileResponse

from app.config import settings


router = APIRouter()

# Anthropic accepts these image media types. Anything else is rejected at
# upload time so we never store junk that the LLM call would reject.
ALLOWED_MEDIA_TYPES = {
    "image/png": ".png",
    "image/jpeg": ".jpg",
    "image/gif": ".gif",
    "image/webp": ".webp",
}

# Per-image cap. Anthropic's hard limit is 5 MB per image; staying under
# 4 MB leaves headroom for base64 expansion in the request body.
MAX_IMAGE_BYTES = 4 * 1024 * 1024


def _images_dir() -> Path:
    d = settings.data_dir / "chat-images"
    d.mkdir(parents=True, exist_ok=True)
    return d


def resolve_image_path(name: str) -> Path:
    """Map a user-facing filename back to a real path on disk.

    Rejects path traversal — only accept the bare filename written by
    upload_image (uuid + known extension).
    """
    if "/" in name or "\\" in name or ".." in name:
        raise HTTPException(400, "invalid image name")
    path = _images_dir() / name
    if not path.exists() or not path.is_file():
        raise HTTPException(404, "image not found")
    return path


@router.post("/api/chat-image")
async def upload_image(file: UploadFile = File(...)):
    media = file.content_type or ""
    if media not in ALLOWED_MEDIA_TYPES:
        raise HTTPException(400, f"unsupported media type: {media}")

    blob = await file.read()
    if len(blob) > MAX_IMAGE_BYTES:
        raise HTTPException(413, f"image exceeds {MAX_IMAGE_BYTES} bytes")
    if not blob:
        raise HTTPException(400, "empty image")

    name = f"{uuid.uuid4().hex}{ALLOWED_MEDIA_TYPES[media]}"
    (_images_dir() / name).write_bytes(blob)
    return {
        "ok": True,
        "name": name,
        "url": f"/api/chat-image/{name}",
        "media-type": media,
        "bytes": len(blob),
    }


@router.get("/api/chat-image/{name}")
def serve_image(name: str):
    path = resolve_image_path(name)
    media = mimetypes.guess_type(str(path))[0] or "application/octet-stream"
    return FileResponse(path, media_type=media)
