"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [interests, setInterests] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const interestOptions = [
    { id: "updates", label: "Product Updates" },
    { id: "technical", label: "Technical Documentation" },
    { id: "community", label: "Community Stories" },
    { id: "governance", label: "Governance News" },
    { id: "partnerships", label: "Partnership Announcements" },
  ]

  const handleInterestChange = (interestId: string) => {
    setInterests((prev) => (prev.includes(interestId) ? prev.filter((id) => id !== interestId) : [...prev, interestId]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("[v0] Newsletter signup:", { email, interests })
      setSubmitStatus("success")
      setEmail("")
      setInterests([])
    } catch (error) {
      console.log("[v0] Newsletter signup error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Stay Updated</h2>
          <p className="text-xl text-muted-foreground">
            Get the latest news, updates, and insights from Harambee DAO delivered to your inbox.
          </p>
        </div>

        <div className="bg-card border rounded-lg p-8">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-800">Thank you for subscribing! You'll receive our next newsletter soon.</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800">There was an error subscribing. Please try again.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="newsletter-email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="flex gap-3">
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isSubmitting || !email}>
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">What are you interested in? (Optional)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {interestOptions.map((option) => (
                  <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={interests.includes(option.id)}
                      onChange={() => handleInterestChange(option.id)}
                      className="rounded border-gray-300"
                    />
                    <span className="text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                By subscribing, you agree to receive emails from Harambee DAO. You can unsubscribe at any time. We
                respect your privacy and will never share your email.
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">2,500+</div>
                <div className="text-sm text-muted-foreground">Newsletter Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                <div className="text-sm text-muted-foreground">Update Frequency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">0%</div>
                <div className="text-sm text-muted-foreground">Spam Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
