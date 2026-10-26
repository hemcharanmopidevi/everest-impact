"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { courses } from "@/data/site";
import { CourseCard } from "@/components/course-card";

export function FeaturedCourses() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="relative py-14 md:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-transparent dark:from-muted/10" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-primary">
              Popular
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Featured Courses
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Handpicked programs designed by top educators to accelerate your SSC preparation.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/courses"
              className="hidden items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2 sm:inline-flex"
            >
              View all
              <ArrowRight className="size-3.5" />
            </Link>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Scroll left"
                onClick={() => scroll("left")}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                onClick={() => scroll("right")}
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Course cards */}
        <div ref={ref} className="flex gap-5 overflow-x-auto scrollbar-hide pb-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
