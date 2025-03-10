import { ReactNode } from "react";
import Header from "./Header";

interface MainLayoutProps{
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=> {
    return (
        <div className="d-flex justify-content-center align-items-center bg-info" 
        style={{
            height: '100vh'
            }}>
            <Header></Header>
            {children}

        </div>
    )
}

export default MainLayout;