"use client"
import { useCallback, useMemo, useState } from "react"
import { Bell } from "lucide-react"
import { usePoll } from "@/hooks/usePoll"
import api from "@/lib/api"

export function NotificationsBell() {
  const [open, setOpen] = useState(false)

  const fetcher = useCallback(async () => {
    const res = await api.get("/api/users/stats/notifications")
    return res.data as { id: string; type: string; message: string; createdAt: string }[]
  }, [])

  const { data } = usePoll({ fetcher, intervalMs: 7000, enabled: true })
  const count = data?.length ?? 0

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="relative rounded-full p-2 hover:bg-muted">
        <Bell className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] text-white">
            {count}
          </span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 rounded-md border bg-background p-2 shadow-xl">
          <div className="max-h-64 overflow-auto divide-y">
            {(data ?? []).map((n) => (
              <div key={n.id} className="p-2 text-sm">
                <div className="font-medium">{n.type}</div>
                <div className="text-muted-foreground">{n.message}</div>
                <div className="text-[10px] text-muted-foreground">{new Date(n.createdAt).toLocaleString()}</div>
              </div>
            ))}
            {count === 0 && <div className="p-4 text-sm text-muted-foreground">No notifications</div>}
          </div>
        </div>
      )}
    </div>
  )
}


