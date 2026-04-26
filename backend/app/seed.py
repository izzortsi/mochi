"""One-way data sync from the deployed image to the runtime data dir.

On Render the backend's runtime state lives on a persistent disk mounted at
``$SP_DATA_DIR`` (see render.yaml). The repo also tracks JSON state under
``backend/data/`` so sessions can resume across machines (see CLAUDE.md).
Without help, those two never meet — the disk shadows the bundled files and
``git push`` never propagates a course-catalog edit to the live app.

This module copies the bundled JSON files into ``settings.data_dir`` at
backend startup. It's an unconditional overwrite: the deploy is a
single-user system and the local git checkout is the source of truth.
Studying on the deployed instance and expecting that work to survive the
next deploy DOES NOT WORK — pull the disk's copy back to git first if you
ever do that.

When ``settings.data_dir`` resolves to the bundled path itself (i.e. the
default local-dev configuration) the sync is a no-op so we don't shuffle
files around in place.
"""
from __future__ import annotations

import os
import shutil
from pathlib import Path

from app.config import settings


# Files written by the backend at runtime that we sync from git on every
# deploy. Anything not in this list is left alone. Keep it explicit so a
# stray file in backend/data/ can't sneak into production.
SEED_FILES = (
    "courses.json",
    "progress.json",
    "pet.json",
    "chat.json",
    "notes.json",
    "tutor_notes.json",
    "srs.json",
    "aliases.json",
)


# The bundled data dir matches the OLD default for settings.data_dir
# (backend/data, two levels up from this file). Resolving once at import
# avoids surprises if cwd shifts later in the process lifecycle.
BUNDLED_DATA_DIR = (Path(__file__).resolve().parent.parent / "data").resolve()


def seed_data_dir() -> None:
    target = settings.data_dir.resolve()
    if BUNDLED_DATA_DIR == target:
        return
    target.mkdir(parents=True, exist_ok=True)
    for name in SEED_FILES:
        src = BUNDLED_DATA_DIR / name
        if not src.exists():
            continue
        shutil.copy2(src, target / name)


def seed_oauth_tokens() -> None:
    """Restore anthropic-oauth tokens.json from an env var if missing.

    Render's persistent disk usually survives deploys, but tier changes
    or blueprint reapplies can rebuild it — wiping the OAuth tokens that
    live OUTSIDE the seed allowlist (because they're a secret, not git
    state). To avoid having to manually re-paste the file into the Render
    shell every time that happens, paste it once into the env var
    ``SP_OAUTH_TOKENS_JSON`` and this function will write it to disk on
    startup IF the file is missing.

    Existing files are left alone — the OAuth library refreshes the
    access token in-place over time, so we'd corrupt live tokens by
    overwriting them with the (now-stale) original from the env var.
    """
    payload = os.environ.get("SP_OAUTH_TOKENS_JSON", "").strip()
    if not payload:
        return
    raw_path = os.environ.get("SP_OAUTH_TOKEN_PATH", "").strip()
    if not raw_path:
        return
    target_path = Path(raw_path)
    if target_path.exists():
        return
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text(payload, encoding="utf-8")
    try:
        target_path.chmod(0o600)
    except OSError:
        # Some hosted environments forbid chmod; best-effort.
        pass
