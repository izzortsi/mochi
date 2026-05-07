"""Manual OAuth token operations.

The anthropic-oauth library auto-refreshes the access token using the
stored refresh token on every call, so day-to-day usage doesn't need a
button. This router exists for the case where the refresh token itself
has been rotated out of validity (e.g. another instance refreshed the
shared creds first) and the user has just pasted a fresh tokens.json
into ``SP_OAUTH_TOKENS_JSON`` — but the running backend still has the
old tokens cached on disk and in-process. The reseed endpoint
overwrites disk from the env var and clears the in-process client so
the next LLM call rebuilds against the fresh creds without a redeploy.
"""
from __future__ import annotations
import json
import os
from pathlib import Path

from fastapi import APIRouter, File, HTTPException, UploadFile

from anthropic_oauth import OAuthManager

from app.services import llm_anthropic


router = APIRouter()


# Required keys for a valid tokens.json. Library schema:
#   { "access": "sk-ant-oat01-…", "refresh": "sk-ant-ort01-…", "expires": <unix>}
_REQUIRED_TOKEN_KEYS = ("access", "refresh", "expires")


def _token_target_path() -> Path:
    raw = (os.environ.get("SP_OAUTH_TOKEN_PATH") or "").strip()
    if not raw:
        raise HTTPException(
            400,
            "SP_OAUTH_TOKEN_PATH is not set; can't decide where to write tokens.json.",
        )
    return Path(raw)


def _install_tokens(payload: str) -> dict:
    """Validate, write to disk, reset the in-process client, and verify.
    Common path used by both the env-reseed and file-upload endpoints."""
    payload = payload.strip()
    if not payload:
        raise HTTPException(400, "empty tokens payload")
    try:
        parsed = json.loads(payload)
    except json.JSONDecodeError as e:
        raise HTTPException(400, f"tokens payload is not valid JSON: {e}")
    if not isinstance(parsed, dict):
        raise HTTPException(400, "tokens payload must be a JSON object")
    missing = [k for k in _REQUIRED_TOKEN_KEYS if k not in parsed]
    if missing:
        raise HTTPException(
            400,
            f"tokens payload missing required key(s): {', '.join(missing)}. "
            f"Expected the full tokens.json that `anthropic-oauth auth` writes "
            f"(keys: {', '.join(_REQUIRED_TOKEN_KEYS)}).",
        )

    target = _token_target_path()
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(payload, encoding="utf-8")
    try:
        target.chmod(0o600)
    except OSError:
        pass

    # Drop the cached client so the next chat() rebuilds from disk.
    llm_anthropic._client = None

    try:
        manager = OAuthManager(str(target))
        valid = manager.has_valid_tokens()
    except Exception as e:
        raise HTTPException(500, f"tokens written but unreadable: {e}")
    if not valid:
        raise HTTPException(500, "tokens written but OAuthManager rejected them")
    return {"ok": True, "valid": True, "path": str(target)}


@router.post("/api/oauth/upload")
async def upload_tokens(file: UploadFile = File(...)):
    """Install a fresh tokens.json the user just generated locally with
    `anthropic-oauth auth`. No env var, no Render shell, no redeploy —
    pick the file in the Settings modal and the backend reseeds itself."""
    blob = await file.read()
    if not blob:
        raise HTTPException(400, "empty file")
    if len(blob) > 64 * 1024:
        raise HTTPException(413, "tokens.json should be < 64 KB")
    try:
        payload = blob.decode("utf-8")
    except UnicodeDecodeError as e:
        raise HTTPException(400, f"tokens.json must be UTF-8 text: {e}")
    return _install_tokens(payload)


@router.post("/api/oauth/refresh")
def refresh_oauth():
    """Reseed tokens.json from the SP_OAUTH_TOKENS_JSON env var.

    Kept as a fallback path for deployments where the user prefers
    pasting once into env vars (e.g. blueprint reapply scenarios). The
    primary path is now /api/oauth/upload — file picker in Settings."""
    payload = (os.environ.get("SP_OAUTH_TOKENS_JSON") or "").strip()
    if not payload:
        raise HTTPException(
            400,
            "SP_OAUTH_TOKENS_JSON is not set on the backend. Use the "
            "file-upload button in Settings to install a fresh tokens.json "
            "directly, or paste into the env var first.",
        )
    return _install_tokens(payload)
