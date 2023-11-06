import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Error</h2>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
          
        },
      ],
    },
  ]);
  export default router;