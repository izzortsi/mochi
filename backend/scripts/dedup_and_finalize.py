"""Final hygiene pass: round out PT renames, then merge Tier 1 + Tier 2
duplicates into single canonical notes.

Phase A1 — extra PT-id renames (concepts whose only issue is language).
Phase A2 — merges. For each canonical_id <- [victim_ids], we
  - concat victim content beneath the canonical's (separated by "---\\n\\n")
  - union tags and related (deduped)
  - rewrite every other note's `related` array to repoint victim->canonical
  - drop the victim notes
Phase B — re-mirror reverse links so every edge is bidirectional.
Phase C — verify zero broken refs and report new graph stats.

Default is dry run; pass --apply to write notes.json.
"""
from __future__ import annotations
import json
import sys
from pathlib import Path

NOTES_PATH = Path(__file__).resolve().parent.parent / "data" / "notes.json"

# ----- Phase A1: extra PT renames ----------------------------------------
# These are pure renames — the note keeps all its content, just gets a new
# English id. Any other note that pointed at the old id is updated.
EXTRA_RENAMES: dict[str, str] = {
    "diagonalizacao":            "diagonalization",
    "diagonalizacao-criterio":   "diagonalization-criterion",
    "integracao-por-partes":     "integration-by-parts",
    "metodo-substituicao":       "substitution-method",
    "mudanca-de-base":           "change-of-basis",
    "regra-da-cadeia":           "chain-rule",
    "regra-cadeia-exponencial":  "chain-rule-exponential",
    "regra-cadeia-raiz":         "chain-rule-root",
    "substituicao-potencia":     "power-substitution",
}

# ----- Phase A2: merges (canonical -> victims) ---------------------------
# Run AFTER Phase A1 so the canonical ids are in their final EN form.
# Victim ids are whatever they are at this point (some are still PT;
# others were already renamed by the earlier migrations).
MERGES: dict[str, list[str]] = {
    # Tier 1 — hard duplicates
    "first-order-systems":             ["first-order-system-note"],
    "super-sub-solutions":             ["super-sub-solutions-note"],
    "similar-matrix":                  ["similar-matrix-properties"],
    "diagonalization":                 ["diagonalizacao-nota"],
    "ode-existence-uniqueness":        ["existence-uniqueness-note"],
    "lyapunov-function":               ["lyapunov-function-note"],
    "floquet-theory-periodic-systems": ["floquet-note"],
    "dedekind-cut":                    ["dedekind-cut-note"],
    "cantor-diagonal-argument":        ["cantor-diagonal-method"],
    "open-closed-sets":                ["open-and-closed-sets"],
    # Tier 2 — same concept, different angle
    "classification-of-odes":          ["ode-classification-note"],
    "super-sub-solutions":             ["super-sub-solutions-note", "ode-super-subsolutions"],
    "lyapunov-function":               ["lyapunov-function-note", "lyapunov-function-method"],
    "melnikov-method":                 ["melnikov-note"],
    "frobenius-method":                ["frobenius-note"],
    "chain-rule":                      ["regra-cadeia"],
    "change-of-basis":                 ["mudanca-base-nota"],
}


def merge_into(canonical: dict, victim: dict) -> None:
    """Fold victim's content/tags/related into canonical, in place."""
    if victim.get("content"):
        if canonical.get("content"):
            canonical["content"] = (
                canonical["content"].rstrip()
                + "\n\n---\n\n"
                + victim["content"].lstrip()
            )
        else:
            canonical["content"] = victim["content"]
    canonical["tags"] = list(dict.fromkeys(
        list(canonical.get("tags", [])) + list(victim.get("tags", []))
    ))
    canonical["related"] = list(dict.fromkeys(
        list(canonical.get("related", [])) + list(victim.get("related", []))
    ))


def main() -> int:
    apply = "--apply" in sys.argv
    notes = json.loads(NOTES_PATH.read_text())
    n_initial = len(notes)

    # ----- Phase A1: extra PT renames ------------------------------------
    print("=== Phase A1: extra PT renames ===\n")
    by_id = {n["id"]: n for n in notes}
    for old, new in EXTRA_RENAMES.items():
        if old not in by_id:
            print(f"  skip {old} (no such note)")
            continue
        if new in by_id and new != old:
            print(f"  COLLISION: {old} -> {new} (already exists, will be merged below)")
            continue
        n = by_id.pop(old)
        n["id"] = new
        by_id[new] = n
        print(f"  rename {old}  ->  {new}")

    # Update related refs to use the new ids
    rewrites_a1 = 0
    for n in notes:
        new_related = [EXTRA_RENAMES.get(r, r) for r in n.get("related", [])]
        if new_related != n.get("related"):
            n["related"] = new_related
            rewrites_a1 += 1
    print(f"\nrelated arrays touched by phase A1: {rewrites_a1}")

    # ----- Phase A2: merges ----------------------------------------------
    print("\n=== Phase A2: merges (canonical <- victims) ===\n")
    by_id = {n["id"]: n for n in notes}
    dropped_ids: set[str] = set()
    redirect: dict[str, str] = {}  # victim id -> canonical id

    for canonical_id, victim_ids in MERGES.items():
        canonical = by_id.get(canonical_id)
        if canonical is None:
            print(f"  SKIP merge into {canonical_id}: canonical not found")
            continue
        for vid in victim_ids:
            if vid in dropped_ids:
                continue  # already merged in a previous round
            victim = by_id.get(vid)
            if victim is None:
                print(f"  skip victim {vid} (no such note)")
                continue
            print(f"  merge   {canonical_id}  <-  {vid}"
                  f"  (canon={len(canonical.get('content',''))}c"
                  f"  victim={len(victim.get('content',''))}c)")
            merge_into(canonical, victim)
            dropped_ids.add(vid)
            redirect[vid] = canonical_id

    # Strip canonical_id from each canonical's own related (no self-loops)
    # and dedupe.
    for canonical_id in MERGES:
        n = by_id.get(canonical_id)
        if not n:
            continue
        n["related"] = [r for r in n.get("related", []) if r != canonical_id]

    # Drop victim notes from the list.
    notes = [n for n in notes if n["id"] not in dropped_ids]

    # Rewrite every other note's related to redirect victim -> canonical.
    redirect_rewrites = 0
    for n in notes:
        new_related = []
        for r in n.get("related", []):
            new_related.append(redirect.get(r, r))
        # Dedupe + drop self-references.
        seen = set()
        deduped = []
        for r in new_related:
            if r == n["id"] or r in seen:
                continue
            seen.add(r)
            deduped.append(r)
        if deduped != n.get("related"):
            n["related"] = deduped
            redirect_rewrites += 1
    print(f"\nrelated arrays touched by phase A2 redirect: {redirect_rewrites}")
    print(f"victims dropped: {len(dropped_ids)}")

    # ----- Phase B: re-mirror reverse links -----------------------------
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
    print(f"\nreverse links mirrored: {mirrored}")

    # ----- Phase C: verify ----------------------------------------------
    ids = {n["id"] for n in notes}
    broken = [(n["id"], r) for n in notes for r in n["related"] if r not in ids]
    isolates = [n["id"] for n in notes if not n["related"]]
    edges = sum(len(n["related"]) for n in notes)

    print("\n=== Phase C: verify ===")
    print(f"  notes:       {n_initial} -> {len(notes)} (dropped {n_initial - len(notes)})")
    print(f"  edges:       {edges} (avg {edges/len(notes):.1f} per note)")
    print(f"  broken refs: {len(broken)}")
    if broken:
        for nid, ref in broken[:10]:
            print(f"    {nid} -> {ref}")
        if len(broken) > 10:
            print(f"    ... +{len(broken)-10} more")
    print(f"  isolates:    {len(isolates)}")

    if apply:
        NOTES_PATH.write_text(json.dumps(notes, indent=2, ensure_ascii=False) + "\n")
        print(f"\nwrote {NOTES_PATH}")
    else:
        print("\n(dry run; pass --apply to write notes.json)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
