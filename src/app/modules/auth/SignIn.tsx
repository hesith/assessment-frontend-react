import { authService } from "../../services/AuthService";
import CdLoginForm from "../../shared-components/templates/LoginForm/CdLoginForm";
import { LoginRequest } from "../../types/interfaces/request/login";

const SignIn : React.FC = () => {

    const handleSignIn = (data: LoginRequest) => {
        authService.login(data);
    }

    return (
            <CdLoginForm onSubmit={handleSignIn}></CdLoginForm>
    )
}

export default SignIn;