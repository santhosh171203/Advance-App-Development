import  { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Signup.css';
import Lottie from 'lottie-react';
import ani1 from '../assets/animation/ani1.json';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  function isUsernameValid(username) {
    return username.length >= 5;
  }

  function isEmailValid(email) {
    return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i.test(email);
  }

  function isPasswordValid(password) {
    return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password);
  }

  function validateUsernameField(event) {
    const value = event.target.value;
    setUsername(value);
  }

  function validateEmailField(event) {
    const value = event.target.value;
    setEmail(value);
  }

  function validatePasswordField(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function validateConfirmPasswordField(event) {
    const value = event.target.value;
    setConfirmPassword(value);
  }

  function validateMobileNumberField(event) {
    const value = event.target.value;
    setMobileNumber(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
  }

  return (
    <div className='ani'>
      <Lottie animationData={ani1} style={{height:'500px',width:'500px',marginLeft:'40px',marginTop:'100px'}}></Lottie>
      <div className="signup-container">
        <h2>User Registration</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={username}
            onChange={validateUsernameField}
          />
          {!isUsernameValid(username) && <div className="error-message"></div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={validateEmailField}
          />
          {!isEmailValid(email) && <div className="error-message"></div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={validatePasswordField}
          />
          {!isPasswordValid(password) && <div className="error-message"></div>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={validateConfirmPasswordField}
          />
          {password !== confirmPassword && <div className="error-message"></div>}
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={validateMobileNumberField}
          />
          {/* Add your validation for mobile number here */}
        </div>
        <button onClick={handleSubmit}>Register</button>
      <div className="reegan2">
          Already have an account? <Link to="/LoginUser">Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
