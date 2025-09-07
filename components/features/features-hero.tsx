import { Button } from "@/components/ui/button"
import { Brain, Shield, MessageSquare, TrendingUp, Zap, Globe } from "lucide-react"

export function FeaturesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Revolutionary
            <span className="block text-primary">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how AI auditing, blockchain security, and SMS governance work together to eliminate embezzlement
            and empower communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
            >
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-12">
            {[Brain, Shield, MessageSquare, TrendingUp, Zap, Globe].map((Icon, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
