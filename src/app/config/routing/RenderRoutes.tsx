import {Routes, Route, Outlet} from 'react-router-dom'

const RenderRoutes = ({routes}:any) => {

    const renderRoute = (route: any) => {

        let Element;

        if (route.element) {
            Element = <>{route.element}</>;
        
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