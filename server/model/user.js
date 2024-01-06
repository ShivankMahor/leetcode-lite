import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type:String,
    required: true,
    maxLength:16
  },
  email: {
    type:String,
    required: true,
    unique: true
  },
  password: {
    type:String,
    required :[true,'Passwrod is required'],
  },
})

const user = mongoose.model('user',userSchema);
export default user;