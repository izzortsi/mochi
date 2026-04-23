from __future__ import annotations
import re
import unicodedata

# Domain normalization for zettelkasten notes.
#
# Notes accumulated 41 distinct domain strings — a mix of English, Portuguese,
# title-case, kebab-case, and one-off labels for single notes. That made the
# /notes graph fragmented (one cluster per spelling) instead of one cluster
# per real subject. This module collapses every variant to a small canonical
# kebab-case English vocabulary. _add_note and _update_note in routers/ws.py
# pipe new writes through normalize_domain so the data stays clean going
# forward; scripts/normalize_note_domains.py applies the same map to the
# existing notes.json one-off.

# canonical -> set of variants seen in the wild (all lowercased before lookup).
DOMAIN_VARIANTS: dict[str, set[str]] = {
    "analysis": {
        "real analysis", "real-analysis", "analysis",
    },
    "algebra": {
        "álgebra linear", "álgebra-linear", "algebra-linear",
        "linear algebra", "linear-algebra",
    },
    "calculus": {
        "cálculo", "calculo",
        "cálculo diferencial", "calculo-diferencial",
        "cálculo integral", "calculo-integral",
        "multivariable calculus", "multivariable-calculus",
    },
    "ode": {
        "ode and dynamical systems",
        "ode theory", "ode-theory",
        "differential equations", "differential-equations",
        "solution methods", "solution-methods",
        "solution dynamics", "solution-dynamics",
        "existence & uniqueness", "existence and uniqueness",
        "stability theory", "stability-theory",
        "comparison methods", "comparison-methods",
        "fundamental theory", "fundamental-theory",
        "linear algebra & odes", "linear algebra and odes",
        "multivariable calculus & odes",
        "physics & odes", "physics and odes",
        "linear algebra & dynamics", "linear algebra and dynamics",
    },
    "dynamical-systems": {
        "dynamical systems", "dynamical-systems",
        "chaotic dynamics", "chaotic-dynamics",
        "dynamical systems & mechanics", "dynamical systems and mechanics",
    },
    "probability": {
        "probability", "probability theory", "probability-theory",
    },
    "measure-theory": {
        "measure theory", "measure-theory",
    },
    "topology": {"topology"},
    "set-theory": {"set theory", "set-theory"},
    "foundations": {"foundations", "logic"},
    "functional-analysis": {"functional analysis", "functional-analysis"},
    "physics": {"classical mechanics", "classical-mechanics", "physics"},
    "ml": {
        "deep learning", "deep-learning",
        "information theory", "information-theory",
        "game theory", "game-theory",
        "machine learning", "machine-learning",
    },
    "integration": {"integration"},
}

# Inverted lookup: variant -> canonical. Built once at module load.
_DOMAIN_BY_VARIANT: dict[str, str] = {}
for canonical, variants in DOMAIN_VARIANTS.items():
    _DOMAIN_BY_VARIANT[canonical] = canonical  # canonical maps to itself
    for v in variants:
        _DOMAIN_BY_VARIANT[v] = canonical


def normalize_note_id(raw: str) -> str:
    """Coerce an incoming note id to lowercase ASCII kebab-case.

    Strips diacritics (NFD + drop combining marks), lowercases, replaces
    spaces and underscores with hyphens, drops anything that isn't
    [a-z0-9-], collapses runs of hyphens, and trims leading/trailing
    hyphens.

    Returns "" if nothing survives — callers should treat that as a
    validation failure ("note-id required").

    Notes:
    - English/singular wording is encouraged in the system prompt; this
      function can't enforce that automatically (no language detection),
      but it does make the format mechanically uniform.
    - Existing data already conforms to this format end-to-end (audited
      209 notes, zero non-conforming). The function exists to keep it
      that way for new writes.
    """
    if not raw:
        return ""
    s = unicodedata.normalize("NFD", raw)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    s = s.lower().strip()
    s = re.sub(r"[\s_]+", "-", s)
    s = re.sub(r"[^a-z0-9-]", "", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s


def normalize_domain(raw: str) -> str:
    """Return the canonical domain for a raw label.

    Lookup is case-insensitive and tolerates leading/trailing whitespace.
    Unknown labels are passed through as a kebab-cased fallback so we
    don't silently drop a real domain that just isn't in the table yet —
    you'll see it in /notes and can extend DOMAIN_VARIANTS to absorb it.
    """
    if not raw:
        return ""
    key = raw.strip().lower()
    if key in _DOMAIN_BY_VARIANT:
        return _DOMAIN_BY_VARIANT[key]
    # Fallback: kebab-case the raw label so unknown new domains at least
    # arrive in the canonical format.
    return "-".join(key.split())
