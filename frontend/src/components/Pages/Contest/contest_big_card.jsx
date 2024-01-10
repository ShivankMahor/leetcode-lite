import { FaRegClock } from "react-icons/fa6";

function ContestBigCard() {
  return (
    <div>
      <div className="w-96">
        <img className="rounded-t-2xl" src="https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png" alt="Error" />
        <div className="flex items-center gap-2 relative top-[-1.5rem] pl-4">
          <FaRegClock></FaRegClock>
          Starts in timetimetimetime
        </div>
      </div>
      <div className="bg-gray-500/20 relative top-[-1.5rem] p-4 rounded-b-2xl">
        <div className="text-xl font-semibold">Weekely Contest 291</div>
        <div className="text-sm text-gray-400">Sunday 8:00 AM GMT +5:30</div>
      </div>
    </div>
  )
}

export default ContestBigCard;