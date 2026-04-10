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
