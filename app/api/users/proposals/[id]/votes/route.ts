import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const p = state.proposals.get(params.id)
  if (!p) return NextResponse.json({ message: "not found" }, { status: 404 })
  // simulate vote changes
  p.votes = p.votes || { yes: 0, no: 0 }
  p.votes.yes += Math.random() > 0.5 ? 1 : 0
  p.votes.no += Math.random() > 0.8 ? 1 : 0
  return NextResponse.json(p.votes)
}


