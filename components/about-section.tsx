import { Card } from "@/components/ui/card"
import { Users, Globe, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-khaki/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-5 mb-16">
          <h2 className="text-5xl lg:text-6xl font-bodoni font-extrabold tracking-tight text-deep-green">Securing Community Savings</h2>
          <p className="text-xl lg:text-2xl text-deep-green/90 max-w-3xl mx-auto leading-relaxed font-avenir font-semibold">
            Harambee DAO revolutionizes community savings groups (chamas/ROSCAs) by eliminating governance failures and
            theft through cutting-edge AI auditing and blockchain security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-deep-green" />
            </div>
            <h3 className="text-2xl font-bodoni font-bold tracking-tight text-deep-green">Community First</h3>
            <p className="text-deep-green/90 leading-relaxed font-avenir font-semibold">
              Built for African community savings groups, supporting both smartphone and feature phone users through SMS
              governance.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-camel/10 rounded-full flex items-center justify-center mx-auto">
              <Globe className="w-8 h-8 text-camel" />
            </div>
            <h3 className="text-2xl font-bodoni font-bold tracking-tight text-deep-green">Global Impact</h3>
            <p className="text-deep-green/90 leading-relaxed font-avenir font-semibold">
              Addressing the $3B annual loss from embezzlement in community savings groups across developing economies.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-6 hover:shadow-xl transition-all duration-300 card-hover">
            <div className="w-16 h-16 bg-khaki/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-khaki" />
            </div>
            <h3 className="text-2xl font-bodoni font-bold tracking-tight text-deep-green">Proven Security</h3>
            <p className="text-deep-green/90 leading-relaxed font-avenir font-semibold">
              Multi-signature treasury with AI verification ensures funds are only released for verified project
              milestones.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
