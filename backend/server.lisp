;;; server.lisp — Hunchentoot + hunchensocket acceptor lifecycle.
;;;
;;; One port, two protocols: the STUDY-ACCEPTOR class inherits from both
;;; websocket-acceptor (which handles WS upgrades on /ws) and easy-acceptor
;;; (which handles REST on /api/*). hunchensocket's method falls through to
;;; call-next-method for non-WS requests, so REST dispatch works normally.

(in-package #:study-plan.server)

(defvar *acceptor* nil)

;;;---------------------------------------------------------------------------
;;; WebSocket resource + dispatcher
;;;---------------------------------------------------------------------------

(defclass ws-resource (hunchensocket:websocket-resource)
  ()
  (:default-initargs :client-class 'hunchensocket:websocket-client))

(defvar *ws-resource* nil)

(defmethod hunchensocket:text-message-received ((resource ws-resource) client message)
  (handler-case
      (let ((response (study-plan.protocol:handle-ws-message message)))
        (hunchensocket:send-text-message client response))
    (error (e)
      (hunchensocket:send-text-message
       client
       (format nil "(err \"server\" \"~A\")"
               (cl-ppcre:regex-replace-all "\"" (format nil "~A" e) "\\\""))))))

(defun ws-dispatcher (request)
  (when (equal (hunchentoot:script-name request) "/ws")
    *ws-resource*))

;;;---------------------------------------------------------------------------
;;; Combined acceptor
;;;---------------------------------------------------------------------------

(defclass study-acceptor (hunchensocket:websocket-acceptor hunchentoot:easy-acceptor)
  ())

(defun start-server (&key (port 4000) (data-dir "./data/"))
  (when *acceptor*
    (error "Server already running. Call stop-server first."))
  (setf *ws-resource* (make-instance 'ws-resource))
  (pushnew 'ws-dispatcher hunchensocket:*websocket-dispatch-table*)
  (study-plan.storage:init-storage data-dir)
  (study-plan.api:define-study-routes)
  (setf *acceptor*
        (make-instance 'study-acceptor :port port))
  (hunchentoot:start *acceptor*)
  (format t "~&[study-plan] HTTP on http://localhost:~D  WS on ws://localhost:~D/ws~%"
          port port)
  *acceptor*)

(defun stop-server ()
  (when *acceptor*
    (hunchentoot:stop *acceptor*)
    (setf *acceptor* nil))
  (setf hunchensocket:*websocket-dispatch-table*
        (remove 'ws-dispatcher hunchensocket:*websocket-dispatch-table*))
  (study-plan.storage:shutdown-storage))
