import { Card } from "@/components/ui/card"
import { Shield, Key, Clock, Link } from "lucide-react"

export function BlockchainSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Blockchain Infrastructure</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Multi-signature treasury and smart contract architecture built on battle-tested protocols
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <Card className="p-8 bg-card">
            <img
              src="/blockchain-architecture.png"
              alt="Blockchain Architecture"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>

          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Gnosis Safe Integration</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each community group gets a dedicated Gnosis Safe multi-signature wallet with customizable signing
              thresholds and automated execution rules.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Multi-Sig Security</h4>
                  <p className="text-muted-foreground text-sm">
                    Configurable M-of-N signature requirements (2-of-3, 3-of-5, etc.)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Time Locks</h4>
                  <p className="text-muted-foreground text-sm">
                    Configurable delays for large transactions and emergency procedures
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Key className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Recovery Mechanisms</h4>
                  <p className="text-muted-foreground text-sm">
                    Social recovery and guardian systems for lost key scenarios
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Link className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Immutable Audit Trail</h4>
                  <p className="text-muted-foreground text-sm">
                    All transactions permanently recorded with cryptographic proofs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6 bg-card">
            <h4 className="text-2xl font-serif font-semibold text-card-foreground">Smart Contract Architecture</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-foreground">Treasury Contract</h5>
                <p className="text-sm text-muted-foreground">
                  Manages fund deposits, withdrawals, and automated releases
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h5 className="font-semibold text-foreground">Governance Contract</h5>
                <p className="text-sm text-muted-foreground">Handles proposal creation, voting, and execution logic</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h5 className="font-semibold text-foreground">Oracle Interface</h5>
                <p className="text-sm text-muted-foreground">Receives and validates AI audit attestations</p>
              </div>
              <div className="border-l-4 border-chart-1 pl-4">
                <h5 className="font-semibold text-foreground">Member Registry</h5>
                <p className="text-sm text-muted-foreground">Manages group membership and permissions</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 bg-card">
            <h4 className="text-2xl font-serif font-semibold text-card-foreground">Data Availability</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h5 className="font-semibold text-foreground">Celestia DA</h5>
                <p className="text-sm text-muted-foreground">Low-cost data availability for evidence anchoring</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <h5 className="font-semibold text-foreground">IPFS Storage</h5>
                <p className="text-sm text-muted-foreground">Decentralized storage for audit evidence and metadata</p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h5 className="font-semibold text-foreground">Filecoin Persistence</h5>
                <p className="text-sm text-muted-foreground">Long-term storage guarantees for critical data</p>
              </div>
              <div className="border-l-4 border-chart-1 pl-4">
                <h5 className="font-semibold text-foreground">Hash Anchoring</h5>
                <p className="text-sm text-muted-foreground">On-chain commitment to off-chain evidence</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
