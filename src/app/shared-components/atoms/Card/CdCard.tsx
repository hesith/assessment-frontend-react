import { Card, CardBody, CardProps, CardSubtitle, CardTitle } from "reactstrap";

export interface CdCardProps extends CardProps {
    cardTitle?: string;
    cardSubtitle?: string;
    cardContent?: React.ReactNode;
}

const CdCard : React.FC<CdCardProps> = ({cardTitle, cardSubtitle, cardContent}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle tag="h5">{cardTitle}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{cardSubtitle}</CardSubtitle>
                {cardContent}
            </CardBody>
        </Card>
    )
}

export default CdCard;