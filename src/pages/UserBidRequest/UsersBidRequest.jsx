import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BidManage from "./BidManage";


const UsersBidRequest = () => {
    const {user} = useAuth();

    const [allBidRequest, setAllBidsRequest] = useState([]);
 

    const uri = `http://localhost:5000/BidRequest?employerEmail=${user?.email}`;
   

useEffect(() =>{
    axios.get(uri)
    .then(res =>{
        setAllBidsRequest(res.data)
         console.log(res.data)
    })
},[uri])

if(allBidRequest.length == 0 ){
   return <p className="text-[#fe4a23] text-center font-bold text-2xl mt-10">No Jobs Request made on your post</p>
}


 return (
        
        <div className="max-w-7xl mx-auto">
            <h2 className="mt-10 text-center text-4xl font-bold ">Bid Request On Your Posted Jobs </h2>
            <div className="text-center font-bold text-xl pt-5 ">
              
              
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#fe4a23]  rounded-lg text-lg hont-bold text-white">
                        <tr>
                            <th>
                               Action
                            </th>
                            <th>Job title</th>
                            <th> Bid made by</th>
                            <th>Deadline (day)</th>
                            <th>Bid Amound</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
            allBidRequest.map(tables => <BidManage key={tables._id} tables={tables}> 

            </BidManage>)
           }
                       
                    </tbody>
                </table>
            </div>



            </div>
       
    );
};

export default UsersBidRequest;