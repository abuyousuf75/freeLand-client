
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";



const UpdatePostedJobs = () => {
    const {user} = useAuth();
    const parms = useParams();
    const {id} = parms;
  
const [updateJobs, setUpdateJobs] = useState([]);

useEffect(() =>{
   fetch(`http://localhost:5000/updatePostedJobs/${id}`)
   .then(res => res.json())
   .then(data => {
    setUpdateJobs(data)
   })
},[id])


const handelUpdateJobs = (event) =>{
    event.preventDefault()
     const form = event.target;
       const email = form.email.value;
       const employerEmail = form.employerEmail.value;
       const jobTitle = form.jobTitle.value;
       const deadline = form.deadline.value;
       const description = form.description.value;
       const job_category = form.job_category.value;
       const min_price = form.min_price.value;
       const max_price = form.max_price.value;
       const photo = form.photo.value;
       const addPostedJobsInfo = {email,employerEmail,jobTitle,deadline,description,job_category,min_price,max_price,photo};
       console.log(addPostedJobsInfo);

       //send post requst for all posted jobs

       axios.put(`http://localhost:5000/updatePostedJobs/${id}`,addPostedJobsInfo)
       .then(res=> {
          if(res.data.modifiedCount > 0){
           Swal.fire({
               icon: 'success',
               text: 'Sucessfuly updated job.',
   
           })
           form.reset()
          }
       })

  }

const {email,jobTitle,deadline,description,max_price
    ,min_price,photo,job_category} = updateJobs;





    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-10 mb-10">Update Jobs</h2>
                
            <div className="bg-[#46b9ee] pt-10 pb-16 rounded">
                
                {/* input form start here */}
                <form onSubmit={handelUpdateJobs} >
                    {/* form row  */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Your Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" defaultValue={email}  name="email" className="input  w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input name="jobTitle" type="text" placeholder="Inter your job title" className="input w-full" defaultValue={jobTitle} required />
                            </label>
                        </div>
                    </div>

                    
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Deadline</span>
                            </label>
                            <label className="input-group">
                                <input name="deadline" type="number" placeholder="Enter job deadline" className="input  w-full" defaultValue={deadline} required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Description</span>
                            </label>
                            <label className="input-group">
                                <input name="description" type="text" placeholder="Inter job description" className="input w-full" defaultValue={description} required />
                            </label>
                        </div>
                        {/* employer email */}
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Employer Email</span>
                            </label>

                            <label className="input-group input w-full">
                            <input type="email" defaultValue={user?.email} readOnly name="employerEmail" className="input  w-full" required />

                            </label>
                            
                        </div>
                        
                    </div>
                    {/* form row Category */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Job category</span>
                            </label>

                            <label className="input-group input w-full">

                                <select name="job_category" >
                                    <option value=''>Select</option>
                                    <option value='Web_Devolopment'>Web Devolopment</option>
                                    <option value='Digital_Marketing'>Digital Marketing</option>
                                    <option value='Graphics_Design'>Graphics Design</option>
                                    
                                </select>

                            </label>
                            {/* axdadad */}
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Minimum price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="min_price" placeholder="Inter Minimum price for project" defaultValue={min_price} className="input w-full" required />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Maximum price</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={max_price} type="number" name="max_price" placeholder="Inter Maximum price for project" className="input w-full" required />
                            </label>
                        </div>
                        
                    </div>
                     {/* form photo url */}
                     <div className="px-10 py-6">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Add Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Inter a photo URL as job images" defaultValue={photo} className="input  w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="px-10 py-6">
                        <input type="submit" value="Update Jobs" className="btn btn-block text-xl bg-[#fe4a23] border-0 text-white capitalize hover:bg-black hover:text-white " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePostedJobs;