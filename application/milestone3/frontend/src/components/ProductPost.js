import React, { Component } from 'react';
import './FundraiserPost.css';
import { Button } from "@material-ui/core";
import Star from "@material-ui/icons/Star";

class ProductPost extends Component {
  
  render() {
        const productImage = '../images/' + this.props.location.productImage;
        const name = this.props.location.name;
        const description = this.props.location.description;

    return (
      <div>
        <div className="topSection">
          <img src={productImage} alt="" />
          {console.log('../images/' + this.props.productImage)}
          {console.log(productImage)}
        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h2>{name}</h2>
            </div>
            <div className="starRating">
                  <Star className="star" />
                        <p>
                          {/* <strong>{likes}</strong> */}
                        </p>
            </div>
            <div className="spamProduct">
              <Button variant='outlined'>Report Spam</Button>
            </div>
          </div>
            <h3>[This is the description]{description}</h3>
        </div>
      </div>
    )
  }
}
export default ProductPost;