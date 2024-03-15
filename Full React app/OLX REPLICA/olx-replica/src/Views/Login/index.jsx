import React, { useState } from 'react'
import  '../../App.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const [loginInfo, setLoginInfo] = useState({
    Email : '',
    Password : ''
  })

function userLoginData() {
  fetch('http://localhost:3001/users/login', {
    method: 'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
        email: loginInfo.Email,
        password: loginInfo.Password
    })
})
.then(res => res.json())
.then(res => console.log(res))
}

  return (
    <div className='SignUp'>
        <h5>Login</h5>
      <input type="text" placeholder='Email' onChange={(e) => setLoginInfo((prev) => ({...prev , Email : e.target.value}))}/>
      <input type="text" placeholder='Password' onChange={(e) => setLoginInfo((prev) => ({...prev , Password : e.target.value}))}/>
      <button type='submit' onClick={userLoginData}>Login</button>
      <p onClick={() => navigate('/signup')}>SignUp</p>
    </div>
  )
}

export default Login
