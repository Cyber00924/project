import mongoose, { Schema, models } from 'mongoose'

const CompetitionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Competition', 'Scholarship'],
    required: true,
  },
  prize: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: ['art', 'music', 'writing', 'technology', 'performance', 'general'],
    required: true,
  },
  requirements: [String],
  isActive: {
    type: Boolean,
    default: true,
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Competition = models.Competition || mongoose.model('Competition', CompetitionSchema)

export default Competition
