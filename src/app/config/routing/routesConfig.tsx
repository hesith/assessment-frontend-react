import { Navigate } from 'react-router-dom';
import { authRoutes } from "../../modules/auth/auth.routing";
import { dashboardRoutes } from '../../modules/dashboard/dashboard.routing';

const appRoutes = [
    ...authRoutes.routes,
    ...dashboardRoutes.routes
    ,
    {
      path: '',
      element: <Navigate to="dashboard/data" /> 
    }
]

export default appRoutes;