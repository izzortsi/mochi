"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { ProgressRing } from "./ProgressRing";
import type { CourseSummary } from "@/lib/types";

interface Props {
  course: CourseSummary;
  onDelete?: (courseId: number) => void;
}

export function CourseCard({ course, onDelete }: Props) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <motion.article
      className="rounded-xl border border-[#1a1a2a] bg-[#121222] p-6 hover:border-[#2a2a3f] transition-colors h-full flex items-center gap-4"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href={`/course/${course.id}`} className="flex items-center gap-4 flex-1 cursor-pointer">
        <ProgressRing pct={course.completionPct} size={56} />
        <div className="flex-1">
          <div className="text-xs opacity-50 uppercase tracking-wider">Course {course.id}</div>
          <h3 className="font-display text-lg mt-1">{course.title}</h3>
          <div className="text-sm opacity-60 mt-1">
            {course.completedCards} / {course.totalCards} cards · {course.dayCount} days
          </div>
        </div>
      </Link>
      {onDelete && (
        <div className="flex-shrink-0">
          {confirmDelete ? (
            <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => onDelete(course.id)}
                className="text-xs px-2 py-1 rounded bg-red-600/80 hover:bg-red-600 text-white"
              >
                delete
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-xs px-2 py-1 rounded bg-[#1a1a2a] hover:bg-[#2a2a3f] opacity-70"
              >
                cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="opacity-20 hover:opacity-60 transition-opacity"
              aria-label="delete course"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </motion.article>
  );
}
