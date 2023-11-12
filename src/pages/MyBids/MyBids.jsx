import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Table from "./Table";


const MyBids = () => {
    const {user} = useAuth();
    const [asc, setAsc] = useState(true);
    const uri2 = `http://localhost:5000/MyBids?email=${user?.email}&sort=${asc?'asc': 'dsc'}`
    const [bids, setBids] = useState([asc])
   
    // const uri = `http://localhost:5000/MyBids?email=${user?.email}`;
    

  useEffect(() =>{
    axios.get(uri2,{withCredentials:true})
    .then(res => {
        setBids(res.data)
    })
  },[uri2])

  /// for no bids

  if(bids.length == 0 ){
    return <p className="text-[#fe4a23] text-center font-bold text-2xl mt-10">You did not made any bids</p>
 }
  
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-10">Your Bid jobs here</h2>
            {/* sort here */}
            <div className="text-center m-auto ">
                <h2 className="text-2xl font-bold pt-8 text-[#fe4a23]">Sort By Price : <button onClick={() => setAsc(!asc)} className="btn btn-md text-white hover:bg-black bg-[#fe4a23]">
                    {
                        asc ? 'High to low' : 'Low to high'
                    }
                    </button></h2>
            </div>
             {/* orders table here */}
             <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#fe4a23]  rounded-lg text-lg hont-bold text-white">
                        <tr>
                            <th>
                               Action
                            </th>
                            <th>Job title</th>
                            <th>Employer email</th>
                            <th>Deadline (day)</th>
                            <th>Bid Amound</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
            bids.map(tables => <Table key={tables._id} tables={tables}> 

            </Table>)
           }
                       
                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default MyBids;