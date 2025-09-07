import { Button } from "@/components/ui/button"
import { Heart, Users, Globe, Handshake } from "lucide-react"

export function CommunityHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Stronger
            <span className="block text-primary">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join a global community of savings groups building financial security through trust, transparency, and
            collective action. Experience the power of Harambee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Join Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
            >
              Find Local Groups
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Users, label: "Active Groups", stat: "450+" },
              { icon: Globe, label: "Countries", stat: "12" },
              { icon: Heart, label: "Members", stat: "15K+" },
              { icon: Handshake, label: "Success Rate", stat: "98%" },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{item.stat}</div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
