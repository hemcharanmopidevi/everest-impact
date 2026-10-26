import Link from "next/link";
import { BookOpen, Filter, Search, Sparkles, X } from "lucide-react";
import { CourseCard } from "@/components/course-card";
import { courses } from "@/data/site";
import { cn } from "@/lib/utils";

type Props = {
  searchParams: { category?: string; free?: string; q?: string };
};

const filterTabs = [
  { label: "All Courses", category: undefined, free: undefined },
  { label: "Live Batches", category: "Live Courses", free: undefined },
  { label: "Recorded VOD", category: "Recorded Courses", free: undefined },
  { label: "Test Series", category: "Test Series", free: undefined },
  { label: "Free Resources", category: undefined, free: "1" },
];

export default function CoursesPage({ searchParams }: Props) {
  const currentCategory = searchParams.category;
  const isFree = searchParams.free === "1";
  const q = (searchParams.q || "").trim().toLowerCase();

  let filtered = courses;
  if (currentCategory) filtered = filtered.filter((c) => c.exam === currentCategory);
  if (isFree) filtered = filtered.filter((c) => c.price === 0);
  if (q) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.exam.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header section with gradient backdrop */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/40 via-background to-background py-12 md:py-16">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-[90px]" />
        <div className="absolute -right-20 top-1/2 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <Sparkles className="size-3.5" />
                <span>Curated SSC & Central Govt Batches</span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                Explore Premium <span className="gradient-text">Courses</span>
              </h1>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                Master quantitative aptitude, reasoning, English, and general studies with India&apos;s leading SSC mentors.
              </p>
            </div>

            {/* Quick search input */}
            <form action="/courses" method="GET" className="relative w-full max-w-md">
              {currentCategory && <input type="hidden" name="category" value={currentCategory} />}
              {isFree && <input type="hidden" name="free" value="1" />}
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                name="q"
                defaultValue={searchParams.q || ""}
                placeholder="Search by topic, faculty, exam..."
                className="h-12 w-full rounded-2xl border border-border/80 bg-card/80 pl-11 pr-4 text-sm font-medium shadow-sm backdrop-blur-md transition-all duration-200 focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
              />
            </form>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="mr-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <Filter className="size-3.5" /> Filter:
            </span>
            {filterTabs.map((tab) => {
              const active =
                tab.free === "1"
                  ? isFree
                  : !tab.category && !tab.free
                  ? !currentCategory && !isFree
                  : currentCategory === tab.category;

              let href = "/courses";
              if (tab.category) href += `?category=${encodeURIComponent(tab.category)}`;
              else if (tab.free) href += `?free=1`;
              if (q && href.includes("?")) href += `&q=${encodeURIComponent(q)}`;
              else if (q) href += `?q=${encodeURIComponent(q)}`;

              return (
                <Link
                  key={tab.label}
                  href={href}
                  className={cn(
                    "rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200",
                    active
                      ? "btn-premium shadow-md"
                      : "border border-border/70 bg-card/60 text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {tab.label}
                </Link>
              );
            })}

            {(currentCategory || isFree || q) && (
              <Link
                href="/courses"
                className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold text-muted-foreground hover:text-red-500 transition-colors"
              >
                <X className="size-3.5" />
                Reset
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <div className="mx-auto max-w-7xl px-4 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">
            Showing <span className="font-bold text-foreground">{filtered.length}</span> batch
            {filtered.length === 1 ? "" : "es"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 bg-card/30 p-16 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
              <BookOpen className="size-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground">No matching courses</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              We couldn&apos;t find any courses matching your filters. Try clearing your search term or exploring all courses.
            </p>
            <Link
              href="/courses"
              className="btn-premium mt-6 rounded-xl px-5 py-2.5 text-xs font-semibold"
            >
              View All Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} className="w-full" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
