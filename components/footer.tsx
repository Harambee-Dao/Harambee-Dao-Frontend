import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-deep-green text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bodoni font-bold">Harambee DAO</h3>
            <p className="text-ivory/80 leading-relaxed font-avenir">
              Securing community savings through AI-audited, blockchain-powered governance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-ivory hover:bg-ivory/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-ivory hover:bg-ivory/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-ivory hover:bg-ivory/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-ivory hover:bg-ivory/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bodoni font-semibold">Platform</h4>
            <ul className="space-y-2 text-ivory/80">
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bodoni font-semibold">Resources</h4>
            <ul className="space-y-2 text-ivory/80">
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bodoni font-semibold">Company</h4>
            <ul className="space-y-2 text-ivory/80">
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-ivory transition-colors font-avenir">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/20 mt-12 pt-8 text-center text-ivory/60">
          <p className="font-avenir">&copy; 2025 Harambee DAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
