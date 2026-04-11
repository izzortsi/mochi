;;; ontology-store.lisp — append-only s-expression fact store.
;;;
;;; Facts are lists of strings: ("head" "arg0" "arg1" ...). Numeric args are
;;; stored as their string representation; parsing happens at the ontology
;;; module boundary.
;;;
;;; The store is an in-memory list of unique facts (hash-consed by `equal`
;;; hash-table lookup at insert time) plus a journal file on disk that gets
;;; replayed at startup.

(in-package #:study-plan.ontology.store)

(defvar *ontology-store* nil
  "List of fact tuples (each a list of strings), in insertion order.")

(defvar *ontology-index* nil
  "Hash-table keyed by the fact's printed form for O(1) duplicate detection.")

(defvar *ontology-journal-path* nil)

(defvar *ontology-journal-stream* nil)

(defun fact-head (fact)
  (first fact))

(defun fact-arg (fact i)
  "Return the i-th positional argument (0-indexed, after the head)."
  (nth (1+ i) fact))

(defun fact-key (fact)
  "String key for hash-cons lookup. Uses S-expression print form."
  (format nil "~S" fact))

(defun write-fact-to-journal (fact)
  "Write FACT as a single-line readable s-expression. *print-readably* t
   forces newlines inside strings to be escaped as \\n, so each fact always
   occupies exactly one journal line and survives replay."
  (when *ontology-journal-stream*
    (let ((*print-readably* t)
          (*print-escape* t)
          (*print-pretty* nil)
          (*print-right-margin* most-positive-fixnum))
      (prin1 fact *ontology-journal-stream*)
      (terpri *ontology-journal-stream*)
      (finish-output *ontology-journal-stream*))))

(defun reset-ontology-store ()
  "Shutdown if open, clear in-memory state. Used by tests."
  (when *ontology-journal-stream*
    (close *ontology-journal-stream*)
    (setf *ontology-journal-stream* nil))
  (setf *ontology-store* nil
        *ontology-index* nil
        *ontology-journal-path* nil))

(defun shutdown-ontology-store ()
  (when *ontology-journal-stream*
    (close *ontology-journal-stream*)
    (setf *ontology-journal-stream* nil)))

(defun init-ontology-store (journal-path)
  "Open the journal, replay it into memory, and leave the stream open for
   appends."
  (shutdown-ontology-store)
  (setf *ontology-store* nil
        *ontology-index* (make-hash-table :test 'equal)
        *ontology-journal-path* (pathname journal-path))
  (ensure-directories-exist *ontology-journal-path*)
  (when (probe-file *ontology-journal-path*)
    (with-open-file (in *ontology-journal-path* :direction :input)
      (loop for line = (read-line in nil nil)
            while line
            when (> (length line) 0) do
              (handler-case
                  (let ((fact (with-input-from-string (s line) (read s))))
                    (when (and (listp fact) (stringp (first fact)))
                      (let ((k (fact-key fact)))
                        (unless (gethash k *ontology-index*)
                          (setf (gethash k *ontology-index*) t)
                          (push fact *ontology-store*)))))
                (error (e)
                  (format *error-output* "~&[ontology] skip bad line: ~A~%" e))))))
  (setf *ontology-store* (nreverse *ontology-store*))
  (setf *ontology-journal-stream*
        (open *ontology-journal-path*
              :direction :output
              :if-exists :append
              :if-does-not-exist :create))
  (length *ontology-store*))

(defun append-fact (fact)
  "Add FACT to the store if not already present. Writes to journal. Returns
   T if the fact was new, NIL if it collapsed."
  (let ((k (fact-key fact)))
    (cond
      ((gethash k *ontology-index*) nil)
      (t
       (setf (gethash k *ontology-index*) t)
       (setf *ontology-store*
             (append *ontology-store* (list fact)))
       (write-fact-to-journal fact)
       t))))

(defun store-size ()
  (length *ontology-store*))

(defun facts-with-head (head)
  "All facts whose head string equals HEAD."
  (remove-if-not
   (lambda (f) (and (listp f) (stringp (first f)) (string= (first f) head)))
   *ontology-store*))

(defun facts-matching (head pattern)
  "Return facts whose head = HEAD and whose positional args match PATTERN
   elementwise: a NIL in the pattern matches anything; a non-NIL element must
   equal the fact arg at that position by STRING=."
  (remove-if-not
   (lambda (f)
     (and (listp f)
          (stringp (first f))
          (string= (first f) head)
          (loop for p in pattern
                for i from 0
                for a = (fact-arg f i)
                always (or (null p)
                           (and a (string= p a))))))
   *ontology-store*))
