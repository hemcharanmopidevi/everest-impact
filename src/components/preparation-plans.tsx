import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { preparationPlans } from "@/data/site";
import { cn } from "@/lib/utils";

export function PreparationPlans() {
  return (
    <section id="fees" className="relative overflow-hidden py-12 sm:py-16 md:py-24 border-t border-border/50 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" />
            <span>Official Fee Structure</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Choose Your <span className="gradient-text">Preparation Plan</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
            Prices are from the institute&apos;s most recent published price list for the <span className="font-bold text-foreground">August-2026 Batch</span>. Please confirm current batch fees at the front office before admission.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preparationPlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 card-hover",
                plan.isPopular
                  ? "glass-card ring-2 ring-primary shadow-xl shadow-primary/10"
                  : "glass-card gradient-border"
              )}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-3.5 py-1 text-[11px] font-extrabold tracking-wider text-white shadow-md shadow-red-600/20">
                  {plan.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-lg bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    {plan.mode}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {plan.validity}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {plan.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-muted-foreground">
                  {plan.subjects}
                </p>

                {/* Price Display */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-3xl font-black tracking-tight text-foreground">
                    {plan.offerPrice}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-sm font-semibold text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>

                {/* Feature Checklist */}
                <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-4 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <a
                  href={`https://wa.me/919030030185?text=${encodeURIComponent(plan.enquiryText)}`}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-xs font-bold transition-all duration-300",
                    plan.isPopular
                      ? "btn-premium shadow-lg shadow-primary/20"
                      : "border border-border bg-card text-foreground hover:bg-accent hover:border-primary/40"
                  )}
                >
                  <MessageCircle className="size-4 text-emerald-400" />
                  <span>Enquire via WhatsApp</span>
                </a>
                <p className="mt-2 text-center text-[10px] text-muted-foreground">
                  Confirm current August-2026 fee at the front office.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-border/80 bg-card/40 p-4 text-center text-xs text-muted-foreground">
          ⚠️ <span className="font-semibold text-foreground">Limited Batch Admissions:</span> Offline course fee is finalised at the Dilsukhnagar front office. Contact 9030030185 / 9030030186 for details.
        </div>
      </div>
    </section>
  );
}
