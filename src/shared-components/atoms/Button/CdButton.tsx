import { Button, ButtonProps } from "reactstrap";

export interface CdButtonProps extends ButtonProps {
    color?: string;
    text?: string;
    className?: string;
}

const CdButton : React.FC<CdButtonProps> = ({color, text, className}) => {
    return(
        <Button className={className} color={color}>{text}</Button>
    )
}

export default CdButton;