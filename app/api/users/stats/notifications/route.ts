import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function GET() {
  return NextResponse.json(state.notifications.slice(0, 10))
}


