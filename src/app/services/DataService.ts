import { globalAppConfig } from "../config/global-app-config";
import { Pagination } from "../types/interfaces/request/pagination";
import { CoreService } from "./CoreService";

class DataService extends CoreService{
    getTableData = (pagination: Pagination) : Promise<any> => {
            return new Promise((resolve, reject) => {
                this.axios.post(globalAppConfig.baseApiUrl+'/data-table', pagination)
                    .then(async(response) => {
                        resolve(response.data)
                    })
                    .catch((e) => {
                        reject(new Error(e)); 
                    })
            })
    }

    getDashboardData = () : Promise<any> => {
        return new Promise((resolve, reject) => {
            this.axios.get(globalAppConfig.baseApiUrl+'/dashboard/data')
                .then(async(response) => {
                    resolve(response.data)
                })
                .catch((e) => {
                    reject(new Error(e)); 
                })
        })
    }
}

export const dataService = new DataService();