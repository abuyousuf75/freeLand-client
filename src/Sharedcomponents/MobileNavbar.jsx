
import { NavLink } from "react-router-dom";
import { FaBars} from 'react-icons/fa';
import { useState } from "react";
import logo from '../assets/freeLandLogo.png'

const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/AddJobs', name: 'Add Jobs' },
        { id: 3, path: '/MyPostedJobs', name: 'My Posted Jobs' },
        { id: 4, path: '/MyBids', name: 'My Bids' },
        { id: 5, path: '/BidRequest', name: 'Bid Request' },
        
      ];
      
    return (

            <nav className=" py-6 px-6 z-40 ">
             <div className="md:hidden text-2xl cursor-pointer text-[#FE4A23]" onClick={() => setOpen(!open)}>
            {
                open === true ? 'X' : <FaBars ></FaBars>
            }
           
           </div>

           <ul className={`md:hidden mr-4 absolute gap-6 mt-10 md:static md:w-full w-96 justify-center items-center text-center duration-1000 md:bg-opacity-0 bg-[#46b9ee] ${open? 'left-4' :'-left-96 '}` }>
          
           {
                routes.map(links => <li className=" mt-4 mb-4  md:mt-0 md:mb-0" key={links.id}>
                    <NavLink to ={links.path}>{links.name}</NavLink>
                </li>)
            }
           </ul>
        </nav>
          

      
    );
};

export default MobileNavbar;