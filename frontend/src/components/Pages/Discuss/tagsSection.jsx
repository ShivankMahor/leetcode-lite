import { useEffect, useMemo, useState } from "react";
import { getTags } from "../../../helper/helper";
import DiscussTags from "./discusstags";

function TagsSection() {
  
  console.log("TagsSection Rerender")

  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");
  const filteredTags = useMemo(() => {  
    return tags.filter(item => {
      return item.tag.toLowerCase().includes(query.toLowerCase())
    })
  },[tags,query])


  useEffect(() => {
    const loadTags = async () => {
      try {
        const response = await getTags();
        const { success } = response;
        if (!success) throw new Error(response.error);
        console.log("Res:\n", response)
        setTags(response.tags)
      } catch (error) {
        console.log("Error in fetching Tags", error);
      }
    }
    loadTags();
  }, [])

  return (
    <>
      <div className="p-4 bg-white rounded-sm">
        <div className="font-medium text-gray-500 border-b-[1px] pb-2 border-gray-400/50">Tags</div>
        <div>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for tags" className="text-[14px]  border-[1px] border-gray-500/30 rounded-sm px-2 py-1 w-full my-3" />
          <div className="flex flex-wrap gap-2 text-[12px]">
            {filteredTags.map((element) => (
              <DiscussTags key={element._id} name={element.tag} timesUsed={element.timesUsed}></DiscussTags>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TagsSection;