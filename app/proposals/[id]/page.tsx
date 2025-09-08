"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import api from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { usePoll } from "@/hooks/usePoll"
import { toast } from "sonner"
import { formatCurrencyKES } from "@/lib/format"

type Proposal = {
  id: string
  title: string
  description: string
  amount: number
  walletAddress: string
  imageUrl?: string
  aiVerification?: { status: string; details?: string }
  votes?: { yes: number; no: number }
}

export default function ProposalDetailPage() {
  const params = useParams<{ id: string }>()
  const id = params?.id
  const [proposal, setProposal] = useState<Proposal | null>(null)

  useEffect(() => {
    async function load() {
      const res = await api.get(`/api/users/proposals/${id}`)
      setProposal(res.data)
    }
    if (id) load()
  }, [id])

  const { data: votes } = usePoll({
    fetcher: async () => {
      const res = await api.get(`/api/users/proposals/${id}/votes`)
      return res.data as { yes: number; no: number }
    },
    enabled: Boolean(id),
    intervalMs: 4000,
  })

  async function startSmsVoting() {
    try {
      await api.post(`/api/users/proposals/${id}/start-sms-voting`)
      toast.success("SMS voting started")
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Failed to start SMS voting")
    }
  }

  const yes = votes?.yes ?? proposal?.votes?.yes ?? 0
  const no = votes?.no ?? proposal?.votes?.no ?? 0
  const total = yes + no || 1

  return (
    <div className="mx-auto max-w-3xl p-6 space-y-6">
      {proposal && (
        <>
          <h1 className="text-2xl font-semibold">{proposal.title}</h1>
          {proposal.imageUrl && <img src={proposal.imageUrl} alt="" className="h-64 w-full object-cover rounded" />}
          <Card className="p-4 space-y-2">
            <div className="text-sm text-muted-foreground">Amount</div>
            <div className="font-medium">{formatCurrencyKES(proposal.amount)}</div>
            <div className="text-sm text-muted-foreground">Wallet</div>
            <div className="font-mono text-sm">{proposal.walletAddress}</div>
            <div className="text-sm text-muted-foreground">Description</div>
            <div>{proposal.description}</div>
          </Card>
          <Card className="p-4">
            <div className="mb-2 text-sm text-muted-foreground">AI Verification</div>
            <div className="font-medium">{proposal.aiVerification?.status ?? "Pending"}</div>
            {proposal.aiVerification?.details && (
              <div className="text-sm text-muted-foreground">{proposal.aiVerification.details}</div>
            )}
          </Card>
          <Card className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">SMS Voting</div>
              <Button onClick={startSmsVoting}>Start</Button>
            </div>
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Yes {yes}</div>
              <div className="h-2 w-full rounded bg-muted">
                <div className="h-2 rounded bg-green-500" style={{ width: `${(yes / total) * 100}%` }} />
              </div>
              <div className="text-xs text-muted-foreground">No {no}</div>
              <div className="h-2 w-full rounded bg-muted">
                <div className="h-2 rounded bg-red-500" style={{ width: `${(no / total) * 100}%` }} />
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}


