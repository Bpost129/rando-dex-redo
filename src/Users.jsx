import { useState } from "react"
import { Link } from "react-router-dom"
import UserCard from "./UserCard"
import { getRandomUserData } from "./data/userData"

const Users = () => {

  // You should not need to make any changes to this component!

  const [userData, setUserData] = useState(getRandomUserData())
  
  return (
    <div className="users">
      {userData.map(user =>
        <Link key={user._id} to={`/users/${user._id}`} state={{pic: user.personal.profilePic}}>
          <UserCard user={user} />
        </Link>
      )}
    </div>
  )
}

export default Users