

const DigitalMarketing = ({jobs}) => {
    const { jobTitle, photo, deadline, minPrice, maxPrice, description } = jobs;
    const shortDescription = description.slice(0, 40);
    return (
        <div>
            <div className="card rounded-lg card-compact  bg-base-100 shadow-md">
                <figure className="md:h-[300px]"><img src={photo} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <div className="deadline-more flex text-lg font-normal">
                        <p>Deadline:{deadline}</p>
                        <p className="text-[#46b9ee]">Budget: ${minPrice} - $<san>{maxPrice}</san></p>
                    </div>
                    <p className="text-lg">{shortDescription}</p>
                </div>
                <div className="pt-4 pb-8 text-center">
                    <button className="px-10 py-3  w-[90%] text-white bg-[#46b9ee] rounded-md">Bid Now</button>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketing;