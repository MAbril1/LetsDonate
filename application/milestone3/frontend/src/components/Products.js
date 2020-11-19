import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './Products.css';

class Products extends Component {
    state = {
        items: []
      }

      constructor(props) {
        super(props);
        this.filterClothes = this.filterClothes.bind(this);
        this.filterFurniture = this.filterFurniture.bind(this);
        this.allProducts = this.allProducts.bind(this);
      }

    componentDidMount() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

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
            <div className="items">
                {this.state.items.map(item => <Link className='link' to={{
                    pathname:"/ProductPost",
                    name: item.name,
                    description: item.description,
                    productImage: item.productImage
                    }}><Card name={item.name} description={item.description} productImage={item.productImage}/></Link> )}
            </div>
        </div>
    );
  }
}
export default Products;