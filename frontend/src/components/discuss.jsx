import Navbar from "./navbar";
import DiscussTopCard from "./discusstopcard"
import DiscussComments from "./discusscoments";
import DiscussTags from "./discusstags";
import Footer from "./footer";
function Discuss() {
  return (
    <>
      <Navbar></Navbar>
    <div className="grid gap-2 mx-36">
      <div className="grid grid-cols-7 gap-4 ">
        <DiscussTopCard data={"Interview Question"}></DiscussTopCard>
        <DiscussTopCard data={"Interview Experience"}></DiscussTopCard>
        <DiscussTopCard data={"Compensation"}></DiscussTopCard>
        <DiscussTopCard data={"Career"}></DiscussTopCard>
        <DiscussTopCard data={"Study Guide"}></DiscussTopCard>
        <DiscussTopCard data={"General Discussion"}></DiscussTopCard>
        <DiscussTopCard data={"Support & Feedback"}></DiscussTopCard>
      </div>
      <div className="bg-white p-3 rounded-sm drop-shadow-sm text-sm">Check out the announcement of our new feature - LeetCode Interview</div>
      <div className="bg-white p-3 rounded-sm drop-shadow-sm text-sm">Share your post on LeetCode and enter our giveaway🎁! </div>
      <div className="bg-white p-3 rounded-sm drop-shadow-sm text-sm">Please take a moment to read our Community Rules here before posting.</div>

      <div className="grid grid-cols-5 gap-2">
        <div className="border-2 rounded-sm col-span-4 bg-white ">
          <div className="flex p-2 gap-4 text-lg font-medium">
            <div>All Interview Questions</div>
            <div>System Design</div>
            <div>Operating System</div>
            <div>Object-Oriented Design</div>
          </div>
          <div className="flex justify-between align-middle bg-gray-400/30 p-2">
            <div className="flex gap-3 text-[12px] pt-1 justify-center">
              <div>Hot</div>
              <div>Newest To Oldest</div>
              <div>Most Votes</div>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search topics or comments..." className="text-[12px] h-7 border-1 border-gray-400 rounded-sm px-3 w-44"/>
              <div className=" text-md bg-slate-800/90 h-7 px-2 text-white rounded-sm">New +</div>
            </div>
          </div>
          <div>
            <DiscussComments votes={120} views={1200}></DiscussComments>
            <DiscussComments votes={120} views={1200}></DiscussComments>
            <DiscussComments votes={120} views={1200}></DiscussComments>
            <DiscussComments votes={120} views={1200}></DiscussComments>
            <DiscussComments votes={120} views={1200}></DiscussComments>
            <DiscussComments votes={120} views={1200}></DiscussComments>
          </div>
        </div>
        <div className="p-4 bg-white rounded-sm ">
          <div className="font-medium text-gray-500 border-b-[1px] pb-2 border-gray-400/50">Tags</div>
          <div>
            <input type="text" name="" id="" placeholder="Search for tags" className="text-[14px]  border-[1px] border-gray-500/30 rounded-sm px-2 py-1 w-full my-3"/>           
            <div className="flex flex-wrap gap-2 text-[12px]">
              <DiscussTags name={"Google India"} number={1200}></DiscussTags>
              <DiscussTags name={"Amazon"} number={1710}></DiscussTags>
              <DiscussTags name={"Flipkart"} number={520}></DiscussTags>
              <DiscussTags name={"Online Assesment"} number={1200}></DiscussTags>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Discuss;