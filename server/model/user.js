import mongoose from "mongoose";

const emailValidator = function validateEmail(v){
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
}
const userSchema = new mongoose.Schema({
  userName: {
    type:String,
    required: true,
    maxLength:16,
    unique: [true, 'Username Should be Unique']
  },
  email: {
    type:String,
    required: true,
    unique: true,
    validate: emailValidator
  },
  password: {
    type:String,
    required :[true,'Passwrod is required'],
  },
})

const user = mongoose.model('user',userSchema);
export default user;