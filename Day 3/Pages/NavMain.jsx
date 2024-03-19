import { Link } from 'react-router-dom';
import '../assets/css/NavMain.css';
const NavMain = () => {
  return (
    <nav>
        <ul>
          <div  className ="navh">Home care service System Portal</div>
            <Link to="/Hom"><li>Home</li></Link>
            <Link to="/AdminLogin"><li>Admin</li></Link>
            <Link to="/Signup">
            <li>Register</li>
            </Link>
            {/* <li>Classes</li>
            <li>Contact</li>
            <li>SocialMedia</li> */}
            
        </ul>
    </nav>
  )
}

export default NavMain