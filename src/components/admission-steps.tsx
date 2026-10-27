import { CheckCircle2, PhoneCall, Sparkles } from "lucide-react";
import { admissionSteps, brand } from "@/data/site";

export function AdmissionSteps() {
  return (
    <section id="admission" className="relative overflow-hidden py-12 sm:py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" />
            <span>Smooth Process</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Admission in <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Get started with your SSC CGL/CHSL 2027 preparation quickly and seamlessly.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {admissionSteps.map((step) => (
            <div
              key={step.step}
              className="glass-card group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 card-hover gradient-border"
            >
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </span>

                <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-border/50 pt-3 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-500">
                <CheckCircle2 className="size-3.5" />
                <span>Hassle-Free</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-8 sm:mt-12 text-center">
          <a
            href={`tel:${brand.phones[0]}`}
            className="btn-premium inline-flex items-center justify-center text-center gap-2 px-5 sm:px-6 py-3 text-xs sm:text-sm font-bold max-w-full"
          >
            <PhoneCall className="size-4 shrink-0" />
            <span className="truncate">Speak to a Counsellor Now ({brand.phones[0]})</span>
          </a>
        </div>
      </div>
    </section>
  );
}
