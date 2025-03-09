import { authRoutes } from "../../modules/auth/auth.routing";

const appRoutes = [
    ...authRoutes.routes
]

export default appRoutes;