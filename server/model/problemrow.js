import mongoose, { mongo } from "mongoose";

const problemRowSchema = new mongoose.Schema({
	acRate:{
		type: Number,
		require: true,
	},
	difficulty:{
		type:String,
		enum:["Easy","Medium","Hard"],
		require: true
	},
	questionName:{
		type:String,
		require: true,
	},
	frontendQuestionNo:{
		type: Number,
		require: true,
		unique: true,
	},
	solvedBy:{
		type:[String],
	},
	topicTags:{
		type:[String],
		require: true,
	}
})

const ProblemRow = mongoose.model('problemRow', problemRowSchema,'Problem_Row')
export default ProblemRow