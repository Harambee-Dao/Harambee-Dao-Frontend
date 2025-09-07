import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const bodoni = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  weight: ["400", "600", "700"],
})

const helvetica = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-helvetica",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Harambee DAO - AI-Governed Collective Fund",
  description: "Stop embezzlement in community savings groups with AI-audited, multi-sig treasury and SMS governance",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${helvetica.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
