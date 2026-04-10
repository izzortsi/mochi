# Study Plan App — Design Spec

**Date:** 2026-04-10
**Status:** Approved for implementation planning
**Location:** `/workspace/study-plan/`

## 1. Overview

Full-stack single-user study tracker for a 7-day linear algebra / ODE review plan derived from two source documents:

- **TESTE de autoavaliação** (UFRJ ODE course self-assessment)
- **Operadores Lineares** (Steinbruch & Winterle, Ch. 4)

The user works through daily problem sets organized in three cumulative tiers (Bronze → Silver → Gold), earns XP, and builds streaks. A chat-based LLM tutor (reusing lisp-agent's LLM plumbing) provides hints, grades attempts, generates similar problems, and ingests source PDFs to populate task content.

### Goals

- **Active recall over passive reading.** Each day opens with a diagnostic, progresses through targeted practice, ends with a "boss challenge."
- **Gamification.** XP, tier badges, streak multipliers, progress visualization — sustain motivation.
- **Self-contained math rendering.** Problems and solutions display inline with KaTeX.
- **LLM-mediated tutoring.** Ask for hints, submit solutions for grading, request similar problems, run PDF ingestion — all from a chat panel driven by an LLM.

### Non-goals (v1)

- Multi-user / auth / leaderboards.
- Frontend tests.
- Timezone-aware streak (server-local calendar day only).
- Self-compressing memory, LGG, MDL, critical pairs — lisp-agent's memory engine is intentionally not reused.
- Spaced repetition scheduling.

## 2. Architecture

```
┌─────────────────────────┐                              ┌──────────────────────┐
│   Next.js (TypeScript)  │ ◄── HTTP/JSON, /api/* ────►  │  Common Lisp Server  │
│   localhost:3000        │      (proxied)               │  Hunchentoot :4000   │
│                         │                              │  + hunchensocket     │
│  • App Router pages     │                              │                      │
│  • React components     │                              │  • REST endpoints    │
│  • TailwindCSS          │ ◄── WS s-expressions ─────►  │  • WS tool dispatch  │
│  • KaTeX math rendering │      ws://localhost:4000/ws  │  • cl-prevalence DB  │
│  • LLM client (z.ai)    │                              │  • LLM-side tools    │
│  • Chat panel + tools   │                              │  • Snapshot to disk  │
└─────────────────────────┘                              └──────────────────────┘
```

**Two channels on the CL backend:**
- `http://localhost:4000/api/*` — Hunchentoot REST/JSON for study data and progress mutations. Next.js `rewrites` in `next.config.js` proxy `/api/*` so the browser only sees `:3000`.
- `ws://localhost:4000/ws` — hunchensocket s-expression command dispatch for LLM tool calls that need server state. Pattern copied from `lisp-agent/cl/src/protocol.lisp`.

The LLM runs in the browser (z.ai API key in localStorage, same as lisp-agent). It receives tool-call requests from the user via chat, translates them to s-expression commands over WS, and streams results back to the chat panel.

## 3. Data Models

### 3.1 Static study content (defined in `seed-data.lisp` at startup)

```
StudyDay
  ├── id:          integer (1–7)
  ├── phase:       integer (1–4)
  ├── phaseTitle:  string
  ├── title:       string
  ├── icon:        string (single Unicode glyph)
  ├── summary:     string
  ├── keyInsight:  string (conceptual takeaway, supports LaTeX)
  └── tasks:       TaskGroup[]

TaskGroup
  ├── tier:   "bronze" | "silver" | "gold"
  ├── label:  string ("Diagnostic", "Targeted Practice", "Boss Challenge")
  └── items:  TaskItem[]

TaskItem
  ├── text:   string (problem statement, supports LaTeX)
  └── detail: string (solution / hint, supports LaTeX)
```

### 3.2 Mutable state (cl-prevalence, persisted to `backend/data/`)

```
UserProgress
  ├── completedTasks:  HashMap<string, bool>
  │                    key format: "{dayId}-{tier}-{taskIndex}"
  ├── xp:              integer
  ├── streak:          integer           (consecutive-day gold count)
  ├── bestStreak:      integer
  ├── lastCompleted:   string | null     (ISO date of last gold-day completion)
  └── dayTiers:        HashMap<integer, Tier>

TaskOverrides
  └── Map<string, { text: string, detail: string }>
      key format: "{dayId}-{tier}-{taskIndex}"
      Populated by the PDF ingest tool. Merged into StudyDay.tasks at
      read time in GET /api/days (overlay pattern — see §6).

GeneratedTask
  ├── id:         string (uuid)
  ├── dayId:      integer
  ├── tier:       "bronze" | "silver" | "gold"
  ├── sourceTaskIndex: integer  (the task it was generated from)
  ├── text:       string
  ├── detail:     string
  └── createdAt:  string (ISO timestamp)
  Produced by the `generate-similar-problem` LLM tool.
  Awards half the normal tier XP.

Attempt
  ├── dayId:       integer
  ├── tier:        "bronze" | "silver" | "gold"
  ├── taskIndex:   integer
  ├── text:        string     (user's submitted attempt)
  ├── verdict:     "correct" | "partial" | "wrong"
  ├── comment:     string     (LLM feedback)
  └── timestamp:   string (ISO)
  Logged by `grade-attempt` LLM tool.

ChatLog
  ├── dayId:    integer
  └── messages: ChatMessage[]
      ChatMessage
        ├── role:      "user" | "assistant" | "tool"
        ├── content:   string
        ├── toolName:  string | null
        └── timestamp: string (ISO)
```

### 3.3 Derived / computed

| Name | Formula |
|---|---|
| `streakMultiplier` | `1 + floor(streak / 3)` |
| `effectiveXP(tier)` | `baseXP(tier) × streakMultiplier` |
| `totalTasks` | sum of `TaskItem` counts across all `TaskGroup`s across all `StudyDay`s. For this curriculum = 21 (7 days, 3 tiers per day, 1 `TaskItem` per tier — some items bundle several sub-exercises into one card, e.g., `Q3(b,c) and Q4(a,b,c)`). |
| `completionPct` | `completedCount / totalTasks × 100` |
| `dayTier(dayId)` | highest tier where *all* tasks in that tier are complete (cumulative) |

**Cumulative tiering:** to reach gold, a day must have all bronze + all silver + all gold complete. Enforced in `compute-highest-tier`.

## 4. REST API Contract

All endpoints return `Content-Type: application/json`. cl-json emits hyphenated keys (`phase-title`, `day-id`, `best-streak`). Client-side `camelizeKeys()` transforms on receipt. Request bodies also use hyphenated keys for round-trip consistency.

CORS: every endpoint emits `Access-Control-Allow-Origin: *`, `-Methods: GET, POST, OPTIONS`, `-Headers: Content-Type`. Every path handles `OPTIONS` for preflight.

### 4.1 Study content

**`GET /api/days`** — full 7-day plan, with `TaskOverrides` merged over static seed.

Response 200: `StudyDay[]`

**`GET /api/day?id={dayId}`** — single day with overrides merged. 404 if not found.

### 4.2 Progress

**`GET /api/progress`** — current `UserProgress`.

**`POST /api/progress/complete`** — mark task done, award XP, update streak.

Request:
```json
{ "day-id": 1, "tier": "bronze", "task-index": 0 }
```

Response: updated `UserProgress`.

Side effects:
1. Idempotent — re-completing awards no extra XP.
2. XP: `baseXP(tier) × streakMultiplier`.
3. `dayTier` recomputed.
4. If all gold tasks now complete: streak logic runs.
5. Prevalence snapshot written.

**`POST /api/progress/uncomplete`** — toggle off. XP **not** deducted (design: don't punish experimentation). Same request shape.

**`POST /api/progress/reset`** — zero everything.

### 4.3 Generated tasks

**`GET /api/generated?day-id={id}`** — list `GeneratedTask` for a day.

## 5. WebSocket Protocol (LLM Tool Dispatch)

Pattern copied from `lisp-agent/cl/src/protocol.lisp`. Wire format is s-expressions. The frontend's `ws.ts` handles reconnect; `sexp.ts` reads/writes; `tools.ts` validates with Zod before dispatch.

### 5.1 Frame format

Request from client:
```
(call <tool-name> <arg-alist> <request-id>)
```

Response from server:
```
(ok <request-id> <result-sexp>)
(err <request-id> "<message>")
```

### 5.2 Tools exposed over WS

| Tool | Purpose | Server side effect |
|---|---|---|
| `fetch-day` | Return day by id (with overrides merged). | none |
| `fetch-task` | Return one task's text + detail. | none |
| `grade-attempt` | LLM grades user's attempt against `detail`; appends `Attempt` record. | append Attempt |
| `generate-similar-problem` | LLM creates a new problem in the same family; stored as `GeneratedTask`. | append GeneratedTask |
| `mark-task-complete` | Same prevalence tx as REST `/api/progress/complete`. | mutate UserProgress |
| `get-progress` | Current `UserProgress`. | none |
| `overlay-task` | Write a `TaskOverrides` entry. Called once per extracted problem during PDF ingest. | mutate TaskOverrides |
| `append-chat` | Append a `ChatMessage` to `ChatLog[dayId]`. | mutate ChatLog |
| `get-chat` | Fetch chat log for a day. | none |

**Note on `give-hint`.** Pure prompt, no server round-trip. Lives entirely in the LLM call chain on the frontend. Not a WS tool.

**Note on `ingest-pdf`.** Not a single server tool — it's an orchestration on the frontend: the chat client reads the PDF bytes, feeds them to the LLM with a system prompt asking it to extract problems mapped to spec references, then for each extracted problem calls `overlay-task` via WS. Human-in-the-loop: each extraction appears in the chat for user confirmation before commit.

## 6. Overlay Pattern (Scaffold Content → PDF Content)

The scaffold-first build ships `seed-data.lisp` with the full 7-day skeleton. Tasks that can be reconstructed from the spec's solution notes (e.g., Day 1 Q1 eigenvalue matrices, Day 5 rotation matrix verification) get real LaTeX in the seed. References we can't reconstruct (e.g., `Steinbruch §4.3.2 Problem 1`) get placeholder text:

```lisp
(make-task-item
  :text "(awaiting PDF) Steinbruch §4.3.2 Problem 1 — compute $T_B$ from $T_A$"
  :detail "Placeholder — will be filled from source PDF via ingest-pdf.")
```

At runtime, `GET /api/days` merges `TaskOverrides` over the static seed by key. If an override exists for `"3-bronze-0"`, the overlay `{text, detail}` replaces the placeholder. If not, the placeholder shows.

Ingestion flow:
1. User drops `operadores-lineares.pdf` in `backend/pdfs/`.
2. User opens chat panel, types "ingest operadores-lineares.pdf."
3. LLM reads the PDF (frontend loads bytes, includes in prompt), extracts problems keyed by section reference.
4. For each extraction, LLM emits a chat message showing the proposed overlay.
5. User confirms in chat ("yes" / "skip" / "edit").
6. On confirmation, LLM calls `overlay-task` WS tool with the override.
7. `GET /api/days` now returns the real problem text.

Ingestion is idempotent: re-running overwrites existing overrides. The static seed is never modified at runtime.

## 7. Frontend Structure

### 7.1 Routes

| Route | Purpose |
|---|---|
| `/` | Dashboard — 7-day grid, XP bar, streak counter, phase progress |
| `/day/[id]` | Day detail — expanded tier sections, task cards, key insight, chat panel |

### 7.2 Component tree

```
Layout
├── Header (title, XP bar, streak badge, gear → Settings)
├── Page: Dashboard (/)
│   ├── StatsBar (total XP, streak, best streak, completion %)
│   ├── PhaseSection ×4
│   │   └── DayCard ×n
│   │       ├── TierIndicator (bronze/silver/gold dot or grey)
│   │       ├── title + summary
│   │       └── task completion minibar
│   └── ResetButton → ResetModal
│
└── Page: DayDetail (/day/[id])
    ├── DayHeader (icon, title, phase tag, key insight)
    ├── TierSection ×3 (bronze → silver → gold)
    │   └── TaskCard ×n
    │       ├── Checkbox
    │       ├── MathText (problem)
    │       ├── SolutionReveal (collapsible, MathText for detail)
    │       └── GeneratedTaskList (if any generated problems for this task)
    ├── StudyChat (collapsible right-side panel)
    │   ├── ChatMessage list (user / assistant / tool turns)
    │   ├── Composer (textarea + send)
    │   └── tool badges (shown when the model calls a WS tool)
    └── NavigationFooter (prev/next day)
```

### 7.3 Interactions

- **Task checkbox toggle:** `POST /api/progress/complete` or `/uncomplete`, optimistic update, reconcile on response.
- **Solution reveal:** click to expand; hidden by default.
- **Day card click:** navigate to `/day/[id]`.
- **Chat send:** frontend runs LLM turn; if the model calls a tool, frontend validates with Zod, dispatches over WS, appends result to chat, and re-enters the LLM loop.
- **Reset:** confirmation modal → `POST /api/progress/reset`.
- **Settings gear:** open modal → z.ai API key + model selector, saved to localStorage.

### 7.4 LaTeX rendering

`MathText.tsx` splits strings on `$...$` and `$$...$$` delimiters and alternates plain spans with KaTeX-rendered spans.

### 7.5 Styling

- **Dark academic palette.** Background `#0f0f1a`, text `#f5f0e8`.
- **Typography.** Playfair Display (headings), Source Sans 3 (body), JetBrains Mono (math detail blocks).
- **Tier colors.** Bronze `#cd7f32`, silver `#c0c0c0`, gold `#ffd700`.
- **Phase accents.** P1 indigo `#6366f1`, P2 violet `#8b5cf6`, P3 pink `#ec4899`, P4 amber `#f59e0b`.
- **Motion.** Framer Motion: slide-up on card mount, glow pulse on tier achievement, fill animation on XP bar.

## 8. Gamification Logic

### 8.1 XP

| Tier | Base XP |
|---|---|
| Bronze | 10 |
| Silver | 25 |
| Gold | 50 |

- **Streak multiplier:** `1 + floor(streak / 3)`. Streak 3 → ×2, streak 6 → ×3, etc.
- **Effective XP:** `baseXP × multiplier`, awarded once per task.
- **Generated tasks:** half the normal tier XP (bronze 5, silver 12, gold 25), rounded down.

### 8.2 Tier achievement (cumulative)

- All bronze done → day tier = bronze
- All bronze + silver done → day tier = silver
- All bronze + silver + gold done → day tier = gold

### 8.3 Streak

Consecutive **server-local calendar days** with at least one new gold-tier day completion.

| Condition | Action |
|---|---|
| Gold today, last was yesterday | `streak += 1` |
| Gold today, last was today | no change |
| Gold today, last was >1 day ago or null | `streak = 1` |

`bestStreak` updated whenever `streak` exceeds it.

**Timezone caveat:** server local. Not timezone-aware. Noted limitation.

### 8.4 Progress display

- XP bar: fills proportionally; shows numeric XP + multiplier.
- Day cards: tier dot (bronze/silver/gold/grey) + task minibar.
- Streak badge: flame + count; glow at milestones (3, 7).
- Completion %: `completedTasks.size / 21 × 100`.

## 9. Tech Stack

### 9.1 Backend — Common Lisp

| Component | Library | Purpose |
|---|---|---|
| HTTP | Hunchentoot | REST endpoints |
| WebSocket | hunchensocket | LLM tool dispatch |
| Persistence | cl-prevalence | In-memory object store + disk snapshot |
| JSON | cl-json | REST payloads |
| S-expressions | local `term.lisp` (from lisp-agent) | WS payloads |
| Time | local-time | Streak date arithmetic |
| Utilities | Alexandria | General CL |

**ASDF system `study-plan.asd`** load order:
1. `package`
2. `term` (copied from lisp-agent)
3. `models`
4. `seed-data`
5. `storage` (cl-prevalence init, snapshot, overlay merge)
6. `gamification` (xp / tier / streak computation)
7. `api` (REST handlers)
8. `protocol` (WS tool dispatch — adapted from lisp-agent `protocol.lisp`)
9. `server` (Hunchentoot + hunchensocket acceptor)

Entry point: `sbcl --load run.lisp`.

**Prevalence transactions** (all mutations go through named txs so the log replays on restart):
- `tx-complete-task`
- `tx-uncomplete-task`
- `tx-update-streak-after-gold`
- `tx-reset-progress`
- `tx-overlay-task`
- `tx-append-generated-task`
- `tx-append-attempt`
- `tx-append-chat-message`

### 9.2 Frontend — Next.js + TypeScript

| Component | Library | Purpose |
|---|---|---|
| Framework | Next.js 14 (App Router) | SSR, routing, API proxy |
| Styling | TailwindCSS 3 | Utility-first CSS |
| Math | KaTeX | Client-side LaTeX |
| Animation | Framer Motion | Tier transitions, XP bar |
| Icons | Lucide React | UI icons |
| LLM | z.ai / GLM (via lisp-agent `llm.ts`) | Tutor |
| Validation | Zod | Tool-call validation |
| WS | native WebSocket (via lisp-agent `ws.ts`) | LLM tool dispatch |

**API proxy:** `next.config.js` rewrites `/api/*` → `http://localhost:4000/api/*`.

**Key client utilities:**
- `camelizeKeys()` — cl-json hyphenated → JS camelCase on every REST response.
- `sexp.ts` — read/write s-expressions for WS.
- `tools.ts` — Zod schemas for each WS tool + translation layer sexp ↔ JS object.

### 9.3 Reuse from lisp-agent (surgical)

**Copied:**
- `web/src/llm.ts` → adapted system prompt (study-tutor persona).
- `web/src/settings.ts`, `components/Settings.tsx` → unchanged.
- `web/src/sexp.ts`, `ws.ts`, `tools.ts` → adapted tool set.
- `web/src/components/Terminal.tsx` → becomes `StudyChat.tsx`.
- `cl/src/term.lisp` → copied as-is.
- `cl/src/protocol.lisp` → adapted to study-plan's tool set and command dispatch.
- `cl/src/server.lisp` → pattern reference for Hunchentoot + hunchensocket acceptor.

**Not copied** (self-compressing memory engine, not needed):
- `match`, `unify`, `lgg`, `field-lgg`, `mdl`, `normalize`, `completion`, `classify`, `stratified`, `retire`, `rule-lifecycle`, `personality`, `self-improve`, `auto-ontology`, `working-memory`, `goals`, `attention`, `cognition-persist`, `entry-expand`, `entry-manager`, `scan-cross-head`, `debug-compress`, `lgg-explorer`, `memory-health`, `snapshot-diff`, `term-inspector`, `replay`, `coding-tools`.

### 9.4 Development workflow

```bash
# Terminal 1 — Backend
cd /workspace/study-plan/backend
sbcl --load run.lisp
# → Hunchentoot REST on :4000, hunchensocket on :4000/ws

# Terminal 2 — Frontend
cd /workspace/study-plan/frontend
npm install
npm run dev
# → Next.js on :3000, proxying /api/* to :4000
```

A `start.sh` at repo root starts both (pattern from lisp-agent's `start.sh`).

## 10. File Structure

```
study-plan/
├── README.md
├── start.sh
├── .gitignore
├── docs/
│   └── specs/
│       └── 2026-04-10-study-plan-design.md   (this file)
├── backend/
│   ├── study-plan.asd
│   ├── package.lisp
│   ├── term.lisp              (copied from lisp-agent)
│   ├── models.lisp
│   ├── seed-data.lisp
│   ├── storage.lisp
│   ├── gamification.lisp
│   ├── api.lisp
│   ├── protocol.lisp          (adapted from lisp-agent)
│   ├── server.lisp
│   ├── run.lisp
│   ├── test/
│   │   ├── suite.lisp
│   │   ├── gamification-test.lisp
│   │   ├── storage-test.lisp
│   │   └── overlay-test.lisp
│   ├── data/                   (gitignored — cl-prevalence snapshots)
│   └── pdfs/                   (gitignored — user drops source PDFs here)
└── frontend/
    ├── package.json
    ├── tsconfig.json
    ├── next.config.js
    ├── tailwind.config.ts
    ├── postcss.config.js
    └── src/
        ├── app/
        │   ├── layout.tsx
        │   ├── page.tsx                      (Dashboard)
        │   └── day/[id]/page.tsx             (Day detail)
        ├── components/
        │   ├── DayCard.tsx
        │   ├── TaskCard.tsx
        │   ├── TierBadge.tsx
        │   ├── XPBar.tsx
        │   ├── StreakBadge.tsx
        │   ├── ProgressRing.tsx
        │   ├── MathText.tsx
        │   ├── StudyChat.tsx                 (adapted from lisp-agent Terminal.tsx)
        │   ├── Settings.tsx                  (copied from lisp-agent)
        │   └── ResetModal.tsx
        ├── lib/
        │   ├── types.ts
        │   ├── api.ts                        (REST + camelizeKeys)
        │   ├── llm.ts                        (copied, adapted prompt)
        │   ├── settings.ts                   (copied)
        │   ├── sexp.ts                       (copied)
        │   ├── ws.ts                         (copied)
        │   └── tools.ts                      (adapted tool set)
        └── styles/
            └── globals.css
```

## 11. Testing

Light FiveAM suite on the backend. No frontend tests in v1.

**Coverage:**
- `gamification-test.lisp`
  - `compute-highest-tier` boundary cases: none / bronze only / bronze+silver / full gold.
  - `effective-xp` at streak 0, 2, 3, 5, 6.
  - `update-streak-after-gold` branches: same-day, yesterday, stale.
- `storage-test.lisp`
  - Each prevalence transaction mutates state correctly.
  - `tx-complete-task` is idempotent for XP.
  - `tx-uncomplete-task` does not deduct XP.
  - `tx-reset-progress` zeroes everything.
- `overlay-test.lisp`
  - `GET /api/days` path merges `TaskOverrides` over static seed.
  - Overlay is idempotent.
  - Static seed is never mutated.

## 12. Seed Content Strategy

Scaffold-first. `seed-data.lisp` ships with:

- **Full structure for all 7 days** — `title`, `phase`, `phaseTitle`, `icon`, `summary`, `keyInsight` as written in the source spec §7.
- **Reconstructable task text** for tasks where the spec's solution notes imply the problem — e.g., Day 1 Bronze eigenvalue matrices (i)–(iv) can be reconstructed from their solutions.
- **Placeholder text** for tasks that reference source sections without enough info to reconstruct (e.g., `Steinbruch §4.3.2 Problem 1`): `"(awaiting PDF) <reference> — <one-line description>"` with `detail` `"Placeholder — will be filled from source PDF via ingest-pdf."`.

PDFs arrive later; `ingest-pdf` orchestration overlays real content into `TaskOverrides` via the `overlay-task` WS tool.

## 13. Content (All 7 Days)

Full content lifted from the source spec §7. Reproduced here for completeness.

### Phase 1 — Spectral Foundations

**Day 1: Eigenvalues & Diagonalizability**
Key insight: $A$ is diagonalizable $\iff m_a(\lambda) = m_g(\lambda)$ for every eigenvalue $\lambda$.
- Bronze: find eigenvalues of Q1 matrices (i)–(iv).
- Silver: determine diagonalizability for each; verify matrix (iii) has $\lambda=3$ with $m_a=2, m_g=1$.
- Gold: construct a $3\times3$ non-diagonalizable matrix with a repeated eigenvalue (Jordan block).
- Solutions reconstructable: (i) triangular → $2, -3, 1$. (ii) $\lambda^2 - 14\lambda + 58 = 0 \Rightarrow \lambda = 7 \pm 3i$. (iii) $(3-\lambda)^2 = 0 \Rightarrow \lambda = 3$ (mult 2). (iv) $\lambda^2 - 2\lambda - 8 = 0 \Rightarrow \lambda = 4, -2$.

**Day 2: Eigenvectors & Change of Basis Intro**
Key insight: when $B$ is orthonormal, $c_k = \langle \vec{u}, \vec{v}_k \rangle$. No matrix inversion needed.
- Bronze: find eigenvectors for matrix (iv) (Q1c).
- Silver: Q2 — express $\vec{u}=(1,2)$ in basis $B$. Verify reconstruction.
- Gold: show eigenvectors of (iv) are orthogonal; diagonalize $A$ via $P^{-1}AP$.

### Phase 2 — Similar Matrices & Operators

**Day 3: The Similarity Relation**
Key insight: $T_B = Q^{-1}T_A Q$. Similar matrices share det, trace, eigenvalues, rank.
- Bronze: Steinbruch §4.3.2 Problem 1 — compute $T_B$ from $T_A$ (placeholder).
- Silver: verify $\det T_A = \det T_B$; §4.3.2 Problem 2 (placeholder).
- Gold: if $T_B$ is diagonal, explain what this implies about basis $B$ (eigenbasis).

**Day 4: Invertible Operators**
Key insight: invertible $\iff \det T \neq 0 \iff$ columns LI $\iff \ker f = \{0\}$.
- Bronze: §4.6 Problems 1–3 — check invertibility, find $f^{-1}$ (placeholder).
- Silver: §4.2.2 worked example — verify $f^{-1}(f(2,1)) = (2,1)$ (placeholder).
- Gold: without computing $T^{-1}$: why is $f(x,y)=(2x-y, -4x+2y)$ not invertible? (Geometric: columns proportional → image is a line.)

### Phase 3 — Orthogonal & Symmetric Operators

**Day 5: Orthogonal Operators**
Key insight: $|f(v)| = |v|$; equivalently $A^t = A^{-1}$. Rigid motions: rotations ($\det = +1$), reflections ($\det = -1$).
- Bronze: verify rotation matrix $R(\theta)$ is orthogonal.
- Silver: §4.6 Problem 18 — classify which operators are orthogonal; identify rotation vs reflection (placeholder).
- Gold: prove product of two orthogonal matrices is orthogonal ($O(n)$ closed under multiplication).

**Day 6: Symmetric Operators**
Key insight: $A = A^t$. Spectral theorem: symmetric ⇒ real eigenvalues + orthogonally diagonalizable.
- Bronze: verify $f(x,y) = (2x+4y, 4x-y)$ is symmetric.
- Silver: verify $f(\mu) \cdot v = \mu \cdot f(v)$ for specific vectors; §4.6 Problem 34a — find $m,n$ for symmetry (placeholder).
- Gold: prove $2 \times 2$ symmetric matrix always has real eigenvalues (discriminant argument).

### Phase 4 — Calculus Tune-Up

**Day 7: Chain Rule & Integration by Substitution**
Key insight: $\frac{df}{dt} = \frac{df}{dx}\frac{dx}{dt}$ is the backbone of ODE techniques. Substitution = chain rule in reverse.
- Bronze: Q3(a) — differentiate $f(x(t)) = \frac{1+x^2}{1+x}$, $x(t) = 1+t$.
- Silver: Q3(b,c), Q4(a,b,c) — product rule, chain rule, substitution integrals (partial placeholder).
- Gold: compute $\frac{d}{dt} \det \begin{pmatrix} e^t & t \\ t^2 & \sin t \end{pmatrix}$ via direct expansion and Jacobi's formula.

## 14. Future Extensions (out of scope)

- Spaced repetition scheduling.
- Interactive visualizations (eigenvector animations, rotation operators, etc.).
- Multi-user / auth / leaderboards.
- PDF export of completed work.
- Timezone-aware streak.
- Attempt history surfaced in the UI.
- Retries / review of wrong attempts.
