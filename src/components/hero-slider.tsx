"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { sliders } from "@/data/site";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sliders.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + sliders.length) % sliders.length);
  const next = () => setIndex((i) => (i + 1) % sliders.length);

  return (
    <section className="relative w-full bg-muted/40">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-4 pt-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#071633]">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {sliders.map((slide) => (
              <Link
                key={slide.id}
                href={slide.link}
                className="relative aspect-[1024/280] min-w-full"
              >
                <Image
                  src={slide.image}
                  alt="Promotional banner"
                  fill
                  className="object-contain"
                  sizes="(min-width: 1280px) 1120px, 100vw"
                  priority={slide.id === sliders[0].id}
                />
                {slide.fit !== "contain" && (
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow transition hover:opacity-90 sm:bottom-4 sm:right-4 sm:text-sm">
                    Explore Now
                    <ArrowRight className="size-3.5" />
                  </span>
                )}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow md:inline-flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="absolute right-3 top-1/2 hidden size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow md:inline-flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 py-4">
          {sliders.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
