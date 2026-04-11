;;; ontology-query.lisp — derivation rules over the ontology store.
;;;
;;; Pure functions. No mutation. No caching. Each call scans the store.

(in-package #:study-plan.ontology.query)

;;;---------------------------------------------------------------------------
;;; Concept -> cards
;;;---------------------------------------------------------------------------

(defun cards-tagged-with (concept-id)
  "Return a list of card-uid strings tagged with CONCEPT-ID."
  (mapcar (lambda (f) (fact-arg f 0))
          (facts-matching "tag" (list nil concept-id))))

(defun card-count-for-concept (concept-id)
  (length (cards-tagged-with concept-id)))

(defun card-has-event (card-uid head)
  (not (null (facts-matching head (list card-uid nil)))))

(defun card-completed-p (card-uid)
  (card-has-event card-uid "completed"))

(defun card-attempted-p (card-uid)
  (card-has-event card-uid "attempted"))

;;;---------------------------------------------------------------------------
;;; concept-mastery
;;;
;;; not-started: no cards tagged, or no tagged card has any attempt/completion
;;; mastered:    every tagged card has a completion event
;;; learning:    anything in between
;;;---------------------------------------------------------------------------

(defun concept-mastery (concept-id)
  (let* ((cards (cards-tagged-with concept-id)))
    (cond
      ((null cards) "not-started")
      ((every #'card-completed-p cards) "mastered")
      ((some #'card-attempted-p cards) "learning")
      ((some #'card-completed-p cards) "learning")
      (t "not-started"))))

;;;---------------------------------------------------------------------------
;;; next-up
;;;---------------------------------------------------------------------------

(defun all-prereqs-mastered-p (concept-id)
  (let ((prereqs (prereqs-for-concept concept-id)))
    (or (null prereqs)
        (every (lambda (p) (equal "mastered" (concept-mastery p)))
               prereqs))))

(defun card-eligible-p (card-fact)
  "T if every concept tagged on this card has all prereqs mastered and the
   card itself is not completed."
  (let* ((uid (fact-arg card-fact 0)))
    (and (not (card-completed-p uid))
         (let ((concepts (tags-for-card uid)))
           (or (null concepts)
               (every #'all-prereqs-mastered-p concepts))))))

(defun card-sort-key (card-fact)
  (let ((day (parse-integer (fact-arg card-fact 2)))
        (tier (fact-arg card-fact 3))
        (idx (parse-integer (fact-arg card-fact 4))))
    (list day (study-plan.ontology::tier-rank tier) idx)))

(defun card-sort-lessp (a b)
  (let ((ka (card-sort-key a))
        (kb (card-sort-key b)))
    (loop for x in ka
          for y in kb
          do (cond ((< x y) (return-from card-sort-lessp t))
                   ((> x y) (return-from card-sort-lessp nil)))
          finally (return nil))))

(defun next-up (course-id)
  "Return up to 5 card-uids in course-id that are eligible to work on now."
  (let* ((cards (list-cards-for-course course-id))
         (eligible (remove-if-not #'card-eligible-p cards))
         (sorted (sort (copy-list eligible) #'card-sort-lessp)))
    (mapcar (lambda (f) (fact-arg f 0))
            (subseq sorted 0 (min 5 (length sorted))))))

;;;---------------------------------------------------------------------------
;;; Concept graph for a course
;;;---------------------------------------------------------------------------

(defun concepts-touched-by-course (course-id)
  "Return a list of concept-id strings that appear on any card in course-id,
   deduplicated."
  (let ((seen (make-hash-table :test 'equal))
        (out nil))
    (dolist (card (list-cards-for-course course-id))
      (dolist (c (tags-for-card (fact-arg card 0)))
        (unless (gethash c seen)
          (setf (gethash c seen) t)
          (push c out))))
    (nreverse out)))

(defun edges-for-course (course-id)
  "Return (concept-id prereq-id) edge pairs where BOTH endpoints are touched
   by course-id. Prereq edges with an out-of-course endpoint are filtered out."
  (let* ((concepts (concepts-touched-by-course course-id))
         (in-course (make-hash-table :test 'equal)))
    (dolist (c concepts) (setf (gethash c in-course) t))
    (loop for f in (facts-with-head "prereq")
          for from = (fact-arg f 0)
          for to = (fact-arg f 1)
          when (and (gethash from in-course) (gethash to in-course))
            collect (list from to))))
