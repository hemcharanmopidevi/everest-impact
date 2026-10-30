"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { Award, ChevronLeft, ChevronRight, CheckCircle2, Target, Users } from "lucide-react";

const sscCourses = [
  {
    id: "cgl",
    num: "1",
    tag: "SSC CGL",
    shortName: "SSC CGL",
    badge: "COMBINED GRADUATE LEVEL · GROUP B & C",
    title: "SSC CGL Coaching",
    subTitle: "Combined Graduate Level Examination",
    headline: "From Aspirant to Central Govt Officer — Everest is the Path",
    targetPosts: "Income Tax Inspector · Central GST Inspector · ASO (MEA/CSS) · CBI SI · ED",
    desc: "Comprehensive preparation uniting 1,200+ hours of elite coaching, shortcut tricks, and TCS pattern mock tests for Tier-I & Tier-II mastery.",
    subjects: [
      "General Intelligence & Reasoning",
      "Quantitative Aptitude (Guinness Record Shortcuts)",
      "English Comprehension (Directors' Handouts)",
      "General Awareness (Static GK & Current Affairs)",
    ],
    image: "/images/hero/cgl-officer.jpg",
    accentGradient: "from-sky-500 via-sky-400 to-blue-600",
    badgeBg: "bg-sky-500/10 border-sky-400/30 text-sky-600 dark:text-sky-400",
  },
  {
    id: "chsl",
    num: "2",
    tag: "SSC CHSL",
    shortName: "SSC CHSL",
    badge: "10+2 HIGHER SECONDARY · DESK & SECRETARIAT",
    title: "SSC CHSL Coaching",
    subTitle: "Combined Higher Secondary Level Examination",
    headline: "From Aspirant to Secretariat Officer Right After 10+2",
    targetPosts: "Postal Assistant · Sorting Assistant · Data Entry Operator (DEO) · LDC",
    desc: "Focused foundation and speed drills designed for 10+2 aspirants to secure stable Central Govt administrative and secretariat careers.",
    subjects: [
      "English Language & Comprehension",
      "Quantitative Aptitude (Speed Calculation Drills)",
      "General Intelligence (Logical & Non-Verbal)",
      "General Awareness & Current Affairs",
    ],
    image: "/images/hero/chsl-officer.jpg",
    accentGradient: "from-blue-500 via-indigo-400 to-sky-600",
    badgeBg: "bg-blue-500/10 border-blue-400/30 text-blue-600 dark:text-blue-400",
  },
  {
    id: "cpo",
    num: "3",
    tag: "SSC CPO",
    shortName: "SSC CPO",
    badge: "CENTRAL POLICE ORGANISATION · SUB-INSPECTOR",
    title: "SSC CPO Coaching",
    subTitle: "Central Police Organisation Examination",
    headline: "From Aspirant to Sub-Inspector — Wear The Stars With Pride",
    targetPosts: "Sub-Inspector in Delhi Police · CISF · BSF · CRPF · ITBP · SSB",
    desc: "Targeted double-tier coaching combining intense written exam drills, specialized English preparation for Paper-II, and physical guidance.",
    subjects: [
      "General Intelligence & Reasoning",
      "Quantitative Aptitude",
      "English Comprehension (Paper-I & Paper-II Guidance)",
      "General Knowledge, Current Affairs & PET/PST Guidance",
    ],
    image: "/images/hero/cpo-officer.jpg",
    accentGradient: "from-amber-500 via-orange-400 to-amber-600",
    badgeBg: "bg-amber-500/10 border-amber-400/30 text-amber-600 dark:text-amber-400",
  },
  {
    id: "steno",
    num: "4",
    tag: "SSC Steno",
    shortName: "SSC Stenographer",
    badge: "GRADE 'C' & 'D' · MINISTRIES & CENTRAL COURTS",
    title: "SSC Stenographer Coaching",
    subTitle: "SSC Stenographer Grade C & D Examination",
    headline: "From Aspirant to Ministry Confidential Assistant — No Maths Exam",
    targetPosts: "Stenographers in Central Ministries · Armed Forces HQ · Parliamentary Offices",
    desc: "Specialized training emphasizing English dominance (100 marks), Reasoning accuracy, and comprehensive shorthand speed guidance.",
    subjects: [
      "Stenography and Shorthand Practice",
      "English Language & Comprehension (100 Marks Focus)",
      "General Intelligence & Reasoning",
      "General Awareness & Skill-Test Preparation",
    ],
    image: "/images/hero/steno-officer.jpg",
    accentGradient: "from-teal-500 via-emerald-400 to-sky-600",
    badgeBg: "bg-teal-500/10 border-teal-400/30 text-teal-600 dark:text-teal-400",
  },
  {
    id: "gd",
    num: "5",
    tag: "SSC GD",
    shortName: "SSC GD",
    badge: "GENERAL DUTY CONSTABLE · PARAMILITARY FORCES",
    title: "SSC GD Coaching",
    subTitle: "General Duty Constable Examination",
    headline: "From Aspirant to Paramilitary Soldier — Guard The Nation",
    targetPosts: "Constables in BSF · CISF · CRPF · ITBP · SSB · SSF & Assam Rifles",
    desc: "Structured, high-clarity coaching with concept shortcuts in Telugu & English, bilingual test series, and complete physical test advice.",
    subjects: [
      "General Intelligence & Reasoning",
      "Elementary Mathematics",
      "English or Hindi Language",
      "General Knowledge, General Awareness & PET/PST Guidance",
    ],
    image: "/images/hero/gd-officer.jpg",
    accentGradient: "from-emerald-500 via-teal-400 to-emerald-600",
    badgeBg: "bg-emerald-500/10 border-emerald-400/30 text-emerald-600 dark:text-emerald-400",
  },
];


export function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = sscCourses.length;
  const currentCourse = sscCourses[currentIdx];

  const handleNext = useCallback(() => {
    setCurrentIdx((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIdx((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer: auto-slide every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      className="relative w-full px-3 sm:px-6 lg:px-8 pt-3 pb-10 md:pt-5 md:pb-14"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1360px]">
        {/* Main Hero Card Container */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] bg-white dark:bg-card shadow-[0_20px_60px_rgba(16,42,92,0.07)] border border-slate-200/80 dark:border-border">
          
          {/* ================= TOP COURSE TABS BAR ================= */}
          <div className="border-b border-slate-100 dark:border-border/60 bg-slate-50/70 dark:bg-zinc-900/40 px-4 sm:px-8 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 shrink-0">
                <Target className="size-3.5 text-sky-500" />
                <span>SSC Exam Coaching Programs:</span>
              </span>

              {/* 5 Program Clickable Tabs */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto">
                {sscCourses.map((course, idx) => {
                  const isActive = idx === currentIdx;
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => setCurrentIdx(idx)}
                      className={`relative flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-xs font-bold transition-all duration-300 whitespace-nowrap shrink-0 ${
                        isActive
                          ? "bg-slate-900 text-white shadow-md dark:bg-sky-500 dark:text-white scale-[1.02]"
                          : "bg-white dark:bg-card text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-border hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className={`flex size-4 items-center justify-center rounded-full text-[10px] font-black ${
                        isActive ? "bg-sky-400 text-slate-950" : "bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                      }`}>
                        {course.num}
                      </span>
                      <span>{course.shortName}</span>
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slide Arrows */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Course"
                  className="flex size-7 items-center justify-center rounded-full border border-slate-200 dark:border-border bg-white dark:bg-card text-slate-700 dark:text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Course"
                  className="flex size-7 items-center justify-center rounded-full border border-slate-200 dark:border-border bg-white dark:bg-card text-slate-700 dark:text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= HERO CONTENT GRID ================= */}
          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-6 px-5 py-8 sm:px-10 sm:py-12 md:px-12 lg:px-14 lg:py-14">
            
            {/* Left Column: Course Details, Syllabus & CTAs */}
            <div className="z-10 lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              
              {/* Badge: Institute + Course Tag */}
              <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-bold text-sky-600 dark:text-sky-400 border border-sky-400/30 shadow-xs">
                  <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
                  <span>EVEREST COACHING POINT · HYDERABAD</span>
                </span>

                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${currentCourse.badgeBg}`}>
                  {currentCourse.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.1] text-[#0f172a] dark:text-white">
                {currentCourse.title} <br />
                <span className={`bg-gradient-to-r ${currentCourse.accentGradient} bg-clip-text text-transparent`}>
                  {currentCourse.headline}
                </span>
              </h1>

              {/* Subtitle / Overview */}
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-700/90 dark:text-slate-300 leading-relaxed font-normal">
                {currentCourse.desc}
              </p>

              {/* Syllabus / Subjects Covered Checklist */}
              <div className="mt-4 sm:mt-5 rounded-2xl bg-slate-50 dark:bg-card/90 border border-slate-200/80 dark:border-border/80 p-3.5 sm:p-4 shadow-xs">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Comprehensive Syllabus Covered:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {currentCourse.subjects.map((sub) => (
                    <div key={sub} className="flex items-start gap-1.5">
                      <CheckCircle2 className="size-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span className="leading-tight">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Posts Badge Strip */}
              <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-800 dark:text-slate-200 shrink-0">Target Posts:</span>
                <span className="truncate">{currentCourse.targetPosts}</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
                <a
                  href={`https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(currentCourse.title)}%20Batch.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full btn-premium px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  Enroll in {currentCourse.shortName} Batch
                </a>

                <a
                  href="#fees"
                  className="inline-flex items-center justify-center rounded-full bg-white/95 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300/80 dark:border-slate-700 px-6 py-3.5 sm:py-4 text-sm font-bold shadow-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-[0.98] text-center"
                >
                  View Batches &amp; Fees
                </a>
              </div>

              {/* Our Goal Banner */}
              <div className="mt-4 rounded-xl bg-gradient-to-r from-sky-500/10 via-amber-500/5 to-transparent border-l-4 border-sky-500 p-2.5 sm:p-3 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                <span className="font-bold text-[#0f172a] dark:text-white">Our Goal: </span>
                Help aspirants prepare confidently for SSC examinations through structured learning, regular practice, mock tests, and exam-oriented guidance.
              </div>

            </div>

            {/* Right Column: Dynamic Course Character & Overlapping Badges */}
            <div className="relative lg:col-span-6 xl:col-span-6 flex flex-col items-center justify-center min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[540px]">
              
              {/* Center Character Portrait */}
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/20 border border-white/60">
                <Image
                  key={currentCourse.image}
                  src={currentCourse.image}
                  alt={`${currentCourse.title} - Everest Coaching Point`}
                  fill
                  className="object-cover object-top transition-all duration-500 animate-fade-in"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 420px"
                />

                {/* Bottom title banner on the character */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    {currentCourse.shortName} Career Path
                  </p>
                  <p className="text-sm font-black truncate drop-shadow-sm">
                    {currentCourse.targetPosts}
                  </p>
                </div>
              </div>

              {/* Mobile Highlights Pills underneath character (< md) */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:hidden z-10 w-full px-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800/80 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300 shadow-xs">
                  <Users className="size-3 text-sky-500" />
                  <span>2,000+ Selections</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200/80 dark:border-amber-800/80 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300 shadow-xs">
                  <Award className="size-3 text-amber-500" />
                  <span>Guinness Record Mentors</span>
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 shadow-xs">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Daily Live Mentorship</span>
                </div>
              </div>

              {/* Widget 1: Circular Goals / Selections Completed Badge (Top Left of Character) - visible on md+ */}
              <div className="hidden md:flex absolute left-0 sm:left-2 lg:-left-6 top-4 sm:top-8 z-20 flex-col items-center justify-center rounded-full bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl border border-slate-100 animate-fade-in">
                <div className="relative flex size-24 sm:size-28 flex-col items-center justify-center rounded-full border-[3px] border-slate-200 border-t-sky-500 border-r-sky-400 bg-white shadow-inner">
                  <Users className="size-3.5 text-sky-500 mb-0.5" />
                  <span className="text-base sm:text-lg font-black text-[#0f172a] tracking-tight">2,000+</span>
                  <span className="text-[9px] font-semibold text-slate-500 leading-tight text-center px-1">
                    SSC Selections<br />Completed
                  </span>
                </div>
              </div>



            </div>

          </div>

          {/* ================= BOTTOM SLIDER INDICATOR BAR ================= */}
          <div className="flex items-center justify-between border-t border-slate-100 dark:border-border/60 bg-slate-50/50 dark:bg-zinc-900/30 px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                Program {currentIdx + 1} of {total}:
              </span>
              <span className="text-xs font-black text-slate-800 dark:text-white">
                {currentCourse.title}
              </span>
            </div>

            {/* Slide Pill Dots */}
            <div className="flex items-center gap-2">
              {sscCourses.map((c, i) => (
                <button
                  key={c.id}
                  type="button"
                  aria-label={`Go to ${c.title}`}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIdx
                      ? "w-8 bg-sky-500"
                      : "w-2 bg-slate-300 dark:bg-zinc-700 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

            {/* Mobile / Compact Next & Prev Buttons */}
            <div className="flex items-center gap-1 sm:hidden">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Program"
                className="flex size-7 items-center justify-center rounded-full border border-slate-200 dark:border-border bg-white dark:bg-card text-slate-700 dark:text-slate-300"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Program"
                className="flex size-7 items-center justify-center rounded-full border border-slate-200 dark:border-border bg-white dark:bg-card text-slate-700 dark:text-slate-300"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
