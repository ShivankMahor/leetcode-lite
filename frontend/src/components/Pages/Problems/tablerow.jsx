function TableRow({prop}) {
	// console.log(prop)
	return (
		<div className="flex gap-4 m-2">
			<div className="w-14"></div>
			<div className="w-[304px]">{prop.frontendQuestionNo} {prop.questionName}</div>
			<div className="w-16">--</div>
			<div className="w-[128px]">{prop.acRate}%</div>
			<div className={`w-[112px] ${prop.difficulty === "Medium" ? "text-[#e6e633]" : prop.difficulty === "Easy" ? "text-[#18ba2b]" : "text-[#D14343]"} `}>{prop.difficulty}</div>
			<div className="">Frequency</div>
		</div>
	)
}

export default TableRow;