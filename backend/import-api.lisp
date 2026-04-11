;;; import-api.lisp — REST handlers for PDF listing/serving and wizard parse.

(in-package #:study-plan.import-api)

(defvar *pdfs-dir* "./pdfs/")

(defvar *max-upload-bytes* (* 32 1024 1024)
  "Hard ceiling on uploaded PDF size (32 MB).")

(defun sanitize-upload-name (raw)
  "Return a sanitized filename, or NIL if rejected."
  (when (and raw (> (length raw) 0))
    (let ((stripped (string-trim '(#\Space #\Tab #\Newline) raw)))
      (cond
        ((search "/" stripped) nil)
        ((search "\\" stripped) nil)
        ((search ".." stripped) nil)
        ((find #\Null stripped) nil)
        ((not (and (>= (length stripped) 4)
                   (string-equal ".pdf"
                                 (subseq stripped (- (length stripped) 4)))))
         nil)
        (t (substitute #\_ #\Space stripped))))))

(defun handle-post-pdf-upload ()
  (study-plan.api:with-options ()
    (let* ((raw-name (hunchentoot:get-parameter "name"))
           (clean-name (sanitize-upload-name raw-name))
           (bytes (hunchentoot:raw-post-data :force-binary t)))
      (cond
        ((null clean-name)
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-alist-response
          `((:error . "invalid or missing name (must be *.pdf with no path chars)"))))
        ((or (null bytes) (zerop (length bytes)))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-alist-response
          `((:error . "empty body"))))
        ((> (length bytes) *max-upload-bytes*)
         (setf (hunchentoot:return-code*) 413)
         (study-plan.api:json-alist-response
          `((:error . "file too large"))))
        (t
         (ensure-directories-exist *pdfs-dir*)
         (let ((path (merge-pathnames clean-name (pathname *pdfs-dir*))))
           (with-open-file (out path
                                :direction :output
                                :element-type '(unsigned-byte 8)
                                :if-exists :supersede
                                :if-does-not-exist :create)
             (write-sequence bytes out))
           (study-plan.api:json-alist-response
            `((:files . ,clean-name)))))))))

(defun list-pdf-files ()
  (when (probe-file (pathname *pdfs-dir*))
    (directory (merge-pathnames "*.*" (pathname *pdfs-dir*)))))

(defun handle-get-pdfs-list ()
  (study-plan.api:with-options ()
    (study-plan.api:json-alist-response
     `((:files . ,(mapcar #'file-namestring (list-pdf-files)))))))

(defun handle-get-pdf-file ()
  (study-plan.api:with-options ()
    (let* ((uri (hunchentoot:script-name*))
           (filename (subseq uri (length "/api/pdfs/")))
           (path (merge-pathnames filename (pathname *pdfs-dir*))))
      (cond
        ((not (probe-file path))
         (setf (hunchentoot:return-code*) 404)
         "not found")
        (t
         (setf (hunchentoot:content-type*) "application/octet-stream")
         (study-plan.api:set-cors-headers)
         (with-open-file (in path :direction :input
                              :element-type '(unsigned-byte 8))
           (let ((bytes (make-array (file-length in)
                                    :element-type '(unsigned-byte 8))))
             (read-sequence bytes in)
             bytes)))))))

(defun ingestion-system-prompt ()
  "You are parsing study material into a structured course.
Return a single JSON object with this exact shape:
{
  \"title\": \"...\",
  \"slug\": \"kebab-case\",
  \"phases\": [{\"num\": 1, \"title\": \"...\"}],
  \"days\": [{\"id\": 1, \"phase\": 1, \"title\": \"...\", \"icon\": \"*\",
              \"summary\": \"...\", \"keyInsight\": \"LaTeX OK\",
              \"cards\": [{\"tier\": \"bronze|silver|gold\",
                           \"text\": \"problem\",
                           \"detail\": \"solution\",
                           \"concepts\": [\"concept-id\", ...]}]}],
  \"concepts\": [{\"id\": \"kebab-case\", \"label\": \"display\"}],
  \"prereqs\": [[\"concept-id\", \"prereq-id\"]]
}
Return ONLY the JSON, no prose, no markdown fences.")

(defun ingestion-extend-system-prompt ()
  "System prompt for extending an existing course with new material."
  "You are extending an existing study course with new material. You will be shown:
- The current course structure (phases, days, existing concepts)
- A new piece of source material

Your job: propose BOTH new days AND cards to insert into existing days where appropriate.

Rules:
- New day-ids must start at max-existing-day-id + 1 and increment from there.
- Prefer existing concept-ids when the meaning matches. Only mint new concepts for genuinely new vocabulary.
- When proposing a card for an EXISTING day, specify the target day-id and tier. Do not specify task-index — the system assigns it.
- New phases only if the material clearly belongs to a topic none of the existing phases cover.
- Return ONLY this JSON shape, no prose, no markdown fences:

{
  \"newPhases\": [{\"num\": 5, \"title\": \"...\"}],
  \"newDays\": [{\"id\": 8, \"phase\": 5, \"title\": \"...\", \"icon\": \"*\",
               \"summary\": \"...\", \"keyInsight\": \"...\",
               \"cards\": [{\"tier\": \"bronze|silver|gold\",
                          \"text\": \"...\", \"detail\": \"...\",
                          \"concepts\": [\"concept-id\", ...]}]}],
  \"insertedCards\": [{\"dayId\": 3, \"tier\": \"silver\",
                     \"text\": \"...\", \"detail\": \"...\",
                     \"concepts\": [\"concept-id\", ...]}],
  \"newConcepts\": [{\"id\": \"kebab-case\", \"label\": \"display\"}],
  \"newPrereqs\": [[\"concept-id\", \"prereq-id\"]]
}")

(defun build-extend-context (course-id)
  "Return a human-readable context string describing the current state of the
   given course — phases, days, and existing concepts — for the LLM."
  (let* ((course (study-plan.ontology:course-by-id course-id))
         (phases (study-plan.ontology:list-phases-for-course course-id))
         (days (study-plan.ontology:list-days-for-course course-id))
         (concepts (study-plan.ontology:list-concepts))
         (max-day-id (if days
                         (reduce #'max days
                                 :key (lambda (d) (parse-integer
                                                   (study-plan.ontology.store:fact-arg d 1))))
                         0)))
    (with-output-to-string (out)
      (when course
        (format out "~&Current course: ~A~%" (study-plan.ontology.store:fact-arg course 1)))
      (format out "~&Max existing day-id: ~D~%" max-day-id)
      (format out "~&~%Existing phases:~%")
      (dolist (p phases)
        (format out "  ~D. ~A~%" (first p) (second p)))
      (format out "~&~%Existing days:~%")
      (dolist (d days)
        (format out "  Day ~A (phase ~A): ~A~%"
                (study-plan.ontology.store:fact-arg d 1)
                (study-plan.ontology.store:fact-arg d 2)
                (study-plan.ontology.store:fact-arg d 3)))
      (format out "~&~%Existing concepts:~%")
      (dolist (c concepts)
        (format out "  ~A (~A)~%" (first c) (second c))))))

(defun handle-post-import-parse ()
  (study-plan.api:with-options ()
    (let* ((body (study-plan.api:read-request-json))
           (api-key (cdr (assoc :api-key body)))
           (text (cdr (assoc :text body)))
           (title (cdr (assoc :title body)))
           (model (or (cdr (assoc :model body)) "GLM-4.7-Flash"))
           (mode (or (cdr (assoc :mode body)) "new"))
           (target-raw (cdr (assoc :target-course-id body)))
           (target-id (when target-raw
                        (if (stringp target-raw)
                            (parse-integer target-raw :junk-allowed t)
                            target-raw))))
      (cond
        ((or (null api-key) (null text))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing api-key or text"))))
        ((and (equal mode "extend") (null target-id))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "extend mode requires target-course-id"))))
        (t
         (handler-case
             (let* ((system-prompt (if (equal mode "extend")
                                       (ingestion-extend-system-prompt)
                                       (ingestion-system-prompt)))
                    (user-content (if (equal mode "extend")
                                      (format nil "~A~%~%Content:~%~A"
                                              (build-extend-context target-id)
                                              text)
                                      (format nil "Title: ~A~%~%Content:~%~A" title text)))
                    (response (dex:post "https://api.z.ai/api/coding/paas/v4/chat/completions"
                                        :headers `(("Content-Type" . "application/json")
                                                   ("Authorization" . ,(format nil "Bearer ~A" api-key)))
                                        :content (cl-json:encode-json-to-string
                                                  `((:model . ,model)
                                                    (:temperature . 0.2)
                                                    (:messages .
                                                     (((:role . "system")
                                                       (:content . ,system-prompt))
                                                      ((:role . "user")
                                                       (:content . ,user-content)))))))))
               (study-plan.api:set-cors-headers)
               (setf (hunchentoot:content-type*) "application/json")
               response)
           (error (e)
             (setf (hunchentoot:return-code*) 502)
             (study-plan.api:json-response `((:error . ,(format nil "llm: ~A" e)))))))))))

(defun register-import-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/pdfs$" 'handle-get-pdfs-list)
   (hunchentoot:create-regex-dispatcher "^/api/pdfs/upload$" 'handle-post-pdf-upload)
   (hunchentoot:create-regex-dispatcher "^/api/pdfs/.+" 'handle-get-pdf-file)
   (hunchentoot:create-regex-dispatcher "^/api/import/parse$" 'handle-post-import-parse)))
