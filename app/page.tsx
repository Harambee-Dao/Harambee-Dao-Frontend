import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { GovernanceSection } from "@/components/governance-section"
import { CommunitySection } from "@/components/community-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <GovernanceSection />
      <CommunitySection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
