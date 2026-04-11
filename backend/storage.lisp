;;; storage.lisp — cl-prevalence persistence for study-plan mutable state.
;;;
;;; Architecture:
;;;   - Raw transaction functions (%complete-task, %reset-progress, ...) take
;;;     the prevalence system as their first argument. These are the functions
;;;     cl-prevalence journals and replays on startup.
;;;   - Public wrappers (tx-complete-task, tx-reset-progress, ...) are the
;;;     caller-facing API. They use *prevalence-system* implicitly and invoke
;;;     the `execute-transaction` macro, which generates the journaled call.

(in-package #:study-plan.storage)

(defvar *prevalence-system* nil "The cl-prevalence system instance.")

(defun init-storage (data-dir)
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
   (lambda (gt)
     (let ((uid (generated-task-source-card-uid gt)))
       (and (> (length uid) 0)
            (let ((prefix (format nil "c1-d~D-" day-id)))
              (and (>= (length uid) (length prefix))
                   (string= prefix (subseq uid 0 (length prefix))))))))
   (study-root-generated (current-root))))

(defun get-chat-for-day (day-id)
  (gethash day-id (study-root-chat-logs (current-root))))

;;;---------------------------------------------------------------------------
;;; Raw transaction functions (journaled by name).
;;; These must be `defun`s at the top level so cl-prevalence can replay them.
;;;---------------------------------------------------------------------------

(defun %complete-task (system course-id day-id tier task-index today-iso)
  (let* ((root (cl-prevalence:get-root-object system :study))
         (p (study-root-progress root))
         (uid (task-key course-id day-id tier task-index)))
    (unless (gethash uid (user-progress-completed-tasks p))
      (setf (gethash uid (user-progress-completed-tasks p)) t)
      (incf (user-progress-xp p)
            (effective-xp tier (user-progress-streak p)))
      ;; Day tier recomputation uses seed-data only for the v1 course.
      ;; After migration this path is unused — kept for compatibility
      ;; until Phase C replaces it with ontology-driven computation.
      (when (= course-id 1)
        (let* ((day (find day-id study-plan.seed-data:*study-days*
                          :key #'study-day-id))
               (new-tier (when day
                           (compute-highest-tier course-id day
                                                 (user-progress-completed-tasks p)))))
          (when day
            (setf (gethash (day-tier-key course-id day-id)
                           (user-progress-day-tiers p)) new-tier)
            (when (string= new-tier "gold")
              (update-streak-after-gold p today-iso))))))))

(defun %uncomplete-task (system course-id day-id tier task-index)
  (let* ((root (cl-prevalence:get-root-object system :study))
         (p (study-root-progress root))
         (uid (task-key course-id day-id tier task-index)))
    (remhash uid (user-progress-completed-tasks p))
    (when (= course-id 1)
      (let ((day (find day-id study-plan.seed-data:*study-days*
                       :key #'study-day-id)))
        (when day
          (setf (gethash (day-tier-key course-id day-id)
                         (user-progress-day-tiers p))
                (compute-highest-tier course-id day
                                      (user-progress-completed-tasks p))))))))

(defun %reset-progress (system)
  (let ((root (cl-prevalence:get-root-object system :study)))
    (setf (study-root-progress root) (make-user-progress))))

(defun %append-generated-task (system id source-card-uid tier text detail created-at)
  (let ((root (cl-prevalence:get-root-object system :study)))
    (push (make-generated-task :id id
                               :source-card-uid source-card-uid
                               :tier tier
                               :text text
                               :detail detail
                               :created-at created-at)
          (study-root-generated root))))

(defun %append-attempt (system card-uid verdict comment timestamp)
  (let ((root (cl-prevalence:get-root-object system :study)))
    (push (make-attempt :day-id 0                ; legacy field, unused
                        :tier ""
                        :task-index 0
                        :text card-uid           ; overloaded: holds card-uid
                        :verdict verdict
                        :comment comment
                        :timestamp timestamp)
          (study-root-attempts root))))

(defun %append-chat-message (system day-id role content tool-name timestamp)
  (let* ((root (cl-prevalence:get-root-object system :study))
         (msg (make-chat-message :role role
                                 :content content
                                 :tool-name tool-name
                                 :timestamp timestamp)))
    (setf (gethash day-id (study-root-chat-logs root))
          (append (gethash day-id (study-root-chat-logs root)) (list msg)))))

;;;---------------------------------------------------------------------------
;;; Public wrappers — caller-facing API. Use *prevalence-system* implicitly.
;;;---------------------------------------------------------------------------

(defun tx-complete-task (course-id day-id tier task-index today-iso)
  (cl-prevalence:execute-transaction
   (%complete-task *prevalence-system* course-id day-id tier task-index today-iso)))

(defun tx-uncomplete-task (course-id day-id tier task-index)
  (cl-prevalence:execute-transaction
   (%uncomplete-task *prevalence-system* course-id day-id tier task-index)))

(defun tx-reset-progress ()
  (cl-prevalence:execute-transaction
   (%reset-progress *prevalence-system*)))

(defun tx-append-generated-task (id source-card-uid tier text detail created-at)
  (cl-prevalence:execute-transaction
   (%append-generated-task *prevalence-system* id source-card-uid tier text detail created-at)))

(defun tx-append-attempt (card-uid verdict comment timestamp)
  (cl-prevalence:execute-transaction
   (%append-attempt *prevalence-system* card-uid verdict comment timestamp)))

(defun tx-append-chat-message (day-id role content tool-name timestamp)
  (cl-prevalence:execute-transaction
   (%append-chat-message *prevalence-system* day-id role content tool-name timestamp)))
