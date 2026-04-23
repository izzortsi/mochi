"""Two-phase note hygiene pass.

Phase 1 — Rename PT-language note ids to EN equivalents (per the
RENAMES table below). Updates each note's id AND every `related`
reference across the corpus that pointed at the old id.

Phase 2 — Heuristically resolve dead `related` refs. For each ref that
doesn't match any existing id, try a series of cheap normalizations:
  - exact match (trivial; already failed by definition)
  - drop trailing -s / -es  (plural -> singular)
  - add / strip -note suffix
  - combine singular + -note
  - prefix expansion (ref appears as the leading chunk of some id)
  - look up in the PT->EN rename map (in case the ref still uses PT)

When exactly one candidate matches, repoint. When zero or multiple
match, report as unresolved or ambiguous. Reverse links get mirrored
at the end so every edge is bidirectional.

Usage (from /workspace/study-plan/backend/):
    python3 scripts/normalize_note_ids_and_links.py            # dry run
    python3 scripts/normalize_note_ids_and_links.py --apply    # write
"""
from __future__ import annotations
import json
import sys
from collections import defaultdict
from pathlib import Path

NOTES_PATH = Path(__file__).resolve().parent.parent / "data" / "notes.json"

# PT -> EN id renames. Keys are existing ids in notes.json; values are the
# desired EN-singular kebab-case replacement. Where multiple PT notes
# overlap on a concept (e.g. autovalores, autovalores-nota,
# autovalor-definicao all about eigenvalues) we pick distinguishing
# suffixes so the notes stay separate.
RENAMES: dict[str, str] = {
    "autovalor-definicao": "eigenvalue-definition",
    "autovalores":         "eigenvalue-overview",
    "autovalores-nota":    "eigenvalue-computation",
    "autovetor-definicao": "eigenvector-definition",
    "autovetores":         "eigenvector-overview",
    "derivada-nota":       "differentiation-rules",
    "integral-nota":       "integration-techniques",
    "integral-logaritmica": "logarithmic-integration",
    "matriz-ortogonal":    "orthogonal-matrix",
    "matriz-semelhante":   "similar-matrix",
    "matriz-simetrica":    "symmetric-matrix",
    "matrizes-semelhantes": "similar-matrix-properties",
    "operador-inversivel": "invertible-operator",
    "operador-linear":     "linear-operator",
    "operador-ortogonal":  "orthogonal-operator",
    "operador-simetrico":  "symmetric-operator",
}


def candidates_for_dead_ref(ref: str, ids: set[str]) -> set[str]:
    """Generate plausible target ids for a dead `related` reference."""
    cands: set[str] = set()
    if ref in ids:
        cands.add(ref)
    # Plural -> singular (try -es before -s so cases like "matrices" don't
    # truncate to "matrice").
    if ref.endswith("es") and ref[:-2] in ids:
        cands.add(ref[:-2])
    elif ref.endswith("s") and ref[:-1] in ids:
        cands.add(ref[:-1])
    # Add/strip -note suffix.
    if (ref + "-note") in ids:
        cands.add(ref + "-note")
    if ref.endswith("-note") and ref[:-5] in ids:
        cands.add(ref[:-5])
    # Combined: drop plural and add -note.
    for stripped in (ref[:-1], ref[:-2]):
        if stripped and (stripped + "-note") in ids:
            cands.add(stripped + "-note")
    # PT->EN rename map — ref might still use the old id.
    if ref in RENAMES and RENAMES[ref] in ids:
        cands.add(RENAMES[ref])
    # Prefix/suffix expansion: ref is a leading or trailing chunk of an id.
    for nid in ids:
        if nid == ref:
            continue
        if nid.startswith(ref + "-") or nid.endswith("-" + ref):
            cands.add(nid)
    return cands


def main() -> int:
    apply = "--apply" in sys.argv
    drop_ambiguous = "--drop-ambiguous" in sys.argv
    notes = json.loads(NOTES_PATH.read_text())

    # ----- Phase 1: rename PT ids ----------------------------------------
    print("=== Phase 1: rename PT ids -> EN ===\n")
    by_id = {n["id"]: n for n in notes}
    rename_collisions = []
    for old, new in RENAMES.items():
        if old not in by_id:
            print(f"  skip {old} (no such note)")
            continue
        if new in by_id and new != old:
            rename_collisions.append((old, new))
            print(f"  COLLISION: {old} -> {new} (already exists)")
            continue
        n = by_id.pop(old)
        n["id"] = new
        by_id[new] = n
        print(f"  rename {old}  ->  {new}")

    if rename_collisions:
        print(f"\n{len(rename_collisions)} collisions, aborting.")
        return 1

    # Update every related pointer to the new id.
    rewrite_count = 0
    for n in notes:
        new_related = []
        for r in n.get("related", []):
            new_related.append(RENAMES.get(r, r))
        if new_related != n.get("related"):
            n["related"] = new_related
            rewrite_count += 1
    print(f"\nrelated arrays touched by phase-1: {rewrite_count}")

    # ----- Phase 2: heuristic dead-ref resolution ------------------------
    print("\n=== Phase 2: resolve dead `related` refs ===\n")
    ids = {n["id"] for n in notes}
    repointed = 0
    ambiguous: list[tuple[str, str, set[str]]] = []
    unresolved: list[tuple[str, str]] = []

    for n in notes:
        new_related = []
        for ref in n.get("related", []):
            if ref in ids:
                new_related.append(ref)
                continue
            cands = candidates_for_dead_ref(ref, ids)
            if len(cands) == 1:
                target = next(iter(cands))
                print(f"  repoint  {n['id']}: {ref}  ->  {target}")
                new_related.append(target)
                repointed += 1
            elif len(cands) > 1:
                if drop_ambiguous:
                    # Drop the dead ref entirely — the original author's
                    # intent is unrecoverable from the data alone.
                    print(f"  AMBIG-drop  {n['id']}: {ref}  (cands: {sorted(cands)})")
                    ambiguous.append((n["id"], ref, cands))
                else:
                    # Maximise graph connectivity — when a dead ref like
                    # "markov-chain" matches several specific notes, link
                    # to all of them.
                    ordered = sorted(cands)
                    print(f"  fan-out  {n['id']}: {ref}  -> {ordered}")
                    new_related.extend(ordered)
                    ambiguous.append((n["id"], ref, cands))
            else:
                print(f"  DROP     {n['id']}: {ref}  (no candidate)")
                unresolved.append((n["id"], ref))
        # Dedupe while preserving order.
        seen = set()
        n["related"] = [r for r in new_related if not (r in seen or seen.add(r))]

    # ----- Mirror reverse links ------------------------------------------
    by_id = {n["id"]: n for n in notes}
    mirrored = 0
    for n in notes:
        for ref in n["related"]:
            other = by_id.get(ref)
            if other is None:
                continue
            if n["id"] not in other["related"]:
                other["related"].append(n["id"])
                mirrored += 1

    # ----- Summary -------------------------------------------------------
    dead_refs_total = repointed + len(ambiguous) + len(unresolved)
    print()
    print("=== Summary ===")
    print(f"  PT renames applied:         {len(RENAMES) - len(rename_collisions)}")
    print(f"  related arrays touched:     {rewrite_count}")
    print(f"  dead refs found:            {dead_refs_total}")
    print(f"    auto-repointed:           {repointed}")
    label = "dropped" if drop_ambiguous else "fanned-out"
    print(f"    ambiguous ({label}):      {len(ambiguous)}")
    print(f"    unresolved (dropped):     {len(unresolved)}")
    print(f"  reverse links mirrored:     {mirrored}")

    if apply:
        NOTES_PATH.write_text(json.dumps(notes, indent=2, ensure_ascii=False) + "\n")
        print(f"\nwrote {NOTES_PATH}")
    else:
        print("\n(dry run; pass --apply to write notes.json)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
