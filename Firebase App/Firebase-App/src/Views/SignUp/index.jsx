import React from 'react'
import { useState } from 'react'
import './../../App.css'
import { useNavigate } from 'react-router-dom'
import { First, Prev } from 'react-bootstrap/esm/PageItem'


const SignUp = () => {

const [Signup, setSignup] = useState({
  FirstName: '',
  LastName: '',
  email: '',
  passward: '',
})


  const navigate = useNavigate()

  return (
    <div className='Signup-container'>
      <h1>SignUp</h1>
      <input onChange={(e) => setSignup((prev) => ({...prev , FirstName : e.target.value}))} type="text" placeholder='First Name'/>
      <input onChange={(e) => setSignup((prev) => ({...prev , LastNameName : e.target.value}))} type="text" placeholder='Last Name'/>
      <input onChange={(e) => setSignup((prev) => ({...prev , email : e.target.value}))} type="email" placeholder='Email'/>
      <input onChange={(e) => setSignup((prev) => ({...prev , passward : e.target.value}))} type="password" placeholder='Passward'/>
      <button>SignUp</button>
      <p onClick={() => navigate('/login')}>Login</p>
    </div>
  )
}

export default SignUp
