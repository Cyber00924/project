import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import TalentShowcase from '@/models/TalentShowcase'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const data = await req.json()
    const showcase = await TalentShowcase.create(data)
    return NextResponse.json({ showcase }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create showcase item' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect()
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const creatorId = searchParams.get('creatorId')
    
    let query: any = { status: 'active' }
    if (category) query.category = category
    if (creatorId) query.creatorId = creatorId
    
    const showcases = await TalentShowcase.find(query)
      .populate('creatorId', 'name')
      .sort({ createdAt: -1 })
    
    return NextResponse.json({ showcases }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch showcase items' }, { status: 500 })
  }
}
