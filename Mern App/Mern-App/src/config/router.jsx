import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Views/login";
import Signup from "../Views/signup";
import Navbar from "../Components/Navbar";
import Dashboard from "../Views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />,<Dashboard />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/signup",
    element: (
      <div>
        <Signup />
      </div>
    ),
  },
]);
 
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
