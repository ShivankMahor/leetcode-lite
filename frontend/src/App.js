import Discuss from "./components/discuss";
import Homepage from "./components/homepage";
import Explore from "./components/explore";

function App() {
  return (
    <div className="bg-gray-400/20 mx-48">
      <div>
        main box
        <Homepage/>
        <Explore/>
        <Discuss/>
      </div>
    </div>
  );
}

export default App;
