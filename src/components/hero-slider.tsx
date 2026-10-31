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

  // Autoplay timer: auto-slides reliably every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, handleNext, currentIdx]);

  return (
    <section
      className="relative w-full px-3 sm:px-6 lg:px-8 py-2 md:py-3"
    >
      <div className="mx-auto max-w-[1260px]">
        {/* Main Hero Card Container matching mockup 1:1 (Proportionately scaled) */}
        <div className="group relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] bg-[#080e22] text-white shadow-[0_20px_60px_rgba(3,10,30,0.6)] border border-slate-800/80">
          
          {/* Right Background Officer Image */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[56%] xl:w-[52%] z-0 pointer-events-none overflow-hidden">
            <Image
              key={currentCourse.image}
              src={currentCourse.image}
              alt={`${currentCourse.title} - Everest Coaching Point`}
              fill
              priority
              className="object-cover object-[center_12%] lg:object-[center_top] transition-opacity duration-700 animate-fade-in"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Desktop gradient mask from left */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#080e22] via-[#080e22]/85 via-30% to-transparent" />
            {/* Mobile/Tablet gradient mask */}
            <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#080e22] via-[#080e22]/90 to-[#080e22]/45" />
          </div>

          {/* Floating Center-Right Circular 2,000+ Selections Completed Badge */}
          <div className="hidden xl:flex absolute left-[48%] 2xl:left-[46%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex-col items-center justify-center pointer-events-none animate-fade-in">
            <div className="relative flex size-22 xl:size-24 flex-col items-center justify-center rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.55)] p-1.5">
              <div className="relative flex size-full flex-col items-center justify-center rounded-full border-[2.5px] border-slate-100 border-t-sky-500 border-r-sky-500 border-b-sky-500 bg-white">
                <Users className="size-3.5 text-sky-500 mb-0.5" />
                <span className="text-lg xl:text-xl font-black text-slate-900 leading-none">2,000+</span>
                <span className="text-[8px] xl:text-[8.5px] font-semibold text-slate-600 leading-tight text-center mt-0.5 px-0.5">
                  SSC Selections<br />Completed
                </span>
              </div>
            </div>
          </div>

          {/* Hero Content Area with smooth key fade */}
          <div 
            key={currentCourse.id} 
            className="relative z-10 w-full lg:w-[60%] xl:w-[55%] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 flex flex-col justify-center animate-fade-in transition-all duration-500"
          >
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/15 backdrop-blur-md px-3 py-0.5 text-[11px] font-semibold text-sky-300 border border-sky-400/30 shadow-xs">
                <span className="size-1.5 rounded-full bg-sky-400" />
                <span>EVEREST COACHING POINT - HYDERABAD</span>
              </span>

              <span className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-3 py-0.5 text-[10.5px] font-semibold text-slate-200 border border-white/20">
                {currentCourse.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black tracking-tight text-white leading-[1.13]">
              {currentCourse.title} <br />
              <span className="text-sky-400">
                {currentCourse.headline}
              </span>
            </h1>

            {/* Subtitle / Overview */}
            <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] text-slate-300/90 leading-relaxed max-w-lg font-normal">
              {currentCourse.desc}
            </p>

            {/* Comprehensive Syllabus Checklist Card */}
            <div className="mt-3.5 sm:mt-4 rounded-xl bg-[#0e172e]/80 backdrop-blur-md border border-white/10 p-3 sm:p-3.5 shadow-inner max-w-lg">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                COMPREHENSIVE SYLLABUS COVERED:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-medium text-slate-100">
                {currentCourse.subjects.map((sub) => (
                  <div key={sub} className="flex items-start gap-2">
                    <div className="size-4 rounded-full bg-sky-500/20 border border-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-2.5 text-sky-400 stroke-[3]" />
                    </div>
                    <span className="leading-snug">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Posts Badge Strip */}
            <div className="mt-2.5 sm:mt-3 flex flex-wrap items-baseline gap-1.5 text-[11px] sm:text-xs text-slate-300">
              <span className="font-bold text-white">Target Posts:</span>
              <span className="text-slate-300">{currentCourse.targetPosts}</span>
            </div>

            {/* CTA Buttons */}
            <div 
              className="mt-3.5 sm:mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <a
                href={`https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20enroll%20in%20the%20${encodeURIComponent(currentCourse.title)}%20Batch.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 rounded-full bg-sky-500 hover:bg-sky-400 active:scale-[0.98] pl-5 pr-1.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-sky-500/30 transition-all duration-200"
              >
                <span>Enroll in {currentCourse.shortName} Batch</span>
                <span className="flex size-7 sm:size-7.5 items-center justify-center rounded-full bg-white text-sky-600 shadow-xs shrink-0">
                  <ArrowRight className="size-3.5" />
                </span>
              </a>

              <a
                href="#fees"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 active:scale-[0.98] px-5 py-2.5 text-xs sm:text-sm font-bold text-white border border-slate-600/60 backdrop-blur-md shadow-xs transition-all duration-200 text-center"
              >
                <span>View Batches &amp; Fees</span>
                <ChevronRight className="size-3.5 text-slate-300" />
              </a>
            </div>

            {/* Our Goal Banner */}
            <div className="mt-3 sm:mt-3.5 rounded-xl bg-[#0e172e]/80 backdrop-blur-md border border-white/10 p-2.5 sm:p-3 flex items-start sm:items-center gap-2.5 max-w-lg text-[10.5px] sm:text-xs text-slate-300">
              <div className="size-7 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                <Target className="size-3.5 text-sky-400" />
              </div>
              <div>
                <span className="font-bold text-white">Our Goal: </span>
                <span>Help aspirants prepare confidently for SSC examinations through structured learning, regular practice, mock tests, and exam-oriented guidance.</span>
              </div>
            </div>

          </div>

          {/* Floating Subtle Slide Navigation Dots on Bottom Right */}
          <div className="absolute bottom-3 right-5 z-20 hidden sm:flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {sscCourses.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Go to ${c.title}`}
                onClick={() => setCurrentIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIdx
                    ? "w-5 bg-sky-500 shadow-xs"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Floating Next/Prev Arrow Controls (Discreet on hover) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Program"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-black/40 hover:bg-sky-500 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Program"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 flex size-8 items-center justify-center rounded-full bg-black/40 hover:bg-sky-500 text-white backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-all duration-200"
          >
            <ChevronRight className="size-4" />
          </button>

        </div>
      </div>
    </section>
  );
}
