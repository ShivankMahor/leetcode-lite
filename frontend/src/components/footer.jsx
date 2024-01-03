function Footer(){
  return(
    <div className="flex justify-between text-[12px] p-2 bg-white mt-20">
      <div className="flex">
        <div className="text-gray-900/70"><a href="#">Copyright © LeetCode</a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Help Center</a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Jobs</a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Bug Bounty               </a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Online Interview</a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Student</a></div>
        <div className="border-r-[1px] px-3 border-gray-400/30"><a href="#">Terms</a></div>
        <div className="px-3"><a href="#">Privacy Policy</a></div>
      </div>
      <div className="flex gap-2">
        <img className="w-[1.125rem]" src="https://leetcode.com/static/images/region/us.svg" alt="" />
        <div><a href="#">United States</a></div>
      </div>
    </div>
  )
}

export default Footer;