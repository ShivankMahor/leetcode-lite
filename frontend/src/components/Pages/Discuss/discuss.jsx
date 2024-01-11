import Navbar from "../../navbar";
import DiscussTopCard from "./discusstopcard"
import Footer from "../../footer";
import CommentSection from "./commentsSection";
import TagsSection from "./tagsSection";




function Discuss() {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid gap-2 px-36 bg-gray-400/15">
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

        <div className="grid grid-cols-5 gap-2 ">
          <div className="rounded-sm col-span-4 bg-white ">
            <CommentSection></CommentSection>
          </div>
          <div>
            <TagsSection></TagsSection>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Discuss;