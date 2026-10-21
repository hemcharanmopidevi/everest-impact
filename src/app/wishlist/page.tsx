"use client";

import Link from "next/link";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/data/site";
import { useWishlist } from "@/hooks/use-wishlist";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const saved = courses.filter((c) => ids.includes(c.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold tracking-tight">Wishlist</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        New feature — save courses with the heart icon and revisit them anytime.
      </p>

      {saved.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-12 text-center">
          <p className="mb-4 text-muted-foreground">Your wishlist is empty.</p>
          <Link
            href="/courses"
            className="inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
          >
            Browse courses
          </Link>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {saved.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
