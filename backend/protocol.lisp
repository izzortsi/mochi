;;; protocol.lisp — s-expression WebSocket command dispatch for LLM tools.
;;;
;;; Wire format:
;;;   request:  (call "tool-name" ((key "value") ...) "request-id")
;;;   ok:       (ok "request-id" <result-sexp>)
;;;   err:      (err "request-id" "<message>")
;;;
;;; Parsing uses the Lisp reader. Keywords become :call/:ok/:err, strings stay
;;; strings, numbers stay numbers. That keeps the wire format portable between
;;; CL and the TypeScript sexp reader without needing a custom parser.

(in-package #:study-plan.protocol)

;;;---------------------------------------------------------------------------
;;; Response builders
;;;---------------------------------------------------------------------------

(defun escape-sexp-string (s)
  (if s
      (cl-ppcre:regex-replace-all "\"" s "\\\"")
      ""))

(defun sexp-quote (s)
  (format nil "\"~A\"" (escape-sexp-string s)))

(defun make-ok-response (request-id result-sexp)
  (format nil "(ok ~A ~A)" (sexp-quote request-id) result-sexp))

(defun make-err-response (request-id message)
  (format nil "(err ~A ~A)" (sexp-quote request-id) (sexp-quote message)))

;;;---------------------------------------------------------------------------
;;; Utilities
;;;---------------------------------------------------------------------------

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

(defun arg (args key)
  "Look up KEY (a string) in parsed arg pairs. Matches case-insensitively."
  (let ((wanted (string-upcase key)))
    (dolist (pair args)
      (when (and (listp pair) (symbolp (first pair))
                 (equal (symbol-name (first pair)) wanted))
        (return (second pair))))))

(defun to-int (v)
  (if (stringp v) (parse-integer v) v))

(defun parse-card-uid-in-protocol (uid)
  (let ((parts (cl-ppcre:split "-" uid)))
    (when (= (length parts) 4)
      (values (parse-integer (subseq (first parts) 1))
              (parse-integer (subseq (second parts) 1))
              (third parts)
              (parse-integer (fourth parts))))))

;;;---------------------------------------------------------------------------
;;; Sexp formatters
;;;---------------------------------------------------------------------------

(defun card-fact-to-sexp (card-fact)
  (format nil "(card ~A ~A ~A ~A ~A ~A)"
          (sexp-quote (study-plan.ontology.store:fact-arg card-fact 0))
          (study-plan.ontology.store:fact-arg card-fact 1)
          (study-plan.ontology.store:fact-arg card-fact 2)
          (sexp-quote (study-plan.ontology.store:fact-arg card-fact 3))
          (study-plan.ontology.store:fact-arg card-fact 4)
          (sexp-quote (study-plan.ontology.store:fact-arg card-fact 5))))

;;;---------------------------------------------------------------------------
;;; Query tools
;;;---------------------------------------------------------------------------

(defun tool-list-courses (args)
  (declare (ignore args))
  (format nil "(courses ~{~A~^ ~})"
          (mapcar (lambda (c)
                    (format nil "(course ~D ~A ~A)"
                            (first c)
                            (sexp-quote (second c))
                            (sexp-quote (third c))))
                  (study-plan.ontology:list-courses))))

(defun tool-list-concepts (args)
  (declare (ignore args))
  (format nil "(concepts ~{~A~^ ~})"
          (mapcar (lambda (c)
                    (format nil "(concept ~A ~A)"
                            (sexp-quote (first c))
                            (sexp-quote (second c))))
                  (study-plan.ontology:list-concepts))))

(defun tool-query-concept-cards (args)
  (let ((cards (study-plan.ontology.query::cards-tagged-with (arg args "concept-id"))))
    (format nil "(cards ~{~A~^ ~})"
            (mapcar #'sexp-quote cards))))

(defun tool-concept-mastery (args)
  (format nil "(mastery ~A)"
          (study-plan.ontology.query:concept-mastery (arg args "concept-id"))))

(defun tool-next-up (args)
  (format nil "(next-up ~{~A~^ ~})"
          (mapcar #'sexp-quote
                  (study-plan.ontology.query:next-up (to-int (arg args "course-id"))))))

(defun tool-fetch-card (args)
  (let ((card (study-plan.ontology:card-by-uid (arg args "card-uid"))))
    (if card
        (card-fact-to-sexp card)
        "(not-found)")))

(defun tool-get-progress (args)
  (declare (ignore args))
  (let ((p (study-plan.storage:current-progress)))
    (format nil "(progress (xp ~D) (streak ~D) (best-streak ~D))"
            (study-plan.models:user-progress-xp p)
            (study-plan.models:user-progress-streak p)
            (study-plan.models:user-progress-best-streak p))))

;;;---------------------------------------------------------------------------
;;; Ingestion tools (mutate the ontology store)
;;;---------------------------------------------------------------------------

(defun tool-create-course (args)
  (let ((id (study-plan.ontology:create-course (arg args "title") (arg args "slug"))))
    (format nil "(course ~D)" id)))

(defun tool-create-phase (args)
  (study-plan.ontology:create-phase
   (to-int (arg args "course-id"))
   (to-int (arg args "phase-num"))
   (arg args "title"))
  "(ok)")

(defun tool-create-day (args)
  (study-plan.ontology:create-day
   (to-int (arg args "course-id"))
   (to-int (arg args "day-id"))
   (to-int (arg args "phase-num"))
   (arg args "title")
   (arg args "icon")
   (arg args "summary")
   (arg args "key-insight"))
  "(ok)")

(defun tool-create-card (args)
  (study-plan.ontology:create-card
   (arg args "card-uid")
   (to-int (arg args "course-id"))
   (to-int (arg args "day-id"))
   (arg args "tier")
   (to-int (arg args "task-index"))
   (arg args "text")
   (arg args "detail"))
  "(ok)")

(defun tool-create-concept (args)
  (study-plan.ontology:create-concept (arg args "concept-id") (arg args "label"))
  "(ok)")

(defun tool-tag-card (args)
  (study-plan.ontology:tag-card (arg args "card-uid") (arg args "concept-id"))
  "(ok)")

(defun tool-add-prereq (args)
  (study-plan.ontology:add-prereq (arg args "concept-id") (arg args "prereq"))
  "(ok)")

;;;---------------------------------------------------------------------------
;;; Progress + event tools
;;;---------------------------------------------------------------------------

(defun tool-mark-task-complete (args)
  (let ((uid (arg args "card-uid")))
    (multiple-value-bind (cid did tier idx) (parse-card-uid-in-protocol uid)
      (when cid
        (study-plan.storage:tx-complete-task cid did tier idx (today-iso))
        (study-plan.ontology.store:append-fact
         (list "completed" uid
               (local-time:format-timestring nil (local-time:now))))))
    (format nil "(ok (xp ~D))"
            (study-plan.models:user-progress-xp
             (study-plan.storage:current-progress)))))

(defun tool-grade-attempt (args)
  (let ((uid (arg args "card-uid"))
        (verdict (arg args "verdict"))
        (comment (arg args "comment"))
        (ts (local-time:format-timestring nil (local-time:now))))
    (study-plan.storage:tx-append-attempt uid verdict comment ts)
    (study-plan.ontology.store:append-fact
     (list "attempted" uid verdict ts))
    "(ok)"))

(defun tool-append-generated-task (args)
  (let ((id (arg args "id"))
        (source-uid (arg args "source-card-uid"))
        (tier (arg args "tier"))
        (text (arg args "text"))
        (detail (arg args "detail")))
    (study-plan.storage:tx-append-generated-task id source-uid tier text detail (today-iso))
    "(ok)"))

(defun tool-append-chat (args)
  (let ((course-id (to-int (arg args "course-id")))
        (role (arg args "role"))
        (content (arg args "content"))
        (tool-name (arg args "tool-name")))
    (study-plan.storage:tx-append-chat-message course-id role content tool-name
                                               (local-time:format-timestring nil (local-time:now)))
    "(ok)"))

(defun tool-get-chat (args)
  (let* ((course-id (to-int (arg args "course-id")))
         (messages (study-plan.storage:get-chat-for-day course-id)))
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
  '(("list-courses" . tool-list-courses)
    ("list-concepts" . tool-list-concepts)
    ("create-course" . tool-create-course)
    ("create-phase" . tool-create-phase)
    ("create-day" . tool-create-day)
    ("create-card" . tool-create-card)
    ("create-concept" . tool-create-concept)
    ("tag-card" . tool-tag-card)
    ("add-prereq" . tool-add-prereq)
    ("query-concept-cards" . tool-query-concept-cards)
    ("concept-mastery" . tool-concept-mastery)
    ("next-up" . tool-next-up)
    ("fetch-card" . tool-fetch-card)
    ("mark-task-complete" . tool-mark-task-complete)
    ("grade-attempt" . tool-grade-attempt)
    ("append-generated-task" . tool-append-generated-task)
    ("append-chat" . tool-append-chat)
    ("get-chat" . tool-get-chat)
    ("get-progress" . tool-get-progress)))

(defun dispatch-tool (tool-name args)
  (let ((fn (cdr (assoc tool-name *tool-dispatch* :test #'string=))))
    (if fn
        (funcall fn args)
        (format nil "(err \"unknown tool: ~A\")" tool-name))))

;;;---------------------------------------------------------------------------
;;; Frame parser + entry point
;;;---------------------------------------------------------------------------

(defun parse-call-frame (raw)
  "Parse '(call \"tool-name\" ((k1 v1) ...) \"request-id\")'. Returns
   (values tool-name args-list request-id) or NIL on parse failure."
  (handler-case
      (let ((form (let ((*readtable* (copy-readtable nil))
                        (*package* (find-package '#:keyword)))
                    (read-from-string raw))))
        (when (and (listp form)
                   (symbolp (first form))
                   (equal (symbol-name (first form)) "CALL"))
          (values (second form)
                  (third form)
                  (fourth form))))
    (error () nil)))

(defun handle-ws-message (raw)
  "Parse a (call ...) frame and return an (ok ...) or (err ...) s-expression string."
  (multiple-value-bind (tool args request-id) (parse-call-frame raw)
    (cond
      ((null tool)
       (make-err-response "unknown" "failed to parse frame"))
      (t
       (handler-case
           (let ((result (dispatch-tool tool args)))
             (make-ok-response request-id result))
         (error (e)
           (make-err-response (or request-id "unknown")
                              (format nil "~A" e))))))))
