import { useState } from "react";
import { ListGroup, ListGroupItem, Navbar, NavbarBrand, NavbarToggler,Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar className="nav-bar" dark color="danger" fixed="top">
                <NavbarToggler onClick={toggleNavbar}></NavbarToggler>
                <NavbarBrand>cvbcvb</NavbarBrand>
            </Navbar>
            <Offcanvas isOpen={isOpen} toggle={toggleNavbar} color="success">
                <OffcanvasHeader toggle={toggleNavbar}>
                    Sidebar
                </OffcanvasHeader>
                <OffcanvasBody onClick={toggleNavbar}>
                <ListGroup flush>
                    <ListGroupItem
                        action
                        active
                        tag="button"
                    >
                    Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem
                        action
                        tag="button"
                    >
                    Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem
                        action
                        tag="button"
                    >
                    Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem
                        action
                        tag="button"
                    >
                    Porta ac consectetur ac
                    </ListGroupItem>
                </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
        </>
    )
}

export default Header;