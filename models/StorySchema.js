import { Schema, model } from 'mongoose';

const storySchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Contributor' },
    status: {
      type: String,
      enum: ['BACKLOG', 'IN_PROGRESS', 'REVIEW', 'COMPLETED'],
      default: 'BACKLOG',
    },
    priority: {
      type: String,
      enum: ['LOW', 'MEDIUM', 'HIGH'],
      default: 'MEDIUM',
    },
    dueDate: { type: Date },
  },
  { timestamps: true },
);

export default model('Story', storySchema);
