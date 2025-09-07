"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  BookOpen, 
  FileText, 
  Video, 
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Play,
  Mail,
  Users
} from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Complete technical documentation and API references",
      items: [
        "API Documentation",
        "Smart Contract Guides",
        "Integration Tutorials",
        "Security Best Practices"
      ],
      link: "/docs",
      external: false
    },
    {
      icon: FileText,
      title: "Implementation Guide",
      description: "Step-by-step guides for setting up Harambee DAO",
      items: [
        "Group Onboarding",
        "Treasury Setup",
        "SMS Configuration",
        "AI Auditor Setup"
      ],
      link: "/guides",
      external: false
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Visual guides and demonstrations",
      items: [
        "Getting Started",
        "Proposal Creation",
        "Voting Process",
        "Troubleshooting"
      ],
      link: "/tutorials",
      external: false
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Get help from our community and support team",
      items: [
        "Community Forum",
        "Technical Support",
        "FAQ",
        "Contact Support"
      ],
      link: "/support",
      external: false
    }
  ]

  const quickLinks = [
    {
      title: "Whitepaper",
      description: "Technical deep dive into Harambee DAO architecture",
      icon: FileText,
      link: "/whitepaper",
      type: "PDF"
    },
    {
      title: "API Reference",
      description: "Complete API documentation for developers",
      icon: BookOpen,
      link: "/api",
      type: "Docs"
    },
    {
      title: "Security Audit",
      description: "Third-party security audit reports",
      icon: ExternalLink,
      link: "/security",
      type: "Report"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and developers",
      icon: Users,
      link: "/forum",
      type: "Community"
    }
  ]

  const supportChannels = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "support@harambee-dao.com",
      response: "Within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Join our Discord community",
      contact: "discord.gg/harambee-dao",
      response: "Real-time"
    },
    {
      icon: Users,
      title: "Local Partners",
      description: "Connect with local implementation partners",
      contact: "partners@harambee-dao.com",
      response: "Within 48 hours"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-ivory to-khaki/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Resources & Support
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Everything you need to get started with Harambee DAO. From documentation 
            to community support, we're here to help you succeed.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const Icon = resource.icon
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
                        {resource.title}
                      </h3>
                      <p className="text-deep-green/70 leading-relaxed font-avenir">
                        {resource.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {resource.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="text-sm text-deep-green/80 font-avenir">
                          • {item}
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir"
                      onClick={() => window.location.href = resource.link}
                    >
                      {resource.external ? (
                        <>
                          Visit Resource
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Explore {resource.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mb-16">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            Quick Links
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <Card 
                  key={index}
                  className="p-6 bg-ivory border border-khaki hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => window.location.href = link.link}
                >
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-deep-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bodoni font-semibold text-deep-green mb-2">
                        {link.title}
                      </h4>
                      <p className="text-sm text-deep-green/70 font-avenir mb-3">
                        {link.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-camel/20 text-deep-green">
                        {link.type}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-12">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            Get Support
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <div key={index} className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
                  <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-deep-green" />
                  </div>
                  <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-deep-green/70 font-avenir mb-3">
                    {channel.description}
                  </p>
                  <div className="text-sm font-avenir">
                    <div className="text-deep-green font-medium mb-1">{channel.contact}</div>
                    <div className="text-deep-green/60">Response: {channel.response}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-deep-green hover:bg-camel text-ivory px-8 py-4 text-lg font-avenir"
            onClick={() => window.location.href = "/resources"}
          >
            Explore All Resources
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
