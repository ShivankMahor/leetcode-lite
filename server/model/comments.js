import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  topicTitle:{
    type: String,
    required: true,
  },
  tags:{
    type: [String],
    default:[]
  },
  description:{
    type: String,
    required: true,
  },
  createdBy:{
    type: String,
    required: true,
  },
  votes:{
    type: Number,
    default: 0,
  },
  views:{
    type: Number,
    default: 0,
  }
})

const Comment = mongoose.model('comments', commentSchema,"All_Comments");
export default Comment