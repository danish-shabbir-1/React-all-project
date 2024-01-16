import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "../Components/main-cards";
import ShowSelectedItem from "../Components/selectItem";
import Register from "../Components/Register";
import Navbar from "../Components/Navbar";
import Login from './../Components/login/login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      <Card />
    </div>,
  },
  {
    path: "/item/:id",
    element:<div>
      <Navbar />
       <ShowSelectedItem />
    </div>,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />
  }
]);

function Router() {
    return <RouterProvider router={router}/>
  }

export default Router;
