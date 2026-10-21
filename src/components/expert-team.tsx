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
    <section id="expert-team" className="bg-white py-14 dark:bg-background md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold text-primary">Faculty</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Expert Team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
            Meet the passionate professionals dedicated to your learning success
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expertTeam.map((member, index) => (
            <article
              key={member.id}
              className="flex flex-col items-center rounded-2xl bg-white px-5 py-7 text-center shadow-[0_8px_30px_rgba(30,58,95,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(30,58,95,0.12)] dark:bg-card dark:shadow-none dark:ring-1 dark:ring-border"
            >
              {member.image ? (
                <div className="relative mb-4 size-24 overflow-hidden rounded-full ring-2 ring-slate-100 dark:ring-border">
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
                  className={`mb-4 flex size-24 items-center justify-center rounded-full bg-gradient-to-br text-2xl font-bold ring-2 ring-slate-100 dark:ring-border ${avatarColors[index % avatarColors.length]}`}
                  aria-hidden
                >
                  {initials(member.name)}
                </div>
              )}
              <h3 className="mb-3 text-base font-bold leading-snug text-slate-900 dark:text-foreground">
                {member.name}
              </h3>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
                <GraduationCap className="size-3.5" />
                {member.role}
              </div>
              {member.detail && (
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-muted-foreground">
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
