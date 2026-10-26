"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="animate-announcement relative z-[60] overflow-hidden bg-gradient-to-r from-black via-zinc-950 to-sky-950 border-b border-sky-500/20">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent animate-[shimmer_3s_linear_infinite]" style={{ backgroundSize: '200% 100%' }} />

      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-sky-400 backdrop-blur-sm">
          <Sparkles className="size-3" />
          Live
        </span>
        <p className="text-sm font-medium text-white/95">
          August 2026 Live Batch — 3 Days FREE Demo Classes · Admissions Open
        </p>
        <Link
          href="/courses?category=Live%20Courses"
          className="hidden items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/30 sm:inline-flex"
        >
          Explore now
          <ArrowRight className="size-3" />
        </Link>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex size-7 items-center justify-center rounded-full text-white/70 transition hover:bg-white/20 hover:text-white"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
