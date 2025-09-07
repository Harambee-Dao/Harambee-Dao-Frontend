"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Shield, 
  MessageSquare, 
  Satellite, 
  Users, 
  Lock,
  ArrowRight,
  CheckCircle,
  Globe,
  Smartphone
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI Auditor",
      description: "Computer vision verifies project milestones using satellite imagery and drone photos. ResNet-50 backbone with 95%+ accuracy.",
      details: [
        "Satellite imagery analysis",
        "NDVI crop monitoring",
        "Progress verification",
        "Fraud detection"
      ],
      demoLink: "/ai-auditor"
    },
    {
      icon: Shield,
      title: "Multi-Sig Treasury",
      description: "Gnosis Safe enforces payment rules and timelocks. Funds only released after verified milestones.",
      details: [
        "Secure multi-signature setup",
        "Automated payment rules",
        "Timelock protection",
        "Recovery mechanisms"
      ],
      demoLink: "/treasury"
    },
    {
      icon: MessageSquare,
      title: "SMS Governance",
      description: "Every member votes via SMS, even with feature phones. Universal access for all community members.",
      details: [
        "SMS voting system",
        "Feature phone support",
        "Real-time results",
        "Secure verification"
      ],
      demoLink: "/governance"
    },
    {
      icon: Satellite,
      title: "Transparent Auditing",
      description: "Immutable proof and evidence on blockchain. IPFS storage with Celestia DA anchoring.",
      details: [
        "On-chain audit trail",
        "IPFS evidence storage",
        "Data availability",
        "Tamper-proof records"
      ],
      demoLink: "/audit"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-ivory to-khaki/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Core Features
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Harambee DAO combines cutting-edge AI, blockchain security, and accessible governance 
            to eliminate embezzlement in community savings groups.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                className="p-8 bg-ivory border border-khaki hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-deep-green" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bodoni font-semibold text-deep-green mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-deep-green/70 leading-relaxed font-avenir">
                        {feature.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-camel flex-shrink-0" />
                          <span className="text-sm text-deep-green/80 font-avenir">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir"
                      onClick={() => window.location.href = feature.demoLink}
                    >
                      Try Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Community First
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Built for African community savings groups, supporting both smartphone and feature phone users.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Global Impact
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Addressing the $3B annual loss from embezzlement in community savings groups across developing economies.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Proven Security
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Multi-signature treasury with AI verification ensures funds are only released for verified project milestones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
