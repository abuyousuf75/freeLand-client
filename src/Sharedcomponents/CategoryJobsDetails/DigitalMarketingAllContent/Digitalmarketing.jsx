import { Link } from "react-router-dom";


const Digitalmarketing = ({digital}) => {
    const {_id,email,deadline,job_category,photo,jobTitle,description,min_price,max_price} = digital;
    return (
        <div className="card h-full rounded-lg card-compact border-2 bg-base-100 shadow-md">
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
           <Link to={`allJobs/${_id}`} >
            
           <button className="px-10 py-3 mb-4 w-[90%] text-white bg-[#46b9ee] rounded-md">Bid Now</button>
           </Link>
           
            
        </div>
    </div>
    );
};

export default Digitalmarketing;