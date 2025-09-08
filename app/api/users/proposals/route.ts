import { NextResponse } from "next/server"
import { state, randomId, type Proposal } from "@/app/api/mockData"

export async function POST(request: Request) {
  const form = await request.formData()
  const title = String(form.get("title") || "")
  const amount = Number(form.get("amount") || 0)
  const walletAddress = String(form.get("walletAddress") || "")
  const description = String(form.get("description") || "")
  const id = randomId("p")
  const proposal: Proposal = { id, title, description, amount, walletAddress, votes: { yes: 0, no: 0 } }
  state.proposals.set(id, proposal)
  state.group?.latestProposals.unshift(proposal)
  return NextResponse.json({ id })
}


