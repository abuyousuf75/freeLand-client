import { Link } from "react-router-dom";

const WebDb = ({ jobs }) => {
    const {_id, jobTitle, photo, deadline, minPrice, maxPrice, description } = jobs;
    const shortDescription = description.slice(0, 40);

    return (

        <div>
            <div className="card rounded-lg card-compact  bg-base-100 shadow-md">
                <figure><img src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <div className="deadline-more flex text-lg font-normal">
                        <p>Deadline:{deadline}</p>
                        <p className="text-[#46b9ee]">Budget: ${minPrice} - $<san>{maxPrice}</san></p>
                    </div>
                    <p className="text-lg">{shortDescription}</p>
                </div>
                <div className="pt-4 pb-8 text-center">
                    <Link to ={`/webDevolopment/${_id}`}>
                    <button className="px-10 py-3  w-[90%] text-white bg-[#46b9ee] rounded-md">Bid Now</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default WebDb;