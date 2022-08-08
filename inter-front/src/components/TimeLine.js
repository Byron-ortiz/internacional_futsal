import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Container from 'react-bootstrap/Container';



function Timeline(){
    return(
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
    )
}

export default Timeline;