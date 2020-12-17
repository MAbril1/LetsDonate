import React, { Component } from 'react';
import './css/FundraiserPost.css';
import { Button } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import Report from './Report.js';
import axios from 'axios';
import user from '../images/user.jpg';
import currentUser from './backend/currentUser.js';

/*
**  FundraiserPost.js
**
**  This page is for the details of any singular fundraiser from backend
*/
class FundraiserPost extends Component {
  state = {
    items: [], // saves entire list of products from database
    item: {},  // saves a single product which will be displayed
    owner: {}, // saves the owner of the product
    random: 0 // stores random raised amount
  }

  componentDidMount() {
    // calls api to get list of all products from database
    axios.get(`/api/Fundraisers`)
      .then(res => {
        const items = res.data;
        this.setState({ items }); // sets the array with all database items


        let pageName = this.props.match.params.id; // gets the url parameter
        let singleFund;
        if (this.state.item !== undefined) {
          // sets the variable to the found product. Product is found by comparing all product names to the url paramter
          singleFund = this.state.items.find((fund) => { return fund.id == pageName })

          // add logic to find owner of product from users table
          // similar code to searching api
          let user;
          let searchable = {};
          searchable["searchEmail"] = singleFund.owner; // login searches registered user database by email
          axios.post('/api/loginUser', searchable)
            .then((result) => {
              if (!result.data.success) {
                alert("Failed Search");
              }
              else {
                user = result.data.users[0]; // returns the data from the database
                this.setState({ owner: user });
              }
            })

        }
        this.setState({ item: singleFund }); // sets the state of the single product variable with the found product

        // generates a random raised amount
        let min = 0;
        let max = this.state.item.requiredAmount;
        let rand = parseInt(min + (Math.random() * (max - min)));
        this.setState({ random: this.state.random + rand });
        //
      })
  }

  endorsePost(fundraiserItem) {
    let tempUserEmail = "noemail@email.com";

    if (tempUserEmail.localeCompare(currentUser.getUser().email) !== 0) // checks if there is a current user
    {
      return (
        <button className="postButton" onClick={() => {
          let searchable = {};
          searchable["endorsement"] = fundraiserItem.endorsement + 1; // login searches registered user database by email
          searchable["id"] = fundraiserItem.id;
          axios.post('/api/updateEndorsement', searchable)
            .then((result) => {
              if (!result.data.success) {
                alert("Failed Search");
              }
              else {
                window.location.reload();
              }
            })
        }}> Endorse </button>
      )
    }
  }

  render() {
    let fundraiserItem = this.state.item;
    let productOwner = this.state.owner;

    let receviedDonations = this.state.random; // random value

    // code to update progress bar
    if (document.getElementById("myBar") !== null) {
      let elem = document.getElementById("myBar");
      let width = parseInt((receviedDonations / fundraiserItem.requiredAmount) * 100); // percentage
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
    //

    return (
      <div>
        <div className="topSection">
          <img src={fundraiserItem.image} onError={(e) => { e.target.src = '../images/charity.png' }} alt="" />
          <div className="donationPrompt">
            <div className="amountRequired">
              <h3>${receviedDonations} out of ${fundraiserItem.requiredAmount} raised.</h3>
              <div id="myProgress">
                <div id="myBar"></div>
              </div>
            </div>

            {/* Owner imformation*/}
            {/*<img src={productOwner.userImage} onError={(e) => {e.target.src = user}} alt=""/>*/}
            <div className="productTitle">
              <h2>{productOwner.name}</h2>
              <h2>Location: {productOwner.zipcode}</h2>
              <h2>Contact: {productOwner.email}</h2>
              {/*this.deletePost()*/}
              {/*this.editPost()*/}

            </div>

            <div className="donateButton">
              <Button variant='outlined'>Donate Now</Button>
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h1>{fundraiserItem.title}</h1>
            </div>
            <div className="starRating">
              <Star className="star" />
              <p>
                <strong>{fundraiserItem.endorsement}</strong>
              </p>
              {this.endorsePost(fundraiserItem)}
            </div>
            {/* <div className="spamProduct">
              <Report />
            </div> */}
          </div>
          <h2>{fundraiserItem.description}</h2>
        </div>
      </div>
    )
  }
}
export default FundraiserPost;