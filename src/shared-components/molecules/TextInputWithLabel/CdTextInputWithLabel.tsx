import CdTextInput, { CdTextInputProps } from "../../atoms/Input/Text/CdTextInput";
import CdTypography from "../../atoms/Typography/CdTypography";

export interface CdTextInputWithLabelProps  {
    label: string,
    inputProps?: CdTextInputProps,
}

const CdTextInputWithLabel: React.FC<CdTextInputWithLabelProps> = ({label, inputProps}) => {
    return (
        <div className="text-start">
          <CdTypography>{label}</CdTypography>
          <CdTextInput {...inputProps}></CdTextInput>  
        </div>
    )
}

export default CdTextInputWithLabel;