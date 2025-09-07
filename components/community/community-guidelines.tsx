import { Card } from "@/components/ui/card"
import { Shield, Users, Heart, Zap } from "lucide-react"

export function CommunityGuidelines() {
  const guidelines = [
    {
      icon: Heart,
      title: "Respect & Inclusion",
      description: "Treat all community members with dignity and respect",
      rules: [
        "Welcome new members warmly and help them get started",
        "Respect diverse backgrounds, cultures, and perspectives",
        "Use inclusive language in all communications",
        "Support members facing financial difficulties",
      ],
    },
    {
      icon: Shield,
      title: "Transparency & Trust",
      description: "Maintain honesty and openness in all interactions",
      rules: [
        "Share accurate information about your projects and needs",
        "Disclose any conflicts of interest in proposals",
        "Report suspicious activities or concerns promptly",
        "Keep personal information of other members confidential",
      ],
    },
    {
      icon: Users,
      title: "Active Participation",
      description: "Engage meaningfully in community governance and activities",
      rules: [
        "Participate in voting on proposals that affect the group",
        "Attend virtual or in-person meetings when possible",
        "Contribute constructively to discussions and decisions",
        "Share knowledge and experiences to help others succeed",
      ],
    },
    {
      icon: Zap,
      title: "Responsible Usage",
      description: "Use the platform responsibly and follow community standards",
      rules: [
        "Only create legitimate proposals with clear objectives",
        "Use SMS voting system appropriately and avoid spam",
        "Protect your account credentials and report security issues",
        "Follow local laws and regulations in all activities",
      ],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Community Guidelines</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our shared values and principles that create a safe, supportive environment for all members
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon
            return (
              <Card key={index} className="p-8 space-y-6 bg-card">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-card-foreground">{guideline.title}</h3>
                    <p className="text-muted-foreground">{guideline.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {guideline.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{rule}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <Card className="p-12 bg-primary/5 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Community Enforcement</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our community guidelines are enforced through democratic processes. Members can report violations, and the
              community votes on appropriate responses, ensuring fair and transparent moderation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Community</div>
                <div className="text-sm text-muted-foreground">Driven Moderation</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Democratic</div>
                <div className="text-sm text-muted-foreground">Decision Making</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Transparent</div>
                <div className="text-sm text-muted-foreground">Process</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
