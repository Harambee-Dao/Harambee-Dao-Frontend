export default function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/10 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Let's Build Together</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your community's financial future? Our team is here to help you get started with Harambee
            DAO and answer any questions you might have.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Quick Response Time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
