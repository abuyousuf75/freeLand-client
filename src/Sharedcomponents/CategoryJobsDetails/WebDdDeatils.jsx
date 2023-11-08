
import {  useLoaderData} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";



const WebDdDeatils = () => {
    const webDetails = useLoaderData();
    const { jobTitle, photo, deadline, minPrice, maxPrice, description ,email} = webDetails;
    const {user} = useAuth();
    
    // handel submitBid jobs
    const hadelBidJobs = (event) =>{
        event.preventDefault();
        const form = event.target;
        const bidAmound =form.price.value;
        const deadLine =form.date.value;
        const email =form.email.value;
        const employerEmail =form.employerEmail.value;
       
        const bidInfo = {bidAmound,deadLine, email,employerEmail,photo,jobTitle};
        console.log(bidInfo)

        // allBids post
        axios.post('http://localhost:5000/allBid',
            bidInfo
        )
        .then(res => {
           if(res.data.insertedId){
            Swal.fire({
                icon: 'success',
                text: 'Thanks we got your bid',
    
            })
            form.reset()
           }
        })
    }
   

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className=" text-4xl font-bold mt-10">{jobTitle}</h2>
            <div className="grid md:grid-cols-2 gap-5 mt-10 ">
                <div className="flex justify-center items-center">
                    <img src={photo} alt="detailPhoto" />
                </div>
                <div className="border-2  p-6 border-[#46b9ee] text-center rounded-md text-[#fe4a23]">
                   <div className="">
                   <h4 className="mb-2 font-bold text-2xl ">Job title : {jobTitle}</h4>
                    
                    <h4 className="text-xl mb-2 font-semibold">Price Range : $ {minPrice} - $ {maxPrice}</h4>
                    <h5 className="text-xl font-semibold text-[#1d1b3d]">Deadline : {deadline}</h5>
                    <p className="mt-4 font-semibold  text-[#fe4a23]">Job Description : <span className="text-[#1d1b3d]">{description}{description}</span></p>
                   </div>
                   {/* place your bid button */}
                   <div className="mt-4 mb-4">
                   
                   <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-[#46b9ee] px-8 py-3 text-[#ffffff] hover:bg-[#fe4a23] capitalize" onClick={() => document.getElementById('my_modal_1').showModal()}>place your bid</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box md:max-w-screen-lg">
                <form onSubmit={hadelBidJobs}>
                     {/* form row  */}
                   <div className="md:flex gap-6 px-10 py-4">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl mb-2">Price</span>
                        </label>
                        <label className="input-group border-2 ">
                            <input type="number" placeholder="Your bid amound" name="price" className="input  w-full" required/>
                        </label>
                    </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl mb-2">Deadline</span>
                        </label>
                        <label className="input-group border-2">
                            <input name="date" type="number" placeholder="How many day's need for this project" className="input w-full"  required/>
                        </label>
                    </div>
                   </div>
                  
                     {/* form row Email */}
                   <div className="md:flex gap-6 px-10 py-4">
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl mb-2">Your Eamil</span>
                        </label>
                        <label className="input-group border-2">
                            <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input  w-full"  required/>
                        </label>
                    </div>
                   <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-xl mb-2">Owner Email</span>
                        </label>
                        <label className="input-group border-2">
                            <input name="employerEmail" type="email" defaultValue={email} className="input w-full" required />
                        </label>
                    </div>
            

                   </div>
                    <div className="px-10 py-6">
                        <input type="submit" value="Bid Now"  className="btn btn-block text-xl bg-[#6cbdee] capitalize hover:bg-black hover:text-white "/>
                    </div>
                </form>
                   
                    <div className="modal-action absolute top-0 right-4">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">X</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default WebDdDeatils;