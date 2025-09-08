import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const { phone } = body
  if (!phone) return NextResponse.json({ message: "phone required" }, { status: 400 })
  const code = (Math.floor(Math.random() * 900000) + 100000).toString()
  state.otpByPhone.set(phone, code)
  return NextResponse.json({ ok: true, otp: code })
}


