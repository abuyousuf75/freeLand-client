import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import BidManage from "./BidManage";


const UsersBidRequest = () => {
    const {user} = useAuth();

    const [allBidRequest, setAllBidsRequest] = useState([]);
 

    const uri = `https://freeland-backend.vercel.app/BidRequest?employerEmail=${user?.email}`;
   
useEffect(() =>{
    axios.get(uri)
    .then(res =>{
        setAllBidsRequest(res.data)
    })
},[uri])

if(allBidRequest.length == 0 ){
   return <p className="text-[#fe4a23] text-center font-bold text-2xl mt-10">No Jobs Request made on your post</p>
}

// for update accepted

const handelAccept = (_id) =>{
   axios.patch(`https://freeland-backend.vercel.app/BidRequest/${_id}`,{status: 'Accepted'})
   .then(res => {
    console.log(res.data)
     if(res.data.modifiedCount>0){
        const remaining = allBidRequest.filter(bids => bids._id !==_id);
        const updated = allBidRequest.find(bids => bids._id ===_id )
        updated.status = "Accepted";
        const newAccept = [updated,...remaining];
        console.log(newAccept,'iji')
        setAllBidsRequest(newAccept)
     }
   })
 }
// for update rejacted

const handelRejacted = (_id) =>{
   axios.patch(`https://freeland-backend.vercel.app/BidRequest/${_id}`,{status: 'Rejacted'})
   .then(res => {
    console.log(res.data)
     if(res.data.modifiedCount>0){
        const remaining = allBidRequest.filter(bids => bids._id !==_id);
        const updated = allBidRequest.find(bids => bids._id ===_id )
        updated.status = "Rejacted";
        const newAccept = [updated,...remaining];
        console.log(newAccept,'iji')
        setAllBidsRequest(newAccept)
     }
   })
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
            allBidRequest.map(tables => <BidManage key={tables._id} tables={tables} handelAccept={handelAccept}  handelRejacted={ handelRejacted}> 

            </BidManage>)
           }
                       
                    </tbody>
                </table>
            </div>



            </div>
       
    );
};

export default UsersBidRequest;