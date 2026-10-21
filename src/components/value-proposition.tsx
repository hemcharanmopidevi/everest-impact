import Link from "next/link";
import { brand } from "@/data/site";

export function ValueProposition() {
  return (
    <section className="bg-gradient-to-b from-primary/[0.06] to-white py-14 dark:from-primary/10 dark:to-background md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Hyderabad&apos;s{" "}
            <span className="text-primary">Trusted & Affordable</span> SSC
            Coaching Platform.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {brand.name} helps aspirants crack SSC CGL, CHSL, GD and more with live
            batches, recorded courses, mocks, and mentorship — so every student can
            learn with confidence and grow with guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/auth/signup"
              className="inline-flex rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition hover:opacity-90"
            >
              Get Started
            </Link>
            <Link
              href="/courses"
              className="inline-flex rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted dark:bg-card"
            >
              Browse Courses
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-6">
          <div className="absolute left-4 top-8 size-40 rounded-full border-2 border-dashed border-sky-300/80 sm:size-48" />
          <div className="absolute bottom-4 right-6 size-36 rounded-full border-2 border-dashed border-amber-300/80 sm:size-44" />

          <div className="relative z-10 mr-[-1.5rem] flex size-36 items-center justify-center rounded-full bg-gradient-to-br from-sky-200 to-primary/40 text-3xl font-bold text-slate-800 shadow-lg ring-4 ring-white sm:size-44 dark:ring-card">
            BS
          </div>
          <div className="relative z-20 mt-16 flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-200 text-2xl font-bold text-amber-900 shadow-lg ring-4 ring-white sm:size-40 dark:ring-card">
            EI
          </div>

          <div className="absolute -top-1 right-0 z-30 max-w-[180px] rounded-2xl rounded-br-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 shadow-sm dark:bg-muted dark:text-foreground sm:right-4 sm:max-w-[200px] sm:text-sm">
            Sir, What is Everest Impact?
          </div>
          <div className="absolute bottom-2 left-0 z-30 max-w-[220px] rounded-2xl rounded-bl-md bg-primary px-3 py-2.5 text-xs font-medium text-primary-foreground shadow-md sm:left-2 sm:max-w-[240px] sm:text-sm">
            Where SSC aspirants learn with clarity and grow with mentorship.
          </div>
        </div>
      </div>
    </section>
  );
}
