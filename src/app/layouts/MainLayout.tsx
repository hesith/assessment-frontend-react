import { ReactNode } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

interface MainLayoutProps{
    children: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({children})=> {
    const user = localStorage.getItem('currentUser');

    return (
        <div className="d-flex justify-content-center align-items-center bg-info" 
        style={{
            height: '100vh'
            }}>
            <Header hidden={user==''||user==null}></Header>
            <SideBar hidden={user==''||user==null}></SideBar>
            {children}

        </div>
    )
}

export default MainLayout;