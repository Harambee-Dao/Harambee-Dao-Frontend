"use client"
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react"
import api from "@/lib/api"

type User = { id: string; name: string; kycStatus?: "pending" | "verified" | "rejected" }

type AuthContextType = {
  user: User | null
  loading: boolean
  refresh: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  async function refresh() {
    try {
      const res = await api.get("/api/users/me")
      setUser(res.data)
      if (res.data?.kycStatus) {
        document.cookie = `kyc_status=${res.data.kycStatus}; path=/`
      }
    } catch {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, refresh }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}


