// import { useEffect, useState } from "react";
// import DropDown from "./dropdown";
// import DropDown2 from "./dropdown2";
// import { IoSettingsOutline } from "react-icons/io5";
// import { IoSearch } from "react-icons/io5";
// import { MdOutlineArrowDropUp } from "react-icons/md";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import TableRow from "./tablerow";
// import { RiExpandUpDownFill } from "react-icons/ri";
// import { getProblems } from "../../../helper/helper";
// import { useReducer } from "react";

// function Section() {
// 	const [problems, setProblems] = useState([]);
// 	const getProblem = async (e)=>{
// 		try {		
// 			const data = await getProblems(e)
// 			console.log(data.problems)
// 			setProblems(data.problems)
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	} 
	
// 	const [state, dispatch] = useReducer(problemsReducer,problems)
// 	function problemsReducer(state,action){
// 		console.log(action.type)
// 		switch(action.type){
// 			// case "Easy" : {
// 			// 	const obj = {difficulty : 'Easy'}
// 			// 	getProblem(obj)
// 			// 	break;
// 			// }
// 			// case "Medium" : {
// 			// 	const obj = {difficulty : 'Medium'}
// 			// 	getProblem(obj)
// 			// 	break;
// 			// }
// 			case "Difficulty" : {
// 				const obj = {difficulty : action.data}
// 				getProblem(obj)
// 				break;
// 			}
// 			case "Tags" : {
// 				const obj = {tags : action.data}
// 				getProblem(obj)
// 				break;
// 			}
// 			case "Status" : {
// 				const obj = { solvedBy: { $all: [localStorage.getItem('userName')] } }
// 				getProblem(obj)
// 				break;
// 			}
			
// 		}
// 	}
// 	useEffect(()=>{
// 		console.log("Rerender")
// 	},[problems])
	
// 	useEffect(()=>{
// 		getProblem();
// 		console.log("getProblem")
// 	},[])
// 	const data = [
// 		["LeetCode Curated Algo 170", "LeetCode Curated SQL 70", "Top 100 Liked Questions", "Top Interview Questions", "Favourite"],
// 		["Easy", "Medium", "Hard"],
// 		["Todo", "Solved", "Attempted"],
// 		["Array", "Strings", "Array", "Strings", "Array", "Strings", "Array", "Strings",]
// 	]
// 	const [openOrClosed, setOpenOrClosed] = useState(['close', 'close', 'close', 'close'])
// 	function close(index) {
// 		const new_array = openOrClosed.map((item, i) => {
// 			return index === i ? item === 'open' ? 'close' : 'open' : 'close';
// 		})
// 		// console.log(new_array);
// 		setOpenOrClosed(new_array)
// 	}
// 	return (
// 		<div>
// 			<div className="flex flex-wrap gap-4 text-[#eff1f6bf] mb-10">
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 				<span className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">All Topics</span>
// 			</div>
// 			{/* <div className="flex flex-wrap gap-2"> */}
// 			<div className="md:flex md:flex-wrap grid grid-cols-3 gap-2">
// 				<DropDown index={0} dispatch={dispatch} data={data[0]} close={close} status={openOrClosed[0]} name={'Lists'}></DropDown>
// 				<DropDown index={1} dispatch={dispatch} data={data[1]} close={close} status={openOrClosed[1]} name={'Difficulty'}></DropDown>
// 				<DropDown index={2} dispatch={dispatch} data={data[2]} close={close} status={openOrClosed[2]} name={"Status"}></DropDown>
// 				<div className="col-span-3"><DropDown2 index={3} data={data[3]} close={close} status={openOrClosed[3]} name={"Tags"}></DropDown2> </div>
// 				<div className="bg-[#ffffff1a] flex items-center rounded-md col-span-2 min-h-9">
// 					<div className="pl-2"><IoSearch /></div>
// 					<input className="text-[#eff1f600] pl-2 bg-[#ffffff00]  " type="search" placeholder="Search Question" />
// 				</div>
// 				<button className="bg-[#ffffff1a] px-3 rounded-md w-10"><IoSettingsOutline /></button>
// 				<div className="min-h-9 bg-[#ffffff1a] rounded-md flex items-center px-2">Random</div>
// 			</div>
// 			<div className="mt-10 ">
// 				<div className="flex gap-4 m-2 pb-2 border-b-[1px] border-[#eff1f6bf]">
// 					<h1 className="w-14">Status</h1>
// 					<div className="flex items-center">
// 						<h1 className="w-72">Title</h1>
// 						<h1><RiExpandUpDownFill/></h1>
// 					</div>
// 					<h1 className="w-16">Solution</h1>
// 					<div className="flex items-center">
// 						<h1 className="w-28">Acceptance</h1>
// 						<h1><RiExpandUpDownFill/></h1>
// 					</div>
// 					<div className="flex items-center">
// 						<h1 className="w-24">Difficulty</h1>
// 						<h1><RiExpandUpDownFill/></h1>
// 					</div>
// 					<h1>Frequency</h1>
// 				</div>
// 				<div className="">
// 					{problems.map(item =>{
// 						return <TableRow key={item._id} prop={item}></TableRow>
// 					})}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Section;

import { useEffect, useReducer, useState } from "react";
import DropDown from "./dropdown";
import DropDown2 from "./dropdown2";
import { IoSettingsOutline, IoSearch } from "react-icons/io5";
import { RiExpandUpDownFill } from "react-icons/ri";
import TableRow from "./tablerow";
import { getProblems } from "../../../helper/helper";

// ---------------- Reducer ----------------
function problemsReducer(state, action) {
  switch (action.type) {
    case "SET_PROBLEMS":
      return action.payload;

    case "FILTER_BY_DIFFICULTY":
      return action.fetch({ difficulty: action.payload });

    case "FILTER_BY_TAG":
      return action.fetch({ tags: action.payload });

    case "FILTER_BY_STATUS":
      return action.fetch({
        solvedBy: { $all: [localStorage.getItem("userName")] },
      });

    default:
      return state;
  }
}

function Section() {
  const [problems, dispatch] = useReducer(problemsReducer, []);
  const [openOrClosed, setOpenOrClosed] = useState([
    "close",
    "close",
    "close",
    "close",
  ]);

  // ---------------- API Call ----------------
  const fetchProblems = async (filters = {}) => {
    try {
      const data = await getProblems(filters);
      console.log("Fetched problems:", data.problems);
      dispatch({ type: "SET_PROBLEMS", payload: data.problems });
    } catch (error) {
      console.error("Failed to fetch problems:", error);
    }
  };

  // ---------------- Effects ----------------
  useEffect(() => {
    fetchProblems();
  }, []);

  const toggleDropDown = (index) => {
    setOpenOrClosed((prev) =>
      prev.map((item, i) => (i === index ? (item === "open" ? "close" : "open") : "close"))
    );
  };

  const data = {
    lists: ["LeetCode Curated Algo 170", "LeetCode Curated SQL 70", "Top 100 Liked Questions", "Top Interview Questions", "Favourite"],
    difficulty: ["Easy", "Medium", "Hard"],
    status: ["Todo", "Solved", "Attempted"],
    tags: ["Array", "Strings", "Graph", "DP", "Math"],
  };

  return (
    <div>
      {/* Chips */}
      <div className="flex flex-wrap gap-4 text-[#eff1f6bf] mb-10">
        {["All Topics", "Dynamic Programming", "Greedy", "Graph"].map((tag, i) => (
          <span key={i} className="rounded-full bg-[#ffffff1a] px-4 py-3 text-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Filters */}
      <div className="md:flex md:flex-wrap grid grid-cols-3 gap-2">
        <DropDown
          index={0}
          dispatch={dispatch}
          data={data.lists}
          close={toggleDropDown}
          status={openOrClosed[0]}
          name="Lists"
        />
        <DropDown
          index={1}
          dispatch={dispatch}
          data={data.difficulty}
          close={toggleDropDown}
          status={openOrClosed[1]}
          name="Difficulty"
        />
        <DropDown
          index={2}
          dispatch={dispatch}
          data={data.status}
          close={toggleDropDown}
          status={openOrClosed[2]}
          name="Status"
        />
        <div className="col-span-3">
          <DropDown2
            index={3}
            data={data.tags}
            close={toggleDropDown}
            status={openOrClosed[3]}
            name="Tags"
          />
        </div>

        {/* Search + Controls */}
        <div className="bg-[#ffffff1a] flex items-center rounded-md col-span-2 min-h-9">
          <IoSearch className="pl-2" />
          <input
            className="text-white pl-2 bg-transparent outline-none placeholder:text-gray-400"
            type="search"
            placeholder="Search Question"
          />
        </div>
        <button className="bg-[#ffffff1a] px-3 rounded-md w-10">
          <IoSettingsOutline />
        </button>
        <div className="min-h-9 bg-[#ffffff1a] rounded-md flex items-center px-2">
          Random
        </div>
      </div>

      {/* Problems Table */}
      <div className="mt-10">
        <div className="flex gap-4 m-2 pb-2 border-b border-[#eff1f6bf]">
          <h1 className="w-14">Status</h1>
          <div className="flex items-center">
            <h1 className="w-72">Title</h1>
            <RiExpandUpDownFill />
          </div>
          <h1 className="w-16">Solution</h1>
          <div className="flex items-center">
            <h1 className="w-28">Acceptance</h1>
            <RiExpandUpDownFill />
          </div>
          <div className="flex items-center">
            <h1 className="w-24">Difficulty</h1>
            <RiExpandUpDownFill />
          </div>
          <h1>Frequency</h1>
        </div>

        <div>
          {problems.length > 0 ? (
            problems.map((item) => <TableRow key={item._id} prop={item} />)
          ) : (
            <p className="text-gray-400">No problems found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Section;
