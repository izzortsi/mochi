;;; api.lisp — Hunchentoot REST helpers + progress endpoints.
;;;
;;; CORS/JSON helpers, progress-alist, and the three progress handlers live here.
;;; Route registration for all modules is in server.lisp (define-study-routes).

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

(defun json-alist-response (alist)
  "Force cl-json to encode ALIST as a JSON object (not an array).
   Use this when the top-level alist has list-valued entries that would
   otherwise trip cl-json's type-guessing heuristic."
  (set-cors-headers)
  (setf (hunchentoot:content-type*) "application/json")
  (let ((cl-json:*lisp-identifier-name-to-json* #'string-downcase))
    (cl-json:encode-json-alist-to-string alist)))

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
;;; Progress alist helper
;;;---------------------------------------------------------------------------

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

(defun today-iso ()
  (let ((now (local-time:now)))
    (local-time:format-timestring
     nil now :format '((:year 4) #\- (:month 2) #\- (:day 2)))))

;;;---------------------------------------------------------------------------
;;; Card-uid parsing
;;;---------------------------------------------------------------------------

(defun parse-card-uid (uid)
  "Parse 'c1-d3-bronze-2' into (values course-id day-id tier task-index)."
  (let* ((parts (cl-ppcre:split "-" uid)))
    (when (= (length parts) 4)
      (let ((cid (parse-integer (subseq (first parts) 1)))
            (did (parse-integer (subseq (second parts) 1)))
            (tier (third parts))
            (idx (parse-integer (fourth parts))))
        (values cid did tier idx)))))

(defun extract-card-uid (body)
  (dolist (pair body)
    (let* ((k (string-downcase (string (car pair))))
           (v (cdr pair))
           (normalized (remove #\- k)))
      (when (or (equal normalized "carduid") (equal normalized "cardid"))
        (return-from extract-card-uid v))))
  nil)

;;;---------------------------------------------------------------------------
;;; Progress handlers
;;;---------------------------------------------------------------------------

(defun handle-get-progress ()
  (with-options ()
    (json-response (progress-alist (current-progress)))))

(defun handle-post-complete ()
  (with-options ()
    (let* ((body (read-request-json))
           (uid (extract-card-uid body)))
      (if (null uid)
          (progn (setf (hunchentoot:return-code*) 400)
                 (json-response `((:error . "missing card-uid"))))
          (multiple-value-bind (cid did tier idx) (parse-card-uid uid)
            (if cid
                (progn
                  (tx-complete-task cid did tier idx (today-iso))
                  (json-response (progress-alist (current-progress))))
                (progn (setf (hunchentoot:return-code*) 400)
                       (json-response `((:error . "malformed card-uid"))))))))))

(defun handle-post-uncomplete ()
  (with-options ()
    (let* ((body (read-request-json))
           (uid (extract-card-uid body)))
      (if (null uid)
          (progn (setf (hunchentoot:return-code*) 400)
                 (json-response `((:error . "missing card-uid"))))
          (multiple-value-bind (cid did tier idx) (parse-card-uid uid)
            (if cid
                (progn
                  (tx-uncomplete-task cid did tier idx)
                  (json-response (progress-alist (current-progress))))
                (progn (setf (hunchentoot:return-code*) 400)
                       (json-response `((:error . "malformed card-uid"))))))))))

(defun handle-post-reset ()
  (with-options ()
    (tx-reset-progress)
    (json-response (progress-alist (current-progress)))))

;;;---------------------------------------------------------------------------
;;; Route registration
;;;---------------------------------------------------------------------------

(defun register-progress-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/progress$" 'handle-get-progress)
   (hunchentoot:create-regex-dispatcher "^/api/progress/complete$" 'handle-post-complete)
   (hunchentoot:create-regex-dispatcher "^/api/progress/uncomplete$" 'handle-post-uncomplete)
   (hunchentoot:create-regex-dispatcher "^/api/progress/reset$" 'handle-post-reset)))
