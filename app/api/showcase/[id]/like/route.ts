import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import TalentShowcase from '@/models/TalentShowcase'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const showcase = await TalentShowcase.findById(params.id)
    
    if (!showcase) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    showcase.likes += 1
    await showcase.save()
    
    return NextResponse.json({ likes: showcase.likes }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to like item' }, { status: 500 })
  }
}
