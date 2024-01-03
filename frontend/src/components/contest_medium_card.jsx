import { RxCounterClockwiseClock } from "react-icons/rx";

function ContestMediumCard() {
  return (
    <div>
      <img className="rounded-xl h-44" src="https://assets.leetcode.com/contest/weekly-contest-291/card_img_1654267951.png" alt="Loading" />
      <div className="font-bold mt-2 mb-1">Weekly Contest 291</div>
      <div>
        <div className="flex align-middle leading-4 gap-1 text-[.875rem] text-gray-400">
          <div className="pt-[1.5px]"><RxCounterClockwiseClock /></div>
          <div>Ended</div>
          <div className="text-gray-400/50">May 1, 2022</div>
        </div>
      </div>
    </div>
  )
}
export default ContestMediumCard;