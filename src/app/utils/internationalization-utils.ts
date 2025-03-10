import common from '../../../public/locals/en/common.json';
import auth from '../../../public/locals/en/auth-module.json';
import dashboard from '../../../public/locals/en/dashboard-module.json';

export const combinedData = {
    common, 
    auth,
    dashboard
};

//instead of implementing i18, a dummy translator is used here, with no real use
export const TranslatedText = async() => {
    return combinedData;
}