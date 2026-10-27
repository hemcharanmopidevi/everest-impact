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
      className="relative overflow-hidden py-14 md:py-20 border-b border-border/40 bg-[#faf8fa] dark:bg-background"
    >
      {/* Faint World Map Watermark in Background — Exact match to reference image */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.14] dark:opacity-[0.05]">
        <Image
          src="/images/world-map.svg"
          alt="World Map Background"
          width={1300}
          height={500}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 z-10">
        
        {/* Section Header matching 'Coach Success Platform' reference */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#a855f7] tracking-tight">
            Coach Success Platform
          </h2>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-xl mx-auto font-medium">
            Live Classes · 4000+ TCS PYQ Testing · 1-on-1 Doubt Mentorship — An interconnected ecosystem.
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

            {/* ====== 1. THREE INDIVIDUAL DOTTED OVAL BOUNDARIES (Refined Decreased Radii) ====== */}
            {/* Oval 1 Dotted Boundary (Left: Education) */}
            <ellipse
              cx="240"
              cy="240"
              rx="112"
              ry="128"
              className="animate-dots-flow"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="22s" repeatCount="indefinite" />
            </ellipse>

            {/* Oval 2 Dotted Boundary (Center: Software) */}
            <ellipse
              cx="600"
              cy="240"
              rx="112"
              ry="128"
              className="animate-dots-flow-reverse"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="300" dur="22s" repeatCount="indefinite" />
            </ellipse>

            {/* Oval 3 Dotted Boundary (Right: Marketplace) */}
            <ellipse
              cx="960"
              cy="240"
              rx="112"
              ry="128"
              className="animate-dots-flow"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-300" dur="22s" repeatCount="indefinite" />
            </ellipse>

            {/* ====== 2. CROSSING X TANGENTS BETWEEN OVAL 1 & OVAL 2 ====== */}
            {/* Top-Right of Oval 1 down through (420, 240) to Bottom-Left of Oval 2 */}
            <path
              className="animate-dots-flow-fast"
              d="M 323 154 C 360 190, 395 218, 420 240 C 445 262, 480 290, 517 326"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>
            {/* Bottom-Right of Oval 1 up through (420, 240) to Top-Left of Oval 2 */}
            <path
              className="animate-dots-flow-fast"
              d="M 323 326 C 360 290, 395 262, 420 240 C 445 218, 480 190, 517 154"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>

            {/* ====== 3. CROSSING X TANGENTS BETWEEN OVAL 2 & OVAL 3 ====== */}
            {/* Top-Right of Oval 2 down through (780, 240) to Bottom-Left of Oval 3 */}
            <path
              className="animate-dots-flow-fast"
              d="M 683 154 C 720 190, 755 218, 780 240 C 805 262, 840 290, 877 326"
              stroke="#a855f7"
              strokeWidth="2.5"
              strokeDasharray="3 12"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-360" dur="18s" repeatCount="indefinite" />
            </path>
            {/* Bottom-Right of Oval 2 up through (780, 240) to Top-Left of Oval 3 */}
            <path
              className="animate-dots-flow-fast"
              d="M 683 326 C 720 290, 755 262, 780 240 C 805 218, 840 190, 877 154"
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

          {/* ================= 3 PROPORTIONATELY SIZED DECREASED OVAL CARDS ================= */}
          
          {/* Card 1: Education (Live Coaching) */}
          <div className="absolute left-[240px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[184px] h-[198px] rounded-full bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border border-pink-200/90 dark:border-pink-900/40 px-3.5 py-4 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(236,72,153,0.08)] hover:shadow-[0_12px_35px_rgba(236,72,153,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors">
                  Education
                </h3>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-600 dark:text-slate-300 font-medium px-1 max-w-[150px] mx-auto">
                  Access world-class, curated content to elevate your impact.
                </p>
              </div>
              <Link
                href="/courses"
                className="rounded-full bg-[#a89090] hover:bg-[#8f7575] text-white px-5 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 2: Software (Test Portal) */}
          <div className="absolute left-[600px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[184px] h-[198px] rounded-full bg-[#eff6ff]/95 dark:bg-[#1e1b4b]/35 border border-blue-200/90 dark:border-blue-900/40 px-3.5 py-4 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(59,130,246,0.08)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors">
                  Software
                </h3>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-600 dark:text-slate-300 font-medium px-1 max-w-[150px] mx-auto">
                  Manage the logistics and administration of your practice with ease.
                </p>
              </div>
              <Link
                href="/test-series"
                className="rounded-full bg-[#93c5fd] hover:bg-[#60a5fa] text-slate-900 px-5 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Card 3: Marketplace (1-on-1 Doubts) */}
          <div className="absolute left-[960px] top-[240px] -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="group relative w-[184px] h-[198px] rounded-full bg-[#fdf2f8]/95 dark:bg-[#2e1065]/25 border border-pink-200/90 dark:border-pink-900/40 px-3.5 py-4 flex flex-col items-center justify-between text-center shadow-[0_8px_25px_rgba(236,72,153,0.08)] hover:shadow-[0_12px_35px_rgba(236,72,153,0.18)] hover:scale-105 transition-all duration-300">
              <div className="mt-1">
                <h3 className="text-xl font-black text-slate-900 dark:text-foreground tracking-tight group-hover:text-[#a855f7] transition-colors">
                  Marketplace
                </h3>
                <p className="mt-1.5 text-[11px] leading-snug text-slate-600 dark:text-slate-300 font-medium px-1 max-w-[150px] mx-auto">
                  Showcase your talents, attract new clients, and grow your practice.
                </p>
              </div>
              <Link
                href="/books"
                className="rounded-full bg-[#a89090] hover:bg-[#8f7575] text-white px-5 py-1.5 text-[11px] font-bold transition-all shadow-sm active:scale-95 mb-0.5"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* ================= FLOATING MENTORS, STUDENTS & SPEECH BUBBLES ================= */}

          {/* Top Avatar above Education */}
          <div className="absolute left-[225px] top-[25px] z-20 flex items-center gap-2">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/thanuja_circle.jpg" alt="Mentor" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
            {/* Speech bubble: exact quote from picture */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap">
              Thank you for the coaching tool!
            </div>
          </div>

          {/* Top Avatar between Education & Software */}
          <div className="absolute left-[565px] top-[75px] z-20">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/b-rajkumar_circle.jpg" alt="Director" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Top Avatar above Marketplace */}
          <div className="absolute left-[830px] top-[75px] z-20">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/shiva-shankar_circle.jpg" alt="Faculty" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Bottom Avatar under Education (far left) - Positioned with ample breathing room */}
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
            {/* Speech bubble: placed cleanly below */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap flex items-center gap-1">
              <span>Thank you for the report!</span>
              <span>🙏</span>
            </div>
          </div>

          {/* Bottom Avatar between Education & Software */}
          <div className="absolute left-[305px] top-[395px] z-20">
            <div className="relative w-9 h-9 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/images/avatars/avatar_2.jpg" alt="Coach" width={36} height={36} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
          </div>

          {/* Bottom Avatar under Software */}
          <div className="absolute left-[595px] top-[365px] z-20 flex flex-col items-start gap-1.5">
            <div className="relative w-10 h-10 shrink-0 rounded-full ring-2 ring-white shadow-md overflow-hidden bg-slate-100">
              <Image src="/faculty/circle_portraits/kalyan_circle.jpg" alt="Faculty" width={40} height={40} className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 ring-1.5 ring-white" />
            </div>
            {/* Speech bubble: placed cleanly below */}
            <div className="rounded-xl bg-white/95 dark:bg-card px-3.5 py-1 text-[11px] font-bold text-slate-700 dark:text-slate-200 shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap flex items-center gap-1">
              <span>The resource is on the way!</span>
              <span>✈️</span>
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

          {/* Video play badge (Top middle-right) */}
          <div className="absolute left-[660px] top-[125px] z-20 flex size-6 items-center justify-center rounded-md bg-[#7c3aed] text-white shadow-md">
            <Play className="size-3.5 fill-current" />
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
