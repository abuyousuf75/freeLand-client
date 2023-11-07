import { Outlet } from "react-router-dom";
import Navbar from "../Sharedcomponents/Navbar";
import Footer from "../Sharedcomponents/Footer";


const MainLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
              <Outlet></Outlet>
           <Footer></Footer>
        </div>

    );
};

export default MainLayout;