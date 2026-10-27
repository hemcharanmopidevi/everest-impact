import { Check, Sparkles } from "lucide-react";
import { modeComparison } from "@/data/site";

export function ModesComparison() {
  const { online, offline } = modeComparison;

  return (
    <section id="modes" className="relative overflow-hidden py-12 sm:py-16 md:py-24 border-y border-border/50 bg-gradient-to-b from-card/30 via-background to-card/10">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" />
            <span>Flexible Learning</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Online & Offline — <span className="gradient-text">Your Choice</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            Choose between live streaming on the EverestImpact App or in-person classroom discipline at Dilsukhnagar, Hyderabad.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Online Live Card */}
          <div className="glass-card group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 card-hover gradient-border">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  💻
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{online.title}</h3>
                  <p className="text-xs text-muted-foreground">{online.location}</p>
                </div>
              </div>

              <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl bg-muted/40 p-4 text-xs">
                <div>
                  <p className="font-semibold text-muted-foreground">Interaction</p>
                  <p className="mt-0.5 font-bold text-foreground">{online.interaction}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Validity</p>
                  <p className="mt-0.5 font-bold text-foreground">{online.validity}</p>
                </div>
              </div>

              <p className="mb-4 text-xs font-semibold text-primary">
                Best for: <span className="text-foreground">{online.bestFor}</span>
              </p>

              <ul className="space-y-3">
                {online.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#fees"
              className="btn-premium mt-8 block w-full py-3 text-center text-xs font-bold"
            >
              Explore Online Plans
            </a>
          </div>

          {/* Offline Classroom Card */}
          <div className="glass-card group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-8 card-hover gradient-border">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  🏫
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{offline.title}</h3>
                  <p className="text-xs text-muted-foreground">{offline.location}</p>
                </div>
              </div>

              <div className="my-6 grid grid-cols-2 gap-4 rounded-2xl bg-muted/40 p-4 text-xs">
                <div>
                  <p className="font-semibold text-muted-foreground">Interaction</p>
                  <p className="mt-0.5 font-bold text-foreground">{offline.interaction}</p>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground">Validity</p>
                  <p className="mt-0.5 font-bold text-foreground">{offline.validity}</p>
                </div>
              </div>

              <p className="mb-4 text-xs font-semibold text-primary">
                Best for: <span className="text-foreground">{offline.bestFor}</span>
              </p>

              <ul className="space-y-3">
                {offline.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <Check className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:9030030185"
              className="mt-8 block w-full rounded-xl border border-border bg-card py-3 text-center text-xs font-bold text-foreground hover:bg-accent hover:border-primary/40 transition-all"
            >
              Contact Front Office for Offline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
