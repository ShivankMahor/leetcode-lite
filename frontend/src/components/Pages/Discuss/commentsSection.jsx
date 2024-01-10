import { useEffect, useState } from "react";
import Comment from "./coments"
import { getComments } from "../../../helper/helper";
function CommentSection(){
  const [allComments, setAllComments] = useState([]);

  useEffect(()=>{
    const reqComment = async ()=>{
      const response = await getComments();
      console.log(response)
      let { success } = response
      if(!success) throw new Error ('Error in getting Comments');
      else{
        setAllComments(response.comments);
      }
    }
    reqComment();
  },[])
  return(
    <div>
      {allComments.map((comment)=>(
        <Comment key={comment._id} props={comment} ></Comment>
      ))}
    </div>
  )
} 

export default CommentSection;