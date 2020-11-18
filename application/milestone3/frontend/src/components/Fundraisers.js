import React, { Component } from 'react';
import FundraiserCard from './FundraiserCard';
import candies from '../images/candies.jpg';
import clinic from '../images/clinic.jpg';
import college from '../images/college.jpg';

class Fundraisers extends Component {
  render() {
    return (
      <div>
        <div className="donationHeading">
          <h1>Fundraisers</h1>
        </div>
        <FundraiserCard title="Hospital Expenses" 
                        description="Money required for the hospital and medicine expenses."
                        rating={4.6}
                        requiredAmount="$10,000"
                        image={clinic}/>

        <FundraiserCard title="College Expenses" 
                                description="Unable to pay tuition fees. Need money to pay all the money to the university."
                                rating={4.2}
                                requiredAmount="$5,000"
                                image={college}/>

        <FundraiserCard title="Money for Candies" 
                                description="Money required to buy whole lot of candies."
                                rating={0.4}
                                requiredAmount="$100,000"
                                image={candies}/>
      </div>
    );
  }
}
export default Fundraisers;