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
;;; S-expression encoders (CL struct -> sexp string)
;;;---------------------------------------------------------------------------

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

(defun task-item-to-sexp (item)
  (format nil "(item ~A ~A)"
          (sexp-quote (task-item-text item))
          (sexp-quote (task-item-detail item))))

(defun task-group-to-sexp (group)
  (format nil "(group ~A ~A (~{~A~^ ~}))"
          (sexp-quote (task-group-tier group))
          (sexp-quote (task-group-label group))
          (mapcar #'task-item-to-sexp (task-group-items group))))

(defun study-day-to-sexp (day)
  (format nil "(day ~D ~A ~A ~A ~A ~A (~{~A~^ ~}))"
          (study-day-id day)
          (sexp-quote (study-day-title day))
          (sexp-quote (study-day-phase-title day))
          (sexp-quote (study-day-icon day))
          (sexp-quote (study-day-summary day))
          (sexp-quote (study-day-key-insight day))
          (mapcar #'task-group-to-sexp (study-day-tasks day))))

(defun merged-days ()
  (merge-overrides *study-days* (get-overrides)))

;;;---------------------------------------------------------------------------
;;; Argument extraction from parsed alist
;;;
;;; After `read-from-string` in a keyword package, an alist arg list like
;;;   ((day-id 1) (tier "bronze") (task-index 0))
;;; parses as
;;;   ((:DAY-ID 1) (:TIER "bronze") (:TASK-INDEX 0))
;;;---------------------------------------------------------------------------

(defun arg (args key)
  "Look up KEY (a string) in parsed arg pairs. Matches case-insensitively."
  (let ((wanted (string-upcase key)))
    (dolist (pair args)
      (when (and (listp pair) (symbolp (first pair))
                 (equal (symbol-name (first pair)) wanted))
        (return (second pair))))))

(defun to-int (v)
  (if (stringp v) (parse-integer v) v))

;;;---------------------------------------------------------------------------
;;; Tool implementations
;;;---------------------------------------------------------------------------

(defun tool-fetch-day (args)
  (let* ((id (to-int (arg args "day-id")))
         (day (find id (merged-days) :key #'study-day-id)))
    (if day
        (study-day-to-sexp day)
        "(not-found)")))

(defun tool-fetch-task (args)
  (let* ((day-id (to-int (arg args "day-id")))
         (tier (arg args "tier"))
         (idx (to-int (arg args "task-index")))
         (day (find day-id (merged-days) :key #'study-day-id))
         (group (and day (find tier (study-day-tasks day)
                               :key #'task-group-tier
                               :test #'string=)))
         (item (and group (nth idx (task-group-items group)))))
    (if item
        (task-item-to-sexp item)
        "(not-found)")))

(defun tool-mark-task-complete (args)
  (let* ((day-id (to-int (arg args "day-id")))
         (tier (arg args "tier"))
         (idx (to-int (arg args "task-index"))))
    (tx-complete-task day-id tier idx (today-iso))
    (format nil "(ok (xp ~D))"
            (user-progress-xp (current-progress)))))

(defun tool-get-progress (args)
  (declare (ignore args))
  (let ((p (current-progress)))
    (format nil "(progress (xp ~D) (streak ~D) (best-streak ~D))"
            (user-progress-xp p)
            (user-progress-streak p)
            (user-progress-best-streak p))))

(defun tool-overlay-task (args)
  (let ((day-id (to-int (arg args "day-id")))
        (tier (arg args "tier"))
        (idx (to-int (arg args "task-index")))
        (text (arg args "text"))
        (detail (arg args "detail")))
    (tx-overlay-task day-id tier idx text detail)
    "(ok)"))

(defun tool-append-generated-task (args)
  (let ((id (arg args "id"))
        (day-id (to-int (arg args "day-id")))
        (tier (arg args "tier"))
        (source-idx (to-int (arg args "source-task-index")))
        (text (arg args "text"))
        (detail (arg args "detail")))
    (tx-append-generated-task id day-id tier source-idx text detail (today-iso))
    "(ok)"))

(defun tool-grade-attempt (args)
  (let ((day-id (to-int (arg args "day-id")))
        (tier (arg args "tier"))
        (idx (to-int (arg args "task-index")))
        (text (arg args "text"))
        (verdict (arg args "verdict"))
        (comment (arg args "comment")))
    (tx-append-attempt day-id tier idx text verdict comment
                       (local-time:format-timestring nil (local-time:now)))
    "(ok)"))

(defun tool-append-chat (args)
  (let ((day-id (to-int (arg args "day-id")))
        (role (arg args "role"))
        (content (arg args "content"))
        (tool-name (arg args "tool-name")))
    (tx-append-chat-message day-id role content tool-name
                            (local-time:format-timestring nil (local-time:now)))
    "(ok)"))

(defun tool-get-chat (args)
  (let* ((day-id (to-int (arg args "day-id")))
         (messages (get-chat-for-day day-id)))
    (format nil "(messages ~{~A~^ ~})"
            (mapcar (lambda (m)
                      (format nil "(msg ~A ~A)"
                              (sexp-quote (chat-message-role m))
                              (sexp-quote (chat-message-content m))))
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
