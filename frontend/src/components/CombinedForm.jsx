// CombinedForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaGoogle, FaApple, FaFacebookF } from 'react-icons/fa';
import '../styles/Login.css';

const CombinedForm = () => {
  const navigate = useNavigate(); // Initialize navigate
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For registration
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        navigate('/dashboard');
      } else {
        console.error(data.error);
        alert(data.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        navigate('/dashboard');
      } else {
        console.error(data.error);
        alert(data.error);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  
  
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>{isSignedUp ? 'Sign in with email' : 'Create an account'}</h2>
          <p>
            {isSignedUp
              ? 'Make a new doc to bring your words, data, and teams together. For free.'
              : 'Join us to create a new doc and collaborate for free.'}
          </p>

          <form onSubmit={isSignedUp ? handleLogin : handleRegister}>
            {!isSignedUp && (
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={!isSignedUp}
                />
              </div>
            )}
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? '🙈' : '👁'}
              </button>
            </div>

            <div className="forgot-password">
              {isSignedUp && <a href="/forgot-password">Forgot password?</a>}
            </div>

            <button type="submit" className="login-button">
              {isSignedUp ? 'Get Started' : 'Register'}
            </button>
          </form>

          <div className="separator">or sign in with</div>

          <div className="social-icons">
            <FaGoogle className="social-icon" />
            <FaFacebookF className="social-icon" />
            <FaApple className="social-icon" />
          </div>

          <div className="register-redirect">
            {isSignedUp ? (
              <span>
                Don't have an account?{' '}
                <button onClick={() => setIsSignedUp(false)}>Sign up</button>
              </span>
            ) : (
              <span>
                Already have an account?{' '}
                <button onClick={() => setIsSignedUp(true)}>Sign in</button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedForm;
