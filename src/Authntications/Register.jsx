import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";



const Register = () => {
    const [showPassword, setPassword] = useState(false);
    const {createUser} = useAuth();
    console.log(createUser)
   
//handelRegisterForm
const handelRegisterForm = (event) =>{
    event.preventDefault();
   // get user info
   const form = event.target;
   const userName = form.name.value;
   const userImg = form.photo.value;
   const userEmail = form.email.value;
   const userPassword = form.password.value;
   const userInfo = { userName, userImg, userEmail, userPassword }
   console.log(userInfo);
// check conditions before send on db
 // password pattern or regular expression
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        // user password check
        if (userPassword.length < 6) {
            Swal.fire({
                icon: 'error',
                text: 'Password length must be 6 or more!',

            })
            return
        }
        else if (!pattern.test(userPassword)) {
            Swal.fire({
                icon: 'error',
                text: 'Please give a strong password ',

            })
            return
        }
        else{
             form.reset();
        }

   // cretUser 
   createUser(userEmail,userPassword)
    .then(res =>{
        console.log(res.user)
        Swal.fire({
            icon: 'success',
            text: 'User Creted Sucessfuly ',

        })
       
        axios.post('http://localhost:5000/user',
            userInfo
        )
        .then(res =>{
           console.log(res.data);
           if(res.data.insertedId){
            Swal.fire({
                icon: 'success',
                text: 'User Creted Sucessfuly ',
    
            })
           }
        })
        .catch(err => {
            console.log(err)
        })
    })
    .catch(err =>{
        Swal.fire({
            icon: 'error',
            text: err.message,

        })
        console.error(err)
    })
}

    return (
        <div className="max-w-7xl mx-auto md:pt-16 pt-10">
            <div className="text-center font-bold">
                <h4 className="text-4xl pb-5 text-[#6dcdf4]">Register Your Account</h4>
                <p className="text-xl font-normal">One steps away your desired job...</p>
            </div>
            <div className="hero text-white mb-10 mt-10 md:w-1/2 m-auto rounded-xl shadow-2xl bg-[#6dcdf4]">
                <div className="hero-content flex-col w-full ">

                    <div className="card  flex-shrink-0 md:w-full  max-w-sm">
                        <form onSubmit={handelRegisterForm} className="card-body " >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-[#fff] font-semibold">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="Enter your Name" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl text-white font-semibold">Photo Url</span>
                                </label>
                                <input name="photo" type="text" placeholder="Photo Url" className="input input-bordered px-8 py-4 text-black rounded-md border-0" required />
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
                                <button className="btn text-white btn-success border-0 rounded-md bg-[#fe6c2a] capitalize">Register</button>
                            </div>
                        </form>
                        
                        <h4 className="text-center p-4 text-[#000]">Alredy have an account? <Link to='/login'><span className="text-[#fe6c2a] font-bold text-xl"> Login</span></Link></h4>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Register;