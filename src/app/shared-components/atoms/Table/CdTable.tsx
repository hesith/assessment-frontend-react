import { Table } from "reactstrap";
import CdButton from "../Button/CdButton";
import { useEffect, useState } from "react";
import { SortingOrder } from "../../../types/enums/table";

export interface CdTableProps{
    dataSource: object[]
    bordered? : boolean
}

const CdTable : React.FC<CdTableProps> = ({dataSource, bordered}) => {
    const headers = Object.keys(dataSource[0]);
    const [data, setData] = useState(dataSource);
    const [sortingOrder, setSortingOrder] = useState(SortingOrder.Ascending);

    const sort = (key: string) => {
        const fieldType = typeof(data[0] as any)[key];
        const dupData = data;

        if(sortingOrder==SortingOrder.Ascending){
            setSortingOrder(SortingOrder.Descending);
        }else{
            setSortingOrder(SortingOrder.Ascending);
        }
  
        if(fieldType == 'number'){
           if(sortingOrder==SortingOrder.Ascending)
           {
                dupData.sort((a:any, b:any) => b[key] - a[key]);
           }
           else
           {
                dupData.sort((a:any, b:any) => a[key] - b[key]);
           }
        }else{
            if(sortingOrder==SortingOrder.Ascending)
            {
                dupData.sort((a:any, b:any) => b[key].localeCompare(a[key]));
            } 
            else
            {
                dupData.sort((a:any, b:any) => a[key].localeCompare(b[key]));
            }
        }    
        setData(dupData)
    }
    
    useEffect(()=>{
        setData(dataSource);
    },[dataSource])

    return (
        <Table striped style={{width:'90vw'}} bordered={bordered} borderless={!bordered}>
            <thead>
                <tr>
                    {headers.map((key)=>(
                        <th onClick={()=>sort(key)} key={key}><CdButton color="link" text={key}></CdButton></th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item:any)=>{
                    return <tr key={item?.id}>
                                {
                                Object.values(item).map((value:any)=>{
                                       return <td key={item?.id+value}>{value}</td>
                                })
                                }
                           </tr>
                })}
                
            </tbody>
        </Table>
    )
}

export default CdTable;