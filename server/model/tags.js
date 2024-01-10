import mongoose from "mongoose";

const tagsSchema = new mongoose.Schema({
  tag:{
    type: String,
    require : true,
    unique : true,
  },
  timesUsed:{
    type:Number,
    default: 0,
  }
})

const Tags = mongoose.model('tag',tagsSchema,'Tags');
export default Tags;