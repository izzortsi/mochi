;;; import-api.lisp — REST handlers for PDF listing/serving and wizard parse.

(in-package #:study-plan.import-api)

(defvar *pdfs-dir* "./pdfs/")

(defun list-pdf-files ()
  (when (probe-file (pathname *pdfs-dir*))
    (directory (merge-pathnames "*.*" (pathname *pdfs-dir*)))))

(defun handle-get-pdfs-list ()
  (study-plan.api:with-options ()
    (study-plan.api:json-response
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

(defun handle-post-import-parse ()
  (study-plan.api:with-options ()
    (let* ((body (study-plan.api:read-request-json))
           (api-key (cdr (assoc :api--key body)))
           (text (cdr (assoc :text body)))
           (title (cdr (assoc :title body)))
           (model (or (cdr (assoc :model body)) "GLM-4.7-Flash")))
      (cond
        ((or (null api-key) (null text))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing api-key or text"))))
        (t
         (handler-case
             (let ((response (dex:post "https://api.z.ai/api/coding/paas/v4/chat/completions"
                                       :headers `(("Content-Type" . "application/json")
                                                  ("Authorization" . ,(format nil "Bearer ~A" api-key)))
                                       :content (cl-json:encode-json-to-string
                                                 `((:model . ,model)
                                                   (:temperature . 0.2)
                                                   (:messages .
                                                    (((:role . "system")
                                                      (:content . ,(ingestion-system-prompt)))
                                                     ((:role . "user")
                                                      (:content . ,(format nil "Title: ~A~%~%Content:~%~A"
                                                                           title text))))))))))
               (study-plan.api:set-cors-headers)
               (setf (hunchentoot:content-type*) "application/json")
               response)
           (error (e)
             (setf (hunchentoot:return-code*) 502)
             (study-plan.api:json-response `((:error . ,(format nil "llm: ~A" e)))))))))))

(defun register-import-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/pdfs$" 'handle-get-pdfs-list)
   (hunchentoot:create-regex-dispatcher "^/api/pdfs/.+" 'handle-get-pdf-file)
   (hunchentoot:create-regex-dispatcher "^/api/import/parse$" 'handle-post-import-parse)))
