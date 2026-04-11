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
           #:generated-task-id #:generated-task-source-card-uid
           #:generated-task-tier
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
           #:task-key #:day-tier-key))

(defpackage #:study-plan.storage
  (:use #:cl #:study-plan.models #:study-plan.gamification)
  (:export #:*prevalence-system* #:init-storage #:shutdown-storage
           #:current-progress #:current-root
           ;; Transactions
           #:tx-complete-task #:tx-uncomplete-task
           #:tx-reset-progress #:tx-rekey-for-migration
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
  (:export #:register-progress-routes
           #:with-options
           #:json-response
           #:json-alist-response
           #:set-cors-headers
           #:read-request-json
           #:today-iso))

(defpackage #:study-plan.protocol
  (:use #:cl #:study-plan.term #:study-plan.models
        #:study-plan.storage #:study-plan.seed-data
        #:study-plan.gamification)
  (:export #:handle-ws-message #:dispatch-tool
           #:make-ok-response #:make-err-response))

(defpackage #:study-plan.server
  (:use #:cl)
  (:export #:start-server #:stop-server #:*acceptor*))

(defpackage #:study-plan.ontology.store
  (:use #:cl #:study-plan.term)
  (:export #:*ontology-store* #:*ontology-journal-path*
           #:init-ontology-store #:shutdown-ontology-store
           #:reset-ontology-store
           #:append-fact #:store-size
           #:facts-with-head #:facts-matching
           #:fact-arg #:fact-head))

(defpackage #:study-plan.ontology
  (:use #:cl #:study-plan.term #:study-plan.ontology.store)
  (:export #:create-course #:create-phase #:create-day #:create-card
           #:create-concept #:tag-card #:add-prereq
           #:list-courses #:list-concepts #:list-phases-for-course
           #:list-days-for-course #:list-cards-for-day #:list-cards-for-course
           #:tags-for-card #:prereqs-for-concept
           #:course-by-id #:day-by-id #:card-by-uid #:concept-by-id
           #:card-uid-for))

(defpackage #:study-plan.ontology.query
  (:use #:cl #:study-plan.term #:study-plan.ontology.store #:study-plan.ontology)
  (:export #:concept-mastery #:next-up
           #:concepts-touched-by-course #:edges-for-course
           #:card-count-for-concept))

(defpackage #:study-plan.migration
  (:use #:cl #:study-plan.models #:study-plan.ontology
        #:study-plan.ontology.store)
  (:export #:run-initial-migration #:migration-needed-p
           #:*v1-concept-dictionary* #:*v1-prereqs* #:*v1-tags*))

(defpackage #:study-plan.course-api
  (:use #:cl)
  (:export #:register-course-routes))

(defpackage #:study-plan.concept-api
  (:use #:cl)
  (:export #:register-concept-routes))

(defpackage #:study-plan.import-api
  (:use #:cl)
  (:export #:register-import-routes))
