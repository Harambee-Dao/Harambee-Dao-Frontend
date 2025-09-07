import { Button } from "@/components/ui/button"
import { Code, Database, Cpu, Network } from "lucide-react"

export function TechnologyHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-card/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
            Advanced
            <span className="block text-primary">Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deep dive into the cutting-edge AI, blockchain, and communication technologies that power Harambee DAO's
            revolutionary platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Technical Documentation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg bg-transparent"
            >
              API Reference
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: Cpu, label: "AI/ML" },
              { icon: Database, label: "Blockchain" },
              { icon: Network, label: "Oracles" },
              { icon: Code, label: "APIs" },
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <tech.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
