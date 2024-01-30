import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Views/Login";
import SignUp from "../Views/SignUp";

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

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
