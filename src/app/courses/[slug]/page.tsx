import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Languages, PlayCircle } from "lucide-react";
import { getCourseBySlug } from "@/data/site";
import { discountPercent, formatINR } from "@/lib/utils";

type Props = { params: { slug: string } };

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const off = discountPercent(course.price, course.mrp);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl bg-muted">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mb-2 text-sm font-medium text-primary">{course.exam}</p>
          <h1 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            {course.title}
          </h1>
          <p className="mb-6 text-muted-foreground">{course.description}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-4">
              <Languages className="mb-2 size-5 text-primary" />
              <p className="text-xs text-muted-foreground">Language</p>
              <p className="font-semibold">{course.language}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <Clock className="mb-2 size-5 text-primary" />
              <p className="text-xs text-muted-foreground">Validity</p>
              <p className="font-semibold">
                {course.validity} {course.validityType.toLowerCase()}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <PlayCircle className="mb-2 size-5 text-primary" />
              <p className="text-xs text-muted-foreground">Videos</p>
              <p className="font-semibold">{course.videos || "Live + recorded"}</p>
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28">
          <div className="mb-4 flex items-end gap-2">
            <p className="text-3xl font-bold">{formatINR(course.price)}</p>
            {course.mrp > course.price && (
              <>
                <p className="pb-1 text-muted-foreground line-through">
                  {formatINR(course.mrp)}
                </p>
                <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                  {off}% off
                </span>
              </>
            )}
          </div>
          <button
            type="button"
            className="mb-3 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Buy Now
          </button>
          <Link
            href="/ai-doubt"
            className="mb-3 block w-full rounded-lg border border-border py-3 text-center text-sm font-semibold transition hover:bg-accent"
          >
            Ask AI about this course
          </Link>
          <Link
            href="/planner"
            className="block w-full rounded-lg border border-border py-3 text-center text-sm font-semibold transition hover:bg-accent"
          >
            Add to Study Planner
          </Link>
        </aside>
      </div>
    </div>
  );
}
