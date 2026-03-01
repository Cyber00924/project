import mongoose, { Schema, models } from 'mongoose'

const ProgressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  completedLessons: [{
    type: Number,
  }],
  score: {
    type: Number,
    default: 0,
  },
  lastAccessed: {
    type: Date,
    default: Date.now,
  },
  completionPercentage: {
    type: Number,
    default: 0,
  },
})

const Progress = models.Progress || mongoose.model('Progress', ProgressSchema)

export default Progress
