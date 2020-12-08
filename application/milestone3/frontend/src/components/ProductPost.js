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
        <div className="topBar">


          <div className="editButton">
            <Button variant='outlined'>Edit</Button>
          </div>

          <div className="leftSide">
            <div className="saveButton">
              <Button variant='outlined'>Save</Button>
            </div>

            <div className="deleteButton">
              <Button variant='outlined'>Delete</Button>
            </div>
          </div>


        </div>
        <div className="topSection">
          <img src={productImage} className="productImage" onError={(e) => {
            e.target.src = '../images/charity.png' // fallback image
          }} />


          <div className="descriptionPart">
            <div className="heading">
              <div className="productTitle">
                <h2>{name}</h2>
              </div>
              <div className="starRating">
                <FavoriteBorder className="star" />
                <p>
                  <strong>5</strong>
                </p>
              </div>
              <div className="spamProduct">
                <Report />
              </div>
            </div>
            <div className="userName">
              john_doe
            </div>
            <h3>{description}</h3>
          </div>

        </div>
        <div className="bottomSection">
          <div className="donationPrompt">
            <div className="textArea">
              <textarea placeholder="Send a message..."  ></textarea>
            </div>
            <div className="donateButton">
              <Button variant='outlined'>Message</Button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
export default ProductPost;