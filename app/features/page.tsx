import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeatureOverview } from "@/components/features/feature-overview"
import { CaseStudies } from "@/components/features/case-studies"
import { SecurityMeasures } from "@/components/features/security-measures"

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FeaturesHero />
      <FeatureOverview />
      <CaseStudies />
      <SecurityMeasures />
      <Footer />
    </main>
  )
}
