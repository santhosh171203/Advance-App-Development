import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import Lottie from 'lottie-react';
import ani2 from '../assets/animation/ani2.json';
import NavMain from './NavMain';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const nav = useNavigate();
  const handleLogin = (e) => {
    nav("/UserDash")
    e.preventDefault();
    // Example validation, replace with your actual validation logic
    if (username === 'admin' && password === 'password') {
      // Successful login, you can redirect or do something else here
      alert('Login successful!');
    } else {
      // Show error message
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
  <>
  <NavMain/>
    <div className='ani'>
  <Lottie animationData={ani2} style={{height:'500px',width:'500px',marginLeft:'40px',marginTop:'100px'}}></Lottie>
    <div className="background1">
      <div className="shape1" ></div>
      <div className="shape1"></div>
      <div className="login-container1" >
      
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group1">
            <label htmlFor="username1">Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder='Email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={handleLogin}>Login</button>
        </form>
        {errorMessage && <div className="error-message1">{errorMessage}</div>}
        <div className="signup-link">
          Dont have an account? <Link to="/signup">Register here</Link>
        </div>
      </div>
    </div>
    </div>
    </>
  
  );
}

export default Login;
