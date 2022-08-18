import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Container from 'react-bootstrap/Container';

function Slides() {
    return(
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
    )
}

export default Slides;