import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Vote, Clock } from "lucide-react"

export function GovernanceStats() {
  const stats = [
    {
      icon: Users,
      title: "Active Members",
      value: "1,247",
      change: "+12%",
      description: "Members participating in governance",
      color: "text-chart-1",
    },
    {
      icon: Vote,
      title: "Proposals This Month",
      value: "23",
      change: "+8%",
      description: "Community proposals submitted",
      color: "text-chart-2",
    },
    {
      icon: TrendingUp,
      title: "Participation Rate",
      value: "85%",
      change: "+5%",
      description: "Average voting participation",
      color: "text-chart-3",
    },
    {
      icon: Clock,
      title: "Avg. Decision Time",
      value: "4.2 days",
      change: "-1.2 days",
      description: "From proposal to execution",
      color: "text-chart-4",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Governance Analytics</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-time insights into community participation and decision-making effectiveness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="p-6 space-y-4 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div
                    className={`text-sm font-semibold ${stat.change.startsWith("+") ? "text-chart-1" : "text-chart-4"}`}
                  >
                    {stat.change}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl font-bold text-card-foreground">{stat.value}</div>
                  <div className="text-lg font-semibold text-card-foreground">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16">
          <Card className="p-12 bg-primary/5 border-primary/20">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-serif font-bold text-foreground">Transparent Governance</h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every vote, every decision, and every outcome is recorded permanently on the blockchain. Our governance
                system ensures complete transparency and accountability.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent Voting</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Immutable Records</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">Hidden Decisions</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
