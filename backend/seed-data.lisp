;;; seed-data.lisp — static 7-day study plan content.
;;;
;;; Task text follows scaffold-first strategy:
;;;   - Reconstructable from spec §7 solution notes: real LaTeX.
;;;   - Source-document references (e.g. §4.3.2 Problem 1): "(awaiting PDF) ..."
;;;
;;; Placeholders get filled in at runtime via the overlay pattern: merge-overrides
;;; reads from study-root.overrides and replaces matching placeholder items.

(in-package #:study-plan.seed-data)

(defun ti (text detail)
  (make-task-item :text text :detail detail))

(defvar *study-days*
  (list

   ;;===========================================================================
   ;; Phase 1 — Spectral Foundations
   ;;===========================================================================

   (make-study-day
    :id 1 :phase 1
    :phase-title "Spectral Foundations"
    :title "Eigenvalues & Diagonalizability"
    :icon "◈"
    :summary "Find eigenvalues for four 2x2/3x3 matrices, classify diagonalizability, build a Jordan-block counterexample."
    :key-insight "$A$ is diagonalizable $\\iff m_a(\\lambda) = m_g(\\lambda)$ for every eigenvalue $\\lambda$."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Find the eigenvalues of each matrix in Q1:
(i) $A_1 = \\begin{pmatrix} 2 & 1 & 0 \\\\ 0 & -3 & 4 \\\\ 0 & 0 & 1 \\end{pmatrix}$,
(ii) $A_2 = \\begin{pmatrix} 7 & 3 \\\\ -3 & 7 \\end{pmatrix}$,
(iii) $A_3 = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$,
(iv) $A_4 = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$."
           "(i) Upper triangular: eigenvalues are on the diagonal — $2, -3, 1$.
(ii) $\\det(A_2 - \\lambda I) = (7-\\lambda)^2 + 9 = \\lambda^2 - 14\\lambda + 58 = 0 \\Rightarrow \\lambda = 7 \\pm 3i$.
(iii) $(3-\\lambda)^2 = 0 \\Rightarrow \\lambda = 3$ with algebraic multiplicity 2.
(iv) $(1-\\lambda)^2 - 9 = 0 \\Rightarrow \\lambda^2 - 2\\lambda - 8 = 0 \\Rightarrow \\lambda = 4, \\lambda = -2$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "For each matrix in Q1, determine whether it is diagonalizable. In particular verify that $A_3 = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$ has $\\lambda = 3$ with $m_a = 2$ but $m_g = 1$, and is therefore not diagonalizable."
           "$A_1$: three distinct real eigenvalues $\\Rightarrow$ diagonalizable over $\\mathbb{R}$.
$A_2$: two distinct complex eigenvalues $\\Rightarrow$ diagonalizable over $\\mathbb{C}$, not over $\\mathbb{R}$.
$A_3$: $(A_3 - 3I) = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$, rank 1 $\\Rightarrow$ kernel is 1-dimensional. $m_g(3) = 1 \\neq 2 = m_a(3)$. Not diagonalizable.
$A_4$: distinct real eigenvalues $4, -2$ $\\Rightarrow$ diagonalizable.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Construct a $3 \\times 3$ matrix with a repeated eigenvalue that is NOT diagonalizable. This is a Jordan block of size 3."
           "Take $J = \\begin{pmatrix} \\lambda & 1 & 0 \\\\ 0 & \\lambda & 1 \\\\ 0 & 0 & \\lambda \\end{pmatrix}$ for any $\\lambda$. Characteristic polynomial $(\\lambda - x)^3$, so $m_a(\\lambda) = 3$. But $(J - \\lambda I)$ has rank 2, so $\\dim \\ker(J - \\lambda I) = 1$, meaning $m_g(\\lambda) = 1 < 3$. Not diagonalizable.")))))

   (make-study-day
    :id 2 :phase 1
    :phase-title "Spectral Foundations"
    :title "Eigenvectors & Change of Basis Intro"
    :icon "◇"
    :summary "Find eigenvectors, express a vector in a non-standard basis, diagonalize a symmetric 2x2."
    :key-insight "When $B$ is orthonormal, $c_k = \\langle \\vec{u}, \\vec{v}_k \\rangle$. No matrix inversion needed."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Find the eigenvectors of $A_4 = \\begin{pmatrix} 1 & 3 \\\\ 3 & 1 \\end{pmatrix}$ (Q1c)."
           "From Day 1, $\\lambda = 4$ and $\\lambda = -2$.
For $\\lambda = 4$: $(A - 4I)v = 0 \\Rightarrow \\begin{pmatrix} -3 & 3 \\\\ 3 & -3 \\end{pmatrix}v = 0 \\Rightarrow v_1 = (1, 1)$.
For $\\lambda = -2$: $\\begin{pmatrix} 3 & 3 \\\\ 3 & 3 \\end{pmatrix}v = 0 \\Rightarrow v_2 = (1, -1)$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "Q2: Express $\\vec{u} = (1, 2)$ in the basis $B = \\{(1,1), (1,-1)\\}$. Verify by reconstructing $\\vec{u}$ from the coordinates."
           "Solve $(1,2) = c_1(1,1) + c_2(1,-1)$: $c_1 + c_2 = 1$, $c_1 - c_2 = 2 \\Rightarrow c_1 = 3/2$, $c_2 = -1/2$.
Check: $(3/2)(1,1) + (-1/2)(1,-1) = (3/2 - 1/2, 3/2 + 1/2) = (1, 2)$. ✓")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Show the eigenvectors of $A_4$ are orthogonal, then diagonalize $A_4$ via $P^{-1}AP = D$."
           "$\\langle (1,1), (1,-1) \\rangle = 1 - 1 = 0$. Orthogonal.
$P = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$, $P^{-1} = \\frac{1}{-2}\\begin{pmatrix} -1 & -1 \\\\ -1 & 1 \\end{pmatrix} = \\begin{pmatrix} 1/2 & 1/2 \\\\ 1/2 & -1/2 \\end{pmatrix}$.
$P^{-1} A P = \\begin{pmatrix} 4 & 0 \\\\ 0 & -2 \\end{pmatrix}$.")))))

   ;;===========================================================================
   ;; Phase 2 — Similar Matrices & Operators
   ;;===========================================================================

   (make-study-day
    :id 3 :phase 2
    :phase-title "Similar Matrices & Operators"
    :title "The Similarity Relation"
    :icon "◆"
    :summary "Compute a change-of-basis matrix, verify similarity invariants, diagnose diagonal T_B."
    :key-insight "$T_B = Q^{-1} T_A Q$. Similar matrices share det, trace, eigenvalues, rank."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.3.2 Problem 1 — compute $T_B$ from $T_A$ using the given change-of-basis."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.3.2 Problem 2 — plus: verify $\\det T_A = \\det T_B$ for the matrices in Problem 1."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "If $T_B$ (the matrix of a linear operator $T$ in basis $B$) happens to be diagonal, what does this say about the basis $B$?"
           "$B$ is an eigenbasis of $T$: each basis vector $b_i$ is an eigenvector of $T$ with eigenvalue $d_i = (T_B)_{ii}$. This is exactly the diagonalizability condition.")))))

   (make-study-day
    :id 4 :phase 2
    :phase-title "Similar Matrices & Operators"
    :title "Invertible Operators"
    :icon "◉"
    :summary "Check invertibility by determinant, kernel, and linear-independence; argue geometrically why a specific 2x2 is not invertible."
    :key-insight "Invertible $\\iff \\det T \\neq 0 \\iff$ columns linearly independent $\\iff \\ker f = \\{\\vec{0}\\}$."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.6 Problems 1–3 — check invertibility for each operator, and compute $f^{-1}$ where it exists."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.2.2 worked example — verify $f^{-1}(f(2, 1)) = (2, 1)$."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Without computing $T^{-1}$, explain why $f(x, y) = (2x - y, -4x + 2y)$ is not invertible."
           "The matrix is $\\begin{pmatrix} 2 & -1 \\\\ -4 & 2 \\end{pmatrix}$. The second row is $-2$ times the first, so $\\det = 4 - 4 = 0$. Geometrically, the image is the line spanned by $(2, -4)$ — $f$ collapses the plane onto a line, so it cannot be injective, so it cannot be invertible.")))))

   ;;===========================================================================
   ;; Phase 3 — Orthogonal & Symmetric Operators
   ;;===========================================================================

   (make-study-day
    :id 5 :phase 3
    :phase-title "Orthogonal & Symmetric Operators"
    :title "Orthogonal Operators"
    :icon "⬢"
    :summary "Verify the rotation matrix is orthogonal, classify operators as rotation vs reflection, prove O(n) is closed under multiplication."
    :key-insight "$|f(\\vec{v})| = |\\vec{v}|$ for all $\\vec{v}$; equivalently $A^t = A^{-1}$. Rigid motions: rotations ($\\det = +1$), reflections ($\\det = -1$)."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Verify that the rotation matrix $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$ is orthogonal."
           "$R(\\theta)^t R(\\theta) = \\begin{pmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{pmatrix} \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix} = \\begin{pmatrix} \\cos^2 + \\sin^2 & 0 \\\\ 0 & \\cos^2 + \\sin^2 \\end{pmatrix} = I$. ✓")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Steinbruch §4.6 Problem 18 — for each listed operator, decide whether it is orthogonal. For the ones that are, identify whether it is a rotation ($\\det = +1$) or a reflection ($\\det = -1$)."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Prove: the product of two orthogonal matrices is orthogonal — i.e., $O(n)$ is closed under multiplication."
           "Let $A, B$ be orthogonal: $A^t A = I$ and $B^t B = I$. Then $(AB)^t (AB) = B^t A^t A B = B^t I B = B^t B = I$. So $AB$ is orthogonal.")))))

   (make-study-day
    :id 6 :phase 3
    :phase-title "Orthogonal & Symmetric Operators"
    :title "Symmetric Operators"
    :icon "⬡"
    :summary "Check symmetry, verify the <f(u),v>=<u,f(v)> identity, prove real eigenvalues for 2x2 symmetric."
    :key-insight "$A = A^t$. Spectral theorem: symmetric $\\Rightarrow$ real eigenvalues + orthogonally diagonalizable."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Verify that $f(x, y) = (2x + 4y, 4x - y)$ is symmetric with respect to the standard inner product."
           "Matrix: $A = \\begin{pmatrix} 2 & 4 \\\\ 4 & -1 \\end{pmatrix}$. Since $A^t = A$, $f$ is symmetric.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Verify $\\langle f(\\vec{u}), \\vec{v} \\rangle = \\langle \\vec{u}, f(\\vec{v}) \\rangle$ for the operator above and specific $\\vec{u}, \\vec{v}$. Plus: Steinbruch §4.6 Problem 34a — find $m, n$ that make a given operator symmetric."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Prove: every $2 \\times 2$ symmetric real matrix has real eigenvalues."
           "Let $A = \\begin{pmatrix} a & b \\\\ b & c \\end{pmatrix}$. Characteristic: $\\lambda^2 - (a+c)\\lambda + (ac - b^2) = 0$. Discriminant $= (a+c)^2 - 4(ac - b^2) = a^2 - 2ac + c^2 + 4b^2 = (a-c)^2 + 4b^2 \\ge 0$. Non-negative discriminant $\\Rightarrow$ real roots.")))))

   ;;===========================================================================
   ;; Phase 4 — Calculus Tune-Up
   ;;===========================================================================

   (make-study-day
    :id 7 :phase 4
    :phase-title "Calculus Tune-Up"
    :title "Chain Rule & Integration by Substitution"
    :icon "∂"
    :summary "Differentiate composite functions, apply product + chain rule, compute d/dt of a 2x2 determinant two ways."
    :key-insight "$\\frac{df}{dt} = \\frac{df}{dx}\\frac{dx}{dt}$ is the backbone of ODE techniques. Substitution = chain rule in reverse."
    :tasks
    (list
     (make-task-group
      :tier "bronze" :label "Diagnostic"
      :items
      (list
       (ti "Q3(a): Differentiate $f(x(t)) = \\frac{1 + x^2}{1 + x}$ with $x(t) = 1 + t$, with respect to $t$."
           "$\\frac{df}{dx} = \\frac{2x(1+x) - (1+x^2)}{(1+x)^2} = \\frac{x^2 + 2x - 1}{(1+x)^2}$.
$\\frac{dx}{dt} = 1$.
$\\frac{df}{dt} = \\frac{df}{dx} \\cdot \\frac{dx}{dt} = \\frac{(1+t)^2 + 2(1+t) - 1}{(2+t)^2} = \\frac{t^2 + 4t + 2}{(2+t)^2}$.")))
     (make-task-group
      :tier "silver" :label "Targeted Practice"
      :items
      (list
       (ti "(awaiting PDF) Q3(b,c) and Q4(a,b,c): product rule, chain rule, substitution integrals from the UFRJ self-assessment."
           "Placeholder — will be filled from source PDF via ingest-pdf.")))
     (make-task-group
      :tier "gold" :label "Boss Challenge"
      :items
      (list
       (ti "Compute $\\frac{d}{dt} \\det \\begin{pmatrix} e^t & t \\\\ t^2 & \\sin t \\end{pmatrix}$ two ways: (a) expand the determinant first, then differentiate; (b) apply Jacobi's formula $\\frac{d}{dt}\\det M = \\text{tr}(\\text{adj}(M) \\cdot \\dot M)$."
           "(a) $\\det = e^t \\sin t - t \\cdot t^2 = e^t \\sin t - t^3$.
$\\frac{d}{dt}(e^t \\sin t - t^3) = e^t \\sin t + e^t \\cos t - 3t^2 = e^t(\\sin t + \\cos t) - 3t^2$.
(b) $\\dot M = \\begin{pmatrix} e^t & 1 \\\\ 2t & \\cos t \\end{pmatrix}$, $\\text{adj}(M) = \\begin{pmatrix} \\sin t & -t \\\\ -t^2 & e^t \\end{pmatrix}$.
$\\text{adj}(M) \\dot M = \\begin{pmatrix} \\sin t \\cdot e^t - t \\cdot 2t & \\sin t - t \\cos t \\\\ -t^2 e^t + e^t \\cdot 2t & -t^2 + e^t \\cos t \\end{pmatrix}$.
Trace $= e^t \\sin t - 2t^2 - t^2 + e^t \\cos t = e^t(\\sin t + \\cos t) - 3t^2$. ✓"))))))

  "The full 7-day study plan. Placeholder tasks will be overlaid at runtime from
   the cl-prevalence overrides map.")

;;;---------------------------------------------------------------------------
;;; Overlay merge — runtime replacement of placeholder text/detail with
;;; values written by the ingest-pdf tool.
;;;---------------------------------------------------------------------------

(defun merge-overrides (days overrides)
  "Return a list of STUDY-DAYs with any matching overrides applied. OVERRIDES
   is a hash-table keyed by '{day-id}-{tier}-{task-index}' mapping to TASK-OVERRIDE.
   Does not mutate DAYS."
  (mapcar
   (lambda (day)
     (make-study-day
      :id (study-day-id day)
      :phase (study-day-phase day)
      :phase-title (study-day-phase-title day)
      :title (study-day-title day)
      :icon (study-day-icon day)
      :summary (study-day-summary day)
      :key-insight (study-day-key-insight day)
      :tasks
      (mapcar
       (lambda (group)
         (make-task-group
          :tier (task-group-tier group)
          :label (task-group-label group)
          :items
          (loop for item in (task-group-items group)
                for i from 0
                for key = (format nil "~D-~A-~D"
                                  (study-day-id day)
                                  (task-group-tier group)
                                  i)
                for ov = (gethash key overrides)
                collect (if ov
                            (make-task-item :text (task-override-text ov)
                                            :detail (task-override-detail ov))
                            item))))
       (study-day-tasks day))))
   days))
