import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, Languages, PlayCircle, ShieldCheck } from "lucide-react";
import { getCourseBySlug } from "@/data/site";
import { discountPercent, formatINR } from "@/lib/utils";

type Props = { params: { slug: string } };

const includes = [
  "Topic-wise video classes",
  "Mock tests with detailed solutions",
  "Doubt support from faculty",
  "Access on mobile app and web",
];

export default function CourseDetailPage({ params }: Props) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const off = discountPercent(course.price, course.mrp);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:py-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl bg-muted shadow-[0_14px_40px_rgba(26,47,106,0.12)]">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            {off > 0 && (
              <span className="absolute left-3 top-3 rounded-full bg-[#ff8a1f] px-3 py-1 text-xs font-extrabold text-[#0b1530] shadow">
                {off}% off
              </span>
            )}
          </div>
          <p className="eyebrow">{course.exam}</p>
          <h1 className="text-xl font-extrabold leading-snug tracking-tight sm:text-2xl md:text-3xl">
            {course.title}
          </h1>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-5 shadow-[0_14px_40px_rgba(26,47,106,0.1)] sm:p-6 lg:sticky lg:top-28 lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <div className="mb-1 flex flex-wrap items-end gap-x-3 gap-y-1">
            <p className="text-3xl font-extrabold">{formatINR(course.price)}</p>
            {course.mrp > course.price && (
              <>
                <p className="pb-1 text-muted-foreground line-through">
                  {formatINR(course.mrp)}
                </p>
                <span className="mb-1 rounded-full bg-[#ff8a1f] px-2.5 py-0.5 text-xs font-extrabold text-[#0b1530]">
                  {off}% off
                </span>
              </>
            )}
          </div>
          {course.mrp > course.price && (
            <p className="mb-4 text-sm font-semibold text-emerald-600">
              You save {formatINR(course.mrp - course.price)}
            </p>
          )}
          <button type="button" className="btn-3d-primary mb-3 w-full">
            Buy Now
          </button>
          <p className="mb-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <ShieldCheck className="size-3.5 text-emerald-600" />
            Secure payment · Instant access
          </p>

          <ul className="mb-5 space-y-2.5 border-t border-border pt-5 text-sm">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/ai-doubt"
              className="block rounded-xl border border-border py-2.5 text-center text-xs font-semibold transition hover:bg-accent sm:text-sm"
            >
              Ask AI about this
            </Link>
            <Link
              href="/planner"
              className="block rounded-xl border border-border py-2.5 text-center text-xs font-semibold transition hover:bg-accent sm:text-sm"
            >
              Add to Planner
            </Link>
          </div>
        </aside>

        <div className="lg:col-start-1 lg:row-start-2">
          <h2 className="mb-2 text-lg font-bold">About this course</h2>
          <p className="mb-6 leading-relaxed text-muted-foreground">{course.description}</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
              <Languages className="mb-2 size-5 text-primary" />
              <p className="text-[11px] text-muted-foreground sm:text-xs">Language</p>
              <p className="text-sm font-semibold sm:text-base">{course.language}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
              <Clock className="mb-2 size-5 text-primary" />
              <p className="text-[11px] text-muted-foreground sm:text-xs">Validity</p>
              <p className="text-sm font-semibold sm:text-base">
                {course.validity} {course.validityType.toLowerCase()}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
              <PlayCircle className="mb-2 size-5 text-primary" />
              <p className="text-[11px] text-muted-foreground sm:text-xs">Videos</p>
              <p className="text-sm font-semibold sm:text-base">
                {course.videos || "Live + recorded"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
