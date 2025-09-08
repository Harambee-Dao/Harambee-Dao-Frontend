"use client"
import { ThemeProvider } from "next-themes"
import { Toaster } from "sonner"
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"
import { AuthProvider } from "./auth/AuthProvider"

export function AppProviders({ children }: PropsWithChildren) {
  const pathname = usePathname()
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AuthProvider>
        <Toaster richColors position="top-right" />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="min-h-screen"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </AuthProvider>
    </ThemeProvider>
  )
}




