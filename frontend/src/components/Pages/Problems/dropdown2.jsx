import { IoIosArrowDown } from "react-icons/io";
function DropDown2({ index, data, close, status, name }) {
	function toggleDropdown() {
		close(index)
	}
	return (
		<>
			<div onClick={toggleDropdown} className="relative flex-1">
				<button className="flex flex-1 min-w-[90px] bg-[#ffffff1a] rounded-md px-2 py-1  justify-between items-center w-full text-lg">{name} <IoIosArrowDown /></button>
				<div className={`${status === 'open' ? 'opacity-100 block' : 'opacity-0 hidden'} py-2 w-max flex flex-col gap-1 absolute top-10 left-0  rounded-md  bg-[#323131] shadow-md text-white z-20 pr-20 pl-4`}>
					{data.map((item, i) => {
						return <div key={i} className={`${index === 1 ? "a b c" : ""}`}>{item}</div>
					})}
				</div>
			</div>
		</>
	)
}

export default DropDown2;