import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function POST() {
  const user = state.users.get(state.currentUserPhone)
  if (!user) return NextResponse.json({ message: "not authenticated" }, { status: 401 })
  user.kycStatus = "verified"
  const res = NextResponse.json({ ok: true })
  res.cookies.set("kyc_status", "verified", { path: "/" })
  return res
}


