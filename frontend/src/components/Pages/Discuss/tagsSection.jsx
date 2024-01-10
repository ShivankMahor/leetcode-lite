import { useEffect, useState } from "react";
import { getTags } from "../../../helper/helper";
import DiscussTags from "./discusstags";

function TagsSection(){
  const [tags, setTags] = useState([]);
  // const [loading, setLoading] = useSt
  useEffect(()=>{
    const loadTags = async ()=>{
      try {
        // let a = Promise(setTimeout(Promise.resolve,5000))
        const response = await getTags();
        const {success} = response;
        if(!success) throw new Error(response.error);
        console.log("Res:\n",response)
        setTags(response.tags)
        
      } catch (error) {
        console.log("Error in fetching Tags", error);
      }
    } 
    loadTags();
  },[])

  console.log("this is tags",tags)
  return (
    <>
      {tags.map((element) =>(
        <DiscussTags key={element._id} name={element.tag} timesUsed={element.timesUsed}></DiscussTags>
      ))}
    </>
  )
}

export default TagsSection;