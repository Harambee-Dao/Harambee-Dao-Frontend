"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Camera, CheckCircle, AlertTriangle, Clock, Eye, Brain, Satellite, Cloud } from "lucide-react"

interface AuditResult {
  id: string
  status: "analyzing" | "approved" | "rejected" | "needs_review"
  confidence: number
  findings: string[]
  timestamp: Date
  milestone: string
  projectType: string
  location: string
}

export default function AIAuditorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [projectDetails, setProjectDetails] = useState({
    milestone: "",
    projectType: "",
    location: "",
    description: ""
  })

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      setAuditResult(null)
    }
  }

  const simulateAIAnalysis = async () => {
    if (!selectedFile || !projectDetails.milestone) return

    setIsAnalyzing(true)
    setAuditResult({
      id: `audit_${Date.now()}`,
      status: "analyzing",
      confidence: 0,
      findings: [],
      timestamp: new Date(),
      milestone: projectDetails.milestone,
      projectType: projectDetails.projectType,
      location: projectDetails.location
    })

    // Simulate analysis steps based on project type
    const analysisSteps = getAnalysisSteps(projectDetails.projectType)
    
    for (const step of analysisSteps) {
      await new Promise((resolve) => setTimeout(resolve, step.delay))
      setAuditResult((prev) =>
        prev
          ? {
              ...prev,
              findings: [...prev.findings, ...step.findings],
            }
          : null,
      )
    }

    // Final result
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const finalResult: AuditResult = {
      id: `audit_${Date.now()}`,
      status: Math.random() > 0.3 ? "approved" : "needs_review",
      confidence: Math.floor(Math.random() * 20) + 80, // 80-100%
      findings: [
        "Image quality assessment: Good",
        "Object detection: Project materials identified",
        "Progress verification: Milestone requirements met",
        "Compliance check: Safety standards verified",
        "Authenticity check: No manipulation detected",
        "Location verification: Matches project coordinates"
      ],
      timestamp: new Date(),
      milestone: projectDetails.milestone,
      projectType: projectDetails.projectType,
      location: projectDetails.location
    }

    setAuditResult(finalResult)
    setIsAnalyzing(false)
  }

  const getAnalysisSteps = (projectType: string) => {
    const baseSteps = [
      { delay: 1000, findings: ["Image quality assessment: Good"] },
      { delay: 1500, findings: ["Object detection: Project materials identified"] }
    ]

    switch (projectType.toLowerCase()) {
      case "agriculture":
      case "farming":
        return [
          ...baseSteps,
          { delay: 2000, findings: ["Crop analysis: Healthy growth detected"] },
          { delay: 2500, findings: ["NDVI assessment: Vegetation index normal"] },
          { delay: 3000, findings: ["Irrigation verification: Systems operational"] }
        ]
      case "construction":
      case "building":
        return [
          ...baseSteps,
          { delay: 2000, findings: ["Structural analysis: Foundation complete"] },
          { delay: 2500, findings: ["Progress assessment: 80% completion verified"] },
          { delay: 3000, findings: ["Safety compliance: Standards met"] }
        ]
      case "infrastructure":
      case "road":
        return [
          ...baseSteps,
          { delay: 2000, findings: ["Road condition: Surface quality good"] },
          { delay: 2500, findings: ["Progress measurement: Length verified"] },
          { delay: 3000, findings: ["Drainage check: Systems in place"] }
        ]
      default:
        return [
          ...baseSteps,
          { delay: 2000, findings: ["Progress verification: Milestone requirements met"] },
          { delay: 2500, findings: ["Compliance check: Standards verified"] }
        ]
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "analyzing":
        return <Clock className="h-5 w-5 text-blue-500 animate-spin" />
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "rejected":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "needs_review":
        return <Eye className="h-5 w-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "analyzing":
        return "border-blue-200 bg-blue-50"
      case "approved":
        return "border-green-200 bg-green-50"
      case "rejected":
        return "border-red-200 bg-red-50"
      case "needs_review":
        return "border-yellow-200 bg-yellow-50"
      default:
        return "border-gray-200 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-deep-green/5 to-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bodoni font-bold text-deep-green mb-4">AI Auditor</h1>
              <p className="text-xl text-deep-green/70 max-w-3xl mx-auto font-avenir">
                Upload project evidence and let our AI verify milestones using computer vision and satellite imagery analysis
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Upload Section */}
              <Card className="p-8 bg-ivory border border-khaki">
                <h2 className="text-2xl font-bodoni font-semibold text-deep-green mb-6">Submit Evidence</h2>

                <div className="space-y-6">
                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bodoni font-semibold text-deep-green">Project Information</h3>
                    
                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Milestone Description
                      </label>
                      <input
                        type="text"
                        value={projectDetails.milestone}
                        onChange={(e) => setProjectDetails({...projectDetails, milestone: e.target.value})}
                        placeholder="e.g., Corn planting complete on Plot A"
                        className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                          Project Type
                        </label>
                        <select 
                          value={projectDetails.projectType}
                          onChange={(e) => setProjectDetails({...projectDetails, projectType: e.target.value})}
                          className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory"
                        >
                          <option value="">Select type</option>
                          <option value="agriculture">Agriculture</option>
                          <option value="construction">Construction</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="education">Education</option>
                          <option value="health">Healthcare</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                          Location
                        </label>
                        <input
                          type="text"
                          value={projectDetails.location}
                          onChange={(e) => setProjectDetails({...projectDetails, location: e.target.value})}
                          placeholder="e.g., Nakuru, Kenya"
                          className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bodoni font-semibold text-deep-green mb-2">
                        Additional Details
                      </label>
                      <textarea
                        value={projectDetails.description}
                        onChange={(e) => setProjectDetails({...projectDetails, description: e.target.value})}
                        placeholder="Provide additional context about the milestone..."
                        rows={3}
                        className="w-full p-3 border border-khaki rounded-md focus:border-deep-green focus:outline-none font-avenir bg-ivory"
                      />
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="border-2 border-dashed border-khaki rounded-lg p-8 text-center">
                    {previewUrl ? (
                      <div className="space-y-4">
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="max-w-full h-48 object-cover mx-auto rounded-lg"
                        />
                        <p className="text-sm text-deep-green/70 font-avenir">{selectedFile?.name}</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Upload className="h-12 w-12 text-deep-green/50 mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-deep-green">Upload Project Evidence</p>
                          <p className="text-deep-green/70 font-avenir">Photos, satellite imagery, or documents for AI verification</p>
                        </div>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload">
                      <Button variant="outline" className="mt-4 cursor-pointer bg-transparent border-deep-green text-deep-green hover:bg-deep-green hover:text-ivory font-avenir">
                        <Camera className="h-4 w-4 mr-2" />
                        Choose File
                      </Button>
                    </label>
                  </div>

                  <Button 
                    onClick={simulateAIAnalysis} 
                    disabled={!selectedFile || !projectDetails.milestone || isAnalyzing} 
                    className="w-full bg-deep-green hover:bg-camel text-ivory font-avenir"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Brain className="h-4 w-4 mr-2" />
                        Start AI Analysis
                      </>
                    )}
                  </Button>
                </div>
              </Card>

              {/* Results Section */}
              <Card className="p-8 bg-ivory border border-khaki">
                <h2 className="text-2xl font-bodoni font-semibold text-deep-green mb-6">Analysis Results</h2>

                {!auditResult ? (
                  <div className="text-center py-12 text-deep-green/50">
                    <Eye className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="font-avenir">Upload an image and project details to see AI analysis results</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Status Header */}
                    <div className={`p-4 rounded-lg border ${getStatusColor(auditResult.status)}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(auditResult.status)}
                          <span className="font-bodoni font-semibold capitalize text-deep-green">
                            {auditResult.status.replace("_", " ")}
                          </span>
                        </div>
                        {auditResult.status !== "analyzing" && (
                          <span className="text-sm font-medium text-deep-green">{auditResult.confidence}% Confidence</span>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="bg-khaki/20 p-4 rounded-lg">
                      <h3 className="font-bodoni font-semibold text-deep-green mb-2">Project Details</h3>
                      <div className="space-y-1 text-sm font-avenir">
                        <div><span className="text-deep-green/70">Milestone:</span> {auditResult.milestone}</div>
                        <div><span className="text-deep-green/70">Type:</span> {auditResult.projectType}</div>
                        <div><span className="text-deep-green/70">Location:</span> {auditResult.location}</div>
                      </div>
                    </div>

                    {/* Analysis Progress */}
                    <div className="space-y-3">
                      <h3 className="font-bodoni font-semibold text-deep-green">Analysis Steps</h3>
                      <div className="space-y-2">
                        {auditResult.findings.map((finding, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-khaki/20 rounded-lg animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-avenir text-deep-green">{finding}</span>
                          </div>
                        ))}

                        {auditResult.status === "analyzing" && (
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                            <span className="text-sm text-blue-700 font-avenir">Processing...</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Final Verdict */}
                    {auditResult.status !== "analyzing" && (
                      <div className="pt-4 border-t border-khaki">
                        <h3 className="font-bodoni font-semibold text-deep-green mb-3">AI Verdict</h3>
                        <div
                          className={`p-4 rounded-lg ${
                            auditResult.status === "approved"
                              ? "bg-green-50 border border-green-200"
                              : "bg-yellow-50 border border-yellow-200"
                          }`}
                        >
                          <p className="text-sm font-avenir text-deep-green">
                            {auditResult.status === "approved"
                              ? "✅ Evidence verified successfully. Milestone requirements met. Funds can be released."
                              : "⚠️ Evidence requires human review. Some aspects need clarification before approval."}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-khaki/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bodoni font-bold text-deep-green text-center mb-12">How AI Auditing Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center bg-ivory border border-khaki">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-3">Evidence Submission</h3>
                <p className="text-deep-green/70 font-avenir">
                  Community members submit photos, satellite imagery, or documents as proof of project progress
                </p>
              </Card>

              <Card className="p-6 text-center bg-ivory border border-khaki">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-3">AI Analysis</h3>
                <p className="text-deep-green/70 font-avenir">
                  Computer vision algorithms verify authenticity, progress, and compliance with project requirements
                </p>
              </Card>

              <Card className="p-6 text-center bg-ivory border border-khaki">
                <div className="w-12 h-12 bg-deep-green/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-deep-green" />
                </div>
                <h3 className="text-xl font-bodoni font-semibold text-deep-green mb-3">Automated Approval</h3>
                <p className="text-deep-green/70 font-avenir">
                  Verified milestones trigger automatic fund release through smart contracts
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

