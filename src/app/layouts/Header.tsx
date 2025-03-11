import { useCallback, useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CdButton from "../shared-components/atoms/Button/CdButton";
import { useLanguage } from "../store/context/LanguageContext";
import { authDataService } from "../services/data/AuthDataService";
import { clearUserData } from "../store/reducers/userSlice";
import { setSidebar } from "../store/reducers/sidebarSlice";

interface HeaderProps{
    hidden: boolean
}

const Header: React.FC<HeaderProps> = ({hidden}) => {
    const navigate = useNavigate();
    const language = useLanguage();
    const user = useSelector((state:any)=> state.user);
    const isSidebarOpen:boolean = useSelector((state:any)=> state?.sidebar?.isOpen);
    const dispatch = useDispatch();
    
    const [userData, setUserData] = useState<any>('')
    
    const toggleNavbar = () => {
        dispatch(setSidebar({isOpen:!isSidebarOpen}));
    };

    const handleLogOut = useCallback(() =>{
        authDataService.clearSession();
        dispatch(clearUserData());
        navigate("/auth/login");
    },[])

    useEffect(()=>{
        setUserData(user);
    },[user])

    return (
            <Navbar hidden={hidden} className="nav-bar" dark color="danger" fixed="top">
                <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
                <NavbarBrand>
                    <CdButton 
                    className="mx-3" 
                    hidden={userData?.firstName==''} 
                    color="info" 
                    text={language?.common.LOGOUT}
                    onClick={handleLogOut}
                    ></CdButton>
                    {userData?.firstName==''? language?.common.NOT_LOGGED_IN: userData.firstName+" "+userData.lastName}
                </NavbarBrand>
            </Navbar>
            
    )
}

export default Header;