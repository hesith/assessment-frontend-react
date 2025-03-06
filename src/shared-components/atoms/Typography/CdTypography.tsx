export interface CdTypographyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CdTypography : React.FC<CdTypographyProps> = ({ children, className, ...props}) => {
    return(
        <div className={className} {...props}>
            {children}
        </div>
    )

};

export default CdTypography;