import { Card } from "@/components/ui/card"
import { ArrowRight, Upload, Brain, Vote, Coins } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Register & Deposit",
      description: "Group registers and deposits funds into multi-sig Gnosis Safe treasury",
      color: "bg-chart-1/10 text-chart-1",
    },
    {
      icon: Brain,
      title: "AI Verification",
      description: "AI auditor analyzes satellite imagery to verify project milestones",
      color: "bg-chart-2/10 text-chart-2",
    },
    {
      icon: Vote,
      title: "SMS Voting",
      description: "Members vote via SMS using simple YES/NO commands on their phones",
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      icon: Coins,
      title: "Secure Release",
      description: "Funds automatically released when milestones verified and votes confirmed",
      color: "bg-chart-4/10 text-chart-4",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our four-step process ensures complete transparency and security for your community funds
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="p-8 text-center space-y-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${step.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                    <h3 className="text-xl font-serif font-semibold text-card-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </Card>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
