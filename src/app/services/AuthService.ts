import { globalAppConfig } from "../config/global-app-config";
import { LoginRequest } from "../types/interfaces/request/login";
import { CoreService } from "./CoreService";

class AuthService extends CoreService{
    login = (credentials:LoginRequest) : Promise<any> => {
        return new Promise((resolve, reject) => {
            this.axios.post(globalAppConfig.baseApiUrl+'/auth/login', credentials)
                .then(async(response) => {
                    resolve(response.data)
                })
                .catch((e) => {
                    reject(new Error(e)); 
                })
        })
    }
}

export const authService = new AuthService();