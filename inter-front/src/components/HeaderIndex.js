import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function HeaderIndex() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid className="mb-10">
        <Navbar.Brand href="#home">Internacional Futsal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#vision">Visión</Nav.Link>
            <Nav.Link href="#historia">Historia</Nav.Link>
            <NavDropdown title="Acerca de:" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> Directiva</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> Cuerpo Técnico</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Jugadores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Jugadoras</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4"> Competencias</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="\login">Iniciar sesión</Nav.Link>
            <Nav.Link eventKey={2} href="\signup"> Crear cuenta </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default HeaderIndex;