interface GlobalAppConfig{
    baseApiUrl: string;
    dataTablePageSize: number;
}

export const globalAppConfig : GlobalAppConfig = {
    baseApiUrl: 'http://localhost:5000/api',
    dataTablePageSize: 9
}