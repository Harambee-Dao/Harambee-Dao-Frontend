"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/proposals/create",
    description: "Create a new governance proposal",
    parameters: [
      { name: "title", type: "string", required: true, description: "Proposal title" },
      { name: "description", type: "string", required: true, description: "Detailed description" },
      { name: "votingPeriod", type: "number", required: true, description: "Voting period in days" },
    ],
    example: `{
  "title": "Increase community fund allocation",
  "description": "Proposal to increase monthly allocation by 10%",
  "votingPeriod": 7
}`,
  },
  {
    method: "GET",
    endpoint: "/api/proposals",
    description: "Get all active proposals",
    parameters: [
      { name: "status", type: "string", required: false, description: "Filter by status (active, completed, pending)" },
      { name: "limit", type: "number", required: false, description: "Number of results to return" },
    ],
    example: `{
  "proposals": [
    {
      "id": "prop_123",
      "title": "Community fund allocation",
      "status": "active",
      "votes": { "yes": 45, "no": 12 }
    }
  ]
}`,
  },
  {
    method: "POST",
    endpoint: "/api/audit/submit",
    description: "Submit evidence for AI auditing",
    parameters: [
      { name: "projectId", type: "string", required: true, description: "Project identifier" },
      { name: "evidence", type: "file", required: true, description: "Image or document evidence" },
      { name: "milestone", type: "string", required: true, description: "Milestone being verified" },
    ],
    example: `{
  "projectId": "proj_456",
  "milestone": "construction_phase_1",
  "evidenceUrl": "https://ipfs.io/ipfs/QmHash..."
}`,
  },
]

export default function APIDocumentation() {
  const [expandedEndpoint, setExpandedEndpoint] = useState<number | null>(null)
  const [copiedExample, setCopiedExample] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedExample(index)
    setTimeout(() => setCopiedExample(null), 2000)
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-green-100 text-green-800 border-green-200"
      case "POST":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "PUT":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "DELETE":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">API Documentation</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive API documentation with live examples and testing capabilities.
          </p>
        </div>

        <div className="space-y-4">
          {apiEndpoints.map((endpoint, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden">
              <div
                className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setExpandedEndpoint(expandedEndpoint === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getMethodColor(endpoint.method)}`}
                    >
                      {endpoint.method}
                    </span>
                    <code className="font-mono text-sm bg-muted px-2 py-1 rounded">{endpoint.endpoint}</code>
                    <span className="text-muted-foreground">{endpoint.description}</span>
                  </div>
                  {expandedEndpoint === index ? (
                    <ChevronDown className="h-5 w-5" />
                  ) : (
                    <ChevronRight className="h-5 w-5" />
                  )}
                </div>
              </div>

              {expandedEndpoint === index && (
                <div className="border-t bg-muted/20 p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Parameters</h4>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <div key={paramIndex} className="flex items-start gap-3 p-3 bg-background rounded border">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <code className="font-mono text-sm font-medium">{param.name}</code>
                                <span className="text-xs bg-muted px-2 py-1 rounded">{param.type}</span>
                                {param.required && (
                                  <span className="text-xs bg-destructive/10 text-destructive px-2 py-1 rounded">
                                    required
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{param.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">Example Response</h4>
                        <Button variant="outline" size="sm" onClick={() => copyToClipboard(endpoint.example, index)}>
                          {copiedExample === index ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                      <pre className="bg-background border rounded p-4 text-sm overflow-x-auto">
                        <code>{endpoint.example}</code>
                      </pre>
                      <div className="mt-4">
                        <Button className="w-full">Try API Call</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
