import { Navigate } from 'react-router-dom';
import { authRoutes } from "../../modules/auth/auth.routing";

const appRoutes = [
    ...authRoutes.routes
    ,
    {
      path: '',
      element: <Navigate to="auth/login" /> 
    }
]

export default appRoutes;