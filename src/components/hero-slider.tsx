"use client";

import Image from "next/image";
import { Award, BookOpen, Users } from "lucide-react";
import { AntigravityParticles } from "./antigravity-particles";

const mentors = [
  { id: 1, name: "B. Rajkumar Sir", role: "Quant Director · Guinness Record Holder", image: "/faculty/circle_portraits/b-rajkumar_circle.jpg", active: true },
  { id: 2, name: "B. Sreenivasulu Reddy Sir", role: "English Director · 27+ Yrs Exp", image: "/faculty/circle_portraits/b-srinivasulu_circle.jpg", active: false },
  { id: 3, name: "Kalyan Sir", role: "Reasoning Specialist", image: "/faculty/circle_portraits/kalyan_circle.jpg", active: false },
  { id: 4, name: "Shiva Shankar Sir", role: "GS & Polity Faculty", image: "/faculty/circle_portraits/shiva-shankar_circle.jpg", active: false },
  { id: 5, name: "Suparas Chand Jain Sir", role: "Geography & GK Specialist", image: "/faculty/circle_portraits/suparas-chand-jain_circle.jpg", active: false },
  { id: 6, name: "Thanuja Ma'am", role: "General Science Specialist", image: "/faculty/circle_portraits/thanuja_circle.jpg", active: false },
];

export function HeroSlider() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:pt-6 md:pb-16">
      <div className="mx-auto max-w-[1360px]">
        {/* Main Hero Card with Clean White Background & Google Antigravity Particles */}
        <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] bg-white dark:bg-card shadow-[0_20px_60px_rgba(16,42,92,0.07)] border border-slate-200/80 dark:border-border">
          
          {/* Google Antigravity-style Interactive Floating Particles Canvas */}
          <AntigravityParticles />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-4 px-6 py-10 sm:px-10 sm:py-14 md:px-14 lg:px-16 lg:py-16">
            
            {/* Left Column: Heading, Subtext & CTA Button */}
            <div className="z-10 lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
              {/* Badge */}
              <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full bg-sky-500/10 px-3.5 py-1 text-xs font-bold text-sky-500 border border-sky-400/30 shadow-sm">
                <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
                <span>EVEREST COACHING POINT · HYDERABAD</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-black tracking-tight leading-[1.08] text-[#0f172a]">
                Rankers Thrive <br />
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                  Here
                </span>
              </h1>

              <p className="mt-5 max-w-md text-base sm:text-lg text-slate-700/90 leading-relaxed font-normal">
                Join South India&apos;s premier institute uniting 1,200+ hours of elite coaching,
                Guinness World Record mentors, and 18 published books to build and sustain your
                SSC CGL &amp; CHSL career.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-9">
                <a
                  href="https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20join%20the%20August%202026%20Live%20Batch."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full btn-premium px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join Our Global Community
                </a>

                <a
                  href="#fees"
                  className="inline-flex items-center justify-center rounded-full bg-white/95 text-slate-800 border border-slate-300/80 px-6 py-4 text-sm font-bold shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98]"
                >
                  View Batches &amp; Fees
                </a>
              </div>
            </div>

            {/* Right Column: Center Character, Floating Badges & Mentor Live Video Grid */}
            <div className="relative lg:col-span-7 xl:col-span-7 flex items-center justify-center min-h-[460px] lg:min-h-[520px]">
              
              {/* Center Character */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/15 border border-white/60">
                <Image
                  src="/images/coach_hero.jpg"
                  alt="Everest Coaching Point Mentorship"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>

              {/* Widget 1: Circular Goals / Selections Completed Badge (Top Left of Character) */}
              <div className="absolute left-0 sm:left-4 lg:-left-6 top-4 sm:top-8 z-20 flex flex-col items-center justify-center rounded-full bg-white/95 backdrop-blur-md p-4 sm:p-5 shadow-xl border border-slate-100 animate-fade-in">
                <div className="relative flex size-24 sm:size-28 flex-col items-center justify-center rounded-full border-[3px] border-slate-200 border-t-sky-500 border-r-sky-400 bg-white shadow-inner">
                  <Users className="size-3.5 text-sky-500 mb-0.5" />
                  <span className="text-base sm:text-lg font-black text-[#0f172a] tracking-tight">2,000+</span>
                  <span className="text-[9px] font-semibold text-slate-500 leading-tight text-center px-1">
                    SSC Selections<br />Completed
                  </span>
                </div>
              </div>

              {/* Widget 2: Marketplace / Faculty Mentors Card (Bottom Left of Character, Overlapping) */}
              <div className="absolute left-2 sm:left-6 lg:left-0 bottom-2 sm:bottom-6 z-20 w-[240px] sm:w-[270px] rounded-2xl bg-[#0a1128]/90 backdrop-blur-xl p-4 text-white shadow-2xl border border-white/15 animate-fade-in">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-wide">Faculty Mentors</span>
                  <span className="text-[11px] font-medium text-sky-300 mb-3">
                    Everest Coaching Point (Dilsukhnagar)
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Mentor 1 */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-full ring-1 ring-white/30">
                      <Image
                        src="/images/avatars/avatar_1.jpg"
                        alt="B. Rajkumar Sir"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-white">B. Rajkumar Sir</p>
                      <p className="flex items-center gap-1 text-[10px] text-slate-300">
                        <Award className="size-2.5 shrink-0 text-sky-400" />
                        <span className="truncate">Quant · Guinness Record Holder</span>
                      </p>
                    </div>
                  </div>

                  {/* Mentor 2 */}
                  <div className="flex items-center gap-2.5 border-t border-white/10 pt-2">
                    <div className="relative w-8 h-8 shrink-0 overflow-hidden rounded-full ring-1 ring-white/30">
                      <Image
                        src="/images/avatars/avatar_2.jpg"
                        alt="B. Sreenivasulu Reddy Sir"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-semibold text-white">B. Sreenivasulu Reddy Sir</p>
                      <p className="flex items-center gap-1 text-[10px] text-slate-300">
                        <BookOpen className="size-2.5 shrink-0 text-sky-400" />
                        <span className="truncate">English Director · 27+ Yrs Exp</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Widget 3: Live Video Grid with 6 Mentor Faces (Right of Character) */}
              <div className="absolute right-0 sm:right-2 lg:-right-4 top-1/2 -translate-y-1/2 z-20 flex flex-col rounded-2xl bg-white/70 backdrop-blur-md p-3 sm:p-4 shadow-xl border border-white/80">
                {/* Header: LIVE Badge + Coaching Mastery Session */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                    LIVE
                  </span>
                  <span className="text-[11px] font-bold text-[#0f172a] tracking-tight">
                    SSC CGL Live Mentorship Session
                  </span>
                </div>

                {/* 2x3 Grid with the 6 Mentor Faces */}
                <div className="grid grid-cols-2 gap-2 w-[160px] sm:w-[190px]">
                  {mentors.map((mentor, index) => (
                    <div
                      key={mentor.id}
                      title={`${mentor.name} — ${mentor.role}`}
                      className={`relative aspect-square w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm transition-transform hover:scale-105 ${
                        index === 0
                          ? "ring-2 ring-sky-500 shadow-md shadow-sky-500/30"
                          : "ring-1 ring-white/80"
                      }`}
                    >
                      <Image
                        src={mentor.image}
                        alt={mentor.name}
                        fill
                        className="object-cover"
                        sizes="95px"
                      />
                      {/* Active green indicator dot */}
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 flex size-2">
                        <span className="size-2 rounded-full bg-emerald-500 ring-1 ring-white" />
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Attendee Stack */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    {mentors.slice(0, 4).map((m) => (
                      <div
                        key={m.id}
                        className="relative w-5 h-5 shrink-0 overflow-hidden rounded-full ring-1 ring-white"
                      >
                        <Image
                          src={m.image}
                          alt={m.name}
                          width={20}
                          height={20}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0f172a]">
                    + 2,000+ Rankers
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
