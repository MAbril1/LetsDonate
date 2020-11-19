import React, { Component } from 'react';
import './FundraiserPost.css';
import { Button } from "@material-ui/core";
import Star from "@material-ui/icons/Star";

class ProductPost extends Component
{
  render(){
    const image = "../images/" + this.props.location.productImage;
    const title = this.props.location.name;
    const description = this.props.location.description;
    
    return(
      <div>
        <div className="topSection">
          <img src={image} alt="" />
          <div className="donationPrompt">
            <div className="textArea">
              <textarea>Send a message...</textarea>
            </div>
            <div className="donateButton">
              <Button variant='outlined'>Message</Button>
            </div>
          </div>
          {console.log(this.props.location.description)}
        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h2>{title}</h2>
            </div>
            <div className="spamProduct">
              <Button variant='outlined'>Report Spam</Button>
            </div>
          </div>
            <h3>{description}</h3>
        </div>
      </div>
    )
    
  }
}
export default ProductPost;