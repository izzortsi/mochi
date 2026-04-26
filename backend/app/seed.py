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
