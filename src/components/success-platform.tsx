"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  User,
  BarChart2,
  Play,
  Calendar,
  Search,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface PlatformNode {
  id: string;
  badge: string;
  title: string;
  desc: string;
  btnText: string;
  link: string;
  bgTint: string;
  btnColor: string;
}

const nodes: PlatformNode[] = [
  {
    id: "coaching",
    badge: "STAGE 1",
    title: "Live Coaching",
    desc: "1200+ hours of direct classes by Guinness Record Quant & 27+ yrs veteran English directors.",
    btnText: "Explore Batches",
    link: "/courses",
    bgTint: "bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border-pink-200/90 dark:border-pink-900/40",
    btnColor: "bg-[#a89090] hover:bg-[#8f7575] text-white",
  },
  {
    id: "testing",
    badge: "STAGE 2",
    title: "Test Portal",
    desc: "4000+ TCS PYQs, daily full-length mock tests, AI rank analytics & daily video explanations.",
    btnText: "Practice Portal",
    link: "/test-series",
    bgTint: "bg-[#eff6ff]/95 dark:bg-[#1e1b4b]/35 border-blue-200/90 dark:border-blue-900/40",
    btnColor: "bg-[#93c5fd] hover:bg-[#60a5fa] text-slate-900",
  },
  {
    id: "mentorship",
    badge: "STAGE 3",
    title: "1-on-1 Doubts",
    desc: "8–10 dedicated associate faculty daily 9 AM–6 PM for individual doubt clearing & 16 books.",
    btnText: "View 16 Books",
    link: "/books",
    bgTint: "bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border-pink-200/90 dark:border-pink-900/40",
    btnColor: "bg-[#a89090] hover:bg-[#8f7575] text-white",
  },
];

export function SuccessPlatform() {
  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-14 md:py-20 border-b border-border/40 bg-white dark:bg-background"
    >
      <div className="relative mx-auto max-w-7xl px-4 z-10">
        
        {/* Section Header matching 'Coach Success Platform' reference */}
        <div className="text-center mb-10 md:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-300/80 bg-purple-100/70 dark:bg-purple-950/40 px-3.5 py-1 text-xs font-bold text-purple-700 dark:text-purple-300 shadow-sm">
            <Sparkles className="size-3.5" />
            <span>The Unified Preparation Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#a855f7] tracking-tight">
            Everest Success Platform
          </h2>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
            Live Classes · 4,000+ TCS PYQ Testing · 1-on-1 Doubt Mentorship — An interconnected ecosystem.
          </p>
        </div>

        {/* ================= DESKTOP EXACT REFERENCE SHAPE FLOW (lg:block) ================= */}
        <div className="hidden lg:block relative w-full h-[500px]">
          
          {/* SVG Exact Dotted Tracks: 3 Ovals, Crossing Tangents (X-Crossings), Outer Sweeping Contours */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1200 480"
            fill="none"
          >
            <defs>
              <linearGradient id="purpleRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>

            {/* ====== 1. THREE INDIVIDUAL DOTTED CIRCULAR BOUNDARIES (Perfect Circles) ====== */}
            {/* Circle 1 Dotted Boundary (Left: Live Coaching) */}
            <circle
              cx="240"
              cy="240"
              r="122"
              className="animate-dots-flow"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="22s" repeatCount="indefinite" />
            </circle>

            {/* Circle 2 Dotted Boundary (Center: Test Portal) */}
            <circle
              cx="600"
              cy="240"
              r="122"
              className="animate-dots-flow-reverse"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="300" dur="22s" repeatCount="indefinite" />
            </circle>

            {/* Circle 3 Dotted Boundary (Right: 1-on-1 Doubts) */}
            <circle
              cx="960"
              cy="240"
              r="122"
              className="animate-dots-flow"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="22s" repeatCount="indefinite" />
            </circle>

            {/* ====== 2. CROSSING X TANGENTS BETWEEN CIRCLE 1 & CIRCLE 2 ====== */}
            {/* Top-Right of Circle 1 down through (420, 240) to Bottom-Left of Circle 2 */}
            <path
              className="animate-dots-flow-fast"
              d="M 326 154 C 362 190, 395 218, 420 240 C 445 262, 478 290, 514 326"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>
            {/* Bottom-Right of Circle 1 up through (420, 240) to Top-Left of Circle 2 */}
            <path
              className="animate-dots-flow-fast"
              d="M 326 326 C 362 290, 395 262, 420 240 C 445 218, 478 190, 514 154"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>

            {/* ====== 3. CROSSING X TANGENTS BETWEEN CIRCLE 2 & CIRCLE 3 ====== */}
            {/* Top-Right of Circle 2 down through (780, 240) to Bottom-Left of Circle 3 */}
            <path
              className="animate-dots-flow-fast"
              d="M 686 154 C 722 190, 755 218, 780 240 C 805 262, 838 290, 874 326"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>
            {/* Bottom-Right of Circle 2 up through (780, 240) to Top-Left of Circle 3 */}
            <path
              className="animate-dots-flow-fast"
              d="M 686 326 C 722 290, 755 262, 780 240 C 805 218, 838 190, 874 154"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>

            {/* ====== 4. OUTER OVERARCHING AND UNDERARCHING CONCENTRIC SWEEP ====== */}
            <path
              className="animate-dots-flow"
              d="M 50 240 
                 C 50 145, 135 65, 240 65 
                 C 335 65, 385 110, 420 130 
                 C 455 110, 505 65, 600 65 
                 C 695 65, 745 110, 780 130 
                 C 815 110, 865 65, 960 65 
                 C 1065 65, 1150 145, 1150 240 
                 C 1150 335, 1065 415, 960 415 
                 C 865 415, 815 370, 780 350 
                 C 745 370, 695 415, 600 415 
                 C 505 415, 455 370, 420 350 
                 C 385 370, 335 415, 240 415 
                 C 135 415, 50 335, 50 240 Z"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
              strokeOpacity="0.8"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="22s" repeatCount="indefinite" />
            </path>

            {/* ====== 5. PARALLEL OUTERMOST GUIDELINE ====== */}
            <path
              className="animate-dots-flow-reverse"
              d="M 25 240 
                 C 25 130, 120 45, 240 45 
                 C 340 45, 390 95, 420 115 
                 C 450 95, 500 45, 600 45 
                 C 700 45, 750 95, 780 115 
                 C 810 95, 860 45, 960 45 
                 C 1080 45, 1175 130, 1175 240 
                 C 1175 350, 1080 435, 960 435 
                 C 860 435, 810 385, 780 365 
                 C 750 385, 700 435, 600 435 
                 C 500 435, 450 385, 420 365 
                 C 390 385, 340 435, 240 435 
                 C 120 435, 25 350, 25 240 Z"
              stroke="#c084fc"
              strokeWidth="1.5"
              strokeDasharray="2 10"
              strokeLinecap="round"
              strokeOpacity="0.4"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="240" dur="24s" repeatCount="indefinite" />
            </path>

            {/* Orbit directional arrows */}
            <text x="100" y="75" fill="#a855f7" fontSize="13" fontWeight="bold">↗</text>
            <text x="365" y="75" fill="#a855f7" fontSize="13" fontWeight="bold">↗</text>
            <text x="380" y="405" fill="#a855f7" fontSize="13" fontWeight="bold">↘</text>
            <text x="895" y="170" fill="#a855f7" fontSize="13" fontWeight="bold">↘</text>
          </svg>

          {/* ================= 3 MATHEMATICALLY PERFECT CIRCULAR CARDS ================= */}
          
          {/* Card 1: Stage 1 - Live Coaching */}
          <div className="absolute left-[240px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[190px] h-[190px] aspect-square rounded-full bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border border-pink-200/90 dark:border-pink-900/40 p-3.5 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(236,72,153,0.08)] hover:shadow-[0_12px_35px_rgba(236,72,153,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1 flex flex-col items-center">
                <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-100/90 dark:bg-pink-950/60 px-2.5 py-0.5 rounded-full mb-1">
                  STAGE 1
                </span>
                <h3 className="text-[17px] font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors leading-tight">
                  Live Coaching
                </h3>
                <p className="mt-1 text-[10px] leading-tight text-slate-600 dark:text-slate-300 font-medium px-2 max-w-[150px] mx-auto">
                  1,200+ hours by Guinness Record faculty &amp; directors.
                </p>
              </div>
              <Link
                href="/courses"
                className="rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white px-4 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-1"
              >
                Explore Batches
              </Link>
            </div>
          </div>

          {/* Card 2: Stage 2 - Test Portal */}
          <div className="absolute left-[600px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[190px] h-[190px] aspect-square rounded-full bg-[#eff6ff]/95 dark:bg-[#1e1b4b]/35 border border-blue-200/90 dark:border-blue-900/40 p-3.5 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1 flex flex-col items-center">
                <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-100/90 dark:bg-sky-950/60 px-2.5 py-0.5 rounded-full mb-1">
                  STAGE 2
                </span>
                <h3 className="text-[17px] font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors leading-tight">
                  Test Portal
                </h3>
                <p className="mt-1 text-[10px] leading-tight text-slate-600 dark:text-slate-300 font-medium px-2 max-w-[150px] mx-auto">
                  4,000+ TCS PYQs, daily mock tests &amp; AI analytics.
                </p>
              </div>
              <Link
                href="/test-series"
                className="rounded-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-1"
              >
                Practice Portal
              </Link>
            </div>
          </div>

          {/* Card 3: Stage 3 - 1-on-1 Doubts */}
          <div className="absolute left-[960px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[190px] h-[190px] aspect-square rounded-full bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border border-pink-200/90 dark:border-pink-900/40 p-3.5 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(236,72,153,0.08)] hover:shadow-[0_12px_35px_rgba(236,72,153,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1 flex flex-col items-center">
                <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider text-pink-600 dark:text-pink-400 bg-pink-100/90 dark:bg-pink-950/60 px-2.5 py-0.5 rounded-full mb-1">
                  STAGE 3
                </span>
                <h3 className="text-[17px] font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors leading-tight">
                  1-on-1 Doubts
                </h3>
                <p className="mt-1 text-[10px] leading-tight text-slate-600 dark:text-slate-300 font-medium px-2 max-w-[150px] mx-auto">
                  8–10 associate faculty daily 9 AM–6 PM &amp; 18 books.
                </p>
              </div>
              <Link
                href="/books"
                className="rounded-full bg-[#a855f7] hover:bg-[#9333ea] text-white px-4 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-1"
              >
                View 18 Books
              </Link>
            </div>
          </div>

          {/* ================= FLOATING MENTORS, STUDENTS & SPEECH BUBBLES ================= */}

          {/* Top Avatar above Live Coaching */}
          <div className="absolute left-[225px] top-[25px] z-20 flex items-center gap-2">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/thanuja_circle.jpg" alt="Mentor" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
            {/* Speech bubble: Everest student achievement */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap">
              Cleared SSC CGL AIR-24! 🏆
            </div>
          </div>

          {/* Top Avatar between Live Coaching & Test Portal */}
          <div className="absolute left-[565px] top-[75px] z-20">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/b-rajkumar_circle.jpg" alt="Director" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Top Avatar above 1-on-1 Doubts */}
          <div className="absolute left-[830px] top-[75px] z-20">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/shiva-shankar_circle.jpg" alt="Faculty" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Bottom Avatar under Live Coaching (far left) */}
          <div className="absolute left-[130px] top-[365px] z-20 flex flex-col items-start gap-1.5">
            <div className="relative flex items-center">
              <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
                <Image src="/images/avatars/avatar_4.jpg" alt="Student" width={40} height={40} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
              </div>
              <div className="-ml-1.5 -mt-3.5 flex size-5 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
                <BarChart2 className="size-3" />
              </div>
            </div>
            {/* Speech bubble: Everest student achievement */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap flex items-center gap-1">
              <span>Scored 48/50 in English!</span>
              <span>🎯</span>
            </div>
          </div>

          {/* Bottom Avatar between Live Coaching & Test Portal */}
          <div className="absolute left-[305px] top-[395px] z-20">
            <div className="relative w-9 h-9 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/images/avatars/avatar_2.jpg" alt="Coach" width={36} height={36} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Bottom Avatar under Test Portal */}
          <div className="absolute left-[595px] top-[365px] z-20 flex flex-col items-start gap-1.5">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/kalyan_circle.jpg" alt="Faculty" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
            {/* Speech bubble: Everest student achievement */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap flex items-center gap-1">
              <span>Formula Book &amp; Handouts sent!</span>
              <span>📚</span>
            </div>
          </div>

          {/* Bottom Avatar between Software & Marketplace */}
          <div className="absolute left-[755px] top-[395px] z-20">
            <div className="relative w-9 h-9 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/b-srinivasulu_circle.jpg" alt="Director" width={36} height={36} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Bottom Avatar under Marketplace (far right) */}
          <div className="absolute left-[885px] top-[330px] z-20">
            <div className="relative w-9 h-9 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/images/avatars/avatar_5.jpg" alt="Client" width={36} height={36} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* ================= FLOATING SQUARE ICON BADGES ON THE TRACK ================= */}

          {/* Document badge (Top left) */}
          <div className="absolute left-[125px] top-[75px] z-20 flex size-6 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
            <FileText className="size-3.5" />
          </div>

          {/* User ID badge (Top middle-left) */}
          <div className="absolute left-[375px] top-[110px] z-20 flex size-6 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
            <User className="size-3.5" />
          </div>

          {/* Video play badge (Top middle-right of Test Portal circle) */}
          <div className="absolute left-[675px] top-[145px] -translate-x-1/2 -translate-y-1/2 z-20 flex size-7 items-center justify-center rounded-full bg-[#7c3aed] text-white shadow-md">
            <Play className="size-3.5 fill-current ml-0.5" />
          </div>

          {/* Calendar badge (Top right) */}
          <div className="absolute left-[870px] top-[125px] z-20 flex size-6 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
            <Calendar className="size-3.5" />
          </div>

          {/* Search circle badge (Right edge) */}
          <div className="absolute left-[905px] top-[215px] z-20 flex size-6 items-center justify-center rounded-full border-2 border-[#7c3aed] bg-white text-[#7c3aed] shadow-md">
            <Search className="size-3" />
          </div>

          {/* Document badge (Bottom middle-left) */}
          <div className="absolute left-[395px] top-[365px] z-20 flex size-6 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
            <FileText className="size-3.5" />
          </div>

        </div>

        {/* ================= MOBILE / TABLET RESPONSIVE VIEW (< lg) ================= */}
        <div className="lg:hidden flex flex-col gap-6 items-center">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`relative w-full max-w-[290px] h-[340px] rounded-[50px] p-6 text-center flex flex-col items-center justify-between border border-purple-200/80 shadow-md ${node.bgTint}`}
            >
              <div className="mt-4">
                <h3 className="text-2xl font-black text-slate-900 dark:text-foreground tracking-tight">
                  {node.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {node.desc}
                </p>
              </div>
              
              <Link
                href={node.link}
                className={`inline-flex items-center gap-1.5 rounded-full px-7 py-2.5 text-xs font-bold transition-all shadow-sm active:scale-95 ${node.btnColor}`}
              >
                <span>{node.btnText}</span>
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
