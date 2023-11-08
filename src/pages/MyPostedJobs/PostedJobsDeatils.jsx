import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const PostedJobsDeatils = ({postedItems,newJobs,setPostedJobs}) => {
    const {_id,email,deadline,job_category,photo,jobTitle,description,min_price,max_price} = postedItems;

    //handelDeletemyPost
    
    const handelDeletemyPost = (_id) =>{
            console.log(_id);

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                
                  
                    axios.delete(`http://localhost:5000/myPostedJobs/${_id}`)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your job has been deleted.",
                                icon: "success"
                              });
                              const remaining = newJobs.filter(job => job._id !==_id );
                              console.log(remaining);
                              setPostedJobs(remaining)
                        }

                    })
                }
              });
    }
  
    return (
        <div>
            <div className="card rounded-lg card-compact border-2 bg-base-100 shadow-md">
                <figure><img src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <div className="deadline-more flex text-lg font-normal">
                        <p>Deadline:{deadline}</p>
                        <p className="text-[#46b9ee]">Budget: ${min_price} - $<san>{max_price}</san></p>
                    </div>
                    <p className="text-lg">{description}</p>
                </div>
                <div className="pt-4 pb-8 text-center">
                   <Link to ={`/updatePostedJobs/${_id}`}>
                    
                   <button className="px-10 py-3 mb-4 w-[90%] text-white bg-[#46b9ee] rounded-md">Update</button>
                   </Link>
                    
                    <button onClick={() =>handelDeletemyPost(_id)} className="px-10 py-3  w-[90%] text-white bg-red-400 rounded-md">Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PostedJobsDeatils;