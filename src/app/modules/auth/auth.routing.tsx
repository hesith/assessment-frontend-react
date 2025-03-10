import MainLayout from "../../layouts/MainLayout";
import SignIn from "./SignIn";

export const authRoutes = {
    routes:[
        {
            path: 'auth',
            layout: MainLayout,
            children: [
                {
                    path: 'login',
                    element: <SignIn/>
                }
            ]
        }
    ]
}