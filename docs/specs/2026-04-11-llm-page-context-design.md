# LLM Knows the Ontology — Design Spec

**Date:** 2026-04-11
**Status:** Approved for implementation planning
**Builds on:** `2026-04-11-ontology-design.md` (multi-course + ontology), `2026-04-10-study-plan-design.md` (StudyChat, LLM client)

## 1. Overview

The chat tutor currently has no awareness of the page it's on. A user on `/course/1/day/3` who types *"solve silver"* gets back *"Which course? Which card?"* — because `StudyChat` passes only `courseId: number` and `dayId: number` into the LLM call and never injects the actual card text. This spec fixes that by:

1. **Auto-injecting current page context** into the LLM system prompt on every turn: course + day + each tier's cards (text, detail, concepts, completion state).
2. **Teaching the LLM to call ontology query tools** (`concept-mastery`, `next-up`, `list-concepts`, `fetch-card`) for cross-page questions instead of guessing.

No backend changes. No new tools. No new types. Three frontend files change: `llm.ts`, `StudyChat.tsx`, and the day detail page.

### Goals

- **Page-relative commands resolve.** "Solve silver" → the silver card on the current day.
- **Cross-page queries work.** "What should I do next?" → LLM calls `next-up`. "Have I mastered eigenvalues?" → LLM calls `concept-mastery`.
- **No latency regression for the common case.** Page context is injected synchronously from data the day page already holds; no extra round-trips.
- **No stale context.** Context is rebuilt on every user turn from the latest `course` and `progress` passed in as props, so as the user marks cards complete the next turn's context reflects it.

### Non-goals

- Chat on the course list page or concept page. (Chat remains day-detail only.)
- Persisting chat across day navigation. (Per-mount state remains.)
- Multi-day context. The LLM sees only the current day in-prompt; it uses tools to reach other days.
- Automatic LLM tool-calling without prompt guidance. (We rely on prompt instructions, not forced tool-use heuristics.)

## 2. Architecture delta

Three files change:

```
frontend/src/lib/llm.ts                                   system prompt rewrite; runLlmTurn gains pageContext param
frontend/src/components/StudyChat.tsx                     new props course + day + progress; builds context block
frontend/src/app/course/[id]/day/[dayId]/page.tsx         passes course + day + progress to StudyChat
```

The WS tool dispatch, `tools.ts` schemas, and backend are unchanged.

## 3. `llm.ts` changes

### 3.1 `runLlmTurn` signature

Add an optional `pageContext` parameter:

```ts
export async function runLlmTurn(
  config: LlmConfig,
  history: ChatMessage[],
  userMessage: string,
  pageContext?: string,
): Promise<LlmTurnResult>
```

Inside the function, when `pageContext` is provided, the system message content becomes `STUDY_TUTOR_SYSTEM_PROMPT + "\n\n" + pageContext`. Otherwise only the base prompt is sent.

### 3.2 Base system prompt rewrite

Replace `STUDY_TUTOR_SYSTEM_PROMPT` with:

```
You are a patient, concise tutor AND a study-material ingestion agent
embedded in a multi-course study app backed by an s-expression ontology
store. You can do two things:

(A) Tutor the user on the current card, across any course:
- Hints without revealing the solution. Escalate gradually.
- Grade attempts via grade-attempt (verdict: correct|partial|wrong).
- Generate similar problems via append-generated-task (attach to source-card-uid).
- Mark complete via mark-task-complete.

(B) Ingest new material into a new course:
- ALWAYS start by calling list-concepts to see what concepts already exist.
- Reuse existing concept-ids when the meaning matches.
- Propose a course structure turn by turn. Show each proposal to the user for confirm/edit.
- On confirm, call create-course, create-phase, create-day, create-card,
  create-concept (for any new ones), tag-card, add-prereq.
- Card-uids follow the pattern "c<course>-d<day>-<tier>-<index>".

# Current page context

The user is viewing a specific course and day. The app injects a
"CURRENT PAGE" block below this line on every turn with: course id/title,
day id/title, key insight, and all cards on the day (uid, tier, text,
solution, concepts, completion state).

When the user refers to a card by tier alone — "bronze", "silver", "gold",
"solve silver", "hint for gold", "grade my bronze answer" — they mean the
card on THIS day in that tier. Resolve the reference from the page block.

The "solution" field in the page block is for your reference. Do not reveal
it unless the user explicitly asks to see the solution, wants a full
walkthrough, or says something like "solve detailedly".

# Broader queries (use tools — don't guess)

For questions that go beyond the current page, call the appropriate tool
BEFORE answering:

- Mastery questions ("have I mastered X?", "am I good at Y?") →
  call concept-mastery with the concept id.
- "What should I study next?" / "What's unlocked?" →
  call next-up with the current course-id.
- "List concepts" / "What topics exist?" / needing the concept vocabulary
  for tagging → call list-concepts.
- A card from a different day or course → call fetch-card with its card-uid.

Do not fabricate mastery state or next-step suggestions. If a tool isn't
available, say so.

# Rules

- LaTeX: inline math in $...$, display in $$...$$.
- Tool calls: emit <tool>{"name":"tool-name","args":{...}}</tool>.
  One tool per turn. The UI handles dispatch.
- Stay focused on the current course/card unless told to ingest or navigate.
```

## 4. `StudyChat.tsx` changes

### 4.1 New props

```ts
interface Props {
  courseId: number;
  dayId: number;
  course: Course;
  day: DayView;
  progress: UserProgress;
  onProgressChanged: () => void;
}
```

`course` / `day` / `progress` are already held by the day detail page; passing them in costs nothing.

The existing `courseId: number` and `dayId: number` props stay because they're used by the WS tool calls that want ints (`append-chat`, etc.).

### 4.2 Context block builder

Add a pure function at the top of `StudyChat.tsx`:

```ts
function buildPageContext(course: Course, day: DayView, progress: UserProgress): string {
  const completed = progress.completedTasks ?? {};
  const tiers: Array<"bronze" | "silver" | "gold"> = ["bronze", "silver", "gold"];

  const lines: string[] = [];
  lines.push("# CURRENT PAGE");
  lines.push(`Course ${course.id}: ${course.title}`);
  lines.push(`Day ${day.id}: ${day.title}`);
  if (day.keyInsight) lines.push(`Key insight: ${day.keyInsight}`);
  lines.push("");
  lines.push("Cards on this day:");

  for (const tier of tiers) {
    const cards = day.cards.filter(c => c.tier === tier);
    for (const c of cards) {
      const done = completed[c.cardUid] ? "✓ completed" : "○ not completed";
      lines.push("");
      lines.push(`${tier.toUpperCase()} (card-uid: ${c.cardUid}) [${done}]`);
      lines.push(`  Text: ${c.text}`);
      lines.push(`  Solution (internal — don't reveal unless asked): ${c.detail}`);
      if (c.concepts.length > 0) lines.push(`  Concepts: ${c.concepts.join(", ")}`);
    }
  }

  lines.push("");
  lines.push(`Overall course progress: ${progress.xp} XP, streak ${progress.streak}.`);
  return lines.join("\n");
}
```

Notes:
- Strings with newlines are fine inside a JSON string body (the fetch call JSON-stringifies messages, which escapes `\n` correctly).
- Completion state reflects the latest `progress` prop, which the day page refreshes after every toggle.
- The `card-uid` is included so the LLM can call `grade-attempt` / `mark-task-complete` / `append-generated-task` with the right target.

### 4.3 Passing context into the turn

In `StudyChat.tsx`'s `send` function, where it currently calls `runLlmTurn(config, messages, userMsg.content)`, change to:

```ts
const context = buildPageContext(course, day, progress);
const result = await runLlmTurn(config, messages, userMsg.content, context);
```

Everything else in the send flow stays unchanged.

### 4.4 Prop threading

`frontend/src/app/course/[id]/day/[dayId]/page.tsx` currently renders:

```tsx
<StudyChat courseId={courseId} dayId={dayId} onProgressChanged={refresh} />
```

Change to:

```tsx
<StudyChat
  courseId={courseId}
  dayId={dayId}
  course={course}
  day={day}
  progress={progress}
  onProgressChanged={refresh}
/>
```

The day page already has `course`, `day`, and `progress` in local state after `refresh()`; this is a zero-cost addition.

## 5. Data flow

```
User types "solve silver"
    │
    ▼
StudyChat.send()
    │
    ├─ buildPageContext(course, day, progress) → string
    │
    ├─ runLlmTurn(config, history, userMessage, pageContext)
    │     │
    │     ├─ system message = BASE_PROMPT + "\n\n" + pageContext
    │     │
    │     ▼
    │   z.ai chat-completions API
    │     │
    │     ├─ response contains assistant text + <tool>...</tool> blocks
    │
    ├─ LLM sees CURRENT PAGE block, resolves "silver" to c1-d3-silver-0,
    │   reads its text and detail, writes a walkthrough
    │
    ▼
Chat panel renders the response.
```

For broader queries (e.g., "what should I study next?"):

```
User types "what's next for me?"
    │
    ▼
StudyChat.send() with pageContext
    │
    ▼
LLM reads: "Broader queries (use tools — don't guess): ... next-up"
    │
    ├─ emits <tool>{"name":"next-up","args":{"courseId":1}}</tool>
    │
    ▼
StudyChat dispatches next-up over WS, gets back list of card-uids,
feeds the response into the next LLM turn.
    │
    ▼
LLM reads the tool response, answers the user.
```

## 6. Error handling

- `course` / `day` / `progress` are non-nullable props. The day page already guards `if (!course || !day || !progress) return loading`; this means StudyChat only mounts when all three are populated. No runtime null check needed.
- If `buildPageContext` throws (shouldn't — it's a pure string builder), it bubbles up into the existing try/catch around the LLM call, which already shows an error in the chat panel.
- Context block size: at 21 cards with a few hundred tokens each, we're well under any reasonable context window budget. No truncation strategy needed.

## 7. Testing

No automated tests. Manual checks:

1. Start stack. Open `/course/1/day/1`.
2. In the tutor panel, type *"solve silver"*. Verify the LLM walks through the Day 1 silver card's solution (diagonalizability classification) — it should NOT ask "which card?".
3. Type *"hint for gold"*. Verify the LLM gives a Jordan-block hint without revealing the full Jordan matrix.
4. Type *"have I mastered eigenvalues?"*. Verify the LLM calls `concept-mastery` (tool badge appears in chat) and reports the correct state.
5. Type *"what should I do next?"*. Verify the LLM calls `next-up` and names a specific card.
6. Mark a card complete, ask the LLM to list completed cards on the day — verify the context block reflects the new state without a page reload.
7. Navigate to `/course/1/day/3`. Repeat step 2 with *"solve silver"* — should resolve to Day 3's silver card, not Day 1's.

## 8. Risks and limits

- **Solution leakage.** The detail field is included in the context. The prompt tells the LLM not to reveal it unless asked. The LLM may still leak it under pressure. Acceptable: this is a personal study app, single-user; the worst case is the user sees a solution they weren't supposed to.
- **Prompt size.** Each turn re-sends the full context. For a 21-card course the overhead is small; for a giant imported course (hundreds of cards per day) this would bloat. Not a concern at current scale. Mitigation later: only include the current day's cards, which is what we already do — the "Overall course progress" line is one extra int tuple.
- **Tool overuse.** The LLM might call `list-concepts` or `next-up` for trivial questions. Acceptable — tool responses are cheap.
- **Tool under-use.** The LLM might guess mastery state instead of calling `concept-mastery`. Mitigation: the prompt explicitly says "Do not fabricate mastery state". If this turns into a problem in practice, we can escalate to forcing a tool call via a second prompt rule.

## 9. Out of scope (future)

- Injecting per-concept mastery state into the context block automatically (right now the LLM has to call the tool). Tradeoff: more context bloat vs. fewer round-trips. Reassess after use.
- Chat panel on the course list / concept page / concept-map page. Different context block per page type.
- Persisting chat history across day navigation. Would require a shared chat store.
- Multi-turn coaching sessions that track the user's current attempt across turns.
