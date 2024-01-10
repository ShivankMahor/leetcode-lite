import Footer from "../../footer";
import HomePageCard from "./homepagecard";
import HomePageCard2 from "./homepagecard2";
import HomePagePosts from "./homepageposts";
import HomePageTags from "./homepagetags";
import Navbar from "../../navbar";
import { useParams,useNavigate } from "react-router-dom";
import { userLogout } from "../../../helper/helper";


let tags = ["Algorithms", "Database", "Shell", "Concurrency", "JavaScript", "Pandas", "React", "Vanilla JS", "Frontend"]
let cardimgaddress = [
  "https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png",
  "https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg",
  "https://assets.leetcode.com/users/images/7b7c1fab-b877-47fa-bc72-548fbcc9f94a_1703037199.2794356.jpg"

]

function Homepage() {


  const navigate = useNavigate();
  const details = useParams();
  console.log({Detials: details.userName})


  async function handleLogout(e) {
    e.preventDefault();
    const response = await userLogout(details.userName);
    let { success } = response;
    if(!success){
      console.log("Error in handleLogout", response.error);
    }else{
      alert("Logout Successful")
      navigate('/')
    }
  }
  
  return (
    <>
      <Navbar />
      <div className="mx-36">
        <div className="px-20 bg-yellow-200/30 rounded-md border-[1px] border-orange-300 text-[14px] p-4">In an effort to fight COVID-19, from now until a limited time only, users residing in India can enjoy discount on both monthly and annual subscriptions!</div>
        <div className="mx-20 flex" >
          <div className="w-2/3 m-4 border-r-[1px] border-gray-600/50">
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
          <div className="m-4 text-[13px]">
            <div className="flex flex-col gap-5">
              <HomePageCard link={cardimgaddress[0]}></HomePageCard>
              <HomePageCard link={cardimgaddress[1]}></HomePageCard>
              <HomePageCard link={cardimgaddress[2]}></HomePageCard>
            </div>
            <div className="flex border-gray-500 border-b-[1px] border-gray-600/50 m-4"><HomePageCard2></HomePageCard2></div>
            <div className="flex flex-row-reverse border-gray-500 border-b-[1px] m-4 gap-4"><HomePageCard2></HomePageCard2></div>
            <div className="flex border-gray-500 border-b-[1px] border-gray-600/50 m-4"><HomePageCard2></HomePageCard2></div>
            <div className="border-gray-500 border-b-[1px] border-gray-600/50 m-4 font-medium text-[14px]">
              <div>OO Design</div>
              <div>Operating System</div>
            </div>
            <div className="m-4 font-medium text-[14px]">
              <div>Pick One</div>
              {tags.map((tag) => (
                <HomePageTags data={tag}></HomePageTags>
              ))}
            </div>
          </div>
        </div>
        <button onClick={(e)=>handleLogout(e)}>Logout</button>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Homepage;