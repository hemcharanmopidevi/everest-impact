"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Globe, MapPin, MessageSquare, Phone, Send, Sparkles } from "lucide-react";
import { brand } from "@/data/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden border-t border-border/50 bg-gradient-to-b from-transparent via-primary/[0.02] to-primary/[0.05]">
      {/* Background orb */}
      <div className="absolute left-1/4 bottom-10 h-72 w-72 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2">
        {/* Left: About & Contact Information */}
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <Sparkles className="size-3.5" />
            <span>Admissions & Counseling</span>
          </div>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Your SSC 2027 Preparation <span className="gradient-text">Starts Here</span>
          </h2>
          <p className="text-base font-semibold text-primary">
            Build Strong Concepts · Practise Consistently · Learn from Experienced Faculty
          </p>
          <p className="mt-3 leading-relaxed text-sm text-muted-foreground">{brand.about}</p>

          {/* Contact info cards */}
          <div className="mt-8 space-y-3">
            <a
              href="tel:9030030185"
              className="flex items-center gap-4 rounded-2xl glass-card p-4 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone / WhatsApp / Telegram</p>
                <p className="text-sm font-bold text-foreground">9030030185 / 9030030186</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl glass-card p-4">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Campus Location</p>
                <p className="text-sm font-bold text-foreground">Dilsukhnagar, Hyderabad, Telangana</p>
              </div>
            </div>

            <a
              href="https://everestimpact.live"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass-card p-4 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Globe className="size-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Official Portal</p>
                <p className="text-sm font-bold text-foreground">everestimpact.live</p>
              </div>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:9030030185"
              className="btn-premium px-5 py-2.5 text-xs font-bold"
            >
              📞 Call Front Office
            </a>
            <a
              href="https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20enquire%20about%20SSC%202027%20batch%20admissions."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
            >
              <MessageSquare className="size-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right: Quick Inquiry Form */}
        <div className="relative">
          <div className="rounded-3xl glass-card p-8 shadow-xl gradient-border">
            <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground">
              Request a Call Back
            </h3>
            <p className="mb-6 text-xs text-muted-foreground">
              Leave your details and our senior SSC counsellor will contact you within 2 business hours.
            </p>

            {sent ? (
              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-8 text-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="mx-auto mb-3 size-12" />
                <p className="text-lg font-bold text-foreground">Inquiry Received!</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Our academic advisor will call you shortly on your provided number.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-bold text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="Enter your name"
                    className="h-11 w-full rounded-xl border border-border bg-muted/40 px-3.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-bold text-foreground">
                    Mobile Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    className="h-11 w-full rounded-xl border border-border bg-muted/40 px-3.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="mb-1.5 block text-xs font-bold text-foreground">
                    Target Course & Mode
                  </label>
                  <select
                    id="course"
                    className="h-11 w-full rounded-xl border border-border bg-card px-3.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <option>SSC CGL/CHSL 2027 Full Course (Online Live)</option>
                    <option>SSC CGL/CHSL 2027 Full Course (Offline Classroom - Dilsukhnagar)</option>
                    <option>Mathematics Only by B. Rajkumar Sir</option>
                    <option>English Only by B. Sreenivasulu Reddy Sir</option>
                    <option>Reasoning Only by Kalyan Sir</option>
                    <option>Free Demo Classes Registration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="msg" className="mb-1.5 block text-xs font-bold text-foreground">
                    Message / Question (Optional)
                  </label>
                  <textarea
                    id="msg"
                    rows={3}
                    placeholder="Ask about fees, hostel reading room, or batch timings..."
                    className="w-full rounded-xl border border-border bg-muted/40 p-3.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-premium flex w-full items-center justify-center gap-2 py-3.5 text-xs font-bold"
                >
                  <Send className="size-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
