import Image from "next/image"
import { Award, Calendar, MapPin } from "lucide-react"
import NavBar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"

export default function Awards() {
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Awards & Recognition</h1>
          <div className="w-32 md:w-48 h-1 bg-yellow-400 mt-3"></div>
        </div>
      </div>

      {/* Awards Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Major Awards */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Major Awards & Fellowships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Award 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">DAAD Research Fellowship</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>2019-2020</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>Technical University of Munich, Germany</span>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Awarded the prestigious German Academic Exchange Service (DAAD) fellowship for research on
                        climate change impacts on water resources in Alpine regions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Award 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">DST Start-Up Research Grant (SERB)</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>2022-2025</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>IIT Ropar, India</span>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Received a substantial research grant from the Science and Engineering Research Board (SERB) for
                        developing AI-based flood forecasting systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Award 3 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Shastri Indo-Canadian Fellowship</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>2018</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>McMaster University, Canada</span>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Awarded the Shastri Indo-Canadian Institute Fellowship to conduct collaborative research on
                        urban water management and smart water systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Award 4 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">MHRD Doctoral Fellowship</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span>2014-2018</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>IIT Bombay, India</span>
                      </div>
                      <p className="mt-3 text-gray-700">
                        Received full doctoral fellowship from the Ministry of Human Resource Development, Government of
                        India, for PhD research in hydrological sciences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Conference Awards */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Conference & Paper Awards</h2>
            <div className="space-y-6">
              {/* Conference Award 1 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Best Paper Award</h3>
                      <p className="text-gray-700 mt-1">
                        International Conference on Hydrology and Water Resources (ICHWR 2023), Singapore
                      </p>
                      <p className="text-gray-600 mt-2 italic">"Deep Learning Framework for Urban Flood Prediction"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Conference Award 2 */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">Outstanding Presentation Award</h3>
                      <p className="text-gray-700 mt-1">
                        5th International Conference on Climate Change and Water Resources (ICCWR-2022), Delhi
                      </p>
                      <p className="text-gray-600 mt-2 italic">
                        "Climate Change Impact on Groundwater Resources in Northern India"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* More conference awards would go here */}
            </div>
          </div>

          {/* Recognition */}
          <div>
            <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Other Recognition</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Editorial Board Member</h3>
                  <p className="text-gray-700">Journal of Hydrology and Water Resources (2022-Present)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Technical Committee Member</h3>
                  <p className="text-gray-700">
                    International Association for Hydro-Environment Engineering and Research (IAHR)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Invited Speaker</h3>
                  <p className="text-gray-700">World Water Forum (2023), Singapore</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Outstanding Reviewer</h3>
                  <p className="text-gray-700">Journal of Hydrology (2021)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
