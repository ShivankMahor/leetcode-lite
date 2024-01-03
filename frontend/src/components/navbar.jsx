import { Outlet, Link } from "react-router-dom";
function Navbar() {

  return (
    <div className="mx-36">
      <ul className="flex justify-between">
        <div className="flex gap-4">
          <li><Link to={`/`}><img src="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png" alt="Error" className="h-8" /></Link></li>
          <li><Link to={`/explore`}>Explore</Link></li>
          <li><Link to={`/problem`}>Problem</Link></li>
          <li><Link to={`/contest`}>Contest</Link></li>
          <li><Link to={`/discuss`}>Discuss</Link></li>
          <li>Interview</li>
          <li>Store</li>
        </div>
        <div className="flex gap-4">
          <li>bell icon</li>
          <li>fire icon/c</li>
          <li>profile</li>
          <li>Premium</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar;