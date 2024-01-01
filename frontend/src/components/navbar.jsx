function Navbar() {

  return (
    <div>
      <ul className="flex justify-between">
        <div className="flex gap-4">
          <li><img src="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png" alt="Error" className="h-8" /></li>
          <li>Explore</li>
          <li>Problem</li>
          <li>Contest</li>
          <li>Discuss</li>
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