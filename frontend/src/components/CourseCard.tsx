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
      className="border border-[#1a1a1a] bg-[#0c0c0c] p-3 hover:border-[#2a2a2a] transition-colors h-full flex items-center gap-3"
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href={`/course/${course.id}`} className="flex items-center gap-3 flex-1 cursor-pointer min-w-0">
        <ProgressRing pct={course.completionPct} size={44} />
        <div className="flex-1 min-w-0">
          <div className="text-[10px] opacity-60 uppercase tracking-wider font-mono">Course {course.id}</div>
          <h3 className="font-display text-base mt-0.5 leading-tight truncate">{course.title}</h3>
          <div className="text-[11px] opacity-60 mt-0.5 font-mono">
            {course.completedCards}/{course.totalCards} · {course.dayCount}d
          </div>
        </div>
      </Link>
      {onDelete && (
        <div className="flex-shrink-0">
          {confirmDelete ? (
            <div className="flex items-center gap-1" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => onDelete(course.id)}
                className="text-[10px] px-1.5 py-0.5 bg-red-700 hover:bg-red-600 text-white"
              >
                delete
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-[10px] px-1.5 py-0.5 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-neutral-400"
              >
                cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="opacity-20 hover:opacity-70 transition-opacity"
              aria-label="delete course"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </motion.article>
  );
}
