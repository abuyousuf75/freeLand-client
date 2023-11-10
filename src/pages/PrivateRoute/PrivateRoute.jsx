import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user,looding} = useAuth();
    const location = useLocation();
    if(looding){
        return <div className="text-center "><span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span></div>
    }
    
    if(user){
        return children;
    }
    return (
        <Navigate to ='/login' state={location.pathname}>

        </Navigate>
    );
};

export default PrivateRoute;