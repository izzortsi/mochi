# LLM Page Context Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Inject the current page's course/day/cards/progress into the LLM system prompt on every turn so the tutor resolves page-relative commands ("solve silver", "hint for gold") and calls ontology query tools (`concept-mastery`, `next-up`, `list-concepts`, `fetch-card`) for broader questions instead of guessing.

**Architecture:** `runLlmTurn` gains an optional `pageContext: string` parameter. `StudyChat` receives new `course`/`day`/`progress` props, builds the context block with a pure helper, and passes it into the LLM call. The day detail page threads the existing state into StudyChat. The base system prompt gets a new "Current page context" section describing the injected block and a "Broader queries" section listing which tools to call.

**Tech Stack:** Next.js 14, TypeScript, existing `llm.ts` z.ai client, existing `WsClient` for tool dispatch.

**Spec:** `/workspace/study-plan/docs/specs/2026-04-11-llm-page-context-design.md`

---

## Conventions

- All paths repo-relative to `/workspace/study-plan/`.
- Frontend verification: `cd frontend && npx tsc --noEmit` after every change.
- One commit per task, imperative mood, no emoji, no AI mentions.
- No backend changes. No new tests (manual verification at the end).

---

## File structure

```
frontend/src/lib/llm.ts                                  runLlmTurn gains pageContext param; system prompt rewritten
frontend/src/components/StudyChat.tsx                    new props + buildPageContext helper + wired into send()
frontend/src/app/course/[id]/day/[dayId]/page.tsx        thread course/day/progress into StudyChat
```

---

## Task 1: Update `llm.ts` — system prompt and `runLlmTurn` signature

**Files:**
- Modify: `frontend/src/lib/llm.ts`

- [ ] **Step 1: Read the current file**

Read `frontend/src/lib/llm.ts` to confirm the current structure (imports, `STUDY_TUTOR_SYSTEM_PROMPT`, `LlmToolCall`, `LlmTurnResult`, `runLlmTurn`, tool-regex parser).

- [ ] **Step 2: Replace the whole file**

Replace `frontend/src/lib/llm.ts` with EXACTLY this content:

```ts
import type { LlmConfig, ChatMessage } from "./types";
import type { ToolName } from "./tools";

export const STUDY_TUTOR_SYSTEM_PROMPT = `
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
`;

export interface LlmToolCall {
  name: ToolName;
  args: object;
}

export interface LlmTurnResult {
  text: string;
  toolCalls: LlmToolCall[];
}

export async function runLlmTurn(
  config: LlmConfig,
  history: ChatMessage[],
  userMessage: string,
  pageContext?: string,
): Promise<LlmTurnResult> {
  const systemContent = pageContext
    ? `${STUDY_TUTOR_SYSTEM_PROMPT}\n\n${pageContext}`
    : STUDY_TUTOR_SYSTEM_PROMPT;

  const messages = [
    { role: "system", content: systemContent },
    ...history.map(m => ({
      role: m.role === "tool" ? "assistant" : m.role,
      content: m.content,
    })),
    { role: "user", content: userMessage },
  ];

  const res = await fetch(`${config.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    throw new Error(`LLM error ${res.status}: ${await res.text()}`);
  }

  const json = await res.json() as {
    choices: { message: { content: string } }[];
  };
  const content = json.choices[0]?.message?.content ?? "";

  const toolCalls: LlmToolCall[] = [];
  const toolRegex = /<tool>([\s\S]*?)<\/tool>/g;
  let m: RegExpExecArray | null;
  while ((m = toolRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed.name && parsed.args) {
        toolCalls.push({ name: parsed.name as ToolName, args: parsed.args });
      }
    } catch { /* ignore malformed */ }
  }
  const stripped = content.replace(toolRegex, "").trim();

  return { text: stripped, toolCalls };
}
```

- [ ] **Step 3: Typecheck**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```
Expected: no errors. (StudyChat still calls `runLlmTurn` with the old 3-arg signature; the new `pageContext` is optional, so this is backward-compatible.)

- [ ] **Step 4: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/lib/llm.ts && git commit -m "task 1: llm system prompt with page-context slot; runLlmTurn gains pageContext param"
```

---

## Task 2: Update `StudyChat.tsx` — new props and context block builder

**Files:**
- Modify: `frontend/src/components/StudyChat.tsx`

- [ ] **Step 1: Read the current file**

Read `frontend/src/components/StudyChat.tsx` to locate: the `Props` interface, the component signature, the `send` function (specifically the line calling `runLlmTurn(config, messages, userMsg.content)`).

- [ ] **Step 2: Update the type import**

Find the existing type import near the top:
```tsx
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
```

Replace with:
```tsx
import type { ChatMessage, ConnectionStatus, Course, DayView, UserProgress } from "@/lib/types";
```

- [ ] **Step 3: Replace the `Props` interface**

Find:
```tsx
interface Props { courseId: number; dayId: number; onProgressChanged: () => void; }
```

Replace with:
```tsx
interface Props {
  courseId: number;
  dayId: number;
  course: Course;
  day: DayView;
  progress: UserProgress;
  onProgressChanged: () => void;
}
```

- [ ] **Step 4: Add the `buildPageContext` helper**

Find the end of the import block and the start of the `Props` interface. Between them (i.e., above the `interface Props`), add:

```tsx
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

- [ ] **Step 5: Update the component signature to destructure new props**

Find:
```tsx
export function StudyChat({ dayId, onProgressChanged }: Props) {
```

(The existing component may also be destructuring `courseId`. Update to include all new props while keeping whatever's already there.)

Replace with:
```tsx
export function StudyChat({ courseId, dayId, course, day, progress, onProgressChanged }: Props) {
```

- [ ] **Step 6: Pass context into `runLlmTurn`**

Find the `send` async function. Inside it, find the line:
```tsx
const result = await runLlmTurn(config, messages, userMsg.content);
```

Replace with:
```tsx
const context = buildPageContext(course, day, progress);
const result = await runLlmTurn(config, messages, userMsg.content, context);
```

- [ ] **Step 7: Typecheck**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```

Expected: errors in `app/course/[id]/day/[dayId]/page.tsx` because the call site hasn't been updated yet (it's still passing only `courseId`, `dayId`, `onProgressChanged`). That's fine — Task 3 fixes the call site.

Confirm the errors are ONLY in that file, and are about missing `course` / `day` / `progress` props. Any other errors indicate a problem with this task.

- [ ] **Step 8: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/components/StudyChat.tsx && git commit -m "task 2: StudyChat takes course/day/progress; builds page context block"
```

---

## Task 3: Thread props through the day detail page

**Files:**
- Modify: `frontend/src/app/course/[id]/day/[dayId]/page.tsx`

- [ ] **Step 1: Read the current file**

Read `frontend/src/app/course/[id]/day/[dayId]/page.tsx` to find the `<StudyChat ...>` render near the bottom.

- [ ] **Step 2: Update the JSX call**

Find:
```tsx
<StudyChat courseId={courseId} dayId={dayId} onProgressChanged={refresh} />
```

Replace with:
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

The day page already has `course`, `day`, and `progress` in its local state (they're all loaded in the `refresh` callback and guarded by the `if (!course || !day || !progress) return <div>loading…</div>;` check above the JSX). So by the time StudyChat renders, all three are guaranteed non-null.

- [ ] **Step 3: Typecheck**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```

Expected: no errors.

- [ ] **Step 4: Build**

```bash
cd /workspace/study-plan/frontend && npx next build 2>&1 | tail -20
```

Expected: successful build. Route list still includes `/course/[id]/day/[dayId]`.

- [ ] **Step 5: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/app/course/\[id\]/day/\[dayId\]/page.tsx && git commit -m "task 3: thread course/day/progress into StudyChat on day page"
```

---

## Task 4: End-to-end manual smoke test

**Files:**
- No code changes.

This task requires a human at a browser because the payoff is observing LLM behavior. The backend / frontend servers can be automated but the actual LLM call uses the user's z.ai API key from `localStorage`.

- [ ] **Step 1: Start the stack**

```bash
cd /workspace/study-plan && rm -rf backend/data && ./start.sh > /tmp/stack.log 2>&1 &
sleep 15
```

- [ ] **Step 2: Automated sanity check — routes still respond**

```bash
curl -sf http://localhost:3000/course/1/day/1 > /dev/null && echo "day detail OK"
curl -sf http://localhost:4000/api/course?id=1 > /dev/null && echo "api course OK"
curl -sf http://localhost:4000/api/progress > /dev/null && echo "api progress OK"
```

Expected: three "OK" lines.

- [ ] **Step 3: Manual checks in a browser (human-driven)**

Open http://localhost:3000. Set the z.ai API key in Settings if not already configured. Navigate to `/course/1/day/1`. In the tutor panel:

1. Type **"solve silver"**. Expected: the LLM walks through the Day 1 silver card (diagonalizability classification of A1..A4), without asking "which card?".
2. Type **"hint for gold"**. Expected: the LLM gives a Jordan-block hint, not the full Jordan matrix.
3. Type **"have I mastered eigenvalues?"**. Expected: the LLM emits a `concept-mastery` tool call (a tool badge shows in the chat transcript) and reports the correct state ("not started" if fresh).
4. Type **"what should I do next?"**. Expected: the LLM emits a `next-up` tool call and names a specific card-uid.
5. Check a card (e.g., Day 1 bronze) on the page. In chat, type **"list what I've done on this day"**. Expected: the LLM sees the updated completion state in the next context block (the page refreshes progress after the toggle) and reports it.
6. Navigate to `/course/1/day/3`. Type **"solve silver"** again. Expected: the LLM now resolves to Day 3's silver card (not Day 1's).
7. Type **"solve detailedly gold"**. Expected: the LLM walks through the full Day 3 gold solution (the eigenbasis explanation), using the `detail` field.

If any of those fail, the LLM is ignoring the context block — check the browser devtools network tab for the z.ai request body and verify the `CURRENT PAGE` text is actually in the system message.

- [ ] **Step 4: Stop the stack**

```bash
pkill -f "sbcl.*run" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2
rm -rf /workspace/study-plan/backend/data
```

- [ ] **Step 5: Tag**

```bash
cd /workspace/study-plan && git tag llm-page-context-smoke-pass
```

---

## Self-Review

**Spec coverage:**

- **§1 goals** — covered by Tasks 1 (prompt rewrite), 2 (context builder), 3 (prop threading).
- **§3.1 `runLlmTurn` signature** — Task 1 Step 2.
- **§3.2 system prompt rewrite** — Task 1 Step 2 (exact text).
- **§4.1 new props** — Task 2 Step 3.
- **§4.2 `buildPageContext` helper** — Task 2 Step 4 (exact code).
- **§4.3 passing context into the turn** — Task 2 Step 6.
- **§4.4 prop threading** — Task 3 Step 2.
- **§5 data flow** — documentation-only in the spec; the actual wiring is covered by Tasks 1–3.
- **§6 error handling** — `course`/`day`/`progress` non-nullable at render time is ensured by the existing `if (!course || !day || !progress)` guard in day/[dayId]/page.tsx; no new guard needed. `buildPageContext` is a pure string builder inside the existing try/catch around LLM calls.
- **§7 testing** — Task 4 (manual smoke).
- **§8 risks** — documented; no mitigation code required.
- **§9 out of scope** — honored; no code for persistent chat, no multi-page chat.

No spec gaps.

**Placeholder scan:** No "TBD", "implement later", "add validation", "fill in details", or vague steps. Every code step has complete code; every command step has the exact command.

**Type consistency:**
- `pageContext?: string` in `runLlmTurn` (Task 1) matches the `context: string` variable built and passed in Task 2.
- `Course`, `DayView`, `UserProgress` types imported from `@/lib/types` in Task 2 match the types already used in `app/course/[id]/day/[dayId]/page.tsx` (consistent with Task 3).
- `buildPageContext(course, day, progress)` signature in Task 2 matches the call site in Step 6.
- Props destructuring in Task 2 Step 5 enumerates all six fields listed in the Task 2 Step 3 interface.

**Scope:** single cohesive feature. Four tasks (three code + one manual smoke). One commit per task except Task 4 which doesn't need a commit (just a tag at the end). Working software at every task boundary: after Task 1 the backward-compat `runLlmTurn` still works with the existing 3-arg call; after Task 2 the day page has a compile error (expected, fixed in Task 3); after Task 3 everything typechecks and builds; after Task 4 the smoke test tags a known-good state.
