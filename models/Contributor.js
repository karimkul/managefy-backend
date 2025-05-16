import { Schema, model } from 'mongoose';

const contributorSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['CONTRIBUTOR', 'TEAM_MEMBER'],
      default: 'CONTRIBUTOR',
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'ACTIVE',
    },
    assignedProject: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    invitedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
      required: true,
    },
  },
  { timestamps: true },
);

export default model('Contributor', contributorSchema);
