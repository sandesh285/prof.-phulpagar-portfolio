"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-slate-700 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold">
            Priyank J. Sharma
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-yellow-400 transition-colors font-medium">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors font-medium">
            Education
          </Link>
          <Link href="/publications" className="hover:text-yellow-400 transition-colors font-medium">
            Publications
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors font-medium">
            Teaching
          </Link>
          <Link href="/research" className="hover:text-yellow-400 transition-colors font-medium">
            Research
          </Link>

          {/* More dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleMoreDropdown}
              className="flex items-center hover:text-yellow-400 transition-colors font-medium"
            >
              More{" "}
              <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isMoreDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {isMoreDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                  Updates
                </Link>
                <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                  Awards & Recognition
                </Link>
                <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                  Conferences/Workshops
                </Link>
                <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                  Gallery
                </Link>
                <Link href="#" className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors">
                  Personal Info
                </Link>
              </div>
            )}
          </div>

          {/* Search button */}
          <button className="hover:text-yellow-400 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">
            Education
          </Link>
          <Link href="/publications" className="hover:text-yellow-400 transition-colors">
            Publications
          </Link>
          <Link href="#" className="hover:text-yellow-400 transition-colors">
            Teaching
          </Link>
          <Link href="/research" className="hover:text-yellow-400 transition-colors">
            Research
          </Link>

          {/* Mobile More dropdown */}
          <button
            onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
            className="flex items-center justify-between hover:text-yellow-400 transition-colors"
          >
            More <ChevronDown className={`h-4 w-4 transition-transform ${isMoreDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isMoreDropdownOpen && (
            <div className="pl-4 space-y-3 border-l-2 border-gray-600">
              <Link href="#" className="block hover:text-yellow-400 transition-colors">
                Updates
              </Link>
              <Link href="#" className="block hover:text-yellow-400 transition-colors">
                Awards & Recognition
              </Link>
              <Link href="#" className="block hover:text-yellow-400 transition-colors">
                Conferences/Workshops
              </Link>
              <Link href="#" className="block hover:text-yellow-400 transition-colors">
                Gallery
              </Link>
              <Link href="#" className="block hover:text-yellow-400 transition-colors">
                Personal Info
              </Link>
            </div>
          )}

          <button className="flex items-center hover:text-yellow-400 transition-colors">
            <Search className="h-5 w-5 mr-2" /> Search
          </button>
        </div>
      )}
    </nav>
  )
}
