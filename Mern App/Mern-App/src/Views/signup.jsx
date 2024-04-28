import React, { useState } from 'react';
import './../index.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    FirstName: "",
    Email: "",
    Password: "",
  });

  function userSignup(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    fetch('http://localhost:3001/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullname: loginInfo.FirstName,
        email: loginInfo.Email,
        password: loginInfo.Password,
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error('Error:', error));
  }

  return (
    <div className="bodywrapper">
    <div className="wrapper">
      <form onSubmit={userSignup}>
        <h1>SignUp</h1>
        <div className="input-box">
          <input type="text" placeholder="First Name" onChange={(e) => setLoginInfo((prev) => ({...prev, FirstName: e.target.value}))} required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" onChange={(e) => setLoginInfo((prev) => ({...prev, Email: e.target.value}))} required />
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" onChange={(e) => setLoginInfo((prev) => ({...prev, Password: e.target.value}))} required />
          <i className='bx bxs-lock-alt' ></i>
        </div>
        <button onClick={userSignup} type="submit" className="btn">SignUp</button>
        <div className="register-link">
          <p>Already an account? <a onClick={() => navigate('/login')}>Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
