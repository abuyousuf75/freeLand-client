import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import logo from '../assets/freeLandLogo.png';
import userDefault from '../assets/userD.jpg'
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const {user,logOut} = useAuth();
    const links = <>
        <NavLink to ='/'> <li><a>Home</a></li></NavLink>
        <NavLink to ='/AddJobs'> <li><a>Add Jobs</a></li></NavLink>
        <NavLink to ='/MyPostedJobs'> <li><a>My Posted Jobs</a></li></NavLink>
        <NavLink to ='/MyBids'> <li><a>My Bids</a></li></NavLink>
        <NavLink to ='/BidRequest'> <li><a>Bid Request</a></li></NavLink>
    </>
    //handelLogoutUser

    const handelLogoutUser = () =>{
        logOut()
    }




    return (

        <div className="navbar left-0 border-b-2 border-[#7294b0] top-0 container py-4">
            <div className="navbar-start">
                {/* mobile navbar */}
                <MobileNavbar></MobileNavbar>
                <div className="flex gap-4  justify-center items-center">
                    <Link to='/'>
                        <img className="w-[100px]" src={logo} alt="" />

                    </Link>
                    <span className="md:text-2xl text-[#46b9ee] font-bold">Free Land</span>
                </div>
            </div>
            <div className="navbar-center ml-12 hidden lg:flex font-semibold">
                <ul className="menu menu-horizontal px-1 text-[#46b9ee] text-xl">

                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        {user ?
                            <img src={user?.photoURL} alt="" /> : <img src={userDefault} alt="" />
                                }
                        </div>

                    </label>
                    <ul tabIndex={0} className="z-10 menu menu-sm dropdown-content mt-3  p-6 shadow  rounded-box w-72 bg-[#46b9ee] text-white">
                      {
                        user ?  <>
                        <li>Name :{user?.displayName}</li>
                        <li>Emali :{user.email}</li>
                        </> : <p>No user LogIn</p>
                      }

                    </ul>
                </div>
                {/* login btn */}
                
                {
                    user ? 
                   <button onClick={handelLogoutUser} className="ml-8 bg-[#FE4A23] border-0 px-8 text-xl text-[#fff] py-4 rounded-lg capitalize">LogOut </button> : 
                    <Link to='/login'><button className="ml-8 bg-[#FE4A23] border-0 px-8 text-xl text-[#fff] py-4 rounded-lg capitalize">LogIn </button> </Link>
                }
                
            </div>
        </div>

    );
};

export default Navbar;