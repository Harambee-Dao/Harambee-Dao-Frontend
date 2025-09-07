"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Shield, 
  DollarSign, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  ArrowRight,
  Calendar,
  TrendingUp,
  Lock,
  Eye,
  Send,
  Download
} from "lucide-react"

interface Transaction {
  id: string
  type: "deposit" | "withdrawal" | "release"
  amount: number
  description: string
  status: "pending" | "approved" | "rejected" | "completed"
  timestamp: Date
  signers: string[]
  requiredSigners: number
  approvals: number
  proposalId?: string
}

interface TreasuryStats {
  totalFunds: number
  availableFunds: number
  lockedFunds: number
  totalMembers: number
  activeProposals: number
  pendingTransactions: number
}

export default function TreasuryPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions" | "proposals" | "settings">("overview")
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)

  const treasuryStats: TreasuryStats = {
    totalFunds: 2500000,
    availableFunds: 1800000,
    lockedFunds: 700000,
    totalMembers: 80,
    activeProposals: 3,
    pendingTransactions: 2
  }

  const sampleTransactions: Transaction[] = [
    {
      id: "tx-001",
      type: "release",
      amount: 250000,
      description: "Corn Farming Project - Nakuru (Milestone 1)",
      status: "completed",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      signers: ["Alice", "Bob", "Charlie"],
      requiredSigners: 2,
      approvals: 3,
      proposalId: "prop-001"
    },
    {
      id: "tx-002",
      type: "release",
      amount: 500000,
      description: "Community Water Well (Foundation Complete)",
      status: "pending",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      signers: ["Alice", "Bob", "Charlie"],
      requiredSigners: 2,
      approvals: 1,
      proposalId: "prop-002"
    },
    {
      id: "tx-003",
      type: "deposit",
      amount: 100000,
      description: "Monthly contribution from member #45",
      status: "completed",
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      signers: ["System"],
      requiredSigners: 1,
      approvals: 1
    },
    {
      id: "tx-004",
      type: "withdrawal",
      amount: 50000,
      description: "Emergency fund withdrawal - Medical expenses",
      status: "approved",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
      signers: ["Alice", "Bob", "Charlie"],
      requiredSigners: 2,
      approvals: 2
    }
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "approved":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case "withdrawal":
        return <ArrowRight className="w-4 h-4 text-red-500" />
      case "release":
        return <Send className="w-4 h-4 text-blue-500" />
      default:
        return <DollarSign className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-deep-green/5 to-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bodoni font-bold text-deep-green mb-4">Multi-Sig Treasury</h1>
              <p className="text-xl text-deep-green/70 max-w-3xl mx-auto font-avenir">
                Secure fund management with multi-signature approval. Funds are only released 
                after AI verification and community voting.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-khaki/20 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "overview"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab("transactions")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "transactions"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Transactions
                </button>
                <button
                  onClick={() => setActiveTab("proposals")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "proposals"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Proposals
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`px-6 py-3 rounded-md font-avenir transition-all ${
                    activeTab === "settings"
                      ? "bg-deep-green text-ivory"
                      : "text-deep-green hover:bg-deep-green/10"
                  }`}
                >
                  Settings
                </button>
              </div>
            </div>

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Treasury Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="p-6 bg-ivory border border-khaki text-center">
                    <div className="w-12 h-12 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-6 h-6 text-deep-green" />
                    </div>
                    <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      {formatCurrency(treasuryStats.totalFunds)}
                    </div>
                    <div className="text-sm text-deep-green/70 font-avenir">Total Funds</div>
                  </Card>

                  <Card className="p-6 bg-ivory border border-khaki text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      {formatCurrency(treasuryStats.availableFunds)}
                    </div>
                    <div className="text-sm text-deep-green/70 font-avenir">Available Funds</div>
                  </Card>

                  <Card className="p-6 bg-ivory border border-khaki text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      {formatCurrency(treasuryStats.lockedFunds)}
                    </div>
                    <div className="text-sm text-deep-green/70 font-avenir">Locked Funds</div>
                  </Card>

                  <Card className="p-6 bg-ivory border border-khaki text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                      {treasuryStats.totalMembers}
                    </div>
                    <div className="text-sm text-deep-green/70 font-avenir">Total Members</div>
                  </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-ivory border border-khaki">
                    <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir">
                        <Eye className="mr-2 h-4 w-4" />
                        View Pending Transactions
                      </Button>
                      <Button variant="outline" className="w-full border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir">
                        <Download className="mr-2 h-4 w-4" />
                        Export Transaction History
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6 bg-ivory border border-khaki">
                    <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Security Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-avenir text-deep-green">Multi-Sig Status</span>
                        <span className="text-sm font-medium text-green-600">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-avenir text-deep-green">Required Signers</span>
                        <span className="text-sm font-medium text-deep-green">2 of 3</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-avenir text-deep-green">Last Audit</span>
                        <span className="text-sm font-medium text-deep-green">2 days ago</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="p-6 bg-ivory border border-khaki">
                  <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {sampleTransactions.slice(0, 3).map((tx) => (
                      <div key={tx.id} className="flex items-center justify-between p-3 bg-khaki/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getTypeIcon(tx.type)}
                          <div>
                            <div className="text-sm font-avenir text-deep-green font-medium">{tx.description}</div>
                            <div className="text-xs text-deep-green/60 font-avenir">
                              {tx.timestamp.toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-avenir text-deep-green font-medium">
                            {formatCurrency(tx.amount)}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(tx.status)}`}>
                            {tx.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Transactions Tab */}
            {activeTab === "transactions" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bodoni font-bold text-deep-green">Transaction History</h2>
                  <Button variant="outline" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>

                <div className="space-y-4">
                  {sampleTransactions.map((tx) => (
                    <Card key={tx.id} className="p-6 bg-ivory border border-khaki">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-deep-green/10 rounded-full flex items-center justify-center">
                            {getTypeIcon(tx.type)}
                          </div>
                          <div>
                            <h3 className="text-lg font-bodoni font-semibold text-deep-green">{tx.description}</h3>
                            <div className="flex items-center gap-4 text-sm font-avenir text-deep-green/60">
                              <span>{tx.timestamp.toLocaleDateString()}</span>
                              <span>•</span>
                              <span>{tx.approvals}/{tx.requiredSigners} approvals</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bodoni font-semibold text-deep-green">
                            {formatCurrency(tx.amount)}
                          </div>
                          <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(tx.status)}`}>
                            {tx.status}
                          </span>
                        </div>
                      </div>

                      {tx.status === "pending" && (
                        <div className="mt-4 pt-4 border-t border-khaki">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-avenir text-deep-green">Approval Progress</span>
                            <span className="text-sm font-medium text-deep-green">
                              {tx.approvals}/{tx.requiredSigners} signers
                            </span>
                          </div>
                          <div className="w-full bg-khaki/30 rounded-full h-2 mt-2">
                            <div 
                              className="bg-deep-green h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(tx.approvals / tx.requiredSigners) * 100}%` }}
                            />
                          </div>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white font-avenir">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 font-avenir">
                              <XCircle className="mr-1 h-3 w-3" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Proposals Tab */}
            {activeTab === "proposals" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bodoni font-bold text-deep-green">Active Proposals</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-ivory border border-khaki">
                    <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">Corn Farming Project</h3>
                    <p className="text-deep-green/70 font-avenir mb-4">Plant corn on 5 acres in Nakuru region</p>
                    <div className="space-y-2 text-sm font-avenir">
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Amount:</span>
                        <span className="text-deep-green font-medium">{formatCurrency(250000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Votes:</span>
                        <span className="text-deep-green font-medium">45 Yes, 12 No</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Status:</span>
                        <span className="text-green-600 font-medium">Approved</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-ivory border border-khaki">
                    <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">Community Water Well</h3>
                    <p className="text-deep-green/70 font-avenir mb-4">Drill a water well for the community</p>
                    <div className="space-y-2 text-sm font-avenir">
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Amount:</span>
                        <span className="text-deep-green font-medium">{formatCurrency(500000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Votes:</span>
                        <span className="text-deep-green font-medium">67 Yes, 8 No</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-deep-green/70">Status:</span>
                        <span className="text-yellow-600 font-medium">Pending Release</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-2xl font-bodoni font-bold text-deep-green">Treasury Settings</h2>
                
                <Card className="p-6 bg-ivory border border-khaki">
                  <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Multi-Signature Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Required Signers
                      </label>
                      <Input
                        type="number"
                        defaultValue="2"
                        min="1"
                        max="5"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Total Signers
                      </label>
                      <Input
                        type="number"
                        defaultValue="3"
                        min="2"
                        max="10"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Timelock Duration (hours)
                      </label>
                      <Input
                        type="number"
                        defaultValue="24"
                        min="1"
                        max="168"
                        className="border-khaki focus:border-deep-green font-avenir"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-ivory border border-khaki">
                  <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Security Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-deep-green font-avenir">AI Verification Required</span>
                      <div className="w-12 h-6 bg-deep-green rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-deep-green font-avenir">SMS Voting Required</span>
                      <div className="w-12 h-6 bg-deep-green rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-deep-green font-avenir">Emergency Withdrawal</span>
                      <div className="w-12 h-6 bg-khaki rounded-full relative">
                        <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Button className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir">
                  Save Settings
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">How Multi-Sig Treasury Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">Secure Storage</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Funds are stored in a multi-signature wallet requiring multiple approvals for any transaction
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">AI Verification</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  AI auditor verifies project milestones before funds can be released
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-2">Community Control</h3>
                <p className="text-deep-green/70 font-avenir text-sm">
                  Community members vote via SMS to approve or reject fund releases
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

