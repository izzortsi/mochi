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
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl">Courses</h1>
        <Link href="/import" className="inline-flex items-center gap-2 px-3 py-2 rounded bg-phase1 hover:bg-phase2">
          <Plus className="w-4 h-4" /> import
        </Link>
      </div>
      {!courses.length && <div className="opacity-50">no courses yet. click &quot;+ import&quot; to add one.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(c => <CourseCard key={c.id} course={c} onDelete={handleDeleteCourse} />)}
      </div>
    </div>
  );
}
