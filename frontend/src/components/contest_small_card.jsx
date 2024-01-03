function ContestSmallCard() {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex gap-6">
        <img className="h-[3.8rem] rounded-xl" src="https://leetcode.com/_next/static/images/weekly-default-553ede7bcc8e1b4a44c28a9e4a32068c.png" alt="Loading" />
        <div className="flex flex-col justify-center">
          <div className="text-sm font-semibold">Weekly Contest 378</div>
          <div className="text-[11px] pt-2">Dec 31, 2023 8:00 AM GMT +5:30</div>
        </div>
      </div>
      <div className="text-xs text-purple-600 rounded-md bg-gray-600/70 px-2 py-1">Virtual</div>
    </div>
  )
}

export default ContestSmallCard;