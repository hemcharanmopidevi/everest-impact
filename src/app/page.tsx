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

      <section className="reveal py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
            <div>
              <p className="eyebrow">Free learning</p>
              <h2 className="section-title">Watch YouTube Playlist</h2>
            </div>
            <Link
              href="/videos"
              className="shrink-0 whitespace-nowrap text-sm font-semibold text-primary hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
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
                  <span className="play-pulse flex size-14 items-center justify-center rounded-full bg-white sm:size-[68px]">
                    <span className="ml-1.5 border-y-[10px] border-l-[17px] border-y-transparent border-l-[#0b1530] sm:border-y-[12px] sm:border-l-[20px]" />
                  </span>
                </div>
                <p className="p-4 text-sm font-bold leading-snug sm:p-5 sm:text-[15px]">{video.title}</p>
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
