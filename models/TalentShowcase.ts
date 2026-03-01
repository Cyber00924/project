import mongoose, { Schema, models } from 'mongoose'

const TalentShowcaseSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
    enum: ['artwork', 'craft', 'music', 'writing', 'digital', 'other'],
    required: true,
  },
  images: [{
    type: String,
  }],
  price: {
    type: Number,
    default: 0,
  },
  isForSale: {
    type: Boolean,
    default: false,
  },
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  tags: [{
    type: String,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'sold', 'archived'],
    default: 'active',
  },
})

const TalentShowcase = models.TalentShowcase || mongoose.model('TalentShowcase', TalentShowcaseSchema)

export default TalentShowcase
