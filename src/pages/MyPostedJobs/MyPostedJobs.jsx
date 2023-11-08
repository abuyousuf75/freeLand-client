

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import PostedJobsDeatils from "./PostedJobsDeatils";

const MyPostedJobs = () => {
    const [postedJobs, setPostedJobs] = useState([])
    const  newJobs = postedJobs;
    console.log(newJobs)
   
    const {user} = useAuth();
    const uri = `http://localhost:5000/myPostedJobs?email=${user?.email}`;

  useEffect(() =>{
    axios.get(uri)
    .then(res => {
        setPostedJobs(res.data)
    })
  },[uri])



    
    return (
        <div className="max-w-7xl mx-auto mt-10">
            <h2 className="text-center mb-10 font-bold text-4xl">My Posted Jobs</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
                postedJobs.map(postedItems => <PostedJobsDeatils key={postedItems._id} newJobs={newJobs} postedItems={postedItems} setPostedJobs={setPostedJobs}></PostedJobsDeatils>)
            }
           </div>
        </div>
    );
};

export default MyPostedJobs;