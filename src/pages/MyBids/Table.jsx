

const Table = ({ tables }) => {
   
    const { status,bidAmound, photo, email, employerEmail, deadLine, jobTitle
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
            {employerEmail}
        </td>
        <td>{deadLine}</td>
        <td>${bidAmound}</td>
        <th>
            
        {
            status==='Accepted' || status ==='Rejacted'?  <span 
    
            className="text-xl font-bold text-[#fe4a23]">{status}</span>  : <button className="btn btn-ghost btn-sm text-black mr-2 ">Pendding</button> 

            
            
        }
        
        
        
        
        </th>
    </tr>
    );
};

export default Table;