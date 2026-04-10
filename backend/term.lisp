;;; cl/src/term.lisp
;;; Core term types, parser, writer, equality, size, and substitution.
(in-package #:study-plan.term)

;;;---------------------------------------------------------------------------
;;; Structs
;;;---------------------------------------------------------------------------

(defstruct (atom-term (:constructor make-atom-term (value)))
  "An atomic constant: a bare string value."
  (value "" :type string :read-only t))

(defstruct (var-term (:constructor make-var-term (name)))
  "A pattern variable. Name stored without the leading ?."
  (name "" :type string :read-only t))

(defstruct (app-term (:constructor make-app-term (head args)))
  "A compound application: (head arg1 arg2 ...)."
  (head "" :type string :read-only t)
  (args nil :type list :read-only t))

;;;---------------------------------------------------------------------------
;;; Predicates
;;;---------------------------------------------------------------------------

;; is-var: true when the term is a var-term.
(defun is-var (term)
  (var-term-p term))

;; is-ground: true when the term contains no variables.
(defun is-ground (term)
  (cond ((atom-term-p term) t)
        ((var-term-p term) nil)
        ((app-term-p term)
         (let ((result t))
           (dolist (arg (app-term-args term))
             (unless (is-ground arg)
               (setf result nil)))
           result))
        (t t)))

;;;---------------------------------------------------------------------------
;;; Equality
;;;---------------------------------------------------------------------------

;; term-equal: structural recursive comparison.
(defun term-equal (a b)
  (cond ((and (atom-term-p a) (atom-term-p b))
         (string= (atom-term-value a) (atom-term-value b)))
        ((and (var-term-p a) (var-term-p b))
         (string= (var-term-name a) (var-term-name b)))
        ((and (app-term-p a) (app-term-p b))
         (and (string= (app-term-head a) (app-term-head b))
              (= (length (app-term-args a)) (length (app-term-args b)))
              (let ((equal-p t))
                (do ((as (app-term-args a) (cdr as))
                     (bs (app-term-args b) (cdr bs)))
                    ((or (null as) (not equal-p)))
                  (unless (term-equal (car as) (car bs))
                    (setf equal-p nil)))
                equal-p)))
        (t nil)))

;;;---------------------------------------------------------------------------
;;; Size
;;;---------------------------------------------------------------------------

;; term-size: counts atomic nodes.
;; For app-term: head counts as 1, plus sum of arg sizes.
;; For atom-term or var-term: 1.
(defun term-size (term)
  (cond ((atom-term-p term) 1)
        ((var-term-p term) 1)
        ((app-term-p term)
         (let ((total 1))   ; 1 for the head symbol
           (dolist (arg (app-term-args term))
             (setf total (+ total (term-size arg))))
           total))
        (t 1)))

;;;---------------------------------------------------------------------------
;;; Variables
;;;---------------------------------------------------------------------------

;; term-vars: returns list of variable names (with duplicates) in left-to-right order.
(defun term-vars (term)
  (cond ((atom-term-p term) '())
        ((var-term-p term) (list (var-term-name term)))
        ((app-term-p term)
         (let ((result '()))
           (dolist (arg (app-term-args term))
             (setf result (append result (term-vars arg))))
           result))
        (t '())))

;;;---------------------------------------------------------------------------
;;; Substitution (immutable alist with sentinel head: (:empty) (name . term) ...)
;;; The first element is always (:empty), so the list is never NIL even when empty.
;;;---------------------------------------------------------------------------

;; make-subst: returns an empty substitution (non-NIL sentinel list).
(defun make-subst ()
  (list :empty))

;; subst-empty-p: true when the substitution has no bindings beyond the sentinel.
(defun subst-empty-p (sub)
  (and (consp sub) (eq (car sub) :empty) (null (cdr sub))))

;; subst-lookup: returns (values term t) if name is bound, else (values nil nil).
(defun subst-lookup (sub name)
  (let ((entry (assoc name (cdr sub) :test #'string=)))
    (if entry
        (values (cdr entry) t)
        (values nil nil))))

;; subst-bind: returns a new substitution with name bound to term.
;; Prepends the new binding after the sentinel.
(defun subst-bind (sub name term)
  (cons :empty (cons (cons name term) (cdr sub))))

;; apply-subst: walks a term replacing variables with their bindings.
(defun apply-subst (term sub)
  (cond ((subst-empty-p sub) term)
        ((var-term-p term)
         (multiple-value-bind (bound foundp)
             (subst-lookup sub (var-term-name term))
           (if foundp bound term)))
        ((app-term-p term)
         (make-app-term
          (app-term-head term)
          (mapcar (lambda (arg) (apply-subst arg sub))
                  (app-term-args term))))
        (t term)))

;;;---------------------------------------------------------------------------
;;; Tokenizer
;;;---------------------------------------------------------------------------

;; tokenize: splits a string into a list of token strings.
;; Recognizes: "(" ")" quoted strings and bare tokens.
(defun tokenize (str)
  (let ((tokens '())
        (i 0)
        (len (length str)))
    (loop
      (when (>= i len) (return))
      (let ((ch (char str i)))
        (cond ((char= ch #\()
               (push "(" tokens)
               (incf i))
              ((char= ch #\))
               (push ")" tokens)
               (incf i))
              ((member ch '(#\Space #\Tab #\Newline #\Return) :test #'char=)
               (incf i))
              ;; Quoted string: collect between double quotes, handle \" escapes
              ((char= ch #\")
               (incf i) ; skip opening quote
               (let ((chars nil))
                 (loop while (and (< i len) (not (char= (char str i) #\")))
                       do (cond
                            ;; Backslash escape: \\ or \"
                            ((and (char= (char str i) #\\)
                                  (< (1+ i) len)
                                  (member (char str (1+ i)) '(#\" #\\) :test #'char=))
                             (push (char str (1+ i)) chars)
                             (incf i 2))
                            (t
                             (push (char str i) chars)
                             (incf i))))
                 (push (coerce (nreverse chars) 'string) tokens)
                 (when (< i len) (incf i)))) ; skip closing quote
              (t
               ;; collect a bare token
               (let ((start i))
                 (loop while (and (< i len)
                                  (not (member (char str i)
                                               '(#\( #\) #\Space #\Tab #\Newline #\Return #\")
                                               :test #'char=)))
                       do (incf i))
                 (push (subseq str start i) tokens))))))
    (nreverse tokens)))

;;;---------------------------------------------------------------------------
;;; Parser
;;;---------------------------------------------------------------------------

;; parse-token: converts a single token string to a term.
;; Tokens starting with "?" (and length > 1) become var-terms; others become atom-terms.
(defun parse-token (tok)
  (if (and (> (length tok) 1) (char= (char tok 0) #\?))
      (make-var-term (subseq tok 1))
      (make-atom-term tok)))

;; parse-tokens: recursive descent parser. Returns (values term remaining-tokens).
(defun parse-tokens (tokens)
  (when (null tokens)
    (error "parse-sexp: unexpected end of input"))
  (let ((tok (car tokens))
        (rest (cdr tokens)))
    (cond ((string= tok "(")
           ;; read until matching ")"
           (when (null rest)
             (error "parse-sexp: missing closing ')'"))
           ;; first element is the head
           (when (string= (car rest) ")")
             (error "parse-sexp: empty list () is not a valid term"))
           (multiple-value-bind (head-term after-head)
               (parse-tokens rest)
             ;; head must be an atom-term (symbol)
             (unless (atom-term-p head-term)
               (error "parse-sexp: head of a list must be a plain symbol"))
             (let ((head-str (atom-term-value head-term))
                   (args '())
                   (remaining after-head))
               ;; collect args until ")"
               (loop
                 (when (null remaining)
                   (error "parse-sexp: missing closing ')'"))
                 (when (string= (car remaining) ")")
                   (setf remaining (cdr remaining))
                   (return))
                 (multiple-value-bind (arg-term after-arg)
                     (parse-tokens remaining)
                   (push arg-term args)
                   (setf remaining after-arg)))
               (values (make-app-term head-str (nreverse args))
                       remaining))))
          ((string= tok ")")
           (error "parse-sexp: unexpected ')'"))
          (t
           (values (parse-token tok) rest)))))

;; parse-sexp: parse a string into a term.
(defun parse-sexp (str)
  (let ((tokens (tokenize str)))
    (when (null tokens)
      (error "parse-sexp: empty input"))
    (multiple-value-bind (term remaining)
        (parse-tokens tokens)
      (when remaining
        (error "parse-sexp: unexpected trailing tokens: ~a" remaining))
      term)))

;;;---------------------------------------------------------------------------
;;; Writer
;;;---------------------------------------------------------------------------

;; needs-quoting: true if the atom value contains spaces or parens
(defun needs-quoting (s)
  (some (lambda (ch) (member ch '(#\Space #\Tab #\Newline #\( #\)) :test #'char=))
        (coerce s 'list)))

;; write-sexp: produce the canonical s-expression string for a term.
(defun write-sexp (term)
  (cond ((atom-term-p term)
         (let ((val (atom-term-value term)))
           (if (needs-quoting val)
               (format nil "\"~A\"" val)
               val)))
        ((var-term-p term)
         (concatenate 'string "?" (var-term-name term)))
        ((app-term-p term)
         (let ((parts (list (app-term-head term))))
           (dolist (arg (app-term-args term))
             (push (write-sexp arg) parts))
           (concatenate 'string
                        "("
                        (format nil "~{~a~^ ~}" (nreverse parts))
                        ")")))
        (t (error "write-sexp: unknown term type ~a" term))))
