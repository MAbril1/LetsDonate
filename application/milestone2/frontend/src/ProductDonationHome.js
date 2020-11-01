import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProductDonationHome.css';
import Card from './Card';
import axios from 'axios';


/* some notes on how this *MIGHT* work:
get items from database
fetch("BACKEND.js")
  .then(res => res.json()) 
  run through each item in the database and display them in the brwoser grid/map
  .then((result) => { getCard(result); })

  In the case that there are filters, the items displayed will only be shown based on said filter.
*/
/*
                    {items.map(item => <Card key={item.name} item={item} /> )}
                    */

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
            }
        })
        .catch(exception => {
            alert(exception);
        })
    }
    useEffect(() => {
        axios.get("/api")
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.data);
                console.log(result);
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
                    {console.log(items)}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    // }
}

export default ProductDonationHome
