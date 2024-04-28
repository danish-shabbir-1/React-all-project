import React from 'react'
import './../index.css'

const Login = () => {
  return (
<div className="wrapper">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="email" placeholder="email" required/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <div className="remember-forgot">
        <label><input type="checkbox"/>Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" className="btn">Login</button>
      <div className="register-link">
        <p>Dont have an account? <a href="#">SignUp</a></p>
      </div>
    </form>
  </div>
  )
}

export default Login
