import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const p = state.proposals.get(params.id)
  if (!p) return NextResponse.json({ message: "not found" }, { status: 404 })
  return NextResponse.json(p)
}


