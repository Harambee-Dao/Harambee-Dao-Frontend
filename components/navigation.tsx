"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Layers, Shield, MessageCircle, Users, Book, Play, Eye } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/ai-auditor", label: "AI Auditor", icon: Eye },
  { href: "/governance", label: "Governance", icon: MessageCircle },
  { href: "/treasury", label: "Treasury", icon: Shield },
  { href: "/community", label: "Community", icon: Users },
  { href: "/resources", label: "Resources", icon: Book },
  { href: "/contact", label: "Contact", icon: MessageCircle },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: Floating Circular Nav */}
      <nav className="hidden md:flex fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-white/60 backdrop-blur-lg rounded-full shadow-lg px-8 py-4 flex items-center gap-12 border border-khaki/30">
        {/* Center Logo */}
        <div className="relative flex items-center justify-center">
          <div className="w-14 h-14 bg-deep-green rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bodoni font-bold text-ivory">H</span>
          </div>
          {/* Accent shape */}
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-camel/30 rounded-full blur-lg animate-float" />
        </div>
        {/* Circular arrangement */}
        <div className="flex items-center gap-8">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-1 group hover:scale-110 transition-transform"
            >
              <Icon className="h-6 w-6 text-camel group-hover:text-deep-green" />
              <span className="text-xs font-avenir text-deep-green group-hover:text-camel">{label}</span>
            </a>
          ))}
        </div>
        {/* CTA */}
        <div className="flex items-center gap-4 ml-8">
          <Button className="bg-deep-green hover:bg-camel text-ivory px-4 py-2 text-xs rounded-full">Get Started</Button>
        </div>
      </nav>

      {/* Mobile: Floating Bottom Nav */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg rounded-full shadow-lg px-6 py-2 flex items-center gap-6 border border-khaki/30">
        {navLinks.slice(0, 5).map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            className="flex flex-col items-center gap-0.5 group hover:scale-110 transition-transform"
          >
            <Icon className="h-6 w-6 text-camel group-hover:text-deep-green" />
          </a>
        ))}
        <button onClick={() => setOpen(true)} className="bg-deep-green rounded-full p-2 shadow text-ivory">
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile: Slide-up Panel for More */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <nav
            className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[90vw] bg-gradient-to-b from-ivory via-khaki/30 to-camel/40 shadow-xl py-8 px-6 rounded-t-3xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-deep-green rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-bodoni font-bold text-ivory">H</span>
                </div>
                <span className="text-lg font-bodoni font-bold text-deep-green">Harambee</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-deep-green hover:text-camel">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-camel/30 transition-all font-avenir text-deep-green"
                >
                  <Icon className="h-5 w-5 text-camel" />
                  <span className="font-medium">{label}</span>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <a href="/governance/proposal-demo" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-khaki/30 text-deep-green font-avenir">
                <Play className="h-4 w-4 text-camel" />
                Governance Demo
              </a>
              <a href="/ai-auditor-demo" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-khaki/30 text-deep-green font-avenir">
                <Eye className="h-4 w-4 text-camel" />
                AI Auditor Demo
              </a>
            </div>
            <Button className="mt-8 w-full bg-deep-green hover:bg-camel text-ivory">Get Started</Button>
          </nav>
        </div>
      )}
    </>
  )
}

export { Navigation }