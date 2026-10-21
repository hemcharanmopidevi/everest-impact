"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { brand } from "@/data/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-muted/40 py-14 dark:bg-muted/20 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="mb-1 text-sm font-semibold text-primary">About</p>
          <h3 className="mb-3 text-2xl font-bold tracking-tight md:text-3xl">About Us</h3>
          <p className="leading-relaxed text-muted-foreground">{brand.about}</p>
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold text-primary">Support</p>
          <h3 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">Get in touch with us</h3>
          <p className="mb-6 text-sm text-muted-foreground">
            We&apos;re here to help. Whether you have a question about our courses, need help
            with your account, or want to share feedback, our team is ready to assist you.
          </p>
          {sent ? (
            <div className="rounded-xl border border-primary/30 bg-primary/10 p-6 text-sm">
              Thanks! Your message has been received. We&apos;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Name</span>
                <input
                  required
                  name="name"
                  placeholder="Enter your name"
                  className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Phone number</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-11 w-full rounded-lg border border-input bg-card px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block font-medium">How can we help you?</span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-input bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </label>
              <p className="text-xs text-muted-foreground">
                By contacting us, you agree to our{" "}
                <Link href="/legal/terms" className="underline">
                  Terms of service
                </Link>{" "}
                and{" "}
                <Link href="/legal/privacy" className="underline">
                  Privacy Policy
                </Link>
              </p>
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
