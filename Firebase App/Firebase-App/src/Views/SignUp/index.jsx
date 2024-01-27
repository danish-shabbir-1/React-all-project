import React from 'react'
import './../../App.css'

const SignUp = () => {
  return (
    <div className='Signup-container'>
      <h1>SignUp</h1>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Passward'/>
      <button>Login</button>
    </div>
  )
}

export default SignUp
