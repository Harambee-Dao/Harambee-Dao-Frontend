"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const docTypes = [
  { value: "national_id", label: "National ID" },
  { value: "passport", label: "Passport" },
  { value: "drivers_license", label: "Driver’s License" }
]
const countries = [
  "Kenya", "Nigeria", "Ghana", "South Africa", "Tanzania", "Uganda" // You can extend this as needed
]

import { useEffect } from "react"

export default function KycUploadPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [docType, setDocType] = useState(docTypes[0].value);
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [status, setStatus] = useState<"form"|"loading"|"success">("form");

  useEffect(() => {
    if (status === "success") {
      const timeout = setTimeout(() => {
        document.cookie = "kyc_status=verified; path=/";
        window.location.assign("/dashboard");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [status, router]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 3000);
  }

  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center bg-gradient-to-br from-deep-green/10 via-camel/10 to-ivory p-4">
      <Card className="w-full max-w-md mx-auto py-8 px-6 shadow-xl border border-khaki flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2 text-center">Verify Your Identity</h1>
        <p className="mb-6 text-center text-muted-foreground">For security and transparency, please upload your ID to complete registration.</p>
        {status === "form" && (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold block mb-2">Upload ID Document</label>
              <input
                type="file"
                accept=".jpg,.png,.pdf"
                required
                className="block w-full border rounded px-2 py-1"
                onChange={handleFileChange}
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">Document Type</label>
              <select value={docType} onChange={e => setDocType(e.target.value)} className="block w-full border rounded px-2 py-1">
                {docTypes.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={e => setDob(e.target.value)}
                className="block w-full border rounded px-2 py-1"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-2">Country</label>
              <select value={country} onChange={e => setCountry(e.target.value)} className="block w-full border rounded px-2 py-1">
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <Button type="submit" className="mt-4 w-full font-semibold">Upload & Verify</Button>
          </form>
        )}
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4 py-12">
            <svg className="animate-spin" width="48" height="48" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" fill="none" opacity="0.3"/><path d="M12 2a10 10 0 0 1 10 10" stroke="#15803d" strokeWidth="4" strokeLinecap="round"/></svg>
            <h2 className="text-xl font-bold text-deep-green">Verifying with AI...</h2>
          </div>
        )}
        {status === "success" && (
          <div className="flex flex-col items-center gap-4 py-12">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" opacity="0.2" />
              <path d="M7 13l3 3 7-7" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-2xl font-bold text-success">Your ID has been verified.</h2>
          </div>
        )}
      </Card>
    </div>
  )
}
