"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { brand } from "@/data/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Books", href: "/books" },
  { label: "About Us", href: "/about-us" },
  { label: "Batches & Fees", href: "/#fees" },
  { label: "Faculty", href: "/#faculty" },
  { label: "Results", href: "/#results" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 dark:bg-background/90 dark:border-border/40">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Left: Everest Coaching Point Official Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          <Image
            src={brand.logo}
            alt={brand.name}
            width={260}
            height={72}
            className="h-11 sm:h-12 w-auto max-w-[200px] sm:max-w-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[0.925rem] font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-sky-500 font-bold"
                    : "text-slate-700 dark:text-slate-200 hover:text-sky-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth & Contact Pill Buttons */}
        <div className="hidden items-center gap-3.5 md:flex">
          <Link
            href="/auth/signin"
            className="rounded-full bg-slate-100/90 px-6 py-2.5 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-200 active:scale-95"
          >
            Student Login
          </Link>
          <a
            href="https://wa.me/919030030185?text=Hello%20Everest%20Coaching%20Point,%20I%20want%20to%20enquire%20about%20admissions."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full btn-premium px-6 py-2.5 text-sm font-semibold text-white shadow-md active:scale-95"
          >
            <Phone className="size-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex size-10 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
        >
          {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background dark:bg-card px-6 py-6 shadow-xl md:hidden animate-fade-in">
          <div className="mb-6 flex items-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={200}
              height={56}
              className="h-10 w-auto object-contain"
            />
          </div>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-1 flex items-center justify-between ${
                    isActive
                      ? "text-sky-500 font-bold"
                      : "text-foreground hover:text-sky-500"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3 pt-6 border-t border-border">
            <Link
              href="/auth/signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 py-3 text-center text-sm font-semibold text-foreground transition-colors"
            >
              Student Login
            </Link>
            <a
              href="https://wa.me/919030030185"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full btn-premium py-3 text-center text-sm font-semibold text-white shadow-md active:scale-95"
            >
              Get in Touch (9030030185)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
