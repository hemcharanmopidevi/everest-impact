"use client";

import { useEffect, useRef, useState } from "react";
import { Award, BookOpen, Clock, HelpCircle } from "lucide-react";
import { heroStats } from "@/data/site";

const iconMap = [Clock, Award, HelpCircle, BookOpen];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let frame: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  return { count, ref };
}

function StatItem({ stat, index }: { stat: (typeof heroStats)[number]; index: number }) {
  const { count, ref } = useCountUp(stat.value);
  const Icon = iconMap[index % iconMap.length];

  return (
    <div
      ref={ref}
      className="glass-card group relative flex flex-col items-center gap-3 rounded-2xl p-6 text-center card-hover md:p-8"
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 transition-all duration-500 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110">
        <Icon className="size-6 text-primary" />
      </div>
      <p className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {count.toLocaleString("en-IN")}
        <span className="gradient-text">{stat.suffix}</span>
      </p>
      <p className="text-sm font-bold text-foreground">{stat.label}</p>
      <p className="text-xs text-muted-foreground">{stat.desc}</p>
    </div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative py-12 md:py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mb-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Proven Track Record</p>
          <h2 className="mt-1 text-2xl font-extrabold text-foreground md:text-3xl">
            Numbers That Speak for Themselves
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          *As stated in the institute&apos;s official announcement material (2015 – 2026).
        </p>
      </div>
    </section>
  );
}
