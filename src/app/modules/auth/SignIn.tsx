import { useNavigate } from "react-router-dom";
import { authService } from "../../services/AuthService";
import CdLoginForm from "../../shared-components/templates/LoginForm/CdLoginForm";
import { LoginRequest } from "../../types/interfaces/request/login";
import { useState } from "react";
import { authDataService } from "../../services/data/AuthDataService";
import { useDispatch } from "react-redux";
import { setUserData, User } from "../../store/reducers/userSlice";

const SignIn : React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [emailInvalidResMsg, setEmailInvalidResMsg] = useState('');
    const [passwordInvalidResMsg, setPasswordInvalidResMsg] = useState('');


    const handleSignIn = async (data: LoginRequest) => {
        setEmailInvalidResMsg('');
        setPasswordInvalidResMsg('');

        const response = await authService.login(data);

        if(response.success===false){
            const msg = response.msg;
            if(msg.startsWith("Email")){
                setEmailInvalidResMsg(msg);
            }else{
                setPasswordInvalidResMsg(msg);
            }
        }else{
            const token = response.data.accessToken;

            const userData: User = {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
            }

            authDataService.setSession(token, JSON.stringify(userData));
            dispatch(setUserData({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
            }))
            
            navigate('/dashboard/data')
        }
    }

    return (
            <CdLoginForm 
                onSubmit={handleSignIn} 
                emailInvalidResMsg={emailInvalidResMsg} 
                passwordInvalidResMsg={passwordInvalidResMsg}>

            </CdLoginForm>
    )
}

export default SignIn;