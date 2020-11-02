import React from 'react';
import "./Card.css";
import charity from './images/charity.png';

function Card( {name, description} ) {
    return (
        <div className="card">
            <img className="cardImage" 
            src={charity}  
            
            alt=""/>

    <h2>{name}</h2>
        </div>
    )
}

export default Card
