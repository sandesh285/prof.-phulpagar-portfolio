import Image from "next/image"
import NavBar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Banner */}
      <div className="relative w-full h-40 md:h-48">
        <Image
          src="/images/banner.png"
          alt="Banner image showing a landscape"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Gallery</h1>
          <div className="w-32 md:w-48 h-1 bg-yellow-400 mt-3"></div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="research">Research Activities</TabsTrigger>
            <TabsTrigger value="conferences">Conferences</TabsTrigger>
            <TabsTrigger value="fieldwork">Field Work</TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Gallery Item 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Lab Research"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Hydrological Modeling Lab</h3>
                    <p className="text-sm text-gray-600">
                      Working with advanced simulation models for flood prediction
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Item 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Data Analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Data Analysis Workshop</h3>
                    <p className="text-sm text-gray-600">Training students on advanced data analysis techniques</p>
                  </div>
                </CardContent>
              </Card>

              {/* Gallery Item 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Research Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Research Team Meeting</h3>
                    <p className="text-sm text-gray-600">
                      Collaborative session with graduate students and researchers
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* More gallery items would go here */}
            </div>
          </TabsContent>

          <TabsContent value="conferences" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Conference Item 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Conference Presentation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">IAHR World Congress 2023</h3>
                    <p className="text-sm text-gray-600">Presenting research on AI-based flood forecasting systems</p>
                  </div>
                </CardContent>
              </Card>

              {/* Conference Item 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Panel Discussion"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Climate Change Panel</h3>
                    <p className="text-sm text-gray-600">
                      Panel discussion on water resources management under climate change
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Conference Item 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Award Ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Best Paper Award</h3>
                    <p className="text-sm text-gray-600">Receiving the best paper award at ICHWR 2023, Singapore</p>
                  </div>
                </CardContent>
              </Card>

              {/* More conference items would go here */}
            </div>
          </TabsContent>

          <TabsContent value="fieldwork" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Fieldwork Item 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="River Monitoring"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">River Monitoring Station</h3>
                    <p className="text-sm text-gray-600">Installing water level sensors in the Himalayan region</p>
                  </div>
                </CardContent>
              </Card>

              {/* Fieldwork Item 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Water Sampling"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Water Quality Assessment</h3>
                    <p className="text-sm text-gray-600">Collecting water samples for quality analysis</p>
                  </div>
                </CardContent>
              </Card>

              {/* Fieldwork Item 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Drone Survey"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">Drone Survey</h3>
                    <p className="text-sm text-gray-600">Using drones for topographic mapping of flood-prone areas</p>
                  </div>
                </CardContent>
              </Card>

              {/* More fieldwork items would go here */}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p>© Copyright - All rights are reserved | Dr. Priyank J. Sharma</p>
        </div>
      </footer>
    </div>
  )
}
