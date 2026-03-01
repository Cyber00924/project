import mongoose, { Schema, models } from 'mongoose'

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['communication', 'social', 'academic', 'life-skills'],
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner',
  },
  content: [{
    type: {
      type: String,
      enum: ['video', 'flashcard', 'quiz', 'game'],
    },
    title: String,
    url: String,
    data: Schema.Types.Mixed,
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Course = models.Course || mongoose.model('Course', CourseSchema)

export default Course
