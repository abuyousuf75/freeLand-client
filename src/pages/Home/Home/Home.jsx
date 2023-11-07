import Banner from "./HomeComponents/Banner";
import Brand from "./HomeComponents/Brand";
import BrowseByCategory from "./HomeComponents/BrowseByCategory";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <div className="max-w-7xl mx-auto">
          <Brand></Brand>
           <BrowseByCategory></BrowseByCategory>
          </div>
         
        </div>
    );
};

export default Home;