import { FormGroup } from "reactstrap";
import CdTextInput, { CdTextInputProps } from "../../atoms/Input/Text/CdTextInput";
import CdTypography from "../../atoms/Typography/CdTypography";

export interface CdTextInputWithLabelProps  {
    label: string,
    inputProps?: CdTextInputProps,
    invalid?: boolean,
    invalidText?: string,
}

const CdTextInputWithLabel: React.FC<CdTextInputWithLabelProps> = ({label, inputProps, invalid, invalidText}) => {
    return (
        <FormGroup className="text-start">
          <CdTypography>{label}</CdTypography>
          <CdTextInput {...inputProps}></CdTextInput>  
          <CdTypography hidden={!invalid} className="fw-light text-danger">{invalidText}</CdTypography>
        </FormGroup>
    )
}

export default CdTextInputWithLabel;