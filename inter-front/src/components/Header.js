import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="mb-10">
        <Navbar.Brand href="#home">Internacional Futsal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="\login">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="\signup"> Crear cuenta </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default Header;