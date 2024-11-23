const UserCard = (props) => {

  // You should not need to make any changes to this component!

  return (
    <div className="card">
      <h3>{props.user.personal.firstName} {props.user.personal.lastName}</h3>
      <img src={props.user.personal.profilePic} alt="an AI generated origami animal" />
    </div>
  )
}
 
export default UserCard