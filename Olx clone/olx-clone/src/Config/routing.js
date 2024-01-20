import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "../Components/main-cards";
import ShowSelectedItem from "../Components/selectItem";
import Register from "../Components/Register";
import Navbar from "../Components/Navbar";
import Login from './../Components/login/login'
import AddItem from "../Components/Add Item";
import { GetAllProducts } from "../Components/Firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar />
      {/* <Card /> */}
    </div>,
  },
  // {
  //   path: "/item/:id",
  //   element:<div>
  //     <Navbar />
  //      <ShowSelectedItem />
  //   </div>,
  // },
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
  },
  {
    path: "/liveAdd",
    element: <AddItem />
  }
]);

function Router() {
    return <RouterProvider router={router}/>
  }

export default Router;
