import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //profilePic: {},
  //bio: {},
  createdAt:{ type: Date, default: Date.now }
});

export const userModel = mongoose.model("User", userSchema);
