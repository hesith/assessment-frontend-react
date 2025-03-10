import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps{
    children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const loggedInUser = localStorage.getItem("currentUser");

    if(loggedInUser==''||loggedInUser==null){
        return <Navigate to="/auth/login"/>
    }

    return  children?? <Outlet/>
    
     
}

export default ProtectedRoute;