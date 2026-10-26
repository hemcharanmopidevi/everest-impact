import { HeroSlider } from "@/components/hero-slider";
import { StatsCounter } from "@/components/stats-counter";
import { SuccessPlatform } from "@/components/success-platform";
import { ValueProposition } from "@/components/value-proposition";
import { WhyChooseEverest } from "@/components/why-choose-everest";
import { PublicationsShowcase } from "@/components/publications-showcase";
import { PreparationPlans } from "@/components/preparation-plans";
import { BatchSchedule } from "@/components/batch-schedule";
import { ModesComparison } from "@/components/modes-comparison";
import { RecordResults } from "@/components/record-results";
import { ExpertTeam } from "@/components/expert-team";
import { GuidanceSection } from "@/components/guidance-section";
import { AdmissionSteps } from "@/components/admission-steps";
import { FaqsSection } from "@/components/faqs-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsCounter />
      <SuccessPlatform />
      <ValueProposition />
      <WhyChooseEverest />
      <PublicationsShowcase />
      <PreparationPlans />
      <BatchSchedule />
      <ModesComparison />
      <RecordResults />
      <ExpertTeam />
      <GuidanceSection />
      <AdmissionSteps />
      <FaqsSection />
      <ContactSection />
    </>
  );
}
