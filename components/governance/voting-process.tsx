"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { MessageSquare, Clock, Users, CheckCircle, ArrowRight } from "lucide-react"

export function VotingProcess() {
  const [activeStep, setActiveStep] = useState(0)

  const votingSteps = [
    {
      icon: MessageSquare,
      title: "Proposal Broadcast",
      description: "SMS sent to all members with proposal details and unique voting code",
      details: "Members receive: Proposal summary, voting deadline, and simple YES/NO instructions",
      duration: "Instant",
    },
    {
      icon: Users,
      title: "Member Voting",
      description: "Members reply via SMS with their vote using the provided code",
      details: "Simple format: 'YES123' or 'NO123' where 123 is the proposal code",
      duration: "3-7 days",
    },
    {
      icon: Clock,
      title: "Vote Tallying",
      description: "Real-time vote counting with live updates on proposal status",
      details: "Automatic verification of member eligibility and duplicate vote prevention",
      duration: "Real-time",
    },
    {
      icon: CheckCircle,
      title: "Result Execution",
      description: "Approved proposals automatically execute through smart contracts",
      details: "Immediate fund release or rule changes based on voting outcome",
      duration: "Immediate",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">SMS Voting Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Simple, accessible voting that works with any phone - from smartphones to basic feature phones
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            {votingSteps.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <div
                  key={index}
                  className={`flex items-start space-x-4 cursor-pointer transition-all duration-300 ${
                    isActive ? "scale-105" : "hover:scale-102"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      isActive ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h3
                        className={`text-xl font-serif font-semibold ${isActive ? "text-primary" : "text-foreground"}`}
                      >
                        {step.title}
                      </h3>
                      <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    {isActive && <p className="text-sm text-muted-foreground/80 leading-relaxed">{step.details}</p>}
                  </div>

                  {index < votingSteps.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground/50 mt-3" />}
                </div>
              )
            })}
          </div>

          <Card className="p-8 bg-card">
            <div className="space-y-6">
              <h4 className="text-2xl font-serif font-bold text-card-foreground">Sample SMS Voting</h4>

              <div className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">Incoming SMS:</div>
                  <div className="text-foreground">
                    "PROPOSAL #123: Approve $500 for Mary's shop expansion. AI verified: Lease signed, location
                    confirmed. Vote: Reply YES123 or NO123. Deadline: Dec 15, 2024"
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <div className="text-sm text-primary mb-2">Member Reply:</div>
                  <div className="text-foreground font-semibold">YES123</div>
                </div>

                <div className="bg-secondary/10 p-4 rounded-lg">
                  <div className="text-sm text-secondary mb-2">Confirmation SMS:</div>
                  <div className="text-foreground">
                    "Vote recorded! Current status: 12 YES, 3 NO. Voting closes in 2 days."
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 inline-block">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-foreground">Universal Accessibility</h3>
              <p className="text-muted-foreground max-w-2xl">
                Our SMS voting system ensures every community member can participate, regardless of their device type or
                technical expertise.
              </p>
              <div className="flex justify-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Phone Compatibility</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">85%</div>
                  <div className="text-muted-foreground">Avg. Participation</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">Less than 30 seconds</div>
                  <div className="text-muted-foreground">Vote Time</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
