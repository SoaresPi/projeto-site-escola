import {
  AboutUs,
  ContactPreviewSection,
  FeedbackSection,
  HeroSection,
  HighlightsSection,
  QuickLinkSection,
  OurMissionSection,
} from "../../components/Home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-neutral-300">
      <HeroSection />
      <QuickLinkSection />
      <AboutUs />
      <HighlightsSection />
      <FeedbackSection />
      <ContactPreviewSection />
      {/*<OurMissionSection />*/}
    </div>
  );
}
