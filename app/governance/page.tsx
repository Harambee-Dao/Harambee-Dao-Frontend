"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  MessageSquare, 
  Vote, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  Send,
  Plus,
  Smartphone,
  Globe,
  ArrowRight,
  Calendar,
  DollarSign
} from "lucide-react"

interface Proposal {
  id: string
  title: string
  description: string
  amount: number
  deadline: Date
  status: "active" | "passed" | "rejected" | "expired"
  yesVotes: number
  noVotes: number
  totalMembers: number
  category: string
}

interface Vote {
  proposalId: string
  phoneNumber: string
  vote: "yes" | "no"
  timestamp: Date
}

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState<"proposals" | "create" | "vote">("proposals")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [voteCode, setVoteCode] = useState("")
  const [isVoting, setIsVoting] = useState(false)
  const [voteResult, setVoteResult] = useState<string | null>(null)
  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
    amount: "",
    category: "",
    deadline: ""
  })

  const sampleProposals: Proposal[] = [
    {
      id: "prop-001",
      title: "Corn Farming Project - Nakuru",
      description: "Plant corn on 5 acres in Nakuru region. Expected yield: 50 bags per acre. Project duration: 6 months.",
      amount: 250000,
      deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      status: "active",
      yesVotes: 45,
      noVotes: 12,
      totalMembers: 80,
      category: "Agriculture"
    },
    {
      id: "prop-002",
      title: "Community Water Well",
      description: "Drill a water well for the community. Will serve 200 households. Location: Central village.",
      amount: 500000,
      deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      status: "active",
      yesVotes: 67,
      noVotes: 8,
      totalMembers: 80,
      category: "Infrastructure"
    },
    {
      id: "prop-003",
      title: "Youth Skills Training",
      description: "Provide vocational training for 30 youth in carpentry and welding. Duration: 3 months.",
      amount: 180000,
      deadline: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
      status: "passed",
      yesVotes: 72,
      noVotes: 5,
      totalMembers: 80,
      category: "Education"
    }
  ]

  const handleVote = async () => {
    if (!phoneNumber || !voteCode) return

    setIsVoting(true)
    setVoteResult(null)

    // Simulate SMS voting
    await new Promise(resolve => setTimeout(resolve, 2000))

    const success = Math.random() > 0.1 // 90% success rate
    if (success) {
      setVoteResult("success")
      // Update vote counts (in real app, this would be done via API)
    } else {
      setVoteResult("error")
    }

    setIsVoting(false)
  }

  const handleCreateProposal = () => {
    // In real app, this would submit to API
    alert("Proposal created successfully! (Demo mode)")
    setNewProposal({
      title: "",
      description: "",
      amount: "",
      category: "",
      deadline: ""
    })
  }

  const getVotePercentage = (proposal: Proposal) => {
    const totalVotes = proposal.yesVotes + proposal.noVotes
    if (totalVotes === 0) return 0
    return Math.round((proposal.yesVotes / totalVotes) * 100)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "passed":
        return "bg-blue-100 text-blue-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "expired":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-deep-green/5 to-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bodoni font-bold text-deep-green mb-4">SMS Governance</h1>
              <p className="text-xl text-deep-green/70 max-w-3xl mx-auto font-avenir">
                Experience democratic decision-making through SMS voting. Every community member 
                can participate, even with basic feature phones.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-khaki/20 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("proposals")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "proposals"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Active Proposals
                </button>
                <button
                  onClick={() => setActiveTab("vote")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "vote"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Vote via SMS
                </button>
                <button
                  onClick={() => setActiveTab("create")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "create"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Create Proposal
                </button>
              </div>
            </div>

            {/* Proposals Tab */}
            {activeTab === "proposals" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bodoni font-bold text-deep-green mb-6">Active Proposals</h2>
                {sampleProposals.map((proposal) => (
                  <Card key={proposal.id} className="p-6 bg-ivory border border-khaki">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bodoni font-semibold text-deep-green">
                            {proposal.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(proposal.status)}`}>
                            {proposal.status.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-deep-green/70 font-avenir mb-3">{proposal.description}</p>
                        <div className="flex items-center gap-6 text-sm font-avenir">
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4 text-deep-green" />
                            <span className="text-deep-green">{formatCurrency(proposal.amount)}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-deep-green" />
                            <span className="text-deep-green">
                              {proposal.deadline.toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-deep-green" />
                            <span className="text-deep-green">{proposal.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vote Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm font-avenir">
                        <span className="text-deep-green/70">Vote Progress</span>
                        <span className="text-deep-green font-medium">
                          {proposal.yesVotes + proposal.noVotes} / {proposal.totalMembers} members
                        </span>
                      </div>
                      <div className="w-full bg-khaki/30 rounded-full h-2">
                        <div 
                          className="bg-deep-green h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getVotePercentage(proposal)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm font-avenir">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-deep-green">{proposal.yesVotes} Yes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-deep-green">{proposal.noVotes} No</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* Vote Tab */}
            {activeTab === "vote" && (
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 bg-ivory border border-khaki">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-deep-green" />
                    </div>
                    <h2 className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      Vote via SMS
                    </h2>
                    <p className="text-deep-green/70 font-avenir">
                      Enter your phone number and voting code to cast your vote
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+254 700 000 000"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Voting Code
                      </label>
                      <Input
                        type="text"
                        value={voteCode}
                        onChange={(e) => setVoteCode(e.target.value)}
                        placeholder="e.g., YES1 or NO1"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>

                    <Button
                      onClick={handleVote}
                      disabled={!phoneNumber || !voteCode || isVoting}
                      className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir"
                    >
                      {isVoting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing Vote...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Vote
                        </>
                      )}
                    </Button>

                    {voteResult && (
                      <div className={`p-4 rounded-lg ${
                        voteResult === "success" 
                          ? "bg-green-50 border border-green-200" 
                          : "bg-red-50 border border-red-200"
                      }`}>
                        <div className="flex items-center gap-2">
                          {voteResult === "success" ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                          <span className={`font-avenir ${
                            voteResult === "success" ? "text-green-700" : "text-red-700"
                          }`}>
                            {voteResult === "success" 
                              ? "Vote submitted successfully!" 
                              : "Vote submission failed. Please try again."}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="bg-khaki/20 p-4 rounded-lg">
                      <h4 className="font-bodoni font-semibold text-deep-green mb-2">How SMS Voting Works</h4>
                      <div className="space-y-2 text-sm font-avenir text-deep-green/70">
                        <div>1. You receive an SMS with proposal details and voting options</div>
                        <div>2. Reply with YES1 to approve or NO1 to reject</div>
                        <div>3. Your vote is recorded on the blockchain</div>
                        <div>4. Results are updated in real-time</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Create Proposal Tab */}
            {activeTab === "create" && (
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 bg-ivory border border-khaki">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8 text-deep-green" />
                    </div>
                    <h2 className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      Create New Proposal
                    </h2>
                    <p className="text-deep-green/70 font-avenir">
                      Submit a new proposal for community voting
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Proposal Title
                      </label>
                      <Input
                        type="text"
                        value={newProposal.title}
                        onChange={(e) => setNewProposal({...newProposal, title: e.target.value})}
                        placeholder="e.g., Corn Farming Project - Nakuru"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Description
                      </label>
                      <Textarea
                        value={newProposal.description}
                        onChange={(e) => setNewProposal({...newProposal, description: e.target.value})}
                        placeholder="Describe the project, expected outcomes, and timeline..."
                        rows={4}
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                          Amount (KES)
                        </label>
                        <Input
                          type="number"
                          value={newProposal.amount}
                          onChange={(e) => setNewProposal({...newProposal, amount: e.target.value})}
                          placeholder="250000"
                          className="border-khaki focus:border-deep-green font-avenir"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                          Category
                        </label>
                        <select
                          value={newProposal.category}
                          onChange={(e) => setNewProposal({...newProposal, category: e.target.value})}
                          className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory"
                        >
                          <option value="">Select category</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Education">Education</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Business">Business</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Voting Deadline
                      </label>
                      <Input
                        type="date"
                        value={newProposal.deadline}
                        onChange={(e) => setNewProposal({...newProposal, deadline: e.target.value})}
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>

                    <Button
                      onClick={handleCreateProposal}
                      disabled={!newProposal.title || !newProposal.description || !newProposal.amount}
                      className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Create Proposal
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">How SMS Governance Works</h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">1. Create Proposal</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Community leaders create proposals with clear milestones and funding requirements
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">2. SMS Distribution</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Proposal details sent to all members via SMS with unique voting codes
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Vote className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">3. Member Voting</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Members vote YES/NO via SMS, with real-time verification and counting
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">4. Fund Release</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Multi-sig treasury automatically releases funds when conditions are met
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
