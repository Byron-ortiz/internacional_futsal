import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/scss/bootstrap.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {
  return (
    <><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
    <Container>
    <Carousel fade variant="dark" wrap="false">
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="prov.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Campeones de la Champions</h3>
          <p>Byron Ortiz mvp: ¡SIIIIIIIIIIIIU!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="prov.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Bienvenido Real Madrid futsal!</h3>
          <p>El pasado agosto se logró finalmente el acuerdo con  </p>
          <p> Real madrid para representar su rama de futsal en su equipo ANFP</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item> 
        <img
          className="d-block w-100"
          src="prov.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3> Bienvenida Ferrao!</h3>
          <p>
            La nueva contratación del albiazul de cara al mundial
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    <Container>
      <h1 className='h1-mt-3em' align="center" id="vision"> Visión</h1>
    </Container>
    <Container> 
      <blockquote className='center'> 
        <p>El principal objetivo del club es llevar el futsal a los distintos barrios y villas de la región. 
        La situación actual de las canteras en el fútbol de nuestro país deja sin oportunidades ni esperanzas 
        a los jóvenes de los sectores más riesgosos. Internacional busca devolver estos sueños a los jugadores
        a través de la enseñanza de la disciplina del futsal y les brinda la opción de ser parte de un equipo
        con visión al alto rendimiento mediante el entrenamiento constante, el compromiso y los valores.</p>
      <footer className='right'> Profesora María José Contreras</footer>
      </blockquote>
    </Container>
    <Container>
      <h1 className='h1-mt-3em' align="center" id="historia"> Historia</h1>
    </Container>
    <Container>
    <VerticalTimeline lineColor="black">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#48805D', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #48805D' }}
    date="20 Mayo 2021"
    iconStyle={{ background: '#48805D', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Fundación del club</h3>
    <h4 className="vertical-timeline-element-subtitle">Santiago, CL</h4>
    <p>
      Se funda el club Internacional Futsal ante el IND.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="11 Julio 2021"
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Primer entrenamiento en formato mixto</h3>
    <h4 className="vertical-timeline-element-subtitle">El Descanso, Quilicura</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="6 Noviembre 2021"
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Liga Elite</h3>
    <h4 className="vertical-timeline-element-subtitle">Santiago, CL</h4>
    <p>
      Primera participación en un campeonato de futsal por parte del club en la categoría masculina.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="17 Diciembre 2021"
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Cierre de año</h3>
    <h4 className="vertical-timeline-element-subtitle">Santiago, CL</h4>
    <p>
      Gala de fin de año con todas la categorías del club, entrega de premios.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="18 Diciembre 2021 "
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title"> Cierre de campaña regala una sonrisa</h3>
    <h4 className="vertical-timeline-element-subtitle">Quilicura, Santiago, CL</h4>
    <p>
      Entrega de Regalos de navidad recolectados mediante campaña interna del club a Campamento los Ladrilleros de Quilicura
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="14 Febrero 2022"
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Comienzo de pretemporada 2022</h3>
    <h4 className="vertical-timeline-element-subtitle">Reorganización</h4>
    <p>
      Se separa la rama mixta en categoría femenina y masculina.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#DCE1E7', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #DCE1E7' }}
    date="Marzo - Junio 2022"
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Liga Metropolitana y Elite</h3>
    <h4 className="vertical-timeline-element-subtitle">Rama masculina</h4>
    <p>
      Se participa en ambos campeonatos de futsal obteniendo muy buenos resultados y haciendo frente a equipos con gran experiencia en la disciplina.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: '#013A79', color: '#fff' }}
    // icon={<StarIcon />}
  />
</VerticalTimeline> 
    </Container>
  </>);
}

export default App;
