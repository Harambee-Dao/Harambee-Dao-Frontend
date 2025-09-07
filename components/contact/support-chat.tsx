"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, MessageCircle, X, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const botResponses = [
  "Hello! I'm here to help you with any questions about Harambee DAO. How can I assist you today?",
  "That's a great question! Let me connect you with our technical team for detailed information.",
  "I'd be happy to help you get started. Would you like me to schedule a demo for your community?",
  "For complex technical questions, I recommend checking our API documentation or contacting our development team.",
  "Thank you for your interest in Harambee DAO! Is there anything specific about our governance system you'd like to know?",
]

export default function SupportChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm the Harambee DAO support assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Live Support Chat</h2>
          <p className="text-xl text-muted-foreground">Get instant answers to your questions from our support team</p>
        </div>

        {/* Chat Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          {!isOpen && (
            <Button onClick={() => setIsOpen(true)} className="rounded-full h-14 w-14 shadow-lg">
              <MessageCircle className="h-6 w-6" />
            </Button>
          )}

          {isOpen && (
            <div className="bg-card border rounded-lg shadow-xl w-80 h-96 flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <span className="font-medium">Harambee Support</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chat Demo Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border rounded-lg p-6">
            <h3 className="font-serif text-2xl font-semibold mb-4">Try Our Live Chat</h3>
            <p className="text-muted-foreground mb-6">
              Our support chat is available 24/7 to help with technical questions, onboarding assistance, and general
              inquiries. Click the chat button in the bottom right to get started.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                <MessageCircle className="h-5 w-5 text-primary" />
                <span className="text-sm">Instant responses</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                <Bot className="h-5 w-5 text-primary" />
                <span className="text-sm">AI-powered assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
