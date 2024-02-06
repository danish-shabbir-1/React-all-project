import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import { useEffect, useState } from "react";
import GetCardData from '../Components/GetCardData'
import { signOut } from "firebase/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <GetCardData />
      <PtRoutes />
    </div>,
  },
  {
    path: "/login",
    element: <div>
    <Login />
      <PtRoutes />
    </div>,
  },
  {
    path : '/signUp',
    element :  <div>
    <SignUp />
      <PtRoutes />
    </div>
  },
  {
    path : '/signOut',
    element :<div>
    <SignUp />
      <PtRoutes />
    </div>
  }
]);

function PtRoutes() {

  const navigate = useNavigate()
  
  const path = window.location.pathname;

useEffect(() =>{
  ProtectRoutes()
},[window.location.pathname , user])

function ProtectRoutes() {

  console.log(path);

  if (user) {
    
    if(path === '/login' || path === '/signUp'){
      navigate('/')
  } else if(path === signOut) 
  navigate('/login')

}else{
  if(path === '/login'){
    navigate('/')
  }
}


}
return<></>

}

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;