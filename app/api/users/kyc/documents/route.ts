import { NextResponse } from "next/server"
import { state } from "@/app/api/mockData"

export async function POST() {
  state.kycDocUploaded = true
  return NextResponse.json({ ok: true })
}


