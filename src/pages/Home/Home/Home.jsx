import { useEffect } from "react";
import Banner from "./HomeComponents/Banner";
import Brand from "./HomeComponents/Brand";
import BrowseByCategory from "./HomeComponents/BrowseByCategory";
import TopSaller from "./HomeComponents/TopSaller";
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init();
},[]) 
    return (
        <div data-aos="fade-up">
          <Banner data-aos="fade-up"></Banner>
          <div className="max-w-7xl mx-auto "  data-aos="fade-up">
          <Brand data-aos="fade-right"></Brand>
           <BrowseByCategory data-aos="fade-right"></BrowseByCategory>
           
          </div>
          <TopSaller></TopSaller>
        </div>
    );
};

export default Home;