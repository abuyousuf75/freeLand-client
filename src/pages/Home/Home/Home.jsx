
import Banner from "./HomeComponents/Banner";
import Brand from "./HomeComponents/Brand";
import BrowseByCategory from "./HomeComponents/BrowseByCategory";
import TopSaller from "./HomeComponents/TopSaller";

import 'aos/dist/aos.css'

const Home = () => {
 
    return (
        <div>
          <Banner ></Banner>
          <div className="max-w-7xl mx-auto ">
          <Brand></Brand>
           <BrowseByCategory></BrowseByCategory>
           
          </div>
          <TopSaller></TopSaller>
        </div>
    );
};

export default Home;