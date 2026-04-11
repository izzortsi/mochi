# Ontology & Multi-Course — Design Spec

**Date:** 2026-04-11
**Status:** Approved for implementation planning
**Supersedes parts of:** `2026-04-10-study-plan-design.md` (§3 data models, §5 frontend routes, §7 dashboard)

## 1. Overview

Study-plan evolves from a single hardcoded 7-day plan into a multi-course system with a concept-graph ontology underneath. New material (PDFs, textbook chapters, notes) becomes new courses via a chat-driven or wizard ingestion flow. Every card in every course is tagged with concepts; concepts have prerequisite edges; the graph powers adaptive "next up" surfacing, cross-course concept pages, and a force-directed concept-map visualization.

The ontology is stored as append-only s-expressions in the lisp-agent style — reusing the `term.lisp` substrate already in the backend, without the MDL / LGG learning engine. Facts go in, facts come out; pattern discovery is explicitly out of scope and can be bolted on later without data migration.

### Goals

- **Multi-course.** The 7-day plan becomes one course among many. New courses can be created from arbitrary source material.
- **Concept graph.** Every card is tagged with concepts. Concepts form a prereq DAG. Mastery is derived from attempt history.
- **Adaptive surfacing.** A "next up" panel recommends cards whose prereqs are mastered but whose own concepts aren't yet.
- **Cross-material linking.** Clicking a concept shows every card in every course that touches it.
- **Lisp-agent feel.** The ontology is a hash-consed s-expression store with a journal, pattern-matched via the existing `term.lisp` + `match.lisp`-style reader.

### Non-goals (this spec)

- MDL compression, anti-unification, critical pairs, auto-ontology growth. The store is shaped so these can be added later without migration.
- Concept-aware problem generation (pick-from-template). Generated tasks stay free-form per card.
- De-duping across courses. Two courses can have near-identical cards; they are distinct card-uids.
- Multi-user / auth.
- Concept graph editor UI beyond drag-to-reposition in the force-directed view.

## 2. Architecture delta from v1

```
┌──────────────────────────┐                      ┌─────────────────────────────┐
│  Next.js :3000           │  REST + WS           │  SBCL :4000                 │
│                          │ ◄──────────────────► │                             │
│  Routes (NEW/CHANGED):   │                      │  Backend (NEW/CHANGED):     │
│   /  (course list)       │                      │   ontology.lisp             │
│   /course/[id]           │                      │   ontology-store.lisp       │
│   /course/[id]/day/[did] │                      │   ontology-query.lisp       │
│   /concept/[id]          │                      │   migration.lisp            │
│   /concept-map           │                      │   course-api.lisp           │
│   /import                │                      │   concept-api.lisp          │
│                          │                      │                             │
│  New components:         │                      │  New WS tools:              │
│   CourseList             │                      │   create-course             │
│   ConceptMap (d3-force)  │                      │   create-phase              │
│   NextUpPanel            │                      │   create-day                │
│   ImportWizard           │                      │   create-card               │
│                          │                      │   create-concept            │
│  New dep:                │                      │   tag-card                  │
│   d3-force@3             │                      │   add-prereq                │
│                          │                      │   list-courses              │
│                          │                      │   query-concept-cards       │
│                          │                      │   concept-mastery           │
│                          │                      │   next-up                   │
│                          │                      │                             │
│                          │                      │  Storage:                   │
│                          │                      │   ontology.journal          │
│                          │                      │   (append-only s-exprs)     │
└──────────────────────────┘                      └─────────────────────────────┘
```

The existing REST API is kept for progress mutations on cards (by card-uid) but all structural reads go through WS tools against the ontology store. cl-prevalence continues to hold transient user state (xp, streak, chat logs, generated tasks, attempts). The new ontology journal holds structural facts (courses, phases, days, cards, concepts, prereqs, tags) and append-only attempt events.

## 3. Fact schema

All facts are s-expressions. The reader uses the existing `term.lisp` `parse-sexp` / `write-sexp`. The store is hash-consed and pattern-queryable by head symbol and positional arguments.

### 3.1 Structural facts

```
(course <course-id> <title> <slug>)
  course-id:    integer, auto-incrementing from 1
  title:        string
  slug:         kebab-case identifier

(phase <course-id> <phase-num> <title>)
  phase-num:    integer within the course (1-based)

(day <course-id> <day-id> <phase-num> <title> <icon> <summary> <key-insight>)
  day-id:       integer within the course (1-based)
  icon:         single Unicode glyph
  summary:      string (1-line blurb)
  key-insight:  string (supports LaTeX)

(card <card-uid> <course-id> <day-id> <tier> <task-index> <text> <detail>)
  card-uid:     stable string "c<course>-d<day>-<tier>-<index>"
                e.g. "c1-d1-bronze-0"
  tier:         one of "bronze" | "silver" | "gold"
  task-index:   integer within the tier group (0-based)
  text:         problem statement (LaTeX OK)
  detail:       solution (LaTeX OK)
```

### 3.2 Semantic facts

```
(concept <concept-id> <label>)
  concept-id:   kebab-case string, e.g. "eigenvalue", "jordan-block"
  label:        human-readable display name

(prereq <concept-id> <prereq-concept-id>)
  Directed edge: the first concept depends on the second.
  Multiple prereqs per concept produce multiple facts.

(tag <card-uid> <concept-id>)
  Card-to-concept tag. A card may have multiple tags.
```

### 3.3 Event facts (append-only)

```
(attempted <card-uid> <verdict> <iso-timestamp>)
  verdict:      "correct" | "partial" | "wrong"
  Written by the grade-attempt tool.

(completed <card-uid> <iso-timestamp>)
  Written when a task is marked complete.
```

Events are not indexed by card — reads scan. For the expected volume (hundreds of cards, thousands of events) this is fine.

### 3.4 What's NOT stored as facts

- XP total, streak, best-streak, day-tiers, completed-tasks hash: these stay in cl-prevalence. They're derived state, not canonical.
- Chat logs: stay in cl-prevalence.
- Generated tasks: stay in cl-prevalence, but their records now reference card-uid instead of (day-id tier task-index).
- Task overrides: superseded. The overlay pattern is replaced by "create-card with the real text at ingestion time." Existing overrides get migrated into card facts (see §6).

## 4. Derivation rules

Mastery is derived by scanning the journal; no cached mastery facts.

```
concept-mastery(c) =
  let cards = { u | (tag u c) in store } in
  if |cards| = 0 -> "not-started"
  let attempted = { u in cards | exists (attempted u _ _) in store }
  let completed = { u in cards | exists (completed u _) in store }
  if |attempted| = 0 -> "not-started"
  if |completed| = |cards| -> "mastered"
  otherwise -> "learning"

Note: the "mastered" threshold is strict — every tagged card must have a
completed event. There is no fractional cutoff; intermediate states are all
"learning". This keeps the rule unambiguous and matches the UX: green means
you've done everything, amber means there's more to do.
```

`next-up(course-id)`:

```
let concepts-in-course = { c | exists (tag u c) where (card u course-id ...) in store }
let candidate-cards = { u | u is a card in course-id, not completed,
                            and for every concept c tagged on u,
                            every (prereq c p) has concept-mastery(p) = "mastered"
                            or c has no prereqs }
sort candidate-cards by (lowest tier first, then lowest day-id, then lowest task-index)
return first 5
```

Mastery and next-up computations run per-request. For courses with hundreds of cards this is sub-millisecond.

## 5. Backend modules

### 5.1 New files

```
backend/ontology-store.lisp   hash-consed s-expr store + journal read/write
backend/ontology.lisp         high-level CRUD for courses/phases/days/cards/concepts
backend/ontology-query.lisp   mastery derivation, next-up, concept scan
backend/migration.lisp        one-shot 7-day -> ontology migration
backend/course-api.lisp       REST handlers for /api/courses and /api/course/...
backend/concept-api.lisp      REST handlers for /api/concept/...
```

### 5.2 Modified files

```
backend/package.lisp     new packages: study-plan.ontology, study-plan.ontology.store,
                         study-plan.ontology.query, study-plan.migration
backend/study-plan.asd   add new components in correct load order
backend/protocol.lisp    new WS tools (see §5.4)
backend/api.lisp         routes now scoped by course-id; progress mutations take card-uid
backend/storage.lisp     tx-complete-task, tx-uncomplete-task take card-uid;
                         tx-append-attempt takes card-uid; generated-task.day-id
                         replaced by generated-task.card-uid;
                         tx-overlay-task REMOVED (ingestion creates cards directly)
backend/models.lisp      UserProgress.completed-tasks keyed by card-uid;
                         day-tiers keyed by (course-id . day-id) pair
backend/run.lisp         init-storage now calls migration on first run
```

### 5.3 Store lifecycle

At startup, `init-ontology` is called after `init-storage`:

1. Ensure `backend/data/ontology.journal` exists (create if missing).
2. Read the journal line by line; for each line, `parse-sexp` and insert into an in-memory hash-consed store.
3. If the store is empty after replay AND `seed-data.lisp` has content, run migration (§6).

`append-fact(fact)` writes to the journal AND inserts into the in-memory store. All ontology mutations go through this function.

The store is an in-memory append-only list. Queries are linear scans filtered by head symbol. Hash-consing via an `equal` hash table lookup at insert time so identical facts collapse.

### 5.4 New WS tools

| Tool | Args (alist shape) | Returns |
|---|---|---|
| `create-course` | `((title "...") (slug "..."))` | `(course <id>)` |
| `create-phase` | `((course-id n) (phase-num n) (title "..."))` | `(ok)` |
| `create-day` | `((course-id n) (day-id n) (phase-num n) (title "...") (icon "x") (summary "...") (key-insight "..."))` | `(ok)` |
| `create-card` | `((card-uid "...") (course-id n) (day-id n) (tier "...") (task-index n) (text "...") (detail "..."))` | `(ok)` |
| `create-concept` | `((concept-id "...") (label "..."))` | `(ok)` |
| `tag-card` | `((card-uid "...") (concept-id "..."))` | `(ok)` |
| `add-prereq` | `((concept-id "...") (prereq "..."))` | `(ok)` |
| `list-courses` | `()` | `(courses (course <id> "title" "slug") ...)` |
| `list-concepts` | `()` | `(concepts (concept "id" "label") ...)` |
| `query-concept-cards` | `((concept-id "..."))` | `(cards (card-uid ...) ...)` |
| `concept-mastery` | `((concept-id "..."))` | `(mastery not-started\|learning\|mastered)` |
| `next-up` | `((course-id n))` | `(next-up (card-uid ...) ...)` up to 5 |

Existing tools keep working, with these changes:
- `mark-task-complete` takes `card-uid` (not day-id/tier/task-index).
- `grade-attempt` takes `card-uid`.
- `overlay-task` is removed — ingestion creates cards directly with final text.
- `append-generated-task` takes `card-uid` as `source-card-uid`.

### 5.5 New REST endpoints

| Method + path | Purpose |
|---|---|
| `GET /api/courses` | list all courses with phase/day counts and completion % |
| `GET /api/course?id=N` | full course (phases, days, cards, concept tags per card) |
| `POST /api/progress/complete` | body `{"card-uid": "..."}` |
| `POST /api/progress/uncomplete` | body `{"card-uid": "..."}` |
| `GET /api/concept?id=...` | cards tagged with this concept, grouped by course; mastery state |
| `GET /api/concept-map?course-id=N` | nodes + edges + card-counts + mastery for the concept graph; returns `{"nodes":[{id,label,mastery,size}], "edges":[{from,to}]}` |
| `GET /api/next-up?course-id=N` | list of up-to-5 recommended card-uids with parent day context |
| `GET /api/pdfs/<filename>` | static passthrough to `backend/pdfs/<filename>` (binary or text); used by the chat ingestion path to load source files into the browser for `pdf.js` parsing |
| `GET /api/pdfs` | list filenames available under `backend/pdfs/` (for the wizard's file picker dropdown) |
| `POST /api/import/parse` | body `{"api-key": "...", "filename": "...", "model": "GLM-4.7-Flash", "title": "proposed title"}`; the server reads the named PDF from `backend/pdfs/`, extracts text via `pdf.js` on the frontend side BEFORE this call (so the body actually contains `{"api-key", "text", "title", "model"}`), makes a single z.ai chat-completion call with the ingestion system prompt, returns the parsed course structure as JSON. The API key is single-use and not persisted. This is the only server-side LLM call in the system. |

CORS unchanged. hyphenated-key convention unchanged.

## 6. Migration from v1

A one-shot function `study-plan.migration:run-initial-migration` is called by `init-ontology` when the ontology journal is empty and `seed-data.lisp` is non-empty. Steps:

1. Emit `(course 1 "Linear Algebra & ODE Review" "la-ode-review")`.
2. Walk `*study-days*`. For each unique phase-title, emit a `phase` fact (phase-num is inferred from order of first appearance).
3. For each `StudyDay`, emit a `day` fact with the same id, phase-num, title, icon, summary, key-insight.
4. For each `TaskItem` under each `TaskGroup`, emit a `card` fact with `card-uid = "c1-d<day>-<tier>-<index>"` and the existing text/detail verbatim.
5. Emit concept facts from a hand-written dictionary in `migration.lisp`:
   ```
   (defparameter *v1-concept-dictionary*
     '((eigenvalue "eigenvalue")
       (eigenvector "eigenvector")
       (diagonalizability "diagonalizability")
       (characteristic-polynomial "characteristic polynomial")
       (algebraic-multiplicity "algebraic multiplicity")
       (geometric-multiplicity "geometric multiplicity")
       (jordan-block "Jordan block")
       (similarity "similar matrices")
       (change-of-basis "change of basis")
       (invertible-operator "invertible linear operator")
       (determinant "determinant")
       (kernel "kernel")
       (orthogonal-operator "orthogonal operator")
       (rotation "rotation")
       (reflection "reflection")
       (orthogonal-matrix "orthogonal matrix")
       (symmetric-operator "symmetric operator")
       (spectral-theorem "spectral theorem")
       (inner-product "inner product")
       (chain-rule "chain rule")
       (substitution-integration "integration by substitution")
       (jacobi-formula "Jacobi's formula for determinant derivative")))
   ```
6. Emit `prereq` facts from a hand-written prerequisites list in `migration.lisp`:
   ```
   (defparameter *v1-prereqs*
     '((diagonalizability eigenvalue)
       (diagonalizability eigenvector)
       (diagonalizability algebraic-multiplicity)
       (diagonalizability geometric-multiplicity)
       (jordan-block diagonalizability)
       (similarity change-of-basis)
       (orthogonal-matrix orthogonal-operator)
       (rotation orthogonal-operator)
       (reflection orthogonal-operator)
       (spectral-theorem symmetric-operator)
       (symmetric-operator inner-product)
       (orthogonal-operator inner-product)
       (jacobi-formula chain-rule)))
   ```
7. Emit `tag` facts from a hand-written tag map in `migration.lisp` mapping card-uid → concept list:
   ```
   (defparameter *v1-tags*
     '(("c1-d1-bronze-0" eigenvalue characteristic-polynomial)
       ("c1-d1-silver-0" diagonalizability algebraic-multiplicity geometric-multiplicity)
       ("c1-d1-gold-0"   jordan-block diagonalizability)
       ("c1-d2-bronze-0" eigenvector)
       ("c1-d2-silver-0" change-of-basis)
       ("c1-d2-gold-0"   diagonalizability eigenvector)
       ("c1-d3-bronze-0" similarity change-of-basis)
       ("c1-d3-silver-0" similarity determinant)
       ("c1-d3-gold-0"   similarity diagonalizability)
       ("c1-d4-bronze-0" invertible-operator determinant kernel)
       ("c1-d4-silver-0" invertible-operator)
       ("c1-d4-gold-0"   invertible-operator determinant)
       ("c1-d5-bronze-0" rotation orthogonal-matrix)
       ("c1-d5-silver-0" orthogonal-operator rotation reflection)
       ("c1-d5-gold-0"   orthogonal-matrix)
       ("c1-d6-bronze-0" symmetric-operator)
       ("c1-d6-silver-0" symmetric-operator inner-product)
       ("c1-d6-gold-0"   symmetric-operator spectral-theorem)
       ("c1-d7-bronze-0" chain-rule)
       ("c1-d7-silver-0" chain-rule substitution-integration)
       ("c1-d7-gold-0"   jacobi-formula chain-rule)))
   ```
8. Replay existing cl-prevalence `UserProgress.completed-tasks`: for each key `"<day>-<tier>-<idx>"` in the old v1 format, emit `(completed "c1-d<day>-<tier>-<idx>" <timestamp-now>)`. (v1 keys did not include course-id; migration assumes everything maps to course 1.)
9. Inside a single cl-prevalence transaction (`tx-rekey-for-migration`), rewrite the `UserProgress.completed-tasks` and `UserProgress.day-tiers` hash keys to include the `c1-` prefix so future lookups by card-uid line up. This tx is one-shot; once migration runs, all new state uses card-uid keys natively.

Migration is idempotent-unsafe (running twice would duplicate facts), so it only runs when the ontology journal is empty. A safety check at the top: `(when (zerop (store-size)) ...)`.

After migration, `seed-data.lisp` is kept in the repo for reference but is no longer read at runtime. `api.lisp` / `protocol.lisp` read from the ontology store exclusively.

## 7. Ingestion

Two paths, one set of tools.

### 7.1 Chat path

1. User drops PDF in `backend/pdfs/` (or any supported format — .md, .txt).
2. User opens tutor and says `make a course from steinbruch-ch5.pdf`.
3. Frontend fetches the file from `/api/pdfs/<name>` (see §5.5), runs `pdf.js` client-side to extract text, and passes the text into the LLM prompt. Binary PDF bytes never leave the browser.
4. LLM proposes course structure turn by turn:
   - Turn 1: title + slug suggestion, asks for confirmation.
   - Turn 2: phase list.
   - Turn 3–N: for each day, proposes cards per tier with full text and worked solutions.
   - Tail: for each created card, proposes concept tags. New concepts get minted via `create-concept`; prereq edges get proposed from the outline structure.
5. User confirms or edits each proposal in chat. On confirm the LLM emits a `<tool>` block that the frontend dispatches.
6. Final step: LLM lists the created concept-tag pairs and asks "any prereq edges I'm missing?" User can free-form reply, LLM converts to `add-prereq` calls.

No special case in the WS dispatcher — the same tools are used as the wizard path.

### 7.2 Wizard UI

New route `/import`. Five steps:

1. **File + title.** Select a file from `backend/pdfs/` (dropdown populated from the static route), enter course title. "Parse" button.
2. **Parse preview.** Frontend calls a one-shot endpoint `POST /api/import/parse` which runs a single LLM call on the backend, returning the full proposed course structure as JSON (phases, days, cards with text/detail/suggested-tags). Loading state.
3. **Edit tree.** A tree view of the proposed structure. Each node is editable inline. Cards can be dropped. Concept tags appear as chips per card; user can remove or add.
4. **Review + commit.** Summary page (N phases, N days, N cards, N concepts). "Commit" button fires the WS tools in sequence.
5. **Done.** Link to the new course.

Same end state as chat path. The `/api/import/parse` endpoint is the only backend-side LLM call — it proxies to z.ai using the same API key stored in frontend localStorage but passed via an Authorization header on this specific request. (Yes — this is a slight deviation from "LLM is browser-only". The wizard needs server-side LLM for the one-shot parse so the UI can show a structured result. The chat path keeps LLM in the browser.)

**Decision note:** `/api/import/parse` receives the API key in its request body from the frontend (it's not read from the filesystem). The key is used once per request and not persisted on the server.

### 7.3 PDF reading

For the chat path, the LLM needs the PDF text. Two options:
- Frontend uses `pdf.js` to extract text client-side, then includes the text in the LLM prompt.
- Backend exposes `GET /api/pdfs/<name>/text` that returns extracted plain text (using SBCL-side PDF parsing — e.g., shelling out to `pdftotext` if available, else a minimal CL parser or no fallback).

Decision: frontend `pdf.js`. Same approach the LLM uses for any other file — keeps the backend dep-free of PDF parsing. Adds `pdfjs-dist` to frontend deps.

## 8. Frontend routes and components

### 8.1 Route tree

```
/                          course list                    (NEW — replaces old dashboard)
/course/[id]               course dashboard               (was /)
/course/[id]/day/[dayId]   day detail                     (was /day/[id])
/concept/[id]              concept page                   (NEW)
/concept-map               global concept map             (NEW)
/import                    import wizard                  (NEW)
```

### 8.2 New components

```
CourseList.tsx           dashboard card grid with per-course progress rings
CourseDashboard.tsx      refactored from the old page.tsx — scoped to one course
ConceptPage.tsx          list cards tagged with a concept
ConceptMap.tsx           force-directed SVG graph with d3-force
ConceptMapPanel.tsx      collapsible wrapper on course dashboard
NextUpPanel.tsx          top-5 cards recommended by the next-up tool
ImportWizard.tsx         multi-step wizard, reuses the five steps from §7.2
```

### 8.3 Force-directed concept map

`ConceptMap.tsx`:

- Props: `nodes: Node[]`, `edges: Edge[]`, `onNodeClick: (id) => void`.
- Uses `d3-force` directly (not `react-force-graph`, to avoid the 300KB+ overhead). Only the `forceSimulation`, `forceLink`, `forceManyBody`, `forceCenter` modules.
- Simulation runs in a `useEffect`, ticks drive a React state update that triggers SVG re-render. Alpha cooldown stops the animation after ~2s.
- Layout cache: once alpha < 0.01, positions saved to `localStorage` under key `study-plan.concept-map.<course-id>`. On next mount, initial positions loaded from cache so the map doesn't re-lay out.
- Drag-to-reposition: standard d3 drag handlers. Dragged node becomes fixed (`fx`, `fy` set) until released (or permanently if user pins — for now, release-only).
- Pan and zoom: wrapping SVG `<g>` with transform updated on mouse drag and wheel events. No pinch support on touchscreens in v1.
- Node rendering: `<circle>` sized by `card-count`, filled by mastery color, with a `<text>` label centered below. Hover shows a tooltip with full concept label and card count.
- Edge rendering: `<line>` from parent to child, arrow markers via an SVG `<defs><marker>` block.

Data flow: `ConceptMap` fetches from `/api/concept-map?course-id=N` on mount. Returns `{nodes: [{id, label, mastery, cardCount}], edges: [{from, to}]}`. The backend handler `handle-get-concept-map` walks the ontology store, collects concepts touched by this course (via `(tag card-uid concept-id)` where `(card card-uid course-id ...)`), filters edges to only those between in-course concepts, and returns the graph.

### 8.4 Dashboard component changes

Old `/` dashboard becomes `/course/[id]`. Header XP/streak are global (sum across courses). New `/` is a `CourseList` showing cards for each course with:
- Course title
- Phase count badge
- `ProgressRing` with completion % for that course
- "Latest tier" icon (highest tier achieved on any day of that course)
- Click navigates to `/course/[id]`

The top-right "+ Import course" button on `/` opens the wizard.

On `/course/[id]`, below the existing phase sections, two new panels:
- `NextUpPanel` — top-5 recommended cards with course-context labels and "go" buttons.
- `ConceptMapPanel` — collapsible, default collapsed, renders `ConceptMap` when expanded.

### 8.5 Tutor chat

`StudyChat.tsx` unchanged structurally but adds awareness of course context — it's now scoped to `course-id`/`card-uid` instead of `day-id`. The system prompt gets a short additional section explaining the ingestion tools.

## 9. Gamification under multi-course

- **XP per card.** Unchanged: bronze 10, silver 25, gold 50, × streak multiplier. Awarded on `completed` event.
- **Streak.** Unchanged: consecutive calendar days with at least one gold-tier day completion in **any** course.
- **Day tier.** Computed per (course-id, day-id) — all cards in a tier group must be complete.
- **Best streak.** Global.
- **Generated cards.** Now attach to a source card-uid (not day-id). Half the normal tier XP, same as v1.

Generated cards are represented in the ontology as:

```
(generated <card-uid> <source-card-uid> <timestamp>)
```

They also get `card` facts so they're indistinguishable from user-defined cards for query purposes, except the `generated` fact marks them as derived.

## 10. Testing

New FiveAM test files:

- `test/ontology-store-test.lisp` — append-fact, replay-from-journal, duplicate-fact collapse, pattern queries by head.
- `test/ontology-query-test.lisp` — concept-mastery boundary cases (no cards, all wrong, partial, all correct); next-up with prereq chains; cyclic prereq protection (emits a warning, excludes the cycle).
- `test/migration-test.lisp` — migrate a small fixture with 2 days, verify all expected facts are emitted, verify no facts are emitted on re-run.

Frontend tests remain out of scope. Manual UI walkthrough after the backend tests pass.

## 11. Rollout

The whole thing ships as one sequence. No feature flag, no gradual rollout. Run the migration once on first startup of the new version; if it fails, the old `seed-data.lisp` path is still there as a fallback for emergencies (removed in a later cleanup commit).

## 12. Open risks

- **Migration re-runs.** The journal-empty check guards against duplication, but if a dev wipes `ontology.journal` without also wiping `backend/data/` they'd get half-state. Solution: migration clears cl-prevalence's root progress too when it runs.
- **d3-force performance on big graphs.** At ~200 concepts the force sim should settle in <2s. Above ~500 it gets slow. Not a near-term concern.
- **Concept-tag drift between chat and wizard.** Both paths go through `create-concept` / `tag-card`, so the store is authoritative. If the LLM proposes slightly different labels for the same intent ("eigenvalues" vs "eigenvalue"), they become distinct concept nodes. Mitigation: the system prompt for ingestion includes a "check list-concepts first and prefer existing ids" directive; `list-concepts` is the first WS call the LLM should make when starting an ingestion session.
- **Pattern scan performance.** Linear scan of the store per query is O(n). At 10K facts this is still sub-millisecond. Add an index structure (hash-table keyed by head symbol) if it ever becomes visible in profiles.
