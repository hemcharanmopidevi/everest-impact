"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Target, Users } from "lucide-react";

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
      <div className="mx-auto max-w-[1400px]">
        {/* Main Hero Card Container (Full-bleed cinematic dark theme matching mockup) */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#070d1e] text-white shadow-[0_25px_70px_rgba(3,10,30,0.55)] border border-slate-800">
          
          {/* ================= TOP COURSE TABS BAR ================= */}
          <div className="border-b border-white/10 bg-slate-950/75 backdrop-blur-md px-4 sm:px-8 py-3">
            <div className="flex items-center justify-between gap-3">
              <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-400 shrink-0">
                <Target className="size-3.5 text-sky-400" />
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
                          ? "bg-sky-500 text-white shadow-md shadow-sky-500/30 scale-[1.02]"
                          : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                      }`}
                    >
                      <span className={`flex size-4 items-center justify-center rounded-full text-[10px] font-black ${
                        isActive ? "bg-white text-sky-600" : "bg-white/15 text-slate-300"
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
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Course"
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= HERO CONTENT WRAPPER ================= */}
          <div className="relative min-h-[560px] lg:min-h-[620px] flex items-center overflow-hidden">
            
            {/* Right Side Background Officer Image (Blending smoothly into dark left) */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[55%] z-0 pointer-events-none overflow-hidden">
              <Image
                key={currentCourse.image}
                src={currentCourse.image}
                alt={`${currentCourse.title} - Everest Coaching Point`}
                fill
                priority
                className="object-cover object-[center_15%] lg:object-[center_top] transition-opacity duration-700 animate-fade-in"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Desktop smooth dark gradient mask from left */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#070d1e] via-[#070d1e]/85 via-35% to-transparent" />
              {/* Mobile/Tablet vertical gradient mask */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/90 to-[#070d1e]/50" />
            </div>

            {/* Floating Circular 2,000+ Selections Completed Badge (Center-Right Inset) */}
            <div className="hidden xl:flex absolute left-[50%] 2xl:left-[48%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex-col items-center justify-center pointer-events-none animate-fade-in">
              <div className="relative flex size-28 xl:size-32 flex-col items-center justify-center rounded-full bg-white shadow-[0_15px_45px_rgba(0,0,0,0.5)] p-2">
                <div className="relative flex size-full flex-col items-center justify-center rounded-full border-[3px] border-slate-100 border-t-sky-500 border-r-sky-500 border-b-sky-500 bg-white">
                  <Users className="size-4 text-sky-500 mb-0.5" />
                  <span className="text-xl xl:text-2xl font-black text-slate-900 leading-none">2,000+</span>
                  <span className="text-[9px] xl:text-[10px] font-semibold text-slate-600 leading-tight text-center mt-1 px-1">
                    SSC Selections<br />Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Left Content Column: Course Details, Syllabus & CTAs */}
            <div className="relative z-10 w-full lg:w-[62%] xl:w-[56%] px-6 py-10 sm:px-10 sm:py-12 md:px-12 lg:px-14 flex flex-col justify-center">
              
              {/* Top Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-sky-300 border border-sky-400/30 shadow-xs">
                  <span className="size-2 rounded-full bg-sky-400" />
                  <span>EVEREST COACHING POINT · HYDERABAD</span>
                </span>

                <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-slate-200 border border-white/20">
                  {currentCourse.badge}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.12]">
                {currentCourse.title} <br />
                <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-300 bg-clip-text text-transparent">
                  {currentCourse.headline}
                </span>
              </h1>

              {/* Subtitle / Overview */}
              <p className="mt-4 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-xl font-normal">
                {currentCourse.desc}
              </p>

              {/* Comprehensive Syllabus Checklist Card */}
              <div className="mt-6 rounded-2xl bg-[#0e172e]/85 backdrop-blur-md border border-white/10 p-4 sm:p-5 shadow-inner max-w-xl">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                  COMPREHENSIVE SYLLABUS COVERED:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-[13px] font-medium text-slate-100">
                  {currentCourse.subjects.map((sub) => (
                    <div key={sub} className="flex items-start gap-2.5">
                      <div className="size-5 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3 text-sky-400 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Posts Badge Strip */}
              <div className="mt-4 flex flex-wrap items-baseline gap-1.5 text-xs text-slate-300">
                <span className="font-bold text-white">Target Posts:</span>
                <span className="text-slate-300">{currentCourse.targetPosts}</span>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={`https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(currentCourse.title)}%20Batch.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between gap-4 rounded-full bg-sky-500 hover:bg-sky-400 active:scale-[0.98] pl-6 pr-2 py-2 text-sm sm:text-base font-bold text-white shadow-lg shadow-sky-500/30 transition-all duration-200"
                >
                  <span>Enroll in {currentCourse.shortName} Batch</span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-white text-sky-600 shadow-sm shrink-0">
                    <ArrowRight className="size-4" />
                  </span>
                </a>

                <a
                  href="#fees"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 active:scale-[0.98] px-6 py-3.5 text-sm sm:text-base font-bold text-white border border-slate-600/60 backdrop-blur-md shadow-sm transition-all duration-200 text-center"
                >
                  <span>View Batches &amp; Fees</span>
                  <ChevronRight className="size-4 text-slate-300" />
                </a>
              </div>

              {/* Our Goal Banner */}
              <div className="mt-5 rounded-2xl bg-[#0e172e]/85 backdrop-blur-md border border-white/10 p-3 sm:p-3.5 flex items-start sm:items-center gap-3 max-w-xl text-xs text-slate-300">
                <div className="size-9 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                  <Target className="size-4 text-sky-400" />
                </div>
                <div>
                  <span className="font-bold text-white">Our Goal: </span>
                  <span>Help aspirants prepare confidently for SSC examinations through structured learning, regular practice, mock tests, and exam-oriented guidance.</span>
                </div>
              </div>

            </div>

          </div>

          {/* ================= BOTTOM SLIDER INDICATOR BAR ================= */}
          <div className="flex items-center justify-between border-t border-white/10 bg-slate-950/75 backdrop-blur-md px-6 py-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400">
                Program {currentIdx + 1} of {total}:
              </span>
              <span className="text-xs font-black text-white">
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
                      : "w-2 bg-slate-600 hover:bg-slate-500"
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
                className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Program"
                className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
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
