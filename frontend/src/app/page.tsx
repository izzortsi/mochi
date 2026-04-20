"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Plus } from "lucide-react";
import { api } from "@/lib/api";
import { ontology } from "@/lib/ontology";
import type { CourseSummary } from "@/lib/types";
import { CourseCard } from "@/components/CourseCard";

export default function CourseListPage() {
  const [courses, setCourses] = useState<CourseSummary[]>([]);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(() => {
    ontology.listCourses().then(setCourses).catch(e => setError(String(e)));
  }, []);

  useEffect(refresh, [refresh]);

  const handleDeleteCourse = async (courseId: number) => {
    await api.deleteCourse(courseId);
    refresh();
  };

  if (error) return <div className="text-phase3">error: {error}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-display text-2xl">Courses</h1>
        <Link href="/import" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs uppercase tracking-wider font-mono border border-neutral-700 hover:border-neutral-500 hover:bg-[#141414]">
          <Plus className="w-3 h-3" /> import
        </Link>
      </div>
      {!courses.length && <div className="text-xs opacity-50 font-mono">no courses yet — click import to add one</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {courses.map(c => <CourseCard key={c.id} course={c} onDelete={handleDeleteCourse} />)}
      </div>
    </div>
  );
}
