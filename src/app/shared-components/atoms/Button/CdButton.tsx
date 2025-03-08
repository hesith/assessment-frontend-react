import { Button, ButtonProps } from "reactstrap";

export interface CdButtonProps extends ButtonProps {
    color?: string;
    text?: string;
    className?: string;
    onClick?: (data: React.MouseEvent<HTMLButtonElement>) => void;
}

const CdButton : React.FC<CdButtonProps> = ({color, text, className, onClick}) => {
    return(
        <Button onClick={onClick} className={className} color={color}>{text}</Button>
    )
}

export default CdButton;