;;; course-api.lisp — REST handlers for courses, days, concept-map, next-up.

(in-package #:study-plan.course-api)

(defun course-alist (course-fact)
  (let* ((id (parse-integer (study-plan.ontology.store:fact-arg course-fact 0)))
         (title (study-plan.ontology.store:fact-arg course-fact 1))
         (slug (study-plan.ontology.store:fact-arg course-fact 2))
         (days (study-plan.ontology:list-days-for-course id))
         (total-cards (length (study-plan.ontology:list-cards-for-course id)))
         (completed (count-completed-in-course id)))
    `((:id . ,id)
      (:title . ,title)
      (:slug . ,slug)
      (:day-count . ,(length days))
      (:total-cards . ,total-cards)
      (:completed-cards . ,completed)
      (:completion-pct . ,(if (zerop total-cards) 0
                              (round (* 100 (/ completed total-cards))))))))

(defun count-completed-in-course (course-id)
  (let ((prefix (format nil "c~D-" course-id))
        (p (study-plan.storage:current-progress))
        (n 0))
    (maphash
     (lambda (k v)
       (declare (ignore v))
       (when (and (>= (length k) (length prefix))
                  (string= prefix (subseq k 0 (length prefix))))
         (incf n)))
     (study-plan.models:user-progress-completed-tasks p))
    n))

(defun handle-get-courses ()
  (study-plan.api:with-options ()
    (study-plan.api:json-response
     (mapcar #'course-alist
             (study-plan.ontology.store:facts-with-head "course")))))

(defun day-alist (day-fact)
  `((:id . ,(parse-integer (study-plan.ontology.store:fact-arg day-fact 1)))
    (:phase . ,(parse-integer (study-plan.ontology.store:fact-arg day-fact 2)))
    (:title . ,(study-plan.ontology.store:fact-arg day-fact 3))
    (:icon . ,(study-plan.ontology.store:fact-arg day-fact 4))
    (:summary . ,(study-plan.ontology.store:fact-arg day-fact 5))
    (:key-insight . ,(study-plan.ontology.store:fact-arg day-fact 6))))

(defun card-alist (card-fact)
  `((:card-uid . ,(study-plan.ontology.store:fact-arg card-fact 0))
    (:tier . ,(study-plan.ontology.store:fact-arg card-fact 3))
    (:task-index . ,(parse-integer (study-plan.ontology.store:fact-arg card-fact 4)))
    (:text . ,(study-plan.ontology.store:fact-arg card-fact 5))
    (:detail . ,(study-plan.ontology.store:fact-arg card-fact 6))
    (:concepts . ,(study-plan.ontology:tags-for-card
                   (study-plan.ontology.store:fact-arg card-fact 0)))))

(defun handle-get-course ()
  (study-plan.api:with-options ()
    (let* ((id-str (hunchentoot:get-parameter "id"))
           (id (and id-str (parse-integer id-str :junk-allowed t)))
           (course (and id (study-plan.ontology:course-by-id id))))
      (cond
        ((null course)
         (setf (hunchentoot:return-code*) 404)
         (study-plan.api:json-response `((:error . "course not found"))))
        (t
         (let ((days (study-plan.ontology:list-days-for-course id)))
           (study-plan.api:json-response
            `((:id . ,id)
              (:title . ,(study-plan.ontology.store:fact-arg course 1))
              (:slug . ,(study-plan.ontology.store:fact-arg course 2))
              (:phases . ,(study-plan.ontology:list-phases-for-course id))
              (:days . ,(mapcar
                         (lambda (d)
                           (let* ((dfields (day-alist d))
                                  (did (cdr (assoc :id dfields))))
                             (append dfields
                                     `((:cards . ,(mapcar #'card-alist
                                                          (study-plan.ontology:list-cards-for-day id did)))))))
                         days))))))))))

(defun handle-get-concept-map ()
  (study-plan.api:with-options ()
    (let* ((id-str (hunchentoot:get-parameter "course-id"))
           (id (and id-str (parse-integer id-str :junk-allowed t))))
      (cond
        ((null id)
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing course-id"))))
        (t
         (let* ((concepts (study-plan.ontology.query:concepts-touched-by-course id))
                (nodes (mapcar
                        (lambda (cid)
                          (let ((c (study-plan.ontology:concept-by-id cid)))
                            `((:id . ,cid)
                              (:label . ,(if c (study-plan.ontology.store:fact-arg c 1) cid))
                              (:mastery . ,(study-plan.ontology.query:concept-mastery cid))
                              (:card-count . ,(study-plan.ontology.query:card-count-for-concept cid)))))
                        concepts))
                (edges (mapcar (lambda (e) `((:from . ,(first e)) (:to . ,(second e))))
                               (study-plan.ontology.query:edges-for-course id))))
           (study-plan.api:json-alist-response
            `((:nodes . ,nodes) (:edges . ,edges)))))))))

(defun handle-get-concept-map-all ()
  (study-plan.api:with-options ()
    (let* ((concepts-raw (study-plan.ontology:list-concepts))
           (nodes (mapcar
                   (lambda (c)
                     `((:id . ,(first c))
                       (:label . ,(second c))
                       (:mastery . ,(study-plan.ontology.query:concept-mastery (first c)))
                       (:card-count . ,(study-plan.ontology.query:card-count-for-concept (first c)))))
                   concepts-raw))
           (edges (mapcar
                   (lambda (f)
                     `((:from . ,(study-plan.ontology.store:fact-arg f 0))
                       (:to . ,(study-plan.ontology.store:fact-arg f 1))))
                   (study-plan.ontology.store:facts-with-head "prereq"))))
      (study-plan.api:json-alist-response `((:nodes . ,nodes) (:edges . ,edges))))))

(defun handle-get-next-up ()
  (study-plan.api:with-options ()
    (let* ((id-str (hunchentoot:get-parameter "course-id"))
           (id (and id-str (parse-integer id-str :junk-allowed t))))
      (cond
        ((null id)
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-response `((:error . "missing course-id"))))
        (t
         (study-plan.api:json-alist-response
          `((:next-up . ,(mapcar (lambda (uid) `((:card-uid . ,uid)))
                                 (study-plan.ontology.query:next-up id))))))))))

(defun register-course-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/courses$" 'handle-get-courses)
   (hunchentoot:create-regex-dispatcher "^/api/course$" 'handle-get-course)
   (hunchentoot:create-regex-dispatcher "^/api/concept-map/all$" 'handle-get-concept-map-all)
   (hunchentoot:create-regex-dispatcher "^/api/concept-map$" 'handle-get-concept-map)
   (hunchentoot:create-regex-dispatcher "^/api/next-up$" 'handle-get-next-up)))
