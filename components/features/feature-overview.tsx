import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Shield, MessageSquare, TrendingUp, Clock, Users } from "lucide-react"

export function FeatureOverview() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Auditing",
      description: "Computer vision analyzes satellite imagery to verify project milestones with 95%+ accuracy",
      details: [
        "ResNet-50 backbone with custom training",
        "NDVI time-series analysis for crop monitoring",
        "Real-time satellite data from Planet and Sentinel",
        "Automated evidence generation and storage",
      ],
      image: "/ai-auditing-visualization.png",
    },
    {
      icon: Shield,
      title: "Multi-Signature Treasury",
      description: "Gnosis Safe smart contracts ensure funds are only released when conditions are met",
      details: [
        "Customizable signing thresholds",
        "Time-locked transactions for security",
        "Immutable audit trail on blockchain",
        "Recovery mechanisms for lost keys",
      ],
      image: "/multisig-treasury-diagram.png",
    },
    {
      icon: MessageSquare,
      title: "SMS Governance",
      description: "Every member can vote via SMS, ensuring inclusive participation across all device types",
      details: [
        "Simple YES/NO voting commands",
        "Support for feature phones",
        "OTP verification for security",
        "Real-time vote tallying and results",
      ],
      image: "/sms-governance-flow.png",
    },
    {
      icon: TrendingUp,
      title: "Transparent Analytics",
      description: "Real-time dashboards show fund flows, voting patterns, and project progress",
      details: [
        "Live fund tracking and allocation",
        "Member participation metrics",
        "Project milestone visualization",
        "Historical performance data",
      ],
      image: "/analytics-dashboard.png",
    },
    {
      icon: Clock,
      title: "Automated Workflows",
      description: "Smart contracts handle complex processes automatically, reducing manual overhead",
      details: [
        "Milestone-based fund release",
        "Automated voting period management",
        "Smart contract execution triggers",
        "Error handling and fallback mechanisms",
      ],
      image: "/automated-workflow.png",
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Tools for onboarding, member management, and group administration",
      details: [
        "Easy member registration process",
        "Role-based permissions system",
        "Group settings and customization",
        "Member communication tools",
      ],
      image: "/community-management.png",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Comprehensive Feature Set</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every feature designed to eliminate embezzlement and empower community governance
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-foreground">{feature.title}</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>

                  <ul className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
                </div>

                <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Card className="p-8 bg-muted/30">
                    <img
                      src={feature.image || "/placeholder.svg?height=400&width=600"}
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
