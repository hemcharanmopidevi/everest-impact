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

const gradients = [
  "from-blue-600/15 to-indigo-500/5",
  "from-red-600/15 to-rose-500/5",
  "from-sky-600/15 to-blue-500/5",
  "from-red-500/15 to-blue-600/5",
  "from-blue-700/15 to-red-500/5",
  "from-indigo-600/15 to-sky-500/5",
  "from-red-600/15 to-slate-500/5",
  "from-blue-600/15 to-cyan-500/5",
  "from-rose-600/15 to-blue-600/5",
];

export function BrowseSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -280 : 280, behavior: "smooth" });
  };

  return (
    <section className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.15em] text-primary">
              Explore
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Browse Categories
            </h2>
          </div>
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

        {/* Cards */}
        <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {browseItems.map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex w-[160px] shrink-0 flex-col items-center gap-4 rounded-2xl glass-card p-6 text-center card-hover gradient-border sm:w-[180px]"
            >
              <div className={`flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {icons[item.icon]}
              </div>
              <h3 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors duration-300">{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
