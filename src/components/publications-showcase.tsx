"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, ChevronLeft, ChevronRight, LayoutGrid, Layers, Pause, Play, Sparkles } from "lucide-react";
import { publications } from "@/data/site";
import { useState, useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

const filterCategories = ["All", "English", "Mathematics", "General Studies", "Reasoning", "Science"];

export function PublicationsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"coverflow" | "grid">("coverflow");
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Drag / Swipe handling
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const filteredBooks =
    activeCategory === "All"
      ? publications
      : publications.filter((p) => p.subject === activeCategory);

  const total = filteredBooks.length;

  // Reset active index when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setActiveIndex(0);
  };

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying || viewMode !== "coverflow" || total <= 1) return;
    const timer = setInterval(() => {
      handleNext();
    }, 3800);
    return () => clearInterval(timer);
  }, [isPlaying, viewMode, total, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "coverflow") return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, viewMode]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchStartX.current = clientX;
    touchEndX.current = clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging.current) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    touchEndX.current = clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) {
        handleNext();
      } else if (diff < -50) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentBook = filteredBooks[activeIndex] || filteredBooks[0];

  return (
    <section id="books" className="relative overflow-hidden py-16 md:py-24">
      {/* Background ambient lighting */}
      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-10 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-bold text-sky-400 shadow-sm">
            <BookOpen className="size-3.5" />
            <span>Own Publications & Handouts</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            📚 18 Books — <span className="gradient-text">Our Own Publications</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
            Every subject covered by the institute&apos;s own published books and comprehensive handouts — magical shortcuts and thousands of TCS Previous Year Questions included.
          </p>
        </div>

        {/* Categories & View Mode Toggle */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 mx-auto sm:mx-0">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                  activeCategory === cat
                    ? "btn-premium shadow-md"
                    : "border border-border/80 bg-card/60 text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Switcher & Autoplay */}
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            {viewMode === "coverflow" && (
              <button
                type="button"
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                onClick={() => setIsPlaying((p) => !p)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground"
              >
                {isPlaying ? <Pause className="size-3.5 text-sky-400" /> : <Play className="size-3.5" />}
                <span className="hidden sm:inline">{isPlaying ? "Pause" : "Auto-swap"}</span>
              </button>
            )}

            <div className="flex items-center rounded-xl border border-border/80 bg-card/60 p-1">
              <button
                type="button"
                onClick={() => setViewMode("coverflow")}
                aria-label="3D Deck Swap View"
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors",
                  viewMode === "coverflow"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Layers className="size-3.5" />
                <span className="hidden md:inline">3D Swap</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors",
                  viewMode === "grid"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <LayoutGrid className="size-3.5" />
                <span className="hidden md:inline">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D Coverflow Swap Mode */}
        {viewMode === "coverflow" ? (
          <div className="relative">
            {/* The 3D Stage - Clean transparent stage */}
            <div
              className="relative mx-auto flex h-[340px] sm:h-[420px] md:h-[520px] w-full max-w-6xl items-center justify-center overflow-hidden py-4"
              style={{ perspective: windowWidth < 640 ? "800px" : "1200px" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleTouchStart}
              onMouseMove={handleTouchMove}
              onMouseUp={handleTouchEnd}
            >

              {filteredBooks.map((book, idx) => {
                // Calculate circular offset relative to activeIndex
                let offset = idx - activeIndex;
                if (offset > total / 2) offset -= total;
                if (offset < -total / 2) offset += total;

                const isCenter = offset === 0;
                const isMobile = windowWidth < 640;
                const isTablet = windowWidth >= 640 && windowWidth < 1024;
                const maxVisibleOffset = isMobile ? 1 : isTablet ? 2 : 3;
                const isVisible = Math.abs(offset) <= maxVisibleOffset;

                if (!isVisible) return null;

                // Responsive positioning calculations
                const step = isMobile ? 90 : isTablet ? 135 : 180;
                const xOffset = offset * step;
                const scale = isCenter ? 1 : Math.max(0.6, 1 - Math.abs(offset) * (isMobile ? 0.2 : 0.16));
                const rotateY = offset * (isMobile ? -9 : -14);
                const zIndex = 40 - Math.abs(offset) * 10;
                const opacity = isCenter ? 1 : Math.max(0.25, 0.9 - Math.abs(offset) * 0.22);
                const brightness = isCenter ? 1 : Math.max(0.5, 0.9 - Math.abs(offset) * 0.15);

                return (
                  <div
                    key={book.title}
                    onClick={() => setActiveIndex(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View ${book.title}`}
                    className={cn(
                      "absolute top-1/2 left-1/2 cursor-pointer select-none overflow-hidden rounded-[20px] sm:rounded-[26px] md:rounded-[32px] transition-all duration-500 ease-out will-change-transform",
                      isCenter
                        ? "ring-[3px] ring-sky-400 shadow-[0_20px_50px_rgba(14,165,233,0.35)]"
                        : "ring-2 ring-sky-500/40 hover:ring-sky-400"
                    )}
                    style={{
                      width: isMobile ? "clamp(180px, 56vw, 240px)" : "clamp(210px, 32vw, 300px)",
                      aspectRatio: "3 / 4.3",
                      transform: `translate(-50%, -50%) translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex,
                      opacity,
                      filter: `brightness(${brightness})`,
                      transition: "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, filter 500ms ease, ring-color 400ms ease",
                    }}
                  >
                    <div className="relative h-full w-full bg-zinc-900">
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover pointer-events-none"
                        sizes="(max-width: 768px) 240px, 320px"
                        priority={isCenter}
                      />

                      {/* Top badge */}
                      <div className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-[11px] font-bold text-sky-300 backdrop-blur-md border border-sky-400/30">
                        {book.subject}
                      </div>

                      {/* Gradient overlay for text clarity */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                      {/* Bottom title preview */}
                      <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                        <p className="line-clamp-2 text-xs font-bold text-white drop-shadow-md">
                          {book.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Navigation arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Book"
                className="absolute left-1 sm:left-2 md:left-4 top-1/2 z-50 flex size-9 sm:size-11 -translate-y-1/2 items-center justify-center rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/90 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200 dark:border-sky-500/30 transition-all hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronLeft className="size-5 sm:size-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Book"
                className="absolute right-1 sm:right-2 md:right-4 top-1/2 z-50 flex size-9 sm:size-11 -translate-y-1/2 items-center justify-center rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/90 text-slate-900 dark:text-white backdrop-blur-md border border-slate-200 dark:border-sky-500/30 transition-all hover:bg-sky-500 hover:text-white hover:border-sky-400 hover:scale-110 active:scale-95 shadow-xl"
              >
                <ChevronRight className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Active Book Detail Card & Progress */}
            {currentBook && (
              <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-sky-500/20 bg-card/80 p-5 shadow-lg backdrop-blur-md text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="rounded-full bg-sky-500/10 px-3 py-0.5 text-xs font-bold text-sky-400 border border-sky-500/30">
                    {currentBook.subject}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    Book {activeIndex + 1} of {total}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground md:text-xl">
                  {currentBook.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {currentBook.desc}
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/books"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-sky-500/25 hover:from-sky-600 hover:to-sky-700 transition-all duration-200"
                  >
                    <Sparkles className="size-3.5" />
                    <span>View All Details & Table of Contents</span>
                  </Link>

                  <a
                    href="https://wa.me/919030030185?text=Hello%20Everest%20Impact,%20I%20am%20interested%20in%20the%2018-Book%20Kit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-card px-4 py-2.5 text-xs font-semibold hover:bg-accent transition-colors"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>

                {/* Progress Indicators */}
                <div className="mt-5 flex items-center justify-center gap-1.5">
                  {filteredBooks.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to book ${i + 1}`}
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        activeIndex === i
                          ? "w-7 bg-sky-400"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Grid View of Books */
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {filteredBooks.map((book) => (
              <div
                key={book.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl glass-card card-hover gradient-border p-3 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted shadow-inner">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute left-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
                    {book.subject}
                  </div>
                </div>

                <div className="mt-3 flex flex-1 flex-col justify-between">
                  <h3 className="line-clamp-2 text-xs font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">
                    {book.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Complete set of 18 books is provided as per the course plan. Inspect physical copies at the Dilsukhnagar front office.
        </p>
      </div>
    </section>
  );
}

