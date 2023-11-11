

const BidManage = ({tables}) => {
    const { bidAmound, photo, email, employerEmail, deadLine, jobTitle
    } = tables;
    return (
        <tr>
        <td>
    
        </td>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask rounded-lg w-20 h-20">
                        <img src={photo} />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{jobTitle}</div>

                </div>
            </div>
        </td>
        <td>
            {email}
        </td>
        <td>{deadLine}</td>
        <td>${bidAmound}</td>
        <th >
            
         <button  className="btn btn-ghost btn-sm text-white mr-2 bg-green-500">Accept</button>
         <button  className="btn btn-ghost btn-sm text-white bg-red-500">Rejecte</button>
            
        </th>
    </tr>
    );
};

export default BidManage;