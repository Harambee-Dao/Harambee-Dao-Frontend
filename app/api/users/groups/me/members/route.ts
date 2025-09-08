import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET() {
  return NextResponse.json({ members: state.group?.members ?? [] })
}


