"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { 
  Brain, 
  MapPin, 
  Satellite, 
  Cloud, 
  CheckCircle, 
  XCircle, 
  Loader2,
  ArrowRight,
  RefreshCw
} from "lucide-react"

interface SimulationStep {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  duration: number
}

interface SimulationResult {
  approved: boolean
  score: number
  reason: string
}

export default function TrustSimulator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<SimulationResult | null>(null)
  const [showResult, setShowResult] = useState(false)

  const steps: SimulationStep[] = [
    {
      id: 1,
      title: "Project Input",
      description: "Enter your project details",
      icon: Brain,
      duration: 2000
    },
    {
      id: 2,
      title: "Data Gathering",
      description: "Collecting satellite imagery, weather data, and market analysis",
      icon: Satellite,
      duration: 3000
    },
    {
      id: 3,
      title: "AI Analysis",
      description: "Processing data through our verification algorithms",
      icon: Cloud,
      duration: 2500
    },
    {
      id: 4,
      title: "Trust Score",
      description: "Generating final verification result",
      icon: CheckCircle,
      duration: 1500
    }
  ]

  const handleSubmit = async () => {
    if (!userInput.trim()) return
    
    setIsProcessing(true)
    setCurrentStep(1)
    setResult(null)
    setShowResult(false)

    // Simulate step progression
    for (let i = 1; i <= steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, steps[i - 1].duration))
      setCurrentStep(i)
    }

    // Call API for result
    try {
      const response = await fetch('/api/simulate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      })
      
      const data = await response.json()
      setResult(data)
      setShowResult(true)
    } catch (error) {
      // Fallback result for demo
      setResult({
        approved: Math.random() > 0.3,
        score: Math.floor(Math.random() * 30) + 70,
        reason: "Based on satellite imagery analysis and market conditions, this project shows strong viability for success."
      })
      setShowResult(true)
    }
    
    setIsProcessing(false)
  }

  const resetSimulation = () => {
    setCurrentStep(0)
    setUserInput("")
    setIsProcessing(false)
    setResult(null)
    setShowResult(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-ivory to-khaki/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bodoni font-bold text-deep-green mb-4">
            Trust Simulator
          </h2>
          <p className="text-xl text-deep-green/70 font-avenir max-w-2xl mx-auto">
            Experience how Harambee's AI verifies projects in real-time. 
            Enter a project and watch our system analyze it step by step.
          </p>
        </div>

        <Card className="p-8 bg-ivory border border-khaki shadow-xl">
          {/* Input Section */}
          {currentStep === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-lg font-bodoni font-semibold text-deep-green mb-3">
                  Enter Your Project
                </label>
                <Input
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="e.g., Plant corn in Nakuru, Kenya"
                  className="text-lg p-4 border-khaki focus:border-deep-green font-avenir"
                  disabled={isProcessing}
                />
              </div>
              <Button
                onClick={handleSubmit}
                disabled={!userInput.trim() || isProcessing}
                className="w-full bg-deep-green hover:bg-camel text-ivory py-4 text-lg font-avenir"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Start Verification
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </motion.div>
          )}

          {/* Processing Steps */}
          {currentStep > 0 && currentStep <= steps.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: isActive || isCompleted ? 1 : 0.5,
                        scale: isActive ? 1.05 : 1
                      }}
                      className={`relative p-4 rounded-lg border-2 transition-all duration-500 ${
                        isActive 
                          ? 'border-deep-green bg-deep-green/10 shadow-lg' 
                          : isCompleted 
                            ? 'border-camel bg-camel/20' 
                            : 'border-khaki bg-khaki/10'
                      }`}
                    >
                      <div className="text-center space-y-3">
                        <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center ${
                          isActive 
                            ? 'bg-deep-green text-ivory animate-pulse' 
                            : isCompleted 
                              ? 'bg-camel text-deep-green' 
                              : 'bg-khaki text-deep-green/50'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`font-bodoni font-semibold ${
                            isActive ? 'text-deep-green' : isCompleted ? 'text-deep-green' : 'text-deep-green/50'
                          }`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm font-avenir ${
                            isActive ? 'text-deep-green/80' : isCompleted ? 'text-deep-green/70' : 'text-deep-green/40'
                          }`}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-1 bg-deep-green rounded-b-lg"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: step.duration / 1000, ease: "linear" }}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Current step details */}
              {currentStep <= steps.length && (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-center p-6 bg-khaki/20 rounded-lg"
                >
                  <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-2">
                    {steps[currentStep - 1]?.title}
                  </h3>
                  <p className="text-deep-green/70 font-avenir">
                    {steps[currentStep - 1]?.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Result Section */}
          <AnimatePresence>
            {showResult && result && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center space-y-6"
              >
                <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center ${
                  result.approved 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-red-100 text-red-600'
                }`}>
                  {result.approved ? (
                    <CheckCircle className="w-12 h-12" />
                  ) : (
                    <XCircle className="w-12 h-12" />
                  )}
                </div>

                <div>
                  <h3 className={`text-3xl font-bodoni font-bold mb-2 ${
                    result.approved ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {result.approved ? 'APPROVED' : 'REJECTED'}
                  </h3>
                  <div className="text-2xl font-bodoni font-semibold text-deep-green mb-4">
                    Trust Score: {result.score}%
                  </div>
                  <p className="text-lg text-deep-green/70 font-avenir max-w-2xl mx-auto">
                    {result.reason}
                  </p>
                </div>

                <Button
                  onClick={resetSimulation}
                  className="bg-deep-green hover:bg-camel text-ivory font-avenir"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Another Project
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>

        {/* Demo Info */}
        <div className="mt-8 text-center">
          <p className="text-deep-green/60 font-avenir">
            This is a simulation. In production, Harambee's AI analyzes real satellite imagery, 
            weather data, and market conditions to verify project viability.
          </p>
        </div>
      </div>
    </section>
  )
}
