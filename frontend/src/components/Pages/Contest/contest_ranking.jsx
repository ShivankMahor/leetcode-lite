function ContestRanking({rank}) {
  return (
    <div className="flex gap-4 items-center">
      <div>{rank}</div>
      <img className="rounded-full h-12" src="https://assets.leetcode.com/users/default_avatar.jpg" alt="Error" />
      <div>
        <div className="text-sm font-semibold">Player Name</div>
        <div className="flex gap-4 text-xs">
          <div className="flex gap-1">
            <div className="text-gray-400 ">Rating:</div>
            <div>{Math.floor(Math.random()*1500)}</div>
          </div>
          <div className="flex gap-1">
            <div className="text-gray-400 ">Attended:</div>
            <div>{Math.floor(Math.random()*50)+10}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContestRanking;