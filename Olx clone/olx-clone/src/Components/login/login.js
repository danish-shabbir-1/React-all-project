import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserLogin } from "../Firebase/index";

const Login = () => {
  const navigate = useNavigate("/Register");

  const [email, setEmail] = useState();
  const [Pass, setPass] = useState();

  async function signIn() {
    try {
     const user12  = await UserLogin({ email , Pass });
     navigate('/')
    } catch (e) {
      alert(e.massage);
    }
  }

  return (
    <div className="signup-container">
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        onChange={(e) => setPass(e.target.value)}
        type="text"
        placeholder="Passward"
      />
      <button onClick={signIn}>Login</button>
      <p onClick={() => navigate("/Register")}>SignUp</p>
    </div>
  );
};

export default Login;
