"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageSquare, 
  Vote, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Globe,
  Lock,
  Clock
} from "lucide-react"

export function GovernanceSection() {
  const governanceFeatures = [
    {
      icon: Smartphone,
      title: "SMS Voting",
      description: "Universal access for all members, even with feature phones",
      details: [
        "YES/NO voting via SMS",
        "Phone number verification",
        "Real-time vote counting",
        "Anti-spam protection"
      ]
    },
    {
      icon: Vote,
      title: "Transparent Results",
      description: "Live vote tracking and immutable results on blockchain",
      details: [
        "Real-time vote display",
        "On-chain vote storage",
        "Audit trail",
        "Result verification"
      ]
    },
    {
      icon: Shield,
      title: "Secure Verification",
      description: "Multi-layer security to prevent fraud and manipulation",
      details: [
        "OTP confirmation",
        "Membership verification",
        "Rate limiting",
        "Duplicate vote prevention"
      ]
    },
    {
      icon: Clock,
      title: "Timelock Protection",
      description: "Automated execution with built-in safety delays",
      details: [
        "Proposal deadlines",
        "Execution delays",
        "Emergency stops",
        "Recovery mechanisms"
      ]
    }
  ]

  const governanceFlow = [
    {
      step: 1,
      title: "Proposal Creation",
      description: "Community leaders create proposals with clear milestones and funding requirements"
    },
    {
      step: 2,
      title: "SMS Distribution",
      description: "Proposal details sent to all members via SMS with unique voting codes"
    },
    {
      step: 3,
      title: "Member Voting",
      description: "Members vote YES/NO via SMS, with real-time verification and counting"
    },
    {
      step: 4,
      title: "AI Verification",
      description: "AI auditor verifies project milestones using satellite imagery and field data"
    },
    {
      step: 5,
      title: "Fund Release",
      description: "Multi-sig treasury automatically releases funds when conditions are met"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-ivory to-deep-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Democratic Governance
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Every community member has a voice. Our SMS-based governance system ensures 
            universal participation while maintaining security and transparency.
          </p>
        </div>

        {/* Governance Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {governanceFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                className="p-8 bg-ivory border border-khaki hover:shadow-xl transition-all duration-300"
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
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Governance Flow */}
        <div className="mb-16">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            How Governance Works
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {governanceFlow.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-ivory p-6 rounded-lg border border-khaki text-center">
                  <div className="w-12 h-12 bg-deep-green text-ivory rounded-full flex items-center justify-center mx-auto mb-4 font-bodoni font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bodoni font-semibold text-deep-green mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-deep-green/70 font-avenir">
                    {step.description}
                  </p>
                </div>
                {index < governanceFlow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-deep-green/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Universal Access
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Works with any phone type - no smartphone or app required for participation.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Secure & Transparent
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Blockchain-verified voting with tamper-proof audit trails and real-time results.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Community Driven
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Every member has equal voting power and can participate in all decisions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-deep-green hover:bg-camel text-ivory px-8 py-4 text-lg font-avenir"
            onClick={() => window.location.href = "/governance"}
          >
            Experience SMS Governance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
