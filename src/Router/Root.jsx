import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../Authntications/Login";
import Register from "../Authntications/Register";

import MyBids from "../pages/MyBids/MyBids";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import UpdatePostedJobs from "../pages/MyPostedJobs/UpdatePostedJobs";
import Error from "../pages/Error404/Error";
import PrivateRoute from "../pages/PrivateRoute/PrivateRoute";
import AllJobs from "../pages/BidRequest/AllJobs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
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
          path: "myBids",
          element : <PrivateRoute><MyBids></MyBids></PrivateRoute>
        },
        {
          path: "MyPostedJobs",
          element :<PrivateRoute> <MyPostedJobs></MyPostedJobs></PrivateRoute>,
        },
        {
          path : 'allJobs/:id',
          element : <PrivateRoute><AllJobs></AllJobs></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/allJobs/${params.id}`)
        },
        {
          path: "/updatePostedJobs/:id",
          element : <PrivateRoute><UpdatePostedJobs></UpdatePostedJobs></PrivateRoute>,
          loader : () => fetch('http://localhost:5000/updatePostedJobs')
         
        },


        {
          path: "register",
          element:<Register></Register>,
          
        },
        {
          path: "addJobs",
          element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>,
          
        },
      ],
    },
  ]);
  export default router;