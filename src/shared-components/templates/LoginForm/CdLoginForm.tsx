import React from "react";
import CdButton from "../../atoms/Button/CdButton";
import CdCard from "../../atoms/Card/CdCard";
import CdTextInputWithLabel from "../../molecules/TextInputWithLabel/CdTextInputWithLabel";
import { useLanguage } from "../../../store/context/LanguageContext";

export interface CdLoginFormProps {
    onSubmit: () => void;
}

const CdLoginForm : React.FC<CdLoginFormProps> = () => {
    const language = useLanguage();

    const [email, setEmail] = React.useState<string>('');
    const [emailValid, setEmailValid] = React.useState<boolean>(false);
    const [emailInvalidMsg, setEmailInvalidMsg] = React.useState<string>('');

    const [password, setPassword] = React.useState<string>('');
    const [passwordValid, setPasswordValid] = React.useState<boolean>(false);
    const [passwordInvalidMsg, setPasswordInvalidMsg] = React.useState<string>('');

    const handleEmailTextChange = (data:React.ChangeEvent<HTMLInputElement>) => {
        const content = data.target.value;
        setEmail(content);
        setEmailInvalidMsg(language?.common.EMPTY)
  
    }

    const handlePasswordTextChange = (data:React.ChangeEvent<HTMLInputElement>) => {
        const content = data.target.value;
        setPassword(data.target.value);
        setPasswordInvalidMsg(language?.common.EMPTY)
    }

    const handleSubmit = () => {
        validateForm();
    }

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
    }

    if(language===undefined) return null;
    return (
        <div>  
                <CdCard 
                    cardTitle={language?.auth.LOGIN_PAGE_TITLE}
                    cardContent={(
                        <div className="mt-4">
                                <CdTextInputWithLabel 
                                    label="Email" 
                                    inputProps={{
                                        type:'email', 
                                        onChange: handleEmailTextChange,
                                        invalid: !emailValid && emailInvalidMsg !== ''
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

                            <CdButton onClick={handleSubmit} className="mt-2" color="primary" text="Login"></CdButton>
                        </div>
                    )}>

                </CdCard>
        </div>
    )
}


export default CdLoginForm;