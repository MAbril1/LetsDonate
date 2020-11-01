import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProductDonationHome.css';
import Card from './Card';
import axios from 'axios';

                    

function ProductDonationHome() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [check, setChecked] = useState(false);
    const [items, setItems] = useState([]);

    const filterClothes = () => {
        axios.post("api/filterClothes", {"clothes": "cloth"})
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                setItems(result.data.products);
            }
        })
        .catch(exception => {
            alert(exception);
        })
    }
    
    const filterFurniture = () => {
        axios.post("api/filterFurniture", {"furniture": "furniture"})
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                setItems(result.data.products);
                
            }
        })
        .catch(exception => {
            alert(exception);
        })
    }
    useEffect(() => {
        axios.get("/api")
        .then((result) => {
                setIsLoaded(true);
                setItems(result.data);
                console.log(result.data[0].name);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

        return (
            <div className="productDonationHome">
                <div className="filters">
                    <h1>Filters</h1>
                    <div className="checkbox">
                        <label><input type="checkbox" rel="clothes" onClick={() => filterClothes()}/>Clothes</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" rel="furniture" onClick={() => filterFurniture()}/>Furniture</label>
                    </div>
                </div>
                <div className="split"></div>
                <div className="items">
                    {items.map(item => <Card name={item.name} description={item.description}/> )}
                </div>
            </div>
        );
    // }
}

export default ProductDonationHome
