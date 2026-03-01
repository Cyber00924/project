'use client'

import { Trophy, Calendar } from 'lucide-react'

const opportunities = [
  {
    id: 1,
    type: 'Competition',
    title: 'Special Arts Olympiad',
    description: 'Showcase your artistic talents in painting, sculpture, and digital art',
    prize: '$2,500 + Trophy',
    prizeIcon: '🏆',
    deadline: 'March 15, 2026',
    gradient: 'from-orange-400 to-yellow-400',
    badge: 'Competition',
    badgeColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 2,
    type: 'Competition',
    title: 'Rising Stars Music Award',
    description: 'Perform your original music or cover for a chance to win studio time',
    prize: '$1,000 + Recording Session',
    prizeIcon: '🎵',
    deadline: 'April 20, 2026',
    gradient: 'from-purple-400 to-blue-400',
    badge: 'Competition',
    badgeColor: 'bg-purple-100 text-purple-700'
  },
  {
    id: 3,
    type: 'Scholarship',
    title: 'Inclusive Innovation Grant',
    description: 'For students creating technology solutions for accessibility',
    prize: '$5,000 Scholarship',
    prizeIcon: '💡',
    deadline: 'May 1, 2026',
    gradient: 'from-teal-400 to-cyan-400',
    badge: 'Scholarship',
    badgeColor: 'bg-teal-100 text-teal-700'
  },
  {
    id: 4,
    type: 'Scholarship',
    title: 'Creative Writing Fellowship',
    description: 'Share your stories, poems, or essays and receive mentorship from published authors',
    prize: '$3,000 + Mentorship',
    prizeIcon: '🎁',
    deadline: 'June 10, 2026',
    gradient: 'from-green-400 to-teal-400',
    badge: 'Scholarship',
    badgeColor: 'bg-green-100 text-green-700'
  },
  {
    id: 5,
    type: 'Competition',
    title: 'Young Coders Challenge',
    description: 'Build an accessible app or game — all skill levels welcome',
    prize: '$1,500 + Laptop',
    prizeIcon: '💻',
    deadline: 'April 5, 2026',
    gradient: 'from-orange-400 to-red-400',
    badge: 'Competition',
    badgeColor: 'bg-orange-100 text-orange-700'
  },
  {
    id: 6,
    type: 'Scholarship',
    title: 'Performing Arts Bursary',
    description: 'Supporting talented performers in dance, drama, and musical theatre',
    prize: '$4,000 Bursary',
    prizeIcon: '🎭',
    deadline: 'July 15, 2026',
    gradient: 'from-purple-400 to-pink-400',
    badge: 'Scholarship',
    badgeColor: 'bg-purple-100 text-purple-700'
  }
]

export default function CompetitionsSection() {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Competitions & Scholarships
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Amazing opportunities for special needs students to shine, compete, and win support for their dreams
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
            >
              {/* Gradient Header with Prize */}
              <div className={`bg-gradient-to-br ${opp.gradient} p-6 relative`}>
                <div className="absolute top-4 right-4 text-4xl opacity-80">
                  {opp.prizeIcon}
                </div>
                <div className={`inline-block ${opp.badgeColor} px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                  {opp.badge}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {opp.prize}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {opp.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {opp.description}
                </p>

                {/* Deadline */}
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Deadline: {opp.deadline}</span>
                </div>

                {/* Apply Button */}
                <button className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Apply
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            View All Opportunities
          </button>
        </div>
      </div>
    </section>
  )
}
