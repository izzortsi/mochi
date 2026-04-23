"""One-off migration: collapse 41 raw domain strings in notes.json down to
the canonical kebab-case English vocabulary defined in
app.services.note_normalize.

Usage (from /workspace/study-plan/backend/):
    python3 scripts/normalize_note_domains.py            # dry run, prints diff
    python3 scripts/normalize_note_domains.py --apply    # writes notes.json

The dry run is the default so you can see exactly what's about to change
before it touches disk. Format of the output: one line per affected note,
NoteId: "old domain"  ->  "new domain", followed by a summary table.
"""
from __future__ import annotations
import json
import sys
from collections import Counter
from pathlib import Path

# Make `app.*` importable when run as a script from backend/.
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.services.note_normalize import normalize_domain  # noqa: E402

NOTES_PATH = Path(__file__).resolve().parent.parent / "data" / "notes.json"


def main() -> int:
    apply = "--apply" in sys.argv
    notes = json.loads(NOTES_PATH.read_text())

    changes: list[tuple[str, str, str]] = []  # (id, old, new)
    new_dist: Counter[str] = Counter()
    for n in notes:
        old = n.get("domain", "")
        new = normalize_domain(old)
        if old != new:
            changes.append((n.get("id", "?"), old, new))
            n["domain"] = new
        new_dist[new] += 1

    print(f"{len(changes)} of {len(notes)} notes will change domain.\n")
    if changes:
        print("--- per-note diff ---")
        for nid, old, new in changes:
            print(f'  {nid}:  "{old}"  ->  "{new}"')
        print()

    print("--- post-normalize domain distribution ---")
    for d, c in sorted(new_dist.items(), key=lambda kv: -kv[1]):
        print(f"  {c:3d}  {d}")
    print()

    if apply:
        NOTES_PATH.write_text(json.dumps(notes, indent=2, ensure_ascii=False) + "\n")
        print(f"wrote {NOTES_PATH}")
    else:
        print("(dry run; pass --apply to write notes.json)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
