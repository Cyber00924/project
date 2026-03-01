'use client'

import { DollarSign } from 'lucide-react'

const fundingOptions = [
  {
    id: 1,
    title: 'Education Grants',
    description: 'Federal and state grants for special education',
    range: '$5,000 - $25,000',
    icon: '🎓',
    gradient: 'from-teal-400 to-cyan-500'
  },
  {
    id: 2,
    title: 'Therapy Funding',
    description: 'Coverage for ABA, speech, and occupational therapy',
    range: '$2,000 - $15,000',
    icon: '📋',
    gradient: 'from-orange-400 to-yellow-500'
  },
  {
    id: 3,
    title: 'Assistive Tech',
    description: 'Funding for communication devices and tools',
    range: '$500 - $5,000',
    icon: '💻',
    gradient: 'from-purple-400 to-blue-500'
  }
]

export default function FinancialSupportSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 py-16 px-4 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-cyan-200 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <DollarSign className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Funding & Support</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unlock Financial Support
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover grants, scholarships, and funding options available for your needs
          </p>
        </div>

        {/* Funding Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {fundingOptions.map((option) => (
            <div
              key={option.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-br ${option.gradient} p-8 relative`}>
                <div className="absolute top-4 right-4 text-4xl opacity-80">
                  {option.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {option.range}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {option.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                <button className="text-teal-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
