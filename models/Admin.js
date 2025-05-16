import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const companySchema = new Schema({
  name: { type: String },
  position: { type: String },
});

const taskSchema = new Schema({
  title: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['TODO', 'INPROGRESS', 'DONE'],
    default: 'TODO',
  },
});

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    preferredFirstName: { type: String },
    password: { type: String, required: true },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE'],
      default: 'INACTIVE',
    },
    role: { type: String, enum: ['ADMIN'], default: 'ADMIN' },
    company: companySchema,
    tasks: [taskSchema],
  },
  { timestamps: true },
);

export default model('Admin', adminSchema);
