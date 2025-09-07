import { Card } from "@/components/ui/card"
import { Code, Database, Cloud, Shield } from "lucide-react"

export function TechStackSection() {
  const techCategories = [
    {
      icon: Code,
      title: "AI & Machine Learning",
      color: "bg-chart-1/10 text-chart-1",
      technologies: [
        "ResNet-50 (PyTorch)",
        "U-Net Segmentation",
        "NDVI Time Series Analysis",
        "Grad-CAM Explainability",
        "Planet & Sentinel APIs",
        "Custom Training Pipeline",
      ],
    },
    {
      icon: Shield,
      title: "Blockchain & Security",
      color: "bg-chart-2/10 text-chart-2",
      technologies: [
        "Gnosis Safe Multi-Sig",
        "Ethereum Smart Contracts",
        "Chainlink Oracle Network",
        "Hardware Security Modules",
        "Zero-Knowledge Proofs",
        "Formal Verification",
      ],
    },
    {
      icon: Database,
      title: "Data & Storage",
      color: "bg-chart-3/10 text-chart-3",
      technologies: [
        "IPFS Distributed Storage",
        "Filecoin Persistence",
        "Celestia Data Availability",
        "PostgreSQL (Metadata)",
        "Redis (Queues)",
        "S3 (Ephemeral Storage)",
      ],
    },
    {
      icon: Cloud,
      title: "Infrastructure & APIs",
      color: "bg-chart-4/10 text-chart-4",
      technologies: [
        "Kubernetes Orchestration",
        "Twilio SMS/WhatsApp",
        "Prometheus Monitoring",
        "Grafana Dashboards",
        "Sentry Error Tracking",
        "REST & GraphQL APIs",
      ],
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Complete Technology Stack</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade technologies powering every aspect of the Harambee DAO platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-8 space-y-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-card-foreground">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16">
          <Card className="p-12 bg-primary/5 border-primary/20 text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">Open Source & Audited</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our entire technology stack is built on open-source foundations with multiple security audits and
                continuous monitoring to ensure reliability and transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Open Source</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Security Audits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
