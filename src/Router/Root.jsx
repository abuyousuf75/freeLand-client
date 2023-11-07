import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../Authntications/Login";
import Register from "../Authntications/Register";

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
        {
          path: "login",
          element:<Login></Login>
          
        },
        {
          path: "register",
          element:<Register></Register>,
          
        },
      ],
    },
  ]);
  export default router;