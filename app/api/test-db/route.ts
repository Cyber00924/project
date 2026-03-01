import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'

export async function GET() {
  try {
    await connectDB()
    
    return NextResponse.json(
      { 
        message: '✅ Database connected successfully!',
        database: 'outlier-db',
        status: 'connected'
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: '❌ Database connection failed',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
