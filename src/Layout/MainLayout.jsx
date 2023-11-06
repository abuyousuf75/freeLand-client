import { Outlet } from "react-router-dom";
import Navbar from "../Sharedcomponents/Navbar";
import Footer from "../Sharedcomponents/Footer";
import Banner from "../pages/Home/Home/HomeComponents/Banner";


const MainLayout = () => {
    return (
        <div>
             <Navbar></Navbar>
             <Banner></Banner>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>
           <Footer></Footer>
        </div>

    );
};

export default MainLayout;