import React, { useState } from "react";
import "./../cards/style.css";
import { useNavigate } from "react-router-dom";
import { register } from "../Firebase/index";

const Register = () => {
  const navigate = useNavigate("/Login");

  const [name, setName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [Pass, setPass] = useState()

console.log(name);
console.log(lastName);
console.log(email);
console.log(Pass);

  const signup = async () => {
    try {
    const userInfo = await register({ name, lastName, email, Pass })
    console.log(userInfo);
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
      <button onClick={signup}>SignUp</button>
      <p onClick={() => navigate("/Login")}> Login</p>
    </div>
  );
};

export default Register;
