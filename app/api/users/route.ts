import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  try {
    await dbConnect()
    const { name, email, password, role } = await req.json()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    })

    return NextResponse.json({ 
      message: 'User created successfully',
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  try {
    await dbConnect()
    const users = await User.find({}).select('-password')
    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
