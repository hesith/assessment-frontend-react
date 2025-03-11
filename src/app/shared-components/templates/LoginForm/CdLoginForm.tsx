import React, { useCallback, useEffect } from "react";
import CdButton from "../../atoms/Button/CdButton";
import CdCard from "../../atoms/Card/CdCard";
import CdTextInputWithLabel from "../../molecules/TextInputWithLabel/CdTextInputWithLabel";
import { useLanguage } from "../../../store/context/LanguageContext";
import { LoginRequest } from "../../../types/interfaces/request/login";

export interface CdLoginFormProps {
    onSubmit: (data: LoginRequest) => void;
    emailInvalidResMsg: string;
    passwordInvalidResMsg: string;
}

const CdLoginForm : React.FC<CdLoginFormProps> = ({onSubmit, emailInvalidResMsg, passwordInvalidResMsg}) => {
    const language = useLanguage();

    const [email, setEmail] = React.useState<string>('');
    const [emailValid, setEmailValid] = React.useState<boolean>(false);
    const [emailInvalidMsg, setEmailInvalidMsg] = React.useState<string>('');

    const [password, setPassword] = React.useState<string>('');
    const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
    const [passwordInvalidMsg, setPasswordInvalidMsg] = React.useState<string>('');

    const handleEmailTextChange = useCallback((data:React.ChangeEvent<HTMLInputElement>) => {
        const content = data.target.value;
        setEmail(content.trim());
        setEmailValid(true);
        setEmailInvalidMsg(language?.common.EMPTY)
    },[language])

    const handlePasswordTextChange = useCallback((data:React.ChangeEvent<HTMLInputElement>) => {
        const content = data.target.value;
        setPassword(content.trim());
        setPasswordValid(true);
        setPasswordInvalidMsg(language?.common.EMPTY)
    },[language])

    const handleSubmit = useCallback(() => {

        if(validateForm()===true){
            const data : LoginRequest = {
                email,
                password
            };
            onSubmit(data);
        }
    },[email,password, language])

    const validateForm = () => {
        if(email.length === 0) 
        {
            setEmailValid(false);
            setEmailInvalidMsg(language?.auth.EMPTY_EMAIL);
            return false;
        } 
        else 
        {
            setEmailValid(true);
            setEmailInvalidMsg(language?.common.EMPTY);
        };
        if(password.length === 0) 
        {
            setPasswordValid(false);
            setPasswordInvalidMsg(language?.auth.EMPTY_PASSWORD);
            return false;
        } 
        else 
        {
            setPasswordValid(true);
            setPasswordInvalidMsg(language?.common.EMPTY);
        };

        return true;
    }

    useEffect(()=>{
        if(emailInvalidResMsg!==''){
            setEmailInvalidMsg(emailInvalidResMsg);
            setEmailValid(false);
        }
        if(passwordInvalidResMsg!==''){
            setPasswordInvalidMsg(passwordInvalidResMsg);
            setPasswordValid(false);
        }
    }, [emailInvalidResMsg, passwordInvalidResMsg])

    if(language===undefined) return null;
    return (
        <div className="w-25 Login">  
                <CdCard 
                    cardTitle={language?.auth.LOGIN_PAGE_TITLE}
                    cardContent={(
                        <div className="mt-4">
                                <CdTextInputWithLabel 
                                    label="Email" 
                                    inputProps={{
                                        type:'email', 
                                        onChange: handleEmailTextChange,
                                        invalid: !emailValid && emailInvalidMsg !== '',
                                    }}
                                    invalid={!emailValid}
                                    invalidText={emailInvalidMsg}
                                    >
                                </CdTextInputWithLabel>
                            
                                <CdTextInputWithLabel 
                                    label="Password" 
                                    inputProps={{
                                        type:'password',
                                        onChange: handlePasswordTextChange,
                                        invalid: !passwordValid && passwordInvalidMsg !== ''

                                    }}
                                    invalid={!passwordValid}
                                    invalidText={passwordInvalidMsg}
                                    >
                                </CdTextInputWithLabel>

                            <div className="d-flex justify-content-center">
                                <CdButton onClick={handleSubmit} className="mt-2" color="success" text="Login"></CdButton>
                            </div>
                        </div>
                    )}
                    imgSrc="../../../../../public/assets/icons/logo.svg"
                    >

                </CdCard>
        </div>
    )
}


export default CdLoginForm;