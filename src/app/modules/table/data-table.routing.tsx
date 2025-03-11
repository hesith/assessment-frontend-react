import MainLayout from "../../layouts/MainLayout";
import DataTable from "./DataTable";

export const tableRoutes = {
    routes:[
        {
            path: 'data-table',
            layout: MainLayout,
            children: [
                {
                    path: '',
                    element: <DataTable/>
                }
            ]
        }
    ]
}