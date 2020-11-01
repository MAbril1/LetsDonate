import React from 'react';
import './ProductDonationHome.css';
import Card from './Card'

import Grid from '@material-ui/core/Grid';

/* some notes on how this *MIGHT* work:
get items from database
fetch("BACKEND.js")
  .then(res => res.json()) 
  run through each item in the database and display them in the brwoser grid/map
  .then((result) => { getCard(result); })

  In the case that there are filters, the items displayed will only be shown based on said filter.
*/

function ProductDonationHome() {
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
}

export default ProductDonationHome
