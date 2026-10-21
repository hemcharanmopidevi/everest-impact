import Link from "next/link";
import { courses } from "@/data/site";
import { formatINR } from "@/lib/utils";

export default function DashboardPage() {
  const enrolled = courses.slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold tracking-tight">Result Dashboard</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Demo progress view for enrolled courses and mock attempts.
      </p>

      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Courses enrolled", value: "3" },
          { label: "Mocks attempted", value: "12" },
          { label: "Avg accuracy", value: "78%" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold text-primary">{stat.value}</p>
          </div>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-semibold">My courses</h2>
      <div className="space-y-3">
        {enrolled.map((course, i) => {
          const progress = [62, 41, 88][i];
          return (
            <div
              key={course.id}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="font-semibold hover:text-primary"
                  >
                    {course.title}
                  </Link>
                  <p className="text-xs text-muted-foreground">
                    Purchased at {formatINR(course.price)}
                  </p>
                </div>
                <span className="text-sm font-medium text-primary">{progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
