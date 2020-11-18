import React, {useState, useEffect} from 'react';
import "./Card.css"; 

function Card( {name, description, productImage} ) {
    
    let image;
    
    if(productImage !== '' && productImage !== null) // checks if product has an image from the database
    {
        // checks if the image exists on the server, if not, use the default image
        fetch("../../public/images/" + productImage)
            .then(res => {
            if(res.status == 404)
            {
                image = "../images/charity.png";
            }
            else
            {
                image = "../../public/images/" + productImage;
            }
        })
        .catch(err=>{image = "../images/charity.png";})

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
            alt=""/>

    <h2>{name}</h2>
        </div>
    )
}

export default Card
