import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "../Components/main-cards";
import ShowSelectedItem from "../Components/selectItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
  },
  {
    path: "/item/:id",
    element: <ShowSelectedItem />,
  },
]);

function Router() {
    return <RouterProvider router={router}/>
  }

export default Router;
