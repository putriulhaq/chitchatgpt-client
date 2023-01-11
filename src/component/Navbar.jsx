import React from 'react'
import '../style/component/navbar.css'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../src/asset/logo.png'
import { Link } from 'react-router-dom';

const ComNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                    <Navbar.Brand href="#home">
                        <img src={Logo} width="60">
                        </img></Navbar.Brand>
                    </Link>
                   
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Container className="center-navbar">
                        <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link >Home</Nav.Link>
                            </Link>
                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Translate</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Motivate</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">About</Nav.Link>
                        </Nav>
                        </Container >
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default ComNavbar;