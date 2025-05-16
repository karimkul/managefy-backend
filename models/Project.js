import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  progress: { type: Number, min: 0, max: 100, default: 0 },
  status: {
    type: String,
    enum: ['ACTIVE', 'ONHOLD', 'COMPLETED', 'ARCHIVED'],
    default: 'ACTIVE',
  },
  admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true },
});

export default model('Project', projectSchema);
