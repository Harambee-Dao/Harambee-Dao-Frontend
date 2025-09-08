import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function POST(_: Request, { params }: { params: { id: string } }) {
  const p = state.proposals.get(params.id)
  if (!p) return NextResponse.json({ message: "not found" }, { status: 404 })
  state.notifications.unshift({ id: `n_${Date.now()}`, type: "Voting", message: `Voting started for ${p.title}`, createdAt: new Date().toISOString() })
  return NextResponse.json({ ok: true })
}


