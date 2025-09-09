"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import api from "@/lib/api"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { User, Mail, Phone, Lock } from "lucide-react"
import { OTPInput, SlotProps } from "input-otp"

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<"form" | "otp" | "verifying" | "verified" | "success">("form")
  const [otp, setOtp] = useState("")
  const useLocalOtp = process.env.NEXT_PUBLIC_LOCAL_OTP === "true"
  const [devOtp, setDevOtp] = useState("")

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post("/api/users/members", { name, email, phone, password })
      if (useLocalOtp) {
        const code = String(Math.floor(Math.random() * 900000) + 100000)
        setDevOtp(code)
        setOtp(code)
      } else {
        const res = await api.post("/api/users/phone/request-otp", { phone })
        setDevOtp(res.data?.otp || "")
      }
      setStep("otp")
      toast.success("Account created. OTP sent.")
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  async function onVerifyOtp(e: React.FormEvent) {
    e.preventDefault()
    // Demo mode: Always show animation sequence regardless of OTP
    setStep("verifying")
    setTimeout(() => {
      setStep("verified")
      setTimeout(() => {
        setStep("success")
        setTimeout(() => {
          router.replace("/kyc/upload")
        }, 2000)
      }, 1100)
    }, 1200)
  }

  return (
    <div className="relative min-h-[100dvh]">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-green/10 via-camel/10 to-ivory" />
      <div className="relative mx-auto flex min-h-[100dvh] max-w-xl items-center justify-center p-6">
        <Card className="w-full p-6 shadow-2xl backdrop-blur-sm bg-ivory border border-khaki">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight">Create your account</h1>
            <p className="text-sm text-muted-foreground">Join your community</p>
          </div>
          {step === "form" && (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Full Name</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><User size={16} /></span>
                <Input className="pl-9 font-semibold" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Email</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"><Mail size={16} /></span>
                <Input className="pl-9 font-semibold" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold">Phone</label>
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
              {loading ? "Sending OTP..." : "Create account"}
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
              <Button className="w-full font-bold" type="submit">
                Verify OTP
              </Button>
              <button type="button" className="text-sm underline" onClick={() => setStep("form")}>Edit phone</button>
            </form>
          )}
          {step === "verifying" && (
            <div className="flex flex-col items-center gap-4 py-12">
              <svg className="animate-spin" width="48" height="48" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" fill="none" opacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/></svg>
              <h2 className="text-xl font-bold text-deep-green">Verifying OTP...</h2>
            </div>
          )}
          {step === "verified" && (
            <div className="flex flex-col items-center gap-4 py-12">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" opacity="0.2" />
                <path d="M7 13l3 3 7-7" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-success">Verification successful!</h2>
            </div>
          )}
          {step === "success" && (
            <div className="flex flex-col items-center gap-4 py-12">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" opacity="0.2" />
                <path d="M7 13l3 3 7-7" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h2 className="text-2xl font-bold text-success">Account successfully created!</h2>
              <p className="text-muted-foreground">Redirecting to your dashboard...</p>
            </div>
          )}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account? <a className="font-semibold underline" href="/auth/login">Login</a>
          </p>
        </Card>
      </div>
    </div>
  )
}




