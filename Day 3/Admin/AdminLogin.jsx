import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css1/AdminLogin.css';
import Lottie from 'lottie-react';
import ani2 from '../assets/animation/ani2.json';
import Nav from '../Pages/Nav';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigate();

  const handleLogin = (e) => {
    nav("/AdminDash");
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
      <Nav />
      <div className='ani2'>
        <Lottie animationData={ani2} style={{height:'500px',width:'500px',marginLeft:'40px',marginTop:'100px'}}></Lottie> 
        <div className="background-custom">
          <div className="shape-custom" ></div>
          <div className="shape-custom"></div>
          <div className="login-container-custom">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group-custom">
                <label htmlFor="username">Email</label>
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
              <div className="form-group-custom">
                <label htmlFor="password3">Password</label>
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
              <button onClick={handleLogin} type="submit">Login</button>
            </form>
            {errorMessage && <div className="error-message-custom">{errorMessage}</div>}
            <div className="signup-link-custom">
              <Link to="/signup"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
