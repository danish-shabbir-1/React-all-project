import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    email: '',
    passward: '',
  })

  async function LoginInfo() {
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        email: login.email,
        password: login.passward
      })
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }

  navigate('/')

  return (
    <div className='Signup-container Login-container'>
      <h1>Login</h1>
      <input onChange={(e) => setLogin((prev) => ({ ...prev, email: e.target.value }))} type="email" placeholder='Email' />
      <input onChange={(e) => setLogin((prev) => ({ ...prev, passward: e.target.value }))} type="password" placeholder='Passward' />
      <button onClick={LoginInfo}>Login</button>
      <p onClick={() => navigate('/signUp')}>SignUp</p>
      <p onClick={() => navigate('/forgetPass')}>Forget Password</p>
    </div>
  )
}

export default Login