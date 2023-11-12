

const BidManage = ({tables,handelAccept,handelRejacted}) => {
    const {status, bidAmound, photo, email, employerEmail, deadLine, jobTitle, _id} = tables;
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
            
        {
            status==='Accepted' ?  <span className="text-xl font-bold text-green-700">Accepted</span> : <button onClick={()=>handelAccept(_id)} className="btn btn-ghost btn-sm text-white mr-2 bg-green-500">Accept</button> 
            
        }
       
    {
        status ==='Rejacted' ? <span className="text-xl font-bold text-red-700">Rejacted</span>:
        <button  onClick={()=>handelRejacted(_id)} className="btn btn-ghost btn-sm text-white bg-red-500 ml-4">Reject</button>
    }
            
        </th>
    </tr>
    );
};

export default BidManage;