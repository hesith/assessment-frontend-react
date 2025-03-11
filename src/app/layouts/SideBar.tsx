import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ListGroup, ListGroupItem, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { mainNavigation } from "../config/app-navigation";
import { useEffect, useState } from "react";
import { setSidebar } from "../store/reducers/sidebarSlice";
import { setCurrentNavigation } from "../store/reducers/navigationSlice";

interface SideBarProps{
    hidden?: boolean
}

const SideBar : React.FC<SideBarProps> = ({hidden}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const barState = useSelector((state:any)=> state?.sidebar?.isOpen);
    const [isOpen, setIsOpen] = useState(barState)

    const defPath = useSelector((state:any)=> state?.nav?.id);
    const [activePath, setActivePath] = useState(defPath);


    const handleMenuClick = (menuItem:any) => {
        dispatch(setCurrentNavigation({id: menuItem?.id}))
        setActivePath(menuItem?.id)
        navigate(menuItem?.url);
    }

    const toggleNavbar = () => {
            dispatch(setSidebar({isOpen:!isOpen}));
            setIsOpen(!isOpen);
    };
    
    useEffect(()=>{
        setIsOpen(barState)
    },[barState])

    return (
            <Offcanvas hidden={hidden} isOpen={isOpen} toggle={toggleNavbar} color="success">
                <OffcanvasHeader toggle={toggleNavbar}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody onClick={toggleNavbar}>
                <ListGroup flush>
                    {mainNavigation.map((menuItem)=> 
                    <ListGroupItem 
                        key={menuItem.id}
                        action
                        active={menuItem.id==activePath}
                        tag="button"
                        onClick={()=> handleMenuClick(menuItem)}
                    >
                        {menuItem.label}
                    </ListGroupItem>)}
                </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
    )
}

export default SideBar;