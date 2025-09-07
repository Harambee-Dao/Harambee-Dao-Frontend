"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Clock, CheckCircle, AlertCircle, Send } from "lucide-react"

interface Proposal {
  id: string
  title: string
  description: string
  amount: number
  votes: { yes: number; no: number }
  status: "active" | "passed" | "failed"
  timeLeft: string
}

export default function ProposalDemoPage() {
  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: "prop_001",
      title: "Community Water Well Project",
      description: "Fund construction of a new water well for the community center",
      amount: 2500,
      votes: { yes: 23, no: 4 },
      status: "active",
      timeLeft: "2 days left",
    },
    {
      id: "prop_002",
      title: "School Equipment Purchase",
      description: "Buy new computers and desks for the local primary school",
      amount: 1800,
      votes: { yes: 31, no: 2 },
      status: "passed",
      timeLeft: "Completed",
    },
  ])

  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
    amount: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [votingFor, setVotingFor] = useState<string | null>(null)

  const handleCreateProposal = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const proposal: Proposal = {
      id: `prop_${Date.now()}`,
      title: newProposal.title,
      description: newProposal.description,
      amount: Number.parseInt(newProposal.amount),
      votes: { yes: 0, no: 0 },
      status: "active",
      timeLeft: "7 days left",
    }

    setProposals((prev) => [proposal, ...prev])
    setNewProposal({ title: "", description: "", amount: "" })
    setIsSubmitting(false)
  }

  const handleVote = async (proposalId: string, vote: "yes" | "no") => {
    setVotingFor(proposalId)

    // Simulate SMS voting delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setProposals((prev) =>
      prev.map((proposal) => {
        if (proposal.id === proposalId) {
          return {
            ...proposal,
            votes: {
              ...proposal.votes,
              [vote]: proposal.votes[vote] + 1,
            },
          }
        }
        return proposal
      }),
    )

    setVotingFor(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="font-serif text-5xl font-bold text-foreground mb-4">Live Governance Demo</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience real-time proposal creation and SMS voting simulation
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Create Proposal */}
              <Card className="p-8">
                <h2 className="font-serif text-2xl font-semibold mb-6">Create New Proposal</h2>
                <form onSubmit={handleCreateProposal} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Proposal Title</label>
                    <Input
                      value={newProposal.title}
                      onChange={(e) => setNewProposal((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., Community Garden Project"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      value={newProposal.description}
                      onChange={(e) => setNewProposal((prev) => ({ ...prev, description: e.target.value }))}
                      placeholder="Detailed description of the proposal..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Funding Amount ($)</label>
                    <Input
                      type="number"
                      value={newProposal.amount}
                      onChange={(e) => setNewProposal((prev) => ({ ...prev, amount: e.target.value }))}
                      placeholder="1000"
                      required
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Proposal...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Create Proposal
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              {/* SMS Simulation */}
              <Card className="p-8 bg-muted/30">
                <h2 className="font-serif text-2xl font-semibold mb-6">SMS Voting Simulation</h2>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <div className="text-sm text-muted-foreground mb-2">📱 Incoming SMS:</div>
                    <div className="text-sm">
                      "PROPOSAL #001: Community Water Well Project - $2,500. AI verified: Land permits approved,
                      contractor selected. Vote: Reply YES001 or NO001. Deadline: Dec 20, 2024"
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-sm text-primary mb-2">📤 Your Reply:</div>
                    <div className="font-mono text-lg">YES001</div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="text-sm text-green-600 mb-2">✅ Confirmation:</div>
                    <div className="text-sm">
                      "Vote recorded! Current: 24 YES, 4 NO. Proposal leading. Voting closes in 2 days."
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Active Proposals */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">Active Proposals</h2>

            <div className="space-y-6">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif text-xl font-semibold">{proposal.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            proposal.status === "active"
                              ? "bg-blue-100 text-blue-800"
                              : proposal.status === "passed"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {proposal.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-3">{proposal.description}</p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>Amount: ${proposal.amount.toLocaleString()}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {proposal.timeLeft}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Voting Results */}
                    <div className="space-y-3">
                      <h4 className="font-medium">Current Votes</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-green-600 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            Yes
                          </span>
                          <span className="font-semibold">{proposal.votes.yes}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no)) * 100}%`,
                            }}
                          ></div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-red-600 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            No
                          </span>
                          <span className="font-semibold">{proposal.votes.no}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${(proposal.votes.no / (proposal.votes.yes + proposal.votes.no)) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Vote Buttons */}
                    {proposal.status === "active" && (
                      <div className="space-y-3">
                        <h4 className="font-medium">Cast Your Vote</h4>
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleVote(proposal.id, "yes")}
                            disabled={votingFor === proposal.id}
                            className="flex-1 bg-green-600 hover:bg-green-700"
                          >
                            {votingFor === proposal.id ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            ) : (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Vote Yes
                              </>
                            )}
                          </Button>
                          <Button
                            onClick={() => handleVote(proposal.id, "no")}
                            disabled={votingFor === proposal.id}
                            variant="destructive"
                            className="flex-1"
                          >
                            {votingFor === proposal.id ? (
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            ) : (
                              <>
                                <AlertCircle className="h-4 w-4 mr-2" />
                                Vote No
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          In real implementation, voting happens via SMS
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
