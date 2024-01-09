import Discuss from "./components/discuss";
import Homepage from "./components/homepage";
import Explore from "./components/explore";
import Contest from "./components/contest";
import {Route, Routes} from "react-router-dom";
import Problems from "./components/problems";
import Loginpage from './components/loginpage';
import Registerpage from './components/registerpage';
import ProtectedRoute from "./middleware/auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loginpage/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/homepage/:userName" element={<Homepage/>}/>
      <Route path="/discuss" element={<Discuss/>}/>
      <Route path="/contest" element={<Contest/>}/> 
      <Route path="/problem" element={<ProtectedRoute><Problems/></ProtectedRoute>}/>
      <Route path="/register" element={<Registerpage/>}/>
      <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes>
  );
}

export default App;
