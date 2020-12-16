import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./css/Card.css"; 

/*
**  UserCard.js
**
**  This component is the thumbnail for each user post
*/
function UserCard( {id, name, zipcode, email, userImage} ) {

    let image;
    
    if(userImage !== '' && userImage !== null)
    {
        image = userImage;
    }  
    else
    {
        image = "../images/nopic.png"; // default image
    }
    
    return (
        <Link className='link' to={`/chat?name=${name}&room=${name}`}>
            <div className="card"> 
                <img  className="cardImage" 
                    src={image}
                    onError={(e) => {
                        e.target.src = '../images/nopic.png' // fallback image
                    }} 
                alt=""/>

                <h2>{name}</h2>
                <h3>Location: {zipcode}</h3>
            </div>
        </Link>
    )
}

export default UserCard
