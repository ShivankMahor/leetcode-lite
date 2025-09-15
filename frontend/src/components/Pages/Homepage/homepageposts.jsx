// function HomePagePosts() {
//   return (
//     <>
//       <div className="border-b-4 flex gap-3 p-4">
//         <div className="w-[50px] h-[50px] ">
//           <img className="rounded-full " src="https://assets.leetcode.com/users/default_avatar.jpg" alt="Error" />
//         </div>
//         <div>
//           <div className="text-gray-500 font-semibold">User Name</div>
//           Description 
//         </div>
//       </div>
//       <div className="border-1 border-black "></div>
//     </>
//   )
// }

// export default HomePagePosts;


function HomePagePosts({ avatar, userName, description, timestamp, likes, comments }) {
  return (
    <div className="border-b border-gray-300 flex gap-3 p-4 hover:bg-gray-50 transition">
      {/* Avatar */}
      <div className="w-[50px] h-[50px]">
        <img
          className="rounded-full object-cover w-full h-full"
          src={avatar || "https://assets.leetcode.com/users/default_avatar.jpg"}
          alt={`${userName}'s avatar`}
        />
      </div>

      {/* Post content */}
      <div className="flex flex-col gap-1 flex-1">
        {/* User Info */}
        <div className="flex items-center justify-between">
          <span className="text-gray-800 font-semibold">{userName}</span>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm">{description}</p>

        {/* Stats */}
        <div className="flex items-center gap-6 text-xs text-gray-500 mt-1">
          <span>👍 {likes}</span>
          <span>💬 {comments} comments</span>
        </div>
      </div>
    </div>
  );
}

export default HomePagePosts;
