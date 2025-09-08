import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET() {
  return NextResponse.json(state.group)
}

export async function PATCH() {
  if (state.group) {
    state.group.treasuryBalance += 1000
  }
  return NextResponse.json({ ok: true })
}


