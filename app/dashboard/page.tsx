"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MAIN_BG = "bg-gradient-to-br from-deep-green/10 via-camel/10 to-ivory";
const CARD_BG = "bg-white/90 border border-khaki rounded-xl shadow-lg";

const walletAddress = "0xF003...AB91";
const userName = "Amina";
const kycStatus = "Verified"; // Can be "Pending", "Not Started"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const widgets = [
    <WelcomeStatusCard key="welcome" />, <TreasuryCard key="treasury" />, <ProposalsCard key="proposals" />,
    <CommunityCard key="community" />, <UserContribCard key="usercontrib" />, <NotificationsCard key="notifs" />
  ];
  return (
    <div className={`min-h-screen w-full ${MAIN_BG} flex flex-col`}>    
      <Navbar />
      <div className="flex flex-1">
        <Sidebar show={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {widgets}
          </div>
        </main>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 ${CARD_BG} mb-2">
      <div className="flex items-center gap-3">
        <a href="/" className="flex items-center gap-1 font-bodoni text-2xl text-deep-green"><span className="bg-deep-green text-ivory rounded-full w-8 h-8 flex items-center justify-center">H</span> Harambee DAO</a>
      </div>
      <div className="hidden md:flex gap-6">
        <NavLink href="/dashboard" label="Dashboard" />
        <NavLink href="/dashboard/treasury" label="Treasury" />
        <NavLink href="/proposals" label="Proposals" />
        <NavLink href="/community" label="Community" />
      </div>
      <div className="flex items-center gap-6">
        <WalletStatus />
        <UserAvatar />
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string, label: string }) {
  return <a href={href} className="font-semibold text-deep-green hover:text-camel px-2 py-1 rounded transition">{label}</a>;
}

function WalletStatus() {
  // Demo: always connected
  return (
    <div className="px-3 py-1 rounded-full bg-camel/20 border border-camel text-camel text-sm font-mono flex items-center">
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"/> {walletAddress}
    </div>
  );
}

function UserAvatar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button className="flex items-center gap-2" onClick={() => setOpen(v => !v)}>
        <span className="inline-block bg-deep-green text-ivory w-9 h-9 rounded-full flex items-center justify-center font-bold">A</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 bg-white border border-khaki shadow rounded z-40 min-w-[150px] flex flex-col">
          <a href="/profile" className="px-4 py-2 hover:bg-khaki/30">Profile</a>
          <a href="/settings" className="px-4 py-2 hover:bg-khaki/30">Settings</a>
          <a href="/logout" className="px-4 py-2 hover:bg-khaki/30">Logout</a>
        </div>
      )}
    </div>
  );
}

function Sidebar({ show, onClose }: { show: boolean, onClose: () => void }) {
  return (
    <aside className={`hidden md:flex flex-col w-52 ${CARD_BG} mr-8 mt-6 rounded-lg`}>
      <nav className="flex flex-col gap-4 p-4">
        <SidebarLink href="/dashboard" label="Dashboard" />
        <SidebarLink href="/dashboard/treasury" label="Treasury" />
        <SidebarLink href="/proposals" label="Governance\/Proposals" />
        <SidebarLink href="/community" label="Community" />
        <SidebarLink href="/profile" label="Profile" />
        <SidebarLink href="/settings" label="Settings" />
      </nav>
    </aside>
  )
}

function SidebarLink({ href, label }: { href: string, label: string }) {
  return <a href={href} className="font-medium text-deep-green hover:text-camel py-1">{label}</a>;
}

function WelcomeStatusCard() {
  return (
    <Card className={"p-6 " + CARD_BG}>
      <div className="text-lg font-semibold mb-2">Welcome back, {userName} 👋</div>
      <div className="flex items-center gap-5 mb-3 text-sm">
        <span className={"px-3 py-1 rounded-full text-white text-xs " + (kycStatus==="Verified" ? "bg-green-600" : kycStatus==="Pending" ? "bg-yellow-500" : "bg-gray-400")}>{kycStatus === "Verified" ? "✅ Verified" : kycStatus === "Pending" ? "⚠️ Pending" : "❌ Not Started"}</span>
        <span className="px-3 py-1 rounded-full bg-camel/20 text-camel font-mono">{walletAddress}</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="bg-deep-green text-ivory">Deposit</Button>
        <Button size="sm" className="bg-camel text-deep-green">Withdraw</Button>
        <Button size="sm" className="bg-khaki text-deep-green">Create Proposal</Button>
      </div>
    </Card>
  );
}

function TreasuryCard() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <div className="flex justify-between items-center">
        <span className="font-semibold">💰 Treasury Overview</span>
        <a className="text-sm underline text-camel" href="/dashboard/treasury">View Full Treasury</a>
      </div>
      <div className="text-2xl font-bold text-deep-green">$12,540.00</div>
      <PieChart />
      <div>
        <div className="text-xs text-muted-foreground">Mini Transactions Feed</div>
        <ul className="text-sm mt-1">
          <li>Aug 26 – Payout – Vendor – <span className="text-red-600">-$200</span> – ✅ Completed</li>
          <li>Aug 25 – Contribution – Amina – <span className="text-green-700">+$50</span> – ✅ Completed</li>
        </ul>
      </div>
    </Card>
  );
}

function PieChart() {
  // Not functional, illustrative only
  return (
    <div className="flex gap-2 items-center py-2">
      <span className="inline-block w-5 h-5 rounded-full bg-camel" title="USDC"/> 60%
      <span className="inline-block w-5 h-5 rounded-full bg-deep-green" title="ETH"/> 25%
      <span className="inline-block w-5 h-5 rounded-full bg-khaki" title="BTC"/> 15%
    </div>
  )
}

function ProposalsCard() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <span className="font-semibold mb-2">🗳 Governance / Proposals</span>
      <div className="mb-2">
        <div className="font-bold">Fund Solar Irrigation Project</div>
        <div className="text-xs text-camel">Voting ends in 2 days ⏳</div>
        <div className="text-sm">Votes: <span className="text-green-600">120 YES</span> / <span className="text-red-600">45 NO</span></div>
        <div className="flex gap-2 mt-2">
          <Button size="sm" className="bg-deep-green text-ivory">Vote Now</Button>
          <Button size="sm" variant="outline">View Details</Button>
        </div>
      </div>
      <div className="text-xs text-muted-foreground mt-3 border-t pt-2">Past Proposals:</div>
        <div className="text-xs flex flex-col gap-1">
          <div>Proposal #12 – <span className="text-green-600">✅ Passed</span></div>
          <div>Proposal #11 – <span className="text-red-600">❌ Rejected</span></div>
        </div>
    </Card>
  )
}

function CommunityCard() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <span className="font-semibold mb-2">👥 Community Snapshot</span>
      <div className="text-lg font-bold mb-1">1,240 Members</div>
      <div className="border-b pb-2 text-xs">Recent Activity Feed:</div>
      <ul className="flex-1 text-sm mt-1">
        <li>David joined Harambee DAO – 3h ago</li>
        <li>Mary contributed 100 USDC – 1d ago</li>
      </ul>
      <div className="flex gap-2 mt-1">
        <a href="#" className="text-camel underline">Telegram</a>
        <a href="#" className="text-camel underline">Discord</a>
      </div>
    </Card>
  )
}

function UserContribCard() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <span className="font-semibold mb-2">📊 Your Contribution & Voting Power</span>
      <div className="text-lg font-bold">Total contributed: $350</div>
      <div className="text-sm">Voting Power: <span className="font-bold">3.2%</span></div>
      <div className="text-xs text-muted-foreground mt-2">Last action: You voted YES on Proposal #12.</div>
    </Card>
  )
}

function NotificationsCard() {
  return (
    <Card className={"p-6 flex flex-col gap-2 " + CARD_BG}>
      <span className="font-semibold mb-1">🔔 Notifications</span>
      <ul className="text-sm flex flex-col gap-1">
        <li><span className="text-green-600 font-bold">Proposal #14 Passed 🎉</span></li>
        <li>Treasury received 500 USDC.</li>
        <li>KYC verification approved.</li>
      </ul>
      <Button size="sm" className="mt-3 bg-deep-green text-ivory self-start">View All Notifications</Button>
    </Card>
  )
}
