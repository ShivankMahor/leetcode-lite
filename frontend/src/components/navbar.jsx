import { Link, useLocation } from "react-router-dom";
import { LuBell } from "react-icons/lu";
import { FaGripfire } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { TbBrandLeetcode } from "react-icons/tb";
import { IconContext } from "react-icons";

function Navbar() {
  const userName = localStorage.getItem("userName");
  const location = useLocation();

  // Check if current route is "dark mode"
  const isDarkRoute =
    location.pathname.startsWith("/contest") ||
    location.pathname.startsWith("/problem");

  return (
    <div
      className={`px-36 w-full fixed z-20 transition-colors duration-300 ${
        isDarkRoute ? "bg-[#1a1a1a] text-white" : "bg-white text-gray-400"
      } ${isDarkRoute ? 'border-b border-b-slate-600' : "shadow-md"}`}
    >
      <ul className="flex justify-between my-2">
        <div className="flex gap-6 items-center">
          <li>
            <Link to={`/homepage/${userName}`}>
              <IconContext.Provider
                value={{
                  style: {
                    fontSize: "1.5em",
                    verticalAlign: "middle",
                    color: isDarkRoute ? "white" : "black",
                  },
                }}
              >
                <TbBrandLeetcode />
              </IconContext.Provider>
            </Link>
          </li>
          <li><Link to={`/explore`}>Explore</Link></li>
          <li><Link to={`/problem`}>Problem</Link></li>
          <li><Link to={`/contest`}>Contest</Link></li>
          <li><Link to={`/discuss`}>Discuss</Link></li>
        </div>
        <div className="flex gap-4 items-center">
          <li><LuBell /></li>
          <li><FaGripfire /></li>
          <li><IoPerson /></li>
          <li>{userName}</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
