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
import './Fundraisers.css';

/*
**  Fundraiser.js
**
**  This displays a list of all the available fundraiser from the database
**  and should allow the user to filter and sort the list.
*/
class Fundraisers extends Component {
  render() {
    return (
      <div>
        <div className="donationHeading">
          <h1>Fundraisers</h1>
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