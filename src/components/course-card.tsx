"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, PlayCircle } from "lucide-react";
import type { Course } from "@/data/site";
import { cn, discountPercent, formatINR } from "@/lib/utils";
import { useWishlist } from "@/hooks/use-wishlist";

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const { has, toggle } = useWishlist();
  const off = discountPercent(course.price, course.mrp);
  const saved = has(course.id);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl glass-card card-hover gradient-border",
        className || "w-[280px] shrink-0 sm:w-[300px]"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="300px"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Wishlist button */}
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => toggle(course.id)}
          className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-xl bg-black/30 text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 hover:bg-black/50 hover:scale-110"
        >
          <Heart className={saved ? "size-4 fill-red-400 text-red-400" : "size-4"} />
        </button>

        {/* Discount badge */}
        {off > 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 px-2.5 py-1 text-[11px] font-bold text-white shadow-lg shadow-sky-500/30">
            {off}% OFF
          </span>
        )}

        {/* Play preview on hover */}
        <div className="absolute inset-0 z-[5] flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md ring-1 ring-white/30">
            <PlayCircle className="size-7 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        {/* Category & validity */}
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            {course.exam}
          </span>
          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <Clock className="size-3" />
            {course.validity} {course.validityType.toLowerCase()}
          </span>
        </div>

        <h3 className="line-clamp-2 min-h-[2.75rem] text-sm font-bold leading-snug">
          {course.title}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <p className="text-xl font-extrabold tracking-tight text-foreground">
              {formatINR(course.price)}
            </p>
            {course.mrp > course.price && (
              <p className="text-xs text-muted-foreground line-through">
                {formatINR(course.mrp)}
              </p>
            )}
          </div>
          <Link
            href={`/courses/${course.slug}`}
            className="btn-premium rounded-xl px-4 py-2.5 text-xs font-semibold"
          >
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
}
