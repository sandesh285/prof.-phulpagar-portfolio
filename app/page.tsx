import Image from "next/image"
import { Mail, Twitter, Linkedin, Youtube, ArrowRight, BookOpen, Award, Users, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NavBar from "@/components/navbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Banner */}
      <div className="relative w-full h-[60vh] max-h-[600px]">
        <Image
          src="/images/banner.png"
          alt="Banner image showing a landscape"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 px-4">
            Priyank J. Sharma
          </h1>
          <div className="w-48 md:w-64 h-1 bg-yellow-400 mb-6"></div>
          <p className="text-white text-xl md:text-2xl text-center max-w-3xl px-4">
            Exploring the intersection of hydrology, climate science, and artificial intelligence
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <section className="bg-slate-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/research"
              className="flex flex-col items-center p-4 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <BookOpen className="h-8 w-8 mb-2" />
              <span>Research</span>
            </Link>
            <Link
              href="/publications"
              className="flex flex-col items-center p-4 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Award className="h-8 w-8 mb-2" />
              <span>Publications</span>
            </Link>
            <Link href="#" className="flex flex-col items-center p-4 hover:bg-slate-700 rounded-lg transition-colors">
              <Users className="h-8 w-8 mb-2" />
              <span>Team</span>
            </Link>
            <Link href="#" className="flex flex-col items-center p-4 hover:bg-slate-700 rounded-lg transition-colors">
              <Calendar className="h-8 w-8 mb-2" />
              <span>Events</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <Image
                src="/images/profile.png"
                alt="Profile Photo"
                width={400}
                height={500}
                className="rounded-lg shadow-xl w-full object-cover"
              />
              <div className="mt-6 bg-slate-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-5 h-5 text-white fill-current"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-700">+91-9898-765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:priyank@iitrpr.ac.in" className="text-gray-700 hover:underline">
                        priyank@iitrpr.ac.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">LinkedIn</p>
                      <a href="#" className="text-gray-700 hover:underline">
                        linkedin.com/in/priyanksharma
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/images/qr-code.png"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="border border-gray-300"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-700 mb-2">
                Dr. Priyank J. Sharma <span className="text-base font-normal text-gray-600">(पीयूष जे. शर्मा)</span>
              </h2>
              <p className="text-xl font-medium text-gray-700 mb-1">
                Assistant Professor | <span className="text-purple-600">Google Scholar</span>
              </p>
              <p className="text-gray-700 mb-1">
                Department of Civil Engineering | <span className="text-purple-600">Official Website</span>
              </p>
              <p className="text-gray-700 mb-1">
                Indian Institute of Technology Ropar |{" "}
                <span className="text-purple-600">Email: priyank@iitrpr.ac.in</span>
              </p>
              <p className="text-gray-700">Rupnagar, Punjab, India | PIN-CODE: 140001</p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">About Me:</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Dr. Priyank J. Sharma is currently working as an Assistant Professor in the Department of Civil
                  Engineering at <span className="text-blue-600">Indian Institute of Technology Ropar</span>.
                  Previously, he was working as a <span className="text-blue-600">Postdoctoral Fellow</span> at{" "}
                  <span className="text-blue-600">McMaster University, Hamilton, Canada</span> and at{" "}
                  <span className="text-blue-600">Nanyang Technological University (NTU), Singapore</span>. He received
                  his Ph.D. and M.Tech degrees from{" "}
                  <span className="text-blue-600">Indian Institute of Technology Bombay (IITB)</span>, Mumbai.
                </p>
                <p>
                  His research interests include{" "}
                  <span className="text-blue-600">
                    hydrological modeling, climate change impact assessment, hydroinformatics, machine learning
                    applications in water resources
                  </span>
                  , and <span className="text-blue-600">interdisciplinary research in hydrological sciences</span>. He
                  is a recipient of the <span className="text-blue-600">DAAD Research Fellowship</span>,{" "}
                  <span className="text-blue-600">Shastri Indo-Canadian Fellowship</span>, and{" "}
                  <span className="text-blue-600">DST Start-Up Research Grant (SERB)</span> for his contributions to
                  hydrological sciences.
                </p>
                <p>
                  He has published more than <span className="text-blue-600">50 research articles</span> in reputed
                  peer-reviewed journals and has edited <span className="text-blue-600">3 books</span> on the
                  application of ML and AI in the field of hydrology and water resources. He is a regular reviewer for
                  journals and conferences in the field of water resources engineering and interdisciplinary research.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Research Highlights:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-40">
                      <Image
                        src="/placeholder.svg?height=160&width=400"
                        alt="AI-Based Flood Forecasting"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold p-4">AI-Based Flood Forecasting</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-sm mb-4">
                        Developing advanced deep learning models for accurate flood prediction up to 72 hours in
                        advance.
                      </p>
                      <Link
                        href="/research"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                      >
                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-40">
                      <Image
                        src="/placeholder.svg?height=160&width=400"
                        alt="Climate Change Impact"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <h3 className="text-white font-bold p-4">Climate Change Impact</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-sm mb-4">
                        Assessing the impact of climate change on water resources in the Himalayan region.
                      </p>
                      <Link
                        href="/research"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                      >
                        Learn more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6">Latest Publications:</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">
                    Machine Learning Approaches for Streamflow Prediction: A Comprehensive Review
                  </h3>
                  <p className="text-sm text-gray-600">Journal of Hydrology (2023)</p>
                  <p className="text-sm text-gray-700 mt-1">Sharma, P.J., Kumar, A., Singh, R., Wilson, M.C.</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">
                    Climate Change Impact on Groundwater Resources in Northern India
                  </h3>
                  <p className="text-sm text-gray-600">Water Resources Research (2022)</p>
                  <p className="text-sm text-gray-700 mt-1">Sharma, P.J., Gupta, S., Banerjee, T., Wilson, M.C.</p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4 py-1">
                  <h3 className="font-bold text-gray-800">Deep Learning Framework for Urban Flood Prediction</h3>
                  <p className="text-sm text-gray-600">
                    International Conference on Hydrology and Water Resources (2023)
                  </p>
                  <p className="text-sm text-gray-700 mt-1">Sharma, P.J., Lee, J., Kumar, A.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/publications">
                  <Button variant="outline" className="gap-2">
                    View all publications <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Books & Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book 1 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/book1.png"
                    alt="Engineering Hydrology Book Cover"
                    width={180}
                    height={250}
                    className="shadow-md hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Engineering Hydrology (5th Edition)</h3>
                <p className="text-sm text-gray-600 mb-4">Co-authored with K. Subramanya</p>

                <div className="space-y-2 text-sm">
                  <p>Revised and updated book covering the following areas:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Modern techniques in hydrological processes</li>
                    <li>Updated information on groundwater & numerical models</li>
                    <li>Case studies & applications</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Book 2 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/book2.png"
                    alt="Climate Change Impact Book Cover"
                    width={180}
                    height={250}
                    className="shadow-md hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Climate Change Impact on Water Resources</h3>
                <p className="text-sm text-gray-600 mb-4">Co-authored with J. Smith, Mary P. Singh</p>

                <div className="space-y-2 text-sm">
                  <p>Proceedings of 5th International Conference on Climate Change and Water Resources (ICCWR-2024)</p>
                  <p>Features latest research on climate change impacts on hydrological systems</p>
                </div>
              </div>
            </Card>

            {/* Book 3 */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/book3.png"
                    alt="Hydrology and Hydrologic Modelling Book Cover"
                    width={180}
                    height={250}
                    className="shadow-md hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">Hydrology and Hydrologic Modelling</h3>
                <p className="text-sm text-gray-600 mb-4">Co-authored with Springer Publishing</p>

                <div className="space-y-2 text-sm">
                  <p>The first comprehensive reference covering all aspects of hydrologic modeling</p>
                  <p>Features case studies from around the world with practical applications</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Life Preachings Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Life Preachings of Dr. A.P.J. Abdul Kalam</h2>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic text-lg">
                    "Dream is not what you see in sleep, dream is something that doesn't let you sleep."
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic text-lg">
                    "You cannot change your future, but you can change your habits, and surely your habits will change
                    your future."
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic text-lg">
                    "Don't take rest after your first victory because if you fail in second, more lips are waiting to
                    say that your first victory was just luck."
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <p className="italic text-lg">"If you want to shine like a sun, first burn like a sun."</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Image
                  src="/images/kalam.png"
                  alt="Dr. APJ Abdul Kalam"
                  width={200}
                  height={250}
                  className="rounded-md shadow-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Priyank J. Sharma</h3>
              <p className="text-gray-300">
                Assistant Professor
                <br />
                Department of Civil Engineering
                <br />
                Indian Institute of Technology Ropar
                <br />
                Rupnagar, Punjab, India - 140001
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-gray-300 hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="text-gray-300 hover:text-white transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Teaching
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center">
            <p>© Copyright - All rights are reserved | Dr. Priyank J. Sharma</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
