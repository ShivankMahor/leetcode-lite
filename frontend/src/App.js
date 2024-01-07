import Discuss from "./components/discuss";
import Homepage from "./components/homepage";
import Explore from "./components/explore";
import Contest from "./components/contest";
import {Route, Routes} from "react-router-dom";
import Problems from "./components/problems";
import Loginpage from './components/loginpage';
import Registerpage from './components/registerpage';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Loginpage></Loginpage>
//   },
//   {
//     path: "/homepage",
//     element: <Homepage></Homepage>
//   },
//   {
//     path: "/discuss",
//     element: <Discuss></Discuss>
//   },
//   {
//     path: "/explore",
//     element: <Explore></Explore>
//   },
//   {
//     path: "/contest",
//     element: <Contest></Contest>
//   },
//   {
//     path: "/problem",
//     element: <Problems></Problems>
//   },
//   {
//     path: "/register",
//     element: <Registerpage></Registerpage>
//   },
//   {
//     path: "*",
//     element: <div>PageNotFound</div>
//   }
// ])

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/discuss" element={<Discuss/>}/>
      <Route path="/contest" element={<Contest/>}/>
      <Route path="/problem" element={<Problems/>}/>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  );
}

export default App;
