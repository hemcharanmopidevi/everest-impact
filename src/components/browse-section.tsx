"use client";

import Link from "next/link";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Gift,
  LayoutDashboard,
  Link2,
  Radio,
  Train,
  Video,
} from "lucide-react";
import { useRef, type ReactNode } from "react";
import { browseItems, type BrowseItem } from "@/data/site";

const icons: Record<BrowseItem["icon"], ReactNode> = {
  live: <Radio className="size-6 text-primary" />,
  recorded: <BookOpen className="size-6 text-primary" />,
  test: <ClipboardList className="size-6 text-primary" />,
  rrb: <Train className="size-6 text-primary" />,
  "free-test": <ClipboardList className="size-6 text-primary" />,
  free: <Gift className="size-6 text-primary" />,
  links: <Link2 className="size-6 text-primary" />,
  result: <LayoutDashboard className="size-6 text-primary" />,
  youtube: <Video className="size-6 text-primary" />,
};

export function BrowseSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold text-primary">Explore</p>
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">Browse Categories</h3>
          </div>
          <div className="flex gap-2">
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
          {browseItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex w-[150px] shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md sm:w-[168px]"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                {icons[item.icon]}
              </div>
              <h3 className="text-sm font-semibold leading-snug">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
