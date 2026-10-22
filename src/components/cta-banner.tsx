import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-5 py-10 text-center text-primary-foreground shadow-[0_12px_0_#0f3fa8] sm:rounded-[32px] sm:px-8 sm:py-14 sm:shadow-[0_18px_0_#0f3fa8] md:px-16 md:py-16">
        <div className="orb left-[-80px] top-[-80px] size-[260px] bg-white/20" />
        <div
          className="orb bottom-[-90px] right-[-40px] size-[240px] bg-[#ff8a1f]/50"
          style={{ animationDelay: "-6s" }}
        />
        <div className="relative">
          <h2 className="section-title">Your government job journey starts here</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] text-[#dbe7ff] sm:mt-4 sm:text-base md:text-lg">
            Join live batches, recorded courses and test series built for SSC aspirants.
          </p>
          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
            <Link href="/courses" className="btn-3d-gold">
              Explore Courses
              <ArrowRight className="size-4" />
            </Link>
            <Link href="/test-series" className="btn-3d-ghost">
              Try a Free Mock Test
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
