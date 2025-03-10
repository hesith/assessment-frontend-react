import { Button, ButtonProps } from "reactstrap";

export interface CdButtonProps extends ButtonProps {
    color?: string;
    text?: string;
    className?: string;
    onClick?: (data: React.MouseEvent<HTMLButtonElement>) => void;

    hidden?: boolean
}

const CdButton : React.FC<CdButtonProps> = ({color, text, className, onClick, hidden}) => {
    return(
        <Button hidden={hidden} onClick={onClick} className={className} color={color}>{text}</Button>
    )
}

export default CdButton;