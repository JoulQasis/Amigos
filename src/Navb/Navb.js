import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navCss from "./Navb.module.css";

function Navb() {
    return (
        <>
            <Navbar className={navCss.navbar1} expand="md" sticky='top' >
                <Container className={navCss.container}>
                    <Navbar.Brand className={navCss.navL1} href="#home">Amigos.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className={navCss.navcollaps1} id="responsive-navbar-nav ">
                        <Nav  >
                            <Nav.Link className={navCss.navL} href="#home">Home</Nav.Link>
                            <Nav.Link className={navCss.navL} href="#features">Features</Nav.Link>
                            <Nav.Link className={navCss.navL} href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navb
