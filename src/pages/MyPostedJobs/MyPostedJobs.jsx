

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import PostedJobsDeatils from "./PostedJobsDeatils";

const MyPostedJobs = () => {
  const {user} = useAuth();
    const [postedJobs, setPostedJobs] = useState([])
    const  newJobs = postedJobs;
    
    const uri = `http://localhost:5000/myPostedJobs?email=${user?.email}`;

  useEffect(() =>{
    axios.get(uri)
    .then(res => {
        setPostedJobs(res.data);
    })
  },[uri])
  

/// for no post jobs

if(postedJobs.length == 0 ){

  return <p className="text-[#fe4a23] text-center font-bold text-2xl mt-10">You did not posted any jobs yet</p>
}

    
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