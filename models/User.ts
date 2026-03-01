import mongoose, { Schema, models } from 'mongoose'

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['parent', 'child', 'therapist', 'admin'],
    default: 'parent',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const User = models.User || mongoose.model('User', UserSchema)

export default User
