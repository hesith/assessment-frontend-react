import CdButton from "../../atoms/Button/CdButton";
import CdCard from "../../atoms/Card/CdCard";
import CdFormGroup from "../../atoms/FormGroup/CdFormGroup";
import CdTextInputWithLabel from "../../molecules/TextInputWithLabel/CdTextInputWithLabel";



const CdLoginForm : React.FC = () => {
    return (
        <div>
            <CdFormGroup>
                <CdCard 
                    cardTitle="Login to the System" 
                    cardContent={(
                        <div className="mt-4">
                            <CdTextInputWithLabel 
                                label="Email" 
                                inputProps={{
                                    type:'email', 
                                }}>
                            </CdTextInputWithLabel>
                            <CdTextInputWithLabel 
                                label="Password" 
                                inputProps={{
                                    type:'password',
                                }}>
                            </CdTextInputWithLabel>

                            <CdButton className="mt-2" color="primary" text="Login"></CdButton>
                        </div>
                    )}>

                </CdCard>
            </CdFormGroup>

        </div>
    )
}

export default CdLoginForm;