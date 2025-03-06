import { Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

export interface CdTextInputProps {
    type?: InputType;
    placeholder?: string;
}

const CdTextInput : React.FC<CdTextInputProps> = ({type, placeholder}) => {
    return (
        <div>
            <Input type={type} placeholder={placeholder}>
            </Input>
        </div>
    )
};

export default CdTextInput;