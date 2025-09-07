import { Card } from "@/components/ui/card"
import { Zap, Shield, Users, TrendingUp, Clock, Globe } from "lucide-react"

export function MemberBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Complete Security",
      description: "Your funds are protected by military-grade encryption and multi-signature security",
      features: ["Multi-sig wallet protection", "AI fraud detection", "Immutable transaction records"],
    },
    {
      icon: Users,
      title: "Democratic Participation",
      description: "Every member has an equal voice in group decisions through SMS voting",
      features: ["One member, one vote", "SMS accessibility", "Transparent voting records"],
    },
    {
      icon: TrendingUp,
      title: "Guaranteed Growth",
      description: "AI-verified investments ensure your money works harder for the community",
      features: ["95% project success rate", "Real-time milestone tracking", "Automated fund release"],
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Automated processes eliminate manual paperwork and reduce meeting time",
      features: ["Instant vote tallying", "Automated compliance", "Digital record keeping"],
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with savings groups worldwide and share best practices",
      features: ["Cross-group learning", "Global success stories", "International partnerships"],
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "24/7 access to your group's financial status and voting opportunities",
      features: ["Real-time updates", "Mobile-first design", "Offline SMS voting"],
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Member Benefits</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the advantages of technology-enabled community savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="p-8 space-y-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>

                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        <div className="mt-16">
          <Card className="p-12 bg-primary/5 border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">Join the Movement</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Be part of a revolutionary approach to community savings that puts security, transparency, and member
                empowerment at the center of everything we do.
              </p>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">$0</div>
                  <div className="text-sm text-muted-foreground">Setup Fees</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Potential</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
