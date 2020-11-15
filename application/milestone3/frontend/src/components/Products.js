import React, { Component, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from './Card.js';

class Products extends Component {
    state = {
        items: []
      }

      componentDidMount() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

  render() {
    return (
        <div className="productDonationHome">    
            <div className="filters">
                <h1>Filters</h1>
                {/* <div className="checkbox">
                    <label><input type="checkbox" rel="clothes" onClick={() => filterClothes()}/>Clothes</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" rel="furniture" onClick={() => filterFurniture()}/>Furniture</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" rel="allItems" onClick={() => allProducts()}/>All Items</label>
                </div>             */}
            </div>
            <div className="split"></div>
            <div className="items">
                {this.state.items.map(item => <Card name={item.name} description={item.description} productImage={item.productImage}/> )}
            </div>
        </div>
    );
  }
}
export default Products;