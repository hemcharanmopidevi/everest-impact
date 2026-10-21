"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { courses } from "@/data/site";
import { CourseCard } from "@/components/course-card";

export function FeaturedCourses() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className="bg-muted/40 py-12 dark:bg-muted/20 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold text-primary">Popular</p>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Courses</h3>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/courses"
              className="mr-2 hidden text-sm font-semibold text-primary hover:underline sm:inline"
            >
              View all
            </Link>
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white hover:bg-muted dark:bg-card"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-white hover:bg-muted dark:bg-card"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
        <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
