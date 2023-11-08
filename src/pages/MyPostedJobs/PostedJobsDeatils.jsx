

const PostedJobsDeatils = ({postedItems}) => {
    const {email,deadline,job_category,photo,jobTitle,description,min_price,max_price} = postedItems;
  
    return (
        <div>
            <div className="card rounded-lg card-compact border-2 bg-base-100 shadow-md">
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
                    
                    <button className="px-10 py-3 mb-4 w-[90%] text-white bg-[#46b9ee] rounded-md">Update</button>
                    
                    <button className="px-10 py-3  w-[90%] text-white bg-red-400 rounded-md">Delete</button>
                    
                </div>
            </div>
        </div>
    );
};

export default PostedJobsDeatils;