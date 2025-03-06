import { FormGroup, FormGroupProps } from 'reactstrap';

export interface CdFormGroupProps extends FormGroupProps {
  children?: React.ReactNode;
}

const CdFormGroup: React.FC<CdFormGroupProps> = ({ children, ...props }) => {
  return (
  <FormGroup {...props}>
    {children}
  </FormGroup>);
};

export default CdFormGroup;
