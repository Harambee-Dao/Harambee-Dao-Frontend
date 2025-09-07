"use client"

import { useState, useMemo } from "react"
import { Search, BookOpen, Code, Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const resources = [
  {
    id: 1,
    title: "Getting Started Guide",
    type: "guide",
    category: "basics",
    description: "Complete setup guide for new communities",
  },
  {
    id: 2,
    title: "SMS API Reference",
    type: "api",
    category: "technical",
    description: "SMS governance system API documentation",
  },
  {
    id: 3,
    title: "AI Auditor SDK",
    type: "download",
    category: "technical",
    description: "SDK for integrating AI auditing capabilities",
  },
  {
    id: 4,
    title: "Community Onboarding",
    type: "interactive",
    category: "community",
    description: "Interactive tutorial for new members",
  },
  {
    id: 5,
    title: "Blockchain Integration",
    type: "guide",
    category: "technical",
    description: "How to integrate with our blockchain infrastructure",
  },
  {
    id: 6,
    title: "Governance Voting API",
    type: "api",
    category: "governance",
    description: "API for creating and managing proposals",
  },
]

export default function ResourceSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
      const matchesType = selectedType === "all" || resource.type === selectedType

      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchTerm, selectedCategory, selectedType])

  const getIcon = (type: string) => {
    switch (type) {
      case "guide":
        return <BookOpen className="h-5 w-5" />
      case "api":
        return <Code className="h-5 w-5" />
      case "download":
        return <Download className="h-5 w-5" />
      case "interactive":
        return <Play className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                <option value="all">All Categories</option>
                <option value="basics">Basics</option>
                <option value="technical">Technical</option>
                <option value="community">Community</option>
                <option value="governance">Governance</option>
              </select>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border rounded-md bg-background"
              >
                <option value="all">All Types</option>
                <option value="guide">Guides</option>
                <option value="api">API Docs</option>
                <option value="download">Downloads</option>
                <option value="interactive">Interactive</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getIcon(resource.type)}
                  <span className="text-sm font-medium text-primary capitalize">{resource.type}</span>
                </div>
                <span className="text-xs bg-muted px-2 py-1 rounded-full capitalize">{resource.category}</span>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <Button variant="outline" className="w-full bg-transparent">
                Access Resource
              </Button>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
