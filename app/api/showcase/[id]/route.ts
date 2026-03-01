import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import TalentShowcase from '@/models/TalentShowcase'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const showcase = await TalentShowcase.findById(params.id)
      .populate('creatorId', 'name email')
    
    if (!showcase) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }

    // Increment views
    showcase.views += 1
    await showcase.save()
    
    return NextResponse.json({ showcase }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch item' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const data = await req.json()
    const showcase = await TalentShowcase.findByIdAndUpdate(
      params.id,
      data,
      { new: true }
    )
    
    if (!showcase) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }
    
    return NextResponse.json({ showcase }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update item' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()
    const showcase = await TalentShowcase.findByIdAndDelete(params.id)
    
    if (!showcase) {
      return NextResponse.json({ error: 'Item not found' }, { status: 404 })
    }
    
    return NextResponse.json({ message: 'Item deleted successfully' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete item' }, { status: 500 })
  }
}
