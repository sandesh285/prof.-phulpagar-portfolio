import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"

export default function Publications() {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Publications</h1>
          <div className="w-32 md:w-48 h-1 bg-yellow-400 mt-3"></div>
        </div>
      </div>

      {/* Publications Section */}
      <section className="py-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Journal Publications */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Journal Publications:</h2>
            <div className="space-y-6">
              {/* Publication 1 */}
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-lg">
                      Machine Learning Approaches for Streamflow Prediction: A Comprehensive Review
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Journal of Hydrology (2023)</p>
                    <p className="mt-2 text-gray-700">Sharma, P.J., Kumar, A., Singh, R., Wilson, M.C.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Machine Learning
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Hydrology
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Review
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    <Link href="#" passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> View Paper
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-lg">
                      Climate Change Impact on Groundwater Resources in Northern India
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">Water Resources Research (2022)</p>
                    <p className="mt-2 text-gray-700">Sharma, P.J., Gupta, S., Banerjee, T., Wilson, M.C.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Climate Change
                      </span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Groundwater
                      </span>
                      <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        India
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    <Link href="#" passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> View Paper
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* More publications would go here */}
            </div>
          </div>

          {/* Conference Publications */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Conference Publications:</h2>
            <div className="space-y-6">
              {/* Conference Publication 1 */}
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-lg">Deep Learning Framework for Urban Flood Prediction</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      International Conference on Hydrology and Water Resources (ICHWR 2023), Singapore
                    </p>
                    <p className="mt-2 text-gray-700">Sharma, P.J., Lee, J., Kumar, A.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Deep Learning
                      </span>
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Urban Flooding
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Smart Cities
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    <Link href="#" passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> View Paper
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* More conference publications would go here */}
            </div>
          </div>

          {/* Book Chapters */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Book Chapters:</h2>
            <div className="space-y-6">
              {/* Book Chapter 1 */}
              <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-lg">
                      Applications of Machine Learning in Water Resources Management
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      In: Modern Approaches in Water Resources Engineering (Springer, 2022)
                    </p>
                    <p className="mt-2 text-gray-700">Sharma, P.J., Wilson, M.C., Kumar, A.</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Machine Learning
                      </span>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Water Resources
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Book Chapter
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/4 flex justify-end items-start">
                    <Link href="#" passHref>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" /> View Chapter
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* More book chapters would go here */}
            </div>
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
