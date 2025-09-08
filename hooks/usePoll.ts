"use client"
import { useEffect, useRef, useState } from "react"

export function usePoll<T>({
  fetcher,
  intervalMs = 5000,
  enabled = true,
}: {
  fetcher: () => Promise<T>
  intervalMs?: number
  enabled?: boolean
}) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const timer = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let cancelled = false
    async function run() {
      setLoading(true)
      try {
        const res = await fetcher()
        if (!cancelled) setData(res)
      } catch (e) {
        if (!cancelled) setError(e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    if (enabled) {
      run()
      timer.current = setInterval(run, intervalMs)
    }
    return () => {
      cancelled = true
      if (timer.current) clearInterval(timer.current)
    }
  }, [fetcher, intervalMs, enabled])

  return { data, error, loading }
}


