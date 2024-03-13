import React from 'react'
import  '../../App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

const navigate = useNavigate()

  return (
    <div className='SignUp'>
        <h5>Login</h5>
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Password' />
      <p onClick={() => navigate('/signup')}>SignUp</p>
    </div>
  )
}

export default Login
