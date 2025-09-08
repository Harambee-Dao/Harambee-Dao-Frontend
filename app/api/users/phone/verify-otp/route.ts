import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const { phone, otp } = body
  if (!phone || !otp) return NextResponse.json({ message: "phone and otp required" }, { status: 400 })
  const expected = state.otpByPhone.get(phone)
  if (expected !== otp) return NextResponse.json({ message: "Invalid OTP" }, { status: 401 })

  state.currentUserPhone = phone
  const res = NextResponse.json({ ok: true })
  // mock auth cookie and kyc status cookie
  res.cookies.set("auth_token", "mock-token", { httpOnly: true, sameSite: "lax", path: "/" })
  const user = state.users.get(phone)
  res.cookies.set("kyc_status", user?.kycStatus || "pending", { path: "/" })
  return res
}


