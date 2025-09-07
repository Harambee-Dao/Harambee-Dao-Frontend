"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export function ProposalManagement() {
  const [activeTab, setActiveTab] = useState("active")

  const proposals = {
    active: [
      {
        id: "PROP-001",
        title: "Fund Sarah's Tailoring Business Expansion",
        description: "Request for $800 to purchase additional sewing machines and expand workshop space",
        status: "voting",
        votes: { yes: 15, no: 3, total: 25 },
        deadline: "2024-12-20",
        aiVerified: true,
        category: "Business Loan",
      },
      {
        id: "PROP-002",
        title: "Update Group Contribution Rules",
        description: "Proposal to increase monthly contributions from $20 to $25 starting January 2025",
        status: "discussion",
        votes: { yes: 0, no: 0, total: 25 },
        deadline: "2024-12-25",
        aiVerified: false,
        category: "Governance",
      },
    ],
    completed: [
      {
        id: "PROP-000",
        title: "Install Solar Panels for Community Center",
        description: "Approved funding for solar panel installation to reduce electricity costs",
        status: "approved",
        votes: { yes: 22, no: 3, total: 25 },
        deadline: "2024-12-10",
        aiVerified: true,
        category: "Infrastructure",
      },
    ],
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "voting":
        return <Clock className="w-4 h-4" />
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      case "discussion":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "voting":
        return "bg-secondary/10 text-secondary"
      case "approved":
        return "bg-chart-1/10 text-chart-1"
      case "rejected":
        return "bg-destructive/10 text-destructive"
      case "discussion":
        return "bg-accent/10 text-accent"
      default:
        return "bg-muted/10 text-muted-foreground"
    }
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Proposal Management</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Track active proposals, participate in voting, and view historical decisions
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            <Button
              variant={activeTab === "active" ? "default" : "ghost"}
              onClick={() => setActiveTab("active")}
              className="px-6"
            >
              Active Proposals
            </Button>
            <Button
              variant={activeTab === "completed" ? "default" : "ghost"}
              onClick={() => setActiveTab("completed")}
              className="px-6"
            >
              Completed
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {proposals[activeTab as keyof typeof proposals].map((proposal) => (
            <Card key={proposal.id} className="p-8 bg-card">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-serif font-bold text-card-foreground">{proposal.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {proposal.id}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{proposal.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Badge className={getStatusColor(proposal.status)}>
                      {getStatusIcon(proposal.status)}
                      <span className="ml-1 capitalize">{proposal.status}</span>
                    </Badge>

                    <Badge variant="outline">{proposal.category}</Badge>

                    {proposal.aiVerified && (
                      <Badge className="bg-chart-1/10 text-chart-1">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        AI Verified
                      </Badge>
                    )}

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Deadline: {proposal.deadline}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:ml-8 space-y-4">
                  {proposal.status === "voting" && (
                    <div className="text-center space-y-2">
                      <div className="text-sm text-muted-foreground">Current Votes</div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-chart-1">{proposal.votes.yes}</div>
                          <div className="text-xs text-muted-foreground">YES</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-destructive">{proposal.votes.no}</div>
                          <div className="text-xs text-muted-foreground">NO</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-foreground">{proposal.votes.total}</div>
                          <div className="text-xs text-muted-foreground">TOTAL</div>
                        </div>
                      </div>

                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-chart-1 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(proposal.votes.yes / proposal.votes.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                    {proposal.status === "voting" && (
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Vote Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
            Create New Proposal
          </Button>
        </div>
      </div>
    </section>
  )
}
