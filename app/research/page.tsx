import Image from "next/image"
import { BookOpen, Database, CloudRain, Droplet, Thermometer, Award } from "lucide-react"

import NavBar from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Research() {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Research Areas</h1>
          <div className="w-32 md:w-48 h-1 bg-yellow-400 mt-3"></div>
        </div>
      </div>

      {/* Research Areas Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <p className="text-lg text-center mb-10">
          My research focuses on applying advanced computational techniques to solve complex water resources challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Research Area 1 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CloudRain className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>Hydrological Modelling</CardTitle>
                <CardDescription>Advanced modeling approaches</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Developing and applying various hydrological models to understand and predict watershed behavior,
                streamflow, and water availability. Focus on physically-based, conceptual, and data-driven approaches.
              </p>
            </CardContent>
          </Card>

          {/* Research Area 2 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Thermometer className="h-8 w-8 text-red-600" />
              <div>
                <CardTitle>Climate Change Impacts</CardTitle>
                <CardDescription>Water resource vulnerability</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Assessing the impacts of climate change on water resources through downscaling of global climate models,
                trend analysis, and vulnerability assessment of water infrastructure.
              </p>
            </CardContent>
          </Card>

          {/* Research Area 3 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Database className="h-8 w-8 text-purple-600" />
              <div>
                <CardTitle>Machine Learning Applications</CardTitle>
                <CardDescription>AI in water resources</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Applying machine learning and deep learning techniques for hydrological forecasting, water quality
                assessment, and optimization of water resources systems.
              </p>
            </CardContent>
          </Card>

          {/* Research Area 4 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Droplet className="h-8 w-8 text-blue-400" />
              <div>
                <CardTitle>Urban Water Management</CardTitle>
                <CardDescription>Smart water infrastructure</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Designing sustainable urban water systems, smart stormwater management, and developing decision support
                systems for urban flood mitigation.
              </p>
            </CardContent>
          </Card>

          {/* Research Area 5 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <BookOpen className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle>Interdisciplinary Research</CardTitle>
                <CardDescription>Cross-domain applications</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Collaborating across disciplines to address complex water-related challenges, including social
                hydrology, eco-hydrology, and water-energy-food nexus studies.
              </p>
            </CardContent>
          </Card>

          {/* Research Area 6 */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-amber-600" />
              <div>
                <CardTitle>Hydro-informatics</CardTitle>
                <CardDescription>Data-driven water science</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Developing innovative computational tools and information systems for water resources management,
                including big data analytics and visualization techniques.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Current Research Projects:</h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="md:flex">
                <div className="md:w-1/4 p-4 bg-blue-50">
                  <h3 className="font-bold text-xl text-blue-700">AI-Based Flood Forecasting System</h3>
                  <p className="text-sm text-gray-600 mt-1">Funded by DST-SERB (2022-2025)</p>
                  <p className="mt-2 text-sm font-semibold">Budget: ₹ 35 Lakhs</p>
                </div>
                <div className="md:w-3/4 p-4">
                  <p className="text-gray-700 mb-4">
                    This project aims to develop an artificial intelligence-based flood forecasting system that can
                    predict flood events with high accuracy up to 72 hours in advance. The system integrates multiple
                    data sources including weather forecasts, satellite imagery, IoT sensor networks, and historical
                    flooding data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Deep Learning
                    </span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">IoT</span>
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Flood Forecasting
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Early Warning System
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="md:flex">
                <div className="md:w-1/4 p-4 bg-green-50">
                  <h3 className="font-bold text-xl text-green-700">Climate Change Impact on Himalayan Rivers</h3>
                  <p className="text-sm text-gray-600 mt-1">Funded by Ministry of Earth Sciences (2023-2026)</p>
                  <p className="mt-2 text-sm font-semibold">Budget: ₹ 45 Lakhs</p>
                </div>
                <div className="md:w-3/4 p-4">
                  <p className="text-gray-700 mb-4">
                    This comprehensive study assesses the impact of climate change on the hydrological regimes of major
                    Himalayan river systems. Using ensemble climate models, remote sensing data, and field observations,
                    the project aims to quantify changes in streamflow, glacial contributions, and extreme flow events.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Climate Change
                    </span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Glacial Hydrology
                    </span>
                    <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Remote Sensing
                    </span>
                    <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Himalayan Rivers
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* More projects would go here */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-4 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p>© Copyright - All rights are reserved | Dr. Priyank J. Sharma</p>
        </div>
      </footer>
    </div>
  )
}
