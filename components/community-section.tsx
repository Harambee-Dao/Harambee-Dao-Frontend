"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Globe, 
  Building, 
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  TrendingUp,
  Shield
} from "lucide-react"

export function CommunitySection() {
  const targetUsers = [
    {
      icon: Users,
      title: "Community Savings Groups",
      description: "Chamas, ROSCAs, and informal savings collectives",
      details: [
        "Traditional community groups",
        "Informal savings networks",
        "Rotating credit associations",
        "Community investment pools"
      ]
    },
    {
      icon: Building,
      title: "Smallholder Farmer Collectives",
      description: "Agricultural cooperatives and farming groups",
      details: [
        "Crop farming collectives",
        "Livestock groups",
        "Agricultural cooperatives",
        "Rural development groups"
      ]
    },
    {
      icon: Globe,
      title: "Local NGOs & MFIs",
      description: "Microfinance institutions and development organizations",
      details: [
        "Microfinance institutions",
        "Community development NGOs",
        "Financial inclusion organizations",
        "Rural development partners"
      ]
    },
    {
      icon: Shield,
      title: "Community Leaders",
      description: "Trusted leaders and organizers in communities",
      details: [
        "Village leaders",
        "Group organizers",
        "Trusted intermediaries",
        "Community representatives"
      ]
    }
  ]

  const impactStats = [
    {
      number: "$3B",
      label: "Annual Losses Prevented",
      description: "Addressing embezzlement in community savings groups"
    },
    {
      number: "70%+",
      label: "Reduction Target",
      description: "Target reduction in embezzlement incidence"
    },
    {
      number: "80%+",
      label: "Vote Response Rate",
      description: "Target SMS voting participation rate"
    },
    {
      number: "95%+",
      label: "AI Accuracy",
      description: "Target precision for milestone verification"
    }
  ]

  const pilotCommunities = [
    {
      location: "Nakuru, Kenya",
      focus: "Agricultural cooperatives",
      members: "150+ farmers",
      status: "Active"
    },
    {
      location: "Kisumu, Kenya", 
      focus: "Community savings groups",
      members: "200+ members",
      status: "Planning"
    },
    {
      location: "Mombasa, Kenya",
      focus: "Fishing cooperatives",
      members: "100+ fishermen",
      status: "Planning"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-camel/10 to-khaki/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Our Community
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Built for African communities, by African communities. We're empowering 
            traditional savings groups with modern technology to protect their hard-earned money.
          </p>
        </div>

        {/* Target Users */}
        <div className="mb-16">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            Who We Serve
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {targetUsers.map((user, index) => {
              const Icon = user.icon
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
                        <h4 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
                          {user.title}
                        </h4>
                        <p className="text-deep-green/70 leading-relaxed font-avenir">
                          {user.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        {user.details.map((detail, detailIndex) => (
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
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            Our Impact Goals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-ivory rounded-lg border border-khaki">
                <div className="text-3xl font-bodoni font-bold text-deep-green mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-bodoni font-semibold text-deep-green mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-deep-green/70 font-avenir">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilot Communities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">
            Pilot Communities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pilotCommunities.map((community, index) => (
              <Card key={index} className="p-6 bg-ivory border border-khaki text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-deep-green" />
                </div>
                <h4 className="text-lg font-bodoni font-semibold text-deep-green mb-2">
                  {community.location}
                </h4>
                <p className="text-sm text-deep-green/70 font-avenir mb-2">
                  {community.focus}
                </p>
                <p className="text-sm text-deep-green/80 font-avenir mb-3">
                  {community.members}
                </p>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  community.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {community.status}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Community First
            </h3>
            <p className="text-deep-green/70 font-avenir">
              We prioritize the needs and traditions of African communities, building technology that serves them.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Sustainable Growth
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Empowering communities to grow their wealth safely and sustainably for future generations.
            </p>
          </div>

          <div className="text-center p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
            <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-deep-green" />
            </div>
            <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
              Trust & Security
            </h3>
            <p className="text-deep-green/70 font-avenir">
              Building trust through transparency, security, and proven technology that communities can rely on.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-deep-green hover:bg-camel text-ivory px-8 py-4 text-lg font-avenir"
            onClick={() => window.location.href = "/community"}
          >
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
