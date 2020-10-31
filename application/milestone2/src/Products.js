import React from 'react';
import './Products.css';
import { Link } from 'react-router-dom';

function Products({name, role, bio, image}) {
    return (
        <Link to={{
            pathname:'/about',
            details :{
                name: {name},
                role: {role},
                bio : {bio},
                image : {image}
            }
        }}>
            <div className="holder" style={{width:400}}> 
                <div className="Products">
                    <div className="ProductsImage">
                        <img src={image} alt="" />
                    </div>
                    <div className="ProductsInfo">
                        <h2>{name}</h2>
                        <h3>{role}</h3>
                    </div>
                </div>  
            </div>
        </Link>
    )
}

export default Products;
