"""Manually connect the three qualitative-analysis / phase-portrait notes
that the user flagged as disconnected. Replays the inline edit done during
the original cleanup so the migration pipeline is fully reproducible.

Effects:
  - qualitative-analysis-note: drop broken `autonomous-equation` ref,
    add `autonomous-equation-note` (the actual id).
  - phase-portrait-analysis: drop broken `linear-ode` ref, add
    `linear-ode-note`; drop broken `qualitative-analysis` ref, add
    `qualitative-analysis-autonomous`.
  - Cross-link the three notes (each one references the other two).
  - Mirror reverse links.

Default is dry run; pass --apply to write notes.json.
"""
from __future__ import annotations
import json
import sys
from pathlib import Path

NOTES_PATH = Path(__file__).resolve().parent.parent / "data" / "notes.json"


def main() -> int:
    apply = "--apply" in sys.argv
    notes = json.loads(NOTES_PATH.read_text())
    by_id = {n["id"]: n for n in notes}

    # (note id, ref to drop or None, ref to add or None)
    edits = [
        ("qualitative-analysis-note", "autonomous-equation", "autonomous-equation-note"),
        ("phase-portrait-analysis",   "linear-ode",          "linear-ode-note"),
        ("phase-portrait-analysis",   "qualitative-analysis", "qualitative-analysis-autonomous"),
        ("qualitative-analysis-autonomous", None, "qualitative-analysis-note"),
        ("qualitative-analysis-autonomous", None, "phase-portrait-analysis"),
        ("qualitative-analysis-note",       None, "qualitative-analysis-autonomous"),
        ("qualitative-analysis-note",       None, "phase-portrait-analysis"),
        ("phase-portrait-analysis",         None, "qualitative-analysis-note"),
    ]

    changed = []
    for nid, drop_ref, add_ref in edits:
        n = by_id.get(nid)
        if n is None:
            print(f"  skip {nid} (not found)")
            continue
        if drop_ref and drop_ref in n["related"]:
            n["related"].remove(drop_ref)
            changed.append(f"{nid}: dropped {drop_ref}")
        if add_ref and add_ref not in n["related"] and add_ref in by_id:
            n["related"].append(add_ref)
            changed.append(f"{nid}: added   {add_ref}")
            other = by_id[add_ref]
            if nid not in other["related"]:
                other["related"].append(nid)
                changed.append(f"  -> {add_ref}: mirrored back {nid}")

    for c in changed:
        print(c)
    print(f"\n{len(changed)} edit lines")

    if apply:
        NOTES_PATH.write_text(json.dumps(notes, indent=2, ensure_ascii=False) + "\n")
        print(f"\nwrote {NOTES_PATH}")
    else:
        print("\n(dry run; pass --apply to write notes.json)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
