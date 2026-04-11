;;; concept-api.lisp — REST handler for /api/concept.

(in-package #:study-plan.concept-api)

(defun handle-get-concept ()
  (study-plan.api:with-options ()
    (let* ((cid (hunchentoot:get-parameter "id")))
      (cond
        ((null cid)
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing id"))))
        (t
         (let* ((concept (study-plan.ontology:concept-by-id cid))
                (cards (study-plan.ontology.query::cards-tagged-with cid))
                (by-course (make-hash-table :test 'equal)))
           (dolist (uid cards)
             (let* ((card (study-plan.ontology:card-by-uid uid))
                    (course-id (and card (parse-integer
                                          (study-plan.ontology.store:fact-arg card 1)))))
               (when course-id
                 (push `((:card-uid . ,uid)
                         (:text . ,(study-plan.ontology.store:fact-arg card 5)))
                       (gethash course-id by-course)))))
           (study-plan.api:json-response
            `((:concept-id . ,cid)
              (:label . ,(if concept (study-plan.ontology.store:fact-arg concept 1) cid))
              (:mastery . ,(study-plan.ontology.query:concept-mastery cid))
              (:by-course . ,(loop for k being the hash-keys of by-course
                                     using (hash-value v)
                                   collect `((:course-id . ,k)
                                             (:cards . ,(nreverse v)))))))))))))

(defun register-concept-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/concept$" 'handle-get-concept)))
