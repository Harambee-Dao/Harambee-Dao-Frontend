"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  MessageSquare, 
  CheckCircle, 
  Loader2,
  Smartphone,
  Send
} from "lucide-react"

export default function SMSDemo() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState("")

  const handleSendSMS = async () => {
    if (!phoneNumber.trim()) {
      setError("Please enter a phone number")
      return
    }

    // Basic phone number validation
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
    if (!phoneRegex.test(phoneNumber)) {
      setError("Please enter a valid phone number")
      return
    }

    setIsSending(true)
    setError("")

    try {
      const response = await fetch('/api/sms-demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber: phoneNumber.trim() }),
      })

      if (response.ok) {
        setIsSent(true)
        setPhoneNumber("")
      } else {
        const errorData = await response.json()
        setError(errorData.error || "Failed to send SMS")
      }
    } catch (error) {
      setError("Network error. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const resetDemo = () => {
    setIsSent(false)
    setError("")
    setPhoneNumber("")
  }

  return (
    <section className="py-16 bg-gradient-to-br from-khaki/20 to-camel/20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bodoni font-bold text-deep-green mb-4">
            Experience SMS Governance
          </h2>
          <p className="text-lg text-deep-green/70 font-avenir">
            See how Harambee enables voting via SMS - even with basic feature phones. 
            Enter your number to receive a demo message.
          </p>
        </div>

        <Card className="p-8 bg-ivory border border-khaki shadow-xl">
          {!isSent ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-deep-green/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-deep-green" />
                </div>
                <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
                  Receive Demo SMS
                </h3>
                <p className="text-deep-green/70 font-avenir">
                  Get a real SMS showing how community members vote on proposals
                </p>
              </div>

              <div>
                <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="text-lg p-4 border-khaki focus:border-deep-green font-avenir"
                  disabled={isSending}
                />
                <p className="text-xs text-deep-green/50 mt-2 font-avenir">
                  Include country code (e.g., +1 for US, +254 for Kenya)
                </p>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-3 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-600 text-sm font-avenir">{error}</p>
                </motion.div>
              )}

              <Button
                onClick={handleSendSMS}
                disabled={isSending || !phoneNumber.trim()}
                className="w-full bg-deep-green hover:bg-camel text-ivory py-4 text-lg font-avenir"
              >
                {isSending ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending SMS...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Demo SMS
                  </>
                )}
              </Button>

              <div className="text-center">
                <p className="text-sm text-deep-green/60 font-avenir">
                  This sends a real SMS using Twilio. Standard messaging rates may apply.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>

              <div>
                <h3 className="text-2xl font-bodoni font-bold text-deep-green mb-2">
                  SMS Sent Successfully!
                </h3>
                <p className="text-deep-green/70 font-avenir">
                  Check your phone for a message from Harambee DAO. 
                  This demonstrates how community members receive and respond to governance proposals.
                </p>
              </div>

              <div className="bg-khaki/20 p-4 rounded-lg">
                <h4 className="font-bodoni font-semibold text-deep-green mb-2">
                  Sample Message Content:
                </h4>
                <p className="text-sm text-deep-green/70 font-avenir leading-relaxed">
                  "Harambee DAO Demo: Thank you for experiencing our prototype. 
                  Your vote to approve the 'Nakuru Corn Farm' project has been recorded. 
                  This is how we empower communities. Reply YES to approve, NO to reject."
                </p>
              </div>

              <Button
                onClick={resetDemo}
                className="bg-deep-green hover:bg-camel text-ivory font-avenir"
              >
                Send Another SMS
              </Button>
            </motion.div>
          )}
        </Card>

        {/* Feature highlights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-ivory rounded-lg border border-khaki">
            <MessageSquare className="w-8 h-8 text-deep-green mx-auto mb-2" />
            <h4 className="font-bodoni font-semibold text-deep-green mb-1">Universal Access</h4>
            <p className="text-sm text-deep-green/70 font-avenir">Works with any phone, no app required</p>
          </div>
          <div className="text-center p-4 bg-ivory rounded-lg border border-khaki">
            <CheckCircle className="w-8 h-8 text-deep-green mx-auto mb-2" />
            <h4 className="font-bodoni font-semibold text-deep-green mb-1">Secure Voting</h4>
            <p className="text-sm text-deep-green/70 font-avenir">Blockchain-verified vote recording</p>
          </div>
          <div className="text-center p-4 bg-ivory rounded-lg border border-khaki">
            <Smartphone className="w-8 h-8 text-deep-green mx-auto mb-2" />
            <h4 className="font-bodoni font-semibold text-deep-green mb-1">Real-time Results</h4>
            <p className="text-sm text-deep-green/70 font-avenir">Instant vote counting and updates</p>
          </div>
        </div>
      </div>
    </section>
  )
}
