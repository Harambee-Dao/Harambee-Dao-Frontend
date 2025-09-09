"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Lock, Eye, EyeOff, Wallet } from "lucide-react"

export default function login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [walletConnecting, setWalletConnecting] = useState(false)

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  async function onEmailLogin() {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address")
      return
    }
    
    if (!password) {
      alert("Please enter your password")
      return
    }

    setLoading(true)
    
    // Mock login - simulate API call
    setTimeout(() => {
      // Set mock auth cookie
      document.cookie = `auth_token=mock-email-token; path=/`
      document.cookie = `auth_method=email; path=/`
      
      setLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  async function onConnectWallet() {
    setWalletConnecting(true)
    
    // Mock wallet connection - simulate wallet connection flow
    setTimeout(() => {
      // Set mock auth cookie for wallet
      document.cookie = `auth_token=mock-wallet-token; path=/`
      document.cookie = `auth_method=wallet; path=/`
      document.cookie = `wallet_address=0x1234...5678; path=/`
      
      setWalletConnecting(false)
      router.push("/dashboard")
    }, 2000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      onEmailLogin()
    }
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
      
      <div className="relative mx-auto flex min-h-screen max-w-md items-center justify-center p-6">
        <Card className="w-full p-8 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          
          {/* Logo and Tagline */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Wallet size={28} />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1">DAO Treasury</h1>
            <p className="text-sm text-gray-600 font-medium">Secure Community Treasury</p>
          </div>

          {/* Email & Password Form */}
          <div className="space-y-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  className="pl-10 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  type="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  className="pl-10 pr-12 h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
                  type={showPassword ? "text" : "password"}
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  onKeyPress={handleKeyPress}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            
            <Button 
              disabled={loading || !email || !password} 
              className="w-full h-12 font-semibold bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-50 transition-all duration-200" 
              onClick={onEmailLogin}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login with Email"
              )}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-6 text-gray-500 font-medium">OR</span>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <Button
            onClick={onConnectWallet}
            disabled={walletConnecting}
            className="w-full h-16 text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:transform-none"
          >
            {walletConnecting ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Connecting Wallet...
              </div>
            ) : (
              <div className="flex items-center">
                <Wallet className="mr-3" size={24} />
                Connect Wallet
              </div>
            )}
          </Button>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">
              Forgot your password?
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-center text-xs text-gray-500 leading-relaxed">
              By logging in or connecting your wallet, you agree to our{" "}
              <a href="/terms" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/auth/register" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}