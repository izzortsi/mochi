;;; server.lisp — Hunchentoot acceptor lifecycle.
;;; The hunchensocket WebSocket endpoint is added in Task 12.

(in-package #:study-plan.server)

(defvar *acceptor* nil)

(defun start-server (&key (port 4000) (data-dir "./data/"))
  (when *acceptor*
    (error "Server already running. Call stop-server first."))
  (study-plan.storage:init-storage data-dir)
  (study-plan.api:define-study-routes)
  (setf *acceptor*
        (make-instance 'hunchentoot:easy-acceptor :port port))
  (hunchentoot:start *acceptor*)
  (format t "~&[study-plan] REST server on http://localhost:~D~%" port)
  *acceptor*)

(defun stop-server ()
  (when *acceptor*
    (hunchentoot:stop *acceptor*)
    (setf *acceptor* nil))
  (study-plan.storage:shutdown-storage))
