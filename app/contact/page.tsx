import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import InteractiveFAQ from "@/components/contact/interactive-faq"
import SupportChat from "@/components/contact/support-chat"
import NewsletterSignup from "@/components/contact/newsletter-signup"
import ContactInfo from "@/components/contact/contact-info"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <InteractiveFAQ />
        <SupportChat />
        <NewsletterSignup />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
