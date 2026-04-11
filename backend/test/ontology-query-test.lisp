;;; test/ontology-query-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(defun seed-query-fixture ()
  "Build a small 2-day, 3-concept course fixture for query tests."
  (reset-test-ontology)
  (study-plan.ontology:create-course "Fix" "fix")       ; id 1
  (study-plan.ontology:create-phase 1 1 "P")
  (study-plan.ontology:create-day 1 1 1 "D1" "*" "s" "i")
  (study-plan.ontology:create-day 1 2 1 "D2" "*" "s" "i")
  (study-plan.ontology:create-card "c1-d1-bronze-0" 1 1 "bronze" 0 "t" "d")
  (study-plan.ontology:create-card "c1-d2-bronze-0" 1 2 "bronze" 0 "t" "d")
  (study-plan.ontology:create-concept "eigenvalue" "eigenvalue")
  (study-plan.ontology:create-concept "diagonalizability" "diagonalizability")
  (study-plan.ontology:create-concept "jordan-block" "Jordan block")
  (study-plan.ontology:add-prereq "diagonalizability" "eigenvalue")
  (study-plan.ontology:add-prereq "jordan-block" "diagonalizability")
  (study-plan.ontology:tag-card "c1-d1-bronze-0" "eigenvalue")
  (study-plan.ontology:tag-card "c1-d2-bronze-0" "diagonalizability"))

(test concept-mastery-not-started
  (seed-query-fixture)
  (is (equal "not-started"
             (study-plan.ontology.query:concept-mastery "eigenvalue"))))

(test concept-mastery-learning
  (seed-query-fixture)
  (study-plan.ontology.store:append-fact
   '("attempted" "c1-d1-bronze-0" "partial" "2026-04-11T00:00:00Z"))
  (is (equal "learning"
             (study-plan.ontology.query:concept-mastery "eigenvalue"))))

(test concept-mastery-mastered
  (seed-query-fixture)
  (study-plan.ontology.store:append-fact
   '("completed" "c1-d1-bronze-0" "2026-04-11T00:00:00Z"))
  (is (equal "mastered"
             (study-plan.ontology.query:concept-mastery "eigenvalue"))))

(test concept-mastery-concept-without-cards
  (seed-query-fixture)
  (is (equal "not-started"
             (study-plan.ontology.query:concept-mastery "jordan-block"))))

(test next-up-returns-open-cards
  (seed-query-fixture)
  ;; eigenvalue has no prereqs, so c1-d1-bronze-0 is eligible.
  ;; diagonalizability requires eigenvalue to be mastered (it isn't yet).
  (let ((next (study-plan.ontology.query:next-up 1)))
    (is (= 1 (length next)))
    (is (equal "c1-d1-bronze-0" (first next)))))

(test next-up-unlocks-after-prereq-mastered
  (seed-query-fixture)
  (study-plan.ontology.store:append-fact
   '("completed" "c1-d1-bronze-0" "2026-04-11T00:00:00Z"))
  (let ((next (study-plan.ontology.query:next-up 1)))
    (is (= 1 (length next)))
    (is (equal "c1-d2-bronze-0" (first next)))))

(test next-up-excludes-completed
  (seed-query-fixture)
  (study-plan.ontology.store:append-fact
   '("completed" "c1-d1-bronze-0" "2026-04-11T00:00:00Z"))
  (study-plan.ontology.store:append-fact
   '("completed" "c1-d2-bronze-0" "2026-04-11T01:00:00Z"))
  (let ((next (study-plan.ontology.query:next-up 1)))
    (is (= 0 (length next)))))

(test concepts-touched-by-course
  (seed-query-fixture)
  (let ((cs (study-plan.ontology.query:concepts-touched-by-course 1)))
    (is (= 2 (length cs)))))

(test edges-for-course-filters-to-in-course-concepts
  (seed-query-fixture)
  ;; jordan-block isn't touched by course 1, so its prereq edge is excluded.
  (let ((es (study-plan.ontology.query:edges-for-course 1)))
    (is (= 1 (length es)))
    (is (equal '("diagonalizability" "eigenvalue") (first es)))))

(test card-count-for-concept
  (seed-query-fixture)
  (is (= 1 (study-plan.ontology.query:card-count-for-concept "eigenvalue")))
  (is (= 1 (study-plan.ontology.query:card-count-for-concept "diagonalizability")))
  (is (= 0 (study-plan.ontology.query:card-count-for-concept "jordan-block"))))
