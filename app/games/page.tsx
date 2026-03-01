'use client'

import { useState } from 'react'
import { ArrowLeft, Star, Trophy, Heart, Smile } from 'lucide-react'
import Link from 'next/link'

export default function GamesPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const games = [
    {
      id: 'flashcards',
      title: '🎴 Flashcards',
      description: 'Learn emotions, colors, and shapes',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      id: 'matching',
      title: '🧩 Matching Game',
      description: 'Match pairs and improve memory',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 'emotions',
      title: '😊 Emotion Recognition',
      description: 'Identify and learn about feelings',
      color: 'from-green-400 to-emerald-400',
    },
    {
      id: 'sorting',
      title: '🎨 Color Sorting',
      description: 'Sort objects by color and shape',
      color: 'from-orange-400 to-red-400',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-5xl font-bold text-purple-700 mb-2">🎮 Fun Learning Games</h1>
          <p className="text-xl text-gray-700">Choose a game and start learning!</p>
        </div>

        {!selectedGame ? (
          /* Game Selection Grid */
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-4 border-purple-200 text-left"
              >
                <h2 className="text-3xl font-bold mb-3">{game.title}</h2>
                <p className="text-lg text-gray-600 mb-4">{game.description}</p>
                <div className={`bg-gradient-to-r ${game.color} text-white px-6 py-3 rounded-full inline-block font-semibold`}>
                  Play Now! 🚀
                </div>
              </button>
            ))}
          </div>
        ) : (
          /* Game Content */
          <div>
            <button
              onClick={() => setSelectedGame(null)}
              className="mb-4 bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition"
            >
              ← Back to Games
            </button>
            {selectedGame === 'flashcards' && <FlashcardsGame />}
            {selectedGame === 'matching' && <MatchingGame />}
            {selectedGame === 'emotions' && <EmotionGame />}
            {selectedGame === 'sorting' && <SortingGame />}
          </div>
        )}
      </div>
    </main>
  )
}

function FlashcardsGame() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [score, setScore] = useState(0)

  const flashcards = [
    { front: '😊', back: 'Happy', color: 'bg-yellow-300' },
    { front: '😢', back: 'Sad', color: 'bg-blue-300' },
    { front: '😠', back: 'Angry', color: 'bg-red-300' },
    { front: '😨', back: 'Scared', color: 'bg-purple-300' },
    { front: '🔴', back: 'Red Circle', color: 'bg-red-400' },
    { front: '🟦', back: 'Blue Square', color: 'bg-blue-400' },
    { front: '🟢', back: 'Green Circle', color: 'bg-green-400' },
    { front: '⭐', back: 'Yellow Star', color: 'bg-yellow-400' },
  ]

  const handleNext = () => {
    setIsFlipped(false)
    setScore(score + 1)
    setTimeout(() => {
      setCurrentCard((currentCard + 1) % flashcards.length)
    }, 300)
  }

  const card = flashcards[currentCard]

  return (
    <div className="text-center">
      <div className="mb-6 flex justify-between items-center bg-white/80 rounded-2xl p-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-yellow-500" />
          <span className="text-xl font-bold text-purple-700">Score: {score}</span>
        </div>
        <div className="text-lg text-gray-600">
          Card {currentCard + 1} of {flashcards.length}
        </div>
      </div>

      <div
        className={`relative w-80 h-96 mx-auto cursor-pointer transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 ${card.color} rounded-3xl shadow-2xl flex items-center justify-center text-9xl border-8 border-white`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {card.front}
        </div>
        {/* Back */}
        <div
          className={`absolute inset-0 ${card.color} rounded-3xl shadow-2xl flex items-center justify-center text-4xl font-bold text-white border-8 border-white`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {card.back}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <p className="text-xl text-gray-700">👆 Click the card to flip it!</p>
        <button
          onClick={handleNext}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-xl"
        >
          Next Card 🎉
        </button>
      </div>
    </div>
  )
}

function MatchingGame() {
  const [cards, setCards] = useState([
    { id: 1, emoji: '🐶', matched: false, flipped: false },
    { id: 2, emoji: '🐶', matched: false, flipped: false },
    { id: 3, emoji: '🐱', matched: false, flipped: false },
    { id: 4, emoji: '🐱', matched: false, flipped: false },
    { id: 5, emoji: '🐼', matched: false, flipped: false },
    { id: 6, emoji: '🐼', matched: false, flipped: false },
    { id: 7, emoji: '🦁', matched: false, flipped: false },
    { id: 8, emoji: '🦁', matched: false, flipped: false },
  ].sort(() => Math.random() - 0.5))
  
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [score, setScore] = useState(0)

  const handleCardClick = (index: number) => {
    if (flippedCards.length === 2 || cards[index].matched || cards[index].flipped) return

    const newCards = [...cards]
    newCards[index].flipped = true
    setCards(newCards)

    const newFlipped = [...flippedCards, index]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[first].matched = true
          matchedCards[second].matched = true
          setCards(matchedCards)
          setFlippedCards([])
          setScore(score + 10)
        }, 500)
      } else {
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[first].flipped = false
          resetCards[second].flipped = false
          setCards(resetCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  return (
    <div>
      <div className="mb-6 text-center bg-white/80 rounded-2xl p-4 inline-block">
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" fill="currentColor" />
          <span className="text-2xl font-bold text-purple-700">Score: {score}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`aspect-square rounded-2xl text-6xl flex items-center justify-center transition-all duration-300 border-4 ${
              card.matched
                ? 'bg-green-300 border-green-500 scale-95'
                : card.flipped
                ? 'bg-white border-purple-300'
                : 'bg-gradient-to-br from-purple-400 to-pink-400 border-purple-500 hover:scale-105'
            }`}
          >
            {card.flipped || card.matched ? card.emoji : '?'}
          </button>
        ))}
      </div>
    </div>
  )
}

function EmotionGame() {
  const [currentEmotion, setCurrentEmotion] = useState(0)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState('')

  const emotions = [
    { emoji: '😊', name: 'Happy', options: ['Happy', 'Sad', 'Angry'] },
    { emoji: '😢', name: 'Sad', options: ['Happy', 'Sad', 'Excited'] },
    { emoji: '😠', name: 'Angry', options: ['Calm', 'Angry', 'Happy'] },
    { emoji: '😨', name: 'Scared', options: ['Scared', 'Happy', 'Silly'] },
  ]

  const emotion = emotions[currentEmotion]

  const handleAnswer = (answer: string) => {
    if (answer === emotion.name) {
      setFeedback('🎉 Correct! Great job!')
      setScore(score + 10)
    } else {
      setFeedback('💪 Try again! You can do it!')
    }

    setTimeout(() => {
      setFeedback('')
      setCurrentEmotion((currentEmotion + 1) % emotions.length)
    }, 2000)
  }

  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="mb-6 bg-white/80 rounded-2xl p-4 inline-block">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
          <span className="text-2xl font-bold text-purple-700">Score: {score}</span>
        </div>
      </div>

      <div className="bg-white/90 rounded-3xl p-12 shadow-2xl border-4 border-purple-200 mb-6">
        <div className="text-9xl mb-6">{emotion.emoji}</div>
        <p className="text-2xl font-semibold text-gray-700 mb-8">How does this person feel?</p>

        <div className="grid grid-cols-3 gap-4">
          {emotion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="bg-gradient-to-br from-purple-400 to-pink-400 text-white px-6 py-4 rounded-2xl text-xl font-bold hover:scale-110 transition-transform shadow-lg"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className="text-3xl font-bold text-purple-700 animate-bounce">
          {feedback}
        </div>
      )}
    </div>
  )
}

function SortingGame() {
  const [items] = useState([
    { id: 1, emoji: '🔴', color: 'red' },
    { id: 2, emoji: '🔵', color: 'blue' },
    { id: 3, emoji: '🟢', color: 'green' },
    { id: 4, emoji: '🟡', color: 'yellow' },
    { id: 5, emoji: '🍎', color: 'red' },
    { id: 6, emoji: '🌊', color: 'blue' },
  ])
  
  const [sorted, setSorted] = useState<Record<string, number[]>>({
    red: [],
    blue: [],
    green: [],
    yellow: [],
  })
  
  const [score, setScore] = useState(0)

  const handleDrop = (itemId: number, color: string) => {
    const item = items.find(i => i.id === itemId)
    if (!item) return

    const newSorted = { ...sorted }
    
    // Remove from all buckets first
    Object.keys(newSorted).forEach(key => {
      newSorted[key] = newSorted[key].filter(id => id !== itemId)
    })
    
    // Add to new bucket
    newSorted[color] = [...newSorted[color], itemId]
    setSorted(newSorted)

    // Check if correct
    if (item.color === color) {
      setScore(score + 5)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 text-center bg-white/80 rounded-2xl p-4 inline-block">
        <div className="flex items-center gap-2">
          <Smile className="w-6 h-6 text-green-500" />
          <span className="text-2xl font-bold text-purple-700">Score: {score}</span>
        </div>
      </div>

      <p className="text-2xl font-semibold text-center mb-6 text-gray-700">
        🎨 Sort the items by color!
      </p>

      {/* Items to sort */}
      <div className="bg-white/90 rounded-3xl p-6 mb-6 border-4 border-purple-200">
        <div className="flex flex-wrap gap-4 justify-center">
          {items.filter(item => !Object.values(sorted).flat().includes(item.id)).map(item => (
            <div
              key={item.id}
              className="text-6xl cursor-move bg-white rounded-2xl p-4 shadow-lg hover:scale-110 transition-transform border-4 border-gray-200"
              draggable
              onDragStart={(e) => e.dataTransfer.setData('itemId', item.id.toString())}
            >
              {item.emoji}
            </div>
          ))}
        </div>
      </div>

      {/* Color buckets */}
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(sorted).map(color => (
          <div
            key={color}
            className={`bg-${color}-200 rounded-3xl p-6 min-h-40 border-4 border-${color}-400`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault()
              const itemId = parseInt(e.dataTransfer.getData('itemId'))
              handleDrop(itemId, color)
            }}
          >
            <h3 className="text-xl font-bold text-center mb-4 capitalize">{color}</h3>
            <div className="flex flex-col gap-2">
              {sorted[color].map(itemId => {
                const item = items.find(i => i.id === itemId)
                return item ? (
                  <div key={itemId} className="text-4xl text-center">
                    {item.emoji}
                  </div>
                ) : null
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
