import { Card } from "@/components/ui/card"
import { Crown, Users, Shield, Settings } from "lucide-react"

export function DAOStructure() {
  const roles = [
    {
      icon: Crown,
      title: "Group Admin",
      description: "Elected leader who can create proposals and manage group settings",
      responsibilities: [
        "Create and submit proposals",
        "Manage member onboarding",
        "Configure voting parameters",
        "Emergency fund access (with approval)",
      ],
      color: "bg-chart-1/10 text-chart-1",
    },
    {
      icon: Users,
      title: "Active Members",
      description: "Full voting members who participate in all governance decisions",
      responsibilities: [
        "Vote on all proposals",
        "Suggest new proposals",
        "Participate in discussions",
        "Contribute to group funds",
      ],
      color: "bg-chart-2/10 text-chart-2",
    },
    {
      icon: Shield,
      title: "Validators",
      description: "Trusted members who verify proposal details and member eligibility",
      responsibilities: [
        "Verify proposal accuracy",
        "Validate member eligibility",
        "Monitor voting integrity",
        "Report suspicious activity",
      ],
      color: "bg-chart-3/10 text-chart-3",
    },
    {
      icon: Settings,
      title: "Technical Operators",
      description: "Members responsible for maintaining technical infrastructure",
      responsibilities: [
        "Monitor system health",
        "Manage oracle operations",
        "Handle technical upgrades",
        "Provide member support",
      ],
      color: "bg-chart-4/10 text-chart-4",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">DAO Structure & Roles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clear roles and responsibilities ensure smooth governance and community management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <Card key={index} className="p-8 space-y-6 bg-card hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${role.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-card-foreground">{role.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">{role.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-card-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>

        <Card className="p-12 bg-muted/30">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Democratic Elections</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              All leadership roles are elected democratically by group members. Elections are held annually or when
              triggered by member vote of no confidence.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">Annual</div>
                <div className="text-sm text-muted-foreground">Leadership Elections</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-muted-foreground">Quorum Required</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-primary">2 Years</div>
                <div className="text-sm text-muted-foreground">Maximum Term</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
