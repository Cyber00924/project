'use client'

import HeroSection from '@/components/HeroSection'
import LearningWheel from '@/components/LearningWheel'
import LevelUpSection from '@/components/LevelUpSection'
import FinancialSupportSection from '@/components/FinancialSupportSection'
import TalentShowcaseSection from '@/components/TalentShowcaseSection'
import CompetitionsSection from '@/components/CompetitionsSection'
import AICompanionSection from '@/components/AICompanionSection'
import FooterCTA from '@/components/FooterCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - First */}
      <HeroSection />
      
      {/* Learning Wheel Section - Second */}
      <section className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-16">
        <LearningWheel />
      </section>

      {/* Level Up Section - Third */}
      <LevelUpSection />

      {/* Financial Support Section - Fourth */}
      <FinancialSupportSection />

      {/* Talent Showcase Section - Fifth */}
      <TalentShowcaseSection />

      {/* Competitions & Scholarships Section - Sixth */}
      <CompetitionsSection />

      {/* AI Companion Section - Seventh */}
      <AICompanionSection />

      {/* Footer CTA & Footer - Eighth */}
      <FooterCTA />
    </main>
  )
}
