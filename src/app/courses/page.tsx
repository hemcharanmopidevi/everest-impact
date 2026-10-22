import { CourseCard } from "@/components/course-card";
import { courses } from "@/data/site";

type Props = {
  searchParams: { category?: string; free?: string; q?: string };
};

export default function CoursesPage({ searchParams }: Props) {
  const category = searchParams.category;
  const free = searchParams.free === "1";
  const q = (searchParams.q || "").toLowerCase();

  let filtered = courses;
  if (category) filtered = filtered.filter((c) => c.exam === category);
  if (free) filtered = filtered.filter((c) => c.price === 0);
  if (q) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.exam.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-10">
      <div className="mb-5 sm:mb-6">
        <p className="eyebrow">Courses</p>
        <h1 className="section-title">
          {category || (free ? "Free Courses" : "All Courses")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {filtered.length} course{filtered.length === 1 ? "" : "s"} available
        </p>
      </div>

      <div className="-mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide sm:mx-0 sm:flex-wrap sm:px-0">
        {[
          { label: "All", href: "/courses", active: !category && !free },
          { label: "Live Courses", href: "/courses?category=Live%20Courses", active: category === "Live Courses" },
          { label: "Recorded Courses", href: "/courses?category=Recorded%20Courses", active: category === "Recorded Courses" },
          { label: "Test Series", href: "/courses?category=Test%20Series", active: category === "Test Series" },
        ].map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className={
              tab.active
                ? "shrink-0 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_4px_0_#0f3fa8]"
                : "shrink-0 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-accent"
            }
          >
            {tab.label}
          </a>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
          No courses found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 py-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} className="w-full sm:w-full" />
          ))}
        </div>
      )}
    </div>
  );
}
