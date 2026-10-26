"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock, 
  GraduationCap,
  HelpCircle, 
  MapPin, 
  Monitor,
  PhoneCall, 
  Users2
} from "lucide-react";
import { facultyMembers } from "@/data/site";


const impactStats = [
  { value: "27+", label: "Years of Academic Legacy", sub: "Since 1999 in competitive education" },
  { value: "2,000+", label: "Final Central Govt Selections", sub: "In SSC CGL, CHSL, CPO, MTS & SI" },
  { value: "1,200+", label: "Hours of Direct Classroom Teaching", sub: "Complete syllabus coverage from basics" },
  { value: "18", label: "Official Everest Publications", sub: "Comprehensive TCS question compendiums" },
];

const missionPoints = [
  {
    icon: "🏗️",
    title: "Strong Academic Foundation",
    desc: "Empowering aspirants with conceptual clarity and disciplined habits to excel in national-level competitive exams.",
  },
  {
    icon: "🎯",
    title: "Expert SSC-Specific Mentorship",
    desc: "Direct classroom teaching from veteran educators with proven records in cracking TCS-pattern examinations.",
  },
  {
    icon: "🌱",
    title: "Inspiring Learning Ecosystem",
    desc: "Modern air-conditioned Dilsukhnagar campus with high-tech digital studios, reading library, and doubt desks.",
  },
  {
    icon: "🚀",
    title: "Preparation to Final Appointment",
    desc: "Unwavering support through full-length mocks, 4-hour video solutions, and career counseling until final selection.",
  },
];

const whyChooseUs = [
  {
    title: "Guinness World Record Holder in Quant",
    desc: "Learn Mathematics shortcuts and speed techniques from B. Rajkumar Sir, celebrated worldwide for mental math mastery.",
    stat: "17+ Years Exp",
  },
  {
    title: "Twin States' No.1 English Faculty",
    desc: "Master grammar, vocabulary, and comprehension under B. Sreenivasulu Reddy Sir, helping students consistently score 45+ out of 50.",
    stat: "27+ Years Exp",
  },
  {
    title: "18 Own Published Books",
    desc: "Every student receives comprehensive publications and handouts with over 10,000+ TCS Previous Year Questions (PYQs).",
    stat: "18 Publications",
  },
  {
    title: "Dedicated Daily Doubt-Solving Desk",
    desc: "8–10 associate mentors available on desk every working day from 9:00 AM to 6:00 PM for one-on-one personal doubt clearing.",
    stat: "9 AM – 6 PM",
  },
  {
    title: "Daily Full-Length Mocks with Video Solutions",
    desc: "Simulate actual TCS exam environment with daily computer-based tests followed by detailed 4-hour faculty video explanations.",
    stat: "Daily Mocks",
  },
  {
    title: "Unmatched South India Track Record",
    desc: "Thousands of central government officers in SSC CGL, CHSL, CPO, MTS, and Central Police forces trace their success to Everest.",
    stat: "10,000+ Rankers",
  },
];

const campusPillars = [
  {
    title: "Comprehensive Classroom Batches",
    subtitle: "Acoustic Smart Lecture Halls",
    mentor: "B. Rajkumar Sir",
    role: "Guinness World Record Holder · Quant",
    image: "/faculty/b-rajkumar.jpg",
    badge: "Quant & Classroom Coaching",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    features: [
      "200+ Ergonomic Dual-Bench Seating",
      "High-Definition 4K Digital Boards",
      "Magical Shortcuts & Speed Math",
    ],
  },
  {
    title: "1-on-1 Faculty Mentorship",
    subtitle: "Personalized Score Diagnosis",
    mentor: "Kalyan Sir",
    role: "15+ Years Experience · Reasoning",
    image: "/faculty/kalyan.jpg",
    badge: "Reasoning & Mentorship",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    features: [
      "Individual Performance Diagnostics",
      "Weak Topic Strategy Remediation",
      "Full 50/50 Marks Blueprint",
    ],
  },
  {
    title: "Daily Dedicated Doubt Desk",
    subtitle: "Instant In-Person Clarification",
    mentor: "Basha Sir & Team",
    role: "Senior GS & Doubt Associates",
    image: "/faculty/basha.jpg",
    badge: "Daily Doubt Hub (9 AM - 6 PM)",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    features: [
      "8–10 Associate Subject Mentors",
      "Open Monday to Saturday Daily",
      "One-on-One Concept Resolution",
    ],
  },
  {
    title: "Dilsukhnagar Flagship Campus",
    subtitle: "Metro Pillar 1515, Hyderabad",
    mentor: "B. Sreenivasulu Reddy Sir",
    role: "Founder & Director · 27+ Yrs Exp",
    image: "/faculty/b-srinivasulu.jpg",
    badge: "Campus Directorate & English",
    tagColor: "bg-sky-500/20 text-sky-200 border-sky-400/30",
    features: [
      "100% Air-Conditioned Study Halls",
      "Full CBT Computer Test Lab",
      "18 Official Publications Wing",
    ],
  },
];

const campusAmenities = [
  { icon: Building2, label: "15,000+ Sq. Ft.", sub: "Integrated 4-Floor Campus" },
  { icon: Users2, label: "200+ Capacity", sub: "Acoustic Smart Lecture Halls" },
  { icon: GraduationCap, label: "8–10 Mentors", sub: "Daily Walk-in Doubt Desk" },
  { icon: Monitor, label: "100+ Terminals", sub: "CBT Computer Test Practice Lab" },
];

const faqs = [
  {
    q: "Which exams does Everest Coaching Point specialize in?",
    a: "We specialize predominantly in SSC CGL, SSC CHSL, SSC CPO, SSC MTS, SSC Stenographer, and SSC GD, along with state-level SI & Constable examinations.",
  },
  {
    q: "Do you offer both offline and online coaching?",
    a: "Yes! We offer regular offline classroom batches at our Dilsukhnagar, Hyderabad campus as well as live interactive online batches via the EverestImpact mobile app and web portal.",
  },
  {
    q: "Where is Everest Coaching Point located?",
    a: "Our main campus is located in Dilsukhnagar, Hyderabad, Telangana — directly accessible via the Dilsukhnagar Metro Station (Metro Pillar 1515).",
  },
  {
    q: "What is the duration of the SSC CGL / CHSL Super Long Term Batch?",
    a: "The comprehensive course spans 5–6 months with over 1200+ hours of dedicated teaching, covering basics to advanced Tier-I and Tier-II syllabus.",
  },
  {
    q: "Are study materials and books provided with the course?",
    a: "Yes, students receive 18 official Everest publications and handouts covering Mathematics, English, Reasoning, and General Studies with thousands of solved TCS PYQs.",
  },
  {
    q: "How are student doubts resolved?",
    a: "Beyond classroom interaction, we maintain a dedicated doubt desk with 8–10 associate subject mentors available daily from 9:00 AM to 6:00 PM for personalized 1-on-1 assistance.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] dark:bg-background">
      
      {/* ================= TOP TICKER ================= */}
      <div className="bg-[#102a5c] text-white py-2 px-4 text-xs font-semibold overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide py-0.5">
            <span className="rounded bg-white/20 px-2 py-0.5 font-bold uppercase tracking-wider text-[10px]">
              SUPER LONG TERM BATCH
            </span>
            <span>SSC CGL / CHSL TIER-1 2027</span>
            <span className="opacity-40">·</span>
            <span>📚 10TH BATCH | BATCH CODE: ELTO-10</span>
            <span className="opacity-40">·</span>
            <span>Admissions Open for August 2026 Batch</span>
          </div>
          <a
            href="tel:9030030185"
            className="hidden sm:inline-flex items-center gap-1.5 shrink-0 hover:underline"
          >
            <PhoneCall className="size-3" />
            <span>90300 30185 / 86</span>
          </a>
        </div>
      </div>

      {/* ================= CLEAN WHITE & LIGHT HERO STAGE ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] dark:from-slate-950 dark:via-background dark:to-slate-950 border-b border-slate-200/80 text-foreground pt-14 pb-16 md:pt-20 md:pb-24">
        
        {/* Subtle, soft ambient background glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/5 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Content (7 Cols) - Clean, Light, High Contrast */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              
              {/* Minimalist White Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-card px-4 py-1.5 text-xs font-bold text-[#102a5c] dark:text-white mb-6 w-fit shadow-xs">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>27+ Years of Academic Excellence · Hyderabad</span>
              </div>

              {/* Bold, Clean Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0f172a] dark:text-white leading-[1.12]">
                Empowering Aspirants to Lead in{" "}
                <span className="gradient-text">SSC Careers</span>
              </h1>

              {/* Concise Subtitle */}
              <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-xl">
                Everest Coaching Point is Dilsukhnagar&apos;s dedicated single-branch institute for SSC CGL, CHSL, and Central Govt exams. Combining Guinness Record Quant mastery with South India&apos;s finest English pedagogy.
              </p>

              {/* Inline Minimal Stat Counter Strip */}
              <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-10 border-y border-slate-200 dark:border-slate-800 py-5 max-w-xl">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0f172a] dark:text-white">27+ <span className="text-sm font-bold text-red-600">Yrs</span></div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Teaching Legacy</div>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0f172a] dark:text-white">2,000+ <span className="text-sm font-bold text-emerald-600">Ranks</span></div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Final Selections</div>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0f172a] dark:text-white">18 <span className="text-sm font-bold text-primary">Books</span></div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">Own Publications</div>
                </div>
              </div>

              {/* Clean Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 rounded-full btn-premium px-8 py-3.5 text-sm font-bold shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <span>Explore SSC Batches</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href="tel:9030030185"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-card hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-3.5 text-sm font-semibold text-[#102a5c] dark:text-white shadow-xs transition-all active:scale-95"
                >
                  <PhoneCall className="size-4 text-emerald-600" />
                  <span>Call: 90300 30185</span>
                </a>
              </div>

            </div>

            {/* Right Side: Clean White Minimalist Portrait Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[390px]">
                
                {/* Ambient Soft Glow Behind Card */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/10 to-red-500/10 blur-xl opacity-60 -z-10" />

                {/* Clean White Framed Glass Card */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-card p-2.5 shadow-xl shadow-slate-900/5">
                  
                  {/* Clean Portrait Image Container (Preserves natural headroom, zero cutoff) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                    <Image
                      src="/faculty/b-srinivasulu.jpg"
                      alt="B. Sreenivasulu Reddy Sir - Founder & Director"
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 390px"
                      priority
                    />

                    {/* Minimal Corner Badge */}
                    <div className="absolute top-3 right-3 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 px-3 py-1 text-[11px] font-bold text-[#102a5c] dark:text-white flex items-center gap-1.5 shadow-sm">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Founder &amp; Director</span>
                    </div>

                    {/* Gradient Fade for Bottom Typography */}
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-950/70 via-slate-950/30 to-transparent" />

                    {/* Minimalist Floating Identity Card */}
                    <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-700/80 p-4 text-[#0f172a] dark:text-white shadow-lg">
                      <h3 className="text-xl font-black tracking-tight text-[#102a5c] dark:text-white">
                        B. Sreenivasulu Reddy Sir
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5">
                        Director &amp; Senior English Faculty · 27+ Yrs Exp
                      </p>
                      <p className="mt-1.5 text-[11px] text-red-600 dark:text-red-400 italic font-semibold leading-relaxed">
                        &ldquo;Conceptual clarity over cramming formulas.&rdquo;
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ROYAL NAVY & RED RUNNING TICKER STRIP ================= */}
      <div className="bg-gradient-to-r from-[#0b1d40] via-[#102a5c] to-[#dc2626] border-t border-b border-white/20 text-white py-3.5 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] overflow-x-auto scrollbar-hide gap-6">
          <span className="shrink-0 flex items-center gap-2"><span>1200+ TEACHING HOURS</span><span className="opacity-40">•</span></span>
          <span className="shrink-0 flex items-center gap-2"><span>GUINNESS WORLD RECORD QUANT</span><span className="opacity-40">•</span></span>
          <span className="shrink-0 flex items-center gap-2"><span>18 OWN PUBLISHED BOOKS</span><span className="opacity-40">•</span></span>
          <span className="shrink-0 flex items-center gap-2"><span>DAILY FULL-LENGTH CBT MOCKS</span><span className="opacity-40">•</span></span>
          <span className="shrink-0 flex items-center gap-2"><span>1-ON-1 DEDICATED DOUBT DESK</span><span className="opacity-40">•</span></span>
          <span className="shrink-0 flex items-center gap-2"><span>DILSUKHNAGAR FLAGSHIP CAMPUS</span><span className="opacity-40">•</span></span>
          <span className="shrink-0"><span>2000+ FINAL SELECTIONS</span></span>
        </div>
      </div>

      {/* ================= IMPACT METRICS BANNER ================= */}
      <section className="relative z-10 -mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/95 dark:bg-card/95 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {impactStats.map((stat, i) => (
              <div key={stat.label} className={`text-center ${i > 0 ? "pt-4 md:pt-0" : ""}`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  {stat.label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAMPUS & CLASSROOM INFRASTRUCTURE (PROPER ALIGNMENT, NO CUTOFF) ================= */}
      <section className="border-t border-slate-200/80 bg-gradient-to-b from-[#0b172e] via-[#102a5c] to-[#071124] text-white py-16 md:py-24 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="rounded-full bg-white/10 border border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-wider text-slate-200 backdrop-blur-md">
              Preparation Ecosystem
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Dilsukhnagar Campus &amp; Smart Classrooms
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Equipped with modern acoustic lecture halls, high-tech digital studios, dedicated 1-on-1 doubt desks, and an exhaustive reading library.
            </p>
          </div>

          {/* 4 Feature Pillar Cards (Portrait Ratio aspect-[3/4] + object-top: FULL HEADS PRESERVED) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {campusPillars.map((item) => (
              <div 
                key={item.title}
                className="group relative flex flex-col rounded-3xl overflow-hidden border border-slate-700/80 bg-gradient-to-b from-slate-800/90 to-slate-900/95 shadow-2xl hover:shadow-sky-500/10 hover:border-sky-500/50 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Photo Area with portrait aspect ratio and object-top */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Soft Gradient Overlay at Bottom of Image */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>

                {/* Card Details Area */}
                <div className="p-5 flex flex-col flex-1 justify-between bg-slate-900/95">
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      {item.subtitle}
                    </div>
                    <h3 className="mt-1 text-base font-black text-white group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-amber-300 font-bold">
                      {item.mentor} <span className="text-slate-400 font-normal">· {item.role}</span>
                    </p>
                  </div>

                  {/* Feature bullets */}
                  <ul className="mt-4 space-y-1.5 pt-3 border-t border-slate-800 text-[11px] text-slate-300">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5">
                        <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Infrastructure Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80">
            {campusAmenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div 
                  key={amenity.label}
                  className="rounded-2xl border border-slate-800 bg-slate-850/60 backdrop-blur-md p-5 text-center hover:border-slate-700 transition-colors"
                >
                  <Icon className="mx-auto size-6 text-amber-400 mb-2" />
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {amenity.label}
                  </div>
                  <div className="text-xs text-slate-300 mt-1 font-medium">
                    {amenity.sub}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="border-y border-slate-200/80 bg-white dark:bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="rounded-full bg-red-50 text-red-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
              Core Purpose
            </span>
            <h2 className="mt-3 text-3xl font-black text-foreground tracking-tight sm:text-4xl">
              Our Mission &amp; Vision
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Guiding principles that drive the institute to produce thousands of toppers every year.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white dark:hover:bg-card"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE EVEREST ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="rounded-full bg-red-50 text-red-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            Key Differentiators
          </span>
          <h2 className="mt-3 text-3xl font-black text-foreground tracking-tight sm:text-4xl">
            Why Choose Everest Coaching Point?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            What makes us the undisputed first choice for SSC CGL, CHSL, CPO, and MTS aspirants in South India.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-card p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary mb-3">
                {item.stat}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LEADERSHIP TEAM ================= */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-t border-slate-200/80 dark:border-slate-800">
        <div className="text-center mb-12">
          <span className="rounded-full bg-red-50 text-red-600 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
            Our Mentors
          </span>
          <h2 className="mt-3 text-3xl font-black text-foreground tracking-tight sm:text-4xl">
            Meet the Academic Leadership
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Direct guidance from South India&apos;s most celebrated SSC educators.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.slice(0, 6).map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col items-center rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-card p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Circle Avatar with proper headroom */}
              <div className="relative size-32 rounded-full p-1 bg-gradient-to-tr from-[#102a5c] to-[#dc2626] shadow-md group-hover:scale-105 transition-all">
                <div className="relative size-full rounded-full overflow-hidden bg-slate-100 ring-2 ring-white">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
              </div>

              <span className="mt-4 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 px-3 py-0.5 text-[10px] font-extrabold uppercase">
                {member.badge}
              </span>

              <h3 className="mt-2 text-lg font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-xs font-bold text-primary">
                {member.role}
              </p>
              <p className="text-[11px] text-muted-foreground font-semibold mt-0.5">
                {member.experience}
              </p>
              <p className="mt-2.5 text-xs text-muted-foreground italic line-clamp-2">
                {member.quote}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAMPUS CONTACT & LOCATION ================= */}
      <section className="border-t border-slate-200/80 bg-white dark:bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0b1d40] via-[#102a5c] to-[#dc2626] text-white p-8 sm:p-12 shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              
              <div className="lg:col-span-8">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider">
                  Campus Visit
                </span>
                <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Visit Our Dilsukhnagar Campus in Hyderabad
                </h2>
                <p className="mt-3 text-sm text-white/80 max-w-2xl leading-relaxed">
                  Experience live classroom sessions, meet our directors B. Rajkumar Sir and B. Sreenivasulu Reddy Sir, and attend 3 Days of FREE demo classes.
                </p>
                
                <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-amber-300" />
                    <span>Dilsukhnagar, Hyderabad, Telangana (Metro Pillar 1515)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-emerald-400" />
                    <span>Mon – Sat: 7:00 AM – 8:30 PM</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href="tel:9030030185"
                  className="rounded-xl bg-white text-[#102a5c] font-black px-6 py-3.5 text-sm text-center shadow-lg hover:bg-sky-50 transition-all"
                >
                  Call 90300 30185 / 86
                </a>
                <a
                  href="https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20visit%20the%20Dilsukhnagar%20campus."
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-3.5 text-sm text-center shadow-lg transition-all"
                >
                  WhatsApp Campus Helpdesk
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQS SECTION ================= */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
        <div className="text-center mb-10">
          <HelpCircle className="mx-auto size-8 text-primary" />
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Everything you need to know about Everest Coaching Point.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-card p-5 sm:p-6 shadow-sm"
            >
              <h3 className="text-base font-bold text-foreground">
                {faq.q}
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
