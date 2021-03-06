import React, { Component } from 'react';
import './css/FundraiserPost.css';
import { Button } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Report from './Report.js';
import axios from 'axios';
import user from '../images/user.jpg';

import Popup from 'reactjs-popup';
import currentUser from './backend/currentUser.js';
import deleteProductsFunction from './backend/deleteProduct.js';
import editPost from './backend/editPost.js';

/*
**  ProductPost.js
**
**  This page is for the details of any singular item from backend
*/
class ProductPost extends Component {
  state = {
    items: [], // saves entire list of products from database
    item: {},  // saves a single product which will be displayed
    owner: {} // saves the owner of the product
  }

  componentDidMount() {
    // calls api to get list of all products from database
    axios.get(`/api`)
      .then(res => {
        const items = res.data;
        this.setState({ items }); // sets the array with all database items

        let pageName = this.props.match.params.id; // gets the url parameter
        let singleProduct;
        if (this.state.item !== undefined) {
          // sets the variable to the found product. Product is found by comparing all product names to the url paramter
          singleProduct = this.state.items.find((product) => { return product.id == pageName })

          // add logic to find owner of product from users table
          // similar code to searching api
          let user;
          let searchable = {};
          searchable["searchEmail"] = singleProduct.owner; // login searches registered user database by email
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
        this.setState({ item: singleProduct }); // sets the state of the single product variable with the found product
      })
  }

  deletePost() {
    console.log(this.props);
    let currentUserEmail = currentUser.getUser().email;
    let currentProfileEmail = this.state.owner.email;

    if ((currentUserEmail.localeCompare("admin@admin.com") === 0) || (currentUserEmail.localeCompare(currentProfileEmail) === 0)) // edit profile if current user is profile owner or an admin
    {
      return (
        <Popup
          contentStyle={{width: "auto"}}
          trigger={<button className="postButton"> Delete Post </button>}
          modal
          nested
        >
          {close => (
            <div className="popup">
              <button className="close" onClick={close}>
                &times;
            </button>
              <div className="header"> <strong> Delete Post </strong></div>
              <div className="header"> <strong> This Action Cannot Be Undone </strong></div>
              <div className="content">
                <form id="deleteUserForm" method="post">
                  <label><strong>Type "YES" to Confirm Deletion </strong></label>
                  <input type="text" name="response" placeholder="YES" />
                  <br />
                </form>
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    let pageRedirect = deleteProductsFunction(this.props.match.params.id);

                    if (pageRedirect) {
                      console.log("HERE");
                      window.location.replace('/');
                      //history.push('/');
                    }
                  }}
                >DELETE
              </button>
              </div>

            </div>
          )}
        </Popup>
      )
    }
  }

  editPost() {
    let currentUserEmail = currentUser.getUser().email;
    let currentProfileEmail = this.state.owner.email;

    if ((currentUserEmail.localeCompare("admin@admin.com") === 0) || (currentUserEmail.localeCompare(currentProfileEmail) === 0)) // edit profile if current user is profile owner or an admin
    {
      return (
        <Popup
          contentStyle={{width: "auto"}}
          trigger={<button className="postButton"> Edit Post </button>}
          modal
          nested
        >
          {close => (
            <div className="popup">
              <button className="close" onClick={close}>
                &times;
            </button>
              <div className="header"> <strong> Edit Post </strong></div>
              <div className="content">
                <form id="editUserForm" method="post">
                  <label><strong>Title: </strong></label>
                  <input type="text" name="name" placeholder={this.state.item.name} />

                  <br />
                  <label><strong>Description: </strong></label>
                  <input type="text" name="description" placeholder={this.state.item.description} />

                  <br />
                  <label><strong>Type: </strong></label>
                  <select name="productType" id="productType">
                    <option value="default" selected disabled>Please select a type</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Food">Food</option>
                    <option value="Other">Other</option>
                  </select>

                  <br />
                  <label><strong>New Post Image: </strong></label>
                  <input type="file" id="productImage" accept="image/jpg,image/jpeg,image/png" />
                </form>
              </div>
              <div className="actions">

                {/* This posts the input data into the backend */}
                <button
                  className="button"
                  onClick={() => { editPost(this.state.item) }}
                >SUBMIT
              </button>
              </div>

            </div>
          )}
        </Popup>
      )
    }
  }

  render() {
    console.log(this.state);
    const productItem = this.state.item;
    const productOwner = this.state.owner;

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
          <img class="productImg" src={productItem.productImage} onError={(e) => {
            e.target.src = '../images/charity.png' // fallback image
          }} alt="" />
          <div className="donationPrompt">
            {/* Owner imformation*/}
            {/*<img src={productOwner.userImage} onError={(e) => {e.target.src = user}} alt=""/>*/}
            <div className="productTitle">
              <h2>{productOwner.name}</h2>
              <h2>Location: {productOwner.zipcode}</h2>
              <h2>Contact: {productOwner.email}</h2>
              {this.deletePost()}
              {this.editPost()}
            </div>
            <h3>{productItem.description}</h3>
          </div>

        </div>
        <div className="bottomSection">
          <div className="heading">
            <div className="productTitle">
              <h1>{productItem.name}</h1>
            </div>
            <div className="starRating">
              <FavoriteBorder className="star" />
              <h3>Category: {productItem.productType}</h3>
              <p>
                {/* <strong>{likes}</strong> */}
              </p>
            </div>
          </div>
          <h2>{productItem.description}</h2>
        </div>

      </div>
    )
  }
}
export default ProductPost;