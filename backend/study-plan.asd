(asdf:defsystem #:study-plan
  :description "Interactive study tracker with LLM tutor — multi-course with ontology"
  :version "0.2.0"
  :depends-on (#:hunchentoot
               #:hunchensocket
               #:cl-prevalence
               #:cl-json
               #:cl-ppcre
               #:local-time
               #:alexandria
               #:dexador)
  :serial t
  :components ((:file "package")
               (:file "term")
               (:file "models")
               (:file "gamification")
               (:file "seed-data")
               (:file "ontology-store")
               (:file "ontology")
               (:file "ontology-query")
               (:file "migration")
               (:file "storage")
               (:file "api")
               (:file "course-api")
               (:file "concept-api")
               (:file "import-api")
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
                 (:file "ontology-store-test")
                 (:file "ontology-query-test")
                 (:file "migration-test")
                 (:file "storage-test")
                 (:file "overlay-test")))))
