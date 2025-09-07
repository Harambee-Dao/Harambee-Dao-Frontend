"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I set up Harambee DAO for my community?",
        answer:
          "Setting up Harambee DAO is straightforward. First, register your community through our onboarding process. You'll need to provide basic information about your group, including member count and savings goals. Our team will then guide you through the SMS setup, wallet creation, and initial governance configuration. The entire process typically takes 2-3 days.",
      },
      {
        question: "What are the minimum requirements to join?",
        answer:
          "Your community needs at least 5 active members, a basic mobile phone for each member (SMS capability), and a commitment to transparent financial practices. No smartphones or internet access required for members - everything works through SMS.",
      },
      {
        question: "How much does it cost to use Harambee DAO?",
        answer:
          "Harambee DAO charges a small transaction fee (typically 1-2%) on fund movements to cover blockchain costs and platform maintenance. There are no monthly fees or setup costs. We believe in making financial tools accessible to all communities.",
      },
    ],
  },
  {
    category: "Technical",
    questions: [
      {
        question: "How does the AI auditor work?",
        answer:
          "Our AI auditor uses computer vision and machine learning to verify project milestones. When members submit photos or documents as evidence, the AI analyzes them for authenticity, progress indicators, and compliance with stated goals. It can detect manipulated images, verify construction progress, and validate receipts or invoices.",
      },
      {
        question: "Is my community's data secure?",
        answer:
          "Yes, security is our top priority. All sensitive data is encrypted, financial transactions use multi-signature wallets, and evidence is stored on IPFS with blockchain anchoring. We never store private keys - your community maintains full control of funds through distributed key management.",
      },
      {
        question: "What happens if the AI makes a mistake?",
        answer:
          "The AI auditor is designed to flag uncertain cases for human review. Community members can always appeal AI decisions through our governance system. Additionally, the AI continuously learns from feedback to improve accuracy over time.",
      },
    ],
  },
  {
    category: "Governance",
    questions: [
      {
        question: "How does SMS voting work?",
        answer:
          'Members receive SMS messages with proposal details and voting instructions. They reply with simple commands like "YES" or "NO" along with their unique member ID. The system automatically tallies votes and ensures each member can only vote once per proposal.',
      },
      {
        question: "Can proposals be changed after submission?",
        answer:
          "Once a proposal enters the voting phase, it cannot be modified to ensure fairness. However, proposers can withdraw proposals before voting begins, and new amended proposals can be submitted for future consideration.",
      },
      {
        question: "What types of decisions require community votes?",
        answer:
          "Major decisions like fund allocation above certain thresholds, changes to community rules, adding/removing members, and selecting project beneficiaries all require community votes. Day-to-day operational decisions can be handled by designated administrators.",
      },
    ],
  },
]

export default function InteractiveFAQ() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-8">Find answers to common questions about Harambee DAO</p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="space-y-2">
                {category.questions.map((faq, faqIndex) => {
                  const itemId = `${categoryIndex}-${faqIndex}`
                  const isExpanded = expandedItems.includes(itemId)

                  return (
                    <div key={faqIndex} className="bg-card border rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleExpanded(itemId)}
                        className="w-full p-4 text-left hover:bg-muted/50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium pr-4">{faq.question}</span>
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="px-4 pb-4 border-t bg-muted/20">
                          <p className="text-muted-foreground pt-4">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  )
}
