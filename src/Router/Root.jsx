import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../Authntications/Login";
import Register from "../Authntications/Register";
import WebDdDeatils from "../Sharedcomponents/CategoryJobsDetails/WebDdDeatils";
import DigitalMarketingDeatils from "../Sharedcomponents/CategoryJobsDetails/DigitalMarketingDeatils";
import GraphicsDesignDetails from "../Sharedcomponents/CategoryJobsDetails/GraphicsDesignDetails";
import MyBids from "../pages/MyBids/MyBids";


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
          path: "/webDevolopment/:id",
          element:<WebDdDeatils></WebDdDeatils>,
          loader :({params})=> fetch(`http://localhost:5000/webDevolopment/${params.id}`)
          
        },
        {
          path: "/digitalMarketing/:id",
          element:<DigitalMarketingDeatils></DigitalMarketingDeatils>,
          loader :({params})=> fetch(`http://localhost:5000/digitalMarketing/${params.id}`)
          
        },
        {
          path: "/graphicsDesigner/:id",
          element:<GraphicsDesignDetails></GraphicsDesignDetails>,
          loader :({params})=> fetch(`http://localhost:5000/graphicsDesigner/${params.id}`)
          
        },
        
        {
          path: "login",
          element:<Login></Login>
          
        },
        {
          path: "myBids",
          element : <MyBids></MyBids>
        },
        {
          path: "register",
          element:<Register></Register>,
          
        },
      ],
    },
  ]);
  export default router;