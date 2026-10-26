"use client";

import { MessageSquare, Plus, Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { testimonials } from "@/data/site";

const CARD_STEP = 310;
const DRIFT_PX_PER_SEC = 42;

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const holdUntil = useRef(0);
  const loop = [...testimonials, ...testimonials];

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    holdUntil.current = performance.now() + 900;
    const half = el.scrollWidth / 2;
    if (dir === "right" && el.scrollLeft >= half) el.scrollLeft -= half;
    if (dir === "left" && el.scrollLeft <= 0) el.scrollLeft += half;
    el.scrollBy({ left: dir === "left" ? -CARD_STEP : CARD_STEP, behavior: "smooth" });
  };

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const el = ref.current;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (el && !paused.current && now >= holdUntil.current) {
        el.scrollLeft += DRIFT_PX_PER_SEC * dt;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="testimonials" className="relative py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-transparent to-muted/20 dark:from-muted/10 dark:to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <MessageSquare className="size-4" />
              What Students Say
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl lg:text-4xl">
              Testimonials
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              aria-label="Share a review"
              className="inline-flex size-10 items-center justify-center rounded-xl btn-premium"
            >
              <Plus className="size-4" />
            </a>
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scroll("left")}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <svg className="size-4 rotate-180" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scroll("right")}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <svg className="size-4" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div
          ref={ref}
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-3"
        >
          {loop.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="group w-[290px] shrink-0 rounded-2xl glass-card p-6 card-hover gradient-border"
            >
              {/* Quote icon */}
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-primary/5">
                <Quote className="size-5 text-primary" />
              </div>

              {/* User info */}
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#102a5c] to-[#1e3a8a] text-sm font-bold text-white shadow-sm">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <h3 className="text-sm font-bold">{t.name}</h3>
                  <div className="mt-0.5 flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review text */}
              <p className="text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                {t.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
