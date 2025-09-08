"use client"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import api from "@/lib/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone, Lock } from "lucide-react"
import { OTPInput, SlotProps } from "input-otp"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextUrl = searchParams.get("next") || "/dashboard"
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<"form" | "otp">("form")
  const [otp, setOtp] = useState("")
  const useLocalOtp = process.env.NEXT_PUBLIC_LOCAL_OTP === "true"
  const [devOtp, setDevOtp] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      if (useLocalOtp) {
        const code = String(Math.floor(Math.random() * 900000) + 100000)
        setDevOtp(code)
        setOtp(code)
      } else {
        // Request OTP for the phone number
        const res = await api.post("/api/users/phone/request-otp", { phone })
        setDevOtp(res.data?.otp || "")
      }
      setStep("otp")
      toast.success("OTP sent to your phone")
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to request OTP")
    } finally {
      setLoading(false)
    }
  }

  async function onVerifyOtp(e: React.FormEvent) {
    e.preventDefault()
    const code = (otp && otp.trim().length >= 4) ? otp.trim() : (useLocalOtp ? devOtp : "")
    if (!code || code.length < 4) return toast.error("Enter the OTP sent to your phone")
    setLoading(true)
    try {
      if (useLocalOtp) {
        if (code !== devOtp) throw new Error("Invalid OTP")
        document.cookie = `auth_token=local-dev; path=/`
        document.cookie = `kyc_status=pending; path=/`
      } else {
        await api.post("/api/users/phone/verify-otp", { phone, otp: code })
      }
      toast.success("Logged in")
      router.replace("/kyc/upload")
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "OTP verification failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-[100dvh]">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-green/10 via-camel/10 to-ivory" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-xl items-center justify-center p-6">
        <Card className="w-full p-6 shadow-2xl backdrop-blur-sm bg-ivory border border-khaki">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to continue</p>
          </div>
          {step === "form" && (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Phone Number</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><Phone size={16} /></span>
                  <Input className="pl-9 font-semibold" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +2547..." required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Password</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><Lock size={16} /></span>
                  <Input className="pl-9 font-semibold" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              </div>
              <Button disabled={loading} className="w-full font-bold" type="submit">
                {loading ? "Sending OTP..." : "Continue"}
              </Button>
            </form>
          )}
          {step === "otp" && (
            <form onSubmit={onVerifyOtp} className="space-y-4">
              <label className="text-sm font-semibold">Enter OTP</label>
              <OTPInput
                maxLength={6}
                value={otp}
                onChange={setOtp}
                render={({ slots }) => (
                  <div className="flex gap-2">
                    {slots.map((slot: SlotProps, idx: number) => (
                      <div key={idx} className="flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-background text-lg font-bold">
                        {slot.char ?? <span className="text-muted-foreground">•</span>}
                      </div>
                    ))}
                  </div>
                )}
              />
              {useLocalOtp && devOtp && (
                <p className="text-xs text-muted-foreground">Dev OTP: {devOtp}</p>
              )}
              <Button disabled={loading} className="w-full font-bold" type="submit">
                {loading ? "Verifying..." : "Verify OTP"}
              </Button>
              <button type="button" className="text-sm underline" onClick={() => setStep("form")}>Edit phone</button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            No account? <a className="font-semibold underline" href="/auth/register">Create one</a>
          </p>
        </Card>
      </div>
    </div>
  )
}




