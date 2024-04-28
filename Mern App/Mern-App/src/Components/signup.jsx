import React from 'react'
import './../index.css'

const Signup = () => {
  return (
<div className="wrapper">
    <form action="">
      <h1>SignUp</h1>
      <div className="input-box">
        <input type="text" placeholder="First Name" required/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="text" placeholder="Last Name" required/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="email" placeholder="Email" required/>
        <i className='bx bxs-user'></i>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required/>
        <i className='bx bxs-lock-alt' ></i>
      </div>
      <button type="submit" className="btn">SignUp</button>
      <div className="register-link">
        <p>Already an account? <a href="#">Login</a></p>
      </div>
    </form>
  </div>
  )
}

export default Signup
