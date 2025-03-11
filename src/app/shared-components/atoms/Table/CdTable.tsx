import { Table } from "reactstrap";

export interface CdTableProps{
    dataSource: object[]
    bordered? : boolean
}

const CdTable : React.FC<CdTableProps> = ({dataSource, bordered}) => {
    const headers = Object.keys(dataSource[0]);
    return (
        <Table striped style={{width:'90vw'}} bordered={bordered} borderless={!bordered}>
            <thead>
                <tr>
                    {headers.map((key)=>(
                        <th key={key}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((item:any)=>{
                    return <tr key={item?.id}>
                                {
                                Object.values(item).map((value:any)=>{
                                       return <td key={null}>{value}</td>
                                })
                                }
                           </tr>
                })}
                
            </tbody>
        </Table>
    )
}

export default CdTable;