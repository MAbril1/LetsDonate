import React, {useState, useEffect} from 'react';
import "./Card.css"; 

function Card( {name, description, productImage} ) {

    let image;
    
    if(productImage !== '' && productImage !== null) // checks if product has an image from the database
    {
        

        image = '../images/' + productImage;
    }  
    else
    {
        image = "../images/charity.png"; // default image
    }
    
    return (
        <div className="card">
            <img  className="cardImage" 
            src={image}
            onError={(e) => {
                e.target.src = '../images/charity.png' // fallback image
             }} 
            alt=""/>

    <h2>{name}</h2>
        </div>
    )
}

export default Card
