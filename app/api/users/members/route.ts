import { NextResponse } from "next/server"
import { state, randomId, type User } from "@/app/api/mockData"

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  const { name, email, phone, password } = body
  if (!name || !email || !phone || !password) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 })
  }
  const user: User = {
    id: randomId("u"),
    name,
    email,
    phone,
    kycStatus: "pending",
  }
  state.users.set(phone, user)
  return NextResponse.json(user)
}


