import React from "react";
import { useState } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import { Useer } from "../../Firebase";

const SignUp = () => {
  const [Signup, setSignup] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    passward: "",
  });
  const [errMas, setErrMas] = useState("");

  const navigate = useNavigate();

   const subMissionHandle = async () => {
    if (
      !Signup.FirstName ||
      !Signup.LastName ||
      !Signup.email ||
      !Signup.passward
    ) {
      setErrMas("Please FILL all fields");
      return;
    }
    setErrMas("");
    console.log(Signup);
    try {
      const userInfo = await Useer(Signup)
      console.log(userInfo);
    } catch (error) {
      setErrMas(error.massage)
    }
  };
  return (
    <div className="Signup-container">
      <h1>SignUp</h1>
      <input
        onChange={(e) =>
          setSignup((prev) => ({ ...prev, FirstName: e.target.value }))
        }
        type="text"
        placeholder="First Name"
      />
      <input
        onChange={(e) =>
          setSignup((prev) => ({ ...prev, LastName: e.target.value }))
        }
        type="text"
        placeholder="Last Name"
      />
      <input
        onChange={(e) =>
          setSignup((prev) => ({ ...prev, email: e.target.value }))
        }
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) =>
          setSignup((prev) => ({ ...prev, passward: e.target.value }))
        }
        type="password"
        placeholder="Passward"
      />
      <b className="err">{errMas}</b>
      <button onClick={subMissionHandle}>SignUp</button>
      <p onClick={() => navigate("/login")}>Login</p>
    </div>
  );
};

export default SignUp;
