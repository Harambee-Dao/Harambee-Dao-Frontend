import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ResourcesHero from "@/components/resources/resources-hero"
import DocumentationSection from "@/components/resources/documentation-section"
import APIDocumentation from "@/components/resources/api-documentation"
import DownloadableResources from "@/components/resources/downloadable-resources"
import InteractiveGuides from "@/components/resources/interactive-guides"
import ResourceSearch from "@/components/resources/resource-search"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ResourcesHero />
        <ResourceSearch />
        <DocumentationSection />
        <APIDocumentation />
        <InteractiveGuides />
        <DownloadableResources />
      </main>
      <Footer />
    </div>
  )
}
