import CdPagination from "../../atoms/Pagination/CdPagination";
import CdTable from "../../atoms/Table/CdTable";

export interface CdTableWithPaginationProps{
    dataSource: object[]
    pages: number
    onNavigate: (activePageNo:number) => void

}

const CdTableWithPagination: React.FC<CdTableWithPaginationProps> = ({dataSource, pages, onNavigate}) => {
    return (
        <div className="d-flex flex-column">
            <CdTable bordered={true} dataSource={dataSource}/>
            <CdPagination pages={pages} onNavigate={onNavigate}/>
        </div>
    )
}

export default CdTableWithPagination;