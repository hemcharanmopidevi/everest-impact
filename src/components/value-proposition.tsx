import { CheckCircle2, Sparkles } from "lucide-react";
import { coreSubjects } from "@/data/site";

export function ValueProposition() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 border-t border-border/50 bg-gradient-to-b from-card/30 via-background to-card/20">
      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" />
            <span>Syllabus Architecture</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            One Course · <span className="gradient-text">Four Core Subjects</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
            SSC CGL / CHSL / MTS · Tier-I 2027 · Comprehensive coverage in 5–6 months · 1200+ hours of dedicated teaching from absolute zero to advanced.
          </p>
        </div>

        {/* 4 Core Subjects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreSubjects.map((sub) => (
            <div
              key={sub.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-card p-6 card-hover gradient-border"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {sub.icon}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                    {sub.hours}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {sub.name}
                </h3>
                <p className="mt-1 text-xs font-bold text-primary">
                  {sub.faculty}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {sub.desc}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-border/60 pt-3 text-[11px] font-bold text-foreground/80">
                <CheckCircle2 className="size-3.5 text-emerald-500" />
                <span>Basics to Advanced Mastery</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
