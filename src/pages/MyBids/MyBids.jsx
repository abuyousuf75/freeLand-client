import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import Table from "./Table";


const MyBids = () => {
    const [bids, setBids] = useState([])
    const {user} = useAuth();
    const uri = `http://localhost:5000/MyBids?email=${user?.email}`;

  useEffect(() =>{
    axios.get(uri)
    .then(res => {
        setBids(res.data)
    })
  },[uri])
  
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mt-10">Your Bid jobs here</h2>
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
                            <th>Deadline</th>
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