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
    <section className="reveal bg-[#f4f7ff] py-12 dark:bg-muted/20 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="eyebrow">Popular</p>
            <h3 className="section-title">Featured Courses</h3>
            <p className="mt-2 hidden text-sm text-muted-foreground sm:block md:text-base">
              Big discounts on live and recorded batches — pick your exam and start today.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
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
        <div ref={ref} className="flex gap-5 overflow-x-auto scrollbar-hide px-1 pb-6 pt-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
