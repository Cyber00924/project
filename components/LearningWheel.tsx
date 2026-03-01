'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Palette, Gamepad2, Brain, DollarSign, BarChart, Music, Trophy, Star } from 'lucide-react'

interface WheelSegment {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

const segments: WheelSegment[] = [
  {
    id: 0,
    title: 'Talent Box',
    description: 'Showcase and sell your talents — music, art, crafts & more',
    icon: <Palette className="w-7 h-7" />,
    color: '#F87171' // Light red/coral
  },
  {
    id: 1,
    title: 'Learning Hub',
    description: 'Interactive videos, flashcards, and lessons',
    icon: <BookOpen className="w-7 h-7" />,
    color: '#5EEAD4' // Light teal
  },
  {
    id: 2,
    title: 'Games Zone',
    description: 'Fun educational games to learn while playing',
    icon: <Gamepad2 className="w-7 h-7" />,
    color: '#93C5FD' // Light blue
  },
  {
    id: 3,
    title: 'AI Assistant',
    description: 'Smart learning companion powered by AI',
    icon: <Brain className="w-7 h-7" />,
    color: '#C4B5FD' // Light purple
  },
  {
    id: 4,
    title: 'Support Center',
    description: 'Resources, funding, and community help',
    icon: <DollarSign className="w-7 h-7" />,
    color: '#6EE7B7' // Light green
  },
  {
    id: 5,
    title: 'Progress Tracker',
    description: 'Monitor growth and celebrate achievements',
    icon: <BarChart className="w-7 h-7" />,
    color: '#FCD34D' // Light yellow
  },
  {
    id: 6,
    title: 'Music Studio',
    description: 'Create and share your musical talents',
    icon: <Music className="w-7 h-7" />,
    color: '#F9A8D4' // Light pink
  },
  {
    id: 7,
    title: 'Achievements',
    description: 'Earn badges, trophies, and rewards',
    icon: <Trophy className="w-7 h-7" />,
    color: '#FCA5A5' // Peach/salmon
  }
]

export default function LearningWheel() {
  const [rotation, setRotation] = useState(0)
  const [selectedSegment, setSelectedSegment] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)

  useEffect(() => {
    if (!isAutoRotating) return

    const interval = setInterval(() => {
      setRotation(prev => prev + 45)
      setSelectedSegment(prev => (prev + 1) % segments.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoRotating])

  const handleSegmentClick = (index: number) => {
    setIsAutoRotating(false)
    setSelectedSegment(index)
    setRotation(index * 45)
    
    setTimeout(() => {
      setIsAutoRotating(true)
    }, 5000)
  }

  const segmentAngle = 360 / segments.length

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
          <Star className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-teal-700">Power-Ups & Features</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Your Learning Arsenal
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to learn, grow, and thrive — gamified and personalized
        </p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Rotating Wheel Container */}
        <div className="relative w-[400px] h-[400px] mb-8">
          {/* SVG Wheel */}
          <svg 
            viewBox="0 0 400 400" 
            className="w-full h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((segment, index) => {
              const startAngle = (index * segmentAngle - 90) * (Math.PI / 180)
              const endAngle = ((index + 1) * segmentAngle - 90) * (Math.PI / 180)
              const largeArcFlag = segmentAngle > 180 ? 1 : 0
              
              const x1 = 200 + 200 * Math.cos(startAngle)
              const y1 = 200 + 200 * Math.sin(startAngle)
              const x2 = 200 + 200 * Math.cos(endAngle)
              const y2 = 200 + 200 * Math.sin(endAngle)
              
              const pathData = `M 200 200 L ${x1} ${y1} A 200 200 0 ${largeArcFlag} 1 ${x2} ${y2} Z`
              
              return (
                <g 
                  key={segment.id}
                  onClick={() => handleSegmentClick(index)}
                  className="cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <path
                    d={pathData}
                    fill={segment.color}
                    stroke="white"
                    strokeWidth="4"
                  />
                </g>
              )
            })}
          </svg>

          {/* Icons overlay - positioned absolutely */}
          <div 
            className="absolute inset-0 pointer-events-none transition-transform duration-1000 ease-in-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((segment, index) => {
              // Calculate position for each icon
              const angle = (index * segmentAngle + segmentAngle / 2 - 90) * (Math.PI / 180)
              const radius = 130 // Distance from center
              const x = 200 + radius * Math.cos(angle)
              const y = 200 + radius * Math.sin(angle)
              
              return (
                <div
                  key={segment.id}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                    transition: 'transform 1000ms ease-in-out'
                  }}
                  onClick={() => handleSegmentClick(index)}
                >
                  <div className="text-white drop-shadow-lg">
                    {segment.icon}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-gray-100 z-20">
            <div 
              className="p-2.5 rounded-xl mb-1.5 shadow-md"
              style={{ backgroundColor: segments[selectedSegment].color }}
            >
              <div className="text-white">
                {segments[selectedSegment].icon}
              </div>
            </div>
            <span className="text-[10px] font-bold text-gray-700 text-center px-2 leading-tight">
              Talent Box
            </span>
          </div>
        </div>

        {/* Selected Segment Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100 transition-all duration-500">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
            style={{ backgroundColor: segments[selectedSegment].color }}
          >
            <div className="text-white">
              {segments[selectedSegment].icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
            {segments[selectedSegment].title}
          </h3>
          <p className="text-gray-600 text-center">
            {segments[selectedSegment].description}
          </p>
        </div>

        {/* Auto-rotate indicator */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
          <div className={`w-2 h-2 rounded-full ${isAutoRotating ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
          <span>{isAutoRotating ? 'Auto-rotating every 3 seconds' : 'Paused - Click any segment'}</span>
        </div>
      </div>
    </div>
  )
}
