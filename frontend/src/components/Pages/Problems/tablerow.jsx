import { navigate } from "react-router-dom";

function TableRow({prop}) {
	console.log("Props",prop)
	function handleClick(){
	}
	return (
		<a className="flex gap-4 m-2" onClick={handleClick} href={prop.link}>
			<div className="w-14"></div>
			<div className="w-[304px]">{prop.frontendQuestionNo} {prop.questionName}</div>
			<div className="w-16">--</div>
			<div className="w-[128px]">{prop.acRate}%</div>
			<div className={`w-[112px] ${prop.difficulty === "Medium" ? "text-[#e6e633]" : prop.difficulty === "Easy" ? "text-[#18ba2b]" : "text-[#D14343]"} `}>{prop.difficulty}</div>
			<div className="">{Math.floor(Math.random()*60)+30}%</div>
		</a>
	)
}

export default TableRow;