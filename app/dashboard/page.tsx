"use client"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const BG = "bg-gradient-to-br from-deep-green/10 via-camel/10 to-ivory"
const CARD_BG = "bg-white/90 border border-khaki rounded-xl shadow-lg"
const menu = ["Dashboard", "Treasury", "Proposals", "Community", "Profile", "Settings"]

export default function DashboardPage() {
  const [tab, setTab] = useState("Dashboard")

  return (
    <div className={`min-h-screen w-full ${BG} flex flex-col`}>
      <Navbar tab={tab} setTab={setTab} />
      <div className="flex flex-1 w-full">
        <Sidebar tab={tab} setTab={setTab} />
        <main className="flex-1 p-2 sm:p-4 md:p-8 flex justify-center items-start w-full">
          <AnimatePresence>
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.36 }}
              className="w-full"
            >
              {tab === "Dashboard" && <DashboardOverview />}
              {tab === "Treasury" && <TreasurySection />}
              {tab === "Proposals" && <ProposalsSection />}
              {tab === "Community" && <CommunitySection />}
              {tab === "Profile" && <ProfileSection />}
              {tab === "Settings" && <SettingsSection />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

function Navbar({ tab, setTab }: any) {
  return (
    <nav className={`w-full flex items-center justify-between px-6 py-2 ${CARD_BG} mb-2`}>
      <div className="flex items-center gap-3">
        <button onClick={() => setTab("Dashboard")} className="flex items-center gap-1 font-bodoni text-2xl text-deep-green"><span className="bg-deep-green text-ivory rounded-full w-8 h-8 flex items-center justify-center">H</span> Harambee DAO</button>
      </div>
      <div className="hidden md:flex gap-6">
        {menu.map(m => (
          <TabButton tab={tab} setTab={setTab} label={m} key={m} />
        ))}
      </div>
      <div className="flex items-center gap-6">
        <WalletStatus />
        <UserAvatar />
      </div>
    </nav>
  )
}
function TabButton({ tab, setTab, label }: any) {
  return <button onClick={() => setTab(label)} className={`font-semibold px-2 py-1 rounded ${tab===label ? "bg-camel/20 text-camel" : "text-deep-green hover:text-camel"}`}>{label}</button>
}
function WalletStatus() {
  return (
    <div className="px-3 py-1 rounded-full bg-camel/20 border border-camel text-camel text-sm font-mono flex items-center"><span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"/>0xF003...AB91</div>
  )
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
          <button className="px-4 py-2 hover:bg-khaki/30 text-left" onClick={()=>{}}>Profile</button>
          <button className="px-4 py-2 hover:bg-khaki/30 text-left" onClick={()=>{}}>Settings</button>
          <button className="px-4 py-2 hover:bg-khaki/30 text-left" onClick={()=>{}}>Logout</button>
        </div>
      )}
    </div>
  )
}
function Sidebar({ tab, setTab }: any) {
  return (
    <aside className={`hidden md:flex flex-col md:w-52 ${CARD_BG} md:mr-8 mt-6 rounded-lg`}>
      <nav className="flex flex-col gap-4 p-4">
        {menu.map(m => (
          <button key={m} className={`font-medium py-1 text-left ${tab===m?"text-camel":"text-deep-green hover:text-camel"}`} onClick={()=>setTab(m)}>{m}</button>
        ))}
      </nav>
    </aside>
  )
}
// --- Dashboard Overview/Welcome ---
function DashboardOverview() {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <WelcomeStatusCard />
      <TreasuryMiniWidget />
      <ProposalsMiniWidget />
      <CommunityMiniWidget />
      <UserContribCard />
      <NotificationsCard />
    </div>
  )
}

function WelcomeStatusCard() {
  return (
    <Card className={"p-6 " + CARD_BG}>
      <div className="text-lg font-semibold mb-2">Welcome back, Amina 👋</div>
      <div className="flex items-center gap-5 mb-3 text-sm">
        <span className="px-3 py-1 rounded-full text-white text-xs bg-green-600">✅ Verified</span>
        <span className="px-3 py-1 rounded-full bg-camel/20 text-camel font-mono">0xF003...AB91</span>
      </div>
      <div className="flex gap-2">
        <Button size="sm" className="bg-deep-green text-ivory">Deposit</Button>
        <Button size="sm" className="bg-camel text-deep-green">Withdraw</Button>
        <Button size="sm" className="bg-khaki text-deep-green">Create Proposal</Button>
      </div>
    </Card>
  )
}
function TreasuryMiniWidget() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <div className="flex justify-between items-center">
        <span className="font-semibold">💰 Treasury Overview</span>
        <span className="text-xs text-camel underline">Full Treasury &rarr;</span>
      </div>
      <div className="text-2xl font-bold text-deep-green">$12,540.00</div>
      <MiniPieChart />
      <div className="text-xs text-muted-foreground">Mini Transactions Feed</div>
      <ul className="text-sm mt-1">
        <li>Payout – Vendor – <span className="text-red-600">-$200</span></li>
        <li>Contribution – Amina – <span className="text-green-700">+$50</span></li>
      </ul>
    </Card>
  )
}
function MiniPieChart() {
  return (
    <div className="flex gap-3 items-center py-2">
      <span className="inline-block w-4 h-4 rounded-full bg-camel" /> 60%
      <span className="inline-block w-4 h-4 rounded-full bg-deep-green" /> 25%
      <span className="inline-block w-4 h-4 rounded-full bg-khaki" /> 15%
    </div>
  )
}
function ProposalsMiniWidget() {
  return (
    <Card className={"p-6 flex flex-col gap-2 " + CARD_BG}>
      <span className="font-semibold mb-2">🗳 Governance / Proposals</span>
      <div className="mb-2">
        <div className="font-bold">Solar Irrigation Project</div>
        <div className="text-xs text-camel">Voting ends in 2 days ⏳</div>
        <div className="text-sm">Votes: <span className="text-green-600">120 YES</span> / <span className="text-red-600">45 NO</span></div>
      </div>
      <div className="text-xs flex flex-col gap-1">
        <div>Proposal #12 – <span className="text-green-600">✅ Passed</span></div>
        <div>Proposal #11 – <span className="text-red-600">❌ Rejected</span></div>
      </div>
    </Card>
  )
}
function CommunityMiniWidget() {
  return (
    <Card className={"p-6 flex flex-col gap-2 " + CARD_BG}>
      <span className="font-semibold mb-2">👥 Community</span>
      <div className="text-lg font-bold mb-1">1,240 Members</div>
      <ul className="text-xs mt-1">
        <li>David joined – 3h ago</li>
        <li>Mary contributed 100 USDC – 1d ago</li>
      </ul>
    </Card>
  )
}
function UserContribCard() {
  return (
    <Card className={"p-6 flex flex-col gap-3 " + CARD_BG}>
      <span className="font-semibold mb-2">📊 Your Contribution & Voting Power</span>
      <div className="text-lg font-bold">$350 Contributed</div>
      <div className="text-sm">Voting Power: <span className="font-bold">3.2%</span></div>
      <div className="text-xs text-muted-foreground mt-2">You voted YES on Proposal #12.</div>
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

// ------ FULL SECTION CONTENT BELOW ------
function TreasurySection() {
  // Placeholder chart data
  const pieData = [
    { name: "USDC", value: 60, color: "#B49562" },
    { name: "ETH", value: 25, color: "#10624A" },
    { name: "BTC", value: 15, color: "#E7D5B4" }
  ];
  const lineData = [
    { date: "Aug 01", bal: 9000 },
    { date: "Aug 08", bal: 10500 },
    { date: "Aug 15", bal: 11500 },
    { date: "Aug 22", bal: 12000 },
    { date: "Aug 29", bal: 12540 },
  ];
  const txns = [
    { date: "Aug 26", member: "Amina", type: "Contribution", amount: "+$50", status: "✅ Completed", ref: "0x123..." },
    { date: "Aug 25", member: "Vendor", type: "Payout", amount: "-$200", status: "✅ Completed", ref: "0x456..." }
  ];

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
      <Card className={"p-6 mb-2 flex flex-col gap-3 " + CARD_BG}>
        <div className="text-3xl font-bold text-deep-green mb-1">$12,540.00</div>
        <div className="flex gap-6 items-center mb-7">
          <ResponsiveContainer width={100} height={100}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={45} innerRadius={22} >
                {pieData.map((d,i)=>(<Cell key={i} fill={d.color}/>))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <ul className="text-xs">
            {pieData.map(d => (
              <li key={d.name}><span className="inline-block w-2 h-2 rounded-full mr-2" style={{background: d.color}}></span>{d.name}: {d.value}%</li>
            ))}
          </ul>
        </div>
        <ResponsiveContainer width="100%" height={110}>
          <LineChart data={lineData} margin={{ left: 2, right:8, top:2, bottom:2 }}>
            <CartesianGrid strokeDasharray="3 2" stroke="#E7D5B4" />
            <XAxis dataKey="date" tickLine={false} axisLine={{stroke:'#B49562'}}/>
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="bal" stroke="#10624A" strokeWidth={2} dot={false} isAnimationActive={true}/>
          </LineChart>
        </ResponsiveContainer>
      </Card>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <Button className="bg-deep-green text-ivory">Contribute</Button>
        <Button className="bg-camel text-deep-green">Export to CSV/PDF</Button>
      </div>
      <Card className={"p-5 " + CARD_BG}>
        <div className="mb-3 font-semibold text-lg">Transaction History</div>
        <table className="w-full text-sm text-left border-t ">
          <thead>
            <tr className="text-xs text-muted-foreground">
              <th>Date</th><th>Member</th><th>Type</th><th>Amount</th><th>Status</th><th>Ref/Hash</th>
            </tr>
          </thead>
          <tbody>
            {txns.map((t,i) => (
              <tr key={i} className="border-b last:border-0">
                <td>{t.date}</td><td>{t.member}</td><td>{t.type}</td><td>{t.amount}</td><td>{t.status}</td><td>{t.ref}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}

function ProposalsSection() {
  // Demo state for proposal submission + mock AI verification
  const [step, setStep] = useState<'list'|'create'|'aiVerify'|'aiSuccess'>('list')
  const [aiStage, setAIStage] = useState(0)

  // Proposal list mock
  const proposals = [
    {
      id: 1,
      title: "Fund Solar Irrigation Project",
      description: "Support clean water for Village A",
      amount: "$1,000",
      status: "Voting",
      votes: { yes:120, no:45 },
      deadline: "2 days left",
      ai: "verified"
    },
    {
      id: 2,
      title: "Seed Distribution",
      description: "Provide seeds to 50 families.",
      amount: "$500",
      status: "Pending",
      votes: { yes:56, no:2 },
      deadline: "5 days left",
      ai: "pending"
    }
  ]

  function handleCreateProposal() {
    setStep('create')
  }
  function handleSubmitProposal() {
    setStep('aiVerify')
    setAIStage(0)
    setTimeout(()=>setAIStage(1), 1200)
    setTimeout(()=>setAIStage(2), 2200)
    setTimeout(()=>setStep('aiSuccess'), 3200)
  }

  // Render
  if (step==="list") {
    return (
      <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold">Active Proposals</span>
          <Button className="bg-deep-green text-ivory" onClick={handleCreateProposal}>Create Proposal</Button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {proposals.map(p => <ProposalCard key={p.id} {...p} />)}
        </div>
      </div>
    )
  } else if (step==="create") {
    return (
      <div className="max-w-2xl mx-auto w-full bg-white/75 rounded-lg shadow p-8 mt-6">
        <div className="text-xl font-bold mb-3">Create New Proposal</div>
        <form className="flex flex-col gap-3" onSubmit={e=>{e.preventDefault();handleSubmitProposal();}}>
          <label className="text-sm">Title
            <input type="text" className="w-full border rounded px-2 py-1 mt-1" required/></label>
          <label className="text-sm">Description
            <textarea className="w-full border rounded px-2 py-1 mt-1" rows={3} required></textarea></label>
          <label className="text-sm">Amount Requested (USD)
            <input type="number" className="w-full border rounded px-2 py-1 mt-1" min={1} required/></label>
          <label className="text-sm">Recipient Wallet Address
            <input type="text" className="w-full border rounded px-2 py-1 mt-1" required/></label>
          <label className="text-sm">Upload Attachment
            <input type="file" accept="image/*,.pdf" className="block w-full mt-1"/></label>
          <Button className="bg-deep-green text-ivory mt-3 w-fit" type="submit">Submit Proposal</Button>
        </form>
      </div>
    )
  } else if (step==="aiVerify") {
    const msgs = [
      { txt: "Verifying your submission with AI…", spinner: true },
      { txt: "Scanning uploaded file…", spinner: true },
      { txt: "Analyzing description and evidence…", spinner: true }
    ]
    return (
      <div className="flex flex-col items-center justify-center py-32 gap-7">
        <div className="text-xl font-medium">AI Verification in Progress</div>
        {msgs.map((m,i) => (
          <div key={i} className={`flex items-center gap-2 text-lg ${aiStage>=i?'opacity-100':'opacity-40'} transition-opacity`}>
            {m.spinner && <span className="w-5 h-5 rounded-full animate-spin border-2 border-dashed border-camel border-r-deep-green"></span>}
            {m.txt}
          </div>
        ))}
      </div>
    )
  } else if (step==="aiSuccess") {
    return (
      <div className="flex flex-col items-center justify-center py-28 gap-7">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}>
          <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#12b76a" strokeWidth="4" opacity="0.2" />
            <path d="M7 13l3 3 7-7" stroke="#15803d" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
        <div className="text-2xl font-bold text-success mb-2">AI verification complete ✅</div>
        <div>Your proposal is now live for voting.</div>
        <Button className="bg-camel text-deep-green" onClick={()=>setStep('list')}>Go to Proposals</Button>
      </div>
    )
  }
}
function ProposalCard({ title, description, amount, status, votes, deadline, ai }: any) {
  const badge = ai==='verified' ? '🟢 Verified by AI' : ai==='pending' ? '🟡 Pending AI verification' : '🔴 Failed AI verification';
  return (
    <Card className={"p-5 flex flex-col gap-2 "+CARD_BG}>
      <div className="flex justify-between items-center mb-0.5 font-bold">{title} <span className="text-xs" title="Verified using Google Vision & Groq AI analysis (mocked)">{badge}</span></div>
      <div className="text-xs mb-1">{description}</div>
      <div className="font-bold text-deep-green">{amount}</div>
      <div className="flex items-center gap-3">
        <span className="text-xs border rounded px-2 py-0.5 bg-camel/20 text-camel">{status}</span>
        {status === 'Voting' && <span className="text-xs">⏳ {deadline}</span>}
      </div>
      <div className="text-xs mb-2">Votes: <span className="text-green-700">YES {votes.yes}</span> / <span className="text-red-700">NO {votes.no}</span></div>
      <div className="flex gap-2">
        {status === "Voting" && (
          <>
            <Button size="sm" className="bg-deep-green text-ivory">Vote YES</Button>
            <Button size="sm" className="bg-khaki text-deep-green">Vote NO</Button>
          </>
        )}
        <Button size="sm" className="border border-khaki text-deep-green bg-white hover:bg-khaki/20">View Details</Button>
      </div>
    </Card>
  )
}
// --- Community/Profile/Settings Sections ---
function CommunitySection() {
  // Mock: show member directory + activity
  return <Card className={`p-6 flex flex-col gap-8 max-w-4xl mx-auto ${CARD_BG}`}><h2 className="font-bold text-xl mb-2">👥 Community</h2><div className="flex flex-col md:flex-row gap-8"><div className="flex-1"><div className="mb-2 font-semibold">Member Directory</div><ul className="flex flex-col gap-2"><li><span className="bg-deep-green text-ivory rounded-full w-7 h-7 inline-flex items-center justify-center mr-2">A</span> Amina <span className="text-xs ml-2 bg-green-300 px-2 rounded">Admin</span></li><li><span className="bg-camel rounded-full w-7 h-7 inline-flex items-center justify-center mr-2">D</span> David <span className="text-xs ml-2 bg-khaki px-2 rounded">Contributor</span></li></ul></div><div className="flex-1"><div className="mb-2 font-semibold">Activity Feed</div><ul className="text-sm flex flex-col gap-1"><li>Mary contributed 50 USDC.</li><li>David created Proposal #15.</li><li>Proposal #14 Passed.</li></ul><div className="flex gap-3 mt-3"><a href="#" className="text-camel underline">Telegram</a><a href="#" className="text-camel underline">Discord</a><a href="#" className="text-camel underline">WhatsApp</a></div></div></div></Card>
}
function ProfileSection() {
  return <Card className={`p-7 max-w-2xl mx-auto ${CARD_BG}`}><h2 className="font-bold text-xl mb-4">Profile</h2><div className="flex flex-col items-center"><div className="bg-deep-green text-ivory text-4xl w-20 h-20 rounded-full flex items-center justify-center mb-2">A</div><div className="font-semibold">Amina</div><div className="text-xs text-muted-foreground mb-2">amina@email.com · Kenya</div><Button className="bg-camel text-deep-green mb-5">Edit</Button><div className="w-full text-sm mb-3">Wallet: <span className="font-mono">0xF003...AB91</span></div><div className="w-full text-sm mb-3">Total contributed: $350 | Voting: 3.2%</div><Card className="bg-khaki/20 my-3 p-2 rounded">KYC: <span className="text-green-600 font-bold ml-1">Verified</span></Card><div className="border-t mt-3 pt-2 w-full"><div className="text-xs text-muted-foreground mb-2">Contribution History</div><table className="text-xs w-full"><thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead><tbody><tr><td>Aug 25</td><td>Contribution</td><td className="text-green-700">+50</td><td>✅</td></tr><tr><td>Aug 20</td><td>Payout</td><td className="text-red-700">-200</td><td>✅</td></tr></tbody></table></div><div className="border-t mt-3 pt-2 w-full"><div className="text-xs text-muted-foreground mb-2">Security</div><Button size="sm" className="bg-deep-green text-ivory">Enable 2FA</Button></div></div></Card>;
}
function SettingsSection() {
  return <Card className={`p-7 max-w-2xl mx-auto ${CARD_BG}`}><h2 className="font-bold text-xl mb-4">Settings</h2><div className="mb-4"><div className="font-semibold">Account Settings</div><div className="text-sm">Change your email, password, notification and preferences.</div></div><div className="mb-4"><div className="font-semibold">Appearance</div><div className="flex gap-5"><Button size="sm" className="bg-khaki text-deep-green">Light</Button><Button size="sm" className="bg-deep-green text-ivory">Dark</Button><Button size="sm" className="bg-camel text-deep-green">System</Button></div></div><div className="mb-4"><div className="font-semibold">Security</div><Button size="sm" className="bg-camel text-deep-green">Connect Wallet</Button></div><div className="mb-4"><div className="font-semibold">Danger Zone</div><Button size="sm" className="bg-red-700 text-white hover:bg-red-800">Delete Account</Button> <Button size="sm" className="border border-khaki text-deep-green bg-white hover:bg-khaki/20">Leave DAO</Button></div></Card>;
}
