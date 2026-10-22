import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand, courses, expertTeam, recordResults } from "@/data/site";
import { discountPercent } from "@/lib/utils";

const chips = ["Live batches", "Recorded courses", "Mock tests", "Mentorship"];

const maxDiscount = Math.max(...courses.map((c) => discountPercent(c.price, c.mrp)));
const air1Count = recordResults.filter((r) => r.rank === 1).length;

const stats = [
  { value: `${air1Count}× AIR 1`, label: "Toppers from our batches" },
  { value: `Up to ${maxDiscount}%`, label: "Off on courses" },
  { value: `${expertTeam.length}+`, label: "Expert faculty" },
];

const floatingCards = [
  { title: "Live Courses", note: "Learn with top faculty", className: "left-0 top-6", delay: "0s" },
  { title: "Test Series", note: "Mocks that match the exam", className: "right-0 top-28", delay: "-2s" },
  { title: "Mentorship", note: "Clarity and guidance", className: "bottom-4 left-6", delay: "-4s" },
];

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden bg-[#0b1530] py-16 text-white md:py-24">
      <div className="orb left-[-120px] top-[-80px] size-[420px] bg-[#1a5fe0]" />
      <div
        className="orb bottom-[-100px] right-[-60px] size-[340px] bg-[#ff8a1f]/40"
        style={{ animationDelay: "-5s" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-[#ffd27a] ring-1 ring-white/20">
            <span className="size-2 animate-pulse rounded-full bg-[#ff8a1f]" />
            October 2026 live batches now open
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Hyderabad&apos;s{" "}
            <span className="text-[#ffb347]">Trusted &amp; Affordable</span> SSC
            Coaching Platform.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#c5d1f0] md:text-lg">
            {brand.name} helps aspirants crack SSC CGL, CHSL, GD and more with live
            batches, recorded courses, mocks, and mentorship — so every student can
            learn with confidence and grow with guidance.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/auth/signup" className="btn-3d-primary">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/courses" className="btn-3d-ghost">
              Browse Courses
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-[#dbe5ff]"
              >
                {chip}
              </span>
            ))}
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-white md:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs text-[#a9b6d9]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="cube-stage relative mx-auto hidden h-[440px] w-full max-w-md sm:block">
          <div className="cube" aria-hidden>
            <b>CGL</b>
            <b>CHSL</b>
            <b>GD</b>
            <b>SSC</b>
            <b>RRB</b>
            <b>SI</b>
          </div>
          {floatingCards.map((card) => (
            <div
              key={card.title}
              className={`float-card absolute rounded-2xl bg-white px-5 py-4 text-[15px] font-bold text-[#0b1530] shadow-[0_30px_50px_rgba(0,0,0,0.5)] ${card.className}`}
              style={{ animationDelay: card.delay }}
            >
              {card.title}
              <small className="mt-0.5 block text-xs font-medium text-[#51608a]">
                {card.note}
              </small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
