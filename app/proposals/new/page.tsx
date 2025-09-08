"use client"
import { useState } from "react"
import api from "@/lib/api"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function NewProposalPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState<number | "">("")
  const [wallet, setWallet] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("amount", String(amount || 0))
      formData.append("walletAddress", wallet)
      formData.append("description", description)
      if (image) formData.append("image", image)

      const res = await api.post("/api/users/proposals", formData)

      // Trigger AI verification (Groq + Google Vision) via backend
      try {
        await api.post(`/api/users/proposals/${res.data?.id}/verify-ai`)
      } catch {}

      toast.success("Proposal created")
      router.replace(`/proposals/${res.data?.id}`)
    } catch (e: any) {
      toast.error(e?.response?.data?.message || "Failed to create proposal")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-4">New Proposal</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="text-sm">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm">Amount</label>
          <Input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
        </div>
        <div>
          <label className="text-sm">Wallet Address</label>
          <Input value={wallet} onChange={(e) => setWallet(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm">Description</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label className="text-sm">Image</label>
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
        </div>
        <Button disabled={submitting} type="submit">{submitting ? "Submitting..." : "Create"}</Button>
      </form>
    </div>
  )
}


