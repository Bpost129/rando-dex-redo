import { NavLink } from 'react-router-dom'
import logo from './assets/redplane.png'

const Nav = () => {

  // You should not need to make any changes to this component!

  return (
    <nav>
      <div className="nav-left">
        <NavLink to='/'><img src={logo} alt="an origami paper airplane" /></NavLink>
        <div>RandoDex</div>
      </div>
      <div className="nav-right">
        <NavLink to='/users'>All Users</NavLink>
      </div>
    </nav>
  )
}
 
export default Nav