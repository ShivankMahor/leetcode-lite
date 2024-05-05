function HomePagePosts() {
  return (
    <>
      <div className="border-b-4 flex gap-3 p-4">
        <div className="w-[50px] h-[50px] ">
          <img className="rounded-full " src="https://assets.leetcode.com/users/default_avatar.jpg" alt="Error" />
        </div>
        <div>
          <div className="text-gray-500 font-semibold">User Name</div>
          Description 
        </div>
      </div>
      <div className="border-1 border-black "></div>
    </>
  )
}

export default HomePagePosts;