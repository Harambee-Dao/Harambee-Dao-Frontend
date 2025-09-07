import { Card } from "@/components/ui/card"
import { Brain, Satellite, Camera, BarChart3 } from "lucide-react"

export function AIAuditorSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">AI Auditor Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Computer vision and machine learning pipeline that verifies project milestones with 95%+ accuracy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-foreground">Technical Implementation</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our AI auditor uses a ResNet-50 backbone with custom training on satellite and drone imagery to verify
              off-chain project milestones with unprecedented accuracy.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Satellite className="w-4 h-4 text-chart-1" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Satellite Data Ingestion</h4>
                  <p className="text-muted-foreground text-sm">
                    Planet and Sentinel imagery with cloud masking and orthorectification
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-2/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-4 h-4 text-chart-2" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Deep Learning Pipeline</h4>
                  <p className="text-muted-foreground text-sm">ResNet-50 + U-Net segmentation with transfer learning</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-4 h-4 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">NDVI Analysis</h4>
                  <p className="text-muted-foreground text-sm">Time-series vegetation index for crop monitoring</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Camera className="w-4 h-4 text-chart-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Evidence Generation</h4>
                  <p className="text-muted-foreground text-sm">
                    Grad-CAM heatmaps and annotated imagery for transparency
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-muted/30">
            <img
              src="/ai-architecture-diagram.png"
              alt="AI Auditor Architecture"
              className="w-full h-80 object-cover rounded-lg"
            />
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Model Training</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Regional datasets + synthetic augmentations</li>
              <li>• Continual learning from field validation</li>
              <li>• Model versioning and provenance tracking</li>
              <li>• Quarterly retraining cycles</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Output Format</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Binary milestone satisfaction decision</li>
              <li>• Confidence score (0-1)</li>
              <li>• IPFS evidence bundle CID</li>
              <li>• Explainability heatmaps</li>
            </ul>
          </Card>

          <Card className="p-6 space-y-4 bg-card">
            <h4 className="text-xl font-serif font-semibold text-card-foreground">Performance Metrics</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 95%+ precision on milestone detection</li>
              <li>• &lt;12 hour processing time</li>
              <li>• 99.9% uptime SLA</li>
              <li>• Continuous accuracy monitoring</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
