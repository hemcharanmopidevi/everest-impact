"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BookOpen,
  Eye,
  Search,
  X,
} from "lucide-react";
import { sscBooksList, type SSCBook } from "@/data/site";

const categories = [
  "All",
  "Mathematics",
  "English",
  "Reasoning",
  "General Studies",
  "Handouts",
];

export default function BooksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  // Active image map: { [bookId: string]: string (image URL) }
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({});
  // Active toggle button map: { [bookId: string]: string (toggle label) }
  const [activeToggleMap, setActiveToggleMap] = useState<Record<string, string>>({});
  // Zoom modal image URL
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  // Filter books
  const filteredBooks = sscBooksList.filter((book) => {
    const matchesCategory =
      selectedCategory === "All" || book.category === selectedCategory;
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.highlights.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCurrentImage = (book: SSCBook) => {
    return activeImageMap[book.id] || book.coverImage;
  };

  const getActiveToggle = (book: SSCBook) => {
    return activeToggleMap[book.id] || "Cover";
  };

  const handleSelectImage = (bookId: string, imageSrc: string, label: string) => {
    setActiveImageMap((prev) => ({ ...prev, [bookId]: imageSrc }));
    setActiveToggleMap((prev) => ({ ...prev, [bookId]: label }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      {/* ================= PAGE HEADER (Minimalist Antigravity Style) ================= */}
      <section className="pt-12 pb-8 sm:pt-16 md:pt-24 md:pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Publications
            </h1>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Official authored textbooks, TCS PYQ compilations, and strategic formula handouts written by Guinness World Record faculty and 27+ years veteran directors.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CATEGORY TABS & SEARCH (Exact Antigravity Blog Header) ================= */}
      <section className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-28 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 py-3">
            
            {/* Category Navigation Tabs */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar pt-1 pb-1">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-sm sm:text-base font-medium transition-colors pb-2.5 border-b-2 whitespace-nowrap ${
                      isSelected
                        ? "border-sky-500 text-foreground font-semibold"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right Tools: Search Bar & Book Counter */}
            <div className="flex items-center gap-3 shrink-0 pb-1 md:pb-0 w-full md:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border/80 bg-slate-50 dark:bg-zinc-900/80 py-1.5 pl-9 pr-4 text-xs font-medium text-foreground outline-none transition focus:border-sky-500 focus:bg-background"
                />
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-muted-foreground shrink-0">
                <BookOpen className="size-3.5 text-sky-500" />
                <span>{filteredBooks.length} Books</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BOOKS 2-COLUMN GRID (Exact Antigravity Blog Layout) ================= */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {filteredBooks.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="mx-auto size-12 text-muted-foreground/40" />
            <h3 className="mt-4 text-xl font-bold text-foreground">No publications found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Try selecting another category or searching different keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 rounded-full border border-border bg-card px-6 py-2 text-xs font-bold text-foreground hover:bg-accent transition-colors shadow-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {filteredBooks.map((book) => {
              const currentImg = getCurrentImage(book);
              const activeToggle = getActiveToggle(book);

              return (
                <article
                  key={book.id}
                  className="group flex flex-col-reverse sm:flex-row items-start justify-between gap-6 pb-8 border-b border-border/30 last:border-b-0"
                >
                  {/* Left Content Column */}
                  <div className="flex-1 flex flex-col justify-between min-h-[190px]">
                    <div>
                      {/* Publication Title */}
                      <h2
                        onClick={() => setModalImage({ src: currentImg, title: `${book.title} (${activeToggle})` })}
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground hover:text-sky-500 transition-colors leading-snug cursor-pointer"
                      >
                        {book.title}
                      </h2>

                      {/* Author & Meta Line */}
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground font-medium">
                        <span>{book.author}</span>
                        <span>·</span>
                        <span className="font-semibold text-foreground">{book.price}</span>
                        {book.originalPrice && (
                          <span className="line-through text-muted-foreground/70">{book.originalPrice}</span>
                        )}
                        <span className="rounded-full bg-slate-100 dark:bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          {book.category}
                        </span>
                      </div>

                      {/* Brief Highlights */}
                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {book.highlights}
                      </p>
                    </div>

                    {/* Bottom Actions: Read Sample & Image Toggles */}
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {/* Read Blog / Read Sample Pill Button matching Antigravity */}
                      <button
                        type="button"
                        onClick={() => setModalImage({ src: currentImg, title: `${book.title} (${activeToggle})` })}
                        className="rounded-full border border-slate-200 dark:border-zinc-700 bg-slate-50/90 dark:bg-zinc-900/90 px-5 py-2 text-xs sm:text-sm font-semibold text-foreground hover:bg-slate-100 dark:hover:bg-zinc-800 hover:border-slate-300 dark:hover:border-zinc-600 transition-all shadow-xs"
                      >
                        Read sample
                      </button>

                      <a
                        href={book.buyLink || "tel:9030030185"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-sky-500/30 bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 px-4 py-2 text-xs font-semibold hover:bg-sky-100 dark:hover:bg-sky-900/50 transition-colors"
                      >
                        Buy Now
                      </a>

                      {/* Cover & Index Preview Switchers */}
                      {book.indices && book.indices.length > 0 && (
                        <div className="flex items-center gap-1 text-[11px]">
                          <button
                            type="button"
                            onClick={() => handleSelectImage(book.id, book.coverImage, "Cover")}
                            className={`rounded-md px-2 py-0.5 font-bold transition-colors ${
                              activeToggle === "Cover"
                                ? "bg-foreground text-background"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            Cover
                          </button>

                          {book.indices.map((idxItem) => {
                            const isIdxActive = activeToggle === idxItem.label;
                            return (
                              <button
                                key={idxItem.label}
                                type="button"
                                onClick={() => handleSelectImage(book.id, idxItem.image, idxItem.label)}
                                className={`rounded-md px-2 py-0.5 font-bold transition-colors ${
                                  isIdxActive
                                    ? "bg-foreground text-background"
                                    : "text-muted-foreground hover:text-foreground"
                                }`}
                              >
                                {idxItem.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Image Column: Square Rounded-3xl Card matching Antigravity */}
                  <div
                    onClick={() => setModalImage({ src: currentImg, title: `${book.title} (${activeToggle})` })}
                    className="relative w-full sm:w-[170px] md:w-[190px] h-[190px] sm:h-[170px] md:h-[190px] shrink-0 rounded-3xl overflow-hidden bg-slate-900 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-lg cursor-pointer group/img"
                  >
                    <Image
                      src={currentImg}
                      alt={book.title}
                      fill
                      className="object-contain p-2.5 transition-transform duration-500 group-hover/img:scale-105"
                      sizes="190px"
                    />

                    {/* Subtle hover eye indicator */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover/img:opacity-100 flex items-center justify-center">
                      <div className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md flex items-center gap-1.5">
                        <Eye className="size-3.5" />
                        <span>Preview</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </main>

      {/* ================= HIGH-RESOLUTION ZOOM PREVIEW MODAL ================= */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-3xl overflow-hidden rounded-2xl bg-card border border-border shadow-2xl p-4 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute right-4 top-4 z-10 flex size-9 items-center justify-center rounded-full bg-background/80 text-foreground border border-border shadow-md hover:bg-accent transition"
            >
              <X className="size-5" />
            </button>

            {/* Modal Title */}
            <h4 className="mb-3 text-sm font-bold text-foreground text-center pr-10">
              {modalImage.title}
            </h4>

            {/* Large Image View */}
            <div className="relative w-full h-[70vh] rounded-xl overflow-hidden bg-slate-950/50 flex items-center justify-center">
              <Image
                src={modalImage.src}
                alt={modalImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
