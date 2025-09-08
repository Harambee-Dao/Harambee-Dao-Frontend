"use client"
import { useEffect, useState } from "react"
import api from "@/lib/api"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NotificationsBell } from "@/components/notifications-bell"
import { formatCurrencyKES } from "@/lib/format"

type Group = { id: string; name: string; treasuryBalance: number }
type Member = { id: string; name: string }
type Proposal = { id: string; title: string; status: string; imageUrl?: string }

export default function DashboardPage() {
  const [group, setGroup] = useState<Group | null>(null)
  const [members, setMembers] = useState<Member[]>([])
  const [proposals, setProposals] = useState<Proposal[]>([])

  useEffect(() => {
    async function load() {
      // TODO: replace hardcoded group id with user session group id endpoint
      const groupId = "me"
      const [g, m] = await Promise.all([
        api.get(`/api/users/groups/${groupId}`),
        api.get(`/api/users/groups/${groupId}/members`),
      ])
      setGroup(g.data)
      setMembers(m.data?.members ?? [])
      setProposals(g.data?.latestProposals ?? [])
    }
    load()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <NotificationsBell />
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Group</div>
          <div className="text-xl font-semibold">{group?.name ?? "—"}</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Treasury Balance</div>
          <div className="text-xl font-semibold">{formatCurrencyKES(group?.treasuryBalance)}</div>
          <div className="mt-2"><a className="underline text-sm" href="/treasury">View Treasury</a></div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-muted-foreground">Members</div>
          <div className="text-xl font-semibold">{members.length}</div>
        </Card>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Latest Proposals</h2>
        <a href="/proposals/new"><Button>Create Proposal</Button></a>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {proposals.map((p) => (
          <Card key={p.id} className="overflow-hidden">
            {p.imageUrl && <img src={p.imageUrl} alt="" className="h-40 w-full object-cover" />}
            <div className="p-4">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-muted-foreground">{p.status}</div>
              <a className="underline text-sm" href={`/proposals/${p.id}`}>Open</a>
            </div>
          </Card>
        ))}
        {proposals.length === 0 && <div className="text-sm text-muted-foreground">No proposals</div>}
      </div>
    </div>
  )
}


