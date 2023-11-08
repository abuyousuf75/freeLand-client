import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const AddJobs = () => {
    const {user} = useAuth();
   //handelPostJobs
   const handelPostJobs = (event) =>{
     event.preventDefault()
      const form = event.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const job_category = form.job_category.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;
        const photo = form.photo.value;
        const addPostedJobsInfo = {email,jobTitle,deadline,description,job_category,min_price,max_price,photo};
        console.log(addPostedJobsInfo);

        //send post requst for all posted jobs

        axios.post('http://localhost:5000/postedJobs',addPostedJobsInfo)
        .then(res=> {
           if(res.data.insertedId){
            Swal.fire({
                icon: 'success',
                text: 'Sucessfuly added job.',
    
            })
            form.reset()
           }
        })

   }
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl mt-10 mb-10 text-center font-bold">Add jobs</h2>
            <div className="bg-[#46b9ee] pt-10 pb-16 rounded">
                
                {/* input form start here */}
                <form onSubmit={handelPostJobs}>
                    {/* form row  */}
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Email of the employe</span>
                            </label>
                            <label className="input-group">
                                <input type="email" defaultValue={user?.email} name="email" className="input  w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Job Title</span>
                            </label>
                            <label className="input-group">
                                <input name="jobTitle" type="text" placeholder="Inter your job title" className="input w-full" required />
                            </label>
                        </div>
                    </div>

                    
                    <div className="md:flex gap-6 px-10 py-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2"> Deadline</span>
                            </label>
                            <label className="input-group">
                                <input name="deadline" type="number" placeholder="Enter job deadline" className="input  w-full" required />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Description</span>
                            </label>
                            <label className="input-group">
                                <input name="description" type="text" placeholder="Inter job description" className="input w-full" required />
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
                                <input type="number" name="min_price" placeholder="Inter Minimum price for project" className="input w-full" required />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl mb-2">Maximum price</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name="max_price" placeholder="Inter Maximum price for project" className="input w-full" required />
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
                                <input type="text" name="photo" placeholder="Inter a photo URL as job images" className="input  w-full" required />
                            </label>
                        </div>
                    </div>
                    <div className="px-10 py-6">
                        <input type="submit" value="Add Jobs" className="btn btn-block text-xl bg-[#fe4a23] border-0 text-white capitalize hover:bg-black hover:text-white " />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJobs;