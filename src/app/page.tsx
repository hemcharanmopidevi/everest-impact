import Link from "next/link";
import { BrowseSection } from "@/components/browse-section";
import { ContactSection } from "@/components/contact-section";
import { CtaBanner } from "@/components/cta-banner";
import { ExamRibbon } from "@/components/exam-ribbon";
import { ExpertTeam } from "@/components/expert-team";
import { FeaturedCourses } from "@/components/featured-courses";
import { HeroSlider } from "@/components/hero-slider";
import { RecordResults } from "@/components/record-results";
import { SuccessStories } from "@/components/success-stories";
import { Testimonials } from "@/components/testimonials";
import { ValueProposition } from "@/components/value-proposition";
import { youtubeVideos } from "@/data/site";

const videoColors = ["#1a5fe0", "#7a4be0", "#e07a10", "#12a679", "#e0446b", "#0fa3c9"];

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProposition />
      <ExamRibbon />
      <BrowseSection />
      <FeaturedCourses />
      <RecordResults />
      <SuccessStories />
      <ExpertTeam />
      <Testimonials />

      <section className="reveal py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Free learning</p>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Watch YouTube Playlist
              </h2>
            </div>
            <Link
              href="/videos"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video, i) => (
              <a
                key={video.id}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-[22px] bg-card shadow-[0_14px_40px_rgba(26,47,106,0.1)] ring-1 ring-border/60 transition-transform duration-300 hover:-translate-y-2.5"
              >
                <div
                  className="flex aspect-video items-center justify-center"
                  style={{ background: videoColors[i % videoColors.length] }}
                >
                  <span className="play-pulse flex size-[68px] items-center justify-center rounded-full bg-white">
                    <span className="ml-1.5 border-y-[12px] border-l-[20px] border-y-transparent border-l-[#0b1530]" />
                  </span>
                </div>
                <p className="p-5 text-[15px] font-bold leading-snug">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <ContactSection />
    </>
  );
}
