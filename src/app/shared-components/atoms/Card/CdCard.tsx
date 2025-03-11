import { Card, CardBody, CardProps, CardSubtitle, CardTitle } from "reactstrap";

export interface CdCardProps extends CardProps {
    cardTitle?: string;
    cardSubtitle?: string;
    cardContent?: React.ReactNode;
    imgSrc?: string;
    color?: string
}

const CdCard : React.FC<CdCardProps> = ({cardTitle, cardSubtitle, cardContent, imgSrc, color}) => {
    return (
        <Card color={color} >
                <CardBody>
                    <CardTitle tag="h5" className="text-center">{cardTitle}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted text-center">{cardSubtitle}</CardSubtitle>

                    <div className="w-100 text-center">
                        <img src={imgSrc} className="w-50 mt-3 align-self-center"></img>
                    </div>
                    {cardContent}
                </CardBody>    
        </Card>
    )
}

export default CdCard;