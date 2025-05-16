import mongoose, { Schema } from "mongoose";

const { Schema, model } = mongoose;

const teamMemberSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        postion: { type: String, required: true },
        status: {
            type: String,
            required: true,
            enum: ["ACTIVE", "INACTIVE", "DEACTIVATED"],
            default: "INACTIVE"
        },
        joinDate: { type: Date },
        role: { type: String, enum: ["TEAM_MEMBER"], default: "TEAM_MEMBER" },
        adimn: { type: Schema.Types.ObjectId, ref: "Admin", required: true }
    },
    { timestamps: true }
);

export default model("TeamMember", teamMemberSchema);
