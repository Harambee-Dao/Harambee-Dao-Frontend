import { BookOpen, Code, Users, Settings, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const documentationCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Complete guides for setting up your first Harambee DAO community",
    guides: ["Community Onboarding Guide", "SMS Setup Tutorial", "First Proposal Creation", "Member Management Basics"],
  },
  {
    icon: Code,
    title: "Developer Documentation",
    description: "Technical documentation for integrating with Harambee DAO",
    guides: ["API Reference", "SDK Documentation", "Webhook Integration", "Smart Contract ABI"],
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Best practices for managing and growing your community",
    guides: ["Governance Best Practices", "Conflict Resolution", "Member Engagement", "Growth Strategies"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Security guidelines and compliance requirements",
    guides: ["Security Best Practices", "Multi-sig Wallet Setup", "Audit Procedures", "Regulatory Compliance"],
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Advanced configuration options and customization",
    guides: ["Advanced Settings", "Custom Workflows", "Integration Setup", "Backup & Recovery"],
  },
  {
    icon: Zap,
    title: "Troubleshooting",
    description: "Common issues and their solutions",
    guides: ["Common Issues", "Error Codes Reference", "Performance Optimization", "Support Escalation"],
  },
]

export default function DocumentationSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Documentation Library</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides and documentation to help you make the most of Harambee DAO
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationCategories.map((category, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{category.title}</h3>
              </div>

              <p className="text-muted-foreground mb-4">{category.description}</p>

              <div className="space-y-2 mb-6">
                {category.guides.map((guide, guideIndex) => (
                  <div key={guideIndex} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>{guide}</span>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Browse {category.title}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-muted-foreground mb-6">
              Our documentation is constantly evolving. If you need help with something specific, don't hesitate to
              reach out to our support team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Contact Support</Button>
              <Button variant="outline">Request Documentation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
