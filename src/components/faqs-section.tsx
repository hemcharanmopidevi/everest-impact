import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/site";

export function FaqsSection() {
  return (
    <section id="faqs" className="relative overflow-hidden py-16 md:py-24 border-t border-border/50 bg-gradient-to-b from-card/30 via-background to-card/10">
      <div className="relative mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <HelpCircle className="size-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Clear answers to common questions about admissions, validity, batches, and demo classes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={faq.q}
              className="group rounded-2xl glass-card gradient-border p-5 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground transition-colors group-open:text-primary">
                <span className="text-sm md:text-base">{faq.q}</span>
                <span className="ml-4 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary transition-transform duration-300 group-open:rotate-180">
                  ↓
                </span>
              </summary>
              <p className="mt-3 text-xs md:text-sm leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
