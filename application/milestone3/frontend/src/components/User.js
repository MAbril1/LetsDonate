import React, { Component } from 'react';
// import user from '../images/user.jpg';
import './User.css';
import './PopUps.css';
import Star from "@material-ui/icons/Star";
import FundraiserCard from './FundraiserCard';
import city from '../images/city.jpg';
import { Link } from 'react-router-dom';
import Card from './Card';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Report from './Report.js';
import axios from 'axios';
import { Form, Label, Input, FormGroup, CustomInput } from 'reactstrap';

import currentUser from './backend/currentUser.js'; // helper functions to set and get current logged in user
import editUserData from './backend/editUser.js';

/*
**  User.js
**
**  This displays a users dashboard.
**  This should also contain the items and posts they have put up (if any).
*/

class User extends Component {

  editUserProfile()
  {    

    return (
      <Popup
      trigger={<button className="postButton"> Edit Profile </button>}
      modal
      nested
      >
      {close => (
        <div className="popup">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> <strong> Edit Profile </strong></div>
          <div className="content">
          <form id="editUserForm" method="post">
              <label><strong>Name: </strong></label>
              <input type="text" name="newName" placeholder={currentUser.getUser().name}/>

              <br />
              <label><strong>Email: </strong></label>
              <input type="text" name="newEmail" placeholder={currentUser.getUser().email}/>

              <br />
              <label><strong>Zipcode: </strong></label>
              <input type="number" name="newZipcode" placeholder={currentUser.getUser().zipcode}/>

              <br />
              <label><strong>Current Password: </strong></label>
              <input type="password" name="currentPassword" placeholder="password"/>

              <br />
              <label><strong>New Password: </strong></label>
              <input type="password" name="newPassword" placeholder="password"/>

              <br />
              <label><strong>New Profile Image: </strong></label>
              <input type="file" id="newProfileImage" accept="image/jpg,image/jpeg,image/png"/>
          </form>
          </div>
          <div className="actions">

            {/* This posts the input data into the backend */}
            <button
              className="button"
              onClick={() => {editUserData()}}
          >
            SUBMIT
          </button>
        </div>

      </div>
    )}
    </Popup>
    )
  }

  render() {
    let userImage;

    if(currentUser.getUser().userImage != null)
    {
      userImage = '../images/' + currentUser.getUser().userImage;
    }
    else
    {
      userImage = '../images/user.png';
    }

    var productName;
    var description;
    var type;
    return(
      <div className="profile"> 
        <div className="topSection">
          <div className="topLeft">

            {/* Users profile picture */}
            <div className="userImage">
                <img src={userImage} alt="" />
            </div>

            {/* User's username and rating */}
            <div className="userName">
              <h1>{currentUser.getUser().name}</h1>
              <h2>{currentUser.getUser().email}</h2>
              <h2>Location: {currentUser.getUser().zipcode}</h2>
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>

            {/* Report button */}
            {/* <Report /> */}
          </div>
          <div className="topRight">
          
          </div>
        </div>
        <div className="bottomSection">
          {/* Edit user profile */}
          {this.editUserProfile()}
          {/* This is a pop up for creating a new post */}
          <Popup
            trigger={<button className="postButton"> Create a new Post </button>}
            modal
            nested
          >
            {close => (
              <div className="popup">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> <strong>CREATE A POST </strong></div>
                <div className="content">
                <Form>
                    <FormGroup>
                        <Label><strong>Name of Product: </strong></Label>
                        <Input value={productName}
                            onChange={(word) => {
                                productName=(word.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                      <br />
                        <Label><strong>Description of Product: </strong></Label>
                        <Input className="descriptionText" value={description}
                            onChange={(des) => {
                                description=(des.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <br />
                        <Label><strong>Type (Example: Furniture, Cloth): </strong></Label>
                        <Input value={type}
                            onChange={(productType) => {
                                type=(productType.target.value);
                            }}
                        />
                    </FormGroup>
                    <FormGroup>
                      <br />
                        <CustomInput type="file" id="productImage" accept="image/jpg,image/jpeg,image/png"/>
                    </FormGroup>
                </Form>
                </div>
                <div className="actions">

                  {/* This posts the input data into the backend */}
                  <button
                    className="button"
                    onClick={() => {
                      if(productName.length>0 && description.length>0){
                        var productImage = document.getElementById("productImage");
                        var form = new FormData();
                        form.append("imageFile", productImage.files[0]);
                        form.append("name", productName);
                        form.append("description", description);
                        form.append("productType", type);
                        console.log(form.getAll("name"), form.getAll("imageFile"));
                        axios.post("/api/postProduct", form, { headers: { 'content-type': "multipart/form-data"}})
                        .then((result) => {
                            if(result.data.success){
                                alert("Successfully Posted");
                            }else{
                                alert("Post Failure Occurred");
                            }
                        })
                        .catch(exception => {
                            alert("Post Failure Occurred");
                        })
                    }
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
                <button className="button"
                    onClick={() => {
                      
                    }}
                  >
                    Trouble Posting?
                  </button>
              </div>
            )}
          </Popup>

          {/* These are lists of the items and fundraisers a user has posted */}
          <h2>ITEMS POSTED</h2>
          <div className="scrollmenu">
            <Card name="Bike" description="Three year old bike available in San Bruno for pick up. Please feel free to reach out. Bike is in great condition" productImage="bike.jpg"/>
            <Card name="Shirt" description="One year old shirt available in Sunnyvale for pick up. Please feel free to reach out. Shirt is in great condition with no marks." productImage="shirt.jpg"/>
          </div>
          <h2>FUNDRAISERS POSTED</h2>
          <div className="scrollmenu">
            <FundraiserCard title="Help required for new city Expenses" 
                                    description="Recently shifted to the city of New York and it is highly difficult for me to manage daily expenses."
                                    rating={2.6}
                                    requiredAmount="$3500"
                                    image={city}/>
          </div>
        </div>
      </div>

       
      )
  }
}
export default User;