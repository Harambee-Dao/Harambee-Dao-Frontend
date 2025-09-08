export type User = {
  id: string
  name: string
  email: string
  phone: string
  kycStatus: "pending" | "verified" | "rejected"
}

export type Group = {
  id: string
  name: string
  treasuryBalance: number
  members: User[]
  latestProposals: Proposal[]
  transactions: { id: string; amount: number; to: string; createdAt: string; status: string }[]
}

export type Proposal = {
  id: string
  title: string
  description: string
  amount: number
  walletAddress: string
  imageUrl?: string
  aiVerification?: { status: string; details?: string }
  votes?: { yes: number; no: number }
}

export const state = {
  otpByPhone: new Map<string, string>(),
  users: new Map<string, User>(),
  currentUserPhone: "",
  kycDocUploaded: false,
  group: null as Group | null,
  proposals: new Map<string, Proposal>(),
  notifications: [] as { id: string; type: string; message: string; createdAt: string }[],
}

function init() {
  if (!state.group) {
    const user: User = {
      id: "u1",
      name: "Demo User",
      email: "demo@example.com",
      phone: "+254700000000",
      kycStatus: "pending",
    }
    state.users.set(user.phone, user)
    state.currentUserPhone = user.phone
    state.group = {
      id: "me",
      name: "Harambee Demo Group",
      treasuryBalance: 1250000,
      members: [user],
      latestProposals: [],
      transactions: [
        { id: "t1", amount: 50000, to: "0xRecipient1", createdAt: new Date().toISOString(), status: "executed" },
      ],
    }
  }
}

init()

export function randomId(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2, 8)}`
}


