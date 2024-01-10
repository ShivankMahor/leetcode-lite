function HomePageCard2(){
  return(
    <>
    <div>
      <div className="flex flex-col w-4/5">
        <span className="font-medium text-[14px]">LeetCode Contest</span>
        <span className="my-4">Participate and win your prizes</span>
      </div>
      <button className="border-2 rounded-md p-2 font-bold mb-4">Join Contest</button>
    </div>
    <div className="w-24 p-2">
      <img src="https://leetcode.com/static/images/LeetCode_Cup.png" alt="Error" />
    </div>
    </>
  )
}

export default HomePageCard2;