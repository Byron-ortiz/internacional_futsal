import React from "react";
import HeaderIndex from "../components/HeaderIndex";
import CardPlayer from "../components/CardPlayer";
import Card from "../components/Card";
import './playerList.css';
import Footer from "../components/Footer";

import pulpo1 from '../assets/pulpo.jpg'
import pulpo2 from '../assets/pulpo.jpg'
import pulpo3 from '../assets/pulpo.jpg'

const cards = [
    {
        id: 1,
        nombre: 'Moisés Castillo',
        posicion: 'Ala',
        dorsal: '23',
        image: pulpo1
    },
    {
        id: 2,
        nombre: 'Claudio Lira',
        posicion: 'Cierre',
        dorsal: '14',
        image: pulpo2
    },
    {
        id: 3,
        nombre: 'Javier Matheus',
        posicion: 'Cierre, Ala',
        dorsal: '10',
        image: pulpo3
    },
    {
        id: 4,
        nombre: 'Franco Montenegro',
        posicion: 'Ala',
        dorsal: '13',
        image: pulpo3
    },
    {
        id: 5,
        nombre: 'Byron Ortiz',
        posicion: 'Pivot',
        dorsal: '19',
        image: pulpo3
    },
    {
        id: 6,
        nombre: 'Jeremy Troncoso',
        posicion: 'Ala',
        dorsal: '22',
        image: pulpo3
    }
]

const PlayerList = () => {
    console.log(cards)
    return (
        <div>
            <HeaderIndex></HeaderIndex>
            <div className="tittle-roster">
            <h1>Internacional Futsal Roster 2022-2023</h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        cards.map(card =>(
                            <div className="col-md-4" key={card.id}>
                                <Card nombre={card.nombre} imageSource={card.image} posicion={card.posicion} dorsal ={card.dorsal}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PlayerList