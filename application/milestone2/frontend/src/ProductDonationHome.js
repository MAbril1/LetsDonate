import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './ProductDonationHome.css';
import Card from './Card'

/* some notes on how this *MIGHT* work:
get items from database
fetch("BACKEND.js")
  .then(res => res.json()) 
  run through each item in the database and display them in the brwoser grid/map
  .then((result) => { getCard(result); })

  In the case that there are filters, the items displayed will only be shown based on said filter.
*/

function ProductDonationHome() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    // if (error) {
    //     return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Loading...</div>;
    // } else {
        return (
            <div className="productDonationHome">
                <div className="filters">
                    <h1>Filters</h1>
                    <div class="checkbox">
                        <label><input type="checkbox" rel="clothes" /*onchange="change();"*//>Clothes</label>
                    </div>
                    <div class="checkbox">
                        <label><input type="checkbox" rel="food" /*onchange="change();"*//>Food</label>
                    </div>
                </div>
                <div className="split"></div>
                <div className="items">
                    {items.map(item => <Card key={item.name} item={item} /> )}
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
