;;; test/gamification-test.lisp

(in-package #:study-plan.test)

(in-suite study-plan-suite)

;;;---------------------------------------------------------------------------
;;; base-xp
;;;---------------------------------------------------------------------------

(test base-xp-values
  (is (= 10 (study-plan.gamification:base-xp "bronze")))
  (is (= 25 (study-plan.gamification:base-xp "silver")))
  (is (= 50 (study-plan.gamification:base-xp "gold"))))

;;;---------------------------------------------------------------------------
;;; streak-multiplier: 1 + floor(streak / 3)
;;;---------------------------------------------------------------------------

(test streak-multiplier-values
  (is (= 1 (study-plan.gamification:streak-multiplier 0)))
  (is (= 1 (study-plan.gamification:streak-multiplier 2)))
  (is (= 2 (study-plan.gamification:streak-multiplier 3)))
  (is (= 2 (study-plan.gamification:streak-multiplier 5)))
  (is (= 3 (study-plan.gamification:streak-multiplier 6))))

;;;---------------------------------------------------------------------------
;;; effective-xp
;;;---------------------------------------------------------------------------

(test effective-xp-values
  (is (= 10 (study-plan.gamification:effective-xp "bronze" 0)))
  (is (= 20 (study-plan.gamification:effective-xp "bronze" 3)))
  (is (= 50 (study-plan.gamification:effective-xp "silver" 3)))
  (is (= 150 (study-plan.gamification:effective-xp "gold" 6))))

;;;---------------------------------------------------------------------------
;;; compute-highest-tier: cumulative. All bronze to reach bronze, etc.
;;;---------------------------------------------------------------------------

(defun make-test-day ()
  (study-plan.models:make-study-day
   :id 1 :phase 1 :phase-title "Test"
   :title "Test Day" :icon "*" :summary "" :key-insight ""
   :tasks (list (study-plan.models:make-task-group
                 :tier "bronze" :label "Diagnostic"
                 :items (list (study-plan.models:make-task-item)
                              (study-plan.models:make-task-item)))
                (study-plan.models:make-task-group
                 :tier "silver" :label "Practice"
                 :items (list (study-plan.models:make-task-item)))
                (study-plan.models:make-task-group
                 :tier "gold" :label "Boss"
                 :items (list (study-plan.models:make-task-item))))))

(test compute-highest-tier-none
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (is (equal "none" (study-plan.gamification:compute-highest-tier 1 day completed)))))

(test compute-highest-tier-bronze-partial
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "c1-d1-bronze-0" completed) t)
    (is (equal "none" (study-plan.gamification:compute-highest-tier 1 day completed)))))

(test compute-highest-tier-bronze-complete
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "c1-d1-bronze-0" completed) t)
    (setf (gethash "c1-d1-bronze-1" completed) t)
    (is (equal "bronze" (study-plan.gamification:compute-highest-tier 1 day completed)))))

(test compute-highest-tier-silver
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "c1-d1-bronze-0" completed) t)
    (setf (gethash "c1-d1-bronze-1" completed) t)
    (setf (gethash "c1-d1-silver-0" completed) t)
    (is (equal "silver" (study-plan.gamification:compute-highest-tier 1 day completed)))))

(test compute-highest-tier-gold
  (let ((day (make-test-day))
        (completed (make-hash-table :test 'equal)))
    (setf (gethash "c1-d1-bronze-0" completed) t)
    (setf (gethash "c1-d1-bronze-1" completed) t)
    (setf (gethash "c1-d1-silver-0" completed) t)
    (setf (gethash "c1-d1-gold-0" completed) t)
    (is (equal "gold" (study-plan.gamification:compute-highest-tier 1 day completed)))))

;;;---------------------------------------------------------------------------
;;; update-streak-after-gold
;;;---------------------------------------------------------------------------

(test update-streak-first-gold
  (let ((progress (study-plan.models:make-user-progress)))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-10")
    (is (= 1 (study-plan.models:user-progress-streak progress)))
    (is (= 1 (study-plan.models:user-progress-best-streak progress)))
    (is (equal "2026-04-10" (study-plan.models:user-progress-last-completed progress)))))

(test update-streak-same-day-noop
  (let ((progress (study-plan.models:make-user-progress
                   :streak 2 :best-streak 2 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-10")
    (is (= 2 (study-plan.models:user-progress-streak progress)))
    (is (= 2 (study-plan.models:user-progress-best-streak progress)))))

(test update-streak-consecutive
  (let ((progress (study-plan.models:make-user-progress
                   :streak 2 :best-streak 2 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-11")
    (is (= 3 (study-plan.models:user-progress-streak progress)))
    (is (= 3 (study-plan.models:user-progress-best-streak progress)))))

(test update-streak-gap-resets
  (let ((progress (study-plan.models:make-user-progress
                   :streak 5 :best-streak 5 :last-completed "2026-04-10")))
    (study-plan.gamification:update-streak-after-gold progress "2026-04-15")
    (is (= 1 (study-plan.models:user-progress-streak progress)))
    (is (= 5 (study-plan.models:user-progress-best-streak progress)))))
