import Navbar from "../../navbar";
import ProblemStudyPlanCard from "./problemstudyplancard";
import Section from "./section";


function Problems() {
	return (
		<>
			<Navbar></Navbar>
			<div className="px-8  xl:px-40 2xl:px-[11.5rem]
			gap-4 grid xl:grid-cols-3 bg-[#1a1a1a] text-[#eff1f6bf]">
				<div className="col-span-3">
					<div className="pt-20 pb-6 grid md:grid-cols-3 justify-center gap-4">
						<div> <img className="rounded-md" src="https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png" alt="Error" /></div>
						<div> <img className="rounded-md" src="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg" alt="error" /></div>
						<div><img className="rounded-md" src="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png" alt="Error" /></div>
					</div>
					<div className="col-span-3">
						<div className="py-4 flex justify-between">
							<div className="text-xl font-semibold">Study Plan</div>
							<div className="text-blue-500">See all</div>
						</div>
						<div className="grid md:grid-cols-3 sm:grid-cols-2 gap-3">
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
							<ProblemStudyPlanCard></ProblemStudyPlanCard>
						</div>
						<div className=" my-8">Tags <span className="bg-[#ffffff1a]"> 1500</span></div>
						<Section></Section>
					</div>
					<div className="h-screen">

					</div>
				</div>
			</div>
		</>
	)
}

export default Problems;