import React, { useState } from 'react';
import './../index.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    Email: '',
    Password: '',
  });

  function userLogin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    fetch('http://localhost:3001/users/login', {
      method: 'PUT', // Ensure this matches your backend's method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: loginInfo.Email,
        password: loginInfo.Password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem('token', data.token); // Set the token in localStorage
        console.log('token:', data.token); // Log the token
      })
      .catch((error) => console.error('Error:', error));
  }

  return (
    <div className="bodywrapper">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="email"
              required
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, Email: e.target.value }))
              }
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, Password: e.target.value }))
              }
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn" onClick={userLogin}>
            Login
          </button>
          <div className="register-link">
            <p>
              Dont have an account?{' '}
              <a onClick={() => navigate('/signup')}>SignUp</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
