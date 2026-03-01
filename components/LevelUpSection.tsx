'use client'

import { BookOpen, Layers, Play } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: 'Social Skills 101',
    level: 'Beginner',
    xp: 200,
    icon: '🛡️',
    iconBg: 'bg-yellow-100'
  },
  {
    id: 2,
    title: 'Emotional Regulation',
    level: 'Intermediate',
    xp: 350,
    icon: '🔥',
    iconBg: 'bg-orange-100'
  },
  {
    id: 3,
    title: 'Daily Living Skills',
    level: 'Beginner',
    xp: 150,
    icon: '🏠',
    iconBg: 'bg-pink-100'
  },
  {
    id: 4,
    title: 'Communication Mastery',
    level: 'Advanced',
    xp: 500,
    icon: '💬',
    iconBg: 'bg-purple-100'
  }
]

const flashCards = [
  {
    id: 1,
    title: 'Sensory Awareness',
    description: 'Understanding your sensory preferences',
    color: 'bg-gradient-to-br from-red-400 to-orange-400'
  },
  {
    id: 2,
    title: 'Routine Building',
    description: 'Creating consistent daily schedules',
    color: 'bg-gradient-to-br from-yellow-400 to-orange-400'
  },
  {
    id: 3,
    title: 'Self-Advocacy',
    description: 'Speaking up for your needs',
    color: 'bg-gradient-to-br from-purple-400 to-pink-400'
  }
]

export default function LevelUpSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">🎓</span>
            <span className="text-sm font-semibold text-pink-700">Education Hub</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Level Up Your Skills
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Courses, flash cards, and video lessons designed for autism & disability learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Courses */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">Courses</h3>
            </div>

            <div className="space-y-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 border-2 border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`${course.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                        {course.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">
                          {course.title}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                            {course.level}
                          </span>
                          <span className="text-xs font-semibold text-yellow-600 flex items-center gap-1">
                            <span className="text-yellow-500">⚡</span>
                            {course.xp} XP
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-teal-500 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Flash Cards & Videos */}
          <div className="space-y-8">
            {/* Flash Cards */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Layers className="w-6 h-6 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Flash Cards</h3>
              </div>

              <div className="space-y-4">
                {flashCards.map((card) => (
                  <div
                    key={card.id}
                    className={`${card.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 text-white`}
                  >
                    <h4 className="font-bold text-xl mb-2">{card.title}</h4>
                    <p className="text-white/90 text-sm">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Short Videos */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Play className="w-6 h-6 text-teal-600" />
                <h3 className="text-2xl font-bold text-gray-900">Short Videos</h3>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative bg-gradient-to-br from-cyan-100 to-blue-200 rounded-xl mb-4 aspect-video flex items-center justify-center group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/50 to-blue-300/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-teal-600 transition-all">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Info */}
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    Understanding Sensory Processing
                  </h4>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>3 min</span>
                    <span>•</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Beginner</span>
                    <span>•</span>
                    <span className="text-yellow-600 font-semibold flex items-center gap-1">
                      <span className="text-yellow-500">⚡</span>
                      100 XP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
