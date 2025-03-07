import common from '../../public/locals/en/common.json';
import auth from '../../public/locals/en/auth-module.json';

const combinedData = {
    common, 
    auth
};

//instead of implementing i18, a dummy translator is used here, with no real use
export const TranslatedText = async() => {
    return combinedData;
}