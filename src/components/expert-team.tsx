import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { expertTeam } from "@/data/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

const avatarColors = [
  "from-amber-100 to-orange-200 text-amber-900",
  "from-sky-100 to-blue-200 text-slate-800",
  "from-violet-100 to-indigo-200 text-slate-800",
  "from-emerald-100 to-teal-200 text-slate-800",
];

export function ExpertTeam() {
  return (
    <section id="expert-team" className="bg-white py-12 dark:bg-background md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center sm:mb-10">
          <p className="eyebrow">Faculty</p>
          <h2 className="section-title text-foreground">Our Expert Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Meet the passionate professionals dedicated to your learning success
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {expertTeam.map((member, index) => (
            <article
              key={member.id}
              className="flex flex-col items-center rounded-2xl bg-white px-3 py-5 text-center shadow-[0_8px_30px_rgba(30,58,95,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,58,95,0.12)] dark:bg-card dark:shadow-none dark:ring-1 dark:ring-border sm:px-5 sm:py-7"
            >
              {member.image ? (
                <div className="relative mb-3 size-20 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-border sm:mb-4 sm:size-24">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-[center_18%]"
                    sizes="96px"
                  />
                </div>
              ) : (
                <div
                  className={`mb-3 flex size-20 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold ring-2 ring-slate-100 dark:ring-border sm:mb-4 sm:size-24 sm:text-2xl ${avatarColors[index % avatarColors.length]}`}
                  aria-hidden
                >
                  {initials(member.name)}
                </div>
              )}
              <h3 className="mb-2 text-sm font-bold leading-snug text-slate-900 dark:text-foreground sm:mb-3 sm:text-base">
                {member.name}
              </h3>
              <div className="mb-1 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-800 dark:bg-amber-950/40 dark:text-amber-200 sm:mb-2 sm:px-3 sm:py-1.5 sm:text-xs">
                <GraduationCap className="size-3.5" />
                {member.role}
              </div>
              {member.detail && (
                <p className="mt-1 text-xs font-medium text-slate-700 dark:text-muted-foreground sm:text-sm">
                  {member.detail}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
