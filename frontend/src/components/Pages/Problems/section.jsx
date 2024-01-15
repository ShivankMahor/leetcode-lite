import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import DropDown2 from "./dropdown2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import TableRow from "./tablerow";
import { RiExpandUpDownFill } from "react-icons/ri";
import { getProblems } from "../../../helper/helper";
function Section() {
	const [problems, setProblems] = useState([]);

	const getProblem = async ()=>{
		try {
			console.log("getProblem1")
			const data = await getProblems()
			console.log(data.problems)
			setProblems(data.problems)
		} catch (error) {
			console.log(error)
		}
	} 
	useEffect(()=>{
		getProblem();
		console.log("getProblem")
	},[])
	const data = [
		["LeetCode Curated Algo 170", "LeetCode Curated SQL 70", "Top 100 Liked Questions", "Top Interview Questions", "Favourite"],
		["Easy", "Medium", "Hard"],
		["Todo", "Solved", "Attempted"],
		["Array", "Strings", "Array", "Strings", "Array", "Strings", "Array", "Strings",]
	]
	const [openOrClosed, setOpenOrClosed] = useState(['close', 'close', 'close', 'close'])
	function close(index) {
		console.log("to change staus :", index)
		const new_array = openOrClosed.map((item, i) => {
			return index === i ? item === 'open' ? 'close' : 'open' : 'close';
		})
		console.log(new_array);
		setOpenOrClosed(new_array)
	}
	return (
		<div>
			<div className="flex flex-wrap gap-4 text-[#eff1f6bf] mb-10">
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
			</div>
			{/* <div className="flex flex-wrap gap-2"> */}
			<div className="md:flex md:flex-wrap grid grid-cols-3 gap-2">
				<DropDown index={0} data={data[0]} close={close} status={openOrClosed[0]} name={'Lists'}></DropDown>
				<DropDown index={1} data={data[1]} close={close} status={openOrClosed[1]} name={'Difficulty'}></DropDown>
				<DropDown index={2} data={data[2]} close={close} status={openOrClosed[2]} name={"Status"}></DropDown>
				<div className="col-span-3"><DropDown2 index={3} data={data[3]} close={close} status={openOrClosed[3]} name={"Tags"}></DropDown2> </div>
				<div className="bg-[#ffffff1a] flex items-center rounded-md col-span-2 min-h-9">
					<div className="pl-2"><IoSearch /></div>
					<input className="text-[#eff1f600] pl-2 bg-[#ffffff00]  " type="search" placeholder="Search Question" />
				</div>
				<button className="bg-[#ffffff1a] px-3 rounded-md w-10"><IoSettingsOutline /></button>
				<div className="min-h-9 bg-[#ffffff1a] rounded-md flex items-center px-2">Random</div>
			</div>
			<div className="mt-10 ">
				<div className="flex gap-4 m-2 pb-2 border-b-[1px] border-[#eff1f6bf]">
					<h1 className="w-14">Status</h1>
					<div className="flex items-center">
						<h1 className="w-72">Title</h1>
						<h1><RiExpandUpDownFill/></h1>
					</div>
					<h1 className="w-16">Solution</h1>
					<div className="flex items-center">
						<h1 className="w-28">Acceptance</h1>
						<h1><RiExpandUpDownFill/></h1>
					</div>
					<div className="flex items-center">
						<h1 className="w-24">Difficulty</h1>
						<h1><RiExpandUpDownFill/></h1>
					</div>
					<h1>Frequency</h1>
				</div>
				<div className="">
					{problems.map(item =>{
						return <TableRow key={item._id} prop={item}></TableRow>
					})}
				</div>
			</div>
		</div>
	)
}

export default Section;