"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { motion, AnimatePresence } from "framer-motion"
import { 
  DollarSign, 
  Users, 
  TrendingUp,
  Lock,
  Eye,
  Send,
  Download,
  Plus,
  Vote,
  CheckCircle,
  XCircle,
  Clock,
  ExternalLink
} from "lucide-react"

interface Transaction {
  id: string
  date: string
  type: "Contribution" | "Payout"
  walletOrMember: string
  amount: number
  status: "Completed" | "Pending" | "Failed"
  hash: string
}

interface Proposal {
  id: string
  title: string
  description: string
  requestedAmount: number
  status: "Voting" | "Passed" | "Rejected"
  votesFor: number
  votesAgainst: number
  deadline: string
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
  const { address, isConnected } = useAccount()
  const [activeTab, setActiveTab] = useState<"overview" | "transactions" | "proposals">("overview")
  const [isContributeModalOpen, setIsContributeModalOpen] = useState(false)
  const [contributionAmount, setContributionAmount] = useState("")
  
  // Mock state
  const [balance, setBalance] = useState<number>(1250.00)
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "tx-001",
      date: "2024-08-20",
      type: "Contribution",
      walletOrMember: "0x4f2c...a9b7",
      amount: 50,
      status: "Completed",
      hash: "0x123abc..."
    },
    {
      id: "tx-002", 
      date: "2024-08-21",
      type: "Payout",
      walletOrMember: "Seeds Supplier",
      amount: -200,
      status: "Completed", 
      hash: "0x456def..."
    },
    {
      id: "tx-003",
      date: "2024-08-22",
      type: "Contribution",
      walletOrMember: "0x8a1b...c3d4",
      amount: 75,
      status: "Completed",
      hash: "0x789ghi..."
    }
  ])

  const [proposals, setProposals] = useState<Proposal[]>([
    {
      id: "prop-001",
      title: "Corn Seeds Purchase",
      description: "Buy high-quality corn seeds for 5-acre farm in Nakuru",
      requestedAmount: 250,
      status: "Passed",
      votesFor: 45,
      votesAgainst: 12,
      deadline: "2024-08-25"
    },
    {
      id: "prop-002", 
      title: "Irrigation System",
      description: "Install drip irrigation system for water conservation",
      requestedAmount: 500,
      status: "Voting",
      votesFor: 23,
      votesAgainst: 8,
      deadline: "2024-09-01"
    },
    {
      id: "prop-003",
      title: "Farm Equipment",
      description: "Purchase basic farming tools and equipment",
      requestedAmount: 300,
      status: "Rejected",
      votesFor: 15,
      votesAgainst: 35,
      deadline: "2024-08-15"
    }
  ])

  const treasuryStats: TreasuryStats = {
    totalFunds: balance,
    availableFunds: balance * 0.8,
    lockedFunds: balance * 0.2,
    totalMembers: 80,
    activeProposals: proposals.filter(p => p.status === "Voting").length,
    pendingTransactions: transactions.filter(t => t.status === "Pending").length
  }

  const handleContribute = () => {
    if (!contributionAmount || !isConnected) return
    
    const amount = parseFloat(contributionAmount)
    if (amount <= 0) return

    const newTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: "Contribution",
      walletOrMember: address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Unknown",
      amount: amount,
      status: "Completed",
      hash: `0x${Math.random().toString(16).substr(2, 8)}...`
    }

    setBalance(prev => prev + amount)
    setTransactions(prev => [newTransaction, ...prev])
    setContributionAmount("")
    setIsContributeModalOpen(false)
  }

  const handleReleaseFunds = (proposalId: string, amount: number, title: string) => {
    if (balance < amount) return

    const newTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      type: "Payout",
      walletOrMember: title,
      amount: -amount,
      status: "Completed",
      hash: `0x${Math.random().toString(16).substr(2, 8)}...`
    }

    setBalance(prev => prev - amount)
    setTransactions(prev => [newTransaction, ...prev])
    
    // Update proposal status to show it's been funded
    setProposals(prev => prev.map(p => 
      p.id === proposalId ? { ...p, status: "Rejected" as const } : p
    ))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(Math.abs(amount))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      case "Passed":
        return "bg-green-100 text-green-800"
      case "Voting":
        return "bg-blue-100 text-blue-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-deep-green/5 to-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header with Connect Wallet */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-center">
                <h1 className="text-5xl font-bodoni font-bold text-deep-green mb-4">Multi-Sig Treasury</h1>
                <p className="text-xl text-deep-green/70 max-w-3xl mx-auto font-avenir">
                  Secure fund management with multi-signature approval and community governance.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <ConnectButton />
              </div>
            </div>

            {/* Treasury Balance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-gradient-to-r from-deep-green to-deep-green/90 text-ivory mb-8">
                <div className="text-center">
                  <div className="text-sm opacity-80 mb-2">Treasury Balance</div>
                  <div className="text-6xl font-bodoni font-bold mb-4">
                    {formatCurrency(balance)}
                  </div>
                  <div className="flex justify-center gap-8 text-sm">
                    <div>
                      <span className="opacity-80">Available: </span>
                      <span className="font-medium">{formatCurrency(treasuryStats.availableFunds)}</span>
                    </div>
                    <div>
                      <span className="opacity-80">Locked: </span>
                      <span className="font-medium">{formatCurrency(treasuryStats.lockedFunds)}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-khaki/20 rounded-lg p-1">
                {["overview", "transactions", "proposals"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`px-6 py-3 rounded-md font-avenir transition-all capitalize ${
                      activeTab === tab
                        ? "bg-deep-green text-ivory"
                        : "text-deep-green hover:bg-deep-green/10"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {/* Stats Grid */}
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
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                        {treasuryStats.totalMembers}
                      </div>
                      <div className="text-sm text-deep-green/70 font-avenir">Total Members</div>
                    </Card>

                    <Card className="p-6 bg-ivory border border-khaki text-center">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Vote className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                        {treasuryStats.activeProposals}
                      </div>
                      <div className="text-sm text-deep-green/70 font-avenir">Active Proposals</div>
                    </Card>

                    <Card className="p-6 bg-ivory border border-khaki text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                        {transactions.filter(t => t.type === "Contribution").length}
                      </div>
                      <div className="text-sm text-deep-green/70 font-avenir">Contributors</div>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-ivory border border-khaki">
                      <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <Dialog open={isContributeModalOpen} onOpenChange={setIsContributeModalOpen}>
                          <DialogTrigger asChild>
                            <Button 
                              className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir"
                              disabled={!isConnected}
                            >
                              <Plus className="mr-2 h-4 w-4" />
                              Contribute
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-ivory">
                            <DialogHeader>
                              <DialogTitle className="font-bodoni text-deep-green">Make a Contribution</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <label className="text-sm font-avenir text-deep-green mb-2 block">
                                  Amount (USD)
                                </label>
                                <Input
                                  type="number"
                                  placeholder="0.00"
                                  value={contributionAmount}
                                  onChange={(e) => setContributionAmount(e.target.value)}
                                  className="border-khaki"
                                />
                              </div>
                              <Button 
                                onClick={handleContribute}
                                className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir"
                                disabled={!contributionAmount || !isConnected}
                              >
                                Confirm Contribution
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Button variant="outline" className="w-full border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir">
                          <Download className="mr-2 h-4 w-4" />
                          Export History
                        </Button>
                      </div>
                    </Card>

                    <Card className="p-6 bg-ivory border border-khaki">
                      <h3 className="text-lg font-bodoni font-semibold text-deep-green mb-4">Wallet Status</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-avenir text-deep-green">Connection</span>
                          <Badge variant={isConnected ? "default" : "secondary"}>
                            {isConnected ? "Connected" : "Disconnected"}
                          </Badge>
                        </div>
                        {isConnected && address && (
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-avenir text-deep-green">Address</span>
                            <span className="text-sm font-mono text-deep-green">
                              {`${address.slice(0, 6)}...${address.slice(-4)}`}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-avenir text-deep-green">Network</span>
                          <span className="text-sm font-medium text-green-600">Mainnet</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              )}

              {/* Transactions Tab */}
              {activeTab === "transactions" && (
                <motion.div
                  key="transactions"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bodoni font-bold text-deep-green">Transaction History</h2>
                    <Button variant="outline" className="border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir">
                      <Download className="mr-2 h-4 w-4" />
                      Export
                    </Button>
                  </div>

                  <Card className="bg-ivory border border-khaki">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Wallet/Member</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Hash</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {transactions.map((tx) => (
                          <TableRow key={tx.id}>
                            <TableCell className="font-avenir">{tx.date}</TableCell>
                            <TableCell>
                              <Badge variant={tx.type === "Contribution" ? "default" : "secondary"}>
                                {tx.type}
                              </Badge>
                            </TableCell>
                            <TableCell className="font-mono">{tx.walletOrMember}</TableCell>
                            <TableCell className={`font-semibold ${tx.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {tx.amount > 0 ? '+' : ''}{formatCurrency(tx.amount)}
                            </TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(tx.status)}>{tx.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-sm">{tx.hash}</span>
                                <ExternalLink className="w-3 h-3 text-deep-green/50" />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Card>
                </motion.div>
              )}

              {/* Proposals Tab */}
              {activeTab === "proposals" && (
                <motion.div
                  key="proposals"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bodoni font-bold text-deep-green">Funding Proposals</h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {proposals.map((proposal) => (
                      <Card key={proposal.id} className="p-6 bg-ivory border border-khaki">
                        <div className="space-y-4">
                          <div className="flex items-start justify-between">
                            <h3 className="text-lg font-bodoni font-semibold text-deep-green">{proposal.title}</h3>
                            <Badge className={getStatusColor(proposal.status)}>{proposal.status}</Badge>
                          </div>
                          
                          <p className="text-deep-green/70 font-avenir text-sm">{proposal.description}</p>
                          
                          <div className="space-y-2 text-sm font-avenir">
                            <div className="flex justify-between">
                              <span className="text-deep-green/70">Amount:</span>
                              <span className="text-deep-green font-medium">{formatCurrency(proposal.requestedAmount)}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-deep-green/70">Votes:</span>
                              <span className="text-deep-green font-medium">
                                {proposal.votesFor} Yes, {proposal.votesAgainst} No
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-deep-green/70">Deadline:</span>
                              <span className="text-deep-green font-medium">{proposal.deadline}</span>
                            </div>
                          </div>

                          {proposal.status === "Voting" && (
                            <div className="w-full bg-khaki/30 rounded-full h-2">
                              <div 
                                className="bg-deep-green h-2 rounded-full transition-all duration-300"
                                style={{ 
                                  width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100}%` 
                                }}
                              />
                            </div>
                          )}

                          {proposal.status === "Passed" && (
                            <Button 
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-avenir"
                              onClick={() => handleReleaseFunds(proposal.id, proposal.requestedAmount, proposal.title)}
                              disabled={balance < proposal.requestedAmount}
                            >
                              <Send className="mr-2 h-4 w-4" />
                              Release Funds
                            </Button>
                          )}

                          {proposal.status === "Voting" && (
                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-avenir">
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Vote Yes
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1 border-red-500 text-red-500 hover:bg-red-50 font-avenir">
                                <XCircle className="mr-1 h-3 w-3" />
                                Vote No
                              </Button>
                            </div>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}