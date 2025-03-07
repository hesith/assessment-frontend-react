import React, { useEffect } from "react";
import { TranslatedText } from "../../utils/internationalization-utils";

const LanguageContext = React.createContext({});

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider : React.FC<LanguageProviderProps> = ({children}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [languageData, setLanguageData] = React.useState<any>();

    useEffect(() => {
            const setData = async () => {
                setLanguageData(await TranslatedText());
            }
            setData();
    }, []);

    return <LanguageContext.Provider value={languageData}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => React.useContext(LanguageContext);