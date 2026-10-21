import Link from "next/link";
import { recordResults, type RecordResult } from "@/data/site";

const cardTone: Record<RecordResult["tone"], string> = {
  mint: "from-emerald-50 to-white",
  blush: "from-rose-50 to-white",
};

const badgeTone: Record<RecordResult["tone"], string> = {
  mint: "bg-emerald-100 text-emerald-800",
  blush: "bg-rose-100 text-rose-800",
};

const nameTone: Record<RecordResult["nameTone"], string> = {
  green: "bg-emerald-600",
  red: "bg-red-600",
  blue: "bg-blue-700",
};

function Laurel({ rank }: { rank: number }) {
  return (
    <div className="relative flex size-[104px] items-center justify-center">
      <svg viewBox="0 0 80 80" className="absolute inset-0 size-full" aria-hidden>
        <path
          d="M18 58c-8-8-10-22-4-32 4 6 6 14 6 22 0 4-.6 8-2 10z"
          fill="#e8b923"
        />
        <path
          d="M14 42c-6-2-10-8-10-14 6 1 11 5 14 10-2 2-3 3-4 4z"
          fill="#f0c94a"
        />
        <path
          d="M22 28c-4-6-4-12 0-16 2 6 2 12 0 16z"
          fill="#d4a017"
        />
        <path
          d="M62 58c8-8 10-22 4-32-4 6-6 14-6 22 0 4 .6 8 2 10z"
          fill="#e8b923"
        />
        <path
          d="M66 42c6-2 10-8 10-14-6 1-11 5-14 10 2 2 3 3 4 4z"
          fill="#f0c94a"
        />
        <path
          d="M58 28c4-6 4-12 0-16-2 6-2 12 0 16z"
          fill="#d4a017"
        />
      </svg>
      <div className="relative text-center leading-none">
        <p className="text-5xl font-extrabold text-red-600">{rank}</p>
        <p className="mt-1 text-xs font-bold tracking-[0.18em] text-red-600">AIR</p>
      </div>
    </div>
  );
}

export function RecordResults() {
  return (
    <section id="record-results" className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-slate-600 md:text-3xl">
          Record Breaking Results Every Year{" "}
          <span aria-hidden>🎉</span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recordResults.map((result) => (
            <article
              key={result.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cardTone[result.tone]} p-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ring-1 ring-slate-100`}
            >
              <div className="flex items-start justify-between gap-2">
                <Laurel rank={result.rank} />
                <div className="mt-2 flex size-28 items-end justify-center rounded-xl bg-gradient-to-b from-slate-200 to-slate-300 text-3xl font-bold text-slate-700">
                  {result.initials}
                </div>
              </div>
              <div className="mt-2 flex items-end justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1.5 text-center text-xs font-semibold leading-tight ${badgeTone[result.tone]}`}
                >
                  {result.exam}
                  <br />
                  {result.year}
                </span>
                <span
                  className={`max-w-[150px] rounded-md px-3 py-2 text-center text-xs font-bold leading-snug text-white sm:text-sm ${nameTone[result.nameTone]}`}
                >
                  {result.name}
                </span>
              </div>
              {result.interview && (
                <Link
                  href={result.interview}
                  className={`mt-3 inline-block text-xs font-medium underline ${
                    result.nameTone === "green"
                      ? "text-emerald-700"
                      : result.nameTone === "blue"
                        ? "text-blue-700"
                        : "text-red-600"
                  }`}
                >
                  Watch Interview
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
