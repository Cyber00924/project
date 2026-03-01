import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Gamification from '@/models/Gamification'

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await dbConnect()
    let gamification = await Gamification.findOne({ userId: params.userId })
    
    if (!gamification) {
      gamification = await Gamification.create({ userId: params.userId })
    }
    
    return NextResponse.json({ gamification }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch gamification data' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await dbConnect()
    const data = await req.json()
    
    const gamification = await Gamification.findOneAndUpdate(
      { userId: params.userId },
      data,
      { new: true, upsert: true }
    )
    
    return NextResponse.json({ gamification }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update gamification data' }, { status: 500 })
  }
}
