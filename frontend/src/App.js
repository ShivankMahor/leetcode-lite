import Discuss from "./components/discuss";
import Homepage from "./components/homepage";
import Explore from "./components/explore";
import Contest from "./components/contest";
import {createBrowserRouter,Router,RouterProvider} from "react-router-dom";
import Problems from "./components/problems";
import Loginpage from './components/loginpage';
import Registerpage from './components/registerpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage></Loginpage>
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
    path: "/problem",
    element: <Problems></Problems>
  },
  {
    path: "/register",
    element: <Registerpage></Registerpage>
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
  );
}

export default App;
