"""PDF attachments for tutor chat (Anthropic-only).

Mirrors the chat-images flow: uploaded once via POST /api/chat-pdf,
written to ``$SP_DATA_DIR/chat-pdfs/{uuid}.pdf``, and referenced by
public URL on ``ChatMessage.pdfs``. The LLM router fetches them off
disk and inlines them as Anthropic ``document`` content blocks. Only
the anthropic-oauth provider supports document content — zai messages
have their pdf refs stripped before forwarding.
"""
from __future__ import annotations
import uuid
from pathlib import Path

from fastapi import APIRouter, File, Form, HTTPException, UploadFile
from fastapi.responses import FileResponse

from app.config import settings


router = APIRouter()

# Anthropic accepts application/pdf only for document blocks.
ALLOWED_MEDIA_TYPE = "application/pdf"

# 10 MB cap matches the in-app guidance shown to the user. Anthropic's
# hard ceiling is 32 MB / 100 pages per document, but staying under 10
# MB keeps the base64-expanded request body well within their per-turn
# budget.
MAX_PDF_BYTES = 10 * 1024 * 1024


def _pdfs_dir() -> Path:
    d = settings.data_dir / "chat-pdfs"
    d.mkdir(parents=True, exist_ok=True)
    return d


def resolve_pdf_path(name: str) -> Path:
    if "/" in name or "\\" in name or ".." in name:
        raise HTTPException(400, "invalid pdf name")
    path = _pdfs_dir() / name
    if not path.exists() or not path.is_file():
        raise HTTPException(404, "pdf not found")
    return path


@router.post("/api/chat-pdf")
async def upload_pdf(
    file: UploadFile = File(...),
    # Original filename so the chat UI can label the chip with something
    # the user recognizes (uuid-on-disk is ugly). Optional — falls back
    # to the upload's own filename if the form field is missing.
    label: str | None = Form(None),
):
    # iOS Safari sometimes posts PDFs from the Files app with an empty
    # or octet-stream content type. Accept by filename extension as a
    # fallback so mobile uploads don't get rejected.
    media = (file.content_type or "").lower()
    fname = (file.filename or "").lower()
    looks_like_pdf = media == ALLOWED_MEDIA_TYPE or fname.endswith(".pdf")
    if not looks_like_pdf:
        raise HTTPException(400, f"unsupported media type: {media or '(unknown)'}")

    blob = await file.read()
    if len(blob) > MAX_PDF_BYTES:
        raise HTTPException(413, f"pdf exceeds {MAX_PDF_BYTES} bytes (10 MB)")
    if not blob:
        raise HTTPException(400, "empty pdf")

    name = f"{uuid.uuid4().hex}.pdf"
    (_pdfs_dir() / name).write_bytes(blob)
    display = (label or file.filename or name).strip() or name
    return {
        "ok": True,
        "name": name,
        "url": f"/api/chat-pdf/{name}",
        "label": display,
        "bytes": len(blob),
    }


@router.get("/api/chat-pdf/{name}")
def serve_pdf(name: str):
    path = resolve_pdf_path(name)
    return FileResponse(path, media_type=ALLOWED_MEDIA_TYPE, filename=name)
