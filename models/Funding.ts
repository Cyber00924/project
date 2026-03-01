import mongoose, { Schema, models } from 'mongoose'

const FundingSchema = new Schema({
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
    enum: ['Education Grants', 'Therapy Funding', 'Assistive Tech', 'Other'],
    required: true,
  },
  minAmount: {
    type: Number,
    required: true,
  },
  maxAmount: {
    type: Number,
    required: true,
  },
  eligibility: [String],
  applicationUrl: String,
  deadline: Date,
  isActive: {
    type: Boolean,
    default: true,
  },
  applicants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const Funding = models.Funding || mongoose.model('Funding', FundingSchema)

export default Funding
