import { Calendar, Clock } from "lucide-react";
import { batchSchedule } from "@/data/site";
import { cn } from "@/lib/utils";

export function BatchSchedule() {
  return (
    <section id="schedule" className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Calendar className="size-3.5" />
            <span>Admissions Calendar</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Important <span className="gradient-text">Batch Dates</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Schedule Last Updated: {batchSchedule.lastUpdated} · Limited Batch Admissions
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {batchSchedule.items.map((item) => (
            <div
              key={item.title}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 card-hover",
                item.highlight
                  ? "glass-card ring-1 ring-primary/40 bg-primary/[0.03]"
                  : "glass-card gradient-border"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                    {item.title}
                  </span>
                  <Clock className="size-4 text-muted-foreground" />
                </div>

                <p className="text-xl font-black text-foreground">
                  {item.date}
                </p>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {item.time}
                </p>
              </div>

              <p className="mt-4 border-t border-border/50 pt-3 text-xs text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Free Demo Callout */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card to-primary/5 p-5 sm:p-6 md:p-8 text-center shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            Want to experience our teaching first?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Attend our 3 Days of FREE Demo Classes after the Sunday orientation seminar before finalizing your admission.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/919030030185?text=I%20want%20to%20register%20for%20the%20FREE%20Demo%20classes."
              target="_blank"
              rel="noreferrer"
              className="btn-premium px-6 py-2.5 text-xs font-bold"
            >
              Register for Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
