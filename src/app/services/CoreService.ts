import { AxiosInstance } from "axios";
import { ApiInterceptor } from "../config/interceptors/ApiInterceptor";

export class CoreService{
    protected axios : AxiosInstance;

    constructor() {
        this.axios = ApiInterceptor.getInstance().axios;  
    }
}