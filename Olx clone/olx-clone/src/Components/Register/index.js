import React, { useState } from "react";
import "./../cards/style.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate("/Login");

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [Pass, setPass] = useState()

  const signup = () => {
    try {
      
    } catch (e) {
     alert(e.massage)
    }
  }

  return (
    <div className="signup-container">
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name" />
      <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" />
      <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="email" />
      <input onChange={(e) => setPass(e.target.value)} type="text" placeholder="Passward" />
      <button>SignUp</button>
      <p onClick={() => navigate("/Login")}> Login</p>
    </div>
  );
};

export default Register;
