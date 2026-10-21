"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Course } from "@/data/site";
import { discountPercent, formatINR } from "@/lib/utils";
import { useWishlist } from "@/hooks/use-wishlist";

export function CourseCard({ course }: { course: Course }) {
  const { has, toggle } = useWishlist();
  const off = discountPercent(course.price, course.mrp);
  const saved = has(course.id);

  return (
    <article className="flex w-[260px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg sm:w-[280px]">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="280px"
        />
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(course.id)}
          className="absolute right-2 top-2 inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
        >
          <Heart className={saved ? "size-4 fill-red-500 text-red-500" : "size-4"} />
        </button>
        {off > 0 && (
          <span className="absolute left-2 top-2 rounded-md bg-primary px-2 py-0.5 text-xs font-semibold text-primary-foreground">
            {off}% off
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-semibold leading-snug">
          {course.title}
        </h3>
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <p className="text-base font-bold text-foreground">{formatINR(course.price)}</p>
            {course.mrp > course.price && (
              <p className="text-xs text-muted-foreground line-through">
                {formatINR(course.mrp)}
              </p>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="rounded-xl bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition hover:opacity-90"
          >
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
}
