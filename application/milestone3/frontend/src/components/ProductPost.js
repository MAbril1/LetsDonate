import React, { Component } from 'react';
import './ProductPost.css';
import { Button } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Report from './Report.js';

/*
**  ProductPost.js
**
**  This page is for the details of any singular item from backend
*/
class ProductPost extends Component {

  render() {
    const productImage = '../images/' + this.props.location.productImage;
    const name = this.props.location.name;
    const description = this.props.location.description;

    return (
      <div>
        <div className="topSection">
          <img src={productImage} onError={(e) => {
            e.target.src = '../images/charity.png' // fallback image
          }} alt="noimage.png" />
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