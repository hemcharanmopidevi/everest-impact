"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { resultPosters } from "@/data/site";

export function RecordResults() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % resultPosters.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Trophy className="size-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Student Success Is Our <span className="gradient-text">Biggest Achievement</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            More than 10% of SSC CGL final selections in the Southern Region are from Everest Coaching Point — 2000+ final selections since 2015. Official result posters:
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl glass-card gradient-border p-2 sm:p-3 shadow-2xl">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black">
            <Image
              src={resultPosters[current].image}
              alt={resultPosters[current].title}
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
            {/* Title overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-3 sm:p-6">
              <span className="rounded-md bg-emerald-500 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white">
                Official Result Poster
              </span>
              <h3 className="mt-1 text-sm sm:text-base md:text-lg font-bold text-white line-clamp-1">
                {resultPosters[current].title}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 line-clamp-1">
                {resultPosters[current].desc}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            type="button"
            aria-label="Previous Poster"
            onClick={() => setCurrent((c) => (c - 1 + resultPosters.length) % resultPosters.length)}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 flex size-8 sm:size-10 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>
          <button
            type="button"
            aria-label="Next Poster"
            onClick={() => setCurrent((c) => (c + 1) % resultPosters.length)}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 flex size-8 sm:size-10 items-center justify-center rounded-xl bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>

          {/* Indicators */}
          <div className="mt-3 flex items-center justify-center gap-2 pb-1">
            {resultPosters.map((poster, idx) => (
              <button
                key={poster.title}
                type="button"
                aria-label={`Go to ${poster.title}`}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {resultPosters.map((poster, idx) => (
            <button
              key={poster.title}
              type="button"
              onClick={() => setCurrent(idx)}
              className={`rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${
                current === idx
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              {poster.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
