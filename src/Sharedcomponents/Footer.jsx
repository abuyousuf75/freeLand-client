import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const Footer = () => {

    //handelSubscribe

    const handelSubscribe = (event) =>{
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const subscriveInfo = {email};
       console.log(subscriveInfo);

       axios.post('https://freeland-backend.vercel.app/subscriber',subscriveInfo)
       .then(res => {
        if(res.data.insertedId){
         Swal.fire({
             icon: 'success',
             text: 'Thanks we got your Email',
 
         })
         form.reset()
        }
     })
    
       form.reset()
    }





    return (
        <div className="mt-10 border-t-2 border-[#d1d1d1]">
            <footer className="  max-w-7xl mx-auto md:mt-20  text-base-content grid md:grid-cols-3 gap-10">
                <div className="logo_subscribe text-center md:mt-0 mt-10 md:text-left ">
                    <h4 className="text-4xl font-bold"><span className="text-[#46b9ee]">Free</span>Land</h4>
                    <p className="text-lg">328 Queensberry Street, North Melbourne VIC 3051, Australia. support@freeland.com</p>
                    <form onSubmit={handelSubscribe}>
                        <header className="footer-title mt-4">Subscribe</header>
                        <fieldset className="form-control mb-10 md:w-80">
                            
                            <div className="relative">
                                <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" name="email" required />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none" >Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className="useFul_Links text-center">
                    <h4 className="text-2xl font-bold"> Useful Links</h4>
                    <ul className="leading-10">
                        <Link to ='/'><li>Home</li></Link>
                        <Link to ='/AddJobs'><li>AddJobs</li></Link>
                        <Link to ='/MyPostedJobs'><li>MyPostedJobs</li></Link>
                        <Link to ='/MyBids'><li>MyBids</li></Link>
                        <Link to ='/login'><li>Login</li></Link>
                    </ul>
                </div>
                <div className="socail_Links text-center m-auto md:text-start md:m-0 ">
                    <h4 className="text-2xl font-bold"> Socail Links</h4>
                    <div className="flex gap-4">
                    <div className=" mt-4 w-12 cursor-pointer bg-[#fe7c52] h-12 rounded-full">
                            <FaFacebook className="text-xl w-full h-full text-white p-3"></FaFacebook>
                    </div>
                    <div className=" mt-4 w-12 cursor-pointer bg-[#fe7c52] h-12 rounded-full">
                            <FaTwitter className="text-xl w-full h-full text-white p-3"></FaTwitter>
                    </div>
                    <div className=" mt-4 w-12 cursor-pointer bg-[#fe7c52] h-12 rounded-full">
                            <FaInstagram className="text-xl w-full h-full text-white p-3"></FaInstagram>
                    </div>
                    </div>
                </div>
            </footer>
            {/* copy right */}
            <div className="bg-[#fe7c52] mt-10 md:mt-0 p-4">
                <h4 className="text-xl font-bold text-center text-white">Copyright © 2023 FreeLand All Rights Reserved.</h4>
            </div>
        </div>
        
    );
};

export default Footer;