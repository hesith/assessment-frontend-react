import axios, { AxiosInstance } from "axios";

export class ApiInterceptor{
    public axios : AxiosInstance = axios.create();
    private static instance : ApiInterceptor;

    private constructor() {   
        this.initializeRequest();     
    }

    public static getInstance(){
        if(this.instance == undefined){
            this.instance = new ApiInterceptor();
        }

        return this.instance;
    }

    private initializeRequest(){
        this.axios.interceptors.request.use(
            async (config) => {
                try { 
                  const token = localStorage.getItem('accessToken');
                  if (token) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                  }
                } catch (e) {
                  console.log(e);
                }
        
                return config;
              },
              (error) => {
                return Promise.reject(new Error(error));
              }
        )
    }
}