import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Progress from '@/models/Progress'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const { userId, courseId, completedLessons, score } = await req.json()

    let progress = await Progress.findOne({ userId, courseId })
    
    if (progress) {
      progress.completedLessons = completedLessons
      progress.score = score
      progress.lastAccessed = new Date()
      await progress.save()
    } else {
      progress = await Progress.create({
        userId,
        courseId,
        completedLessons,
        score,
      })
    }

    return NextResponse.json({ progress }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update progress' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect()
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'userId required' }, { status: 400 })
    }

    const progress = await Progress.find({ userId })
      .populate('courseId', 'title description category')
    
    return NextResponse.json({ progress }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 })
  }
}
