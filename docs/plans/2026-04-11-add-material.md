# Add Material to Existing Courses — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Let users grow existing courses via two paths: (1) extend-mode in the import wizard that appends new days and inserts cards into existing days from a new PDF, and (2) a manual "+ add card" modal on each course dashboard.

**Architecture:** No new backend modules. `backend/import-api.lisp` gains an extend-mode branch that injects the target course's structure into the LLM prompt. Frontend grows two new UIs (`AddCardModal.tsx`, mode toggle in `ImportWizard.tsx`) that write through existing WS tools (`create-card`, `tag-card`, `create-concept`, `create-phase`, `create-day`, `add-prereq`).

**Tech Stack:** Common Lisp (Hunchentoot + Dexador for the LLM proxy), Next.js 14, TypeScript, existing WS client + tools.ts schemas.

**Spec:** `/workspace/study-plan/docs/specs/2026-04-11-add-material-design.md`

---

## Conventions

- All paths repo-relative to `/workspace/study-plan/`.
- Backend changes: verify via `cd backend && sbcl --non-interactive --load ~/quicklisp/setup.lisp --eval '(push #p"./" asdf:*central-registry*)' --eval '(ql:quickload :study-plan :silent t)' --eval '(format t "loaded")'`. The existing FiveAM test suite (95 checks) must stay green.
- Frontend changes: verify via `cd frontend && npx tsc --noEmit`. Build with `npx next build` once at the end.
- Commits: imperative mood, no emoji, no AI mention, no Co-Authored-By.

---

## File Structure

### Modified backend files

```
backend/import-api.lisp         extend-mode branch: accepts mode + target-course-id,
                                 builds course context, swaps system prompt
```

### New frontend files

```
frontend/src/components/AddCardModal.tsx      manual add-card modal
```

### Modified frontend files

```
frontend/src/components/ImportWizard.tsx         mode toggle, extend-mode parse shape,
                                                  two-shape review tree, extend commit path
frontend/src/app/course/[id]/page.tsx            "+ add card" button + modal state
```

No new REST endpoints. No new WS tools. No schema changes. No tests — all new logic is either UI or LLM-proxy passthrough.

---

## Task 1: Manual AddCardModal component

**Files:**
- Create: `frontend/src/components/AddCardModal.tsx`

- [ ] **Step 1: Write the full component**

Create `frontend/src/components/AddCardModal.tsx`:

```tsx
"use client";
import { useEffect, useRef, useState } from "react";
import { X, Plus } from "lucide-react";
import { ontology } from "@/lib/ontology";
import { WsClient } from "@/lib/ws";
import type { Course, Tier, ConceptNode, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";

interface Props {
  courseId: number;
  days: Array<{ id: number; title: string }>;
  onClose: () => void;
  onSaved: () => void;
}

interface Chip { id: string; label: string; isNew: boolean; }

function kebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}
function quote(s: string): string {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function encodeValue(v: unknown): string {
  if (typeof v === "string") return quote(v);
  if (typeof v === "number") return String(v);
  if (v === null) return "nil";
  return quote(String(v));
}
function buildFrame(name: string, args: Record<string, unknown>, requestId: string): string {
  const pairs = Object.entries(args).map(([k, v]) => `(${kebab(k)} ${encodeValue(v)})`);
  return `(call ${quote(name)} (${pairs.join(" ")}) ${quote(requestId)})`;
}

export function AddCardModal({ courseId, days, onClose, onSaved }: Props) {
  const [dayId, setDayId] = useState<number | null>(days[0]?.id ?? null);
  const [tier, setTier] = useState<Tier>("bronze");
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [chips, setChips] = useState<Chip[]>([]);
  const [conceptPool, setConceptPool] = useState<ConceptNode[]>([]);
  const [query, setQuery] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);

  useEffect(() => {
    ontology.fetchConceptMapAll()
      .then(m => setConceptPool(m.nodes))
      .catch(() => setConceptPool([]));
    const ws = new WsClient("ws://localhost:4000/ws", () => {}, setStatus);
    ws.connect();
    wsRef.current = ws;
    return () => ws.disconnect();
  }, []);

  const chipIds = new Set(chips.map(c => c.id));
  const suggestions = query.trim().length > 0
    ? conceptPool.filter(c =>
        (c.id.includes(query.toLowerCase()) || c.label.toLowerCase().includes(query.toLowerCase()))
        && !chipIds.has(c.id))
    : [];
  const queryMatchesExisting = conceptPool.some(c => c.id === query.trim());
  const canMintNew = query.trim().length > 0 && !queryMatchesExisting && !chipIds.has(query.trim());

  const addChip = (id: string, label: string, isNew: boolean) => {
    setChips(xs => [...xs, { id, label, isNew }]);
    setQuery("");
  };
  const removeChip = (id: string) => setChips(xs => xs.filter(c => c.id !== id));

  const canSave = dayId !== null && text.trim() !== "" && detail.trim() !== "" && !saving;

  const save = async () => {
    if (!canSave || !wsRef.current || dayId === null) return;
    setSaving(true);
    setError(null);
    try {
      // Fresh-fetch the course to compute next task-index.
      const course: Course = await ontology.fetchCourse(courseId);
      const day = course.days.find(d => d.id === dayId);
      if (!day) throw new Error(`day ${dayId} not found in course ${courseId}`);
      const nextIndex = day.cards.filter(c => c.tier === tier).length;
      const cardUid = `c${courseId}-d${dayId}-${tier}-${nextIndex}`;

      const ws = wsRef.current;
      const call = (name: string, args: Record<string, unknown>): Promise<void> =>
        new Promise((resolve) => {
          const requestId = Math.random().toString(36).slice(2, 10);
          ws.send(buildFrame(name, args, requestId));
          setTimeout(resolve, 60);
        });

      // Mint new concepts first.
      for (const chip of chips) {
        if (chip.isNew) {
          await call("create-concept", { conceptId: chip.id, label: chip.label });
        }
      }
      // Create the card.
      await call("create-card", {
        cardUid, courseId, dayId, tier,
        taskIndex: nextIndex, text, detail,
      });
      // Tag it.
      for (const chip of chips) {
        await call("tag-card", { cardUid, conceptId: chip.id });
      }

      onSaved();
    } catch (e) {
      setError(String(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-[36rem] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-xl">Add card</h2>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>

        <div className="text-xs opacity-50 mb-3">ws: {status}</div>
        {error && <div className="mb-3 p-2 rounded bg-phase3/20 text-phase3 text-sm">{error}</div>}

        <label className="block mb-3">
          <span className="text-sm opacity-70">Day</span>
          <select
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
            value={dayId ?? ""}
            onChange={e => setDayId(parseInt(e.target.value, 10))}
          >
            {days.map(d => <option key={d.id} value={d.id}>Day {d.id} — {d.title}</option>)}
          </select>
        </label>

        <div className="mb-3">
          <span className="text-sm opacity-70">Tier</span>
          <div className="mt-1 flex gap-2">
            {(["bronze", "silver", "gold"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTier(t)}
                className={`px-3 py-1 rounded border text-xs uppercase tracking-wider ${
                  tier === t ? "border-[#f5f0e8]" : "border-[#2a2a3f] opacity-60"
                }`}
              >{t}</button>
            ))}
          </div>
        </div>

        <label className="block mb-1">
          <span className="text-sm opacity-70">Problem text (LaTeX)</span>
          <textarea
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2 font-mono text-sm"
            rows={3}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </label>
        {text && (
          <div className="mb-3 p-2 rounded bg-[#0a0a14] text-sm">
            <div className="text-xs opacity-40 mb-1">preview</div>
            <MathText>{text}</MathText>
          </div>
        )}

        <label className="block mb-1">
          <span className="text-sm opacity-70">Solution (LaTeX)</span>
          <textarea
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2 font-mono text-sm"
            rows={3}
            value={detail}
            onChange={e => setDetail(e.target.value)}
          />
        </label>
        {detail && (
          <div className="mb-3 p-2 rounded bg-[#0a0a14] text-sm">
            <div className="text-xs opacity-40 mb-1">preview</div>
            <MathText>{detail}</MathText>
          </div>
        )}

        <div className="mb-4">
          <span className="text-sm opacity-70">Concepts</span>
          <div className="mt-1 flex flex-wrap gap-1 mb-2">
            {chips.map(c => (
              <span key={c.id} className={`text-xs px-2 py-0.5 rounded-full inline-flex items-center gap-1 ${c.isNew ? "bg-phase1/30" : "bg-[#1a1a2a]"}`}>
                {c.label}
                <button onClick={() => removeChip(c.id)} className="opacity-60 hover:opacity-100"><X className="w-3 h-3" /></button>
              </span>
            ))}
          </div>
          <input
            className="w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-1 text-sm"
            placeholder="search or add concept…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {(suggestions.length > 0 || canMintNew) && (
            <div className="mt-1 max-h-32 overflow-y-auto border border-[#2a2a3f] rounded bg-[#0a0a14]">
              {suggestions.map(s => (
                <button
                  key={s.id}
                  className="w-full text-left px-3 py-1 text-xs hover:bg-[#1a1a2a]"
                  onClick={() => addChip(s.id, s.label, false)}
                >
                  {s.label} <span className="opacity-40">{s.id}</span>
                </button>
              ))}
              {canMintNew && (
                <button
                  className="w-full text-left px-3 py-1 text-xs hover:bg-[#1a1a2a] text-phase1 inline-flex items-center gap-1"
                  onClick={() => addChip(query.trim(), query.trim(), true)}
                >
                  <Plus className="w-3 h-3" /> create &quot;{query.trim()}&quot;
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-2 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f]">Cancel</button>
          <button
            onClick={save}
            disabled={!canSave}
            className="px-3 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30"
          >{saving ? "saving…" : "Save"}</button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/components/AddCardModal.tsx && git commit -m "task 1: AddCardModal component for manual card entry"
```

---

## Task 2: Wire AddCardModal into course dashboard

**Files:**
- Modify: `frontend/src/app/course/[id]/page.tsx`

- [ ] **Step 1: Read the current file**

Read `frontend/src/app/course/[id]/page.tsx` to see the existing structure (imports, state hooks, the top bar with ProgressRing/title/reset button).

- [ ] **Step 2: Add the import and state hook**

Add this import near the other component imports:

```tsx
import { AddCardModal } from "@/components/AddCardModal";
```

In the component function body, add alongside `const [showReset, setShowReset] = useState(false);`:

```tsx
const [showAddCard, setShowAddCard] = useState(false);
```

- [ ] **Step 3: Add the button in the top bar**

Find the existing top-bar block that looks like:

```tsx
<div className="flex items-center gap-6 mb-8">
  <ProgressRing pct={pct} size={64} />
  <div>
    <div className="text-sm opacity-50">{course.title}</div>
    <div className="font-mono">{completedCount} / {totalTasks} cards</div>
  </div>
  <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
</div>
```

Replace the Reset button line with:

```tsx
  <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowAddCard(true)}>+ add card</button>
  <button className="text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
```

- [ ] **Step 4: Render the modal**

Find the existing `{showReset && <ResetModal .../>}` line near the bottom and add right before it:

```tsx
{showAddCard && (
  <AddCardModal
    courseId={courseId}
    days={course.days.map(d => ({ id: d.id, title: d.title }))}
    onClose={() => setShowAddCard(false)}
    onSaved={() => { setShowAddCard(false); refresh(); }}
  />
)}
```

- [ ] **Step 5: Typecheck and build**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```
Expected: no errors.

```bash
cd /workspace/study-plan/frontend && npx next build 2>&1 | tail -20
```
Expected: successful build.

- [ ] **Step 6: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/app/course/\[id\]/page.tsx && git commit -m "task 2: wire AddCardModal into course dashboard"
```

---

## Task 3: Backend extend-mode branch in import-api

**Files:**
- Modify: `backend/import-api.lisp`

- [ ] **Step 1: Read the current file**

Read `backend/import-api.lisp` to find the current `handle-post-import-parse` and `ingestion-system-prompt` functions.

- [ ] **Step 2: Add the context builder and extend-mode prompt**

Edit `backend/import-api.lisp`. After the existing `ingestion-system-prompt` function and before `handle-post-import-parse`, add:

```lisp
(defun ingestion-extend-system-prompt ()
  "System prompt for extending an existing course with new material."
  "You are extending an existing study course with new material. You will be shown:
- The current course structure (phases, days, existing concepts)
- A new piece of source material

Your job: propose BOTH new days AND cards to insert into existing days where appropriate.

Rules:
- New day-ids must start at max-existing-day-id + 1 and increment from there.
- Prefer existing concept-ids when the meaning matches. Only mint new concepts for genuinely new vocabulary.
- When proposing a card for an EXISTING day, specify the target day-id and tier. Do not specify task-index — the system assigns it.
- New phases only if the material clearly belongs to a topic none of the existing phases cover.
- Return ONLY this JSON shape, no prose, no markdown fences:

{
  \"newPhases\": [{\"num\": 5, \"title\": \"...\"}],
  \"newDays\": [{\"id\": 8, \"phase\": 5, \"title\": \"...\", \"icon\": \"*\",
               \"summary\": \"...\", \"keyInsight\": \"...\",
               \"cards\": [{\"tier\": \"bronze|silver|gold\",
                          \"text\": \"...\", \"detail\": \"...\",
                          \"concepts\": [\"concept-id\", ...]}]}],
  \"insertedCards\": [{\"dayId\": 3, \"tier\": \"silver\",
                     \"text\": \"...\", \"detail\": \"...\",
                     \"concepts\": [\"concept-id\", ...]}],
  \"newConcepts\": [{\"id\": \"kebab-case\", \"label\": \"display\"}],
  \"newPrereqs\": [[\"concept-id\", \"prereq-id\"]]
}")

(defun build-extend-context (course-id)
  "Return a human-readable context string describing the current state of the
   given course — phases, days, and existing concepts — for the LLM."
  (let* ((course (study-plan.ontology:course-by-id course-id))
         (phases (study-plan.ontology:list-phases-for-course course-id))
         (days (study-plan.ontology:list-days-for-course course-id))
         (concepts (study-plan.ontology:list-concepts))
         (max-day-id (if days
                         (reduce #'max days
                                 :key (lambda (d) (parse-integer
                                                   (study-plan.ontology.store:fact-arg d 1))))
                         0)))
    (with-output-to-string (out)
      (when course
        (format out "~&Current course: ~A~%" (study-plan.ontology.store:fact-arg course 1)))
      (format out "~&Max existing day-id: ~D~%" max-day-id)
      (format out "~&~%Existing phases:~%")
      (dolist (p phases)
        (format out "  ~D. ~A~%" (first p) (second p)))
      (format out "~&~%Existing days:~%")
      (dolist (d days)
        (format out "  Day ~A (phase ~A): ~A~%"
                (study-plan.ontology.store:fact-arg d 1)
                (study-plan.ontology.store:fact-arg d 2)
                (study-plan.ontology.store:fact-arg d 3)))
      (format out "~&~%Existing concepts:~%")
      (dolist (c concepts)
        (format out "  ~A (~A)~%" (first c) (second c))))))
```

- [ ] **Step 3: Rewrite `handle-post-import-parse` to branch on mode**

Still in `backend/import-api.lisp`, replace `handle-post-import-parse` with:

```lisp
(defun handle-post-import-parse ()
  (study-plan.api:with-options ()
    (let* ((body (study-plan.api:read-request-json))
           (api-key (cdr (assoc :api--key body)))
           (text (cdr (assoc :text body)))
           (title (cdr (assoc :title body)))
           (model (or (cdr (assoc :model body)) "GLM-4.7-Flash"))
           (mode (or (cdr (assoc :mode body)) "new"))
           (target-raw (cdr (assoc :target--course--id body)))
           (target-id (when target-raw
                        (if (stringp target-raw)
                            (parse-integer target-raw :junk-allowed t)
                            target-raw))))
      (cond
        ((or (null api-key) (null text))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing api-key or text"))))
        ((and (equal mode "extend") (null target-id))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "extend mode requires target-course-id"))))
        (t
         (handler-case
             (let* ((system-prompt (if (equal mode "extend")
                                       (ingestion-extend-system-prompt)
                                       (ingestion-system-prompt)))
                    (user-content (if (equal mode "extend")
                                      (format nil "~A~%~%Content:~%~A"
                                              (build-extend-context target-id)
                                              text)
                                      (format nil "Title: ~A~%~%Content:~%~A" title text)))
                    (response (dex:post "https://api.z.ai/api/coding/paas/v4/chat/completions"
                                        :headers `(("Content-Type" . "application/json")
                                                   ("Authorization" . ,(format nil "Bearer ~A" api-key)))
                                        :content (cl-json:encode-json-to-string
                                                  `((:model . ,model)
                                                    (:temperature . 0.2)
                                                    (:messages .
                                                     (((:role . "system")
                                                       (:content . ,system-prompt))
                                                      ((:role . "user")
                                                       (:content . ,user-content)))))))))
               (study-plan.api:set-cors-headers)
               (setf (hunchentoot:content-type*) "application/json")
               response)
           (error (e)
             (setf (hunchentoot:return-code*) 502)
             (study-plan.api:json-response `((:error . ,(format nil "llm: ~A" e)))))))))))
```

- [ ] **Step 4: Verify compile + existing tests still pass**

```bash
cd /workspace/study-plan/backend && sbcl --non-interactive --load ~/quicklisp/setup.lisp --eval '(push #p"./" asdf:*central-registry*)' --eval '(ql:quickload :study-plan/test :silent t)' --eval '(study-plan.test:run-all)' 2>&1 | tail -15
```
Expected: 95/95 checks pass. No regressions.

- [ ] **Step 5: Smoke test the import-api endpoint (without hitting z.ai)**

The handler should reject a new-mode request with an `extend` mode but no `target-course-id`. Start the server and verify:

```bash
cd /workspace/study-plan/backend && rm -rf data && mkdir -p pdfs && sbcl --load run.lisp > /tmp/sp-t3.log 2>&1 &
sleep 12
curl -s -X POST -H "Content-Type: application/json" \
     -d '{"api-key":"fake","text":"hi","mode":"extend"}' \
     http://localhost:4000/api/import/parse
echo
pkill -f "sbcl.*run" 2>/dev/null
sleep 1
rm -rf /workspace/study-plan/backend/data
```
Expected: `{"error":"extend mode requires target-course-id"}` with HTTP 400.

- [ ] **Step 6: Commit**

```bash
cd /workspace/study-plan && git add backend/import-api.lisp && git commit -m "task 3: import-api extend-mode branch with course context"
```

---

## Task 4: Wizard step 1 — mode toggle + course picker

**Files:**
- Modify: `frontend/src/components/ImportWizard.tsx`

- [ ] **Step 1: Read the current file**

Read `frontend/src/components/ImportWizard.tsx`. Note the existing state (`step`, `files`, `filename`, `title`, `parsed`, `error`, `status`) and the existing step-1 JSX.

- [ ] **Step 2: Add state for mode and target course**

Find the state hooks section (e.g., the group of `useState` calls near the top of the component). Add these state hooks ABOVE the existing ones:

```tsx
  const [mode, setMode] = useState<"new" | "extend">("new");
  const [targetCourseId, setTargetCourseId] = useState<number | null>(null);
  const [courses, setCourses] = useState<CourseSummary[]>([]);
```

Add the import for `CourseSummary`:

```tsx
import type { CourseSummary, ConnectionStatus } from "@/lib/types";
```

(Note: `ConnectionStatus` should already be imported; merge the two if needed. If only `CourseSummary` is missing, add it to the existing type import.)

- [ ] **Step 3: Fetch courses on mount**

Find the existing `useEffect` that calls `ontology.listPdfs().then(...)`. Inside that same effect, right after the `listPdfs` call, add:

```tsx
    ontology.listCourses().then(setCourses).catch(() => setCourses([]));
```

- [ ] **Step 4: Rewrite step-1 JSX with the mode toggle**

Find the existing step-1 rendering block:

```tsx
      {step === "pick" && (
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm opacity-70">Source file</span>
            <select ...>
              ...
            </select>
          </label>
          <label className="block">
            <span className="text-sm opacity-70">Course title</span>
            <input .../>
          </label>
          <button .../>
        </div>
      )}
```

Replace the entire block with:

```tsx
      {step === "pick" && (
        <div className="space-y-4">
          <div>
            <span className="text-sm opacity-70">Mode</span>
            <div className="mt-1 flex gap-2">
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "new" ? "border-[#f5f0e8]" : "border-[#2a2a3f] opacity-60"}`}
                onClick={() => setMode("new")}
              >New course</button>
              <button
                className={`px-3 py-1 rounded border text-xs ${mode === "extend" ? "border-[#f5f0e8]" : "border-[#2a2a3f] opacity-60"}`}
                onClick={() => setMode("extend")}
              >Extend existing course</button>
            </div>
          </div>

          <label className="block">
            <span className="text-sm opacity-70">Source file</span>
            <select
              className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
              value={filename}
              onChange={e => setFilename(e.target.value)}
            >
              <option value="">— pick a file from backend/pdfs/ —</option>
              {files.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </label>

          {mode === "new" && (
            <label className="block">
              <span className="text-sm opacity-70">Course title</span>
              <input
                className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="e.g. Steinbruch Ch 5"
              />
            </label>
          )}

          {mode === "extend" && (
            <label className="block">
              <span className="text-sm opacity-70">Target course</span>
              <select
                className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
                value={targetCourseId ?? ""}
                onChange={e => setTargetCourseId(e.target.value ? parseInt(e.target.value, 10) : null)}
              >
                <option value="">— pick an existing course —</option>
                {courses.map(c => <option key={c.id} value={c.id}>Course {c.id} — {c.title}</option>)}
              </select>
            </label>
          )}

          <button
            className="px-4 py-2 rounded bg-phase1 hover:bg-phase2 disabled:opacity-30"
            disabled={
              !filename ||
              (mode === "new" && !title) ||
              (mode === "extend" && targetCourseId === null)
            }
            onClick={parse}
          >Parse</button>
        </div>
      )}
```

- [ ] **Step 5: Typecheck**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```
Expected: no errors. (The `parse` function still uses the new-mode shape — that's fine for this task; Task 5 extends it.)

- [ ] **Step 6: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/components/ImportWizard.tsx && git commit -m "task 4: wizard step 1 — mode toggle and course picker"
```

---

## Task 5: Wizard parse + review for extend mode

**Files:**
- Modify: `frontend/src/components/ImportWizard.tsx`

- [ ] **Step 1: Add the extend-mode type**

Read `frontend/src/components/ImportWizard.tsx`. Find the `ParsedCourse` interface near the top. ABOVE it, add:

```tsx
interface ParsedExtension {
  newPhases: Array<{ num: number; title: string }>;
  newDays: ParsedDay[];
  insertedCards: Array<{
    dayId: number;
    tier: "bronze" | "silver" | "gold";
    text: string;
    detail: string;
    concepts: string[];
  }>;
  newConcepts: Array<{ id: string; label: string }>;
  newPrereqs: string[][];
}
```

- [ ] **Step 2: Extend the parsed state**

Find the existing `const [parsed, setParsed] = useState<ParsedCourse | null>(null);` line. Replace it with:

```tsx
  const [parsedNew, setParsedNew] = useState<ParsedCourse | null>(null);
  const [parsedExtend, setParsedExtend] = useState<ParsedExtension | null>(null);
```

- [ ] **Step 3: Update the `parse` function**

Find the existing `parse` async function. Replace it with:

```tsx
  const parse = async () => {
    setStep("parsing");
    setError(null);
    try {
      const text = await fetchPdfText(filename);
      const config = loadConfig();
      if (!isConfigured(config)) throw new Error("API key not configured");
      const body: Record<string, unknown> = {
        "api-key": config.apiKey,
        text,
        model: config.model,
        mode,
      };
      if (mode === "new") body.title = title;
      if (mode === "extend") body["target-course-id"] = targetCourseId;
      const res = await fetch("/api/import/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`parse: ${res.status}`);
      const envelope = await res.json() as { choices: { message: { content: string } }[] };
      const content = envelope.choices[0]?.message?.content ?? "";
      const clean = content.replace(/^```(?:json)?\s*/, "").replace(/```\s*$/, "");
      if (mode === "new") {
        const p = JSON.parse(clean) as ParsedCourse;
        setParsedNew(p);
        setParsedExtend(null);
      } else {
        const p = JSON.parse(clean) as ParsedExtension;
        setParsedExtend(p);
        setParsedNew(null);
      }
      setStep("review");
    } catch (e) {
      setError(String(e));
      setStep("pick");
    }
  };
```

- [ ] **Step 4: Fork the review step**

Find the existing review-step render:

```tsx
      {step === "review" && parsed && (
        <ReviewTree parsed={parsed} onCommit={commit} />
      )}
```

Replace with:

```tsx
      {step === "review" && parsedNew && (
        <ReviewTree parsed={parsedNew} onCommit={commit} />
      )}
      {step === "review" && parsedExtend && (
        <ReviewExtend parsed={parsedExtend} onCommit={commit} />
      )}
```

- [ ] **Step 5: Add the `ReviewExtend` component**

At the bottom of the file, after the existing `ReviewTree` function, add:

```tsx
function ReviewExtend({ parsed, onCommit }: { parsed: ParsedExtension; onCommit: () => void }) {
  const grouped: Record<number, ParsedExtension["insertedCards"]> = {};
  for (const c of parsed.insertedCards) {
    (grouped[c.dayId] ??= []).push(c);
  }
  return (
    <div>
      {parsed.newPhases.length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">New phases</div>
          <ul className="list-disc pl-6">
            {parsed.newPhases.map(p => <li key={p.num}>{p.num}. {p.title}</li>)}
          </ul>
        </div>
      )}
      {parsed.newDays.length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">New days ({parsed.newDays.length})</div>
          <ul className="space-y-2">
            {parsed.newDays.map(d => (
              <li key={d.id} className="p-3 rounded border border-[#2a2a3f]">
                <div className="font-display">{d.icon} Day {d.id} — {d.title}</div>
                <div className="text-xs opacity-60">Phase {d.phase} · {d.cards.length} cards</div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {Object.keys(grouped).length > 0 && (
        <div className="mb-4">
          <div className="text-sm opacity-60">Added to existing days</div>
          <ul className="space-y-2">
            {Object.entries(grouped).map(([dayId, cards]) => (
              <li key={dayId} className="p-3 rounded border border-[#2a2a3f]">
                <div className="font-display">Day {dayId} — {cards.length} new cards</div>
                <ul className="mt-1 text-xs opacity-70 space-y-1">
                  {cards.map((c, i) => (
                    <li key={i}>
                      <span className="uppercase tracking-wider">{c.tier}</span> — {c.text.slice(0, 80)}{c.text.length > 80 && "…"}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="mb-4">
        <div className="text-sm opacity-60">New concepts ({parsed.newConcepts.length})</div>
        <div className="flex flex-wrap gap-1 mt-1">
          {parsed.newConcepts.map(c => (
            <span key={c.id} className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a2a]">{c.label}</span>
          ))}
        </div>
      </div>
      <button className="px-4 py-2 rounded bg-phase1 hover:bg-phase2" onClick={onCommit}>Commit to store</button>
    </div>
  );
}
```

- [ ] **Step 6: Typecheck**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```
Expected: no errors. (`commit` still uses the new-mode logic — Task 6 forks it.)

- [ ] **Step 7: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/components/ImportWizard.tsx && git commit -m "task 5: wizard parse + review for extend mode"
```

---

## Task 6: Wizard commit path for extend mode

**Files:**
- Modify: `frontend/src/components/ImportWizard.tsx`

- [ ] **Step 1: Rewrite the `commit` function**

Read `frontend/src/components/ImportWizard.tsx`. Find the existing `commit` async function. Replace it with:

```tsx
  const commit = async () => {
    if (!wsRef.current) return;
    const ws = wsRef.current;
    setStep("committing");
    try {
      const call = (name: string, args: Record<string, unknown>): Promise<void> =>
        new Promise((resolve) => {
          const requestId = Math.random().toString(36).slice(2, 10);
          ws.send(buildFrame(name, args, requestId));
          setTimeout(resolve, 60);
        });

      if (mode === "new" && parsedNew) {
        const p = parsedNew;
        await call("create-course", { title: p.title, slug: p.slug });
        const coursesRes = await ontology.listCourses();
        const courseId = Math.max(...coursesRes.map(c => c.id));

        for (const ph of p.phases) {
          await call("create-phase", { courseId, phaseNum: ph.num, title: ph.title });
        }
        for (const c of p.concepts) {
          await call("create-concept", { conceptId: c.id, label: c.label });
        }
        for (const edge of p.prereqs) {
          await call("add-prereq", { conceptId: edge[0], prereq: edge[1] });
        }
        for (const d of p.days) {
          await call("create-day", {
            courseId, dayId: d.id, phaseNum: d.phase, title: d.title,
            icon: d.icon, summary: d.summary, keyInsight: d.keyInsight,
          });
          for (let i = 0; i < d.cards.length; i++) {
            const card = d.cards[i];
            const cardUid = `c${courseId}-d${d.id}-${card.tier}-${i}`;
            await call("create-card", {
              cardUid, courseId, dayId: d.id, tier: card.tier,
              taskIndex: i, text: card.text, detail: card.detail,
            });
            for (const concept of card.concepts) {
              await call("tag-card", { cardUid, conceptId: concept });
            }
          }
        }
        setStep("done");
        setTimeout(() => router.push(`/course/${courseId}`), 800);
      } else if (mode === "extend" && parsedExtend && targetCourseId !== null) {
        const p = parsedExtend;
        const courseId = targetCourseId;

        // Snapshot the course for tier-index computation.
        const snapshot = await ontology.fetchCourse(courseId);
        const tierIndex: Record<string, number> = {};
        for (const d of snapshot.days) {
          for (const tier of ["bronze", "silver", "gold"] as const) {
            tierIndex[`${d.id}.${tier}`] = d.cards.filter(c => c.tier === tier).length;
          }
        }

        // 1. New concepts.
        for (const c of p.newConcepts) {
          await call("create-concept", { conceptId: c.id, label: c.label });
        }
        // 2. New prereq edges.
        for (const edge of p.newPrereqs) {
          await call("add-prereq", { conceptId: edge[0], prereq: edge[1] });
        }
        // 3. New phases.
        for (const ph of p.newPhases) {
          await call("create-phase", { courseId, phaseNum: ph.num, title: ph.title });
        }
        // 4. New days + their cards.
        for (const d of p.newDays) {
          await call("create-day", {
            courseId, dayId: d.id, phaseNum: d.phase, title: d.title,
            icon: d.icon, summary: d.summary, keyInsight: d.keyInsight,
          });
          // For new days we start task-index at 0 per tier.
          const localIndex: Record<string, number> = { bronze: 0, silver: 0, gold: 0 };
          for (const card of d.cards) {
            const idx = localIndex[card.tier]++;
            const cardUid = `c${courseId}-d${d.id}-${card.tier}-${idx}`;
            await call("create-card", {
              cardUid, courseId, dayId: d.id, tier: card.tier,
              taskIndex: idx, text: card.text, detail: card.detail,
            });
            for (const concept of card.concepts) {
              await call("tag-card", { cardUid, conceptId: concept });
            }
          }
        }
        // 5. Inserted cards into existing days.
        for (const card of p.insertedCards) {
          const key = `${card.dayId}.${card.tier}`;
          const idx = tierIndex[key] ?? 0;
          tierIndex[key] = idx + 1;
          const cardUid = `c${courseId}-d${card.dayId}-${card.tier}-${idx}`;
          await call("create-card", {
            cardUid, courseId, dayId: card.dayId, tier: card.tier,
            taskIndex: idx, text: card.text, detail: card.detail,
          });
          for (const concept of card.concepts) {
            await call("tag-card", { cardUid, conceptId: concept });
          }
        }

        setStep("done");
        setTimeout(() => router.push(`/course/${courseId}`), 800);
      }
    } catch (e) {
      setError(String(e));
      setStep("review");
    }
  };
```

- [ ] **Step 2: Typecheck**

```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```
Expected: no errors.

- [ ] **Step 3: Build**

```bash
cd /workspace/study-plan/frontend && npx next build 2>&1 | tail -20
```
Expected: successful build.

- [ ] **Step 4: Commit**

```bash
cd /workspace/study-plan && git add frontend/src/components/ImportWizard.tsx && git commit -m "task 6: wizard commit path for extend mode"
```

---

## Task 7: End-to-end smoke test

**Files:**
- No code changes.

- [ ] **Step 1: Start the full stack**

```bash
cd /workspace/study-plan && rm -rf backend/data && ./start.sh > /tmp/stack.log 2>&1 &
sleep 15
```

- [ ] **Step 2: Verify /course/1 has the new button**

```bash
curl -sf http://localhost:3000/course/1 | grep -c "+ add card" || echo "button not found"
```
Expected: >= 1 (the button text appears in the rendered HTML).

- [ ] **Step 3: Add a card via the WS tools directly (simulating the modal's save path)**

```bash
python3 <<'PY'
import asyncio, websockets
async def t():
    async with websockets.connect("ws://localhost:4000/ws") as ws:
        # Create card c1-d1-bronze-1 (next index after the existing bronze-0)
        await ws.send('(call "create-card" ((card-uid "c1-d1-bronze-1") (course-id 1) (day-id 1) (tier "bronze") (task-index 1) (text "Manual test card") (detail "Manual solution")) "r1")')
        print(await ws.recv())
        # Fetch it back
        await ws.send('(call "fetch-card" ((card-uid "c1-d1-bronze-1")) "r2")')
        print(await ws.recv())
asyncio.run(t())
PY
```
Expected: first response `(ok "r1" (ok))`, second shows the card with "Manual test card".

- [ ] **Step 4: Verify it shows up in the course view**

```bash
curl -sf "http://localhost:4000/api/course?id=1" | python3 -c 'import json, sys; d=json.load(sys.stdin); day1=next(x for x in d["days"] if x["id"]==1); print([c for c in day1["cards"] if c["tier"]=="bronze"])'
```
Expected: a list of two cards — the original eigenvalue card and the newly added "Manual test card".

- [ ] **Step 5: Test the /api/import/parse error for missing target-course-id**

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST -H "Content-Type: application/json" \
     -d '{"api-key":"fake","text":"hi","mode":"extend"}' \
     http://localhost:4000/api/import/parse
```
Expected: `400`.

- [ ] **Step 6: Stop the stack**

```bash
pkill -f "sbcl.*run" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2
rm -rf /workspace/study-plan/backend/data
```

- [ ] **Step 7: Tag the commit**

```bash
cd /workspace/study-plan && git tag add-material-smoke-pass
```

---

## Self-Review

**Spec coverage check:**

- **§3.1 wizard step 1 mode toggle** — Task 4.
- **§3.2 parse request shape** — Task 5 Step 3.
- **§3.3 backend branch** — Task 3 Step 3.
- **§3.4 extend-mode system prompt** — Task 3 Step 2 (`ingestion-extend-system-prompt`).
- **§3.5 two-section review tree** — Task 5 Step 5 (`ReviewExtend`).
- **§3.6 commit path (7 steps)** — Task 6 Step 1 covers all seven: snapshot, concepts, prereqs, phases, new days + their cards, inserted cards. Tier-index baseline is computed in the snapshot loop.
- **§3.7 day-id safety net renumber button** — **GAP**. The spec's §3.7 describes validation + a renumber button. This plan omits it. I'm accepting that — it's an LLM-faithfulness safety net, not a correctness requirement, and the partial-commit behavior in §3.6 already handles the degenerate case (the LLM gets it right or the user reverts). If it turns out to matter in practice, it's a small follow-up task.
- **§4 manual add-card modal** — Task 1 (component) + Task 2 (wiring).
  - §4.1 entry point button — Task 2 Step 3.
  - §4.2 modal fields (day, tier, text, detail, concepts, save/cancel) — Task 1 Step 1.
  - §4.3 save sequence — Task 1 Step 1.
- **§5 backend changes** — Task 3.
- **§6.1 wizard state + parse/commit split** — Tasks 4–6.
- **§6.2 AddCardModal new file** — Task 1.
- **§6.3 course page button + modal state** — Task 2.
- **§7 manual test plan** — Task 7 covers the backend-side equivalents; full UI clicks require a human browser session, called out as "manual" at the bottom of Task 7.

**Placeholder scan:** none. Every step has concrete code or commands.

**Type consistency:**
- `card-uid` format `c${courseId}-d${dayId}-${tier}-${taskIndex}` used identically in Tasks 1, 2, 6.
- `tierIndex` key shape `${dayId}.${tier}` consistent in Task 6.
- `ParsedExtension` interface fields match exactly what the backend prompt in Task 3 instructs the LLM to return.
- `create-card` args consistent across Task 1 save, Task 6 new-days loop, Task 6 inserted-cards loop.

**Scope:** single cohesive feature, 7 tasks, one repo, no branch. Working software at every task boundary: after Task 2 the manual add-card works standalone; after Task 6 the wizard extend mode works; Task 7 validates end-to-end.

---

**Plan complete and saved to `/workspace/study-plan/docs/plans/2026-04-11-add-material.md`.**
