import { Card } from "@/components/ui/card"
import { Users, Vote, Shield, Zap } from "lucide-react"

export function DecentralizedGovernance() {
  const principles = [
    {
      icon: Users,
      title: "Member Equality",
      description: "Every member has equal voting power regardless of their contribution size",
      details: "One member, one vote ensures democratic participation and prevents wealth-based influence",
    },
    {
      icon: Vote,
      title: "Transparent Voting",
      description: "All votes are recorded on blockchain with complete transparency",
      details: "Immutable voting records allow anyone to verify results and maintain trust",
    },
    {
      icon: Shield,
      title: "Proposal Security",
      description: "Multi-signature requirements prevent malicious proposals",
      details: "Proposals require multiple member endorsements before reaching voting stage",
    },
    {
      icon: Zap,
      title: "Automated Execution",
      description: "Approved proposals execute automatically through smart contracts",
      details: "No manual intervention needed - decisions are implemented immediately upon approval",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Decentralized Governance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built on principles of democracy, transparency, and community empowerment
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Community-Driven Decisions</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Harambee DAO puts decision-making power directly in the hands of community members. Every major decision -
              from fund allocation to rule changes - is voted on democratically.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Proposal Creation</h4>
                  <p className="text-muted-foreground text-sm">
                    Any member can create proposals for community consideration
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Democratic Voting</h4>
                  <p className="text-muted-foreground text-sm">
                    Simple majority or supermajority rules depending on proposal type
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Automatic Execution</h4>
                  <p className="text-muted-foreground text-sm">
                    Approved proposals execute immediately without manual intervention
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-muted/30">
            <img
              src="/governance-structure.png"
              alt="Governance Structure"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Card
                key={index}
                className="p-6 space-y-4 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-card-foreground">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{principle.details}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
