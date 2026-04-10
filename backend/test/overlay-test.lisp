;;; test/overlay-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(test overlay-replaces-placeholder
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal)))
    (setf (gethash "3-bronze-0" overrides)
          (study-plan.models:make-task-override
           :text "REAL Problem 1 text"
           :detail "REAL solution"))
    (let* ((merged (study-plan.seed-data:merge-overrides days overrides))
           (day3 (find 3 merged :key #'study-plan.models:study-day-id))
           (bronze (find "bronze" (study-plan.models:study-day-tasks day3)
                         :key #'study-plan.models:task-group-tier :test #'string=))
           (item (first (study-plan.models:task-group-items bronze))))
      (is (equal "REAL Problem 1 text"
                 (study-plan.models:task-item-text item))))))

(test overlay-is-non-destructive
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal))
         (original-day3 (find 3 days :key #'study-plan.models:study-day-id))
         (original-text (study-plan.models:task-item-text
                         (first (study-plan.models:task-group-items
                                 (first (study-plan.models:study-day-tasks original-day3)))))))
    (setf (gethash "3-bronze-0" overrides)
          (study-plan.models:make-task-override :text "override" :detail "d"))
    (study-plan.seed-data:merge-overrides days overrides)
    (is (equal original-text
               (study-plan.models:task-item-text
                (first (study-plan.models:task-group-items
                        (first (study-plan.models:study-day-tasks original-day3)))))))))

(test overlay-missing-keys-keep-original
  (let* ((days study-plan.seed-data:*study-days*)
         (overrides (make-hash-table :test 'equal))
         (merged (study-plan.seed-data:merge-overrides days overrides))
         (day1 (find 1 merged :key #'study-plan.models:study-day-id))
         (bronze (first (study-plan.models:study-day-tasks day1)))
         (item (first (study-plan.models:task-group-items bronze))))
    (is (search "Find the eigenvalues"
                (study-plan.models:task-item-text item)))))
