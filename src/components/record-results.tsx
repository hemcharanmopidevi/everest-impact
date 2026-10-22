import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { recordResults } from "@/data/site";

const rankColors = ["#ffb347", "#ff7a8a", "#7fb0ff", "#7fe0b8"];
const avatarColors = ["#12a679", "#e0446b", "#7a4be0", "#1a5fe0", "#e07a10", "#0fa3c9"];

export function RecordResults() {
  return (
    <section id="record-results" className="relative overflow-hidden bg-[#0b1530] py-12 text-white sm:py-16 md:py-24">
      <div className="orb right-[-120px] top-[-60px] size-[360px] bg-[#1a5fe0]/60" />
      <div className="reveal relative mx-auto max-w-6xl px-4">
        <p className="mb-1 text-sm font-bold tracking-wide text-[#ffb347]">Results</p>
        <h2 className="section-title mb-3">Record Breaking Results Every Year</h2>
        <p className="mb-8 max-w-2xl text-sm text-[#c5d1f0] sm:mb-10 sm:text-base">
          Real students, real ranks. These aspirants trained with EVERESTIMPACT and topped their exams.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {recordResults.map((result, i) => (
            <article
              key={result.id}
              className="flex min-h-[150px] items-end justify-between gap-4 rounded-[20px] border border-white/15 bg-white/[0.06] p-5 transition duration-300 hover:-translate-y-2 hover:bg-white/10 sm:min-h-[190px] sm:rounded-[22px] sm:p-6"
            >
              <div>
                <p
                  className="text-5xl font-extrabold leading-none sm:text-6xl"
                  style={{ color: rankColors[i % rankColors.length] }}
                >
                  {result.rank}
                  <small className="mt-1 block text-xs font-bold tracking-[0.2em] text-[#c5d1f0]">
                    AIR
                  </small>
                </p>
                <span className="mt-4 inline-block rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold">
                  {result.exam} {result.year}
                </span>
                <p className="mt-3 font-bold">{result.name}</p>
                {result.interview && (
                  <Link
                    href={result.interview}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#ffd27a] hover:underline"
                  >
                    <PlayCircle className="size-3.5" />
                    Watch Interview
                  </Link>
                )}
              </div>
              <div
                className="flex size-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold shadow-[0_6px_0_rgba(0,0,0,0.25)] sm:size-20 sm:rounded-[20px] sm:text-2xl sm:shadow-[0_8px_0_rgba(0,0,0,0.25)]"
                style={{ background: avatarColors[i % avatarColors.length] }}
                aria-hidden
              >
                {result.initials}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
