import MainLayout from "../../layouts/MainLayout";
import Dashboard from "./Dashboard";

export const dashboardRoutes = {
    routes:[
        {
            path: 'dashboard',
            layout: MainLayout,
            children: [
                {
                    path: 'data',
                    element: <Dashboard/>
                }
            ]
        }
    ]
}