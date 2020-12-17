import React, { Component } from 'react';
import FundraiserCard from './FundraiserCard';
import candies from '../images/candies.jpg';
import clinic from '../images/clinic.jpg';
import college from '../images/college.jpg';
import { Link } from 'react-router-dom';
import '../App.css';
import homeless from '../images/homeless.jpg';
import city from '../images/city.jpg';
import grocery from '../images/grocery.jpg';
import travel from '../images/travel.jpg';
import './css/Fundraisers.css';
import axios from 'axios';
import { Form, Label, Input, FormGroup, CustomInput } from 'reactstrap';
import Popup from 'reactjs-popup';

import currentUser from './backend/currentUser.js';
import loginData from './backend/loginBackend.js';

/*
**  Fundraiser.js
**
**  This displays a list of all the available fundraiser from the database
**  and should allow the user to filter and sort the list.
*/
class Fundraisers extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    axios.get(`/api/Fundraisers`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })
  }

  createPost() {
    var title;
    var description;
    var amountRequired;
    var endorsement = 0;
    var owner = currentUser.getUser().email;

    // edit profile if current user is profile owner or an admin

    let tempUserEmail = "noemail@email.com";

    if (tempUserEmail.localeCompare(currentUser.getUser().email) !== 0) // checks if there is a current user, if there isn't show login button
    {
      return (
        <Popup
          contentStyle={{width: "auto"}}
          trigger={<button className="postButton"> Create a new Fundraiser </button>}
          modal
          nested
        >
          {close => (
            <div className="popup">
              <button className="close" onClick={close}>
                &times;
                  </button>
              <div className="header"> <strong>CREATE NEW FUNDRAISER </strong></div>
              <div className="content">
                <Form id='newFundraiserForm'>
                  <FormGroup>
                    <Label><strong>Title: </strong></Label>
                    <Input value={title}
                      onChange={(word) => {
                        title = (word.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <br />
                    <Label><strong>Description: </strong></Label>
                    <Input className="descriptionText" value={description}
                      onChange={(des) => {
                        description = (des.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <br />
                    <Label><strong>Amount Required in USD: </strong></Label>
                    <Input value={amountRequired}
                      onChange={(productType) => {
                        amountRequired = (productType.target.value);
                      }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <br />
                    <CustomInput type="file" id="productImage" accept="image/jpg,image/jpeg,image/png" />
                  </FormGroup>
                </Form>
              </div>
              <div className="actions">

                {/* This posts the input data into the backend */}
                <button
                  className="button"
                  onClick={() => {
                    if (title.length > 0 && description.length > 0) {
                      var productImage = document.getElementById("productImage");
                      var form = new FormData();
                      form.append("imageFile", productImage.files[0]);
                      form.append("title", title);
                      form.append("description", description);
                      form.append("requiredAmount", amountRequired);
                      form.append("endorsement", 0);
                      form.append("owner", owner);
                      axios.post("/api/postFundraiser", form, { headers: { 'content-type': "multipart/form-data" } })
                        .then((result) => {
                          if (result.data.success) {
                            alert("Successfully Posted");
                          } else {
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
      )
    }
    else // popup to login
    {
      return (
        <div>
        <Popup contentStyle={{width: "auto"}}
            trigger={<button className="postButton"> Create a new Fundraiser </button>}
            modal
            nested
        
        >
            {close => (
                <div>
                <form id="loginForm" className='login-form'>
                    <h1>Login to Let's Donate</h1>
                        <input
                            className='email'
                            type='email'
                            name='email'
                            placeholder="Email"
                        />
                        <input
                            className='password'
                            type='password'
                            name='password'
                            placeholder="Password"
                        />
                        <br/>
                        <input
                            className='login-button'
                            type='button'
                            value='Log In'
                            onClick={() => {loginData()}}
                            // calls function from loginBackend.js and passes login information
                        />
                        <br/>
                        <Link 
                            className='signup-button' 
                            type='button'
                            to={"/register"}
                            onClick={close}
                        >SignUp</Link>
                        <br/>
                        <Link
                            className='reset-password-button'
                            type='button'
                            to={"/recovery"}
                            onClick={close}
                        >Reset Password</Link>
                </form>
                </div>
            )}
        </Popup>
        {/* This button takes a user to their user page if their signed in */}
        { /* <Link className='userLink' to={"/User"}><AccountCircleIcon /></Link> */}
    </div>
    )
    }

  }

  render() {

    return (
      <div>
        <div className="donationHeading">
          <div className="heading">
            <h1>Fundraisers</h1>
          </div>
          <div classname="fundButton">

            {/* <button
                    className="button"
                    onClick={() => { }}
                  >Create Fundraiser
            </button> */}
          </div>
        </div>

        {this.createPost()}
        <div>
          {this.state.items.map(item =>
            <FundraiserCard id={item.id} title={item.title} description={item.description} image={item.image} endorsement={item.endorsement} requiredAmount={item.requiredAmount} />
          )}
        </div>
      </div>
    );
  }
}
export default Fundraisers;