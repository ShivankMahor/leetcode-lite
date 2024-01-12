import { useState } from "react";
import { postComment } from "../../../helper/helper";


function PostComment({handleClickToShow}) {

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  function handleClick(e){
    e.preventDefault();
    handleClickToShow();
  }

  async function handleSubmit(e){
    e.preventDefault();
    console.log("tags",tags,title)
    const mtags = tags.replace(/\s+/g, ' ').trim();
    
    const response = await postComment(title,mtags,description);
    console.log(response) 
  }
  return (
    <div className={`fixed w-full bottom-0 left-0 bg-white z-10 border-red-500 border-2`}>
      <form onSubmit={(e)=>handleSubmit(e)} className="p-4 grid gap-5">
        <div className="flex justify-between">
          <input className="border-2 p-2 rounded-md pl-4 w-2/6" onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" required/>
          <div className="flex gap-2">
            <button className="border-2 px-2 rounded-sm " onClick={(e)=>handleClick(e)} >Close</button>
            <button className="px-4 rounded-sm bg-slate-800/90 text-white" type="submit">Post</button>
          </div>
        </div>
        <input className="border-2 p-2 rounded-md pl-4 w-full" onChange={(e) => setTags(e.target.value)} type="text" placeholder="Tags" />
        <textarea className="border-2 rounded-md resize-none p-4" onChange={(e)=>setDescription(e.target.value)} id="" cols="30" rows="9" placeholder="Description" required></textarea>
      </form>
    </div>
  )
}

export default PostComment;