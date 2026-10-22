import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { recordResults } from "@/data/site";

const rankColors = ["#ffb347", "#ff7a8a", "#7fb0ff", "#7fe0b8"];
const avatarColors = ["#12a679", "#e0446b", "#7a4be0", "#1a5fe0", "#e07a10", "#0fa3c9"];

export function RecordResults() {
  return (
    <section id="record-results" className="relative overflow-hidden bg-[#0b1530] py-16 text-white md:py-24">
      <div className="orb right-[-120px] top-[-60px] size-[360px] bg-[#1a5fe0]/60" />
      <div className="reveal relative mx-auto max-w-6xl px-4">
        <p className="mb-1 text-sm font-bold tracking-wide text-[#ffb347]">Results</p>
        <h2 className="mb-3 text-3xl font-extrabold tracking-tight md:text-4xl">
          Record Breaking Results Every Year
        </h2>
        <p className="mb-10 max-w-2xl text-[#c5d1f0]">
          Real students, real ranks. These aspirants trained with EVERESTIMPACT and topped their exams.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recordResults.map((result, i) => (
            <article
              key={result.id}
              className="flex min-h-[190px] items-end justify-between gap-4 rounded-[22px] border border-white/15 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div>
                <p
                  className="text-6xl font-extrabold leading-none"
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
                className="flex size-20 shrink-0 items-center justify-center rounded-[20px] text-2xl font-extrabold shadow-[0_8px_0_rgba(0,0,0,0.25)]"
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
