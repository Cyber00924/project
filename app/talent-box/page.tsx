import TalentShowcaseSection from '@/components/TalentShowcaseSection'

export default function TalentBoxPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6">🎨</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Talent Box Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Share your incredible talents with the world and earn rewards for your creativity
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Upload Your Talent
          </button>
        </div>
      </section>

      {/* Talent Showcase */}
      <TalentShowcaseSection />
    </main>
  )
}
