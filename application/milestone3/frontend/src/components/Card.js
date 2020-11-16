import React, {useState, useEffect} from 'react';
import "./Card.css";
import charity from '../images/charity.png';
 

function Card( {name, description, productImage} ) {
    
    return (
        <div className="card">
            <img  className="cardImage" 
            src={charity} 
            alt=""/>

    <h2>{name}</h2>
        </div>
    )
}

export default Card
