import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Users, MapPin, Smartphone } from "lucide-react"

export function JoinCommunity() {
  const steps = [
    {
      icon: Users,
      title: "Find Your Group",
      description: "Connect with existing savings groups in your area or start a new one",
    },
    {
      icon: Smartphone,
      title: "Simple Onboarding",
      description: "Register with just your phone number - works with any device",
    },
    {
      icon: MapPin,
      title: "Start Saving",
      description: "Begin participating in democratic governance and secure savings",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Join the Community</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience secure, transparent community savings? Get started in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-foreground">Getting Started is Easy</h3>

            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-serif font-semibold text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <Card className="p-8 bg-card">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-serif font-bold text-card-foreground">Start Your Journey</h4>
                <p className="text-muted-foreground">Enter your phone number to find groups in your area</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Phone Number</label>
                  <Input placeholder="+254 700 000 000" className="w-full" />
                </div>

                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Location (Optional)</label>
                  <Input placeholder="Nairobi, Kenya" className="w-full" />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Find Groups Near Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Already have a group?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Create your DAO
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-4 bg-card">
            <div className="text-3xl font-bold text-primary">$0</div>
            <h4 className="text-lg font-semibold text-card-foreground">Setup Cost</h4>
            <p className="text-sm text-muted-foreground">No upfront fees or hidden charges</p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card">
            <div className="text-3xl font-bold text-primary">5 min</div>
            <h4 className="text-lg font-semibold text-card-foreground">Setup Time</h4>
            <p className="text-sm text-muted-foreground">Quick and simple onboarding process</p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <h4 className="text-lg font-semibold text-card-foreground">Support</h4>
            <p className="text-sm text-muted-foreground">Always available help and guidance</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
