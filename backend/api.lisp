;;; api.lisp — Hunchentoot REST handlers.
;;;
;;; cl-json is configured to emit hyphenated JSON keys (phase-title, day-id)
;;; so the wire format matches the spec. The frontend camelizeKeys() transforms
;;; on receipt.

(in-package #:study-plan.api)

;;;---------------------------------------------------------------------------
;;; CORS + JSON helpers
;;;---------------------------------------------------------------------------

(defun set-cors-headers ()
  (setf (hunchentoot:header-out "Access-Control-Allow-Origin") "*")
  (setf (hunchentoot:header-out "Access-Control-Allow-Methods") "GET, POST, OPTIONS")
  (setf (hunchentoot:header-out "Access-Control-Allow-Headers") "Content-Type"))

(defun json-response (obj)
  (set-cors-headers)
  (setf (hunchentoot:content-type*) "application/json")
  (let ((cl-json:*lisp-identifier-name-to-json* #'string-downcase))
    (cl-json:encode-json-to-string obj)))

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
                collect (cons k t)))
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
    (:source-card-uid . ,(generated-task-source-card-uid gt))
    (:tier . ,(generated-task-tier gt))
    (:text . ,(generated-task-text gt))
    (:detail . ,(generated-task-detail gt))
    (:created-at . ,(generated-task-created-at gt))))

(defun merged-days ()
  (merge-overrides *study-days* (get-overrides)))

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

;;;---------------------------------------------------------------------------
;;; Request body extraction (cl-json decodes keys into keywords — be tolerant)
;;;---------------------------------------------------------------------------

(defun extract-task-args (body)
  "Return (values day-id tier task-index) from a JSON body alist."
  (let ((day-id nil)
        (tier nil)
        (task-index nil))
    (dolist (pair body)
      (let* ((key-name (string-downcase (string (car pair))))
             (v (cdr pair))
             ;; Normalize: strip all hyphens for matching.
             (normalized (remove #\- key-name)))
        (cond
          ((equal normalized "dayid")    (setf day-id v))
          ((equal normalized "tier")     (setf tier v))
          ((equal normalized "taskindex") (setf task-index v)))))
    (values day-id tier task-index)))

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

(defun handle-post-complete ()
  (with-options ()
    (let ((body (read-request-json)))
      (multiple-value-bind (day-id tier task-index) (extract-task-args body)
        (tx-complete-task 1 day-id tier task-index (today-iso))
        (json-response (progress-alist (current-progress)))))))

(defun handle-post-uncomplete ()
  (with-options ()
    (let ((body (read-request-json)))
      (multiple-value-bind (day-id tier task-index) (extract-task-args body)
        (tx-uncomplete-task 1 day-id tier task-index)
        (json-response (progress-alist (current-progress)))))))

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
              (hunchentoot:create-regex-dispatcher "^/api/generated$" 'handle-get-generated))))
