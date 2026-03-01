import LevelUpSection from '@/components/LevelUpSection'

export default function EducationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Educational Resources
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access courses, flashcards, and video lessons designed specifically for diverse learning needs
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Browse Courses
          </button>
        </div>
      </section>

      {/* Level Up Section */}
      <LevelUpSection />
    </main>
  )
}
