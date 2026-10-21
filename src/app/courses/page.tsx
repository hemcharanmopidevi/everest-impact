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
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          {category || (free ? "Free Courses" : "All Courses")}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {filtered.length} course{filtered.length === 1 ? "" : "s"} available
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { label: "All", href: "/courses" },
          { label: "Live Courses", href: "/courses?category=Live%20Courses" },
          { label: "Recorded Courses", href: "/courses?category=Recorded%20Courses" },
          { label: "Test Series", href: "/courses?category=Test%20Series" },
        ].map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium transition hover:bg-accent"
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
        <div className="flex flex-wrap gap-4">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
