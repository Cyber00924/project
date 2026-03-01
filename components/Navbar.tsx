'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Star } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-xl">
              <Star className="w-6 h-6 text-white" fill="white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              OUTLIER
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Features
            </Link>
            <Link href="/education" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Education
            </Link>
            <Link href="/funding" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Funding
            </Link>
            <Link href="/talent-box" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Talent Box
            </Link>
            <Link href="/competitions" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              Competitions
            </Link>
            <Link href="/ai-assistant" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              AI Assistant
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              href="/login"
              className="text-teal-600 hover:text-teal-700 font-semibold transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/signup"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/features" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/education" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Education
              </Link>
              <Link href="/funding" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Funding
              </Link>
              <Link href="/talent-box" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Talent Box
              </Link>
              <Link href="/competitions" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                Competitions
              </Link>
              <Link href="/ai-assistant" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
                AI Assistant
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Link 
                  href="/login"
                  className="text-center text-teal-600 hover:text-teal-700 font-semibold transition-colors py-2"
                >
                  Sign In
                </Link>
                <Link 
                  href="/signup"
                  className="text-center bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
