import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {Routes, Route, Outlet} from 'react-router-dom'
import { setUserData, User } from '../../store/reducers/userSlice';
import ProtectedRoute from './ProtectedRoute';

const RenderRoutes = ({routes}:any) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const LoadCurrentUser = async() =>{
            const stringUser = localStorage.getItem("currentUser");
            
            if(stringUser!==""&&
                stringUser!==null&&
                stringUser!==undefined){

                const currUser = JSON.parse(stringUser);

                const user: User = {
                    firstName: currUser?.firstName,
                    lastName: currUser?.lastName,
                    email: currUser?.email
                }
                dispatch(setUserData(user));
            }
        }

        LoadCurrentUser();
    },[])

    const renderRoute = (route: any) => {

        let Element;
        if(route.path=='login'){
            Element = route.element;
        }
        else if (route.element) {
            Element = <ProtectedRoute>{route.element}</ProtectedRoute>;
        } else {
            Element = <Outlet />;
        }

        return (
            <Route 
                key={route.path} 
                path={route.path} 
                element={route.layout ? <route.layout>{Element}</route.layout> : Element}
            >
                {route.children?.map((child:any)=> renderRoute(child))}
            </Route>)
    }

    return(
        <Routes>
            {routes.map((route:any) => renderRoute(route))}
        </Routes>
    )
}

export default RenderRoutes;