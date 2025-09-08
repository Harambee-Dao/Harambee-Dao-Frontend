"use client"
import { useEffect, useState } from "react"
import api from "@/lib/api"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function KycStatusPage() {
  const [status, setStatus] = useState<"pending" | "verified" | "rejected" | "unknown">("unknown")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (status === "verified") {
      document.cookie = `kyc_status=verified; path=/`
      router.replace("/dashboard")
    }
  }, [status, router])

    async function handleRefresh() {
      setLoading(true)
      try {
        const res = await api.get("/api/users/kyc/members/me/documents")
        const s = res.data?.status || "pending"
        setStatus(s)
      } catch {
        setStatus("unknown")
      } finally {
        setLoading(false)
      }
    }


  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center gap-6 p-6">
      <h1 className="text-2xl font-semibold">KYC Status</h1>
      <div className="rounded-lg border p-4">
        {loading ? "Loading..." : `Status: ${status}`}
      </div>
      <div className="flex gap-2">
        <Button onClick={handleRefresh} disabled={loading}>Refresh</Button>
        <a className="underline self-center text-sm" href="/kyc/upload">Upload another document</a>
      </div>
    </div>
  )
}



