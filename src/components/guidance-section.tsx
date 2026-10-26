import { Compass, Lightbulb } from "lucide-react";
import { guidanceMantras } from "@/data/site";

export function GuidanceSection() {
  return (
    <section id="guidance" className="relative overflow-hidden py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Compass className="size-3.5" />
            <span>Preparation Philosophy</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Before You Begin Your <span className="gradient-text">SSC Journey</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
            Points to note before taking admission — from the institute&apos;s own guidance and philosophy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guidanceMantras.map((mantra) => (
            <div
              key={mantra.id}
              className="glass-card group relative flex flex-col justify-between rounded-3xl p-6 card-hover gradient-border"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-xs font-black text-primary ring-1 ring-primary/20">
                    {String(mantra.id).padStart(2, "0")}
                  </span>
                  <Lightbulb className="size-4 text-primary/60 group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {mantra.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {mantra.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
