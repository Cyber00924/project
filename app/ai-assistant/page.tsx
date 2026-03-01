import AICompanionSection from '@/components/AICompanionSection'

export default function AIAssistantPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your AI Learning Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get personalized support with speech recognition, reading assistance, and adaptive learning
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Start Chatting with AI
          </button>
        </div>
      </section>

      {/* AI Companion */}
      <AICompanionSection />
    </main>
  )
}
