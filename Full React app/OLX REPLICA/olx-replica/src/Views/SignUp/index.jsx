import React, { useState } from 'react'
import  '../../App.css'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [signUpInfo, setSignUpInfo] = useState({
        FirstName : "",
        LastName : "",
        Email : "",
        Password : ""
    })
console.log(signUpInfo);

function submitUserData() {
  fetch('http://localhost:3001/users/register', {
    method: 'POST',
    'headers': {
        'Content-Type': 'application/json'
    },
    'body': JSON.stringify({
        firstName: signUpInfo.FirstName,
        lastName : signUpInfo.LastName,
        email: signUpInfo.Email,
        password: signUpInfo.Password,
    })
})
.then(res => res.json())
.then(res => console.log(res))
}

const navigate = useNavigate()

  return (
    <div className='SignUp'>
        <h5>SignUp</h5>
      <input type="text" placeholder='First Name' onChange={(e) => setSignUpInfo((prev) => ({...prev , FirstName : e.target.value}))}/>
      <input type="text" placeholder='Last Name' onChange={(e) => setSignUpInfo((prev) => ({...prev , LastName : e.target.value}))}/>
      <input type="text" placeholder='Email' onChange={(e) => setSignUpInfo((prev) => ({...prev , Email : e.target.value}))}/>
      <input type="text" placeholder='Password' onChange={(e) => setSignUpInfo((prev) => ({...prev , Password : e.target.value}))}/>
      <button type='submit' onClick={submitUserData}>SignUp</button>
      <p onClick={() => navigate('/login')}>Login</p>
    </div>
  )
}

export default SignUp
