import CompetitionsSection from '@/components/CompetitionsSection'

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6">🏆</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Competitions & Scholarships
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Amazing opportunities to showcase your skills, win prizes, and get funding for your dreams
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </section>

      {/* Competitions */}
      <CompetitionsSection />
    </main>
  )
}
