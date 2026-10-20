import { Container } from "@/components/Layout";
import { GitHubActivity } from "@/components/GitHubActivity";
import { JsonLd, getProfilePageSchema } from "@/utils/seo";
import {
  HeroSection,
  AboutSection,
  FeaturedProjectsSection,
  ExperienceSection,
  EducationSection,
  WritingSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <hr className="border-t border-border" role="separator" />
        <AboutSection />
        <hr className="border-t border-border" role="separator" />
        <GitHubActivity />
        <hr className="border-t border-border" role="separator" />
        <FeaturedProjectsSection />
        <hr className="border-t border-border" role="separator" />
        <ExperienceSection />
        <hr className="border-t border-border" role="separator" />
        <EducationSection />
        <hr className="border-t border-border" role="separator" />
        <WritingSection />
        <hr className="border-t border-border" role="separator" />
        <ContactSection />
      </Container>
      <JsonLd data={getProfilePageSchema()} />
    </>
  );
}
