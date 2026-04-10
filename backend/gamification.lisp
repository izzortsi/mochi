;;; gamification.lisp — pure functions for XP, tier, streak.

(in-package #:study-plan.gamification)

(defun base-xp (tier)
  "Base XP for a tier. tier is a string: bronze / silver / gold."
  (cond ((string= tier "bronze") 10)
        ((string= tier "silver") 25)
        ((string= tier "gold") 50)
        (t 0)))

(defun streak-multiplier (streak)
  "1 + floor(streak / 3). Streak 3 -> 2, streak 6 -> 3."
  (+ 1 (floor streak 3)))

(defun effective-xp (tier streak)
  (* (base-xp tier) (streak-multiplier streak)))

(defun task-key (day-id tier task-index)
  "Canonical key for completedTasks and overrides hash-tables."
  (format nil "~D-~A-~D" day-id tier task-index))

(defun all-items-complete-p (day tier completed-tasks)
  "True iff every TaskItem in this tier group for this day is in completed-tasks."
  (let ((group (find tier (study-day-tasks day)
                     :key #'task-group-tier :test #'string=)))
    (when group
      (loop for i from 0 below (length (task-group-items group))
            always (gethash (task-key (study-day-id day) tier i) completed-tasks)))))

(defun compute-highest-tier (day completed-tasks)
  "Cumulative tier: gold requires bronze+silver+gold all complete, etc."
  (let ((bronze (all-items-complete-p day "bronze" completed-tasks))
        (silver (all-items-complete-p day "silver" completed-tasks))
        (gold   (all-items-complete-p day "gold"   completed-tasks)))
    (cond ((and bronze silver gold) "gold")
          ((and bronze silver)      "silver")
          (bronze                   "bronze")
          (t                        "none"))))

;;;---------------------------------------------------------------------------
;;; Streak math. Dates are ISO "YYYY-MM-DD" strings.
;;;---------------------------------------------------------------------------

(defun parse-iso-date (s)
  "Return (values year month day) from ISO date string, or NIL if invalid."
  (when (and s (>= (length s) 10))
    (ignore-errors
     (values (parse-integer s :start 0 :end 4)
             (parse-integer s :start 5 :end 7)
             (parse-integer s :start 8 :end 10)))))

(defun days-between (iso-a iso-b)
  "Calendar days from iso-a to iso-b (b - a). Uses local-time for the arithmetic."
  (multiple-value-bind (ay am ad) (parse-iso-date iso-a)
    (multiple-value-bind (by bm bd) (parse-iso-date iso-b)
      (when (and ay by)
        (let ((ta (local-time:encode-timestamp 0 0 0 0 ad am ay))
              (tb (local-time:encode-timestamp 0 0 0 0 bd bm by)))
          (floor (local-time:timestamp-difference tb ta) 86400))))))

(defun update-streak-after-gold (progress today-iso)
  "Mutates PROGRESS according to streak rules:
    - null last-completed OR gap > 1 day -> streak := 1
    - same day -> no change
    - consecutive day -> streak += 1
   Always updates last-completed, and best-streak if streak exceeds it."
  (let ((last (user-progress-last-completed progress)))
    (cond
      ((null last)
       (setf (user-progress-streak progress) 1))
      ((equal last today-iso)
       nil) ; same day — no change
      (t
       (let ((delta (days-between last today-iso)))
         (cond
           ((and delta (= delta 1))
            (incf (user-progress-streak progress)))
           (t
            (setf (user-progress-streak progress) 1))))))
    (setf (user-progress-last-completed progress) today-iso)
    (when (> (user-progress-streak progress)
             (user-progress-best-streak progress))
      (setf (user-progress-best-streak progress)
            (user-progress-streak progress))))
  progress)
