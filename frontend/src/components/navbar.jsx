import { Link } from "react-router-dom";
import { LuBell } from "react-icons/lu";
import { FaGripfire } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { TbBrandLeetcode } from "react-icons/tb";
import { IconContext } from "react-icons";


function Navbar() {
  const userName = localStorage.getItem('userName')

  function handleProfile(e) {

  }
  return (
    <div className="px-36 w-full fixed z-20 bg-white">
      <ul className="flex justify-between my-2 text-gray-400">
        <div className="flex gap-6 items-center">
          {/* <li><Link to={`/homepage/${userName}`}><img srdc="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png" alt="Error" className="h-8" /></Link></li> */}
          <li><Link to={`/homepage/${userName}`}>
            <IconContext.Provider value={{ style: { fontSize: "1.5em", verticalAlign: 'middle', color: "black" } }}>
              <TbBrandLeetcode />
            </IconContext.Provider>
          </Link></li>
          <li><Link to={`/explore`}>Explore</Link></li>
          <li><Link to={`/problem`}>Problem</Link></li>
          <li><Link to={`/contest`}>Contest</Link></li>
          <li><Link to={`/discuss`}>Discuss</Link></li>
          <li>Interview</li>
          <li>Store</li>
        </div>
        <div className="flex gap-4 items-center">
          <li><LuBell /></li>
          <li><FaGripfire /></li>
          <li><IoPerson /></li>
          <li>Premium</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;