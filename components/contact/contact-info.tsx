import { MapPin, Phone, Mail, Clock, Globe, MessageSquare } from "lucide-react"

export default function ContactInfo() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Other Ways to Reach Us</h2>
          <p className="text-xl text-muted-foreground">Choose the communication method that works best for you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-muted-foreground mb-4">Send us detailed questions and we'll respond within 24 hours</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>General:</strong> hello@harambeedao.org
              </p>
              <p>
                <strong>Technical:</strong> support@harambeedao.org
              </p>
              <p>
                <strong>Partnerships:</strong> partners@harambeedao.org
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp Support</h3>
            <p className="text-muted-foreground mb-4">Quick questions and real-time support via WhatsApp</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Kenya:</strong> +254 700 123 456
              </p>
              <p>
                <strong>Nigeria:</strong> +234 800 123 456
              </p>
              <p>
                <strong>Ghana:</strong> +233 200 123 456
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-muted-foreground mb-4">Speak directly with our team for complex inquiries</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Main:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Technical:</strong> +1 (555) 123-4568
              </p>
              <p>
                <strong>Hours:</strong> 9 AM - 6 PM EAT
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Office Locations</h3>
            <p className="text-muted-foreground mb-4">Visit us in person for in-depth consultations</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Nairobi:</strong> Westlands, Kenya
              </p>
              <p>
                <strong>Lagos:</strong> Victoria Island, Nigeria
              </p>
              <p>
                <strong>Accra:</strong> East Legon, Ghana
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Support Hours</h3>
            <p className="text-muted-foreground mb-4">We're here when you need us most</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Chat:</strong> 24/7 Available
              </p>
              <p>
                <strong>Email:</strong> 24/7 (24hr response)
              </p>
              <p>
                <strong>Phone:</strong> 9 AM - 6 PM EAT
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-xl font-semibold mb-2">Community</h3>
            <p className="text-muted-foreground mb-4">Join our community for peer support and updates</p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Discord:</strong> discord.gg/harambeedao
              </p>
              <p>
                <strong>Telegram:</strong> t.me/harambeedao
              </p>
              <p>
                <strong>Twitter:</strong> @harambeedao
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-serif text-xl font-semibold mb-3">Emergency Support</h3>
            <p className="text-muted-foreground mb-4">
              For urgent technical issues affecting your community's funds or critical operations, contact our emergency
              support line available 24/7.
            </p>
            <p className="text-lg font-semibold text-destructive">Emergency: +1 (555) 911-HELP</p>
          </div>
        </div>
      </div>
    </section>
  )
}
