"use client";

import { ChevronLeft, ChevronRight, Medal, Sparkles } from "lucide-react";
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

const avatarGradients = [
  "from-red-600 to-rose-600",
  "from-blue-600 to-indigo-700",
  "from-red-700 to-amber-600",
  "from-blue-700 to-primary",
  "from-rose-600 to-red-700",
  "from-blue-800 to-indigo-800",
  "from-red-600 to-orange-600",
  "from-indigo-700 to-blue-900",
];

export function SuccessStories() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    ref.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section
      id="success-stories"
      className="relative overflow-hidden py-16 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-primary/[0.02]" />
      <div className="floating-orb right-[-5%] top-[20%] h-72 w-72 bg-sky-500/15" style={{ animationDelay: '-10s' }} />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" />
            Results & Achievements
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground mx-auto">
            Your Success, Our Pride! See how our students achieved their government job dreams.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button
            type="button"
            aria-label="Previous success stories"
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 z-10 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full glass-card shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:-left-3"
          >
            <ChevronLeft className="size-5 text-primary" />
          </button>
          <button
            type="button"
            aria-label="Next success stories"
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 z-10 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full glass-card shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl sm:-right-3"
          >
            <ChevronRight className="size-5 text-primary" />
          </button>

          <div
            ref={ref}
            className="flex gap-5 overflow-x-auto px-10 scrollbar-hide sm:px-14"
          >
            {successStories.map((story, index) => (
              <article
                key={story.id}
                className="group flex w-[220px] shrink-0 flex-col items-center rounded-2xl glass-card px-5 py-8 card-hover gradient-border sm:w-[240px]"
              >
                {/* Avatar */}
                <div
                  className={`mb-5 flex size-28 items-center justify-center rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} text-2xl font-bold text-white shadow-lg ring-4 ring-white/80 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl dark:ring-card sm:size-32 sm:text-3xl`}
                  aria-hidden
                >
                  {initials(story.name)}
                </div>

                <h3 className="mb-4 text-center text-base font-bold leading-snug">
                  {story.name}
                </h3>

                <div className="mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-50 to-sky-100/70 px-4 py-2 text-xs font-bold text-sky-800 dark:from-sky-950/40 dark:to-sky-900/40 dark:text-sky-300 border border-sky-300/40">
                  <Medal className="size-4 text-sky-500" />
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
