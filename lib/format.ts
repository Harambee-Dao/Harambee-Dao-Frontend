export function formatNumberFixedLocale(value: number | string | null | undefined, options?: Intl.NumberFormatOptions) {
  const num = typeof value === "string" ? Number(value) : (value ?? 0)
  if (!Number.isFinite(num)) return "—"
  return new Intl.NumberFormat("en-US", options).format(num as number)
}

export function formatCurrencyKES(amount: number | string | null | undefined) {
  const num = typeof amount === "string" ? Number(amount) : (amount ?? 0)
  if (!Number.isFinite(num)) return "—"
  return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 2 }).format(num as number)
}


