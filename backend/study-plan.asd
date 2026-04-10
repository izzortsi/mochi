(asdf:defsystem #:study-plan
  :description "Interactive study tracker with LLM tutor — 7-day linear algebra / ODE review plan"
  :version "0.1.0"
  :depends-on (#:hunchentoot
               #:hunchensocket
               #:cl-prevalence
               #:cl-json
               #:cl-ppcre
               #:local-time
               #:alexandria)
  :serial t
  :components ((:file "package")
               (:file "term")
               (:file "models")
               (:file "gamification")
               (:file "seed-data")
               (:file "storage")
               (:file "api")
               (:file "protocol")
               (:file "server"))
  :in-order-to ((test-op (test-op #:study-plan/test))))

(asdf:defsystem #:study-plan/test
  :depends-on (#:study-plan #:fiveam)
  :serial t
  :components ((:module "test"
                :components
                ((:file "suite")
                 (:file "gamification-test")
                 (:file "storage-test")
                 (:file "overlay-test")))))
