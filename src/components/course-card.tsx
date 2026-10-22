"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import type { Course } from "@/data/site";
import { discountPercent, formatINR } from "@/lib/utils";
import { useWishlist } from "@/hooks/use-wishlist";

export function CourseCard({ course }: { course: Course }) {
  const { has, toggle } = useWishlist();
  const off = discountPercent(course.price, course.mrp);
  const saved = has(course.id);

  return (
    <article className="tilt-card flex w-[260px] shrink-0 flex-col overflow-hidden rounded-[22px] bg-card shadow-[0_14px_40px_rgba(26,47,106,0.12)] ring-1 ring-border/60 hover:shadow-[0_24px_50px_rgba(26,47,106,0.2)] sm:w-[280px]">
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
          className="absolute right-2.5 top-2.5 inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
        >
          <Heart className={saved ? "size-4 fill-red-500 text-red-500" : "size-4"} />
        </button>
        {off > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-[#ff8a1f] px-3 py-1 text-xs font-extrabold text-[#0b1530] shadow">
            {off}% off
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug text-[#26335a] dark:text-foreground">
          {course.title}
        </h3>
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <p className="text-xl font-extrabold text-foreground">{formatINR(course.price)}</p>
            {course.mrp > course.price && (
              <p className="text-xs text-muted-foreground">
                <span className="line-through">{formatINR(course.mrp)}</span>
                <span className="ml-1.5 font-semibold text-emerald-600">
                  Save {formatINR(course.mrp - course.price)}
                </span>
              </p>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-[0_5px_0_#0f3fa8] transition-transform hover:-translate-y-0.5"
          >
            Explore
            <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
