import { Card } from "@/components/ui/card"
import { Heart, Shield, TrendingUp, Users } from "lucide-react"

export function CommunityOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Our Community Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering communities across Africa to build financial security through transparent, technology-enabled
            savings groups
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">The Spirit of Harambee</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Harambee" means "pulling together" in Swahili. It represents the African philosophy of community
              cooperation and mutual support. Our platform embodies this spirit by bringing communities together to
              achieve shared financial goals.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Community First</h4>
                  <p className="text-muted-foreground text-sm">
                    Every decision prioritizes community benefit over individual gain
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Trust & Transparency</h4>
                  <p className="text-muted-foreground text-sm">
                    Open governance and immutable records build lasting trust
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Collective Growth</h4>
                  <p className="text-muted-foreground text-sm">
                    Individual success contributes to community prosperity
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-chart-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Inclusive Participation</h4>
                  <p className="text-muted-foreground text-sm">
                    Technology that works for everyone, regardless of device or expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-muted/30">
            <img src="/community-spirit.png" alt="Community Spirit" className="w-full h-80 object-cover rounded-lg" />
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-6 bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-card-foreground">15,000+ Members</h3>
            <p className="text-muted-foreground leading-relaxed">
              Growing community of savers across Kenya, Uganda, Tanzania, and beyond, all working toward financial
              independence.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-card-foreground">$2.8M Saved</h3>
            <p className="text-muted-foreground leading-relaxed">
              Total funds secured and growing through our platform, with zero embezzlement incidents reported.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-card-foreground">100% Secure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Advanced AI auditing and blockchain security ensure your community funds are always protected.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
