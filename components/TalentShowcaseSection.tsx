'use client'

import { useState } from 'react'
import { Music, Palette, PenTool, Monitor, Heart } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All Talents', icon: '✨' },
  { id: 'music', label: 'Music', icon: '🎵' },
  { id: 'art', label: 'Art', icon: '🎨' },
  { id: 'writing', label: 'Writing', icon: '🔥' },
  { id: 'digital', label: 'Digital', icon: '💻' }
]

const talents = [
  {
    id: 1,
    title: 'Piano Melody Collection',
    creator: 'Aisha, 12',
    price: '$4.99',
    likes: 128,
    icon: '🎹',
    bgColor: 'bg-purple-100',
    category: 'music'
  },
  {
    id: 2,
    title: 'Watercolor Nature Series',
    creator: 'Liam, 14',
    price: '$12.99',
    likes: 256,
    icon: '🌿',
    bgColor: 'bg-green-100',
    category: 'art'
  },
  {
    id: 3,
    title: 'My Space Adventure Stories',
    creator: 'Sam, 10',
    price: '$3.99',
    likes: 89,
    icon: '🚀',
    bgColor: 'bg-yellow-100',
    category: 'writing'
  },
  {
    id: 4,
    title: 'Animated Animal Friends',
    creator: 'Maya, 13',
    price: '$7.99',
    likes: 194,
    icon: '🐾',
    bgColor: 'bg-pink-100',
    category: 'digital'
  },
  {
    id: 5,
    title: 'Calm Beats for Focus',
    creator: 'Kai, 15',
    price: '$6.99',
    likes: 312,
    icon: '🎧',
    bgColor: 'bg-teal-100',
    category: 'music'
  },
  {
    id: 6,
    title: 'Clay Sculpture Gallery',
    creator: 'Zara, 11',
    price: '$15.99',
    likes: 187,
    icon: '🏺',
    bgColor: 'bg-orange-100',
    category: 'art'
  },
  {
    id: 7,
    title: 'Poetry About Feelings',
    creator: 'Riley, 12',
    price: '$2.99',
    likes: 203,
    icon: '🌙',
    bgColor: 'bg-purple-50',
    category: 'writing'
  },
  {
    id: 8,
    title: 'Pixel Art Characters',
    creator: 'Mori, 14',
    price: '$4.99',
    likes: 145,
    icon: '🎮',
    bgColor: 'bg-blue-100',
    category: 'digital'
  }
]

export default function TalentShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTalents = activeCategory === 'all' 
    ? talents 
    : talents.filter(t => t.category === activeCategory)

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-semibold text-orange-700">Talent Box</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Showcase Your Amazing Talents
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A marketplace where special needs students share and sell their incredible music, art, writing & digital creations
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-teal-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Talent Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTalents.map((talent) => (
            <div
              key={talent.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className={`${talent.bgColor} aspect-square flex items-center justify-center text-8xl p-8 group-hover:scale-110 transition-transform duration-300`}>
                {talent.icon}
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {talent.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  by {talent.creator}
                </p>

                {/* Price and Likes */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-teal-600 font-bold text-xl">
                    {talent.price}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                    <span className="text-sm font-medium">{talent.likes}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg">
                  Support & Buy
                  <span className="text-lg">🛒</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore All Talents
          </button>
        </div>
      </div>
    </section>
  )
}
