import React, { Component } from 'react';
import './FundraiserPost.css';
import { Button } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Report from './Report.js';
import axios from 'axios';

/*
**  ProductPost.js
**
**  This page is for the details of any singular item from backend
*/
class ProductPost extends Component {
  state = {
    items: [], // saves entire list of products from database
    item: {}  // saves a single product which will be displayed
  }

  componentDidMount()
  {
    // calls api to get list of all products from database
    axios.get(`/api`)
          .then(res => {
            const items = res.data;
            this.setState({ items }); // sets the array with all database items

            let pageName = this.props.match.params.name; // gets the url parameter
            let singleProduct;
            if(this.state.item !== undefined)
            {
              // sets the variable to the found product. Product is found by comparing all product names to the url paramter
              singleProduct = this.state.items.find((product) => {return product.name == pageName})
            }
            this.setState({item: singleProduct}); // sets the state of the single product variable with the found product
    })
  }

  render() {
    console.log(this.state.item);
    const productImage = '../images/' + this.state.item.productImage;
    const name = this.state.item.name;
    const description = this.state.item.description;

    return (
      <div>
        <div className="topSection">
          <img src={productImage} onError={(e) => {
                        e.target.src = '../images/charity.png' // fallback image
                    }} alt="" />
          <div className="donationPrompt">
            <div className="textArea">
              <textarea>Send a message...</textarea>
            </div>
            <div className="donateButton">
              <Button variant='outlined'>Message</Button>
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h2>{name}</h2>
            </div>
            <div className="starRating">
                  <FavoriteBorder className="star" />
                        <p>
                          {/* <strong>{likes}</strong> */}
                        </p>
            </div>
            {/* <div className="spamProduct">
              <Report />
            </div> */}
          </div>
            <h3>{description}</h3>
        </div>
      </div>
    )
  }
}
export default ProductPost;