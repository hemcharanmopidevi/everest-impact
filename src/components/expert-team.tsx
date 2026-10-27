import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";
import { facultyMembers } from "@/data/site";

export function ExpertTeam() {
  return (
    <section id="faculty" className="relative overflow-hidden py-16 md:py-24 border-t border-border/50 bg-gradient-to-b from-card/30 via-background to-card/10">
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
            <GraduationCap className="size-3.5" />
            <span>Legendary Mentorship</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Learn From <span className="gradient-text">Experienced Faculty</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
            Learn directly from South India&apos;s most celebrated SSC educators, Guinness World Record holders, and subject directors.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {facultyMembers.map((member) => (
            <div
              key={member.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl glass-card card-hover gradient-border transition-all duration-300"
            >
              {/* Card top banner backdrop */}
              <div className="h-28 w-full bg-gradient-to-br from-sky-500/20 via-sky-400/10 to-transparent border-b border-border/30 relative" />

              {/* Circular Portrait Avatar overlapping banner */}
              <div className="relative -mt-16 flex justify-center">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 shrink-0 rounded-full p-1 bg-gradient-to-tr from-black via-sky-600 to-sky-400 shadow-xl shadow-sky-500/20 group-hover:scale-105 transition-all duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 ring-4 ring-card">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={144}
                      height={144}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-3.5 flex justify-center px-4">
                <span className="inline-flex items-center text-center rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-md shadow-sky-500/25">
                  {member.badge}
                </span>
              </div>

              {/* Bio & Details */}
              <div className="flex flex-1 flex-col justify-between p-6 pt-3 text-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold text-primary">
                    {member.role}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground font-semibold">
                    {member.experience}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground italic line-clamp-3">
                    {member.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-center gap-1.5 border-t border-border/60 pt-3 text-[11px] font-bold text-primary">
                  <Award className="size-3.5 text-amber-500" />
                  <span>Unmatched Track Record</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
