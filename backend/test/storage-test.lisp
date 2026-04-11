;;; test/storage-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

(defvar *test-data-dir* "/tmp/study-plan-test-data/")

(defun reset-test-storage ()
  "Wipe the test prevalence dir and re-init."
  (uiop:delete-directory-tree (pathname *test-data-dir*) :validate t :if-does-not-exist :ignore)
  (ensure-directories-exist *test-data-dir*)
  (study-plan.storage:shutdown-storage)
  (study-plan.storage:init-storage *test-data-dir*))

(test tx-complete-task-awards-xp
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 1 "bronze" 0 "2026-04-10")
  (let ((p (study-plan.storage:current-progress)))
    (is (= 10 (study-plan.models:user-progress-xp p)))
    (is (gethash "c1-d1-bronze-0"
                 (study-plan.models:user-progress-completed-tasks p)))))

(test tx-complete-task-idempotent
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-complete-task 1 1 "bronze" 0 "2026-04-10")
  (is (= 10 (study-plan.models:user-progress-xp (study-plan.storage:current-progress)))))

(test tx-uncomplete-task-preserves-xp
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-uncomplete-task 1 1 "bronze" 0)
  (let ((p (study-plan.storage:current-progress)))
    (is (= 10 (study-plan.models:user-progress-xp p)))
    (is (null (gethash "c1-d1-bronze-0"
                       (study-plan.models:user-progress-completed-tasks p))))))

(test tx-reset-progress-zeroes
  (reset-test-storage)
  (study-plan.storage:tx-complete-task 1 1 "bronze" 0 "2026-04-10")
  (study-plan.storage:tx-reset-progress)
  (let ((p (study-plan.storage:current-progress)))
    (is (= 0 (study-plan.models:user-progress-xp p)))
    (is (= 0 (study-plan.models:user-progress-streak p)))
    (is (zerop (hash-table-count
                (study-plan.models:user-progress-completed-tasks p))))))

(test tx-overlay-task
  (reset-test-storage)
  (study-plan.storage:tx-overlay-task 3 "bronze" 0
                                      "Real problem text"
                                      "Real solution")
  (let ((ov (gethash "c1-d3-bronze-0" (study-plan.storage:get-overrides))))
    (is (not (null ov)))
    (is (equal "Real problem text" (study-plan.models:task-override-text ov)))))

(test tx-append-attempt-logs
  (reset-test-storage)
  (study-plan.storage:tx-append-attempt "c1-d1-bronze-0"
                                        "correct"
                                        "looks good"
                                        "2026-04-10T12:00:00Z")
  (let ((root (study-plan.storage:current-root)))
    (is (= 1 (length (study-plan.models:study-root-attempts root))))))
