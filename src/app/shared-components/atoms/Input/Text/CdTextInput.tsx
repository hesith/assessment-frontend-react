import { Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

export interface CdTextInputProps {
    type?: InputType;
    placeholder?: string;
    onChange?: (data: React.ChangeEvent<HTMLInputElement>) => void;
    invalid?: boolean;
}

const CdTextInput : React.FC<CdTextInputProps> = ({type, placeholder, onChange, invalid}) => {
    return (
            <Input 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}
                invalid={invalid}
            >
            </Input>
    )
};

export default CdTextInput;