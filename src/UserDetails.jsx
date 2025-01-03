import { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { getRandomUserDetails } from "./data/userData"
import './UserDetails.css'

const UserDetails = () => {
  const { userId } = useParams()
  const location = useLocation()
  const [user, setUser] = useState(getRandomUserDetails(userId, location.state.pic))
  console.log(user)

  return (
    <div className="user">
      <img src={user.personal.profilePic} alt="an AI generated image of an origami animal" />
      <br/>
      <h2>{user.personal.lastName}, {user.personal.firstName}</h2>
      <h4>They drive a {user.cars[0].make}</h4>
    </div>  
  )
}
 
export default UserDetails