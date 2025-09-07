"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Chama Treasurer, Nairobi",
      content:
        "Before Harambee DAO, we lost 30% of our savings to embezzlement. Now our funds are completely secure and transparent. Every member can verify where their money goes.",
      rating: 5,
      image: "/african-woman-professional.png",
    },
    {
      name: "Samuel Ochieng",
      role: "Farmer Collective Leader, Kisumu",
      content:
        "The AI verification is incredible. It confirmed our crop planting from satellite images, and funds were released automatically. No more waiting for manual inspections.",
      rating: 5,
      image: "/african-farmer.png",
    },
    {
      name: "Mary Nyong",
      role: "Community Organizer, Mombasa",
      content:
        "SMS voting changed everything. Even our members with basic phones can participate in governance. Democracy has never been this accessible.",
      rating: 5,
      image: "/african-woman-community-leader.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">Trusted by Communities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from community leaders who transformed their savings groups
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="p-12 bg-card">
            <div className="text-center space-y-8">
              <div className="flex justify-center space-x-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              <blockquote className="text-2xl font-serif text-card-foreground leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-card-foreground">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full w-10 h-10 p-0 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
