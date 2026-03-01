import FinancialSupportSection from '@/components/FinancialSupportSection'

export default function FundingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6">💰</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Financial Support & Funding
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Access grants, scholarships, and funding opportunities to support your educational journey
          </p>
          <button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore Funding Options
          </button>
        </div>
      </section>

      {/* Financial Support */}
      <FinancialSupportSection />
    </main>
  )
}
