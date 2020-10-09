import React from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
    return(
            <Navbar  variant='dark' bg='dark' expand='sm' sticky='top' >
                <Nav >
                    <Nav.Link href='#'>Logo</Nav.Link>
                </Nav>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='ml-auto'>
                    <Nav className='ml-auto'>
                            <Nav.Link href="#about-me">About Me</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default NavBar; 