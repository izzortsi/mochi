;;; test/suite.lisp — root FiveAM suite.

(defpackage #:study-plan.test
  (:use #:cl #:fiveam)
  (:export #:run-all))

(in-package #:study-plan.test)

(def-suite study-plan-suite
  :description "All study-plan tests.")

(in-suite study-plan-suite)

(defun run-all ()
  (let ((result (run 'study-plan-suite)))
    (explain! result)
    result))
