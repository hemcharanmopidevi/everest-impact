import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { AppDownloadBar } from "@/components/app-download-bar";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
import { brand } from "@/data/site";

const footerLinks = {
  product: [
    { label: "Batch Fees & Plans", href: "/#fees" },
    { label: "18 Own Books", href: "/#books" },
    { label: "Batch Schedule", href: "/#schedule" },
    { label: "Online vs Offline", href: "/#modes" },
    { label: "All Online Batches", href: "/courses" },
  ],
  company: [
    { label: "Why Everest (12 Reasons)", href: "/#why" },
    { label: "Faculty Team", href: "/#faculty" },
    { label: "Results & Selections", href: "/#results" },
    { label: "SSC Guidance Mantras", href: "/#guidance" },
    { label: "Frequently Asked Questions", href: "/#faqs" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Refunds & Cancellation", href: "/legal/refunds" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border/50 bg-gradient-to-b from-slate-950 to-black text-slate-300">
      {/* Decorative gradient at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 via-red-500/30 to-transparent" />

      {/* Floating orb */}
      <div className="absolute right-[-10%] top-[10%] h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-4 inline-block rounded-xl bg-white px-3.5 py-2 shadow-md">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">
              {brand.about}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: YoutubeIcon, label: "YouTube" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: TwitterIcon, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-xl bg-white/5 text-slate-400 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:text-white hover:ring-white/20 hover:scale-110"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product links */}
          <div>
            <h6 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Product
            </h6>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-1 text-sm text-slate-400 transition-all hover:text-white">
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h6 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Company
            </h6>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="group flex items-center gap-1 text-sm text-slate-400 transition-all hover:text-white">
                    {link.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download & Legal */}
          <div>
            <h6 className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Download App
            </h6>
            <p className="mb-3 text-xs text-slate-400">
              Live classes, daily mock tests & recorded lectures on EverestImpact App.
            </p>
            <AppDownloadBar />

            <h6 className="mb-3 mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Legal
            </h6>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/5 pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Built with <Heart className="size-3 fill-red-500 text-red-500" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
