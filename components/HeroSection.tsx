'use client'

import { useState, useEffect } from 'react'
import { Star, Trophy, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-40 blur-2xl animate-pulse-slow" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-pink-200 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-purple-200 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-200 rounded-full opacity-40 blur-2xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6 border-2 border-yellow-200">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">Gamified Learning for Everyone</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Learn Different,</span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Shine Bright
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              An inclusive education platform designed for autism and disability support. Earn XP, unlock achievements, and learn at your own pace with AI-powered tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/signup">
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Start Your Quest
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </Link>
              <Link href="/features">
                <button className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200">
                  Explore Features
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-sm text-gray-600">Learners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Trophy className="w-6 h-6 text-orange-500" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Courses</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-6 h-6 text-purple-500" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-gray-900">1M+</p>
                <p className="text-sm text-gray-600">XP Earned</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration Card */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-300/30 rounded-full blur-lg" />
                
                {/* Badge on Card */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <p className="text-sm font-bold text-gray-800">
                    <span className="text-teal-600">Inclusion</span>
                    <span className="text-orange-500">Autism</span>
                    <span className="text-gray-800"> Education Platform</span>
                  </p>
                </div>

                {/* Illustration Area */}
                <div className="mt-16 mb-8 relative">
                  {/* Decorative Stars */}
                  <div className="absolute top-0 left-10 animate-float">
                    <Star className="w-6 h-6 text-yellow-300" fill="currentColor" />
                  </div>
                  <div className="absolute top-8 right-12 animate-float" style={{ animationDelay: '1s' }}>
                    <Sparkles className="w-5 h-5 text-pink-300" />
                  </div>
                  <div className="absolute bottom-4 left-16 animate-float" style={{ animationDelay: '2s' }}>
                    <Star className="w-4 h-4 text-orange-300" fill="currentColor" />
                  </div>

                  {/* Placeholder for illustration - using emojis for now */}
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex justify-center gap-4 mb-6 flex-wrap">
                        <div className="text-6xl animate-bounce-slow">👧</div>
                        <div className="text-6xl animate-bounce-slow" style={{ animationDelay: '0.2s' }}>👦</div>
                        <div className="text-6xl animate-bounce-slow" style={{ animationDelay: '0.4s' }}>🧒</div>
                      </div>
                      <div className="flex justify-center gap-3 mb-4">
                        <div className="text-4xl animate-float">📚</div>
                        <div className="text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🎨</div>
                        <div className="text-4xl animate-float" style={{ animationDelay: '1s' }}>🎮</div>
                        <div className="text-4xl animate-float" style={{ animationDelay: '1.5s' }}>🎵</div>
                      </div>
                      <div className="flex justify-center gap-2">
                        <div className="text-3xl">💡</div>
                        <div className="text-3xl">🌟</div>
                        <div className="text-3xl">🏆</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Icon */}
                <div className="absolute bottom-6 right-6 bg-red-500 p-4 rounded-full shadow-lg animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
              </div>

              {/* Floating Elements around card */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 p-3 rounded-full shadow-lg animate-bounce-slow">
                <Star className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-500 p-3 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <Trophy className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
