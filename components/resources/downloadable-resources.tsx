import { Download, FileText, Code, ImageIcon, Video, Archive } from "lucide-react"
import { Button } from "@/components/ui/button"

const downloadableResources = [
  {
    icon: FileText,
    title: "Harambee DAO Whitepaper",
    description: "Complete technical specification and vision document",
    size: "2.4 MB",
    format: "PDF",
    downloads: "1,247",
  },
  {
    icon: Code,
    title: "JavaScript SDK",
    description: "Official SDK for integrating with Harambee DAO APIs",
    size: "156 KB",
    format: "NPM Package",
    downloads: "892",
  },
  {
    icon: Code,
    title: "Python SDK",
    description: "Python library for backend integrations",
    size: "234 KB",
    format: "PyPI Package",
    downloads: "567",
  },
  {
    icon: ImageIcon,
    title: "Brand Assets",
    description: "Logos, icons, and brand guidelines for partners",
    size: "12.8 MB",
    format: "ZIP",
    downloads: "423",
  },
  {
    icon: FileText,
    title: "API Postman Collection",
    description: "Pre-configured API requests for testing",
    size: "45 KB",
    format: "JSON",
    downloads: "789",
  },
  {
    icon: Video,
    title: "Setup Video Tutorials",
    description: "Step-by-step video guides for community setup",
    size: "245 MB",
    format: "MP4 Bundle",
    downloads: "1,156",
  },
  {
    icon: FileText,
    title: "Smart Contract Templates",
    description: "Customizable smart contract templates",
    size: "89 KB",
    format: "Solidity Files",
    downloads: "334",
  },
  {
    icon: Archive,
    title: "Complete Documentation",
    description: "Offline version of all documentation",
    size: "8.9 MB",
    format: "ZIP",
    downloads: "678",
  },
]

export default function DownloadableResources() {
  const getIconColor = (format: string) => {
    switch (format) {
      case "PDF":
        return "text-red-600"
      case "NPM Package":
      case "PyPI Package":
        return "text-green-600"
      case "ZIP":
        return "text-yellow-600"
      case "JSON":
        return "text-blue-600"
      case "MP4 Bundle":
        return "text-purple-600"
      case "Solidity Files":
        return "text-indigo-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">Downloads & Resources</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our complete library of downloadable resources, SDKs, and documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {downloadableResources.map((resource, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 bg-muted rounded-lg ${getIconColor(resource.format)}`}
                >
                  <resource.icon className="h-5 w-5" />
                </div>
                <div className="text-right text-xs text-muted-foreground">
                  <div>{resource.downloads} downloads</div>
                  <div>{resource.size}</div>
                </div>
              </div>

              <h3 className="font-serif text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>

              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs px-2 py-1 rounded-full bg-muted ${getIconColor(resource.format)}`}>
                  {resource.format}
                </span>
              </div>

              <Button variant="outline" className="w-full bg-transparent" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="bg-card border rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">Need Custom Resources?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for specific documentation, custom integrations, or tailored resources for your community? Our
              team can create custom materials to meet your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Request Custom Resources</Button>
              <Button variant="outline">Schedule Consultation</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-card border rounded-lg p-6">
            <div className="text-2xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Available Resources</div>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-2xl font-bold text-primary mb-2">10k+</div>
            <div className="text-sm text-muted-foreground">Total Downloads</div>
          </div>
          <div className="bg-card border rounded-lg p-6">
            <div className="text-2xl font-bold text-primary mb-2">Weekly</div>
            <div className="text-sm text-muted-foreground">Update Frequency</div>
          </div>
        </div>
      </div>
    </section>
  )
}
