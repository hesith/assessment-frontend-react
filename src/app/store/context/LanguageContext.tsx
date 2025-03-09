import React, { useEffect } from "react";
import { combinedData, TranslatedText } from "../../utils/internationalization-utils";

const LanguageContext = React.createContext(combinedData);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider : React.FC<LanguageProviderProps> = ({children}) => {
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