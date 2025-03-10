import CdCard from "../../shared-components/atoms/Card/CdCard";
import { useLanguage } from "../../store/context/LanguageContext";

const Dashboard : React.FC = () => {
    const language = useLanguage();

    return (
            <div>
                <CdCard cardTitle={language?.dashboard.DASHBOARD_COMPONENT_1} cardContent={language?.dashboard.DASHBOARD_CONTENT_1}/>
                <CdCard cardTitle={language?.dashboard.DASHBOARD_COMPONENT_2} cardContent={language?.dashboard.DASHBOARD_CONTENT_2}/>
                <CdCard cardTitle={language?.dashboard.DASHBOARD_COMPONENT_3} cardContent={language?.dashboard.DASHBOARD_CONTENT_3}/>
                <CdCard cardTitle={language?.dashboard.DASHBOARD_COMPONENT_4} cardContent={language?.dashboard.DASHBOARD_CONTENT_4}/>
            </div>
    )
}

export default Dashboard;