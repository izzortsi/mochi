;;; test/migration-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(test migration-needed-on-empty-store
  (reset-test-ontology)
  (is (study-plan.migration:migration-needed-p)))

(test migration-creates-course-one
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let ((courses (study-plan.ontology:list-courses)))
    (is (= 1 (length courses)))
    (is (= 1 (first (first courses))))))

(test migration-creates-7-days
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (is (= 7 (length (study-plan.ontology:list-days-for-course 1)))))

(test migration-creates-cards-for-every-task
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let ((cards (study-plan.ontology:list-cards-for-course 1)))
    (is (= 21 (length cards)))))

(test migration-card-text-matches-seed-data
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let* ((card (study-plan.ontology:card-by-uid "c1-d1-bronze-0"))
         (text (study-plan.ontology.store:fact-arg card 5)))
    (is (search "Find the eigenvalues" text))))

(test migration-emits-concepts-and-prereqs
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let ((concepts (study-plan.ontology:list-concepts)))
    (is (>= (length concepts) 10)))
  (is (> (length (study-plan.ontology.store:facts-with-head "prereq")) 0)))

(test migration-tags-day1-bronze-card
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let ((tags (study-plan.ontology:tags-for-card "c1-d1-bronze-0")))
    (is (member "eigenvalue" tags :test #'string=))))

(test migration-not-needed-after-run
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (is (not (study-plan.migration:migration-needed-p))))

(test migration-idempotent-via-guard
  (reset-test-ontology)
  (study-plan.migration:run-initial-migration)
  (let ((size-1 (study-plan.ontology.store:store-size)))
    (study-plan.migration:run-initial-migration)
    (is (= size-1 (study-plan.ontology.store:store-size)))))
