"use client"

import { useState } from "react"
import { Play, CheckCircle, Clock, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const interactiveGuides = [
  {
    id: "setup",
    title: "Community Setup Walkthrough",
    description: "Interactive step-by-step guide to set up your first Harambee DAO community",
    duration: "15 minutes",
    difficulty: "Beginner",
    participants: "1,234",
    steps: [
      "Create community profile",
      "Add initial members",
      "Configure SMS settings",
      "Set up governance rules",
      "Create first proposal",
    ],
    completed: false,
  },
  {
    id: "governance",
    title: "Governance Simulation",
    description: "Practice creating proposals and managing votes in a safe environment",
    duration: "20 minutes",
    difficulty: "Intermediate",
    participants: "892",
    steps: [
      "Understanding proposal types",
      "Creating your first proposal",
      "Managing voting process",
      "Implementing decisions",
      "Handling disputes",
    ],
    completed: false,
  },
  {
    id: "ai-audit",
    title: "AI Auditor Training",
    description: "Learn how to submit evidence and work with our AI auditing system",
    duration: "12 minutes",
    difficulty: "Beginner",
    participants: "567",
    steps: [
      "Understanding audit requirements",
      "Preparing evidence",
      "Submitting for review",
      "Interpreting AI feedback",
      "Appeal process",
    ],
    completed: false,
  },
  {
    id: "integration",
    title: "API Integration Workshop",
    description: "Hands-on tutorial for integrating Harambee DAO APIs into your application",
    duration: "45 minutes",
    difficulty: "Advanced",
    participants: "234",
    steps: [
      "API authentication",
      "Making your first request",
      "Handling webhooks",
      "Error handling",
      "Production deployment",
    ],
    completed: false,
  },
]

export default function InteractiveGuides() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null)
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: number }>({})

  const startGuide = (guideId: string) => {
    setSelectedGuide(guideId)
    setCompletedSteps((prev) => ({ ...prev, [guideId]: 0 }))
  }

  const nextStep = (guideId: string) => {
    const guide = interactiveGuides.find((g) => g.id === guideId)
    if (!guide) return

    setCompletedSteps((prev) => {
      const currentStep = prev[guideId] || 0
      const nextStep = Math.min(currentStep + 1, guide.steps.length)
      return { ...prev, [guideId]: nextStep }
    })
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Interactive Learning Guides</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn by doing with our hands-on interactive tutorials and simulations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {interactiveGuides.map((guide) => {
            const currentStep = completedSteps[guide.id] || 0
            const isActive = selectedGuide === guide.id
            const isCompleted = currentStep >= guide.steps.length

            return (
              <div
                key={guide.id}
                className={`bg-card border rounded-lg p-6 transition-all ${isActive ? "ring-2 ring-primary" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                      {isCompleted ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <Play className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold">{guide.title}</h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span
                          className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(guide.difficulty)}`}
                        >
                          {guide.difficulty}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {guide.duration}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {guide.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{guide.description}</p>

                {isActive && (
                  <div className="mb-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {currentStep}/{guide.steps.length}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / guide.steps.length) * 100}%` }}
                      ></div>
                    </div>
                    <div className="space-y-2">
                      {guide.steps.map((step, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 text-sm ${
                            index < currentStep
                              ? "text-green-600"
                              : index === currentStep
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                          }`}
                        >
                          {index < currentStep ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : index === currentStep ? (
                            <div className="w-4 h-4 border-2 border-primary rounded-full"></div>
                          ) : (
                            <div className="w-4 h-4 border-2 border-muted rounded-full"></div>
                          )}
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {!isActive ? (
                    <Button onClick={() => startGuide(guide.id)} className="flex-1">
                      <Play className="h-4 w-4 mr-2" />
                      Start Guide
                    </Button>
                  ) : !isCompleted ? (
                    <Button onClick={() => nextStep(guide.id)} className="flex-1">
                      Next Step
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </Button>
                  )}
                  {isActive && (
                    <Button variant="outline" onClick={() => setSelectedGuide(null)}>
                      Close
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted/50 rounded-lg p-8">
            <h3 className="font-serif text-2xl font-semibold mb-4">Create Your Own Learning Path</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Not sure where to start? Take our quick assessment to get a personalized learning path tailored to your
              community's needs and technical expertise.
            </p>
            <Button size="lg">Take Assessment</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
