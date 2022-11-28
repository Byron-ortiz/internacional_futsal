import React from "react";

import './cards.css';


function Card({nombre, imageSource, posicion, dorsal}) {
  return (
    <div className="card animate__animated animate__fadeInUp">
        <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top"/>
        </div>
        <div className="card-body">
            <h4 className="card-title">{nombre}</h4>
            <p className="card-text text-secondary">Posición: {posicion}</p>
            <p className="card-text text-secondary">Dorsal: {dorsal}</p>
        </div>
    </div>
    
  );
}

export default Card; 
