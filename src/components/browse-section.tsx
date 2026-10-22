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

const icons: Record<BrowseItem["icon"], { icon: ReactNode; color: string }> = {
  live: { icon: <Radio className="size-6" />, color: "#1a5fe0" },
  recorded: { icon: <BookOpen className="size-6" />, color: "#7a4be0" },
  test: { icon: <ClipboardList className="size-6" />, color: "#12a679" },
  rrb: { icon: <Train className="size-6" />, color: "#e0446b" },
  "free-test": { icon: <ClipboardList className="size-6" />, color: "#0fa3c9" },
  free: { icon: <Gift className="size-6" />, color: "#e07a10" },
  links: { icon: <Link2 className="size-6" />, color: "#0b1530" },
  result: { icon: <LayoutDashboard className="size-6" />, color: "#0f7a5c" },
  youtube: { icon: <Video className="size-6" />, color: "#dc2626" },
};

export function BrowseSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="reveal py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
          <div>
            <p className="eyebrow">Explore</p>
            <h3 className="section-title">Browse Categories</h3>
          </div>
          <div className="flex shrink-0 gap-2">
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
        <div ref={ref} className="flex gap-3.5 overflow-x-auto scrollbar-hide px-1 pb-4 pt-3 sm:gap-5">
          {browseItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex w-[128px] shrink-0 flex-col items-center gap-3 rounded-[18px] bg-card px-2 py-5 text-center shadow-[0_6px_0_#dbe4fa] ring-1 ring-border/60 transition-transform duration-300 hover:-translate-y-2.5 dark:shadow-[0_6px_0_rgba(0,0,0,0.35)] sm:w-[168px] sm:gap-3.5 sm:rounded-[20px] sm:px-3 sm:py-6 sm:shadow-[0_8px_0_#dbe4fa]"
            >
              <div
                className="flex size-12 items-center justify-center rounded-2xl text-white shadow-[0_6px_0_rgba(0,0,0,0.2)] sm:size-14"
                style={{ background: icons[item.icon].color }}
              >
                {icons[item.icon].icon}
              </div>
              <h3 className="text-[13px] font-semibold leading-snug sm:text-sm">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
