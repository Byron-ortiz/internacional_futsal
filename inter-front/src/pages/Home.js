import React from "react";
import HeaderIndex from "../components/HeaderIndex";
import Slides from "../components/Slides";
import Timeline from "../components/TimeLine";
import Container from "react-bootstrap/esm/Container";

const Home = () => {
    return (
        <> <HeaderIndex></HeaderIndex>
           <Slides></Slides>
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
           <Timeline></Timeline>
    
      </>);
}

export default Home