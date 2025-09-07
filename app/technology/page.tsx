import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TechnologyHero } from "@/components/technology/technology-hero"
import { AIAuditorSection } from "@/components/technology/ai-auditor-section"
import { BlockchainSection } from "@/components/technology/blockchain-section"
import { SMSGovernanceSection } from "@/components/technology/sms-governance-section"
import { OracleSection } from "@/components/technology/oracle-section"
import { TechStackSection } from "@/components/technology/tech-stack-section"

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <TechnologyHero />
      <AIAuditorSection />
      <BlockchainSection />
      <SMSGovernanceSection />
      <OracleSection />
      <TechStackSection />
      <Footer />
    </main>
  )
}
