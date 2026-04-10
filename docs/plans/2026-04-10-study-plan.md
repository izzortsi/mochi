# Study Plan App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-stack single-user study tracker for a 7-day linear algebra / ODE review plan, with a Common Lisp backend (Hunchentoot REST + hunchensocket WS + cl-prevalence), a Next.js 14 frontend (Tailwind + Framer Motion + KaTeX), and a browser-side LLM tutor that calls server tools over WebSocket — reusing the LLM plumbing from `/workspace/lisp-agent`.

**Architecture:** REST/JSON on `http://localhost:4000/api/*` for study data and progress mutations, s-expression WebSocket on `ws://localhost:4000/ws` for LLM tool dispatch. Static seed data merges with per-task overrides (written by PDF ingestion) at read time. Scaffold-first: ships with placeholder text for tasks we can't reconstruct, filled in later by the LLM reading source PDFs.

**Tech Stack:**
- Backend: SBCL, Quicklisp, Hunchentoot, hunchensocket, cl-prevalence, cl-json, cl-ppcre, local-time, Alexandria, FiveAM (tests).
- Frontend: Next.js 14 (App Router), TypeScript, TailwindCSS 3, KaTeX, Framer Motion, Lucide React, Zod.
- Reused from `/workspace/lisp-agent`: `cl/src/term.lisp` (copied), `cl/src/protocol.lisp` (adapted), `web/src/sexp.ts`, `web/src/ws.ts`, `web/src/settings.ts`, `web/src/components/Settings.tsx`, `web/src/components/Terminal.tsx` (adapted as `StudyChat.tsx`), `web/src/llm.ts` (adapted system prompt), `web/src/tools.ts` (adapted tool set).

**Spec:** `/workspace/study-plan/docs/specs/2026-04-10-study-plan-design.md`

---

## Conventions

- All code runs from `/workspace/study-plan/`.
- Common Lisp files use `in-package` at the top.
- All test code uses FiveAM (`(fiveam:def-test ...)`).
- All frontend TypeScript uses strict mode and explicit types.
- Commits: imperative mood, no emojis, no AI mentions, no Co-Authored-By trailer.
- No `git push` during this plan — work locally only.

---

## Task 1: Repository Scaffold

**Files:**
- Create: `/workspace/study-plan/.gitignore`
- Create: `/workspace/study-plan/README.md`
- Create: `/workspace/study-plan/backend/` (directory)
- Create: `/workspace/study-plan/backend/data/` (directory — prevalence snapshots, gitignored)
- Create: `/workspace/study-plan/backend/pdfs/` (directory — user PDF drops, gitignored)
- Create: `/workspace/study-plan/backend/test/` (directory)
- Create: `/workspace/study-plan/frontend/` (directory)

- [ ] **Step 1: Create directories**

Run:
```bash
mkdir -p /workspace/study-plan/backend/test \
         /workspace/study-plan/backend/data \
         /workspace/study-plan/backend/pdfs \
         /workspace/study-plan/frontend
```

- [ ] **Step 2: Write `.gitignore`**

Create `/workspace/study-plan/.gitignore`:
```
# CL
*.fasl
backend/data/
backend/pdfs/

# Node / Next
node_modules/
.next/
out/
.env
.env.local
.DS_Store

# Editors
.vscode/
.idea/
*.swp
```

- [ ] **Step 3: Write `README.md`**

Create `/workspace/study-plan/README.md`:
```markdown
# study-plan

A full-stack interactive study tracker for a 7-day linear algebra / ODE review plan.

## Stack

- **Backend:** Common Lisp (Hunchentoot REST + hunchensocket WS + cl-prevalence)
- **Frontend:** Next.js 14 (App Router) + TailwindCSS + KaTeX + Framer Motion
- **LLM:** z.ai / GLM (browser-side, API key in localStorage)

See `docs/specs/2026-04-10-study-plan-design.md` for the full design.

## Running

Prerequisites: SBCL, Quicklisp, Node.js 18+.

```bash
./start.sh
```

Opens on http://localhost:3000. Backend on :4000.

## Manual

```bash
# Backend
cd backend && sbcl --load run.lisp

# Frontend
cd frontend && npm install && npm run dev
```
```

- [ ] **Step 4: Verify directory layout**

Run:
```bash
ls -la /workspace/study-plan/
```

Expected: `.gitignore`, `README.md`, `backend/`, `frontend/`, `docs/`.

*(Git init is deferred to Task 31 — final initial commit.)*

---

## Task 2: ASDF System Definition + Package

**Files:**
- Create: `/workspace/study-plan/backend/study-plan.asd`
- Create: `/workspace/study-plan/backend/package.lisp`

- [ ] **Step 1: Write `study-plan.asd`**

Create `/workspace/study-plan/backend/study-plan.asd`:
```lisp
(asdf:defsystem #:study-plan
  :description "Interactive study tracker with LLM tutor — 7-day linear algebra / ODE review plan"
  :version "0.1.0"
  :depends-on (#:hunchentoot
               #:hunchensocket
               #:cl-prevalence
               #:cl-json
               #:cl-ppcre
               #:local-time
               #:alexandria)
  :serial t
  :components ((:file "package")
               (:file "term")
               (:file "models")
               (:file "gamification")
               (:file "seed-data")
               (:file "storage")
               (:file "api")
               (:file "protocol")
               (:file "server"))
  :in-order-to ((test-op (test-op #:study-plan/test))))

(asdf:defsystem #:study-plan/test
  :depends-on (#:study-plan #:fiveam)
  :serial t
  :components ((:module "test"
                :components
                ((:file "suite")
                 (:file "gamification-test")
                 (:file "storage-test")
                 (:file "overlay-test")))))
```

- [ ] **Step 2: Write `package.lisp`**

Create `/workspace/study-plan/backend/package.lisp`:
```lisp
;;; package.lisp — package declarations for study-plan backend.

(defpackage #:study-plan.term
  (:use #:cl)
  (:export #:make-atom-term #:make-var-term #:make-app-term
           #:atom-term-p #:var-term-p #:app-term-p
           #:atom-term-value #:var-term-name
           #:app-term-head #:app-term-args
           #:term-equal #:parse-sexp #:write-sexp))

(defpackage #:study-plan.models
  (:use #:cl)
  (:export ;; StudyDay
           #:study-day #:make-study-day
           #:study-day-id #:study-day-phase #:study-day-phase-title
           #:study-day-title #:study-day-icon #:study-day-summary
           #:study-day-key-insight #:study-day-tasks
           ;; TaskGroup
           #:task-group #:make-task-group
           #:task-group-tier #:task-group-label #:task-group-items
           ;; TaskItem
           #:task-item #:make-task-item
           #:task-item-text #:task-item-detail
           ;; UserProgress
           #:user-progress #:make-user-progress
           #:user-progress-completed-tasks #:user-progress-xp
           #:user-progress-streak #:user-progress-best-streak
           #:user-progress-last-completed #:user-progress-day-tiers
           ;; TaskOverride
           #:task-override #:make-task-override
           #:task-override-text #:task-override-detail
           ;; GeneratedTask
           #:generated-task #:make-generated-task
           #:generated-task-id #:generated-task-day-id
           #:generated-task-tier #:generated-task-source-task-index
           #:generated-task-text #:generated-task-detail
           #:generated-task-created-at
           ;; Attempt
           #:attempt #:make-attempt
           #:attempt-day-id #:attempt-tier #:attempt-task-index
           #:attempt-text #:attempt-verdict #:attempt-comment
           #:attempt-timestamp
           ;; ChatMessage
           #:chat-message #:make-chat-message
           #:chat-message-role #:chat-message-content
           #:chat-message-tool-name #:chat-message-timestamp
           ;; Root
           #:study-root #:make-study-root
           #:study-root-progress #:study-root-overrides
           #:study-root-generated #:study-root-attempts
           #:study-root-chat-logs))

(defpackage #:study-plan.gamification
  (:use #:cl #:study-plan.models)
  (:export #:base-xp #:streak-multiplier #:effective-xp
           #:compute-highest-tier #:update-streak-after-gold
           #:task-key))

(defpackage #:study-plan.storage
  (:use #:cl #:study-plan.models #:study-plan.gamification)
  (:export #:*prevalence-system* #:init-storage #:shutdown-storage
           #:current-progress #:current-root
           ;; Transactions
           #:tx-complete-task #:tx-uncomplete-task
           #:tx-reset-progress #:tx-overlay-task
           #:tx-append-generated-task #:tx-append-attempt
           #:tx-append-chat-message
           ;; Reads
           #:get-overrides #:get-generated-for-day
           #:get-chat-for-day))

(defpackage #:study-plan.seed-data
  (:use #:cl #:study-plan.models)
  (:export #:*study-days* #:merge-overrides))

(defpackage #:study-plan.api
  (:use #:cl #:hunchentoot #:study-plan.models
        #:study-plan.storage #:study-plan.seed-data
        #:study-plan.gamification)
  (:export #:define-study-routes))

(defpackage #:study-plan.protocol
  (:use #:cl #:study-plan.term #:study-plan.models
        #:study-plan.storage #:study-plan.seed-data
        #:study-plan.gamification)
  (:export #:handle-ws-message #:dispatch-tool
           #:make-ok-response #:make-err-response))

(defpackage #:study-plan.server
  (:use #:cl)
  (:export #:start-server #:stop-server #:*acceptor*))
```

- [ ] **Step 3: Verify ASDF + package load**

Run (from `/workspace/study-plan/backend/`):
```bash
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(load "package.lisp")'
```

Expected: no errors. The ASDF system won't fully load yet (missing files) — that's fine, we're just verifying `package.lisp` parses.

---

## Task 3: Copy `term.lisp` from lisp-agent

**Files:**
- Create: `/workspace/study-plan/backend/term.lisp`

- [ ] **Step 1: Copy file**

Run:
```bash
cp /workspace/lisp-agent/cl/src/term.lisp /workspace/study-plan/backend/term.lisp
```

- [ ] **Step 2: Rewrite `in-package` to `study-plan.term`**

Read the first few lines of `/workspace/study-plan/backend/term.lisp` with the Read tool, then use Edit to change:

Old:
```lisp
(in-package #:lisp-agent.term)
```

New:
```lisp
(in-package #:study-plan.term)
```

- [ ] **Step 3: Verify compile**

Run (from `/workspace/study-plan/backend/`):
```bash
sbcl --non-interactive \
  --eval '(load "package.lisp")' \
  --eval '(load "term.lisp")'
```

Expected: compiles with no errors. Warnings about unused exports (`make-var-term` etc.) are fine — we don't need pattern variables but keep them for parity.

---

## Task 4: Data Models

**Files:**
- Create: `/workspace/study-plan/backend/models.lisp`

- [ ] **Step 1: Write `models.lisp`**

Create `/workspace/study-plan/backend/models.lisp`:
```lisp
;;; models.lisp — data structs for study-plan.
;;;
;;; Static content (StudyDay / TaskGroup / TaskItem) is defined in seed-data.lisp.
;;; Mutable state lives in STUDY-ROOT, persisted by cl-prevalence in storage.lisp.

(in-package #:study-plan.models)

;;;---------------------------------------------------------------------------
;;; Static content (seed-data builds these at load time)
;;;---------------------------------------------------------------------------

(defstruct task-item
  (text "" :type string)
  (detail "" :type string))

(defstruct task-group
  (tier "" :type string)       ; "bronze" | "silver" | "gold"
  (label "" :type string)
  (items nil :type list))      ; list of TASK-ITEM

(defstruct study-day
  (id 0 :type integer)
  (phase 0 :type integer)
  (phase-title "" :type string)
  (title "" :type string)
  (icon "" :type string)
  (summary "" :type string)
  (key-insight "" :type string)
  (tasks nil :type list))      ; list of TASK-GROUP

;;;---------------------------------------------------------------------------
;;; Mutable state (persisted by cl-prevalence)
;;;---------------------------------------------------------------------------

(defstruct user-progress
  (completed-tasks (make-hash-table :test 'equal) :type hash-table)
  (xp 0 :type integer)
  (streak 0 :type integer)
  (best-streak 0 :type integer)
  (last-completed nil)         ; string (ISO date) or nil
  (day-tiers (make-hash-table :test 'eql) :type hash-table))

(defstruct task-override
  (text "" :type string)
  (detail "" :type string))

(defstruct generated-task
  (id "" :type string)
  (day-id 0 :type integer)
  (tier "" :type string)
  (source-task-index 0 :type integer)
  (text "" :type string)
  (detail "" :type string)
  (created-at "" :type string))

(defstruct attempt
  (day-id 0 :type integer)
  (tier "" :type string)
  (task-index 0 :type integer)
  (text "" :type string)
  (verdict "" :type string)
  (comment "" :type string)
  (timestamp "" :type string))

(defstruct chat-message
  (role "" :type string)       ; "user" | "assistant" | "tool"
  (content "" :type string)
  (tool-name nil)              ; string or nil
  (timestamp "" :type string))

;;;---------------------------------------------------------------------------
;;; Prevalence root
;;;---------------------------------------------------------------------------

(defstruct study-root
  (progress (make-user-progress) :type user-progress)
  ;; Key format "{day-id}-{tier}-{task-index}" -> TASK-OVERRIDE
  (overrides (make-hash-table :test 'equal) :type hash-table)
  ;; List of GENERATED-TASK
  (generated nil :type list)
  ;; List of ATTEMPT
  (attempts nil :type list)
  ;; day-id -> list of CHAT-MESSAGE
  (chat-logs (make-hash-table :test 'eql) :type hash-table))
```

- [ ] **Step 2: Verify compile**

Run (from `/workspace/study-plan/backend/`):
```bash
sbcl --non-interactive \
  --eval '(load "package.lisp")' \
  --eval '(load "term.lisp")' \
  --eval '(load "models.lisp")'
```

Expected: compiles with no errors.

---

## Task 5: FiveAM Test Suite Boilerplate

**Files:**
- Create: `/workspace/study-plan/backend/test/suite.lisp`

- [ ] **Step 1: Write `test/suite.lisp`**

Create `/workspace/study-plan/backend/test/suite.lisp`:
```lisp
;;; test/suite.lisp — root FiveAM suite.

(defpackage #:study-plan.test
  (:use #:cl #:fiveam)
  (:export #:run-all))

(in-package #:study-plan.test)

(def-suite study-plan-suite
  :description "All study-plan tests.")

(in-suite study-plan-suite)

(defun run-all ()
  (let ((result (run 'study-plan-suite)))
    (explain! result)
    result))
```

---

## Task 6: Gamification — TDD

**Files:**
- Create: `/workspace/study-plan/backend/gamification.lisp`
- Create: `/workspace/study-plan/backend/test/gamification-test.lisp`

- [ ] **Step 1: Write the failing test**

Create `/workspace/study-plan/backend/test/gamification-test.lisp`:
```lisp
;;; test/gamification-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

;;;---------------------------------------------------------------------------
;;; base-xp
;;;---------------------------------------------------------------------------

(test base-xp-values
  (is (= 10 (study-plan.gamification:base-xp "bronze")))
  (is (= 25 (study-plan.gamification:base-xp "silver")))
  (is (= 50 (study-plan.gamification:base-xp "gold"))))

;;;---------------------------------------------------------------------------
;;; streak-multiplier: 1 + floor(streak / 3)
;;;---------------------------------------------------------------------------

(test streak-multiplier-values
  (is (= 1 (study-plan.gamification:streak-multiplier 0)))
  (is (= 1 (study-plan.gamification:streak-multiplier 2)))
  (is (= 2 (study-plan.gamification:streak-multiplier 3)))
  (is (= 2 (study-plan.gamification:streak-multiplier 5)))
  (is (= 3 (study-plan.gamification:streak-multiplier 6))))

;;;---------------------------------------------------------------------------
;;; effective-xp
;;;---------------------------------------------------------------------------

(test effective-xp-values
  (is (= 10 (study-plan.gamification:effective-xp "bronze" 0)))
  (is (= 20 (study-plan.gamification:effective-xp "bronze" 3)))
  (is (= 50 (study-plan.gamification:effective-xp "silver" 3)))
  (is (= 150 (study-plan.gamification:effective-xp "gold" 6))))

;;;---------------------------------------------------------------------------
;;; compute-highest-tier: cumulative. All bronze to reach bronze, etc.
;;;---------------------------------------------------------------------------

(defun make-test-day ()
  (study-plan.models:make-study-day
   :id 1 :phase 1 :phase-title "Test"
   :title "Test Day" :icon "*" :summary "" :key-insight ""
   :tasks (list (study-plan.models:make-task-group
                 :tier "bronze" :label "Diagnostic"
                 :items (list (study-plan.models:make-task-item)
                              (study-plan.models:make-task-item)))
                (study-plan.models:make-task-group
                 :tier "silver" :label "Practice"
                 :items (list (study-plan.models:make-task-item)))
                (study-plan.models:make-task-group
                 :tier "gold" :label "Boss"
                 :items (list (study-plan.models:make-task-item))))))

(test compute-highest-tier-none
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (is (equal "none" (study-plan.gamification:compute-highest-tier day completed)))))

(test compute-highest-tier-bronze-partial
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "1-bronze-0" completed) t)
    (is (equal "none" (study-plan.gamification:compute-highest-tier day completed)))))

(test compute-highest-tier-bronze-complete
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "1-bronze-0" completed) t)
    (setf (gethash "1-bronze-1" completed) t)
    (is (equal "bronze" (study-plan.gamification:compute-highest-tier day completed)))))

(test compute-highest-tier-silver
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "1-bronze-0" completed) t)
    (setf (gethash "1-bronze-1" completed) t)
    (setf (gethash "1-silver-0" completed) t)
    (is (equal "silver" (study-plan.gamification:compute-highest-tier day completed)))))

(test compute-highest-tier-gold
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "1-bronze-0" completed) t)
    (setf (gethash "1-bronze-1" completed) t)
    (setf (gethash "1-silver-0" completed) t)
    (setf (gethash "1-gold-0" completed) t)
    (is (equal "gold" (study-plan.gamification:compute-highest-tier day completed)))))

;;;---------------------------------------------------------------------------
;;; update-streak-after-gold
;;;---------------------------------------------------------------------------

(test update-streak-first-gold
  (let ((progress (study-plan.models:make-user-progress)))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-10")
    (is (= 1 (study-plan.models:user-progress-streak progress)))
    (is (= 1 (study-plan.models:user-progress-best-streak progress)))
    (is (equal "2026-04-10" (study-plan.models:user-progress-last-completed progress)))))

(test update-streak-same-day-noop
  (let ((progress (study-plan.models:make-user-progress
                   :streak 2 :best-streak 2 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-10")
    (is (= 2 (study-plan.models:user-progress-streak progress)))
    (is (= 2 (study-plan.models:user-progress-best-streak progress)))))

(test update-streak-consecutive
  (let ((progress (study-plan.models:make-user-progress
                   :streak 2 :best-streak 2 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-11")
    (is (= 3 (study-plan.models:user-progress-streak progress)))
    (is (= 3 (study-plan.models:user-progress-best-streak progress)))))

(test update-streak-gap-resets
  (let ((progress (study-plan.models:make-user-progress
                   :streak 5 :best-streak 5 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-15")
    (is (= 1 (study-plan.models:user-progress-streak progress)))
    (is (= 5 (study-plan.models:user-progress-best-streak progress)))))
```

- [ ] **Step 2: Run tests to verify they fail**

Run (from `/workspace/study-plan/backend/`):
```bash
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan/test)' \
  --eval '(study-plan.test:run-all)' 2>&1 | tail -20
```

Expected: compile-time failure — `study-plan.gamification:base-xp` etc. don't exist yet.

- [ ] **Step 3: Write `gamification.lisp`**

Create `/workspace/study-plan/backend/gamification.lisp`:
```lisp
;;; gamification.lisp — pure functions for XP, tier, streak.

(in-package #:study-plan.gamification)

(defun base-xp (tier)
  "Base XP for a tier. tier is a string: bronze / silver / gold."
  (cond ((string= tier "bronze") 10)
        ((string= tier "silver") 25)
        ((string= tier "gold") 50)
        (t 0)))

(defun streak-multiplier (streak)
  "1 + floor(streak / 3). Streak 3 -> 2, streak 6 -> 3."
  (+ 1 (floor streak 3)))

(defun effective-xp (tier streak)
  (* (base-xp tier) (streak-multiplier streak)))

(defun task-key (day-id tier task-index)
  "Canonical key for completedTasks and overrides hash-tables."
  (format nil "~D-~A-~D" day-id tier task-index))

(defun all-items-complete-p (day tier completed-tasks)
  "True iff every TaskItem in this tier group for this day is in completed-tasks."
  (let ((group (find tier (study-day-tasks day)
                     :key #'task-group-tier :test #'string=)))
    (when group
      (loop for i from 0 below (length (task-group-items group))
            always (gethash (task-key (study-day-id day) tier i) completed-tasks)))))

(defun compute-highest-tier (day completed-tasks)
  "Cumulative tier: gold requires bronze+silver+gold all complete, etc."
  (let ((bronze (all-items-complete-p day "bronze" completed-tasks))
        (silver (all-items-complete-p day "silver" completed-tasks))
        (gold   (all-items-complete-p day "gold"   completed-tasks)))
    (cond ((and bronze silver gold) "gold")
          ((and bronze silver)      "silver")
          (bronze                   "bronze")
          (t                        "none"))))

;;;---------------------------------------------------------------------------
;;; Streak math. Dates are ISO "YYYY-MM-DD" strings. We do string parsing only
;;; — local-time not needed for the "is yesterday" check.
;;;---------------------------------------------------------------------------

(defun parse-iso-date (s)
  "Return (values year month day) from ISO date string, or NIL if invalid."
  (when (and s (>= (length s) 10))
    (ignore-errors
     (values (parse-integer s :start 0 :end 4)
             (parse-integer s :start 5 :end 7)
             (parse-integer s :start 8 :end 10)))))

(defun days-between (iso-a iso-b)
  "Calendar days from iso-a to iso-b (b - a). Uses local-time for the arithmetic."
  (multiple-value-bind (ay am ad) (parse-iso-date iso-a)
    (multiple-value-bind (by bm bd) (parse-iso-date iso-b)
      (when (and ay by)
        (let ((ta (local-time:encode-timestamp 0 0 0 0 ad am ay))
              (tb (local-time:encode-timestamp 0 0 0 0 bd bm by)))
          (floor (local-time:timestamp-difference tb ta) 86400))))))

(defun update-streak-after-gold (progress today-iso)
  "Mutates PROGRESS according to §6.3 streak rules.
   today-iso is an ISO date string."
  (let ((last (user-progress-last-completed progress)))
    (cond
      ;; First gold ever, or gap > 1 day, or no last date
      ((null last)
       (setf (user-progress-streak progress) 1))
      ((equal last today-iso)
       nil) ; same day — no change
      (t
       (let ((delta (days-between last today-iso)))
         (cond
           ((and delta (= delta 1))
            (incf (user-progress-streak progress)))
           (t
            (setf (user-progress-streak progress) 1))))))
    (setf (user-progress-last-completed progress) today-iso)
    (when (> (user-progress-streak progress)
             (user-progress-best-streak progress))
      (setf (user-progress-best-streak progress)
            (user-progress-streak progress))))
  progress)
```

- [ ] **Step 4: Run tests to verify they pass**

Run (from `/workspace/study-plan/backend/`):
```bash
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan/test)' \
  --eval '(study-plan.test:run-all)' 2>&1 | tail -20
```

Expected: all gamification tests pass.

---

## Task 7: Storage / cl-prevalence — TDD

**Prerequisite:** Task 8 (seed-data.lisp) must be complete first — `storage.lisp` references `study-plan.seed-data:*study-days*`. Execute Task 8 before this one.

**Files:**
- Create: `/workspace/study-plan/backend/storage.lisp`
- Create: `/workspace/study-plan/backend/test/storage-test.lisp`

- [ ] **Step 1: Write the failing tests**

Create `/workspace/study-plan/backend/test/storage-test.lisp`:
```lisp
;;; test/storage-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(defvar *test-data-dir* "/tmp/study-plan-test-data/")

(defun reset-test-storage ()
  "Wipe the test prevalence dir and re-init."
  (uiop:delete-directory-tree (pathname *test-data-dir*) :validate t :if-does-not-exist :ignore)
  (ensure-directories-exist *test-data-dir*)
  (study-plan.storage:shutdown-storage)
  (study-plan.storage:init-storage *test-data-dir*))

(test tx-complete-task-awards-xp
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 "bronze" 0 "2026-04-10")
  (let ((p (study-plan.storage:current-progress)))
    (is (= 10 (study-plan.models:user-progress-xp p)))
    (is (gethash "1-bronze-0"
                 (study-plan.models:user-progress-completed-tasks p)))))

(test tx-complete-task-idempotent
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-complete-task 1 "bronze" 0 "2026-04-10")
  (is (= 10 (study-plan.models:user-progress-xp (study-plan.storage:current-progress)))))

(test tx-uncomplete-task-preserves-xp
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-uncomplete-task 1 "bronze" 0)
  (let ((p (study-plan.storage:current-progress)))
    (is (= 10 (study-plan.models:user-progress-xp p)))
    (is (null (gethash "1-bronze-0"
                       (study-plan.models:user-progress-completed-tasks p))))))

(test tx-reset-progress-zeroes
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-reset-progress)
  (let ((p (study-plan.storage:current-progress)))
    (is (= 0 (study-plan.models:user-progress-xp p)))
    (is (= 0 (study-plan.models:user-progress-streak p)))
    (is (zerop (hash-table-count
                (study-plan.models:user-progress-completed-tasks p))))))

(test tx-overlay-task
  (reset-test-storage)
  (study-plan.storage:tx-overlay-task 3 "bronze" 0
                                      "Real problem text"
                                      "Real solution")
  (let ((ov (gethash "3-bronze-0" (study-plan.storage:get-overrides))))
    (is (not (null ov)))
    (is (equal "Real problem text" (study-plan.models:task-override-text ov)))))

(test tx-append-attempt-logs
  (reset-test-storage)
  (study-plan.storage:tx-append-attempt 1 "bronze" 0
                                        "my attempt"
                                        "correct"
                                        "looks good"
                                        "2026-04-10T12:00:00Z")
  (let ((root (study-plan.storage:current-root)))
    (is (= 1 (length (study-plan.models:study-root-attempts root))))))
```

- [ ] **Step 2: Run tests to verify they fail**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan/test)' 2>&1 | tail -20
```

Expected: compile error — `study-plan.storage` symbols not defined yet.

- [ ] **Step 3: Write `storage.lisp`**

Create `/workspace/study-plan/backend/storage.lisp`:
```lisp
;;; storage.lisp — cl-prevalence persistence for the study-plan mutable state.
;;;
;;; All mutations go through prevalence transactions so the log replays on restart.

(in-package #:study-plan.storage)

(defvar *prevalence-system* nil "The cl-prevalence system instance.")

(defun init-storage (data-dir)
  "Initialize cl-prevalence, replaying any existing journal in DATA-DIR."
  (ensure-directories-exist data-dir)
  (setf *prevalence-system*
        (cl-prevalence:make-prevalence-system data-dir))
  (unless (cl-prevalence:get-root-object *prevalence-system* :study)
    (setf (cl-prevalence:get-root-object *prevalence-system* :study)
          (make-study-root))
    (cl-prevalence:snapshot *prevalence-system*))
  *prevalence-system*)

(defun shutdown-storage ()
  (when *prevalence-system*
    (cl-prevalence:close-open-streams *prevalence-system*)
    (setf *prevalence-system* nil)))

(defun current-root ()
  (cl-prevalence:get-root-object *prevalence-system* :study))

(defun current-progress ()
  (study-root-progress (current-root)))

(defun get-overrides ()
  (study-root-overrides (current-root)))

(defun get-generated-for-day (day-id)
  (remove-if-not
   (lambda (gt) (= (generated-task-day-id gt) day-id))
   (study-root-generated (current-root))))

(defun get-chat-for-day (day-id)
  (gethash day-id (study-root-chat-logs (current-root))))

;;;---------------------------------------------------------------------------
;;; Transactions.
;;;
;;; Each tx-* is registered with cl-prevalence:execute so the mutation is
;;; journaled and will replay on restart.
;;;---------------------------------------------------------------------------

(defun %tx-complete-task (root day-id tier task-index today-iso)
  (let* ((p (study-root-progress root))
         (key (task-key day-id tier task-index)))
    (unless (gethash key (user-progress-completed-tasks p))
      (setf (gethash key (user-progress-completed-tasks p)) t)
      (incf (user-progress-xp p)
            (effective-xp tier (user-progress-streak p)))
      ;; Recompute day tier
      (let* ((day (find day-id study-plan.seed-data:*study-days*
                        :key #'study-day-id))
             (new-tier (when day
                         (compute-highest-tier day
                                               (user-progress-completed-tasks p)))))
        (when day
          (setf (gethash day-id (user-progress-day-tiers p)) new-tier)
          ;; If newly gold, update streak
          (when (string= new-tier "gold")
            (update-streak-after-gold p today-iso))))))
  root)

(defun tx-complete-task (day-id tier task-index today-iso)
  (cl-prevalence:execute-transaction
   (%tx-complete-task (current-root) day-id tier task-index today-iso)))

(defun %tx-uncomplete-task (root day-id tier task-index)
  (let* ((p (study-root-progress root))
         (key (task-key day-id tier task-index)))
    (remhash key (user-progress-completed-tasks p))
    (let* ((day (find day-id study-plan.seed-data:*study-days*
                      :key #'study-day-id)))
      (when day
        (setf (gethash day-id (user-progress-day-tiers p))
              (compute-highest-tier day
                                    (user-progress-completed-tasks p))))))
  root)

(defun tx-uncomplete-task (day-id tier task-index)
  (cl-prevalence:execute-transaction
   (%tx-uncomplete-task (current-root) day-id tier task-index)))

(defun %tx-reset-progress (root)
  (setf (study-root-progress root) (make-user-progress))
  root)

(defun tx-reset-progress ()
  (cl-prevalence:execute-transaction
   (%tx-reset-progress (current-root))))

(defun %tx-overlay-task (root day-id tier task-index text detail)
  (let ((key (task-key day-id tier task-index)))
    (setf (gethash key (study-root-overrides root))
          (make-task-override :text text :detail detail)))
  root)

(defun tx-overlay-task (day-id tier task-index text detail)
  (cl-prevalence:execute-transaction
   (%tx-overlay-task (current-root) day-id tier task-index text detail)))

(defun %tx-append-generated-task (root id day-id tier source-task-index text detail created-at)
  (push (make-generated-task :id id
                             :day-id day-id
                             :tier tier
                             :source-task-index source-task-index
                             :text text
                             :detail detail
                             :created-at created-at)
        (study-root-generated root))
  root)

(defun tx-append-generated-task (id day-id tier source-task-index text detail created-at)
  (cl-prevalence:execute-transaction
   (%tx-append-generated-task (current-root) id day-id tier source-task-index text detail created-at)))

(defun %tx-append-attempt (root day-id tier task-index text verdict comment timestamp)
  (push (make-attempt :day-id day-id
                      :tier tier
                      :task-index task-index
                      :text text
                      :verdict verdict
                      :comment comment
                      :timestamp timestamp)
        (study-root-attempts root))
  root)

(defun tx-append-attempt (day-id tier task-index text verdict comment timestamp)
  (cl-prevalence:execute-transaction
   (%tx-append-attempt (current-root) day-id tier task-index text verdict comment timestamp)))

(defun %tx-append-chat-message (root day-id role content tool-name timestamp)
  (let ((msg (make-chat-message :role role
                                :content content
                                :tool-name tool-name
                                :timestamp timestamp)))
    (setf (gethash day-id (study-root-chat-logs root))
          (append (gethash day-id (study-root-chat-logs root)) (list msg))))
  root)

(defun tx-append-chat-message (day-id role content tool-name timestamp)
  (cl-prevalence:execute-transaction
   (%tx-append-chat-message (current-root) day-id role content tool-name timestamp)))
```

- [ ] **Step 4: Run tests to verify they pass**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan/test)' \
  --eval '(study-plan.test:run-all)' 2>&1 | tail -30
```

Expected: all gamification + storage tests pass.

*(Note: cl-prevalence's `execute-transaction` macro wraps a percent-prefixed helper that takes the root as first arg. If the version in Quicklisp uses a different API — e.g., `execute` with a serializable form — adapt the `tx-*` wrappers accordingly by reading `~/quicklisp/dists/quicklisp/software/cl-prevalence-*/` before retrying.)*

---

## Task 8: Seed Data (7 Days)

**Files:**
- Create: `/workspace/study-plan/backend/seed-data.lisp`

- [ ] **Step 1: Write `seed-data.lisp`**

Create `/workspace/study-plan/backend/seed-data.lisp`:
```lisp
;;; seed-data.lisp — static 7-day study plan content.
;;;
;;; Task text follows scaffold-first strategy:
;;;   - Reconstructable from spec §7 solution notes: real LaTeX.
;;;   - Source-document references (e.g. §4.3.2 Problem 1): "(awaiting PDF) ..."
;;;
;;; Placeholders get filled in at runtime via the overlay pattern: merge-overrides
;;; reads from study-root.overrides and replaces matching placeholder items.

(in-package #:study-plan.seed-data)

(defun ti (text detail)
  (make-task-item :text text :detail detail))

(defvar *study-days*
  (list

   ;;===========================================================================
   ;; Phase 1 — Spectral Foundations
   ;;===========================================================================

   (make-study-day
    :id 1 :phase 1
    :phase-title "Spectral Foundations"
    :title "Eigenvalues & Diagonalizability"
    :icon "◈"
    :summary "Find eigenvalues for four 2x2/3x3 matrices, classify diagonalizability, build a Jordan-block counterexample."
    :key-insight "$A$ is diagonalizable $\\iff m_a(\\lambda) = m_g(\\lambda)$ for every eigenvalue $\\lambda$."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Find the eigenvalues of each matrix in Q1:
(i) $A_1 = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & -3 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}$,
(ii) $A_2 = \\begin{pmatrix} 7 & 3 \\\\ -3 & 7 \\end{pmatrix}$,
(iii) $A_3 = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$,
(iv) $A_4 = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$."
           "(i) Upper triangular: eigenvalues are on the diagonal — $2, -3, 1$.
(ii) $\\det(A_2 - \\lambda I) = (7-\\lambda)^2 + 9 = \\lambda^2 - 14\\lambda + 58 = 0 \\Rightarrow \\lambda = 7 \\pm 3i$.
(iii) $(3-\\lambda)^2 = 0 \\Rightarrow \\lambda = 3$ with algebraic multiplicity 2.
(iv) $(1-\\lambda)^2 - 9 = 0 \\Rightarrow \\lambda^2 - 2\\lambda - 8 = 0 \\Rightarrow \\lambda = 4, \\lambda = -2$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "For each matrix in Q1, determine whether it is diagonalizable. In particular verify that $A_3 = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$ has $\\lambda = 3$ with $m_a = 2$ but $m_g = 1$, and is therefore not diagonalizable."
           "$A_1$: three distinct real eigenvalues $\\Rightarrow$ diagonalizable over $\\mathbb{R}$.
$A_2$: two distinct complex eigenvalues $\\Rightarrow$ diagonalizable over $\\mathbb{C}$, not over $\\mathbb{R}$.
$A_3$: $(A_3 - 3I) = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$, rank 1 $\\Rightarrow$ kernel is 1-dimensional. $m_g(3) = 1 \\neq 2 = m_a(3)$. Not diagonalizable.
$A_4$: distinct real eigenvalues $4, -2$ $\\Rightarrow$ diagonalizable.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Construct a $3 \\times 3$ matrix with a repeated eigenvalue that is NOT diagonalizable. This is a Jordan block of size 3."
           "Take $J = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}$ for any $\\lambda$. Characteristic polynomial $(\\lambda - x)^3$, so $m_a(\\lambda) = 3$. But $(J - \\lambda I)$ has rank 2, so $\\dim \\ker(J - \\lambda I) = 1$, meaning $m_g(\\lambda) = 1 < 3$. Not diagonalizable.")))))

   (make-study-day
    :id 2 :phase 1
    :phase-title "Spectral Foundations"
    :title "Eigenvectors & Change of Basis Intro"
    :icon "◇"
    :summary "Find eigenvectors, express a vector in a non-standard basis, diagonalize a symmetric 2x2."
    :key-insight "When $B$ is orthonormal, $c_k = \\langle \\vec{u}, \\vec{v}_k \\rangle$. No matrix inversion needed."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Find the eigenvectors of $A_4 = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$ (Q1c)."
           "From Day 1, $\\lambda = 4$ and $\\lambda = -2$.
For $\\lambda = 4$: $(A - 4I)v = 0 \\Rightarrow \\begin{pmatrix} -3 & 3 \\\\ 3 & -3 \\end{pmatrix}v = 0 \\Rightarrow v_1 = (1, 1)$.
For $\\lambda = -2$: $\\begin{pmatrix} 3 & 3 \\\\ 3 & 3 \\end{pmatrix}v = 0 \\Rightarrow v_2 = (1, -1)$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "Q2: Express $\\vec{u} = (1, 2)$ in the basis $B = \\{(1,1), (1,-1)\\}$. Verify by reconstructing $\\vec{u}$ from the coordinates."
           "Solve $(1,2) = c_1(1,1) + c_2(1,-1)$: $c_1 + c_2 = 1$, $c_1 - c_2 = 2 \\Rightarrow c_1 = 3/2$, $c_2 = -1/2$.
Check: $(3/2)(1,1) + (-1/2)(1,-1) = (3/2 - 1/2, 3/2 + 1/2) = (1, 2)$. ✓")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Show the eigenvectors of $A_4$ are orthogonal, then diagonalize $A_4$ via $P^{-1}AP = D$."
           "$\\langle (1,1), (1,-1) \\rangle = 1 - 1 = 0$. Orthogonal.
$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1/2 & 1/2 \\\\ 1/2 & -1/2 \\end{pmatrix}$.
$P^{-1} A P = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$.")))))

   ;;===========================================================================
   ;; Phase 2 — Similar Matrices & Operators
   ;;===========================================================================

   (make-study-day
    :id 3 :phase 2
    :phase-title "Similar Matrices & Operators"
    :title "The Similarity Relation"
    :icon "◆"
    :summary "Compute a change-of-basis matrix, verify similarity invariants, diagnose diagonal T_B."
    :key-insight "$T_B = Q^{-1} T_A Q$. Similar matrices share det, trace, eigenvalues, rank."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.3.2 Problem 1 — compute $T_B$ from $T_A$ using the given change-of-basis."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.3.2 Problem 2 — plus: verify $\\det T_A = \\det T_B$ for the matrices in Problem 1."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "If $T_B$ (the matrix of a linear operator $T$ in basis $B$) happens to be diagonal, what does this say about the basis $B$?"
           "$B$ is an eigenbasis of $T$: each basis vector $b_i$ is an eigenvector of $T$ with eigenvalue $d_i = (T_B)_{ii}$. This is exactly the diagonalizability condition.")))))

   (make-study-day
    :id 4 :phase 2
    :phase-title "Similar Matrices & Operators"
    :title "Invertible Operators"
    :icon "◉"
    :summary "Check invertibility by determinant, kernel, and linear-independence; argue geometrically why a specific 2x2 is not invertible."
    :key-insight "Invertible $\\iff \\det T \\neq 0 \\iff$ columns linearly independent $\\iff \\ker f = \\{\\vec{0}\\}$."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.6 Problems 1–3 — check invertibility for each operator, and compute $f^{-1}$ where it exists."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.2.2 worked example — verify $f^{-1}(f(2, 1)) = (2, 1)$."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Without computing $T^{-1}$, explain why $f(x, y) = (2x - y, -4x + 2y)$ is not invertible."
           "The matrix is $\\begin{pmatrix} 2 & -1 \\\\ -4 & 2 \\end{pmatrix}$. The second row is $-2$ times the first, so $\\det = 4 - 4 = 0$. Geometrically, the image is the line spanned by $(2, -4)$ — $f$ collapses the plane onto a line, so it cannot be injective, so it cannot be invertible.")))))

   ;;===========================================================================
   ;; Phase 3 — Orthogonal & Symmetric Operators
   ;;===========================================================================

   (make-study-day
    :id 5 :phase 3
    :phase-title "Orthogonal & Symmetric Operators"
    :title "Orthogonal Operators"
    :icon "⬢"
    :summary "Verify the rotation matrix is orthogonal, classify operators as rotation vs reflection, prove O(n) is closed under multiplication."
    :key-insight "$|f(\\vec{v})| = |\\vec{v}|$ for all $\\vec{v}$; equivalently $A^t = A^{-1}$. Rigid motions: rotations ($\\det = +1$), reflections ($\\det = -1$)."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Verify that the rotation matrix $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ is orthogonal."
           "$R(\\theta)^t R(\\theta) = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} = \\begin{pmatrix} \\cos^2 + \\sin^2 & 0 \\\\ 0 & \\cos^2 + \\sin^2 \\end{pmatrix} = I$. ✓")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.6 Problem 18 — for each listed operator, decide whether it is orthogonal. For the ones that are, identify whether it is a rotation ($\\det = +1$) or a reflection ($\\det = -1$)."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Prove: the product of two orthogonal matrices is orthogonal — i.e., $O(n)$ is closed under multiplication."
           "Let $A, B$ be orthogonal: $A^t A = I$ and $B^t B = I$. Then $(AB)^t (AB) = B^t A^t A B = B^t I B = B^t B = I$. So $AB$ is orthogonal.")))))

   (make-study-day
    :id 6 :phase 3
    :phase-title "Orthogonal & Symmetric Operators"
    :title "Symmetric Operators"
    :icon "⬡"
    :summary "Check symmetry, verify the $\\langle f(u), v \\rangle = \\langle u, f(v) \\rangle$ identity, prove real eigenvalues for 2x2 symmetric."
    :key-insight "$A = A^t$. Spectral theorem: symmetric $\\Rightarrow$ real eigenvalues + orthogonally diagonalizable."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Verify that $f(x, y) = (2x + 4y, 4x - y)$ is symmetric with respect to the standard inner product."
           "Matrix: $A = \\begin{pmatrix} 2 & 4 \\\\ 4 & -1 \\end{pmatrix}$. Since $A^t = A$, $f$ is symmetric.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Verify $\\langle f(\\vec{u}), \\vec{v} \\rangle = \\langle \\vec{u}, f(\\vec{v}) \\rangle$ for the operator above and specific $\\vec{u}, \\vec{v}$. Plus: Steinbruch §4.6 Problem 34a — find $m, n$ that make a given operator symmetric."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Prove: every $2 \\times 2$ symmetric real matrix has real eigenvalues."
           "Let $A = \\begin{pmatrix} a & b \\\\ b & c \\end{pmatrix}$. Characteristic: $\\lambda^2 - (a+c)\\lambda + (ac - b^2) = 0$. Discriminant $= (a+c)^2 - 4(ac - b^2) = a^2 - 2ac + c^2 + 4b^2 = (a-c)^2 + 4b^2 \\ge 0$. Non-negative discriminant $\\Rightarrow$ real roots.")))))

   ;;===========================================================================
   ;; Phase 4 — Calculus Tune-Up
   ;;===========================================================================

   (make-study-day
    :id 7 :phase 4
    :phase-title "Calculus Tune-Up"
    :title "Chain Rule & Integration by Substitution"
    :icon "∂"
    :summary "Differentiate composite functions, apply product + chain rule, compute d/dt of a 2x2 determinant two ways."
    :key-insight "$\\frac{df}{dt} = \\frac{df}{dx}\\frac{dx}{dt}$ is the backbone of ODE techniques. Substitution = chain rule in reverse."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Q3(a): Differentiate $f(x(t)) = \\frac{1 + x^2}{1 + x}$ with $x(t) = 1 + t$, with respect to $t$."
           "$\\frac{df}{dx} = \\frac{2x(1+x) - (1+x^2)}{(1+x)^2} = \\frac{x^2 + 2x - 1}{(1+x)^2}$.
$\\frac{dx}{dt} = 1$.
$\\frac{df}{dt} = \\frac{df}{dx} \\cdot \\frac{dx}{dt} = \\frac{(1+t)^2 + 2(1+t) - 1}{(2+t)^2} = \\frac{t^2 + 4t + 2}{(2+t)^2}$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Q3(b,c) and Q4(a,b,c): product rule, chain rule, substitution integrals from the UFRJ self-assessment."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Compute $\\frac{d}{dt} \\det \\begin{pmatrix} e^t & t \\\\ t^2 & \\sin t \\end{pmatrix}$ two ways: (a) expand the determinant first, then differentiate; (b) apply Jacobi's formula $\\frac{d}{dt}\\det M = \\text{tr}(\\text{adj}(M) \\cdot \\dot M)$."
           "(a) $\\det = e^t \\sin t - t \\cdot t^2 = e^t \\sin t - t^3$.
$\\frac{d}{dt}(e^t \\sin t - t^3) = e^t \\sin t + e^t \\cos t - 3t^2 = e^t(\\sin t + \\cos t) - 3t^2$.
(b) $\\dot M = \\begin{pmatrix} e^t & 1 \\\\ 2t & \\cos t \\end{pmatrix}$, $\\text{adj}(M) = \\begin{pmatrix} \\sin t & -t \\\\ -t^2 & e^t \\end{pmatrix}$.
$\\text{adj}(M) \\dot M = \\begin{pmatrix} \\sin t \\cdot e^t - t \\cdot 2t & \\sin t - t \\cos t \\\\ -t^2 e^t + e^t \\cdot 2t & -t^2 + e^t \\cos t \\end{pmatrix}$.
Trace $= e^t \\sin t - 2t^2 - t^2 + e^t \\cos t = e^t(\\sin t + \\cos t) - 3t^2$. ✓"))))))

  "The full 7-day study plan. Placeholder tasks will be overlaid at runtime from
   the cl-prevalence overrides map.")

;;;---------------------------------------------------------------------------
;;; Overlay merge — runtime replacement of placeholder text/detail with
;;; values written by the ingest-pdf tool.
;;;---------------------------------------------------------------------------

(defun merge-overrides (days overrides)
  "Return a list of STUDY-DAYs with any matching overrides applied. OVERRIDES
   is a hash-table keyed by '{day-id}-{tier}-{task-index}' mapping to TASK-OVERRIDE.
   Does not mutate DAYS."
  (mapcar
   (lambda (day)
     (make-study-day
      :id (study-day-id day)
      :phase (study-day-phase day)
      :phase-title (study-day-phase-title day)
      :title (study-day-title day)
      :icon (study-day-icon day)
      :summary (study-day-summary day)
      :key-insight (study-day-key-insight day)
      :tasks
      (mapcar
       (lambda (group)
         (make-task-group
          :tier (task-group-tier group)
          :label (task-group-label group)
          :items
          (loop for item in (task-group-items group)
                for i from 0
                for key = (format nil "~D-~A-~D"
                                  (study-day-id day)
                                  (task-group-tier group)
                                  i)
                for ov = (gethash key overrides)
                collect (if ov
                            (make-task-item :text (task-override-text ov)
                                            :detail (task-override-detail ov))
                            item))))
       (study-day-tasks day))))
   days))
```

- [ ] **Step 2: Verify compile**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan)' 2>&1 | tail -10
```

Expected: `:study-plan` loads without errors. *(api.lisp and protocol.lisp are still missing stubs — they'll compile as empty files for now if ASDF complains. If so, create empty placeholder files with just `(in-package ...)` to let the system load.)*

- [ ] **Step 3: Create placeholder `api.lisp`, `protocol.lisp`, `server.lisp`**

Create three files so the full ASDF system loads:

`/workspace/study-plan/backend/api.lisp`:
```lisp
(in-package #:study-plan.api)
;; Implemented in Task 9.
```

`/workspace/study-plan/backend/protocol.lisp`:
```lisp
(in-package #:study-plan.protocol)
;; Implemented in Task 11.
```

`/workspace/study-plan/backend/server.lisp`:
```lisp
(in-package #:study-plan.server)
;; Implemented in Task 10.
```

- [ ] **Step 4: Verify full system loads**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan)' 2>&1 | tail -5
```

Expected: loads clean.

---

## Task 9: Overlay Merge Test

**Files:**
- Create: `/workspace/study-plan/backend/test/overlay-test.lisp`

- [ ] **Step 1: Write the test**

Create `/workspace/study-plan/backend/test/overlay-test.lisp`:
```lisp
;;; test/overlay-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(test overlay-replaces-placeholder
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal)))
    (setf (gethash "3-bronze-0" overrides)
          (study-plan.models:make-task-override
           :text "REAL Problem 1 text"
           :detail "REAL solution"))
    (let* ((merged (study-plan.seed-data:merge-overrides days overrides))
           (day3 (find 3 merged :key #'study-plan.models:study-day-id))
           (bronze (find "bronze" (study-plan.models:study-day-tasks day3)
                         :key #'study-plan.models:task-group-tier :test #'string=))
           (item (first (study-plan.models:task-group-items bronze))))
      (is (equal "REAL Problem 1 text"
                 (study-plan.models:task-item-text item))))))

(test overlay-is-non-destructive
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal))
         (original-day3 (find 3 days :key #'study-plan.models:study-day-id))
         (original-text (study-plan.models:task-item-text
                         (first (study-plan.models:task-group-items
                                 (first (study-plan.models:study-day-tasks original-day3)))))))
    (setf (gethash "3-bronze-0" overrides)
          (study-plan.models:make-task-override :text "override" :detail "d"))
    (study-plan.seed-data:merge-overrides days overrides)
    ;; Original seed must be untouched
    (is (equal original-text
               (study-plan.models:task-item-text
                (first (study-plan.models:task-group-items
                        (first (study-plan.models:study-day-tasks original-day3)))))))))

(test overlay-missing-keys-keep-original
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal))
         (merged (study-plan.seed-data:merge-overrides days overrides))
         (day1 (find 1 merged :key #'study-plan.models:study-day-id))
         (bronze (first (study-plan.models:study-day-tasks day1)))
         (item (first (study-plan.models:task-group-items bronze))))
    (is (search "Find the eigenvalues"
                (study-plan.models:task-item-text item)))))
```

- [ ] **Step 2: Run all backend tests**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan/test)' \
  --eval '(study-plan.test:run-all)' 2>&1 | tail -20
```

Expected: all tests pass (gamification + storage + overlay).

---

## Task 10: REST API Handlers

**Files:**
- Modify: `/workspace/study-plan/backend/api.lisp`

- [ ] **Step 1: Write `api.lisp`**

Replace `/workspace/study-plan/backend/api.lisp` contents with:
```lisp
;;; api.lisp — Hunchentoot REST handlers.

(in-package #:study-plan.api)

;;;---------------------------------------------------------------------------
;;; JSON helpers (cl-json emits hyphenated keys by default)
;;;---------------------------------------------------------------------------

(defun set-cors-headers ()
  (setf (hunchentoot:header-out "Access-Control-Allow-Origin") "*")
  (setf (hunchentoot:header-out "Access-Control-Allow-Methods") "GET, POST, OPTIONS")
  (setf (hunchentoot:header-out "Access-Control-Allow-Headers") "Content-Type"))

(defun json-response (obj)
  (set-cors-headers)
  (setf (hunchentoot:content-type*) "application/json")
  (cl-json:encode-json-to-string obj))

(defun read-request-json ()
  (let ((body (hunchentoot:raw-post-data :force-text t)))
    (when body
      (cl-json:decode-json-from-string body))))

(defmacro with-options (() &body body)
  `(cond
     ((eq (hunchentoot:request-method*) :options)
      (set-cors-headers)
      (setf (hunchentoot:return-code*) 204)
      "")
     (t (progn ,@body))))

;;;---------------------------------------------------------------------------
;;; Struct -> alist conversion (cl-json serializes alists as objects)
;;;---------------------------------------------------------------------------

(defun task-item-alist (item)
  `((:text . ,(task-item-text item))
    (:detail . ,(task-item-detail item))))

(defun task-group-alist (group)
  `((:tier . ,(task-group-tier group))
    (:label . ,(task-group-label group))
    (:items . ,(mapcar #'task-item-alist (task-group-items group)))))

(defun study-day-alist (day)
  `((:id . ,(study-day-id day))
    (:phase . ,(study-day-phase day))
    (:phase-title . ,(study-day-phase-title day))
    (:title . ,(study-day-title day))
    (:icon . ,(study-day-icon day))
    (:summary . ,(study-day-summary day))
    (:key-insight . ,(study-day-key-insight day))
    (:tasks . ,(mapcar #'task-group-alist (study-day-tasks day)))))

(defun progress-alist (p)
  (let ((completed-alist
          (loop for k being the hash-keys of (user-progress-completed-tasks p)
                  using (hash-value v)
                collect (cons k v)))
        (day-tiers-alist
          (loop for k being the hash-keys of (user-progress-day-tiers p)
                  using (hash-value v)
                collect (cons (format nil "~D" k) v))))
    `((:xp . ,(user-progress-xp p))
      (:streak . ,(user-progress-streak p))
      (:best-streak . ,(user-progress-best-streak p))
      (:last-completed . ,(user-progress-last-completed p))
      (:completed-tasks . ,completed-alist)
      (:day-tiers . ,day-tiers-alist))))

(defun generated-task-alist (gt)
  `((:id . ,(generated-task-id gt))
    (:day-id . ,(generated-task-day-id gt))
    (:tier . ,(generated-task-tier gt))
    (:source-task-index . ,(generated-task-source-task-index gt))
    (:text . ,(generated-task-text gt))
    (:detail . ,(generated-task-detail gt))
    (:created-at . ,(generated-task-created-at gt))))

;;;---------------------------------------------------------------------------
;;; Merged days helper
;;;---------------------------------------------------------------------------

(defun merged-days ()
  (merge-overrides *study-days* (get-overrides)))

;;;---------------------------------------------------------------------------
;;; Today's ISO date (server local)
;;;---------------------------------------------------------------------------

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

;;;---------------------------------------------------------------------------
;;; Handlers
;;;---------------------------------------------------------------------------

(defun handle-get-days ()
  (with-options ()
    (json-response (mapcar #'study-day-alist (merged-days)))))

(defun handle-get-day ()
  (with-options ()
    (let* ((id-str (hunchentoot:get-parameter "id"))
           (id (and id-str (parse-integer id-str :junk-allowed t))))
      (if (null id)
          (progn (setf (hunchentoot:return-code*) 400)
                 (json-response `((:error . "missing id"))))
          (let ((day (find id (merged-days) :key #'study-day-id)))
            (if day
                (json-response (study-day-alist day))
                (progn (setf (hunchentoot:return-code*) 404)
                       (json-response `((:error . "day not found"))))))))))

(defun handle-get-progress ()
  (with-options ()
    (json-response (progress-alist (current-progress)))))

(defun alist-get (alist key)
  (cdr (assoc key alist)))

(defun handle-post-complete ()
  (with-options ()
    (let* ((body (read-request-json))
           (day-id (alist-get body :day--id))
           (tier (alist-get body :tier))
           (task-index (alist-get body :task--index)))
      (tx-complete-task day-id tier task-index (today-iso))
      (json-response (progress-alist (current-progress))))))

(defun handle-post-uncomplete ()
  (with-options ()
    (let* ((body (read-request-json))
           (day-id (alist-get body :day--id))
           (tier (alist-get body :tier))
           (task-index (alist-get body :task--index)))
      (tx-uncomplete-task day-id tier task-index)
      (json-response (progress-alist (current-progress))))))

(defun handle-post-reset ()
  (with-options ()
    (tx-reset-progress)
    (json-response (progress-alist (current-progress)))))

(defun handle-get-generated ()
  (with-options ()
    (let* ((id-str (hunchentoot:get-parameter "day-id"))
           (id (and id-str (parse-integer id-str :junk-allowed t))))
      (if (null id)
          (progn (setf (hunchentoot:return-code*) 400)
                 (json-response `((:error . "missing day-id"))))
          (json-response (mapcar #'generated-task-alist
                                 (get-generated-for-day id)))))))

;;;---------------------------------------------------------------------------
;;; Route table — called by server.lisp at startup
;;;---------------------------------------------------------------------------

(defun define-study-routes ()
  (setf hunchentoot:*dispatch-table*
        (list (hunchentoot:create-regex-dispatcher "^/api/days$" 'handle-get-days)
              (hunchentoot:create-regex-dispatcher "^/api/day$" 'handle-get-day)
              (hunchentoot:create-regex-dispatcher "^/api/progress$" 'handle-get-progress)
              (hunchentoot:create-regex-dispatcher "^/api/progress/complete$" 'handle-post-complete)
              (hunchentoot:create-regex-dispatcher "^/api/progress/uncomplete$" 'handle-post-uncomplete)
              (hunchentoot:create-regex-dispatcher "^/api/progress/reset$" 'handle-post-reset)
              (hunchentoot:create-regex-dispatcher "^/api/generated$" 'handle-get-generated)
              (hunchentoot:create-folder-dispatcher-and-handler "/" "/tmp/study-plan-static/"))))
```

*(Note on cl-json key conversion: cl-json converts `:day-id` → `dayId` (camelCase) in JSON output. The incoming request body uses `day-id` in JSON which cl-json parses back to the keyword `:day--id` — the double dash is cl-json's default. The handler reads `:day--id` accordingly. If this feels weird, `(let ((cl-json:*json-identifier-name-to-lisp* ...))` can tune it — but the default round-trips are fine for our hyphenated convention.)*

*(Implementation note: `*json-identifier-name-to-lisp*` and `*lisp-identifier-name-to-json*` may need tuning. If the default produces camelCase on output but we want hyphenated, wrap handlers with `(let ((cl-json:*lisp-identifier-name-to-json* #'string-downcase)) ...)`. Test this in step 3 below.)*

- [ ] **Step 2: Verify compile**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(push #p"./" asdf:*central-registry*)' \
  --eval '(ql:quickload :study-plan)' 2>&1 | tail -5
```

Expected: clean load.

- [ ] **Step 3: Verify JSON key format round-trips**

Run:
```bash
cd /workspace/study-plan/backend && \
sbcl --non-interactive \
  --eval '(ql:quickload :cl-json)' \
  --eval '(print (cl-json:encode-json-to-string (quote ((:phase-title . "test") (:day-id . 1)))))' 2>&1 | tail -5
```

Expected output contains: `{"phaseTitle":"test","dayId":1}`.

If output uses `phaseTitle` (camelCase) as expected, update the frontend `camelizeKeys` to be a no-op (the CL side already emits camelCase), OR wrap handlers with `(let ((cl-json:*lisp-identifier-name-to-json* (lambda (s) (substitute #\- #\_ (string-downcase s))))) ...)` to force hyphenated output to match the spec §4. Choose the hyphenated approach so the spec is honored — update `json-response` to:

```lisp
(defun json-response (obj)
  (set-cors-headers)
  (setf (hunchentoot:content-type*) "application/json")
  (let ((cl-json:*lisp-identifier-name-to-json* #'string-downcase))
    (cl-json:encode-json-to-string obj)))
```

This gives `phase-title` → `"phase-title"` in JSON. Frontend `camelizeKeys` then handles hyphen → camelCase as spec requires.

---

## Task 11: Server Entry Point + Smoke Test

**Files:**
- Modify: `/workspace/study-plan/backend/server.lisp`
- Create: `/workspace/study-plan/backend/run.lisp`

- [ ] **Step 1: Write `server.lisp`**

Replace `/workspace/study-plan/backend/server.lisp` contents with:
```lisp
;;; server.lisp — Hunchentoot acceptor lifecycle.

(in-package #:study-plan.server)

(defvar *acceptor* nil)

(defun start-server (&key (port 4000) (data-dir "./data/"))
  (when *acceptor*
    (error "Server already running. Call stop-server first."))
  (study-plan.storage:init-storage data-dir)
  (study-plan.api:define-study-routes)
  (setf *acceptor*
        (make-instance 'hunchentoot:easy-acceptor :port port))
  (hunchentoot:start *acceptor*)
  (format t "~&[study-plan] REST server on http://localhost:~D~%" port)
  *acceptor*)

(defun stop-server ()
  (when *acceptor*
    (hunchentoot:stop *acceptor*)
    (setf *acceptor* nil))
  (study-plan.storage:shutdown-storage))
```

- [ ] **Step 2: Write `run.lisp`**

Create `/workspace/study-plan/backend/run.lisp`:
```lisp
;;; run.lisp — entry point for `sbcl --load run.lisp`.

(push #p"./" asdf:*central-registry*)
(ql:quickload :study-plan)

(study-plan.server:start-server :port 4000 :data-dir "./data/")

;; Keep the process alive.
(loop (sleep 86400))
```

- [ ] **Step 3: Smoke test — start server**

Run in the background:
```bash
cd /workspace/study-plan/backend && sbcl --load run.lisp &
SERVER_PID=$!
sleep 5
```

- [ ] **Step 4: Smoke test — curl the API**

Run:
```bash
curl -s http://localhost:4000/api/days | head -c 500
echo
curl -s http://localhost:4000/api/progress
echo
curl -s -X POST -H "Content-Type: application/json" \
     -d '{"day-id":1,"tier":"bronze","task-index":0}' \
     http://localhost:4000/api/progress/complete
```

Expected:
- First curl: JSON array starting with the Day 1 eigenvalue day.
- Second curl: `{"xp":0,"streak":0,...}`.
- Third curl: `{"xp":10,"streak":0,...,"completed-tasks":{"1-bronze-0":true},...}`.

- [ ] **Step 5: Stop the server**

Run:
```bash
kill $SERVER_PID 2>/dev/null
wait $SERVER_PID 2>/dev/null
```

---

## Task 12: WebSocket Protocol (adapt protocol.lisp)

**Files:**
- Modify: `/workspace/study-plan/backend/protocol.lisp`

- [ ] **Step 1: Study the lisp-agent protocol dispatch pattern**

Read `/workspace/lisp-agent/cl/src/protocol.lisp` lines 76 onwards to see how `handle-message` dispatches by the head symbol of the incoming s-expression.

- [ ] **Step 2: Write `protocol.lisp`**

Replace `/workspace/study-plan/backend/protocol.lisp` contents with:
```lisp
;;; protocol.lisp — s-expression WebSocket command dispatch for LLM tools.
;;;
;;; Wire format:
;;;   request:  (call <tool-name> <alist> <request-id>)
;;;   ok:       (ok <request-id> <result-sexp>)
;;;   err:      (err <request-id> "<message>")

(in-package #:study-plan.protocol)

(defun alist-get (alist key)
  (second (assoc key alist :test #'string=)))

;;;---------------------------------------------------------------------------
;;; Response builders
;;;---------------------------------------------------------------------------

(defun make-ok-response (request-id result-sexp)
  (format nil "(ok ~A ~A)" request-id result-sexp))

(defun make-err-response (request-id message)
  (format nil "(err ~A \"~A\")" request-id
          (cl-ppcre:regex-replace-all "\"" message "\\\"")))

;;;---------------------------------------------------------------------------
;;; Tool implementations
;;;---------------------------------------------------------------------------

(defun sexp-quote (s)
  "Wrap string S as an s-expression quoted token."
  (format nil "\"~A\""
          (cl-ppcre:regex-replace-all "\"" (or s "") "\\\"")))

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

(defun task-item-to-sexp (item)
  (format nil "(item ~A ~A)"
          (sexp-quote (study-plan.models:task-item-text item))
          (sexp-quote (study-plan.models:task-item-detail item))))

(defun task-group-to-sexp (group)
  (format nil "(group ~A ~A (~{~A~^ ~}))"
          (sexp-quote (study-plan.models:task-group-tier group))
          (sexp-quote (study-plan.models:task-group-label group))
          (mapcar #'task-item-to-sexp (study-plan.models:task-group-items group))))

(defun study-day-to-sexp (day)
  (format nil "(day ~D ~A ~A ~A ~A ~A (~{~A~^ ~}))"
          (study-plan.models:study-day-id day)
          (sexp-quote (study-plan.models:study-day-title day))
          (sexp-quote (study-plan.models:study-day-phase-title day))
          (sexp-quote (study-plan.models:study-day-icon day))
          (sexp-quote (study-plan.models:study-day-summary day))
          (sexp-quote (study-plan.models:study-day-key-insight day))
          (mapcar #'task-group-to-sexp (study-plan.models:study-day-tasks day))))

(defun merged-days ()
  (study-plan.seed-data:merge-overrides
   study-plan.seed-data:*study-days*
   (study-plan.storage:get-overrides)))

;;;---------------------------------------------------------------------------
;;; Tools
;;;---------------------------------------------------------------------------

(defun tool-fetch-day (args)
  (let* ((id (alist-get args "day-id"))
         (id (if (stringp id) (parse-integer id) id))
         (day (find id (merged-days) :key #'study-plan.models:study-day-id)))
    (if day
        (study-day-to-sexp day)
        "(err \"day not found\")")))

(defun tool-fetch-task (args)
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (tier (alist-get args "tier"))
         (idx (parse-integer (alist-get args "task-index")))
         (day (find day-id (merged-days) :key #'study-plan.models:study-day-id))
         (group (and day (find tier (study-plan.models:study-day-tasks day)
                               :key #'study-plan.models:task-group-tier
                               :test #'string=)))
         (item (and group (nth idx (study-plan.models:task-group-items group)))))
    (if item
        (task-item-to-sexp item)
        "(err \"task not found\")")))

(defun tool-mark-task-complete (args)
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (tier (alist-get args "tier"))
         (idx (parse-integer (alist-get args "task-index"))))
    (study-plan.storage:tx-complete-task day-id tier idx (today-iso))
    (format nil "(ok ~D)" (study-plan.models:user-progress-xp
                           (study-plan.storage:current-progress)))))

(defun tool-get-progress (args)
  (declare (ignore args))
  (let ((p (study-plan.storage:current-progress)))
    (format nil "(progress (xp ~D) (streak ~D) (best-streak ~D))"
            (study-plan.models:user-progress-xp p)
            (study-plan.models:user-progress-streak p)
            (study-plan.models:user-progress-best-streak p))))

(defun tool-overlay-task (args)
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (tier (alist-get args "tier"))
         (idx (parse-integer (alist-get args "task-index")))
         (text (alist-get args "text"))
         (detail (alist-get args "detail")))
    (study-plan.storage:tx-overlay-task day-id tier idx text detail)
    "(ok)"))

(defun tool-append-generated-task (args)
  (let* ((id (alist-get args "id"))
         (day-id (parse-integer (alist-get args "day-id")))
         (tier (alist-get args "tier"))
         (source-idx (parse-integer (alist-get args "source-task-index")))
         (text (alist-get args "text"))
         (detail (alist-get args "detail")))
    (study-plan.storage:tx-append-generated-task id day-id tier source-idx text detail (today-iso))
    "(ok)"))

(defun tool-grade-attempt (args)
  ;; The LLM has already decided the verdict (it grades before calling this tool).
  ;; This tool only logs the attempt.
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (tier (alist-get args "tier"))
         (idx (parse-integer (alist-get args "task-index")))
         (text (alist-get args "text"))
         (verdict (alist-get args "verdict"))
         (comment (alist-get args "comment")))
    (study-plan.storage:tx-append-attempt day-id tier idx text verdict comment
                                          (local-time:format-timestring nil (local-time:now)))
    "(ok)"))

(defun tool-append-chat (args)
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (role (alist-get args "role"))
         (content (alist-get args "content"))
         (tool-name (alist-get args "tool-name")))
    (study-plan.storage:tx-append-chat-message day-id role content tool-name
                                               (local-time:format-timestring nil (local-time:now)))
    "(ok)"))

(defun tool-get-chat (args)
  (let* ((day-id (parse-integer (alist-get args "day-id")))
         (messages (study-plan.storage:get-chat-for-day day-id)))
    (format nil "(messages ~{~A~^ ~})"
            (mapcar (lambda (m)
                      (format nil "(msg ~A ~A)"
                              (sexp-quote (study-plan.models:chat-message-role m))
                              (sexp-quote (study-plan.models:chat-message-content m))))
                    messages))))

;;;---------------------------------------------------------------------------
;;; Dispatch
;;;---------------------------------------------------------------------------

(defparameter *tool-dispatch*
  '(("fetch-day" . tool-fetch-day)
    ("fetch-task" . tool-fetch-task)
    ("mark-task-complete" . tool-mark-task-complete)
    ("get-progress" . tool-get-progress)
    ("overlay-task" . tool-overlay-task)
    ("append-generated-task" . tool-append-generated-task)
    ("grade-attempt" . tool-grade-attempt)
    ("append-chat" . tool-append-chat)
    ("get-chat" . tool-get-chat)))

(defun dispatch-tool (tool-name args)
  (let ((fn (cdr (assoc tool-name *tool-dispatch* :test #'string=))))
    (if fn
        (funcall fn args)
        (format nil "(err \"unknown tool: ~A\")" tool-name))))

;;;---------------------------------------------------------------------------
;;; Entry point called by the hunchensocket resource on each incoming frame.
;;;---------------------------------------------------------------------------

(defun parse-call-frame (raw)
  "Parse '(call tool-name ((k1 v1) (k2 v2)) request-id)' by a lightweight
   s-expression reader. Returns (values tool-name args-alist request-id) or NIL."
  (let ((*package* (find-package '#:keyword)))
    (handler-case
        (let ((form (let ((*readtable* (copy-readtable nil)))
                      (read-from-string raw))))
          ;; form = (CALL "tool-name" ((k v) ...) "id")
          (when (and (listp form) (eq (first form) :call))
            (values (second form)
                    (third form)
                    (fourth form))))
      (error () nil))))

(defun handle-ws-message (raw)
  "Parse a (call ...) frame and return an (ok ...) or (err ...) s-expression string."
  (multiple-value-bind (tool args request-id) (parse-call-frame raw)
    (cond
      ((null tool)
       (make-err-response "unknown" "failed to parse frame"))
      (t
       (handler-case
           (let ((result (dispatch-tool tool
                                        (mapcar (lambda (pair)
                                                  (list (string-downcase (symbol-name (first pair)))
                                                        (second pair)))
                                                args))))
             (make-ok-response request-id result))
         (error (e)
           (make-err-response request-id (format nil "~A" e))))))))
```

*(Note: the above frame parser uses Lisp's own `read-from-string` to parse the s-expression, reading symbols as keywords. If tool args need structured sub-forms, we'll iterate; for v1 flat alists of string keys are enough.)*

- [ ] **Step 3: Update `server.lisp` to also start the WebSocket listener**

Read `/workspace/study-plan/backend/server.lisp`, then replace it with:
```lisp
;;; server.lisp — Hunchentoot + hunchensocket acceptor lifecycle.

(in-package #:study-plan.server)

(defvar *acceptor* nil)

;;; hunchensocket resource for /ws

(defclass ws-resource (hunchensocket:websocket-resource)
  ()
  (:default-initargs :client-class 'hunchensocket:websocket-client))

(defvar *ws-resource* (make-instance 'ws-resource))

(defmethod hunchensocket:text-message-received ((resource ws-resource) client message)
  (let ((response (study-plan.protocol:handle-ws-message message)))
    (hunchensocket:send-text-message client response)))

(defun ws-dispatcher (request)
  (when (equal (hunchentoot:script-name request) "/ws")
    *ws-resource*))

;;; Acceptor class that serves both HTTP and WS on the same port

(defclass study-acceptor (hunchensocket:websocket-acceptor hunchentoot:easy-acceptor)
  ())

(defun start-server (&key (port 4000) (data-dir "./data/"))
  (when *acceptor*
    (error "Server already running. Call stop-server first."))
  (pushnew 'ws-dispatcher hunchensocket:*websocket-dispatchers*)
  (study-plan.storage:init-storage data-dir)
  (study-plan.api:define-study-routes)
  (setf *acceptor*
        (make-instance 'study-acceptor :port port))
  (hunchentoot:start *acceptor*)
  (format t "~&[study-plan] HTTP on http://localhost:~D  WS on ws://localhost:~D/ws~%" port port)
  *acceptor*)

(defun stop-server ()
  (when *acceptor*
    (hunchentoot:stop *acceptor*)
    (setf *acceptor* nil))
  (setf hunchensocket:*websocket-dispatchers*
        (remove 'ws-dispatcher hunchensocket:*websocket-dispatchers*))
  (study-plan.storage:shutdown-storage))
```

- [ ] **Step 4: Verify load + WS smoke test**

Run in background:
```bash
cd /workspace/study-plan/backend && sbcl --load run.lisp &
SERVER_PID=$!
sleep 5
```

Test WS with a tiny Python client (avoids installing wscat):
```bash
python3 -c '
import asyncio, websockets
async def t():
    async with websockets.connect("ws://localhost:4000/ws") as ws:
        await ws.send("(call \"get-progress\" () \"r1\")")
        print(await ws.recv())
asyncio.run(t())
'
```

Expected: `(ok r1 (progress (xp 0) (streak 0) (best-streak 0)))` or similar.

Stop:
```bash
kill $SERVER_PID 2>/dev/null; wait $SERVER_PID 2>/dev/null
```

---

## Task 13: Next.js Frontend Init

**Files:**
- Create: `/workspace/study-plan/frontend/package.json`
- Create: `/workspace/study-plan/frontend/tsconfig.json`
- Create: `/workspace/study-plan/frontend/next.config.js`
- Create: `/workspace/study-plan/frontend/tailwind.config.ts`
- Create: `/workspace/study-plan/frontend/postcss.config.js`

- [ ] **Step 1: Write `package.json`**

Create `/workspace/study-plan/frontend/package.json`:
```json
{
  "name": "study-plan-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.5",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "katex": "0.16.11",
    "framer-motion": "11.3.19",
    "lucide-react": "0.414.0",
    "zod": "3.23.8"
  },
  "devDependencies": {
    "@types/node": "20.14.10",
    "@types/react": "18.3.3",
    "@types/react-dom": "18.3.0",
    "typescript": "5.5.3",
    "tailwindcss": "3.4.6",
    "postcss": "8.4.39",
    "autoprefixer": "10.4.19"
  }
}
```

- [ ] **Step 2: Write `tsconfig.json`**

Create `/workspace/study-plan/frontend/tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 3: Write `next.config.js`**

Create `/workspace/study-plan/frontend/next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/api/:path*', destination: 'http://localhost:4000/api/:path*' },
    ];
  },
};
module.exports = nextConfig;
```

- [ ] **Step 4: Write `tailwind.config.ts`**

Create `/workspace/study-plan/frontend/tailwind.config.ts`:
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0f0f1a",
        paper: "#f5f0e8",
        bronze: "#cd7f32",
        silver: "#c0c0c0",
        gold: "#ffd700",
        phase1: "#6366f1",
        phase2: "#8b5cf6",
        phase3: "#ec4899",
        phase4: "#f59e0b",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Source Sans 3", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 5: Write `postcss.config.js`**

Create `/workspace/study-plan/frontend/postcss.config.js`:
```js
module.exports = {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

- [ ] **Step 6: Install dependencies**

Run:
```bash
cd /workspace/study-plan/frontend && npm install 2>&1 | tail -5
```

Expected: installs without errors.

---

## Task 14: Global styles + fonts

**Files:**
- Create: `/workspace/study-plan/frontend/src/styles/globals.css`

- [ ] **Step 1: Write `globals.css`**

Create `/workspace/study-plan/frontend/src/styles/globals.css`:
```css
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Sans+3:wght@300;400;600&family=JetBrains+Mono:wght@400;600&display=swap");
@import url("https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css");

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  background: #0f0f1a;
  color: #f5f0e8;
  font-family: "Source Sans 3", sans-serif;
}

h1, h2, h3, h4 {
  font-family: "Playfair Display", serif;
  letter-spacing: -0.01em;
}

::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-track { background: #0f0f1a; }
::-webkit-scrollbar-thumb { background: #2a2a3f; border-radius: 5px; }
::-webkit-scrollbar-thumb:hover { background: #3a3a4f; }

.katex { color: #f5f0e8; }
```

---

## Task 15: Types, API client, camelizeKeys

**Files:**
- Create: `/workspace/study-plan/frontend/src/lib/types.ts`
- Create: `/workspace/study-plan/frontend/src/lib/api.ts`

- [ ] **Step 1: Write `types.ts`**

Create `/workspace/study-plan/frontend/src/lib/types.ts`:
```ts
export type Tier = "bronze" | "silver" | "gold";
export type DayTier = Tier | "none";

export interface TaskItem {
  text: string;
  detail: string;
}

export interface TaskGroup {
  tier: Tier;
  label: string;
  items: TaskItem[];
}

export interface StudyDay {
  id: number;
  phase: number;
  phaseTitle: string;
  title: string;
  icon: string;
  summary: string;
  keyInsight: string;
  tasks: TaskGroup[];
}

export interface UserProgress {
  xp: number;
  streak: number;
  bestStreak: number;
  lastCompleted: string | null;
  completedTasks: Record<string, boolean>;
  dayTiers: Record<string, DayTier>;
}

export interface GeneratedTask {
  id: string;
  dayId: number;
  tier: Tier;
  sourceTaskIndex: number;
  text: string;
  detail: string;
  createdAt: string;
}

export type ChatRole = "user" | "assistant" | "tool";

export interface ChatMessage {
  role: ChatRole;
  content: string;
  toolName: string | null;
  timestamp: string;
}

export type ConnectionStatus = "connecting" | "connected" | "disconnected";

export type LlmProvider = "zai";

export interface LlmConfig {
  provider: LlmProvider;
  apiKey: string;
  model: string;
  baseUrl: string;
}
```

- [ ] **Step 2: Write `api.ts` with camelizeKeys**

Create `/workspace/study-plan/frontend/src/lib/api.ts`:
```ts
import type { StudyDay, UserProgress, GeneratedTask, Tier } from "./types";

export function camelizeKey(key: string): string {
  return key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function camelizeKeys<T>(obj: unknown): T {
  if (Array.isArray(obj)) return obj.map(camelizeKeys) as unknown as T;
  if (obj !== null && typeof obj === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      out[camelizeKey(k)] = camelizeKeys(v);
    }
    return out as T;
  }
  return obj as T;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

async function post<T>(path: string, body: object): Promise<T> {
  const res = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${path}: ${res.status}`);
  return camelizeKeys<T>(await res.json());
}

export const api = {
  fetchDays: () => get<StudyDay[]>("/api/days"),
  fetchDay: (id: number) => get<StudyDay>(`/api/day?id=${id}`),
  fetchProgress: () => get<UserProgress>("/api/progress"),
  complete: (dayId: number, tier: Tier, taskIndex: number) =>
    post<UserProgress>("/api/progress/complete", {
      "day-id": dayId, tier, "task-index": taskIndex,
    }),
  uncomplete: (dayId: number, tier: Tier, taskIndex: number) =>
    post<UserProgress>("/api/progress/uncomplete", {
      "day-id": dayId, tier, "task-index": taskIndex,
    }),
  reset: () => post<UserProgress>("/api/progress/reset", {}),
  fetchGenerated: (dayId: number) =>
    get<GeneratedTask[]>(`/api/generated?day-id=${dayId}`),
};
```

---

## Task 16: Copy sexp.ts, ws.ts from lisp-agent

**Files:**
- Create: `/workspace/study-plan/frontend/src/lib/sexp.ts`
- Create: `/workspace/study-plan/frontend/src/lib/ws.ts`

- [ ] **Step 1: Copy sexp.ts**

Run:
```bash
cp /workspace/lisp-agent/web/src/sexp.ts /workspace/study-plan/frontend/src/lib/sexp.ts
```

- [ ] **Step 2: Copy and adapt ws.ts**

Run:
```bash
cp /workspace/lisp-agent/web/src/ws.ts /workspace/study-plan/frontend/src/lib/ws.ts
```

Then edit `/workspace/study-plan/frontend/src/lib/ws.ts`:

Change the import:

Old:
```ts
import type { ConnectionStatus } from "./types";
```

New:
```ts
import type { ConnectionStatus } from "./types";
```

*(Path is identical — types.ts is in the same `lib/` directory. No change needed. Verify import resolves.)*

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 17: Tools layer (Zod schemas + sexp translation)

**Files:**
- Create: `/workspace/study-plan/frontend/src/lib/tools.ts`

- [ ] **Step 1: Write `tools.ts`**

Create `/workspace/study-plan/frontend/src/lib/tools.ts`:
```ts
import { z } from "zod";
import { writeSexp } from "./sexp";

/*
 * Tool schemas for the study-plan LLM tutor. Each tool has:
 *   - a Zod schema for validation
 *   - an sexp encoder (args -> s-expression alist)
 *
 * Call frame format: (call "tool-name" ((key "value") ...) "request-id")
 */

export const fetchDaySchema = z.object({ dayId: z.number() });
export const fetchTaskSchema = z.object({
  dayId: z.number(), tier: z.enum(["bronze", "silver", "gold"]), taskIndex: z.number(),
});
export const markTaskCompleteSchema = fetchTaskSchema;
export const overlayTaskSchema = z.object({
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
  text: z.string(),
  detail: z.string(),
});
export const gradeAttemptSchema = z.object({
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  taskIndex: z.number(),
  text: z.string(),
  verdict: z.enum(["correct", "partial", "wrong"]),
  comment: z.string(),
});
export const appendGeneratedTaskSchema = z.object({
  id: z.string(),
  dayId: z.number(),
  tier: z.enum(["bronze", "silver", "gold"]),
  sourceTaskIndex: z.number(),
  text: z.string(),
  detail: z.string(),
});
export const appendChatSchema = z.object({
  dayId: z.number(),
  role: z.enum(["user", "assistant", "tool"]),
  content: z.string(),
  toolName: z.string().nullable(),
});
export const getChatSchema = z.object({ dayId: z.number() });
export const getProgressSchema = z.object({});

export type ToolName =
  | "fetch-day" | "fetch-task" | "mark-task-complete"
  | "overlay-task" | "grade-attempt" | "append-generated-task"
  | "append-chat" | "get-chat" | "get-progress";

export const toolSchemas: Record<ToolName, z.ZodTypeAny> = {
  "fetch-day": fetchDaySchema,
  "fetch-task": fetchTaskSchema,
  "mark-task-complete": markTaskCompleteSchema,
  "overlay-task": overlayTaskSchema,
  "grade-attempt": gradeAttemptSchema,
  "append-generated-task": appendGeneratedTaskSchema,
  "append-chat": appendChatSchema,
  "get-chat": getChatSchema,
  "get-progress": getProgressSchema,
};

function kebab(key: string): string {
  return key.replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function quote(s: string): string {
  return `"${s.replace(/"/g, '\\"')}"`;
}

function encodeValue(v: unknown): string {
  if (typeof v === "string") return quote(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v === null) return "nil";
  return quote(String(v));
}

export function encodeToolCall(name: ToolName, args: object, requestId: string): string {
  const pairs = Object.entries(args).map(([k, v]) => `(${kebab(k)} ${encodeValue(v)})`);
  return `(call ${quote(name)} (${pairs.join(" ")}) ${quote(requestId)})`;
}

export function validateAndEncode(
  name: ToolName,
  rawArgs: unknown,
): { ok: true; frame: string; args: object; requestId: string } | { ok: false; error: string } {
  const schema = toolSchemas[name];
  const parsed = schema.safeParse(rawArgs);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.message };
  }
  const requestId = Math.random().toString(36).slice(2, 10);
  return { ok: true, frame: encodeToolCall(name, parsed.data, requestId), args: parsed.data, requestId };
}

// Re-export for callers that want to round-trip sexp
export { writeSexp };
```

- [ ] **Step 2: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 18: Settings module (copy + adapt)

**Files:**
- Create: `/workspace/study-plan/frontend/src/lib/settings.ts`

- [ ] **Step 1: Write `settings.ts`**

Create `/workspace/study-plan/frontend/src/lib/settings.ts` (adapted from lisp-agent, z.ai only):
```ts
import type { LlmConfig } from "./types";

const STORAGE_KEY = "study-plan-settings";

const DEFAULT_CONFIG: LlmConfig = {
  provider: "zai",
  apiKey: "",
  model: "GLM-4.7-Flash",
  baseUrl: "https://api.z.ai/api/coding/paas/v4",
};

export interface ModelOption { id: string; label: string; }

export const MODEL_OPTIONS: ModelOption[] = [
  { id: "GLM-5.1", label: "GLM-5.1" },
  { id: "GLM-5", label: "GLM-5" },
  { id: "GLM-5-Turbo", label: "GLM-5 Turbo" },
  { id: "GLM-4.7-Flash", label: "GLM-4.7 Flash" },
];

export function loadConfig(): LlmConfig {
  if (typeof window === "undefined") return DEFAULT_CONFIG;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw) as Partial<LlmConfig>;
    return {
      provider: "zai",
      apiKey: parsed.apiKey ?? DEFAULT_CONFIG.apiKey,
      model: parsed.model ?? DEFAULT_CONFIG.model,
      baseUrl: parsed.baseUrl ?? DEFAULT_CONFIG.baseUrl,
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function saveConfig(config: LlmConfig): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
}

export function isConfigured(config: LlmConfig): boolean {
  return config.apiKey.length > 0;
}
```

---

## Task 19: LLM client (adapt lisp-agent llm.ts)

**Files:**
- Create: `/workspace/study-plan/frontend/src/lib/llm.ts`

- [ ] **Step 1: Read lisp-agent's llm.ts**

Read `/workspace/lisp-agent/web/src/llm.ts` to understand its z.ai client shape (fetch to `/chat/completions`, tool-call loop, stream vs non-stream).

- [ ] **Step 2: Write adapted `llm.ts`**

Create `/workspace/study-plan/frontend/src/lib/llm.ts`:
```ts
import type { LlmConfig, ChatMessage } from "./types";
import type { ToolName } from "./tools";

export const STUDY_TUTOR_SYSTEM_PROMPT = `
You are a patient, concise linear-algebra and ODE tutor embedded in a 7-day study plan app.

Your job:
- Help the user work through the current day's problems via active recall.
- When asked for a hint, nudge without revealing the solution. Escalate gradually.
- When asked to grade an attempt, compare it to the internal "detail" solution and call the grade-attempt tool with verdict: "correct" | "partial" | "wrong" plus a short, specific comment.
- When asked to generate a similar problem, produce a new problem in the same family and call append-generated-task with its text and worked solution.
- When asked to ingest a PDF, extract the problems it contains, map them to spec references (e.g. "§4.3.2 Problem 1"), and for each extraction call overlay-task. Show each extraction in chat for the user to confirm before committing.
- When the user confirms a task is done, call mark-task-complete.

Rules:
- LaTeX: inline math in $...$, display in $$...$$.
- Do not reveal a full solution unless the user explicitly asks for it.
- When calling a tool, emit exactly one tool call per turn. The UI handles dispatch.
- Stay focused on the current day unless the user navigates elsewhere.
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
): Promise<LlmTurnResult> {
  const messages = [
    { role: "system", content: STUDY_TUTOR_SYSTEM_PROMPT },
    ...history.map(m => ({ role: m.role === "tool" ? "assistant" : m.role, content: m.content })),
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

  const json = await res.json() as { choices: { message: { content: string } }[] };
  const content = json.choices[0]?.message?.content ?? "";

  // The model emits tool calls inline as JSON blocks wrapped in <tool>...</tool>.
  // Parse them out; everything else is prose.
  const toolCalls: LlmToolCall[] = [];
  const toolRegex = /<tool>([\s\S]*?)<\/tool>/g;
  let stripped = content;
  let m: RegExpExecArray | null;
  while ((m = toolRegex.exec(content)) !== null) {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed.name && parsed.args) {
        toolCalls.push({ name: parsed.name as ToolName, args: parsed.args });
      }
    } catch { /* ignore malformed */ }
  }
  stripped = stripped.replace(toolRegex, "").trim();

  return { text: stripped, toolCalls };
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 20: MathText component (KaTeX splitter)

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/MathText.tsx`

- [ ] **Step 1: Write `MathText.tsx`**

Create `/workspace/study-plan/frontend/src/components/MathText.tsx`:
```tsx
"use client";
import katex from "katex";
import { useMemo } from "react";

interface Props { children: string; className?: string; }

interface Segment { type: "text" | "inline" | "display"; value: string; }

function splitSegments(src: string): Segment[] {
  const out: Segment[] = [];
  let i = 0;
  while (i < src.length) {
    if (src.startsWith("$$", i)) {
      const end = src.indexOf("$$", i + 2);
      if (end === -1) { out.push({ type: "text", value: src.slice(i) }); break; }
      out.push({ type: "display", value: src.slice(i + 2, end) });
      i = end + 2;
    } else if (src[i] === "$") {
      const end = src.indexOf("$", i + 1);
      if (end === -1) { out.push({ type: "text", value: src.slice(i) }); break; }
      out.push({ type: "inline", value: src.slice(i + 1, end) });
      i = end + 1;
    } else {
      const nextDollar = src.indexOf("$", i);
      const end = nextDollar === -1 ? src.length : nextDollar;
      if (end > i) out.push({ type: "text", value: src.slice(i, end) });
      i = end;
    }
  }
  return out;
}

function renderSegment(seg: Segment, idx: number): JSX.Element {
  if (seg.type === "text") {
    return <span key={idx} style={{ whiteSpace: "pre-wrap" }}>{seg.value}</span>;
  }
  const html = katex.renderToString(seg.value, {
    throwOnError: false,
    displayMode: seg.type === "display",
  });
  return <span key={idx} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function MathText({ children, className }: Props) {
  const segments = useMemo(() => splitSegments(children), [children]);
  return <span className={className}>{segments.map(renderSegment)}</span>;
}
```

---

## Task 21: Atomic UI components

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/TierBadge.tsx`
- Create: `/workspace/study-plan/frontend/src/components/XPBar.tsx`
- Create: `/workspace/study-plan/frontend/src/components/StreakBadge.tsx`
- Create: `/workspace/study-plan/frontend/src/components/ProgressRing.tsx`

- [ ] **Step 1: Write `TierBadge.tsx`**

Create `/workspace/study-plan/frontend/src/components/TierBadge.tsx`:
```tsx
"use client";
import type { DayTier } from "@/lib/types";

const COLORS: Record<DayTier, string> = {
  none: "#3a3a4f",
  bronze: "#cd7f32",
  silver: "#c0c0c0",
  gold: "#ffd700",
};

export function TierBadge({ tier, size = 14 }: { tier: DayTier; size?: number }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: size, height: size, borderRadius: "50%",
        background: COLORS[tier],
        boxShadow: tier === "gold" ? "0 0 12px #ffd700aa" : undefined,
      }}
      aria-label={`tier ${tier}`}
    />
  );
}
```

- [ ] **Step 2: Write `XPBar.tsx`**

Create `/workspace/study-plan/frontend/src/components/XPBar.tsx`:
```tsx
"use client";
import { motion } from "framer-motion";

interface Props { xp: number; multiplier: number; max?: number; }

export function XPBar({ xp, multiplier, max = 1000 }: Props) {
  const pct = Math.min(100, (xp / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-2 w-64 rounded-full bg-[#1a1a2a] overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)" }}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <span className="font-mono text-sm">
        {xp} XP {multiplier > 1 && <span className="text-phase4">×{multiplier}</span>}
      </span>
    </div>
  );
}
```

- [ ] **Step 3: Write `StreakBadge.tsx`**

Create `/workspace/study-plan/frontend/src/components/StreakBadge.tsx`:
```tsx
"use client";
import { Flame } from "lucide-react";

export function StreakBadge({ streak, best }: { streak: number; best: number }) {
  const glow = streak >= 7 ? "0 0 16px #f59e0b" : streak >= 3 ? "0 0 8px #f59e0baa" : "none";
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#1a1a2a]"
      style={{ boxShadow: glow }}
    >
      <Flame className="w-4 h-4 text-phase4" />
      <span className="font-mono text-sm">{streak}</span>
      <span className="text-xs opacity-50">best {best}</span>
    </div>
  );
}
```

- [ ] **Step 4: Write `ProgressRing.tsx`**

Create `/workspace/study-plan/frontend/src/components/ProgressRing.tsx`:
```tsx
"use client";

interface Props { pct: number; size?: number; stroke?: number; }

export function ProgressRing({ pct, size = 48, stroke = 4 }: Props) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (pct / 100) * c;
  return (
    <svg width={size} height={size}>
      <circle cx={size/2} cy={size/2} r={r} stroke="#1a1a2a" strokeWidth={stroke} fill="none" />
      <circle
        cx={size/2} cy={size/2} r={r}
        stroke="#ffd700" strokeWidth={stroke} fill="none"
        strokeDasharray={c} strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size/2} ${size/2})`}
      />
      <text x="50%" y="54%" textAnchor="middle" fill="#f5f0e8" fontSize="11" fontFamily="JetBrains Mono, monospace">
        {Math.round(pct)}%
      </text>
    </svg>
  );
}
```

- [ ] **Step 5: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 22: DayCard component

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/DayCard.tsx`

- [ ] **Step 1: Write `DayCard.tsx`**

Create `/workspace/study-plan/frontend/src/components/DayCard.tsx`:
```tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TierBadge } from "./TierBadge";
import type { StudyDay, DayTier } from "@/lib/types";

interface Props {
  day: StudyDay;
  tier: DayTier;
  completedCount: number;
  totalCount: number;
}

const PHASE_ACCENT: Record<number, string> = {
  1: "#6366f1", 2: "#8b5cf6", 3: "#ec4899", 4: "#f59e0b",
};

export function DayCard({ day, tier, completedCount, totalCount }: Props) {
  const pct = totalCount === 0 ? 0 : (completedCount / totalCount) * 100;
  const accent = PHASE_ACCENT[day.phase] ?? "#6366f1";
  return (
    <Link href={`/day/${day.id}`}>
      <motion.article
        className="rounded-xl border border-[#1a1a2a] bg-[#121222] p-4 hover:border-[#2a2a3f] transition-colors cursor-pointer h-full"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="text-3xl font-display" style={{ color: accent }}>{day.icon}</div>
          <TierBadge tier={tier} />
        </div>
        <div className="text-xs opacity-50 uppercase tracking-wider" style={{ color: accent }}>
          Day {day.id} · {day.phaseTitle}
        </div>
        <h3 className="font-display text-lg mt-1 mb-2">{day.title}</h3>
        <p className="text-sm opacity-70 line-clamp-2">{day.summary}</p>
        <div className="mt-3 h-1 rounded-full bg-[#1a1a2a] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: accent }}
          />
        </div>
      </motion.article>
    </Link>
  );
}
```

---

## Task 23: Settings modal

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/Settings.tsx`

- [ ] **Step 1: Write `Settings.tsx`**

Create `/workspace/study-plan/frontend/src/components/Settings.tsx`:
```tsx
"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { loadConfig, saveConfig, MODEL_OPTIONS } from "@/lib/settings";
import type { LlmConfig } from "@/lib/types";

interface Props { onClose: () => void; }

export function Settings({ onClose }: Props) {
  const [config, setConfig] = useState<LlmConfig>(loadConfig());

  const submit = () => { saveConfig(config); onClose(); };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-96" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-display text-xl">LLM Settings</h2>
          <button onClick={onClose}><X className="w-5 h-5" /></button>
        </div>
        <label className="block mb-3">
          <span className="text-sm opacity-70">z.ai API key</span>
          <input
            type="password"
            value={config.apiKey}
            onChange={e => setConfig({ ...config, apiKey: e.target.value })}
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2 font-mono text-sm"
          />
        </label>
        <label className="block mb-3">
          <span className="text-sm opacity-70">Model</span>
          <select
            value={config.model}
            onChange={e => setConfig({ ...config, model: e.target.value })}
            className="mt-1 w-full bg-[#0f0f1a] border border-[#2a2a3f] rounded px-3 py-2"
          >
            {MODEL_OPTIONS.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
        </label>
        <button
          onClick={submit}
          className="mt-2 w-full bg-phase1 hover:bg-phase2 rounded px-3 py-2 font-semibold transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
}
```

---

## Task 24: Layout + Header

**Files:**
- Create: `/workspace/study-plan/frontend/src/app/layout.tsx`
- Create: `/workspace/study-plan/frontend/src/components/Header.tsx`

- [ ] **Step 1: Write `Header.tsx`**

Create `/workspace/study-plan/frontend/src/components/Header.tsx`:
```tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import { XPBar } from "./XPBar";
import { StreakBadge } from "./StreakBadge";
import { Settings } from "./Settings";
import { api } from "@/lib/api";
import type { UserProgress } from "@/lib/types";

export function Header() {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => { api.fetchProgress().then(setProgress).catch(() => {}); }, []);

  const multiplier = progress ? 1 + Math.floor(progress.streak / 3) : 1;

  return (
    <header className="border-b border-[#1a1a2a] px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0f0f1a]/90 backdrop-blur z-40">
      <Link href="/" className="font-display text-xl">study plan</Link>
      <div className="flex items-center gap-4">
        {progress && <XPBar xp={progress.xp} multiplier={multiplier} />}
        {progress && <StreakBadge streak={progress.streak} best={progress.bestStreak} />}
        <button onClick={() => setShowSettings(true)} aria-label="Settings">
          <SettingsIcon className="w-5 h-5 opacity-60 hover:opacity-100" />
        </button>
      </div>
      {showSettings && <Settings onClose={() => setShowSettings(false)} />}
    </header>
  );
}
```

- [ ] **Step 2: Write `layout.tsx`**

Create `/workspace/study-plan/frontend/src/app/layout.tsx`:
```tsx
import "../styles/globals.css";
import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "study plan",
  description: "7-day linear algebra & ODE review",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 25: Dashboard page + ResetModal

**Files:**
- Create: `/workspace/study-plan/frontend/src/app/page.tsx`
- Create: `/workspace/study-plan/frontend/src/components/ResetModal.tsx`

- [ ] **Step 1: Write `ResetModal.tsx`**

Create `/workspace/study-plan/frontend/src/components/ResetModal.tsx`:
```tsx
"use client";

interface Props { onConfirm: () => void; onCancel: () => void; }

export function ResetModal({ onConfirm, onCancel }: Props) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#121222] border border-[#2a2a3f] rounded-xl p-6 w-96">
        <h2 className="font-display text-xl mb-2">Reset all progress?</h2>
        <p className="text-sm opacity-70 mb-4">XP, streak, and completed tasks will be zeroed. PDFs and overrides are not affected.</p>
        <div className="flex justify-end gap-2">
          <button className="px-3 py-2 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f]" onClick={onCancel}>Cancel</button>
          <button className="px-3 py-2 rounded bg-phase3 hover:bg-phase2" onClick={onConfirm}>Reset</button>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write `app/page.tsx`**

Create `/workspace/study-plan/frontend/src/app/page.tsx`:
```tsx
"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { StudyDay, UserProgress, DayTier } from "@/lib/types";
import { DayCard } from "@/components/DayCard";
import { ProgressRing } from "@/components/ProgressRing";
import { ResetModal } from "@/components/ResetModal";

function countTasks(day: StudyDay): number {
  return day.tasks.reduce((a, g) => a + g.items.length, 0);
}

function countCompleted(day: StudyDay, completed: Record<string, boolean>): number {
  let n = 0;
  for (const g of day.tasks) {
    for (let i = 0; i < g.items.length; i++) {
      if (completed[`${day.id}-${g.tier}-${i}`]) n++;
    }
  }
  return n;
}

export default function Dashboard() {
  const [days, setDays] = useState<StudyDay[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [showReset, setShowReset] = useState(false);

  const refresh = () => {
    api.fetchDays().then(setDays).catch(() => {});
    api.fetchProgress().then(setProgress).catch(() => {});
  };

  useEffect(refresh, []);

  const doReset = async () => { await api.reset(); setShowReset(false); refresh(); };

  if (!days.length || !progress) return <div className="opacity-50">loading…</div>;

  const totalTasks = days.reduce((a, d) => a + countTasks(d), 0);
  const completedCount = Object.keys(progress.completedTasks).length;
  const pct = totalTasks === 0 ? 0 : (completedCount / totalTasks) * 100;

  const phases = [1, 2, 3, 4] as const;

  return (
    <div>
      <div className="flex items-center gap-6 mb-8">
        <ProgressRing pct={pct} size={64} />
        <div>
          <div className="text-sm opacity-50">Total Progress</div>
          <div className="font-mono">{completedCount} / {totalTasks} tasks</div>
        </div>
        <button className="ml-auto text-xs opacity-50 hover:opacity-100" onClick={() => setShowReset(true)}>Reset</button>
      </div>

      {phases.map(phaseNum => {
        const phaseDays = days.filter(d => d.phase === phaseNum);
        if (phaseDays.length === 0) return null;
        const phaseTitle = phaseDays[0].phaseTitle;
        return (
          <section key={phaseNum} className="mb-8">
            <h2 className="font-display text-lg mb-3 opacity-70">Phase {phaseNum} — {phaseTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {phaseDays.map(day => {
                const tier = (progress.dayTiers[String(day.id)] ?? "none") as DayTier;
                return (
                  <DayCard
                    key={day.id}
                    day={day}
                    tier={tier}
                    completedCount={countCompleted(day, progress.completedTasks)}
                    totalCount={countTasks(day)}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      {showReset && <ResetModal onConfirm={doReset} onCancel={() => setShowReset(false)} />}
    </div>
  );
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -10
```

Expected: no errors.

---

## Task 26: TaskCard component

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/TaskCard.tsx`

- [ ] **Step 1: Write `TaskCard.tsx`**

Create `/workspace/study-plan/frontend/src/components/TaskCard.tsx`:
```tsx
"use client";
import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { MathText } from "./MathText";
import type { TaskItem, Tier } from "@/lib/types";

interface Props {
  dayId: number;
  tier: Tier;
  index: number;
  item: TaskItem;
  completed: boolean;
  onToggle: (completed: boolean) => void;
}

export function TaskCard({ item, completed, onToggle }: Props) {
  const [reveal, setReveal] = useState(false);
  return (
    <div className={`rounded-xl border p-4 transition-colors ${completed ? "border-gold/50 bg-[#1a1a10]" : "border-[#2a2a3f] bg-[#121222]"}`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(!completed)}
          className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${completed ? "bg-gold border-gold" : "border-[#3a3a4f]"}`}
          aria-label={completed ? "mark incomplete" : "mark complete"}
        >
          {completed && <Check className="w-3 h-3 text-[#0f0f1a]" />}
        </button>
        <div className="flex-1">
          <MathText>{item.text}</MathText>
          <button
            className="mt-2 text-xs opacity-50 hover:opacity-100 flex items-center gap-1"
            onClick={() => setReveal(r => !r)}
          >
            <ChevronDown className={`w-3 h-3 transition-transform ${reveal ? "rotate-180" : ""}`} />
            {reveal ? "hide solution" : "reveal solution"}
          </button>
          {reveal && (
            <div className="mt-2 p-3 rounded bg-[#0a0a14] font-mono text-sm">
              <MathText>{item.detail}</MathText>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

---

## Task 27: StudyChat component

**Files:**
- Create: `/workspace/study-plan/frontend/src/components/StudyChat.tsx`

- [ ] **Step 1: Write `StudyChat.tsx`**

Create `/workspace/study-plan/frontend/src/components/StudyChat.tsx`:
```tsx
"use client";
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { loadConfig, isConfigured } from "@/lib/settings";
import { runLlmTurn } from "@/lib/llm";
import { validateAndEncode, type ToolName } from "@/lib/tools";
import { WsClient } from "@/lib/ws";
import type { ChatMessage, ConnectionStatus } from "@/lib/types";
import { MathText } from "./MathText";

interface Props { dayId: number; onProgressChanged: () => void; }

export function StudyChat({ dayId, onProgressChanged }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState<ConnectionStatus>("disconnected");
  const wsRef = useRef<WsClient | null>(null);
  const pendingRef = useRef<Map<string, (resp: string) => void>>(new Map());

  useEffect(() => {
    const ws = new WsClient("ws://localhost:4000/ws",
      (raw) => {
        // Expect "(ok <request-id> ...)" or "(err <request-id> ...)"
        const m = /^\((ok|err) (\S+)/.exec(raw);
        if (m) {
          const resolver = pendingRef.current.get(m[2]);
          if (resolver) { resolver(raw); pendingRef.current.delete(m[2]); }
        }
      },
      setStatus,
    );
    ws.connect();
    wsRef.current = ws;
    return () => ws.disconnect();
  }, []);

  const callTool = (name: ToolName, args: object): Promise<string> => {
    return new Promise((resolve, reject) => {
      const result = validateAndEncode(name, args);
      if (!result.ok) return reject(new Error(result.error));
      pendingRef.current.set(result.requestId, resolve);
      wsRef.current?.send(result.frame);
      setTimeout(() => {
        if (pendingRef.current.has(result.requestId)) {
          pendingRef.current.delete(result.requestId);
          reject(new Error("tool timeout"));
        }
      }, 10000);
    });
  };

  const send = async () => {
    if (!input.trim() || busy) return;
    const config = loadConfig();
    if (!isConfigured(config)) {
      setMessages(m => [...m, {
        role: "assistant", content: "Configure your API key in Settings first.",
        toolName: null, timestamp: new Date().toISOString(),
      }]);
      return;
    }

    const userMsg: ChatMessage = {
      role: "user", content: input, toolName: null, timestamp: new Date().toISOString(),
    };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setBusy(true);

    try {
      const result = await runLlmTurn(config, messages, userMsg.content);
      const assistantMsg: ChatMessage = {
        role: "assistant", content: result.text || "(calling tool)", toolName: null, timestamp: new Date().toISOString(),
      };
      setMessages(m => [...m, assistantMsg]);

      for (const call of result.toolCalls) {
        const toolMsg: ChatMessage = {
          role: "tool",
          content: `→ ${call.name}`,
          toolName: call.name,
          timestamp: new Date().toISOString(),
        };
        setMessages(m => [...m, toolMsg]);
        try {
          const resp = await callTool(call.name, call.args);
          const respMsg: ChatMessage = {
            role: "tool", content: resp, toolName: call.name, timestamp: new Date().toISOString(),
          };
          setMessages(m => [...m, respMsg]);
          if (call.name === "mark-task-complete" || call.name === "overlay-task") {
            onProgressChanged();
          }
        } catch (e) {
          setMessages(m => [...m, {
            role: "tool", content: `error: ${String(e)}`, toolName: call.name, timestamp: new Date().toISOString(),
          }]);
        }
      }
    } catch (e) {
      setMessages(m => [...m, {
        role: "assistant", content: `error: ${String(e)}`, toolName: null, timestamp: new Date().toISOString(),
      }]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 top-20 w-96 flex flex-col rounded-xl border border-[#2a2a3f] bg-[#0f0f1a]/95 backdrop-blur">
      <div className="px-4 py-2 border-b border-[#1a1a2a] flex items-center justify-between">
        <span className="font-display">Tutor</span>
        <span className="text-xs opacity-50">{status}</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`text-sm ${m.role === "user" ? "text-paper" : m.role === "assistant" ? "opacity-80" : "opacity-50 font-mono text-xs"}`}>
            <div className="text-xs opacity-40 mb-1">{m.role}</div>
            <MathText>{m.content}</MathText>
          </div>
        ))}
      </div>
      <div className="border-t border-[#1a1a2a] p-2 flex gap-2">
        <textarea
          className="flex-1 bg-[#0a0a14] border border-[#1a1a2a] rounded px-2 py-1 text-sm resize-none"
          rows={2}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Ask for a hint, grade your attempt, or request a similar problem…"
        />
        <button onClick={send} disabled={busy} className="px-2 disabled:opacity-30">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
```

---

## Task 28: Day detail page

**Files:**
- Create: `/workspace/study-plan/frontend/src/app/day/[id]/page.tsx`

- [ ] **Step 1: Write `day/[id]/page.tsx`**

Create `/workspace/study-plan/frontend/src/app/day/[id]/page.tsx`:
```tsx
"use client";
import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { api } from "@/lib/api";
import type { StudyDay, UserProgress, Tier } from "@/lib/types";
import { MathText } from "@/components/MathText";
import { TaskCard } from "@/components/TaskCard";
import { StudyChat } from "@/components/StudyChat";

const TIER_COLORS: Record<Tier, string> = {
  bronze: "#cd7f32", silver: "#c0c0c0", gold: "#ffd700",
};

export default function DayDetail() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const dayId = parseInt(params.id, 10);
  const [day, setDay] = useState<StudyDay | null>(null);
  const [progress, setProgress] = useState<UserProgress | null>(null);

  const refresh = useCallback(() => {
    api.fetchDay(dayId).then(setDay).catch(() => setDay(null));
    api.fetchProgress().then(setProgress).catch(() => {});
  }, [dayId]);

  useEffect(refresh, [refresh]);

  const toggle = async (tier: Tier, idx: number, current: boolean) => {
    if (current) await api.uncomplete(dayId, tier, idx);
    else await api.complete(dayId, tier, idx);
    refresh();
  };

  if (!day || !progress) return <div className="opacity-50">loading…</div>;

  return (
    <div className="pr-[26rem]">
      <div className="mb-6">
        <button onClick={() => router.push("/")} className="text-xs opacity-50 hover:opacity-100 flex items-center gap-1">
          <ChevronLeft className="w-3 h-3" /> dashboard
        </button>
        <div className="mt-2 flex items-baseline gap-3">
          <span className="text-5xl font-display">{day.icon}</span>
          <div>
            <div className="text-xs uppercase tracking-wider opacity-50">Day {day.id} · {day.phaseTitle}</div>
            <h1 className="font-display text-3xl">{day.title}</h1>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-xl border border-[#2a2a3f] bg-[#121222]">
          <div className="text-xs uppercase tracking-wider opacity-50 mb-1">Key Insight</div>
          <MathText className="text-sm">{day.keyInsight}</MathText>
        </div>
      </div>

      {day.tasks.map(group => (
        <section key={group.tier} className="mb-6">
          <h2 className="font-display text-lg mb-3" style={{ color: TIER_COLORS[group.tier] }}>
            {group.label} — {group.tier}
          </h2>
          <div className="space-y-3">
            {group.items.map((item, i) => {
              const key = `${day.id}-${group.tier}-${i}`;
              return (
                <TaskCard
                  key={key} dayId={day.id} tier={group.tier} index={i}
                  item={item}
                  completed={!!progress.completedTasks[key]}
                  onToggle={(next) => toggle(group.tier, i, !next)}
                />
              );
            })}
          </div>
        </section>
      ))}

      <div className="flex justify-between mt-8 text-sm">
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId <= 1}
          onClick={() => router.push(`/day/${dayId - 1}`)}
        ><ChevronLeft className="w-4 h-4" /> previous</button>
        <button
          className="opacity-50 hover:opacity-100 disabled:invisible flex items-center gap-1"
          disabled={dayId >= 7}
          onClick={() => router.push(`/day/${dayId + 1}`)}
        >next <ChevronRight className="w-4 h-4" /></button>
      </div>

      <StudyChat dayId={dayId} onProgressChanged={refresh} />
    </div>
  );
}
```

- [ ] **Step 2: Verify TypeScript compiles across the whole frontend**

Run:
```bash
cd /workspace/study-plan/frontend && npx tsc --noEmit 2>&1 | tail -15
```

Expected: no errors.

- [ ] **Step 3: Verify Next.js build succeeds**

Run:
```bash
cd /workspace/study-plan/frontend && npx next build 2>&1 | tail -30
```

Expected: build completes with "Compiled successfully" and lists the two routes (`/` and `/day/[id]`).

---

## Task 29: start.sh

**Files:**
- Create: `/workspace/study-plan/start.sh`

- [ ] **Step 1: Write `start.sh`**

Create `/workspace/study-plan/start.sh`:
```bash
#!/bin/bash
# Start study-plan: CL backend + Next.js frontend.
# Usage: ./start.sh [--port 4000] [--web-port 3000]

BACKEND_PORT=${1:-4000}
WEB_PORT=${2:-3000}

DIR="$(cd "$(dirname "$0")" && pwd)"

cleanup() {
  echo ""
  echo "[start] Shutting down..."
  kill $BACKEND_PID $WEB_PID 2>/dev/null
  wait $BACKEND_PID $WEB_PID 2>/dev/null
  echo "[start] Done."
  exit 0
}
trap cleanup INT TERM

echo "[start] Starting CL backend on port $BACKEND_PORT..."
cd "$DIR/backend"
sbcl --load run.lisp &
BACKEND_PID=$!

echo "[start] Waiting for backend..."
for i in $(seq 1 30); do
  if nc -z localhost $BACKEND_PORT 2>/dev/null || ss -tln 2>/dev/null | grep -q ":$BACKEND_PORT "; then
    echo "[start] Backend ready."
    break
  fi
  sleep 1
done

echo "[start] Starting frontend on port $WEB_PORT..."
cd "$DIR/frontend"
npx next dev -p $WEB_PORT &
WEB_PID=$!

echo ""
echo "============================================"
echo "  study-plan running"
echo "  Web UI:  http://localhost:$WEB_PORT"
echo "  API:     http://localhost:$BACKEND_PORT/api"
echo "  WS:      ws://localhost:$BACKEND_PORT/ws"
echo "  Ctrl+C to stop"
echo "============================================"
echo ""

wait
```

- [ ] **Step 2: Make it executable**

Run:
```bash
chmod +x /workspace/study-plan/start.sh
```

---

## Task 30: End-to-End Smoke Test

**Files:**
- No file changes.

- [ ] **Step 1: Start the full stack**

Run:
```bash
cd /workspace/study-plan && ./start.sh &
STACK_PID=$!
sleep 15
```

- [ ] **Step 2: Verify backend is up**

Run:
```bash
curl -sf http://localhost:4000/api/days > /dev/null && echo "backend OK"
```

Expected: `backend OK`.

- [ ] **Step 3: Verify frontend is up**

Run:
```bash
curl -sf http://localhost:3000 > /dev/null && echo "frontend OK"
```

Expected: `frontend OK`.

- [ ] **Step 4: Complete a task via REST**

Run:
```bash
curl -s -X POST -H "Content-Type: application/json" \
     -d '{"day-id":1,"tier":"bronze","task-index":0}' \
     http://localhost:4000/api/progress/complete
echo
curl -s http://localhost:4000/api/progress
```

Expected: second curl shows `"xp":10`, `"completed-tasks":{"1-bronze-0":true}`.

- [ ] **Step 5: Reset**

Run:
```bash
curl -s -X POST http://localhost:4000/api/progress/reset
```

Expected: `"xp":0`.

- [ ] **Step 6: Stop the stack**

Run:
```bash
kill $STACK_PID 2>/dev/null
pkill -f "sbcl --load run.lisp" 2>/dev/null
pkill -f "next dev" 2>/dev/null
sleep 2
```

*(Manual UI check: start `./start.sh`, open http://localhost:3000 in a browser, confirm dashboard renders 7 day cards across 4 phases, click Day 1, check a task, verify XP bar animates and the task card glows gold. This step is manual because no headless-browser runner is in scope.)*

---

## Task 31: Initial Git Commit

**Files:**
- No file changes (git only).

- [ ] **Step 1: Initialize repo**

Run:
```bash
cd /workspace/study-plan && git init -b main
```

- [ ] **Step 2: Configure git author for this session**

Run:
```bash
cd /workspace/study-plan && \
git config user.name "izzortsi" && \
git config user.email "istrozzi@matematica.ufrj.br"
```

- [ ] **Step 3: Stage everything except gitignored paths**

Run:
```bash
cd /workspace/study-plan && git add .gitignore README.md start.sh docs/ backend/ frontend/package.json frontend/tsconfig.json frontend/next.config.js frontend/tailwind.config.ts frontend/postcss.config.js frontend/src/
```

Then verify nothing sensitive is staged:
```bash
cd /workspace/study-plan && git status
```

Expected: `node_modules/`, `.next/`, `backend/data/`, `backend/pdfs/`, `*.fasl` absent.

- [ ] **Step 4: Create initial commit**

Run:
```bash
cd /workspace/study-plan && git commit -m "initial scaffold: study-plan full stack"
```

Expected: one commit on `main`.

- [ ] **Step 5: Verify repo state**

Run:
```bash
cd /workspace/study-plan && git log --oneline
```

Expected: one commit.

---

## Self-Review Checklist

**Spec coverage:**
- §2 Architecture: REST on :4000, WS on :4000/ws, Next.js on :3000 — Tasks 10, 11, 12, 13.
- §3 Data models: all structs defined in Task 4 (models.lisp) and Task 15 (types.ts).
- §4 REST API contract: all 7 endpoints in Task 10.
- §5 WS protocol: all 9 tools + dispatcher in Task 12.
- §6 Overlay pattern: Task 8 (seed-data.lisp merge-overrides) + Task 9 (overlay-test.lisp).
- §7 Frontend structure: Tasks 20–28 cover every component in the tree.
- §8 Gamification: Task 6 covers XP, tier, streak with TDD.
- §9 Tech stack: Task 2 (ASDF), Task 13 (Next.js), Task 3 + 16 (lisp-agent reuse).
- §10 File structure: every file in §10 mapped to a task.
- §11 Testing: Tasks 5, 6, 7, 9 cover the FiveAM suite.
- §12 Seed content strategy: Task 8 implements the real-vs-placeholder split.
- §13 Full 7-day content: Task 8 seed-data.lisp embeds all content.

**Placeholder scan:** no TBDs, no "implement later", no "handle edge cases" — every step has concrete code or commands. The "(awaiting PDF) …" strings in seed-data are intentional runtime placeholders, not plan gaps.

**Type consistency:**
- `compute-highest-tier`, `effective-xp`, `base-xp`, `streak-multiplier`, `task-key`, `update-streak-after-gold` — defined in Task 6, referenced consistently in Tasks 7, 8, 10.
- `tx-complete-task` signature `(day-id tier task-index today-iso)` — consistent across Task 7, Task 10 handle-post-complete, Task 12 tool-mark-task-complete.
- `merge-overrides` signature `(days overrides)` — consistent across Task 8, Task 10 merged-days helper, Task 12 merged-days helper.
- Frontend `camelizeKeys` output matches CL hyphen-to-camelCase assumption in Task 10 Step 3.
- `ToolName` enum in Task 17 matches WS dispatch table in Task 12.
- Tool argument kebab-casing in Task 17 (`dayId` → `day-id`) matches Task 12 `alist-get` lookups.

**Execution order sanity:**
- Task 7 (storage) references `study-plan.seed-data:*study-days*`, which is defined in Task 8. **Execution order: do Task 8 (seed-data) BEFORE Task 7 (storage).** Task 7 has a prerequisite note at the top. The ASDF component order in Task 2 already reflects this: `seed-data` is listed before `storage`.
- Task 2's placeholder `api.lisp`/`protocol.lisp`/`server.lisp` stubs (created in Task 8 Step 3) let the ASDF system load before Tasks 10–12 populate them.

---

**Scope check:** single cohesive implementation plan, ~31 tasks, one repo, one branch. No decomposition needed.
