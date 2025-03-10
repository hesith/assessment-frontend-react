import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Navbar, NavbarBrand, NavbarToggler,Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { mainNavigation } from "../config/app-navigation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CdButton from "../shared-components/atoms/Button/CdButton";
import { useLanguage } from "../store/context/LanguageContext";
import { authDataService } from "../services/data/AuthDataService";
import { clearUserData } from "../store/reducers/userSlice";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const language = useLanguage();
    const user = useSelector((state:any)=> state.user);
    const dispatch = useDispatch();
    
    const [isOpen, setIsOpen] = useState(false);

    const [userData, setUserData] = useState<any>('')
    
    const toggleNavbar = () => setIsOpen(!isOpen);

    const handleMenuClick = (url: string) => {
        navigate(url);
    }

    const handleLogOut = () =>{
        authDataService.clearSession();
        dispatch(clearUserData());
        navigate("/auth/login");
    }

    useEffect(()=>{
        setUserData(user);
    },[user])

    return (
        <>
            <Navbar className="nav-bar" dark color="danger" fixed="top">
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
            <Offcanvas isOpen={isOpen} toggle={toggleNavbar} color="success">
                <OffcanvasHeader toggle={toggleNavbar}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody onClick={toggleNavbar}>
                <ListGroup flush>
                    {mainNavigation.map((menuItem)=> 
                    <ListGroupItem 
                        key={menuItem.id}
                        action
                        active
                        tag="button"
                        onClick={()=> handleMenuClick(menuItem.url)}
                    >
                        {menuItem.label}
                    </ListGroupItem>)}
                </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default Header;