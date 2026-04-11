;;; migration.lisp — one-shot v1 seed -> ontology store migration.

(in-package #:study-plan.migration)

;;;---------------------------------------------------------------------------
;;; Hand-written concept dictionary and prereqs for the 7-day plan.
;;;---------------------------------------------------------------------------

(defparameter *v1-concept-dictionary*
  '(("eigenvalue" "eigenvalue")
    ("eigenvector" "eigenvector")
    ("diagonalizability" "diagonalizability")
    ("characteristic-polynomial" "characteristic polynomial")
    ("algebraic-multiplicity" "algebraic multiplicity")
    ("geometric-multiplicity" "geometric multiplicity")
    ("jordan-block" "Jordan block")
    ("similarity" "similar matrices")
    ("change-of-basis" "change of basis")
    ("invertible-operator" "invertible linear operator")
    ("determinant" "determinant")
    ("kernel" "kernel")
    ("orthogonal-operator" "orthogonal operator")
    ("rotation" "rotation")
    ("reflection" "reflection")
    ("orthogonal-matrix" "orthogonal matrix")
    ("symmetric-operator" "symmetric operator")
    ("spectral-theorem" "spectral theorem")
    ("inner-product" "inner product")
    ("chain-rule" "chain rule")
    ("substitution-integration" "integration by substitution")
    ("jacobi-formula" "Jacobi's formula for determinant derivative")))

(defparameter *v1-prereqs*
  '(("diagonalizability" "eigenvalue")
    ("diagonalizability" "eigenvector")
    ("diagonalizability" "algebraic-multiplicity")
    ("diagonalizability" "geometric-multiplicity")
    ("jordan-block" "diagonalizability")
    ("similarity" "change-of-basis")
    ("orthogonal-matrix" "orthogonal-operator")
    ("rotation" "orthogonal-operator")
    ("reflection" "orthogonal-operator")
    ("spectral-theorem" "symmetric-operator")
    ("symmetric-operator" "inner-product")
    ("orthogonal-operator" "inner-product")
    ("jacobi-formula" "chain-rule")))

(defparameter *v1-tags*
  '(("c1-d1-bronze-0" "eigenvalue" "characteristic-polynomial")
    ("c1-d1-silver-0" "diagonalizability" "algebraic-multiplicity" "geometric-multiplicity")
    ("c1-d1-gold-0"   "jordan-block" "diagonalizability")
    ("c1-d2-bronze-0" "eigenvector")
    ("c1-d2-silver-0" "change-of-basis")
    ("c1-d2-gold-0"   "diagonalizability" "eigenvector")
    ("c1-d3-bronze-0" "similarity" "change-of-basis")
    ("c1-d3-silver-0" "similarity" "determinant")
    ("c1-d3-gold-0"   "similarity" "diagonalizability")
    ("c1-d4-bronze-0" "invertible-operator" "determinant" "kernel")
    ("c1-d4-silver-0" "invertible-operator")
    ("c1-d4-gold-0"   "invertible-operator" "determinant")
    ("c1-d5-bronze-0" "rotation" "orthogonal-matrix")
    ("c1-d5-silver-0" "orthogonal-operator" "rotation" "reflection")
    ("c1-d5-gold-0"   "orthogonal-matrix")
    ("c1-d6-bronze-0" "symmetric-operator")
    ("c1-d6-silver-0" "symmetric-operator" "inner-product")
    ("c1-d6-gold-0"   "symmetric-operator" "spectral-theorem")
    ("c1-d7-bronze-0" "chain-rule")
    ("c1-d7-silver-0" "chain-rule" "substitution-integration")
    ("c1-d7-gold-0"   "jacobi-formula" "chain-rule")))

;;;---------------------------------------------------------------------------
;;; Migration core
;;;---------------------------------------------------------------------------

(defun migration-needed-p ()
  "True iff the ontology store has zero 'course' facts."
  (zerop (length (study-plan.ontology.store:facts-with-head "course"))))

(defun emit-structure ()
  (let ((cid (create-course "Linear Algebra & ODE Review" "la-ode-review"))
        (phase-nums (make-hash-table :test 'equal))
        (next-phase 1))
    ;; phases — inferred from phase-title order of first appearance
    (dolist (day study-plan.seed-data:*study-days*)
      (let ((pt (study-day-phase-title day)))
        (unless (gethash pt phase-nums)
          (setf (gethash pt phase-nums) next-phase)
          (create-phase cid next-phase pt)
          (incf next-phase))))
    ;; days + cards
    (dolist (day study-plan.seed-data:*study-days*)
      (create-day cid
                  (study-day-id day)
                  (gethash (study-day-phase-title day) phase-nums)
                  (study-day-title day)
                  (study-day-icon day)
                  (study-day-summary day)
                  (study-day-key-insight day))
      (dolist (group (study-day-tasks day))
        (loop for item in (task-group-items group)
              for i from 0
              do (create-card
                  (format nil "c~D-d~D-~A-~D"
                          cid (study-day-id day) (task-group-tier group) i)
                  cid
                  (study-day-id day)
                  (task-group-tier group)
                  i
                  (task-item-text item)
                  (task-item-detail item)))))
    cid))

(defun emit-ontology ()
  (dolist (pair *v1-concept-dictionary*)
    (create-concept (first pair) (second pair)))
  (dolist (pair *v1-prereqs*)
    (add-prereq (first pair) (second pair)))
  (dolist (entry *v1-tags*)
    (let ((uid (first entry))
          (concepts (rest entry)))
      (dolist (c concepts)
        (tag-card uid c)))))

(defun run-initial-migration ()
  "Idempotent entry point. Safe to call unconditionally at startup."
  (when (migration-needed-p)
    (emit-structure)
    (emit-ontology)
    t))
