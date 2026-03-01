'use client'

import { ArrowRight, Heart } from 'lucide-react'
import Link from 'next/link'

export default function FooterCTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Learning Quest?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of learners on their journey to success
          </p>
          <Link href="/signup">
            <button className="bg-white hover:bg-gray-100 text-teal-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-500 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div>
              <h3 className="text-2xl font-bold text-white">OUTLIER</h3>
            </div>

            {/* Made with love */}
            <div className="flex items-center gap-2 text-white/90">
              <span>Made with</span>
              <Heart className="w-5 h-5 fill-white text-white" />
              <span>for the autism community</span>
            </div>

            {/* Links */}
            <div className="flex gap-6">
              <Link href="/privacy" className="text-white/90 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mt-6 pt-6 text-center">
            <p className="text-white/70 text-sm">
              © 2026 Outlier. All rights reserved. Empowering special needs education.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
