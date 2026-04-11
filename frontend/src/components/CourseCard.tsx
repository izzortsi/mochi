"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProgressRing } from "./ProgressRing";
import type { CourseSummary } from "@/lib/types";

export function CourseCard({ course }: { course: CourseSummary }) {
  return (
    <Link href={`/course/${course.id}`}>
      <motion.article
        className="rounded-xl border border-[#1a1a2a] bg-[#121222] p-6 hover:border-[#2a2a3f] transition-colors cursor-pointer h-full flex items-center gap-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ProgressRing pct={course.completionPct} size={56} />
        <div className="flex-1">
          <div className="text-xs opacity-50 uppercase tracking-wider">Course {course.id}</div>
          <h3 className="font-display text-lg mt-1">{course.title}</h3>
          <div className="text-sm opacity-60 mt-1">
            {course.completedCards} / {course.totalCards} cards · {course.dayCount} days
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
