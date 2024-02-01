import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import { useEffect, useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path : '/signUp',
    element : <SignUp />
  },
  {
    path : '/signOut',
    element : <SignUp />
  }
]);

useEffect(() =>{
  ProtectRoutes()
},[window.location.pathname , user])

function ProtectRoutes() {

  const navigate = useNavigate()
  
  const path = window.location.pathname;
  const [user, setUser] = useState(true)

  console.log(path);

  if (user) {
    
    if(path === '/login' || path === '/signUp'){
      navigate('/')
    }

  }

}

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
