import HomePagePosts from "./homepageposts";
import Navbar from "./navbar";

function Homepage(){
  return(
    <div className=" border-4 border-red-400 text-blue-500">
      This is home page which opens after clicking on leetcode icon after login<br/>
      <Navbar/> 
      <div>
        <div>
          <HomePagePosts></HomePagePosts>
        </div>
        <div>
          
        </div>  
      </div>   
    </div>
  )
}

export default Homepage;