import Link from "next/link";
import { courses } from "@/data/site";

export default function TestSeriesPage() {
  const tests = courses.filter((c) => c.exam === "Test Series");

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Free Test Series</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        Practice mocks and rapid tests for SSC exams.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tests.map((test) => (
          <Link
            key={test.id}
            href={`/courses/${test.slug}`}
            className="rounded-xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
          >
            <h3 className="mb-2 font-semibold">{test.title}</h3>
            <p className="text-sm text-muted-foreground">{test.description}</p>
          </Link>
        ))}
        <div className="rounded-xl border border-dashed border-border p-5">
          <h3 className="mb-2 font-semibold">SSC CGL Free Mini Mock</h3>
          <p className="mb-3 text-sm text-muted-foreground">
            25 questions · 20 minutes · Instant scorecard
          </p>
          <span className="rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
            Free
          </span>
        </div>
      </div>
    </div>
  );
}
