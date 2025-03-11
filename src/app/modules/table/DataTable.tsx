import { useEffect, useState } from "react";
import { dataService } from "../../services/DataService";
import { Pagination } from "../../types/interfaces/request/pagination";
import { globalAppConfig } from "../../config/global-app-config";
import CdTableWithPagination from "../../shared-components/molecules/CdTableWithPagination/CdTableWithPagination";

const DataTable: React.FC = () => {
    const [dataSource, setDataSource] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [pages, setPages] = useState(1);

    useEffect(()=>{
        const LoadTableData = async() => {
            const request: Pagination = {pageNo:pageNo, pageSize: globalAppConfig.dataTablePageSize}
            const response = await dataService.getTableData(request);
            setDataSource(response.data.data)
            setPages(response.data.pages)
        }
        LoadTableData();
    },[pageNo])
    
    const handleNavigate = (pageIndex:number) => {
        setPageNo(pageIndex+1);
    }

    if(dataSource.length>0){
        return (
            <CdTableWithPagination pages={pages} dataSource={dataSource} onNavigate={handleNavigate}></CdTableWithPagination>
        )
    }
    
}

export default DataTable;