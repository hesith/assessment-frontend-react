import CdCard from "../../atoms/Card/CdCard";
import CdListGroup from "../../atoms/ListGroup/CdListGroup";

interface CdCardWithListGroupProps{
    title?: string
    subtitle?: string
    source?: object[]
    numbered?: boolean,
    color?: string
}

const CdCardWithListGroup : React.FC<CdCardWithListGroupProps> = ({title, subtitle, source, numbered, color}) => {
    return (
        <CdCard 
            cardTitle={title} 
            cardSubtitle={subtitle}
            cardContent={ 
                <CdListGroup source={source} numbered={numbered}/>
            }
            color={color}
        >
            
        </CdCard>
        
    )
}

export default CdCardWithListGroup;