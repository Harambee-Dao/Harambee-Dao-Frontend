import { Card } from "@/components/ui/card"
import { Shield, Zap, Users, TrendingUp, Clock, Globe } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Zero Embezzlement",
      description: "AI verification and multi-sig security eliminate theft and fraud",
      stat: "100%",
      statLabel: "Secure",
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Satellite imagery provides real-time project milestone confirmation",
      stat: "< 12hrs",
      statLabel: "Response",
    },
    {
      icon: Users,
      title: "Inclusive Governance",
      description: "SMS voting ensures every member participates, regardless of device",
      stat: "80%+",
      statLabel: "Participation",
    },
    {
      icon: TrendingUp,
      title: "Proven Accuracy",
      description: "AI models achieve 95%+ precision on milestone verification",
      stat: "95%",
      statLabel: "Accuracy",
    },
    {
      icon: Clock,
      title: "Automated Process",
      description: "Smart contracts handle payments automatically when conditions are met",
      stat: "24/7",
      statLabel: "Active",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Built to serve community savings groups across developing economies",
      stat: "$3B+",
      statLabel: "Protected",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Why Choose Harambee DAO</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Revolutionary benefits that transform how community savings groups operate
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
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{benefit.stat}</div>
                    <div className="text-xs text-muted-foreground">{benefit.statLabel}</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-card-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
