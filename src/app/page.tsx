import Link from "next/link";
import { BrowseSection } from "@/components/browse-section";
import { ContactSection } from "@/components/contact-section";
import { ExpertTeam } from "@/components/expert-team";
import { FeaturedCourses } from "@/components/featured-courses";
import { HeroSlider } from "@/components/hero-slider";
import { RecordResults } from "@/components/record-results";
import { SuccessStories } from "@/components/success-stories";
import { Testimonials } from "@/components/testimonials";
import { ValueProposition } from "@/components/value-proposition";
import { youtubeVideos } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProposition />
      <BrowseSection />
      <FeaturedCourses />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-sm font-semibold text-primary">Free learning</p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {youtubeVideos.map((video) => (
              <a
                key={video.id}
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/15 to-primary/5 text-4xl font-bold text-primary/50">
                  ▶
                </div>
                <p className="p-4 text-sm font-semibold leading-snug">{video.title}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RecordResults />
      <SuccessStories />
      <ExpertTeam />
      <Testimonials />
      <ContactSection />
    </>
  );
}
