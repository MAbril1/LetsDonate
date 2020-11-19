import React, { Component } from 'react';
import './FundraiserPost.css';
import { Button } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import Report from './Report.js';

class FundraiserPost extends Component {
  
  render() {
        const image = this.props.location.details.image.image;
        const title = this.props.location.details.title.title;
        const requiredAmount = this.props.location.details.requiredAmount.requiredAmount;
        const description = this.props.location.details.description.description; 
        const endorsements = this.props.location.details.endorsements.endorsements;

    return (
      <div>
        <div className="topSection">
          <img src={image} alt="" />
          <div className="donationPrompt">
            <div className="amountRequired">
              <h3>$2500 out of {requiredAmount} raised.</h3>
            </div>

            <div className="textArea">
              <textarea>Send money with a message/wishes...</textarea>
            </div>

            <div className="donateButton">
              <Button variant='outlined'>Donate Now</Button>
            </div>
          </div>
          {console.log(this.props.location.details.description.description)}
        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h2>{title}</h2>
            </div>
            <div className="starRating">
                  <Star className="star" />
                        <p>
                          <strong>{endorsements}</strong>
                        </p>
            </div>
            <div className="spamProduct">
              <Report />
            </div>
          </div>
            <h3>{description}</h3>
        </div>
      </div>
    )
  }
}
export default FundraiserPost;