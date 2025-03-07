export interface CdTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hidden?: boolean;
}

const CdTypography : React.FC<CdTypographyProps> = ({ children, className, hidden, ...props}) => {
    return(
        <div hidden={hidden} className={className} {...props}>
            {children}
        </div>
    )

};

export default CdTypography;