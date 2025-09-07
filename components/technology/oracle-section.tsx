import { Card } from "@/components/ui/card"
import { Network, Zap, Shield, Database } from "lucide-react"

export function OracleSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Oracle & Attestation Network</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Decentralized oracle network that bridges AI audit results with blockchain smart contracts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="p-8 bg-card">
            <img
              src="/oracle-network-diagram.png"
              alt="Oracle Network Architecture"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>

          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Chainlink Integration</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Multiple independent oracle nodes verify AI audit results and create consensus before triggering smart
              contract execution.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Network className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Decentralized Oracle Network</h4>
                  <p className="text-muted-foreground text-sm">
                    Multiple independent nodes prevent single points of failure
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Chainlink Functions</h4>
                  <p className="text-muted-foreground text-sm">Serverless compute for AI model verification</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Cryptographic Attestations</h4>
                  <p className="text-muted-foreground text-sm">
                    Signed proofs of AI audit results with tamper evidence
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Evidence Anchoring</h4>
                  <p className="text-muted-foreground text-sm">IPFS CIDs anchored to Celestia for immutable proof</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-serif font-bold text-foreground text-center">Oracle Workflow</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "AI Audit Complete",
                description: "AI generates evidence bundle and stores on IPFS",
                color: "bg-chart-1/10 text-chart-1",
              },
              {
                step: "2",
                title: "Oracle Verification",
                description: "Multiple oracles fetch and verify evidence bundle",
                color: "bg-chart-2/10 text-chart-2",
              },
              {
                step: "3",
                title: "Consensus Formation",
                description: "Oracle network reaches consensus on audit result",
                color: "bg-chart-3/10 text-chart-3",
              },
              {
                step: "4",
                title: "Smart Contract Trigger",
                description: "Signed attestation triggers Safe transaction creation",
                color: "bg-chart-4/10 text-chart-4",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center space-y-4 bg-card">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${step.color}`}>
                  <span className="font-bold">{step.step}</span>
                </div>
                <h4 className="font-serif font-semibold text-card-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
