import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './Products.css';

/*
**  Products.js
**
**  This displays a map of all the available products from the database
**  and should allow the user to filter and sort the map.
*/
class Products extends Component {
    // The items that will appear in the map.
    state = {
        items: []
      }

      constructor(props) {
        super(props);
        this.filterClothes = this.filterClothes.bind(this);
        this.filterFurniture = this.filterFurniture.bind(this);
        this.allProducts = this.allProducts.bind(this);
      }

    //gets the whole list of items from the backend.
    componentDidMount() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

    //The next three functions filter the map based on categories
    filterClothes() {
        axios.post("api/filterClothes", {"clothes": "cloth"})
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                const items = result.data.products;
                this.setState({ items });
            }
        })
        .catch(exception => {
            alert(exception);
        })
    }
    filterFurniture() {
        axios.post("api/filterFurniture", {"furniture": "furniture"})
        .then((result) => {
            if(!result.data.success){
                alert("Failed Search");
            }else{
                const items = result.data.products;
                this.setState({ items });
            }
        })
        .catch(exception => {
            alert(exception);
        })
    }
    allProducts() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
    }

  render() {
    return (
        <div className="Products">

            {/* left sticky side of filters and sort bys */}
            <div className="filters">
                <h1 className="leftSide">Filters</h1>
                <div className="checkbox">
                    <label><input type="checkbox" rel="clothes" onClick={this.filterClothes}/>Clothes</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" rel="furniture" onClick={this.filterFurniture}/>Furniture</label>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" rel="allItems" onClick={this.allProducts}/>All Items</label>
                </div>            
            </div>

            <div className="split"></div>

            {/* map of items from backend */}
            <div className="items">
                {this.state.items.map(item => 
                    <Card name={item.name} description={item.description} productImage={item.productImage}/>
                )}
            </div>
        </div>
    );
  }
}
export default Products;