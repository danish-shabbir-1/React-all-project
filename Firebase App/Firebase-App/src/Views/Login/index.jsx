import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
const navigate = useNavigate()

const [login, setLogin] = useState({
  emial : '',
  passward : '',
})

console.log(login);
  return (
    <div className='Signup-container Login-container'>
      <h1>Login</h1>
      <input onChange={(e) => setLogin((prev) => ({...prev , email : e.target.value}))} type="email" placeholder='Email'/>
      <input onChange={(e) => setLogin((prev) => ({...prev , passward : e.target.value}))} type="password" placeholder='Passward'/>
      <button>Login</button>
      <p onClick={() => navigate('/signUp')}>SignUp</p>
    </div>
  )
}

export default Login