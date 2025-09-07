import { Card } from "@/components/ui/card"
import { MessageSquare, Smartphone, Shield, Users } from "lucide-react"

export function SMSGovernanceSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">SMS Governance System</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Inclusive voting system that works with any phone, ensuring every community member can participate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Universal Accessibility</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our SMS-based governance ensures that every community member can participate in decision-making,
              regardless of their device type or technical expertise.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Simple Commands</h4>
                  <p className="text-muted-foreground text-sm">YES/NO voting with unique proposal codes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Feature Phone Support</h4>
                  <p className="text-muted-foreground text-sm">Works with basic phones, no smartphone required</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">OTP Verification</h4>
                  <p className="text-muted-foreground text-sm">One-time passwords prevent vote manipulation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-chart-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Member Registry</h4>
                  <p className="text-muted-foreground text-sm">Verified phone numbers mapped to group membership</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-muted/30">
            <img
              src="/sms-flow-diagram.png"
              alt="SMS Governance Flow"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Twilio Integration</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Programmable SMS API</li>
              <li>• WhatsApp Business API support</li>
              <li>• Webhook-based message processing</li>
              <li>• Global carrier connectivity</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Vote Processing</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Real-time vote tallying</li>
              <li>• Duplicate vote prevention</li>
              <li>• Vote deadline enforcement</li>
              <li>• Cryptographic vote hashing</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Security Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rate limiting and spam protection</li>
              <li>• SIM swap detection</li>
              <li>• Vote audit trails</li>
              <li>• Emergency vote suspension</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
