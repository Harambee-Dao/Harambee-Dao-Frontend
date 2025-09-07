export default function ResourcesHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">Resources & Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to integrate with Harambee DAO, from technical documentation to community guides and
            interactive tutorials.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-card border rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-primary">50+</span>
              <p className="text-sm text-muted-foreground">API Endpoints</p>
            </div>
            <div className="bg-card border rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-primary">25+</span>
              <p className="text-sm text-muted-foreground">Guides</p>
            </div>
            <div className="bg-card border rounded-lg px-6 py-3">
              <span className="text-2xl font-bold text-primary">100+</span>
              <p className="text-sm text-muted-foreground">Code Examples</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
