# mochi

A study companion that turns your courses into a Tamagotchi: every card you
finish feeds a small flame creature; the same creature is also the LLM tutor
who teaches you the next one.

> Originally a 7-day linear-algebra/ODE refresher; now a multi-course
> ingestion + tutoring tool with a zettelkasten attached. The earlier
> Common Lisp backend was ported to Python/FastAPI — anything in
> `docs/specs/` referring to Hunchentoot is design intent only.

## What it does

- **Course ingestion.** Drop a PDF in; the LLM extracts a course → phases
  → days → cards (bronze/silver/gold) → concepts, reusing existing concept
  ids across courses so the knowledge map stays connected.
- **Spaced retrieval + elaborate prompts.** Every session can ask you to
  recall (retrieval) or explain (elaborate); attempts are graded and fed
  back into the tutor's memory.
- **Zettelkasten notes.** Atomic notes with bidirectional links, browsable
  as a force-directed graph (degree-centrality sized, intra-domain
  spread). The tutor can list/fetch/add/update/delete notes.
- **Pet.** Spark → emberling → ember → fire. Procedurally generated ASCII
  art. Stats (perseverance / curiosity / audacity / knowledge) shape the
  tutor's voice — the pet *is* the tutor. Right-click for a Haiku quote.
- **WebSocket tool dispatcher.** Tutor's tool calls (mark-task-complete,
  grade-attempt, next-up, list-notes, …) round-trip through a single WS
  channel to FastAPI handlers; results feed the next LLM turn.
- **Intro.** An 11-phase ASCII narrative with an interactive find-the-
  meteorite mini-game. Set the scene before the studying starts.

## Stack

- **Backend:** Python 3.12 / FastAPI / uvicorn / pydantic v2. State lives
  in plain JSON files under `backend/data/` guarded by a single
  `threading.Lock` — there's no database.
- **Frontend:** Next.js 14 (App Router), Tailwind, KaTeX, framer-motion,
  d3-force.
- **LLM providers:** `zai` (browser-side key in `localStorage`) or
  `anthropic-oauth` (server-side OAuth tokens, sourced from
  github.com/izzortsi/anthropic-oauth).

## Local dev

Prereqs: `uv`, Node 20+.

```bash
./start.sh                # backend on :4000, frontend on :3000
./start.sh 4001 3001      # override ports
```

Manually:

```bash
cd backend  && uv run uvicorn app.main:app --host 0.0.0.0 --port 4000
cd frontend && npm install && npm run dev
```

If you want the `anthropic-oauth` provider, run `anthropic-oauth auth`
once (writes tokens to `~/.config/anthropic-oauth/tokens.json`); the
backend reads them automatically.

## Layout

```
backend/
  app/
    main.py              FastAPI app + CORS + router mounts
    config.py            SP_* env-driven settings
    store.py             single-locked JSON persistence
    routers/             progress, courses, pet, llm, srs, ws, ...
    services/            llm, llm_anthropic, ollama_ocr, pet_art,
                         pet_stats, note_normalize
  data/                  *.json — git-tracked snapshots
  scripts/               one-off migrations
frontend/
  src/
    app/                 Next.js App Router routes
    components/          Tutor, PetCreature, NotesGraph, IntroScene, ...
    lib/                 api, llm, tools (Zod schemas), ws, tutor-context
docs/
  plans/  specs/         design notes (treat as intent, not spec)
DEPLOY.md                Render deployment guide
render.yaml              Render Blueprint (two services + 5 GB Disk)
start.sh                 dev launcher
tray.py                  optional pystray launcher with live pet status
```

## Conventions

- **Wire format.** API uses **kebab-case JSON keys** (`card-uid`,
  `course-id`, `day-tiers`, etc.). The frontend's `lib/api.ts` runs every
  response through `camelizeKeys` and emits kebab in request bodies.
  Card-uid keys (`c1-d3-silver-0`) and day-tier keys (`1.3`) are exempt
  from camelizing — don't remove that exemption.
- **Card-uid format.** `c{courseId}-d{dayId}-{tier}-{taskIndex}`. Several
  routers parse this directly; don't change it.
- **Tool dispatch.** WS frame: `{requestId, call, args}` →
  `{ok, result, requestId}`. Add new tools in `routers/ws.py` `dispatch()`
  and matching Zod schema in `frontend/src/lib/tools.ts`.
- **Concept aliases.** `data/aliases.json` canonicalises concept ids; the
  resolver runs at every concept boundary (import, tag-card, prereq,
  concept map). Mixing raw and canonical ids silently breaks the graph.
- **Note normalization.** `app/services/note_normalize.py` canonicalises
  domains and ids on every write — kebab-case English singular ASCII.

See `CLAUDE.md` for the full set of conventions.

## Data files

Everything under `backend/data/` is git-tracked so sessions resume across
machines:

| file              | what                                                     |
|-------------------|----------------------------------------------------------|
| `courses.json`    | course definitions (phases, days, cards, concepts, prereqs) |
| `progress.json`   | XP, streak, completed tasks, day tiers, attempts         |
| `pet.json`        | Tamagotchi state (stage, stats, art, mood, hatch tokens) |
| `notes.json`      | zettelkasten notes with bidirectional `related` links    |
| `aliases.json`    | concept id canonicalisation                              |
| `chat.json`       | per-course chat history                                  |
| `srs.json`        | spaced-repetition queue                                  |
| `tutor_notes.json`| per-card tutor jots                                      |
| `ocr/`            | cached OCR output keyed by PDF hash                      |

PDF uploads land in `backend/pdfs/` (gitignored). `SP_*` env vars
override `app/config.py` defaults — see `app/config.py` and `DEPLOY.md`.

## Deploying

`render.yaml` provisions two Render Pro web services and a 5 GB
persistent Disk for state. Walkthrough in `DEPLOY.md`.

## Stale docs warning

`docs/specs/2026-04-10-study-plan-design.md` describes the original
Common Lisp backend (Hunchentoot + cl-prevalence). That backend no
longer exists — read `backend/app/` for the current implementation.
