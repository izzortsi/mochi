;;; run.lisp — entry point for `sbcl --load run.lisp`.

(load (merge-pathnames "quicklisp/setup.lisp" (user-homedir-pathname)))
(push #p"./" asdf:*central-registry*)
(ql:quickload :study-plan :silent t)

(study-plan.server:start-server :port 4000 :data-dir "./data/")

;; Keep the process alive.
(loop (sleep 86400))
