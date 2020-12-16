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

     // edit profile if current user is profile owner or an admin
    
      return (
        <Popup
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
                <Form>
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
                      form.append("image", productImage.files[0]);
                      form.append("title", title);
                      form.append("description", description);
                      form.append("requiredAmount", amountRequired);
                      form.append("endorsement", 0);
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
          <div className="items">
                {this.state.items.map(item => 
                    <FundraiserCard title={item.title} description={item.description} image={item.image} endorsement={item.endorsement} requiredAmount={item.requiredAmount}/>
                )}
          </div>
          <FundraiserCard title="Hospital Expenses" 
                        description="Money required for the hospital and medicine expenses."
                        endorsements={4600}
                        requiredAmount="$10,000"
                        image={clinic}/>
        <FundraiserCard title="College Expenses" 
                                description="Unable to pay tuition fees. Need money to pay all the money to the university."
                                endorsements={4200}
                                requiredAmount="$5,000"
                                image={college}/>
        <FundraiserCard title="Money for Candies" 
                                description="Money required to buy whole lot of candies."
                                endorsements={40}
                                requiredAmount="$100,000"
                                image={candies}/>
         <FundraiserCard title="Help required for new city Expenses" 
                                description="Recently shifted to the city of New York and it is highly difficult for me to manage daily expenses."
                                endorsements={260}
                                requiredAmount="$3500"
                                image={city}/>
          <FundraiserCard title="Recently turned Homeless" 
                                description="Lost house during forest fires and lost house. Turned homeless and therefore need money to manage apartment rent."
                                endorsements={5000}
                                requiredAmount="$4,000"
                                image={homeless}/>
          <FundraiserCard title="Help required for travel Expenses" 
                                description="Recently got admission in a renowned university in USA for free under a scholarship. Unable to manage flight expenses for travel. PLEASE HELP."
                                endorsements={4100}
                                requiredAmount="$3,000"
                                image={travel}/>
          <FundraiserCard title="Grocery Shopping Difficulty" 
                                description="Lost job due to covid-19 and it became really difficult to feed a family of 5 members. Help required to manage daily needs and medicines for the family. PLEASE HELP!!!"
                                endorsements={3900}
                                requiredAmount="$5,000"
                                image={grocery}/>
      </div>
    );
  }
}
export default Fundraisers;