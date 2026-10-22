import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="px-4 py-12 md:py-16">
      <div className="reveal relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-primary px-6 py-14 text-center text-primary-foreground shadow-[0_18px_0_#0f3fa8] md:px-16 md:py-16">
        <div className="orb left-[-80px] top-[-80px] size-[260px] bg-white/20" />
        <div
          className="orb bottom-[-90px] right-[-40px] size-[240px] bg-[#ff8a1f]/50"
          style={{ animationDelay: "-6s" }}
        />
        <div className="relative">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl">
            Your government job journey starts here
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[#dbe7ff] md:text-lg">
            Join live batches, recorded courses and test series built for SSC aspirants.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
