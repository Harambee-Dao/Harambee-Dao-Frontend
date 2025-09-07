import { Card } from "@/components/ui/card"
import { Shield, Lock, Eye, Key, Server, Zap } from "lucide-react"

export function SecurityMeasures() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Signature Security",
      description: "Gnosis Safe smart contracts require multiple signatures for fund release",
      details: "Customizable threshold signatures (2-of-3, 3-of-5, etc.) ensure no single point of failure",
    },
    {
      icon: Lock,
      title: "Hardware Security Modules",
      description: "Private keys stored in tamper-resistant hardware security modules",
      details: "HSM integration provides enterprise-grade key management and protection",
    },
    {
      icon: Eye,
      title: "Immutable Audit Trail",
      description: "All transactions and decisions recorded permanently on blockchain",
      details: "Complete transparency with cryptographic proof of all fund movements and votes",
    },
    {
      icon: Key,
      title: "Encrypted Data Storage",
      description: "Personal information encrypted before storage, only hashes on-chain",
      details: "Zero-knowledge proofs protect member privacy while maintaining transparency",
    },
    {
      icon: Server,
      title: "Decentralized Oracle Network",
      description: "Multiple independent oracles verify AI audit results",
      details: "Chainlink DON provides consensus on milestone verification to prevent manipulation",
    },
    {
      icon: Zap,
      title: "Smart Contract Audits",
      description: "All smart contracts audited by multiple security firms",
      details: "Continuous security monitoring and formal verification of critical functions",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Enterprise-Grade Security</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multiple layers of security protect your community funds and ensure complete transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-8 space-y-6 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{feature.details}</p>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-12 bg-primary/5 border-primary/20">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">Security First Approach</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our security architecture follows industry best practices with multiple independent audits, formal
                verification, and continuous monitoring to ensure your funds are always protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$10M+</div>
                  <div className="text-sm text-muted-foreground">Insurance Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Security Monitoring</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
