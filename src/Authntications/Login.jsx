import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";


const Login = () => {
    const {loginUser,googleLogin} = useAuth();
    const [showPassword, setPassword] = useState(false);
//handel lofin form
const handelLoginForm =(event) =>{
    event.preventDefault();
    // get user info
    const form = event.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    const userInfo = { userName,userEmail,userPassword }
    console.log(userInfo);
    // hadel login user info
    loginUser(userEmail,userPassword)
    .then(res =>{
        console.log(res.user)
        
        Swal.fire({
            icon: 'success',
            text: 'User login Sucessfuly ',

        })
       
    
        form.reset()
    })
    .catch(err =>{
        Swal.fire({
            icon: 'error',
            text: err.message,

        })
        form.reset()
    })

}

//googleLogin
const handelGoogleLogin = () =>{
    googleLogin()
}


    return (
        <div className="max-w-7xl mx-auto md:pt-16 pt-10">
            <div className="text-center font-bold">
                <h4 className="text-4xl pb-5 text-[#6dcdf4]">Login Your Account</h4>
                <p className="text-xl font-normal">Jobs are waiting for you..</p>
            </div>
            <div className="hero text-white mb-10 mt-10 md:w-1/2 m-auto rounded-xl shadow-2xl bg-[#6dcdf4]">
                <div className="hero-content flex-col w-full ">

                    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
                        <form onSubmit={handelLoginForm} className="card-body " >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#fff] font-semibold">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold text-white">Email address</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-xl text-white font-semibold">Password</span>
                                </label>
                                <div className="relative ">
                                    <input name="password"

                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password" className="input input-bordered px-8 py-4 text-black w-full rounded-md border-0" required />
                                    <span className="text-2xl absolute cursor-pointer text-black top-3  right-4" onClick={() => setPassword(!showPassword)}>{
                                        showPassword ? <FaEye /> : <FaEyeSlash />

                                    }</span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-white btn-success border-0 rounded-md bg-[#fe6c2a] capitalize">Login</button>
                            </div>
                        </form>
                        {/* socail login */}
                        <div className="text-center border-b-2 border-[#fe6c2a]">
                            <h5 className="text-xl mb-4 text-[#000]">Or login with</h5>
                            <button onClick={handelGoogleLogin} className="w-full mb-5 btn text-white btn-success border-0 rounded-md bg-[#fe6c2a] capitalize">Google</button>

                        </div>
                        <h4 className="text-center p-4 text-[#000]">New here? <Link to='/register'><span className="text-[#fe6c2a] font-bold text-xl">Register</span></Link></h4>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Login;