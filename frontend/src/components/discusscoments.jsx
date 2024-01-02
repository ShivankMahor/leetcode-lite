import DiscussTags from "./discusstags";
import { RiArrowUpSFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FaEye } from "react-icons/fa";


function DiscussComments({ votes, views }) {
  return (
    <div>
      <div className="flex align-middle justify-between border-b-[1px] mr-4 border-gray-600/30">
        <div className="flex">
          <img className="w-[45px] h-[45px] m-4 rounded-full" src="https://assets.leetcode.com/users/default_avatar.jpg" alt="Error" />
          <div className="m-2 ml-0">
            <div className="font-bold flex gap-2">
              <div>Join Our Contest</div>
              <DiscussTags name={"Google India"}></DiscussTags>
            </div>
            <div className="text-[12px] text-gray-500">In 5 Days</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 py-4">
          <IconContext.Provider value={{ color: "gray", size: "2em", className: "global-class-name" }}>
            <div className="grid grid-cols-2"><RiArrowUpSFill />{votes}</div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "gray", size: "1.2rem", className: "global-class-name" }}>
            <div className="grid grid-cols-2"><span className="pt-1"><FaEye /></span>{views}</div>
          </IconContext.Provider>
        </div>
      </div>
    </div >
  )
}

export default DiscussComments;