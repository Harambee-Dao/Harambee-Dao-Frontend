"use client"
import { useState } from "react"
import api from "@/lib/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function KycUploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!file) return toast.error("Please select a document")
    const formData = new FormData()
    formData.append("document", file)
    setLoading(true)
    try {
      await api.post("/api/users/kyc/documents", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      toast.success("KYC document uploaded. Awaiting review.")
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Upload failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center gap-6 p-6">
      <h1 className="text-2xl font-semibold">KYC Verification</h1>
      <p className="text-sm text-muted-foreground">Upload your ID document (image or PDF)</p>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <Button disabled={loading} type="submit" className="w-full">
          {loading ? "Uploading..." : "Upload"}
        </Button>
      </form>
      <a className="underline text-sm" href="/kyc/status">Check status</a>
    </div>
  )
}




