import mongoose, { Schema, models } from 'mongoose'

const AchievementSchema = new Schema({
  name: String,
  description: String,
  icon: String,
  earnedAt: Date,
})

const GamificationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  level: {
    type: Number,
    default: 1,
  },
  experience: {
    type: Number,
    default: 0,
  },
  stars: {
    type: Number,
    default: 0,
  },
  achievements: [AchievementSchema],
  streak: {
    current: {
      type: Number,
      default: 0,
    },
    longest: {
      type: Number,
      default: 0,
    },
    lastActivity: Date,
  },
  badges: [{
    name: String,
    icon: String,
    color: String,
    earnedAt: Date,
  }],
  dailyGoals: {
    lessonsCompleted: {
      type: Number,
      default: 0,
    },
    target: {
      type: Number,
      default: 3,
    },
    lastReset: Date,
  },
  rewards: [{
    type: String,
    description: String,
    unlockedAt: Date,
  }],
})

const Gamification = models.Gamification || mongoose.model('Gamification', GamificationSchema)

export default Gamification
