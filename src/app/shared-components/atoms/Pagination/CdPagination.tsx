import { useEffect, useState } from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { PaginationButton } from "../../../types/enums/pagination";

interface CdPaginationProps{
    pages: number,
    onNavigate: (activePageNo: number) => void;
}

const CdPagination: React.FC<CdPaginationProps> = ({pages, onNavigate}) =>{
    const [active, setActive] = useState(0);

    const handleNavigate = (button: PaginationButton, number: number = -1) => {
        switch (button){
            case PaginationButton.First:
                setActive(0);
                break;
            case PaginationButton.Previous:
                setActive(active-1);
                break;
            case PaginationButton.Next:
                setActive(active+1);
                break;
            case PaginationButton.Last:
                setActive(pages-1);
                break;
            case PaginationButton.PageNo:
                setActive(number);
                break;
        }
    }

    useEffect(()=>{
        onNavigate(active);
    }, [active])

    return (<Pagination>
                <PaginationItem 
                    hidden={pages<=2}
                    disabled={active==0} 
                    onClick={()=> active==0? {}: handleNavigate(PaginationButton.First)}
                >
                    <PaginationLink first>
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem 
                    hidden={pages<=2}
                    disabled={active==0} 
                    onClick={()=> active==0? {}: handleNavigate(PaginationButton.Previous)}
                >
                    <PaginationLink previous>
                    </PaginationLink>
            </PaginationItem>
        {[...Array(pages)].map((val,index) => {
            return (
                <PaginationItem 
                    key={index} 
                    active={index==active}
                    onClick={()=> handleNavigate(PaginationButton.PageNo, index)}
                >
                    <PaginationLink>
                        {index+1}
                    </PaginationLink>
                </PaginationItem>
            )
        })}
                <PaginationItem 
                    hidden={pages<=2}
                    disabled={active==(pages-1)} 
                    onClick={()=> active==(pages-1)? {}: handleNavigate(PaginationButton.Next)}
                >
                    <PaginationLink next/>
                </PaginationItem>
                <PaginationItem 
                    hidden={pages<=2}
                    disabled={active==(pages-1)} 
                    onClick={()=> active==(pages-1)? {}: handleNavigate(PaginationButton.Last)}
                >
                <PaginationLink
                    last
                />
            </PaginationItem>
        </Pagination>)
}

export default CdPagination;