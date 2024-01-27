import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const navigate = useNavigate()

  return (
    <div className='Signup-container Login-container'>
      <h1>Login</h1>
      <input type="email" placeholder='Email'/>
      <input type="password" placeholder='Passward'/>
      <button>Login</button>
      <p onClick={() => navigate('/signUp')}>SignUp</p>
    </div>
  )
}

export default Login