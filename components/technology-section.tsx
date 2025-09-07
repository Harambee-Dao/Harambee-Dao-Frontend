"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Cloud,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Lock
} from "lucide-react"

export function TechnologySection() {
  const techStack = [
    {
      icon: Shield,
      title: "Multi-Sig Treasury",
      description: "Gnosis Safe for secure fund management",
      details: [
        "Safe Apps integration",
        "Transaction service API",
        "Multi-signature approval",
        "Recovery mechanisms"
      ]
    },
    {
      icon: Cloud,
      title: "Data Availability",
      description: "Celestia DA for cost-effective anchoring",
      details: [
        "Evidence root posting",
        "Low-cost data availability",
        "Immutable audit trail",
        "Scalable storage"
      ]
    },
    {
      icon: Database,
      title: "Off-Chain Storage",
      description: "IPFS + Filecoin for evidence storage",
      details: [
        "Encrypted PII storage",
        "CID on-chain references",
        "Decentralized storage",
        "Tamper-proof evidence"
      ]
    },
    {
      icon: Cpu,
      title: "AI & Computer Vision",
      description: "ResNet-50 backbone with transfer learning",
      details: [
        "Satellite imagery analysis",
        "NDVI time-series detection",
        "Transfer learning",
        "95%+ accuracy target"
      ]
    },
    {
      icon: Network,
      title: "Oracle Network",
      description: "Chainlink Functions for attestation",
      details: [
        "AI oracle pattern",
        "Decentralized attestation",
        "Signed evidence verification",
        "Smart contract integration"
      ]
    },
    {
      icon: Globe,
      title: "Messaging & UX",
      description: "Twilio for SMS governance",
      details: [
        "SMS & WhatsApp APIs",
        "Webhook integration",
        "Universal phone support",
        "Real-time voting"
      ]
    }
  ]

  const architecture = [
    {
      title: "Backend Infrastructure",
      items: [
        "Kubernetes orchestration",
        "PostgreSQL for ledger & membership",
        "Redis for queues",
        "S3 for ephemeral storage",
        "HSMs for key management"
      ]
    },
    {
      title: "Monitoring & Security",
      items: [
        "Prometheus/Grafana monitoring",
        "Sentry error tracking",
        "On-chain watchers",
        "Smart contract audits",
        "HSM for private keys"
      ]
    },
    {
      title: "Privacy & Compliance",
      items: [
        "PII encryption",
        "Zero-knowledge attestations",
        "Rate limiting",
        "OTP verification",
        "Local regulatory compliance"
      ]
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-khaki/20 to-camel/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Technology Stack
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Built on proven blockchain infrastructure with cutting-edge AI and accessible messaging 
            to create a secure, scalable, and community-friendly platform.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <Card 
                key={index}
                className="p-6 bg-ivory border border-khaki hover:shadow-lg transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-deep-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-deep-green/70 text-sm font-avenir mb-4">
                      {tech.description}
                    </p>
                    <div className="space-y-2">
                      {tech.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-camel flex-shrink-0" />
                          <span className="text-xs text-deep-green/80 font-avenir">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Architecture Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {architecture.map((section, index) => (
            <div key={index} className="bg-ivory p-6 rounded-lg border border-khaki">
              <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-4">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-camel flex-shrink-0" />
                    <span className="text-sm text-deep-green/70 font-avenir">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="text-3xl font-bodoni font-bold text-deep-green mb-2">99.9%</div>
            <div className="text-sm text-deep-green/70 font-avenir">Service Availability</div>
          </div>
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="text-3xl font-bodoni font-bold text-deep-green mb-2">&lt;12h</div>
            <div className="text-sm text-deep-green/70 font-avenir">Audit to Payment</div>
          </div>
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="text-3xl font-bodoni font-bold text-deep-green mb-2">≥95%</div>
            <div className="text-sm text-deep-green/70 font-avenir">AI Audit Accuracy</div>
          </div>
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="text-3xl font-bodoni font-bold text-deep-green mb-2">100%</div>
            <div className="text-sm text-deep-green/70 font-avenir">Audit Trail</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-deep-green hover:bg-camel text-ivory px-8 py-4 text-lg font-avenir"
            onClick={() => window.location.href = "/technology"}
          >
            Learn More About Our Technology
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
