"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { brand } from "@/data/site";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const primaryNav = [
  { label: "Home Page", href: "/" },
  { label: "Live Courses", href: "/courses?category=Live%20Courses" },
  { label: "Recorded Courses", href: "/courses?category=Recorded%20Courses" },
  { label: "Test Series", href: "/courses?category=Test%20Series" },
];

const moreLinks = [
  { label: "RRB & SI PC", href: "/courses?category=RRB" },
  { label: "Free Test Series", href: "/test-series" },
  { label: "Free Course", href: "/courses?free=1" },
  { label: "LINKS", href: "/links" },
  { label: "Result Dashboard", href: "/dashboard" },
  { label: "YouTube Playlist", href: "/videos" },
];

const extraLinks = [
  { label: "AI Doubt", href: "/ai-doubt" },
  { label: "Results", href: "/#record-results" },
  { label: "Success Stories", href: "/#success-stories" },
  { label: "Expert Team", href: "/#expert-team" },
  { label: "Study Planner", href: "/planner" },
  { label: "Wishlist", href: "/wishlist" },
];

export function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [query, setQuery] = useState("");

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-white/95 shadow-sm backdrop-blur dark:bg-background/95">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 lg:h-[72px] lg:gap-6">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-muted lg:hidden"
          >
            <Menu className="size-5" />
          </button>

          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={200}
              height={56}
              className="h-11 w-auto max-w-[160px] object-contain sm:max-w-[200px] md:h-12"
              priority
            />
          </Link>

          <nav className="hidden flex-1 items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className={cn(
                  "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-muted hover:text-primary",
                  moreOpen ? "bg-muted text-primary" : "text-foreground"
                )}
              >
                More
                <ChevronDown className={cn("size-4 transition", moreOpen && "rotate-180")} />
              </button>
              {moreOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setMoreOpen(false)}
                  />
                  <div className="absolute left-0 top-full z-50 mt-2 min-w-[220px] overflow-hidden rounded-xl border border-border bg-card py-2 shadow-lg">
                    {moreLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMoreOpen(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-foreground transition hover:bg-primary/5 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <form onSubmit={onSearch} className="relative hidden md:block">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
                aria-label="search"
                className="h-10 w-40 rounded-full border-0 bg-muted px-3 pl-10 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:w-52"
              />
            </form>
            <ThemeToggle />
            <Link
              href="/auth/signin"
              className="inline-flex items-center rounded-lg bg-foreground px-3 py-2.5 text-sm font-semibold text-background transition hover:opacity-90 sm:px-4"
            >
              Login/Register
            </Link>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/40 transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={cn(
          "fixed left-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-card shadow-xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <p className="text-lg font-bold tracking-tight">{brand.name}</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex size-10 items-center justify-center rounded-lg hover:bg-accent"
          >
            <X className="size-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-4">
          <form onSubmit={onSearch} className="relative mb-5">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search"
              className="h-11 w-full rounded-full bg-muted px-3 pl-10 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </form>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Menu
          </p>
          <nav className="mb-5 flex flex-col gap-1">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            More
          </p>
          <nav className="mb-5 flex flex-col gap-1">
            {moreLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            New features
          </p>
          <nav className="flex flex-col gap-1">
            {extraLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/auth/signin"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-lg bg-foreground py-3 text-center text-sm font-semibold text-background"
          >
            Login/Register
          </Link>
        </div>
      </aside>
    </>
  );
}
