import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CommunityHero } from "@/components/community/community-hero"
import { CommunityOverview } from "@/components/community/community-overview"
import { MemberBenefits } from "@/components/community/member-benefits"
import { CommunitySuccess } from "@/components/community/community-success"
import { CommunityGuidelines } from "@/components/community/community-guidelines"
import { JoinCommunity } from "@/components/community/join-community"

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CommunityHero />
      <CommunityOverview />
      <MemberBenefits />
      <CommunitySuccess />
      <CommunityGuidelines />
      <JoinCommunity />
      <Footer />
    </main>
  )
}
