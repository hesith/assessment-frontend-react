
class AuthDataService{
    setSession = async(accessToken: string, userData: string): Promise<any> =>{
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('currentUser', userData);
    }

    clearSession = async(): Promise<any> =>{
        localStorage.setItem('accessToken', '');
        localStorage.setItem('currentUser', '');
    }
}

export const authDataService = new AuthDataService();