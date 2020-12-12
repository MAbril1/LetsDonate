import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from './Card.js';
import './css/Products.css';

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

    //   constructor(props) {
    //     super(props);
    //     this.filterClothes = this.filterClothes.bind(this);
    //     this.filterFurniture = this.filterFurniture.bind(this);
    //     this.allProducts = this.allProducts.bind(this);
    //   }

    //gets the whole list of items from the backend.
    componentDidMount() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
      }

    // //The next three functions filter the map based on categories
    // filterClothes() {
    //     axios.post("api/filterClothes", {"clothes": "cloth"})
    //     .then((result) => {
    //         if(!result.data.success){
    //             alert("Failed Search");
    //         }else{
    //             const items = result.data.products;
    //             this.setState({ items });
    //         }
    //     })
    //     .catch(exception => {
    //         alert(exception);
    //     })
    // }
    // filterFurniture() {
    //     axios.post("api/filterFurniture", {"furniture": "furniture"})
    //     .then((result) => {
    //         if(!result.data.success){
    //             alert("Failed Search");
    //         }else{
    //             const items = result.data.products;
    //             this.setState({ items });
    //         }
    //     })
    //     .catch(exception => {
    //         alert(exception);
    //     })
    // }
    allProducts() {
        axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items });
          })
    }

    setCategory(filterCategory)
    {      
        // change state based on checked box
        let checkBox = document.getElementById(filterCategory);
        if(checkBox.checked == true)
        {
            // filters to searched category
            let countCategory = this.state.items.filter((obj) => {return obj.productType === filterCategory});
            const items = countCategory; 
            this.setState({items});
            //console.log("State:", this.state);
            //console.log("Filtered", countCategory);
        }
        else this.allProducts();
    }

    getCategories()
    {
        // gets the list of categories and the count in each
        let occurrences = { };
        for(let i = 0, j = this.state.items.length; i < j; i++) 
        {
            occurrences[this.state.items[i].productType] = (occurrences[this.state.items[i].productType] || 0) + 1;
        }
        //console.log(occurrences);

        // returns a map of the categories and their count
        return (
            Object.keys(occurrences).sort().map(item => 
            <div className="checkbox"><label><input type="checkbox" id={item} onClick={() => {this.setCategory(item)}}/>{item} ({occurrences[item]})</label></div>
            )
        );
    }

  render() {
    return (
        <div className="Products">

            {/* left sticky side of filters and sort bys */}
            <div className="filters">
                <h1 className="leftSide">Filters</h1>
                {/* Calls function to get the categories loaded to the state*/}
                {this.getCategories()}            
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