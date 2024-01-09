import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "../Components/main-cards";
import ShowCardDetail from "../Components/Show Card";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Card />,
  },
  {
    path: "/item/:id",
    element: <ShowCardDetail />,
  },
]);

function Router() {
    return <RouterProvider router={router}/>
  }

export default Router;
