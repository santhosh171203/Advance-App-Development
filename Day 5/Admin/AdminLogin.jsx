
import { Link } from 'react-router-dom';
import '../assets/css1/AdminLogin.css';
import Nav from '../Pages/Nav';


const AdminLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    
    <>
   
    <Nav/>
     
    <div className="container">
      <div className="login-box4">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box4">
            <label>Username</label>
            <input type="text" name="username" required style={{marginTop:20}} />
          </div>
          <div className="password-box4">
            <label>Password</label>
            <input type="password" name="password" required  style={{marginTop:20}} />
          </div>
          <button type="submit" style={{marginLeft : 0,marginTop :40}} onClick={handleSubmit}>
            
            <Link to='/Admindash'>Submit</Link>
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AdminLogin;