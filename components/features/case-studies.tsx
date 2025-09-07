import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MapPin } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      title: "Nairobi Women's Chama",
      location: "Nairobi, Kenya",
      members: 45,
      savings: "$12,000",
      challenge: "Lost $3,600 to treasurer embezzlement in 2023",
      solution: "Implemented Harambee DAO with AI-verified microfinance projects",
      results: [
        "Zero embezzlement incidents in 8 months",
        "95% member participation in SMS voting",
        "Funded 12 verified small business projects",
        "Increased member trust and engagement",
      ],
      image: "/nairobi-chama-case-study.png",
    },
    {
      title: "Kisumu Farmers Collective",
      location: "Kisumu, Kenya",
      members: 120,
      savings: "$28,000",
      challenge: "Manual verification of crop planting delayed fund disbursement",
      solution: "AI satellite monitoring for real-time crop verification",
      results: [
        "Reduced verification time from 2 weeks to 12 hours",
        "98% accuracy in crop milestone detection",
        "Increased farming productivity by 35%",
        "Expanded to 3 additional farming communities",
      ],
      image: "/kisumu-farmers-case-study.png",
    },
    {
      title: "Mombasa Traders Association",
      location: "Mombasa, Kenya",
      members: 80,
      savings: "$18,500",
      challenge: "Complex governance decisions required in-person meetings",
      solution: "SMS-based voting system for inclusive decision making",
      results: [
        "Increased voting participation from 40% to 85%",
        "Reduced meeting costs by 70%",
        "Faster decision making on fund allocation",
        "Improved transparency in all transactions",
      ],
      image: "/mombasa-traders-case-study.png",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Real-World Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how communities across Kenya have transformed their savings groups with Harambee DAO
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="p-8 space-y-6 bg-card hover:shadow-lg transition-shadow">
              <img
                src={study.image || "/placeholder.svg?height=200&width=400"}
                alt={study.title}
                className="w-full h-48 object-cover rounded-lg"
              />

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-card-foreground">{study.title}</h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{study.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{study.members} members</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Challenge</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Solution</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Read Full Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
