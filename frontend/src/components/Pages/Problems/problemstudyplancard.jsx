function ProblemStudyPlanCard(){
	return(
		<div className="bg-[#ffffff1a] flex p-2 rounded-xl">
			<img className="h-[4.5rem] rounded-md" src="https://assets.leetcode.com/study_plan_v2/top-interview-150/cover" alt="Image"></img>
			<div className="flex flex-col p-3">
				<div>Heading</div>
				<div className="text-gray-500 text-sm">Sub Heading</div>
			</div>
		</div>
	)
}

export default ProblemStudyPlanCard;