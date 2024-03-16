import React from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";
import { useEffect, useState } from "react";
import SelectedItem from "../Views/SelectedItem";
import MapIntegrate from "../Components/Map";
import CardDataGet from "../Components/CardDataGet";
import '../App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <PtRoutes />
      <CardDataGet className="main-class"/>
    </div>,
  },
  {
    path: "/item/:id",
    element: <div>
      <Navbar />
      <SelectedItem />
      <MapIntegrate />
    </div>,
  },
  {
    path: "/cart",
    element: <div>
      <Navbar />
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
  },
]);

function PtRoutes() {

  const navigate = useNavigate()
  
  const [user, setUser] = useState(false)

useEffect(() =>{
  ProtectRoutes()
},[window.location.pathname , user]);

function ProtectRoutes() {
  const path = window.location.pathname;

  console.log(user);

  if (user) {
    if(path == '/login'){
      // navigate('/')
    }
}
 else {
  // navigate('/login')
 }      
}
return<></>

}

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;