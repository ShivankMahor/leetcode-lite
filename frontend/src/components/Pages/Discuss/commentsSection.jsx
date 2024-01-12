import { useEffect, useState } from "react";
import Comment from "./coments"
import { getComments } from "../../../helper/helper";
import PostComment from "./postcomment";


function CommentSection() {
  const [allComments, setAllComments] = useState([]);
  const [query, setQuery] = useState("");
  const [isHidden, setIsHidden] = useState(true)
  const [latestRequestId, setLatestRequestId] = useState(null);

  function handleClickToHide() {
    setIsHidden(false);
  }
  function handleClickToShow() {
    setIsHidden(true);
  }

  // let debounceTimeout; 
  // useEffect(() => {
  //   const reqComment = async () => {
  //     try {
  //       clearTimeout(debounceTimeout);
  //       debounceTimeout = setTimeout(async ()=>{
  //         const response = await getComments(query);
  //         console.log("comments", response)
  //         let { success } = response
  //         if (!success) throw new Error('Error in getting Comments');
  //         else {
  //           setAllComments(response.comments);
  //         }
  //       },500)
  //     } catch (error) {
  //       console.log("Error in Fetching Comments", error);
  //     }
  //   }
  //   reqComment();
  // }, [query])
  useEffect(() => {
    const reqComment = async () => {
      try {
        const response = await getComments(query);
        console.log("comments", response)
        let { success } = response
        if (!success) throw new Error('Error in getting Comments');
        else {
          setAllComments(response.comments);
        }
      } catch (error) {
        console.log("Error in Fetching Comments", error);
      }
    }
    reqComment();
  }, [query])
  return (<>
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
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search topics" className="text-[12px] h-7 border-1 border-gray-400 rounded-sm px-3 w-44" />
        <button onClick={handleClickToHide} className=" text-md bg-slate-800/90 h-7 px-2 text-white rounded-sm">New +</button>
      </div>
    </div>
    <div>
      {allComments.map((comment) => (
        <Comment key={comment._id} props={comment} ></Comment>
      ))}
    </div>
    <div className={isHidden ? 'hidden' : ''}>
      <PostComment handleClickToShow={handleClickToShow}></PostComment>
    </div>
  </>
  )
}

export default CommentSection;