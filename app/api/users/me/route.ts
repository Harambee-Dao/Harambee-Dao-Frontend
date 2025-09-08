import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET() {
  const user = state.users.get(state.currentUserPhone)
  if (!user) return NextResponse.json({ message: "not authenticated" }, { status: 401 })
  return NextResponse.json(user)
}


