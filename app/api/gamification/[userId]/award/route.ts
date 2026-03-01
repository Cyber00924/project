import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Gamification from '@/models/Gamification'

export async function POST(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await dbConnect()
    const { type, amount } = await req.json()
    
    let gamification = await Gamification.findOne({ userId: params.userId })
    
    if (!gamification) {
      gamification = await Gamification.create({ userId: params.userId })
    }
    
    // Award stars or experience
    if (type === 'stars') {
      gamification.stars += amount
    } else if (type === 'experience') {
      gamification.experience += amount
      
      // Level up logic
      const experienceForNextLevel = gamification.level * 100
      if (gamification.experience >= experienceForNextLevel) {
        gamification.level += 1
        gamification.experience = gamification.experience - experienceForNextLevel
      }
    }
    
    await gamification.save()
    
    return NextResponse.json({ 
      gamification,
      leveledUp: type === 'experience' && gamification.experience < amount 
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to award points' }, { status: 500 })
  }
}
