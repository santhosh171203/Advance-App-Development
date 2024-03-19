import { Link } from 'react-router-dom';
import '../assets/css/Nav.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
          <div  className ="navh">Home care service System Portal</div>
          <Link to="/Hom">
            <li>Home</li>
            </Link>
            <Link to="/LoginUser">
            <li>Logout</li>
            </Link>
            {/* <li>Classes</li>
            <li>Contact</li>
            <li>SocialMedia</li> */}
            
        </ul>
    </nav>
  )
}

export default Navbar