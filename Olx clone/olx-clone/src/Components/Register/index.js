import React from 'react'
import './../cards/style.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

const navigate = useNavigate('/Login')

  return (
    <div className='signup-container'>
      

      <input type='text' placeholder='First Name' />
      <input type='text' placeholder='Last Name' />
      <input type='text' placeholder='email' />
      <input type='text' placeholder='Passward' />
      <input type='text' placeholder='Re-Type Passward' />
      <button>SignUp</button>
      <p onClick={() => navigate('/Login')}> Login</p>
    </div>
  )
}

export default Register
