import Discuss from "./components/discuss";
import Homepage from "./components/homepage";
import Explore from "./components/explore";
import Contest from "./components/contest";
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom";
import Navbar from "./components/navbar";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Navbar></Navbar>
  },
  {
    path: "/homepage",
    element: <Homepage></Homepage>
  },
  {
    path: "/discuss",
    element: <Discuss></Discuss>
  },
  {
    path: "/explore",
    element: <Explore></Explore>
  },
  {
    path: "/contest",
    element: <Contest></Contest>
  },
  {
    path: "*",
    element: <div>PageNotFound</div>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>

    // <div className="bg-gray-400/20 mx-48 ">
      
    //   {/* <Homepage/> */}
    //   {/* <Explore/> */}
    //   {/* <Discuss/> */}
    //   <Contest></Contest>
      
    // </div>
  );
}

export default App;
