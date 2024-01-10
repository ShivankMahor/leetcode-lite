import mongoose from "mongoose";
import user from "./user.js";
const refreshTokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    ref: user, // Reference to the User model if you have one
    required: true,
    unique: true,
  }
})

const RefreshToken = mongoose.model('RefreshToken', refreshTokenSchema,'Refresh_Tokens');

export default RefreshToken;