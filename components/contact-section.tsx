"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  ArrowRight,
  Users,
  Building,
  Globe
} from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch via email",
      contact: "hello@harambee-dao.com",
      response: "Within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Join our community chat",
      contact: "discord.gg/harambee-dao",
      response: "Real-time"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Call us directly",
      contact: "+254 700 000 000",
      response: "Business hours"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit us in person",
      contact: "Nairobi, Kenya",
      response: "By appointment"
    }
  ]

  const contactReasons = [
    {
      icon: Users,
      title: "Community Groups",
      description: "Interested in implementing Harambee DAO for your community savings group"
    },
    {
      icon: Building,
      title: "Partnership",
      description: "Looking to partner with us for local implementation or distribution"
    },
    {
      icon: Globe,
      title: "Investment",
      description: "Interested in investing in or supporting our mission"
    },
    {
      icon: MessageCircle,
      title: "General Inquiry",
      description: "Have questions about Harambee DAO or need more information"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-deep-green/5 to-khaki/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bodoni font-bold text-deep-green">
            Get In Touch
          </h2>
          <p className="text-xl text-deep-green/70 max-w-3xl mx-auto leading-relaxed font-avenir">
            Ready to secure your community's savings? We're here to help you get started 
            with Harambee DAO. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bodoni font-bold text-deep-green mb-4">
                Send us a Message
              </h3>
              <p className="text-deep-green/70 font-avenir mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your first name"
                    className="border-khaki focus:border-deep-green font-avenir"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your last name"
                    className="border-khaki focus:border-deep-green font-avenir"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="border-khaki focus:border-deep-green font-avenir"
                />
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Phone Number
                </label>
                <Input 
                  type="tel" 
                  placeholder="+254 700 000 000"
                  className="border-khaki focus:border-deep-green font-avenir"
                />
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Organization
                </label>
                <Input 
                  type="text" 
                  placeholder="Your organization or community group"
                  className="border-khaki focus:border-deep-green font-avenir"
                />
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Reason for Contact
                </label>
                <select className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory">
                  <option value="">Select a reason</option>
                  <option value="community">Community Group Implementation</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="investment">Investment Interest</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us about your needs and how we can help..."
                  rows={4}
                  className="border-khaki focus:border-deep-green font-avenir"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-deep-green hover:bg-camel text-ivory py-4 text-lg font-avenir"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bodoni font-bold text-deep-green mb-4">
                Contact Information
              </h3>
              <p className="text-deep-green/70 font-avenir mb-6">
                Choose the best way to reach us based on your needs.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <Card key={index} className="p-6 bg-ivory border border-khaki">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-deep-green" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bodoni font-semibold text-deep-green mb-1">
                          {method.title}
                        </h4>
                        <p className="text-deep-green/70 font-avenir mb-2">
                          {method.description}
                        </p>
                        <div className="text-sm font-avenir">
                          <div className="text-deep-green font-medium">{method.contact}</div>
                          <div className="text-deep-green/60">Response: {method.response}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Contact Reasons */}
            <div className="mt-12">
              <h4 className="text-xl font-bodoni font-bold text-deep-green mb-6">
                Common Reasons to Contact Us
              </h4>
              <div className="space-y-4">
                {contactReasons.map((reason, index) => {
                  const Icon = reason.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-deep-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-deep-green" />
                      </div>
                      <div>
                        <h5 className="text-sm font-bodoni font-semibold text-deep-green mb-1">
                          {reason.title}
                        </h5>
                        <p className="text-xs text-deep-green/70 font-avenir">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-8 p-6 bg-deep-green/5 rounded-lg border border-deep-green/10">
              <h4 className="text-lg font-bodoni font-semibold text-deep-green mb-3">
                Office Hours
              </h4>
              <div className="space-y-2 text-sm font-avenir">
                <div className="flex justify-between">
                  <span className="text-deep-green/70">Monday - Friday:</span>
                  <span className="text-deep-green font-medium">9:00 AM - 6:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-deep-green/70">Saturday:</span>
                  <span className="text-deep-green font-medium">10:00 AM - 2:00 PM EAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-deep-green/70">Sunday:</span>
                  <span className="text-deep-green font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-deep-green hover:bg-camel text-ivory px-8 py-4 text-lg font-avenir"
            onClick={() => window.location.href = "/contact"}
          >
            Schedule a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
