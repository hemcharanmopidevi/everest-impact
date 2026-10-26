"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Trophy,
  GraduationCap,
  Building2,
  Timer,
  CheckSquare2,
  Users,
  BookOpen,
  Video,
  Library,
  TrendingUp,
  Newspaper,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

interface CircleItem {
  id: number;
  highlight: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const circlePillars: CircleItem[] = [
  {
    id: 1,
    highlight: "100% SSC",
    label: "Exclusive Hub",
    icon: Building2,
    description: "Dedicated solely to SSC CGL, CHSL, CPO, MTS & GD examinations.",
  },
  {
    id: 2,
    highlight: "2,000+",
    label: "Final Selections",
    icon: Trophy,
    description: "Top ranks serving across prestigious Central Government ministries.",
  },
  {
    id: 3,
    highlight: "Guinness Record",
    label: "Senior Faculty",
    icon: GraduationCap,
    description: "Mentored directly by B. Rajkumar Sir & veteran directors with 27+ yrs experience.",
  },
  {
    id: 4,
    highlight: "Daily Mock",
    label: "+ 4h Video Review",
    icon: Timer,
    description: "Rigorous full-length testing followed by same-day video doubt discussion.",
  },
  {
    id: 5,
    highlight: "50,000+",
    label: "TCS PYQ Bank",
    icon: CheckSquare2,
    description: "Exhaustive repository of TCS-pattern real exam questions with step solutions.",
  },
  {
    id: 6,
    highlight: "9 AM – 6 PM",
    label: "Doubt Faculty",
    icon: Users,
    description: "8–10 dedicated associate mentors on-floor daily for 1-on-1 problem solving.",
  },
  {
    id: 7,
    highlight: "Free AC",
    label: "Reading Rooms",
    icon: BookOpen,
    description: "Quiet, air-conditioned study cubicles with high-speed internet & power outlets.",
  },
  {
    id: 8,
    highlight: "1,200+ Hrs",
    label: "Quality Coaching",
    icon: Sparkles,
    description: "Deep, thorough concept coverage from beginner to advanced Tier-1 & Tier-2 level.",
  },
  {
    id: 9,
    highlight: "Live Stream",
    label: "Hybrid Classes",
    icon: Video,
    description: "Direct HD interactive broadcast of physical classroom batches to your home.",
  },
  {
    id: 10,
    highlight: "18 Books",
    label: "Own Publications",
    icon: Library,
    description: "Authored in-house by directors — comprehensive theory & shortcut handouts.",
  },
  {
    id: 11,
    highlight: "1-on-1",
    label: "Score Reviews",
    icon: TrendingUp,
    description: "Personalized mock exam performance diagnostics and percentile tracking.",
  },
  {
    id: 12,
    highlight: "The Hindu",
    label: "Daily Editorial",
    icon: Newspaper,
    description: "Vocab, idioms & reading comprehension drills from top national editorials.",
  },
];

export function WhyChooseEverest() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const bouncerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Exact Antigravity mathematical traveling sinusoidal wave transition
  useEffect(() => {
    let animId: number;
    const startTime = performance.now();
    const duration = 12000; // 12 seconds period — calm, smooth wave
    const amplitude = 32; // 32px vertical oscillation amplitude

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) % duration;
      const phase = (elapsed / duration) * Math.PI * 2;
      const elements = bouncerRefs.current;
      const total = elements.length;

      for (let i = 0; i < total; i++) {
        const el = elements[i];
        if (!el) continue;
        // Traveling sinusoidal wave formula identical to antigravity.google
        const angle = (i / total) * Math.PI * 2 * 1.5 + phase;
        const y = Math.sin(angle) * amplitude;
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Auto-rotate active pillar when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % circlePillars.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isHovered]);

  const activePillar = circlePillars[activeIndex] || circlePillars[0];
  const ActiveIcon = activePillar.icon;

  return (
    <section
      id="why"
      className="relative overflow-hidden py-20 md:py-28 border-y border-border/40 bg-gradient-to-b from-card/30 via-background to-card/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow — Pure Sky Blue and Black/White */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[500px] rounded-full bg-sky-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 translate-x-1/2 -translate-y-1/2 h-80 w-[500px] rounded-full bg-sky-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-bold text-sky-400 shadow-sm">
            <Sparkles className="size-3.5" />
            <span>The Everest Advantage</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Why Students Choose <span className="gradient-text">Everest</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            12 core institutional standards driving India&apos;s highest SSC selections.
          </p>
        </div>

        {/* Antigravity Sinusoidal Wave Ribbon of Icons */}
        <div className="relative w-full overflow-x-auto no-scrollbar py-14 px-2">
          {/* Subtle horizontal baseline guide */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

          <ul
            className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 min-w-max mx-auto px-4"
            data-bouncer-list
          >
            {circlePillars.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activeIndex === idx;

              return (
                <li
                  key={item.id}
                  className="list-none flex flex-col items-center select-none"
                  data-bouncer
                >
                  <div
                    ref={(el) => {
                      bouncerRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => {
                      setActiveIndex(idx);
                      setIsHovered(true);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.highlight} - ${item.label}`}
                    className={`group relative flex size-14 sm:size-16 md:size-[72px] lg:size-20 items-center justify-center rounded-full border cursor-pointer backdrop-blur-md transition-all duration-300 ${
                      isSelected
                        ? "border-sky-400 bg-sky-500 text-white shadow-[0_0_25px_rgba(14,165,233,0.5)] scale-110 z-20"
                        : "border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-card/90 text-slate-700 dark:text-slate-300 shadow-sm hover:border-sky-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:scale-115 hover:shadow-[0_8px_20px_rgba(14,165,233,0.25)] z-10"
                    }`}
                  >
                    {/* Micro Number Chip */}
                    <span
                      className={`absolute -top-1.5 rounded-full px-1.5 py-0.2 text-[9px] font-black tracking-tighter transition-colors ${
                        isSelected
                          ? "bg-white text-sky-600 shadow-sm"
                          : "bg-slate-100 dark:bg-zinc-800 text-muted-foreground group-hover:bg-sky-500 group-hover:text-white"
                      }`}
                    >
                      {String(item.id).padStart(2, "0")}
                    </span>

                    {/* Small Icon matching Antigravity style */}
                    <Icon className="size-5 sm:size-6 md:size-7 transition-transform duration-200 group-hover:scale-110" />

                    {/* Floating Pulse Ring for Active Bubble */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping opacity-30 pointer-events-none" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Dynamic Detail Preview Card directly beneath the wave */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-xl rounded-2xl border border-sky-500/25 bg-white/90 dark:bg-card/90 p-5 md:p-6 shadow-xl backdrop-blur-md text-center transition-all duration-300">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 dark:bg-sky-950/60 px-3 py-1 text-xs font-bold text-sky-500 border border-sky-400/30 mb-3">
              <ActiveIcon className="size-3.5" />
              <span>Standard {String(activePillar.id).padStart(2, "0")} of 12</span>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
              <span className="text-sky-500">{activePillar.highlight}</span> — {activePillar.label}
            </h3>

            <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              {activePillar.description}
            </p>

            <div className="mt-4 flex items-center justify-center gap-4">
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-500 hover:text-sky-400 hover:underline transition-colors"
              >
                <span>Experience this in our Batches</span>
                <ChevronRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
