import SignIn from "./SignIn";

export const authRoutes = {
    routes:[
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: <SignIn/>
                }
            ]
        }
    ]
}