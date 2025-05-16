import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    story: { type: Schema.Types.ObjectId, ref: 'Story', required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'Contributor' },
    status: {
      type: String,
      enum: ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'],
      default: 'TODO',
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

export default model('Task', taskSchema);
