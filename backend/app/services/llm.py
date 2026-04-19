from __future__ import annotations
import asyncio
import json
import re
import httpx

from app.services import llm_anthropic


SESSION_SHAPE_DOC = """Each card is a study SESSION with five phases grounded in cognitive psychology:
  prime      — activate prior knowledge + state the learning goal
  core       — exposition + worked example + problem
  retrieval  — active recall prompts the learner answers from memory
  elaborate  — prompts that force explaining in own words
  check      — one self-assessment prompt with a short rubric

BREVITY IS CRITICAL. Every field must be concise:
  - goal / priorKnowledge: one sentence each
  - exposition: 2-4 short sentences, the key idea only
  - workedExample: one example, 3-6 short lines
  - problem: one problem statement
  - retrieval prompts: EXACTLY 2 per session (id "r1","r2"); answer ≤ 2 sentences
  - elaborate prompts: EXACTLY 1 per session (id "e1")
  - check.rubric: one sentence

A card's JSON shape (fill all five phases):
{
  "tier": "bronze|silver|gold",
  "concepts": ["concept-id"],
  "notes": ["note-id"],
  "phases": {
    "prime":     {"goal": "...", "priorKnowledge": "..."},
    "core":      {"exposition": "...", "workedExample": "...", "problem": "..."},
    "retrieval": {"prompts": [{"id": "r1", "prompt": "...", "answer": "...",
                                "concept": "concept-id"}]},
    "elaborate": {"prompts": [{"id": "e1", "prompt": "..."}]},
    "check":     {"prompt": "...", "rubric": "..."}
  }
}
bronze = diagnostic recall, silver = targeted practice, gold = challenge/integration.
LaTeX ($...$, $$...$$) is allowed. Terseness beats completeness — a short session that
fits in the token budget is better than a truncated JSON response.
"""


SYSTEM_PROMPT_NEW = """You are parsing study material into a structured course with an atomic knowledge base.
Return a single JSON object with this exact shape:
{
  "title": "...",
  "slug": "kebab-case",
  "phases": [{"num": 1, "title": "..."}],
  "days": [{"id": 1, "phase": 1, "title": "...", "icon": "*",
            "summary": "...", "keyInsight": "LaTeX OK",
            "cards": [ SESSION_CARD ]}],
  "concepts": [{"id": "kebab-case", "label": "display"}],
  "prereqs": [["concept-id", "prereq-id"]],
  "notes": [{"id": "kebab-case", "title": "...", "domain": "...",
              "tags": ["tag1"], "content": "markdown article body",
              "related": ["other-note-id"]}]
}
""" + SESSION_SHAPE_DOC + """
IMPORTANT for concept IDs: use singular form (e.g. "autovalor" not "autovalores", "derivada" not "derivadas"). Use consistent kebab-case IDs for the same mathematical concept across courses. If a concept already exists (listed below), reuse its exact ID.
Notes are atomic articles (like a Zettelkasten). Each note is a self-contained explanation of a single concept or technique. Content is markdown with LaTeX. Every concept should have a corresponding note. Cards reference notes they relate to.
Return ONLY the JSON, no prose, no markdown fences.

Existing concepts across all courses (reuse these IDs for the same concepts):
{existing_concepts}"""


SYSTEM_PROMPT_EXTEND = """You are extending an existing study course with new material.
Return ONLY this JSON shape, no prose, no markdown fences:
{
  "newPhases": [{"num": 5, "title": "..."}],
  "newDays": [{"id": 8, "phase": 5, "title": "...", "icon": "*",
               "summary": "...", "keyInsight": "...",
               "cards": [ SESSION_CARD ]}],
  "insertedCards": [ SESSION_CARD_WITH_DAY_ID ],
  "newConcepts": [{"id": "kebab-case", "label": "display"}],
  "newPrereqs": [["concept-id", "prereq-id"]],
  "newNotes": [{"id": "kebab-case", "title": "...", "domain": "...",
                 "tags": ["tag1"], "content": "markdown body",
                 "related": ["other-note-id"]}]
}
insertedCards are session cards with an extra "dayId" field identifying the target day.
""" + SESSION_SHAPE_DOC + """
IMPORTANT for concept IDs: use singular form (e.g. "autovalor" not "autovalores", "derivada" not "derivadas"). Use consistent kebab-case IDs for the same mathematical concept across courses. If a concept already exists (listed below), reuse its exact ID.
{existing_concepts}"""


IMPORT_MAX_TOKENS = 64000


async def call_openai_chat(
    api_key: str,
    model: str,
    messages: list[dict],
    temperature: float = 0.2,
    max_tokens: int = IMPORT_MAX_TOKENS,
) -> str:
    async with httpx.AsyncClient(timeout=600) as client:
        resp = await client.post(
            "https://api.z.ai/api/coding/paas/v4/chat/completions",
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {api_key}",
            },
            json={
                "model": model,
                "temperature": temperature,
                "messages": messages,
                "max_tokens": max_tokens,
            },
        )
        resp.raise_for_status()
        envelope = resp.json()
        return envelope["choices"][0]["message"]["content"]


async def call_llm(
    provider: str,
    api_key: str,
    model: str,
    system_prompt: str,
    user_content: str,
) -> str:
    if provider == "anthropic-oauth":
        return await asyncio.to_thread(
            llm_anthropic.call_single_turn,
            model,
            system_prompt,
            user_content,
            IMPORT_MAX_TOKENS,
        )
    if provider == "zai":
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_content},
        ]
        return await call_openai_chat(
            api_key, model, messages, temperature=0.2, max_tokens=IMPORT_MAX_TOKENS
        )
    raise ValueError(f"unknown provider: {provider}")


def _strip_fences(raw: str) -> str:
    return re.sub(r"^```(?:json)?\s*", "", re.sub(r"```\s*$", "", raw.strip()))


def _repair_truncated_json(s: str) -> str | None:
    """Best-effort salvage when the LLM stops generating mid-object.

    Walk the string tracking structural state. Snapshot the prefix length +
    open-bracket stack at each safe cut point: after a closing bracket, or
    just before a comma (which ends a key-value pair or array element). At
    end, truncate to the last snapshot and append the reversed unclosed
    brackets. Returns None if no safe cut point exists.
    """
    in_string = False
    escape = False
    stack: list[str] = []
    snapshots: list[tuple[int, tuple[str, ...]]] = []  # (prefix_len, stack_at_that_point)
    for i, ch in enumerate(s):
        if escape:
            escape = False
            continue
        if in_string:
            if ch == "\\":
                escape = True
            elif ch == '"':
                in_string = False
            continue
        if ch == '"':
            in_string = True
            continue
        if ch in "{[":
            stack.append("}" if ch == "{" else "]")
        elif ch in "}]":
            if stack:
                stack.pop()
            snapshots.append((i + 1, tuple(stack)))
        elif ch == ",":
            # Prefix ending just before this comma is a complete value.
            snapshots.append((i, tuple(stack)))

    if not snapshots:
        return None
    prefix_len, remaining = snapshots[-1]
    trimmed = s[:prefix_len].rstrip().rstrip(",").rstrip()
    for closer in reversed(remaining):
        trimmed += closer
    return trimmed


def parse_json_response(raw: str) -> dict:
    clean = _strip_fences(raw)
    try:
        return json.loads(clean)
    except json.JSONDecodeError:
        repaired = _repair_truncated_json(clean)
        if repaired is None:
            raise
        # If repair still fails, surface the original error.
        try:
            parsed = json.loads(repaired)
        except json.JSONDecodeError:
            raise
        parsed["_truncated"] = True
        return parsed


def build_extend_context(course, all_courses=None) -> str:
    lines = [f"Current course: {course.title}"]
    lines.append(f"Max existing day-id: {max((d.id for d in course.days), default=0)}")
    lines.append("\nExisting phases:")
    for p in course.phases:
        lines.append(f"  {p.num}. {p.title}")
    lines.append("\nExisting days:")
    for d in course.days:
        lines.append(f"  Day {d.id} (phase {d.phase}): {d.title}")
    lines.append("\nExisting concepts in this course:")
    for con in course.concepts:
        lines.append(f"  {con.id} — {con.label}")
    if all_courses:
        other = [(c2.title, c2.concepts) for c2 in all_courses if c2.id != course.id and c2.concepts]
        if other:
            lines.append("\nConcepts from other courses (reuse IDs for same concepts):")
            for title, concepts in other:
                for con in concepts:
                    lines.append(f"  {con.id} — {con.label} (course: {title})")
    return "\n".join(lines)


def build_existing_concepts_block(all_courses) -> str:
    if not all_courses:
        return "(none yet)"
    lines = []
    for c in all_courses:
        for con in c.concepts:
            lines.append(f"  {con.id} — {con.label} (course: {c.title})")
    return "\n".join(lines) if lines else "(none yet)"
