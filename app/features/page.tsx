import LearningWheel from '@/components/LearningWheel'
import LevelUpSection from '@/components/LevelUpSection'
import AICompanionSection from '@/components/AICompanionSection'

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powerful Features for Every Learner
          </h1>
          <p className="text-xl text-gray-600">
            Discover all the tools and resources designed to make learning accessible, engaging, and fun
          </p>
        </div>
      </section>

      {/* Learning Wheel */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <LearningWheel />
      </section>

      {/* Level Up Section */}
      <LevelUpSection />

      {/* AI Companion */}
      <AICompanionSection />
    </main>
  )
}
