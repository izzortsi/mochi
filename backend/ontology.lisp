;;; ontology.lisp — CRUD for courses / phases / days / cards / concepts.
;;;
;;; Every mutation goes through append-fact so it lands in the journal.
;;; IDs for courses are auto-incremented by scanning existing course facts
;;; and taking max + 1.

(in-package #:study-plan.ontology)

;;;---------------------------------------------------------------------------
;;; Helpers
;;;---------------------------------------------------------------------------

(defun tier-rank (tier)
  (cond ((string= tier "bronze") 0)
        ((string= tier "silver") 1)
        ((string= tier "gold") 2)
        (t 9)))

;;;---------------------------------------------------------------------------
;;; Creators
;;;---------------------------------------------------------------------------

(defun next-course-id ()
  (let ((max 0))
    (dolist (f (facts-with-head "course"))
      (let ((id (parse-integer (fact-arg f 0) :junk-allowed t)))
        (when (and id (> id max)) (setf max id))))
    (1+ max)))

(defun create-course (title slug)
  "Create a course and return its integer id."
  (let ((id (next-course-id)))
    (append-fact (list "course" (format nil "~D" id) title slug))
    id))

(defun create-phase (course-id phase-num title)
  (append-fact (list "phase"
                     (format nil "~D" course-id)
                     (format nil "~D" phase-num)
                     title)))

(defun create-day (course-id day-id phase-num title icon summary key-insight)
  (append-fact (list "day"
                     (format nil "~D" course-id)
                     (format nil "~D" day-id)
                     (format nil "~D" phase-num)
                     title icon summary key-insight)))

(defun card-uid-for (course-id day-id tier task-index)
  (format nil "c~D-d~D-~A-~D" course-id day-id tier task-index))

(defun create-card (card-uid course-id day-id tier task-index text detail)
  (append-fact (list "card"
                     card-uid
                     (format nil "~D" course-id)
                     (format nil "~D" day-id)
                     tier
                     (format nil "~D" task-index)
                     text detail)))

(defun create-concept (concept-id label)
  (append-fact (list "concept" concept-id label)))

(defun tag-card (card-uid concept-id)
  (append-fact (list "tag" card-uid concept-id)))

(defun add-prereq (concept-id prereq-concept-id)
  (append-fact (list "prereq" concept-id prereq-concept-id)))

;;;---------------------------------------------------------------------------
;;; Readers
;;;---------------------------------------------------------------------------

(defun list-courses ()
  "Return a list of (id-int title slug) for every course."
  (mapcar
   (lambda (f)
     (list (parse-integer (fact-arg f 0))
           (fact-arg f 1)
           (fact-arg f 2)))
   (facts-with-head "course")))

(defun list-concepts ()
  "Return a list of (concept-id label)."
  (mapcar
   (lambda (f) (list (fact-arg f 0) (fact-arg f 1)))
   (facts-with-head "concept")))

(defun list-phases-for-course (course-id)
  "Return (phase-num title) for every phase in course-id."
  (let ((key (format nil "~D" course-id)))
    (mapcar
     (lambda (f)
       (list (parse-integer (fact-arg f 1))
             (fact-arg f 2)))
     (facts-matching "phase" (list key nil nil)))))

(defun list-days-for-course (course-id)
  "Return a list of day fact lists for course-id, sorted by day-id asc."
  (let ((key (format nil "~D" course-id)))
    (sort
     (copy-list (facts-matching "day" (list key nil nil nil nil nil nil)))
     #'<
     :key (lambda (f) (parse-integer (fact-arg f 1))))))

(defun list-cards-for-day (course-id day-id)
  "Return a list of card fact lists for a specific (course, day), sorted by
   tier-order then task-index."
  (let ((cid (format nil "~D" course-id))
        (did (format nil "~D" day-id)))
    (sort
     (copy-list (facts-matching "card" (list nil cid did nil nil nil nil)))
     (lambda (a b)
       (let ((ra (tier-rank (fact-arg a 3)))
             (rb (tier-rank (fact-arg b 3)))
             (ia (parse-integer (fact-arg a 4)))
             (ib (parse-integer (fact-arg b 4))))
         (cond ((< ra rb) t)
               ((> ra rb) nil)
               (t (< ia ib))))))))

(defun list-cards-for-course (course-id)
  (let ((cid (format nil "~D" course-id)))
    (facts-matching "card" (list nil cid nil nil nil nil nil))))

(defun tags-for-card (card-uid)
  "Return a list of concept-id strings tagged on CARD-UID."
  (mapcar (lambda (f) (fact-arg f 1))
          (facts-matching "tag" (list card-uid nil))))

(defun prereqs-for-concept (concept-id)
  (mapcar (lambda (f) (fact-arg f 1))
          (facts-matching "prereq" (list concept-id nil))))

;;;---------------------------------------------------------------------------
;;; Single-record lookups
;;;---------------------------------------------------------------------------

(defun course-by-id (course-id)
  (let ((key (format nil "~D" course-id)))
    (first (facts-matching "course" (list key nil nil)))))

(defun day-by-id (course-id day-id)
  (let ((cid (format nil "~D" course-id))
        (did (format nil "~D" day-id)))
    (first (facts-matching "day" (list cid did nil nil nil nil nil)))))

(defun card-by-uid (card-uid)
  (first (facts-matching "card" (list card-uid nil nil nil nil nil nil))))

(defun concept-by-id (concept-id)
  (first (facts-matching "concept" (list concept-id nil))))
