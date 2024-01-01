import HomePageCard from "./homepagecard";
import HomePageCard2 from "./homepagecard2";
import HomePagePosts from "./homepageposts";
import HomePageTags from "./homepagetags";
import Navbar from "./navbar";

let cardimgaddress = [
  "https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png",
  "https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg",
  "https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png"
]
let tags = ["Algorithms","Database","Shell","Concurrency","JavaScript","Pandas","React","Vanilla JS","Frontend"]
function Homepage(){
  return(
    <div className=" border-4 border-red-400">
      This is home page which opens after clicking on leetcode icon after login<br/>
      <Navbar/> 
      <div className="px-20 bg-yellow-200/50">In an effort to fight COVID-19, from now until a limited time only, users residing in India can enjoy discount on both monthly and annual subscriptions!</div>
      <div className="mx-20 flex" >
        <div className="w-2/3 m-4">
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
          <HomePagePosts></HomePagePosts>
        </div>

        {/* sidebar */}
        <div className="m-4">
          <div className="flex flex-col gap-5"> 
            <HomePageCard link={cardimgaddress[0]}></HomePageCard>
            <HomePageCard link={cardimgaddress[1]}></HomePageCard>
            <HomePageCard link={cardimgaddress[2]}></HomePageCard>
          </div>
          <div className="flex border-gray-500 border-b-[1px] border-gray-600/50"><HomePageCard2></HomePageCard2></div>
          <div className="flex flex-row-reverse border-gray-500 border-b-[1px] border-gray-600/50"><HomePageCard2></HomePageCard2></div>
          <div className="flex border-gray-500 border-b-[1px] border-gray-600/50"><HomePageCard2></HomePageCard2></div>
          <div className="border-gray-500 border-b-[1px] border-gray-600/50">
            <div>OO Design</div>
            <div>Operating System</div>
          </div>
          <div>Pick One</div>
          {tags.map((tag)=>(
            <HomePageTags data={tag}></HomePageTags>
          ))}
        </div>  
      </div>   
    </div>
  )
}

export default Homepage;