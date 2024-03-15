import React from "react";
import { useState } from "react";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserSlice from "../../Store/userslice";

const SignUp = () => {
  const [Signup, setSignup] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    passward: "",
  });

  const dispatch = useDispatch();

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
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: Signup.FirstName,
        lastName: Signup.LastName,
        email: Signup.email,
        password: Signup.passward,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    navigate("/login");
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
