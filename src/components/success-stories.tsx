"use client";

import { ChevronLeft, ChevronRight, Medal } from "lucide-react";
import { useRef } from "react";
import { successStories } from "@/data/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

const avatarColors = [
  "from-sky-200 to-blue-300 text-slate-800",
  "from-indigo-200 to-violet-300 text-slate-800",
  "from-cyan-200 to-sky-300 text-slate-800",
  "from-blue-100 to-indigo-200 text-slate-800",
];

export function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden bg-gradient-to-b from-primary/[0.07] to-white py-14 dark:from-primary/10 dark:to-background md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center sm:mb-10">
          <p className="eyebrow">Results</p>
          <h2 className="section-title text-foreground">Success Stories</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Your Success, Our Pride! See how our students achieved their government job dreams.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous success stories"
            onClick={() => scroll("left")}
            className="absolute -left-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-white text-primary shadow-md transition hover:bg-primary hover:text-white dark:bg-card sm:-left-2 md:size-12"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next success stories"
            onClick={() => scroll("right")}
            className="absolute -right-1 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-white text-primary shadow-md transition hover:bg-primary hover:text-white dark:bg-card sm:-right-2 md:size-12"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            ref={ref}
            className="flex gap-5 overflow-x-auto px-8 scrollbar-hide sm:px-12"
          >
            {successStories.map((story, index) => (
              <article
                key={story.id}
                className="flex w-[200px] shrink-0 flex-col items-center rounded-2xl bg-white px-5 py-7 shadow-[0_8px_30px_rgba(30,58,95,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,58,95,0.12)] dark:bg-card dark:shadow-none dark:ring-1 dark:ring-border sm:w-[220px]"
              >
                <div
                  className={`mb-4 flex size-24 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-bold ring-4 ring-primary/10 sm:size-28 sm:text-3xl ${avatarColors[index % avatarColors.length]}`}
                  aria-hidden
                >
                  {initials(story.name)}
                </div>
                <h3 className="mb-4 text-center text-base font-bold leading-snug text-slate-900 dark:text-foreground">
                  {story.name}
                </h3>
                <div className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-muted dark:text-foreground">
                  <Medal className="size-3.5 text-amber-500" />
                  {story.achievement}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
