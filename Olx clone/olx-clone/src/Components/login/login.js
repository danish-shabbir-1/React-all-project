import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("/Register");

  return (
    <div className="signup-container">
      <div class="modal-body">
      <input type='text' placeholder='email' />
      <input type='text' placeholder='Passward' />
      <button>Login</button>
      <p onClick={() => navigate('/Register')}>SignUp</p>

      </div>
    </div>
  );
};

export default Login;
