import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Course from '@/models/Course'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const data = await req.json()
    const course = await Course.create(data)
    return NextResponse.json({ course }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect()
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    
    const query = category ? { category } : {}
    const courses = await Course.find(query).populate('createdBy', 'name email')
    
    return NextResponse.json({ courses }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}
