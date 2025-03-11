import { ListGroup, ListGroupItem } from "reactstrap";

interface CdListGroupProps{
    source?: object[]
    numbered?: boolean
}

const CdListGroup: React.FC<CdListGroupProps> = ({source, numbered}) => {
    return(
        <ListGroup numbered={numbered}>
            {source?.map(((item:any) => 
                <ListGroupItem key={null}>
                    {item.text}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default CdListGroup;