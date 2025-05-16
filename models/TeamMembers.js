import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const teamMemberSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    position: { type: String, required: true }, // fixed typo here
    status: {
      type: String,
      required: true,
      enum: ['ACTIVE', 'INACTIVE', 'DEACTIVATED'],
      default: 'INACTIVE',
    },
    joinDate: { type: Date },
    role: { type: String, enum: ['TEAM_MEMBER'], default: 'TEAM_MEMBER' },
    admin: { type: Schema.Types.ObjectId, ref: 'Admin', required: true }, // fixed typo from 'adimn' to 'admin'
  },
  { timestamps: true },
);

export default model('TeamMember', teamMemberSchema);
