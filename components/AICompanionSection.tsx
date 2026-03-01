'use client'

import { useState } from 'react'
import { Bot, Mic, BookOpen, Brain, FileText, Send } from 'lucide-react'

const aiFeatures = [
  {
    id: 1,
    title: 'Speech Recognition',
    description: 'Practice speaking with real-time AI feedback and pronunciation guides',
    icon: <Mic className="w-6 h-6" />,
    color: 'bg-red-500'
  },
  {
    id: 2,
    title: 'AI Reading Assistant',
    description: 'Text-to-speech with adjustable pace, highlighting, and comprehension checks',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-teal-500'
  },
  {
    id: 3,
    title: 'Personalized Learning AI',
    description: 'AI model that adapts to your learning style and creates custom lesson plans',
    icon: <Brain className="w-6 h-6" />,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Report Generator',
    description: 'Auto-generate progress reports for parents, teachers, and organizations',
    icon: <FileText className="w-6 h-6" />,
    color: 'bg-orange-500'
  }
]

const chatMessages = [
  {
    id: 1,
    type: 'ai',
    text: "Hi! 👋 I'm your AI learning assistant. How can I help you today?",
    avatar: '🤖'
  },
  {
    id: 2,
    type: 'user',
    text: 'Can you help me practice social skills?',
    avatar: '👤'
  },
  {
    id: 3,
    type: 'ai',
    text: "Of course! Let's start with a fun role-play scenario. You'll earn 50 XP! 🎮",
    avatar: '🤖'
  }
]

export default function AICompanionSection() {
  const [inputValue, setInputValue] = useState('')

  return (
    <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
            <Bot className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">AI Powered</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your AI Learning Companion
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Speech recognition, AI reading assistant, and personalized education models
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Chat Interface */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-6">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">OUTLIER AI</h3>
                  <p className="text-white/80 text-sm">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4 min-h-[300px] bg-gray-50">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                    message.type === 'ai' ? 'bg-blue-100' : 'bg-teal-100'
                  }`}>
                    {message.avatar}
                  </div>
                  <div
                    className={`max-w-[70%] p-4 rounded-2xl ${
                      message.type === 'ai'
                        ? 'bg-white shadow-md'
                        : 'bg-teal-500 text-white'
                    }`}
                  >
                    <p className={`text-sm ${message.type === 'user' ? 'text-white' : 'text-gray-800'}`}>
                      {message.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-gray-800"
                />
                <button className="bg-teal-500 hover:bg-teal-600 p-3 rounded-full transition-colors shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - AI Features */}
          <div className="space-y-4">
            {aiFeatures.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`${feature.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
