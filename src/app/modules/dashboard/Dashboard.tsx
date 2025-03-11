import { useEffect, useState } from "react";
import CdCardWithListGroup from "../../shared-components/molecules/CardWithListGroup/CdCardWithListGroup";
import { useLanguage } from "../../store/context/LanguageContext";
import { dataService } from "../../services/DataService";

const Dashboard : React.FC = () => {
    const language = useLanguage();
    const [totalBooks, setTotalBooks] = useState(0);
    const [topOldestBooks, setTopOldestBooks] = useState([]);
    const [topNewestBooks, setTopNewestBooks] = useState([]);

    useEffect(()=>{
        const LoadDashboard = async()=>{
            const response = await dataService.getDashboardData();
            setTotalBooks(response?.data.totalBooks);

            const oldestBooks = response?.data.topOldestBooks;
            const newestBooks = response?.data.topNewestBooks;

            oldestBooks.forEach((book:any) => {
                book.text = book.bookName;
            });
            
            newestBooks.forEach((book:any) => {
                book.text = book.bookName;
            });

            setTopOldestBooks(oldestBooks)
            setTopNewestBooks(newestBooks)

        }
        LoadDashboard();
    },[])


    return (
            <div className="d-flex flex-row w-100  justify-content-around">
                <div className="d-flex flex-column justify-content-around">
                    <CdCardWithListGroup 
                        title={totalBooks.toString()} 
                        subtitle={language?.dashboard.DASHBOARD_COMPONENT_1}
                        color="warning"
                        />
                    <CdCardWithListGroup 
                        subtitle={language?.dashboard.DASHBOARD_COMPONENT_4} 
                        title={(topOldestBooks[0] as any)?.bookName
                            +" by "
                            +(topOldestBooks[0] as any)?.author
                            +" ("
                            +(topOldestBooks[0] as any)?.yearOfPublish
                            +")"
                        }
                        color="danger"
                    />
                    <CdCardWithListGroup 
                        subtitle={language?.dashboard.DASHBOARD_COMPONENT_5} 
                        title={(topNewestBooks[0] as any)?.bookName
                            +" by "
                            +(topNewestBooks[0] as any)?.author
                            +" ("
                            +(topNewestBooks[0] as any)?.yearOfPublish
                            +")"
                        }
                        color="primary"
                    />
                </div>
            
            <CdCardWithListGroup 
                title={language?.dashboard.DASHBOARD_COMPONENT_2} 
                source={topOldestBooks}
                color="secondary"
                />
                <CdCardWithListGroup 
                title={language?.dashboard.DASHBOARD_COMPONENT_3} 
                source={topNewestBooks}
                color="success"/>
                
            </div>
    )
}

export default Dashboard;