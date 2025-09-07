"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, TrendingUp, Calendar } from "lucide-react"

export function CommunitySuccess() {
  const [selectedStory, setSelectedStory] = useState(0)

  const successStories = [
    {
      groupName: "Kibera Women's Collective",
      location: "Nairobi, Kenya",
      members: 35,
      founded: "2023",
      totalSaved: "$8,500",
      achievement: "Zero Embezzlement",
      story:
        "After losing $2,000 to embezzlement in 2022, our group was skeptical about trusting anyone with our money again. Harambee DAO changed everything. The AI verification gives us confidence that our projects are real, and SMS voting means everyone participates. We've funded 8 successful businesses with zero losses.",
      impact: [
        "8 businesses funded successfully",
        "35 women gained financial literacy",
        "100% transparency in all transactions",
        "Expanded to mentor 3 other groups",
      ],
      image: "/kibera-success-story.png",
    },
    {
      groupName: "Meru Farmers Cooperative",
      location: "Meru, Kenya",
      members: 120,
      founded: "2023",
      totalSaved: "$25,000",
      achievement: "95% Crop Success Rate",
      story:
        "Traditional farming cooperatives struggled with verifying crop progress and fair fund distribution. With satellite monitoring, we can see exactly when crops are planted and how they're growing. Funds are released automatically when milestones are met, eliminating disputes and delays.",
      impact: [
        "120 farmers using precision agriculture",
        "40% increase in crop yields",
        "Reduced verification time by 90%",
        "Expanded to 3 neighboring villages",
      ],
      image: "/meru-farmers-story.png",
    },
    {
      groupName: "Coastal Traders Network",
      location: "Mombasa, Kenya",
      members: 65,
      founded: "2024",
      totalSaved: "$15,200",
      achievement: "85% Participation Rate",
      story:
        "Our trading network spans multiple coastal towns, making in-person meetings impossible. SMS voting revolutionized our decision-making process. Now every trader, whether they have a smartphone or basic phone, can participate in governance decisions.",
      impact: [
        "65 traders across 5 coastal towns",
        "85% average voting participation",
        "12 trade route expansions funded",
        "Reduced meeting costs by 80%",
      ],
      image: "/coastal-traders-story.png",
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Community Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real communities, real results. See how Harambee DAO is transforming savings groups across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                selectedStory === index
                  ? "bg-primary/5 border-primary shadow-lg scale-105"
                  : "bg-card hover:shadow-md hover:scale-102"
              }`}
              onClick={() => setSelectedStory(index)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-serif font-bold text-card-foreground">{story.groupName}</h3>
                  <Badge className="bg-secondary/10 text-secondary">{story.achievement}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{story.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{story.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{story.totalSaved}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Since {story.founded}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-12 bg-card">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold text-card-foreground">
                  {successStories[selectedStory].groupName}
                </h3>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline">{successStories[selectedStory].location}</Badge>
                  <Badge className="bg-primary/10 text-primary">{successStories[selectedStory].achievement}</Badge>
                </div>
              </div>

              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                "{successStories[selectedStory].story}"
              </blockquote>

              <div className="space-y-3">
                <h4 className="font-semibold text-card-foreground">Key Impact:</h4>
                <ul className="space-y-2">
                  {successStories[selectedStory].impact.map((impact, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="bg-primary hover:bg-primary/90">Read Full Story</Button>
            </div>

            <div>
              <img
                src={successStories[selectedStory].image || "/placeholder.svg?height=400&width=600"}
                alt={successStories[selectedStory].groupName}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
