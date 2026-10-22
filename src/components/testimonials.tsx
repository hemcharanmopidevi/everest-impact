"use client";

import { ChevronLeft, ChevronRight, Plus, Quote, Star, UserRound } from "lucide-react";
import { useEffect, useRef } from "react";
import { testimonials } from "@/data/site";

const CARD_STEP = 296;
const DRIFT_PX_PER_SEC = 48;

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
    <section id="testimonials" className="bg-[#f3f4f6] py-12 dark:bg-transparent md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Student voices</p>
            <h2 className="section-title text-slate-900 dark:text-foreground">Testimonials</h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              aria-label="Share a review"
              className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm hover:opacity-90"
            >
              <Plus className="size-4" />
            </a>
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scroll("left")}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-border dark:bg-card dark:text-foreground"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scroll("right")}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-border dark:bg-card dark:text-foreground"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div
          ref={ref}
          onMouseEnter={() => {
            paused.current = true;
          }}
          onMouseLeave={() => {
            paused.current = false;
          }}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
        >
          {loop.map((t, i) => (
            <article
              key={`${t.name}-${i}`}
              className="w-[280px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] dark:bg-card"
            >
              <Quote className="mb-3 size-8 fill-primary text-primary" />
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500 dark:bg-muted dark:text-muted-foreground">
                  <UserRound className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-foreground">{t.name}</h3>
                  <div className="mt-0.5 flex gap-0.5 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="size-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
