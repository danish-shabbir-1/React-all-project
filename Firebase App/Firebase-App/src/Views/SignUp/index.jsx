import React from 'react'
import './../../App.css'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {

  const navigate = useNavigate()

  return (
    <div className='Signup-container'>
      <h1>SignUp</h1>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Passward'/>
      <button>SignUp</button>
      <p onClick={() => navigate('/login')}>Login</p>
    </div>
  )
}

export default SignUp
