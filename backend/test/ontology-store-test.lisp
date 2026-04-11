;;; test/ontology-store-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(defvar *test-ontology-dir* "/tmp/study-plan-ontology-test/")

(defun reset-test-ontology ()
  (uiop:delete-directory-tree (pathname *test-ontology-dir*)
                              :validate t :if-does-not-exist :ignore)
  (ensure-directories-exist *test-ontology-dir*)
  (study-plan.ontology.store:reset-ontology-store)
  (study-plan.ontology.store:init-ontology-store
   (merge-pathnames "ontology.journal" *test-ontology-dir*)))

(test store-starts-empty
  (reset-test-ontology)
  (is (= 0 (study-plan.ontology.store:store-size))))

(test append-fact-grows-store
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("course" "1" "Test Course" "test-course"))
  (is (= 1 (study-plan.ontology.store:store-size))))

(test append-fact-is-hash-consed
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("course" "1" "Test Course" "test-course"))
  (study-plan.ontology.store:append-fact
   '("course" "1" "Test Course" "test-course"))
  (is (= 1 (study-plan.ontology.store:store-size))))

(test facts-with-head-filters
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("course" "1" "A" "a"))
  (study-plan.ontology.store:append-fact
   '("course" "2" "B" "b"))
  (study-plan.ontology.store:append-fact
   '("concept" "eigenvalue" "eigenvalue"))
  (is (= 2 (length (study-plan.ontology.store:facts-with-head "course"))))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "concept")))))

(test facts-matching-positional
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("tag" "c1-d1-bronze-0" "eigenvalue"))
  (study-plan.ontology.store:append-fact
   '("tag" "c1-d1-bronze-0" "characteristic-polynomial"))
  (study-plan.ontology.store:append-fact
   '("tag" "c1-d2-bronze-0" "eigenvector"))
  (is (= 2 (length (study-plan.ontology.store:facts-matching
                    "tag" '("c1-d1-bronze-0" nil)))))
  (is (= 1 (length (study-plan.ontology.store:facts-matching
                    "tag" '(nil "eigenvalue"))))))

(test fact-head-and-arg-accessors
  (let ((f '("day" "1" "1" "1" "Day One" "*" "summary" "insight")))
    (is (equal "day" (study-plan.ontology.store:fact-head f)))
    (is (equal "1" (study-plan.ontology.store:fact-arg f 0)))
    (is (equal "Day One" (study-plan.ontology.store:fact-arg f 3)))))

(test journal-roundtrip
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("course" "1" "Persisted Course" "persisted"))
  (study-plan.ontology.store:append-fact
   '("concept" "eigenvalue" "eigenvalue"))
  (study-plan.ontology.store:shutdown-ontology-store)
  (study-plan.ontology.store:init-ontology-store
   (merge-pathnames "ontology.journal" *test-ontology-dir*))
  (is (= 2 (study-plan.ontology.store:store-size)))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "course"))))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "concept")))))

(test append-fact-with-quotes-in-value
  (reset-test-ontology)
  (study-plan.ontology.store:append-fact
   '("concept" "q" "label with \"quotes\" inside"))
  (study-plan.ontology.store:shutdown-ontology-store)
  (study-plan.ontology.store:init-ontology-store
   (merge-pathnames "ontology.journal" *test-ontology-dir*))
  (let ((f (first (study-plan.ontology.store:facts-with-head "concept"))))
    (is (equal "label with \"quotes\" inside"
               (study-plan.ontology.store:fact-arg f 1)))))

;;;---------------------------------------------------------------------------
;;; ontology CRUD (study-plan.ontology package)
;;;---------------------------------------------------------------------------

(test create-course-emits-fact
  (reset-test-ontology)
  (let ((id (study-plan.ontology:create-course "My Course" "my-course")))
    (is (= 1 id))
    (is (= 1 (length (study-plan.ontology.store:facts-with-head "course"))))))

(test create-course-auto-increments
  (reset-test-ontology)
  (is (= 1 (study-plan.ontology:create-course "A" "a")))
  (is (= 2 (study-plan.ontology:create-course "B" "b")))
  (is (= 3 (study-plan.ontology:create-course "C" "c"))))

(test create-day-and-card
  (reset-test-ontology)
  (let ((cid (study-plan.ontology:create-course "C" "c")))
    (study-plan.ontology:create-phase cid 1 "Phase One")
    (study-plan.ontology:create-day cid 1 1 "Day One" "*" "summary" "insight")
    (study-plan.ontology:create-card "c1-d1-bronze-0" cid 1 "bronze" 0 "text" "detail"))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "card")))))

(test card-uid-for-helper
  (is (equal "c1-d3-bronze-2" (study-plan.ontology:card-uid-for 1 3 "bronze" 2)))
  (is (equal "c2-d1-gold-0" (study-plan.ontology:card-uid-for 2 1 "gold" 0))))

(test tag-and-prereq
  (reset-test-ontology)
  (study-plan.ontology:create-concept "eigenvalue" "eigenvalue")
  (study-plan.ontology:create-concept "diagonalizability" "diagonalizability")
  (study-plan.ontology:add-prereq "diagonalizability" "eigenvalue")
  (study-plan.ontology:tag-card "c1-d1-bronze-0" "eigenvalue")
  (is (= 2 (length (study-plan.ontology.store:facts-with-head "concept"))))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "prereq"))))
  (is (= 1 (length (study-plan.ontology.store:facts-with-head "tag")))))

(test list-courses-returns-shape
  (reset-test-ontology)
  (study-plan.ontology:create-course "First" "first")
  (study-plan.ontology:create-course "Second" "second")
  (let ((courses (study-plan.ontology:list-courses)))
    (is (= 2 (length courses)))
    (is (equal 1 (first (first courses))))
    (is (equal "First" (second (first courses))))))

(test tags-for-card
  (reset-test-ontology)
  (study-plan.ontology:tag-card "c1-d1-bronze-0" "eigenvalue")
  (study-plan.ontology:tag-card "c1-d1-bronze-0" "characteristic-polynomial")
  (study-plan.ontology:tag-card "c1-d2-bronze-0" "eigenvector")
  (is (= 2 (length (study-plan.ontology:tags-for-card "c1-d1-bronze-0")))))

(test card-by-uid-lookup
  (reset-test-ontology)
  (study-plan.ontology:create-course "C" "c")
  (study-plan.ontology:create-phase 1 1 "P")
  (study-plan.ontology:create-day 1 1 1 "D" "*" "s" "i")
  (study-plan.ontology:create-card "c1-d1-bronze-0" 1 1 "bronze" 0 "text" "detail")
  (let ((c (study-plan.ontology:card-by-uid "c1-d1-bronze-0")))
    (is (not (null c)))
    (is (equal "text" (study-plan.ontology.store:fact-arg c 5)))))
