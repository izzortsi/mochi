# Add Material to Existing Courses — Design Spec

**Date:** 2026-04-11
**Status:** Approved for implementation planning
**Builds on:** `2026-04-11-ontology-design.md` (multi-course, ontology store, import wizard)

## 1. Overview

The existing import wizard creates new courses from PDFs. Users now need to bolt new material onto existing courses without spinning up a fresh course. This spec adds two complementary paths:

- **Flow A — Extend mode in the import wizard.** The wizard grows a mode toggle: "new course" or "extend existing course". In extend mode, the LLM receives the target course's current structure and proposes new phases, new days, AND cards to insert into existing days.
- **Flow C — Manual add-card modal.** On each course dashboard, a "+ add card" button opens a small form (day, tier, text, detail, concepts) for one-off additions without LLM involvement.

Both flows write through the existing WS tools (`create-phase`, `create-day`, `create-card`, `create-concept`, `tag-card`, `add-prereq`) — no new data model, no new persistence, no new REST endpoints.

### Goals

- Make existing courses grow-able. A user with a new PDF chapter should be able to add it to the existing course instead of being forced to create a parallel one.
- Manual escape hatch. Quick one-off cards without PDF ingestion.
- No duplication. The manual composer and the wizard's commit path share the same underlying WS calls.

### Non-goals

- Edit existing card text (add-only; editing is a later feature).
- Delete cards or days.
- Reorder cards within a tier.
- Move cards between days or courses.
- LLM-driven add-card from the tutor chat (tutor stays focused on grading/hints; structural mutations go through the wizard or modal).
- Conflict detection on duplicate concepts or near-duplicate card text.

## 2. Architecture delta from current state

No new modules. Three files change on the frontend; one on the backend:

```
backend/import-api.lisp          new "extend" branch in handle-post-import-parse
frontend/src/components/ImportWizard.tsx   mode toggle + extend-mode parsed shape + commit path
frontend/src/components/AddCardModal.tsx   NEW — manual composer
frontend/src/app/course/[id]/page.tsx      "+ add card" button + modal state
```

The ontology store, WS tool dispatch, and REST API are unchanged.

## 3. Flow A — Extend mode

### 3.1 Wizard step 1 changes

The first step of `ImportWizard.tsx` currently shows: file picker + course title input. It grows:

- A mode toggle at the top: `◉ New course` / `○ Extend existing course`
- When "new course" is selected: behavior unchanged (title + slug + file).
- When "extend existing course" is selected: the title input is hidden and replaced with a "Target course" dropdown populated from `ontology.listCourses()`. The file picker stays.

The Parse button is disabled until (mode == new && title && file) OR (mode == extend && target-course-id && file).

### 3.2 Parse request

The `POST /api/import/parse` body gains two optional fields:

```json
{
  "api-key": "...",
  "text": "extracted PDF text",
  "title": "only when mode=new",
  "model": "GLM-4.7-Flash",
  "mode": "new" | "extend",
  "target-course-id": 1
}
```

### 3.3 Backend branch in `import-api.lisp`

`handle-post-import-parse` branches on `mode`:

- **new** (default, current behavior): same as today. System prompt tells the LLM to emit the full v1 JSON shape (title, slug, phases, days, cards, concepts, prereqs).
- **extend**: look up the target course in the ontology store; build a context block containing:
  - Course title
  - List of existing phases as `(num, title)`
  - List of existing days as `(id, phase, title)`
  - List of existing concepts as `(id, label)`
  - Max day-id currently in the course
  - For each existing day, a breakdown of tier groups and how many cards each has
  - Use a different system prompt (§3.4).

The context block is embedded verbatim in the user message to the LLM, following the PDF text.

### 3.4 Extend-mode system prompt

```
You are extending an existing study course with new material. You will be shown:
- The current course structure (phases, days, existing concepts)
- A new piece of source material (extracted PDF text)

Your job: propose BOTH new days AND cards to insert into existing days where appropriate.

Rules:
- New day-ids must start at max-existing-day-id + 1 and increment from there.
- Prefer existing concept-ids when the meaning matches. Only mint new concepts for genuinely new vocabulary.
- When proposing a card for an EXISTING day, specify the target day-id and tier. Do not specify task-index — the system assigns it.
- New phases only if the material clearly belongs to a topic none of the existing phases cover.
- Return ONLY this JSON shape, no prose, no markdown fences:

{
  "newPhases": [{"num": 5, "title": "..."}],
  "newDays": [{"id": 8, "phase": 5, "title": "...", "icon": "*",
               "summary": "...", "keyInsight": "...",
               "cards": [{"tier": "bronze|silver|gold",
                          "text": "...", "detail": "...",
                          "concepts": ["concept-id", ...]}]}],
  "insertedCards": [{"dayId": 3, "tier": "silver",
                     "text": "...", "detail": "...",
                     "concepts": ["concept-id", ...]}],
  "newConcepts": [{"id": "kebab-case", "label": "display"}],
  "newPrereqs": [["concept-id", "prereq-id"]]
}
```

### 3.5 Wizard review step

In extend mode, `ReviewTree` renders two sections instead of the single course summary:

- **New days** — list of proposed new days with icon, id, phase, title, card count.
- **Added to existing days** — grouped by target day-id, showing each inserted card's tier and a truncated text preview.

Plus the usual concepts and prereqs summaries. A "Commit" button at the bottom.

### 3.6 Commit path

The wizard is already WebSocket-attached. New commit sequence for extend mode:

1. **Snapshot the course.** Before any writes, call `ontology.fetchCourse(targetCourseId)` to get the current days + cards. Build an in-memory `tierIndexAtTime` table: for each `(dayId, tier)`, count existing cards. This is the baseline for task-index assignment.

2. **Create concepts.** For each `newConcepts` entry, dispatch `create-concept`. These must happen before any `tag-card`.

3. **Add prereqs.** For each `newPrereqs` edge, dispatch `add-prereq`.

4. **Create phases.** For each `newPhases` entry, dispatch `create-phase` with `course-id = targetCourseId`.

5. **Create new days + their cards.** For each `newDays` entry:
   - Dispatch `create-day` with `course-id = targetCourseId`, `day-id = entry.id`, `phase-num`, title, icon, summary, key-insight.
   - For each card in `entry.cards`, compute its task-index as the running count of cards already committed in `(dayId, tier)` within THIS batch (start at 0 for new days). Build `card-uid = c<courseId>-d<dayId>-<tier>-<taskIndex>`. Dispatch `create-card`. Then dispatch `tag-card` for each concept in the card's concept list.

6. **Insert cards into existing days.** For each `insertedCards` entry:
   - Look up the next free task-index from `tierIndexAtTime[entry.dayId][entry.tier]`, then increment the counter.
   - Build card-uid and dispatch `create-card` + per-concept `tag-card`.

7. **Done.** Redirect to `/course/${targetCourseId}`.

If any step throws, the wizard sets an error and stays on the review page. No rollback — partial commits are acceptable because the ontology store is append-only; the user can retry, and duplicate facts collapse via hash-consing (so re-running the same phase/day/concept creations is safe; re-running a card create with the same card-uid is the only risk, since card-uids embed course/day/tier/index and a partial batch would skip the next index on retry — acceptable for v1).

### 3.7 Open question resolved

**How does the wizard know the LLM honored `day-id >= max+1`?** Frontend validates after parse: if any `newDays[].id` is `≤ maxExistingDayId`, the review page shows a warning and disables Commit until the user manually renumbers via an inline "renumber" button that rewrites all new day-ids to `max+1, max+2, ...`. The LLM can still get it right the first time; this is a safety net.

## 4. Flow C — Manual add-card modal

### 4.1 Entry point

On `/course/[id]/page.tsx`, add a new button in the top bar (next to the existing Reset button):

```
[progress ring]  [course title]  [+ add card]  [reset]
```

The button opens `<AddCardModal courseId={courseId} days={course.days} onClose={...} onSaved={refresh} />`.

The modal internally fetches the full concept list via `ontology.fetchConceptMapAll()` on mount so it can show labels in the multi-select chip list. `Course.days[].cards[].concepts` only gives tagged ids (not labels), so this extra fetch is needed.

### 4.2 Modal fields

```
┌─────────────────────────────┐
│ Add card                 [×]│
│                             │
│ Day:     [Day 3 — ...  ▼]   │
│ Tier:    ◉ bronze ○ silver ○ gold │
│                             │
│ Problem text (LaTeX):       │
│ [textarea .............]    │
│ Preview: <MathText/>        │
│                             │
│ Solution (LaTeX):           │
│ [textarea .............]    │
│ Preview: <MathText/>        │
│                             │
│ Concepts:                   │
│ [chip] [chip] [chip]        │
│ [+ search or add new...]    │
│                             │
│              [cancel] [save]│
└─────────────────────────────┘
```

- **Day** — dropdown of the course's existing days (not a free-text input; you can only add to days that exist).
- **Tier** — radio group.
- **Text / detail** — textareas, each with a live `MathText` preview underneath.
- **Concepts** — a chip list. Click an empty chip area to open a search box that filters existing concepts by substring. Selecting one adds it as a chip. A "+ new concept" affordance at the bottom of the search dropdown lets you type a label; on save, that concept is minted via `create-concept` and tagged.
- **Save** — disabled until day is picked, tier is picked, text is non-empty, and detail is non-empty. Concepts are optional (you can save a card with zero tags).
- **Cancel** / close — dismiss without changes.

### 4.3 Save sequence

On save click:

1. Fetch the course fresh (not strictly required but cheaper than tracking state — avoids race conditions if two tabs are open).
2. Compute next task-index = count of cards in `(dayId, tier)` in the fetched course.
3. Build card-uid = `c${courseId}-d${dayId}-${tier}-${taskIndex}`.
4. For each "new" concept in the chip list (minted via the "+ new concept" flow), dispatch `create-concept`.
5. Dispatch `create-card` with the computed uid and all fields.
6. Dispatch `tag-card` for each concept in the final chip list.
7. Close modal, call `onSaved()` (which triggers a course refresh on the dashboard).

If any step fails, surface the error inside the modal and keep it open.

## 5. Backend changes

### 5.1 `import-api.lisp` — extend branch

Changes:

- Read `mode` and `target-course-id` from request body.
- If mode is `"extend"`, call a new helper `build-extend-context(target-course-id)` that walks the ontology store for the course/phase/day/card/concept facts and returns a formatted string.
- If mode is `"new"` (or missing), keep current behavior.
- Pass a different system prompt to z.ai when in extend mode (§3.4).

Pseudo-code:

```lisp
(defun build-extend-context (course-id)
  (let ((course (study-plan.ontology:course-by-id course-id))
        (phases (study-plan.ontology:list-phases-for-course course-id))
        (days (study-plan.ontology:list-days-for-course course-id))
        (concepts (study-plan.ontology:list-concepts))
        (max-day-id ...))
    (format nil "Current course: ~A~%Phases:~%~{  ~A~%~}~%Days:~%~{  ~A~%~}~%Existing concepts:~%~{  ~A~%~}~%Max day-id: ~D~%"
            (fact-arg course 1)
            phases days concepts max-day-id)))

(defun handle-post-import-parse ()
  (with-options ()
    (let* ((body (read-request-json))
           (mode (or (cdr (assoc :mode body)) "new"))
           (target-id (cdr (assoc :target--course--id body)))
           (text (cdr (assoc :text body)))
           ...)
      (cond
        ((equal mode "extend")
         (let ((ctx (build-extend-context (parse-integer target-id))))
           (call-llm extend-system-prompt (concat text ctx) ...)))
        (t
         (call-llm new-system-prompt text ...))))))
```

No new tests for this — the backend is a thin LLM proxy, the interesting logic is in the frontend.

## 6. Frontend changes

### 6.1 `ImportWizard.tsx` — mode toggle + extend commit

State additions:

```ts
type Mode = "new" | "extend";
const [mode, setMode] = useState<Mode>("new");
const [targetCourseId, setTargetCourseId] = useState<number | null>(null);
const [courses, setCourses] = useState<CourseSummary[]>([]);
```

On mount, also call `ontology.listCourses().then(setCourses)` so the extend dropdown has options.

Step 1 UI: radio buttons for mode, then branches between title input (new) and course dropdown (extend).

Parse call: passes `mode` and `target-course-id` in the body when extending.

Response parse: branches on shape. New mode uses the existing `ParsedCourse` shape. Extend mode uses a new `ParsedExtension` shape:

```ts
interface ParsedExtension {
  newPhases: Array<{ num: number; title: string }>;
  newDays: ParsedDay[];  // same shape as before
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

Review tree: two branches for the two shapes.

Commit function: two branches as well — the new-course path stays as it is, the extend path follows the sequence in §3.6.

### 6.2 `AddCardModal.tsx` — new file

Props:

```ts
interface Props {
  courseId: number;
  days: Array<{ id: number; title: string }>;
  onClose: () => void;
  onSaved: () => void;
}
```

Internal state: selected day-id, selected tier, text, detail, chip list (each chip is `{id: string, label: string, isNew: boolean}`), concept-search query, concept-search results.

On mount, fetch `ontology.fetchConceptMapAll()` once to populate the concept suggestion pool.

Save sequence matches §4.3. Uses the same inline frame builder as `ImportWizard.tsx` (kebab + quote) to bypass `tools.ts` schemas for the small number of WS calls needed.

### 6.3 `course/[id]/page.tsx` — button + modal state

Add a state hook `const [showAddCard, setShowAddCard] = useState(false);` next to `showReset`. Add the button in the top bar:

```tsx
<button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowAddCard(true)}>+ add card</button>
<button className="text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
```

Render the modal at the bottom next to the reset modal:

```tsx
{showAddCard && course && (
  <AddCardModal
    courseId={courseId}
    days={course.days.map(d => ({ id: d.id, title: d.title }))}
    onClose={() => setShowAddCard(false)}
    onSaved={() => { setShowAddCard(false); refresh(); }}
  />
)}
```

## 7. Testing

No backend test changes — all new logic is either UI or LLM-proxy passthrough.

**Manual test plan:**

1. Start the stack. Open `/course/1`.
2. Click "+ add card". Pick Day 3, Tier silver, enter a LaTeX problem and solution, select one existing concept, save. Verify the card appears on `/course/1/day/3` silver section. Verify the concept chip renders on the new card. Verify the course dashboard's completion fraction shows `0/22` (total increased by 1).
3. Click "+ add card" again. Pick Day 1, Tier bronze, enter text, add a "+ new concept" called `test-concept` with label `Test Concept`, save. Navigate to `/concept/test-concept` and verify the card appears. Verify the concept chip shows on the new card in Day 1.
4. Drop a PDF into `backend/pdfs/`. Open `/import`. Choose "Extend existing course", select Course 1, select the PDF, parse. In the review UI, verify both "New days" and "Added to existing days" sections show proposals. Click Commit. Navigate to `/course/1` and verify the new days appear and the targeted existing days have new cards.
5. Reset progress, verify nothing regressed on existing cards and their concept tags.

## 8. Risks and mitigations

- **LLM returns wrong day-ids.** Covered in §3.7 with the validation + renumber safety net.
- **Concept id collisions.** If the LLM proposes `newConcepts` that already exist (same id), `create-concept` is a no-op via hash-consing. Labels won't be updated, which is fine — existing labels win.
- **Multi-tab write race.** Two tabs committing to the same course concurrently could produce card-uid collisions on existing-day inserts. Mitigation: §4.3 always fetches fresh before computing indices, and if collision happens `create-card` still produces a fact (it would just overwrite via hash-cons deduplication). Not a correctness issue for v1 — single-user app.
- **Wizard partial commit on failure.** Already an acceptable limitation in the existing wizard path. Not worse here.
- **Modal concept search is slow with many concepts.** Not an issue at current scale (22 concepts); if it becomes one, add debouncing.

## 9. Rollout

Single ship. No feature flag, no migration. Existing data is untouched. Committing all of it at once is safe because:

- Backend change is additive — old body shapes (without `mode`) still parse as `mode=new`.
- Frontend changes introduce a new UI affordance that can be left unused without regression.

## 10. Future work (not this spec)

- Edit card text and detail (in-place edit on the day page, gated behind a small pencil icon).
- Delete cards.
- LLM-driven "add card" from the tutor chat ("the user just proved they know X; add a reinforcement card").
- Tag-based concept suggestions in the modal — "based on this problem text, you might want to tag: eigenvalue, characteristic-polynomial" via a small LLM call.
- Conflict detection: warn when a new card's text is near-duplicate of an existing card in the same day/tier.
