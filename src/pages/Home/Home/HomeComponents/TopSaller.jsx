import axios from "axios";
import { useEffect, useState } from "react";


const TopSaller = () => {
    const [saller, setSaller] = useState([])
    useEffect(() =>{
        axios.get('/TopSaller.json')
        .then(res => {
            setSaller(res.data)
        })
    },[])
    return (
        <div className="mt-10 pb-10 md:pb-20 liner">
            <h2 className="text-4xl font-bold text-center text-white pt-10 mb-4">Most popular sellers</h2>
            <p className="text-center mt-4 text-white m-auto md:w-[700px] text-xl">Uniquely promote adaptive quality vectors rather than stand-alone e-markets. pontificate alternative architectures whereas iterate.</p>
            <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto mt-10 ">
                {
                    saller.map(sallers => <div className=""
                    
                    key={sallers._id}>
                     <div className="bg-white rounded-xl">
                            <div className="p-8">
                                <img className="p-4 w-52 h-52 mx-auto rounded-full" src={sallers.img} alt="" />
                                <h4 className="text-center text-xl font-semibold ">{sallers.name}</h4>
                                <h4 className="text-center text-xl font-bold text-[#fe4a23] ">{sallers.designation}</h4>
                                <p className="text-center text-lg ">Hourly rate: ${sallers.hourly_rate}</p>
                                
                            </div>
                     </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default TopSaller;