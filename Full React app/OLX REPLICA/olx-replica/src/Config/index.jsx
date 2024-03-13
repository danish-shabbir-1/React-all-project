import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from '../Views/Login/index'
import SignUp from "../Views/SignUp/index";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },{
        path : '/login',
        element : <div>
            <Login />
        </div>
    }
    ,{
        path : '/signup',
        element : <div>
            <SignUp />
        </div>
    }
  ]);

  function Router() {
    return <RouterProvider router={router} />;
}

export default Router;